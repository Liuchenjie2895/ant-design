import * as React from 'react';
import { presetPrimaryColors } from '@ant-design/colors';

import { devUseWarning } from '../_util/warning';
import type { DirectionType } from '../config-provider';
import type { ProgressGradient, ProgressProps, StringGradients } from './progress';
import { getSize, getSuccessPercent, validProgress } from './utils';
import { useContext } from 'react';
import { ConfigContext } from '../config-provider';

interface LineProps extends ProgressProps {
  prefixCls: string;
  direction?: DirectionType;
  children: React.ReactNode;
  strokeColor?: string | ProgressGradient;
}

/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
export const sortGradient = (gradients: StringGradients) => {
  let tempArr: any[] = [];
  Object.keys(gradients).forEach((key) => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key],
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(({ key, value }) => `${value} ${key}%`).join(', ');
};

/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
export const handleGradient = (
  strokeColor: ProgressGradient,
  directionConfig?: DirectionType,
): React.CSSProperties => {
  const {
    from = presetPrimaryColors.blue,
    to = presetPrimaryColors.blue,
    direction = directionConfig === 'rtl' ? 'to left' : 'to right',
    ...rest
  } = strokeColor;
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest as StringGradients);
    return { backgroundImage: `linear-gradient(${direction}, ${sortedGradients})` };
  }
  return { backgroundImage: `linear-gradient(${direction}, ${from}, ${to})` };
};

const Line: React.FC<LineProps> = (props) => {
  const {
    prefixCls,
    direction: directionConfig,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = 'round',
    children,
    trailColor = null,
    success,
  } = props;

  const { direction } = useContext(ConfigContext);

  const backgroundProps: React.CSSProperties =
    strokeColor && typeof strokeColor !== 'string'
      ? handleGradient(strokeColor, directionConfig)
      : { backgroundColor: strokeColor };

  const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;

  const trailStyle: React.CSSProperties = {
    backgroundColor: trailColor || undefined,
    borderRadius,
  };

  const mergedSize = size ?? [-1, strokeWidth || (size === 'small' ? 6 : 8)];

  const [width, height] = getSize(mergedSize, 'line', { strokeWidth });

  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Progress');

    warning.deprecated(!('strokeWidth' in props), 'strokeWidth', 'size');
  }

  const percentBorderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : '100px';

  const percentStyle: React.CSSProperties = {
    width: `100%`,
    height,
    borderRadius,
    clipPath:
      direction === 'rtl'
        ? `inset(0 0 0 ${100 - validProgress(percent)}% round ${percentBorderRadius})`
        : `inset(0 ${100 - validProgress(percent)}% 0 0 round ${percentBorderRadius})`,
    ...backgroundProps,
  };

  const successPercent = getSuccessPercent(props);

  const successPercentStyle: React.CSSProperties = {
    width: `100%`,
    height,
    borderRadius,
    clipPath:
      direction === 'rtl'
        ? `inset(0 0 0 ${100 - validProgress(successPercent)}% round ${percentBorderRadius})`
        : `inset(0 ${100 - validProgress(successPercent)}% 0 0 round ${percentBorderRadius})`,
    backgroundColor: success?.strokeColor,
  };

  const outerStyle: React.CSSProperties = {
    width: width < 0 ? '100%' : width,
    height,
  };

  return (
    <>
      <div className={`${prefixCls}-outer`} style={outerStyle}>
        <div className={`${prefixCls}-inner`} style={trailStyle}>
          <div className={`${prefixCls}-bg`} style={percentStyle} />
          {successPercent !== undefined ? (
            <div className={`${prefixCls}-success-bg`} style={successPercentStyle} />
          ) : null}
        </div>
      </div>
      {children}
    </>
  );
};

export default Line;
