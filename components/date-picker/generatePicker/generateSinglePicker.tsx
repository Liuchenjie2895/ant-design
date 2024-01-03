import * as React from 'react';
import { forwardRef, useContext, useImperativeHandle } from 'react';
import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import classNames from 'classnames';
import RCPicker, { type PickerRef } from 'rc-picker';
import type { GenerateConfig } from 'rc-picker/lib/generate/index';
import type { PickerMode } from 'rc-picker/lib/interface';

import type { PickerProps } from '.';
import { useZIndex } from '../../_util/hooks/useZIndex';
import type { InputStatus } from '../../_util/statusUtils';
import { getMergedStatus, getStatusClassNames } from '../../_util/statusUtils';
import type { AnyObject } from '../../_util/type';
import { devUseWarning } from '../../_util/warning';
import { ConfigContext } from '../../config-provider';
import DisabledContext from '../../config-provider/DisabledContext';
import useCSSVarCls from '../../config-provider/hooks/useCSSVarCls';
import useSize from '../../config-provider/hooks/useSize';
import { FormItemInputContext } from '../../form/context';
import useVariant from '../../form/hooks/useVariants';
import { useLocale } from '../../locale';
import { useCompactItemContext } from '../../space/Compact';
import enUS from '../locale/en_US';
import useStyle from '../style';
import { getPlaceholder, mergeAllowClear, transPlacement2DropdownAlign } from '../util';
import Components from './Components';

export default function generatePicker<DateType extends AnyObject>(
  generateConfig: GenerateConfig<DateType>,
) {
  type CustomPickerProps = {
    status?: InputStatus;
    hashId?: string;
    /**
     * @deprecated `dropdownClassName` is deprecated which will be removed in next major
     *   version.Please use `popupClassName` instead.
     */
    dropdownClassName?: string;
    popupClassName?: string;
    rootClassName?: string;
    popupStyle?: React.CSSProperties;
  };
  type DatePickerProps = PickerProps<DateType> & CustomPickerProps;
  type TimePickerProps = Omit<PickerProps<DateType>, 'picker' | 'showTime'> & CustomPickerProps;

  function getPicker<InnerPickerProps extends DatePickerProps>(
    picker?: PickerMode,
    displayName?: string,
  ) {
    const consumerName = displayName === 'TimePicker' ? 'timePicker' : 'datePicker';
    const Picker = forwardRef<PickerRef, InnerPickerProps>((props, ref) => {
      const {
        prefixCls: customizePrefixCls,
        getPopupContainer: customizeGetPopupContainer,
        style,
        className,
        rootClassName,
        size: customizeSize,
        bordered,
        placement,
        placeholder,
        popupClassName,
        dropdownClassName,
        disabled: customDisabled,
        status: customStatus,
        clearIcon,
        allowClear,
        variant: customVariant,
        ...restProps
      } = props;

      const {
        getPrefixCls,
        direction,
        getPopupContainer,
        // Consume different styles according to different names
        [consumerName]: consumerStyle,
      } = useContext(ConfigContext);

      const prefixCls = getPrefixCls('picker', customizePrefixCls);
      const { compactSize, compactItemClassnames } = useCompactItemContext(prefixCls, direction);
      const innerRef = React.useRef<PickerRef>(null);

      const [variant, enableVariantCls] = useVariant(customVariant, bordered);

      const rootCls = useCSSVarCls(prefixCls);
      const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls, rootCls);

      useImperativeHandle(ref, () => innerRef.current!);

      const additionalProps = {
        showToday: true,
      };

      // let additionalOverrideProps: any = {};
      // if (picker) {
      //   additionalOverrideProps.picker = picker;
      // }
      const mergedPicker = picker || props.picker;

      // additionalOverrideProps = {
      //   ...additionalOverrideProps,
      //   ...(showTime ? getTimeProps({ format, picker: mergedPicker, ...showTime }) : {}),
      //   ...(mergedPicker === 'time'
      //     ? getTimeProps({ format, ...props, picker: mergedPicker })
      //     : {}),
      // };
      const rootPrefixCls = getPrefixCls();

      // =================== Warning =====================
      if (process.env.NODE_ENV !== 'production') {
        const warning = devUseWarning(displayName! || 'DatePicker');

        warning(
          picker !== 'quarter',
          'deprecated',
          `DatePicker.${displayName} is legacy usage. Please use DatePicker[picker='${picker}'] directly.`,
        );

        warning.deprecated(!dropdownClassName, 'dropdownClassName', 'popupClassName');

        warning.deprecated(!('bordered' in props), 'bordered', 'variant');
      }

      // ===================== Size =====================
      const mergedSize = useSize((ctx) => customizeSize ?? compactSize ?? ctx);

      // ===================== Disabled =====================
      const disabled = React.useContext(DisabledContext);
      const mergedDisabled = customDisabled ?? disabled;

      // ===================== FormItemInput =====================
      const formItemContext = useContext(FormItemInputContext);
      const { hasFeedback, status: contextStatus, feedbackIcon } = formItemContext;

      const suffixNode = (
        <>
          {mergedPicker === 'time' ? <ClockCircleOutlined /> : <CalendarOutlined />}
          {hasFeedback && feedbackIcon}
        </>
      );

      const [contextLocale] = useLocale('DatePicker', enUS);

      const locale = { ...contextLocale, ...props.locale! };
      // ============================ zIndex ============================
      const [zIndex] = useZIndex('DatePicker', props.popupStyle?.zIndex as number);

      return wrapCSSVar(
        <RCPicker<DateType>
          ref={innerRef}
          placeholder={getPlaceholder(locale, mergedPicker, placeholder)}
          suffixIcon={suffixNode}
          dropdownAlign={transPlacement2DropdownAlign(direction, placement)}
          prevIcon={<span className={`${prefixCls}-prev-icon`} />}
          nextIcon={<span className={`${prefixCls}-next-icon`} />}
          superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
          superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
          transitionName={`${rootPrefixCls}-slide-up`}
          picker={picker}
          {...additionalProps}
          {...restProps}
          // {...additionalOverrideProps}
          locale={locale!.lang}
          className={classNames(
            {
              [`${prefixCls}-${mergedSize}`]: mergedSize,
              [`${prefixCls}-${variant}`]: enableVariantCls,
            },
            getStatusClassNames(
              prefixCls,
              getMergedStatus(contextStatus, customStatus),
              hasFeedback,
            ),
            hashId,
            compactItemClassnames,
            consumerStyle?.className,
            className,
            cssVarCls,
            rootCls,
            rootClassName,
          )}
          style={{ ...consumerStyle?.style, ...style }}
          prefixCls={prefixCls}
          getPopupContainer={customizeGetPopupContainer || getPopupContainer}
          generateConfig={generateConfig}
          components={Components}
          direction={direction}
          disabled={mergedDisabled}
          classNames={{
            popup: classNames(
              hashId,
              cssVarCls,
              rootCls,
              rootClassName,
              popupClassName || dropdownClassName,
            ),
          }}
          popupStyle={{
            ...props.popupStyle,
            zIndex,
          }}
          allowClear={mergeAllowClear(allowClear, clearIcon, <CloseCircleFilled />)}
        />,
      );
    });

    if (displayName) {
      Picker.displayName = displayName;
    }

    return Picker as unknown as (<ValueType>(
      props: React.PropsWithChildren<
        Omit<InnerPickerProps, 'defaultValue' | 'value' | 'onChange'>
      > &
        React.RefAttributes<PickerRef> & {
          defaultValue?: ValueType | null;
          value?: ValueType | null;
          onChange?: (date: ValueType, dates: string | string[]) => void;
        },
    ) => React.ReactElement) & { displayName?: string };
  }

  const DatePicker = getPicker<DatePickerProps>();
  const WeekPicker = getPicker<Omit<DatePickerProps, 'picker'>>('week', 'WeekPicker');
  const MonthPicker = getPicker<Omit<DatePickerProps, 'picker'>>('month', 'MonthPicker');
  const YearPicker = getPicker<Omit<DatePickerProps, 'picker'>>('year', 'YearPicker');
  const TimePicker = getPicker<Omit<TimePickerProps, 'picker'>>('time', 'TimePicker');
  const QuarterPicker = getPicker<Omit<TimePickerProps, 'picker'>>('quarter', 'QuarterPicker');

  return { DatePicker, WeekPicker, MonthPicker, YearPicker, TimePicker, QuarterPicker };
}
