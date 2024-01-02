"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[68713],{868713:function(on,p,e){e.r(p),e.d(p,{scopes:function(){return M}});var h=e(667294),m=e(639389),j=e.n(m),a=e(796586),o=e(707898),S=e(945016),R=e(979331),z=e(988872),D=e(315816),x=e(294047),A=e(75529),M={"badge-demo-basic":{React:h,ClockCircleOutlined:m.ClockCircleOutlined,Avatar:a.C,Badge:o.Z,Space:S.Z},"badge-demo-no-wrapper":{React:h,useState:h.useState,ClockCircleOutlined:m.ClockCircleOutlined,Badge:o.Z,Space:S.Z,Switch:R.Z},"badge-demo-overflow":{React:h,Avatar:a.C,Badge:o.Z,Space:S.Z},"badge-demo-dot":{React:h,NotificationOutlined:m.NotificationOutlined,Badge:o.Z,Space:S.Z},"badge-demo-change":{React:h,useState:h.useState,MinusOutlined:m.MinusOutlined,PlusOutlined:m.PlusOutlined,QuestionOutlined:m.QuestionOutlined,Avatar:a.C,Badge:o.Z,Button:z.ZP,Switch:R.Z,Space:S.Z},"badge-demo-link":{React:h,Avatar:a.C,Badge:o.Z},"badge-demo-offset":{React:h,Avatar:a.C,Badge:o.Z},"badge-demo-size":{React:h,Avatar:a.C,Badge:o.Z,Space:S.Z},"badge-demo-status":{React:h,Badge:o.Z,Space:S.Z},"badge-demo-colorful":{React:h,Badge:o.Z,Divider:D.Z,Space:S.Z},"badge-demo-ribbon":{React:h,Badge:o.Z,Card:x.Z,Space:S.Z},"badge-demo-ribbon-debug":{React:h,Badge:o.Z,Card:x.Z,Space:S.Z},"badge-demo-mix":{React:h,Avatar:a.C,Badge:o.Z,Space:S.Z},"badge-demo-title":{React:h,Avatar:a.C,Badge:o.Z,Space:S.Z},"badge-demo-colorful-with-count-debug":{React:h,Badge:o.Z,Space:S.Z},"badge-demo-component-token":{NotificationOutlined:m.NotificationOutlined,React:h,Avatar:a.C,Badge:o.Z,ConfigProvider:A.ZP,Space:S.Z}}},979331:function(on,p,e){e.d(p,{Z:function(){return tn}});var h=e(97857),m=e.n(h),j=e(9783),a=e.n(j),o=e(805574),S=e.n(o),R=e(513769),z=e.n(R),D=e(667294),x=e(100628),A=e.n(x),M=e(693967),G=e.n(M),B=e(33413),$=e(189265),O=e(73287),J=e(147315),Y=e(947170),P=e(900210),H=e(510274),X=e(548073),k=e(286665),_=e(986943),K=function(n){var t,i,r,d,s,g=n.componentCls,l=n.trackHeightSM,E=n.trackPadding,C=n.trackMinWidthSM,W=n.innerMinMarginSM,I=n.innerMaxMarginSM,u=n.handleSizeSM,v=n.calc,f="".concat(g,"-inner"),w=(0,P.unit)(v(u).add(v(E).mul(2)).equal()),y=(0,P.unit)(v(I).mul(2).equal());return a()({},g,a()({},"&".concat(g,"-small"),(s={minWidth:C,height:l,lineHeight:(0,P.unit)(l)},a()(s,"".concat(g,"-inner"),(t={paddingInlineStart:I,paddingInlineEnd:W},a()(t,"".concat(f,"-checked"),{marginInlineStart:"calc(-100% + ".concat(w," - ").concat(y,")"),marginInlineEnd:"calc(100% - ".concat(w," + ").concat(y,")")}),a()(t,"".concat(f,"-unchecked"),{marginTop:v(l).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),t)),a()(s,"".concat(g,"-handle"),{width:u,height:u}),a()(s,"".concat(g,"-loading-icon"),{top:v(v(u).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),a()(s,"&".concat(g,"-checked"),(r={},a()(r,"".concat(g,"-inner"),(i={paddingInlineStart:W,paddingInlineEnd:I},a()(i,"".concat(f,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(i,"".concat(f,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(w," + ").concat(y,")"),marginInlineEnd:"calc(-100% + ".concat(w," - ").concat(y,")")}),i)),a()(r,"".concat(g,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,P.unit)(v(u).add(E).equal()),")")}),r)),a()(s,"&:not(".concat(g,"-disabled):active"),(d={},a()(d,"&:not(".concat(g,"-checked) ").concat(f),a()({},"".concat(f,"-unchecked"),{marginInlineStart:v(n.marginXXS).div(2).equal(),marginInlineEnd:v(n.marginXXS).mul(-1).div(2).equal()})),a()(d,"&".concat(g,"-checked ").concat(f),a()({},"".concat(f,"-checked"),{marginInlineStart:v(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:v(n.marginXXS).div(2).equal()})),d)),s)))},N=function(n){var t,i=n.componentCls,r=n.handleSize,d=n.calc;return a()({},i,(t={},a()(t,"".concat(i,"-loading-icon").concat(n.iconCls),{position:"relative",top:d(d(r).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(t,"&".concat(i,"-checked ").concat(i,"-loading-icon"),{color:n.switchColor}),t))},U=function(n){var t,i,r=n.componentCls,d=n.trackPadding,s=n.handleBg,g=n.handleShadow,l=n.handleSize,E=n.calc,C="".concat(r,"-handle");return a()({},r,(i={},a()(i,C,{position:"absolute",top:d,insetInlineStart:d,width:l,height:l,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:s,borderRadius:E(l).div(2).equal(),boxShadow:g,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(i,"&".concat(r,"-checked ").concat(C),{insetInlineStart:"calc(100% - ".concat((0,P.unit)(E(l).add(d).equal()),")")}),a()(i,"&:not(".concat(r,"-disabled):active"),(t={},a()(t,"".concat(C,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(t,"&".concat(r,"-checked ").concat(C,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),t)),i))},q=function(n){var t,i,r,d,s=n.componentCls,g=n.trackHeight,l=n.trackPadding,E=n.innerMinMargin,C=n.innerMaxMargin,W=n.handleSize,I=n.calc,u="".concat(s,"-inner"),v=(0,P.unit)(I(W).add(I(l).mul(2)).equal()),f=(0,P.unit)(I(C).mul(2).equal());return a()({},s,(d={},a()(d,u,(t={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:C,paddingInlineEnd:E,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(t,"".concat(u,"-checked, ").concat(u,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(t,"".concat(u,"-checked"),{marginInlineStart:"calc(-100% + ".concat(v," - ").concat(f,")"),marginInlineEnd:"calc(100% - ".concat(v," + ").concat(f,")")}),a()(t,"".concat(u,"-unchecked"),{marginTop:I(g).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),t)),a()(d,"&".concat(s,"-checked ").concat(u),(i={paddingInlineStart:E,paddingInlineEnd:C},a()(i,"".concat(u,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(i,"".concat(u,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(v," + ").concat(f,")"),marginInlineEnd:"calc(-100% + ".concat(v," - ").concat(f,")")}),i)),a()(d,"&:not(".concat(s,"-disabled):active"),(r={},a()(r,"&:not(".concat(s,"-checked) ").concat(u),a()({},"".concat(u,"-unchecked"),{marginInlineStart:I(l).mul(2).equal(),marginInlineEnd:I(l).mul(-1).mul(2).equal()})),a()(r,"&".concat(s,"-checked ").concat(u),a()({},"".concat(u,"-checked"),{marginInlineStart:I(l).mul(-1).mul(2).equal(),marginInlineEnd:I(l).mul(2).equal()})),r)),d))},nn=function(n){var t,i=n.componentCls,r=n.trackHeight,d=n.trackMinWidth;return a()({},i,m()(m()(m()({},(0,X.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:d,height:r,lineHeight:"".concat((0,P.unit)(r)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorTextTertiary}),(0,X.Qy)(n)),{},(t={},a()(t,"&".concat(i,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(i,"-disabled)"),{background:n.colorPrimaryHover})),a()(t,"&".concat(i,"-loading, &").concat(i,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(t,"&".concat(i,"-rtl"),{direction:"rtl"}),t)))},V=function(n){var t=n.fontSize,i=n.lineHeight,r=n.controlHeight,d=n.colorWhite,s=t*i,g=r/2,l=2,E=s-l*2,C=g-l*2;return{trackHeight:s,trackHeightSM:g,trackMinWidth:E*2+l*4,trackMinWidthSM:C*2+l*2,trackPadding:l,handleBg:d,handleSize:E,handleSizeSM:C,handleShadow:"0 2px 4px 0 ".concat(new H.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:E/2,innerMaxMargin:E+l+l*2,innerMinMarginSM:C/2,innerMaxMarginSM:C+l+l*2}},T=(0,k.I$)("Switch",function(c){var n=(0,_.TS)(c,{switchDuration:c.motionDurationMid,switchColor:c.colorPrimary,switchDisabledOpacity:c.opacityLoading,switchLoadingIconSize:c.calc(c.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(c.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[nn(n),q(n),U(n),N(n),K(n)]},V),an=e(260869),Z=e(785893),en=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],Q=D.forwardRef(function(c,n){var t,i=c.prefixCls,r=c.size,d=c.disabled,s=c.loading,g=c.className,l=c.rootClassName,E=c.style,C=c.checked,W=c.value,I=c.defaultChecked,u=c.defaultValue,v=c.onChange,f=z()(c,en),w=(0,an.default)(!1,{value:C!=null?C:W,defaultValue:I!=null?I:u}),y=S()(w,2),sn=y[0],hn=y[1],cn=D.useContext(O.E_),gn=cn.getPrefixCls,un=cn.direction,L=cn.switch,vn=D.useContext(J.Z),mn=(d!=null?d:vn)||s,b=gn("switch",i),Sn=(0,Z.jsx)("div",{className:"".concat(b,"-handle"),children:s&&(0,Z.jsx)(A(),{className:"".concat(b,"-loading-icon")})}),Cn=T(b),ln=S()(Cn,3),Mn=ln[0],In=ln[1],En=ln[2],fn=(0,Y.Z)(r),Pn=G()(L==null?void 0:L.className,(t={},a()(t,"".concat(b,"-small"),fn==="small"),a()(t,"".concat(b,"-loading"),s),a()(t,"".concat(b,"-rtl"),un==="rtl"),t),g,l,In,En),Dn=m()(m()({},L==null?void 0:L.style),E),On=function(){for(var rn=arguments.length,dn=new Array(rn),F=0;F<rn;F++)dn[F]=arguments[F];hn(dn[0]),v==null||v.apply(void 0,dn)};return Mn((0,Z.jsx)($.Z,{component:"Switch",children:(0,Z.jsx)(B.Z,m()(m()({},f),{},{checked:sn,onChange:On,prefixCls:b,className:Pn,style:Dn,disabled:mn,ref:n,loadingIcon:Sn}))}))});Q.__ANT_SWITCH=!0;var tn=Q},33413:function(on,p,e){var h=e(487462),m=e(204942),j=e(297685),a=e(912402),o=e(667294),S=e(693967),R=e.n(S),z=e(821770),D=e(915105),x=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],A=o.forwardRef(function(M,G){var B,$=M.prefixCls,O=$===void 0?"rc-switch":$,J=M.className,Y=M.checked,P=M.defaultChecked,H=M.disabled,X=M.loadingIcon,k=M.checkedChildren,_=M.unCheckedChildren,K=M.onClick,N=M.onChange,U=M.onKeyDown,q=(0,a.Z)(M,x),nn=(0,z.default)(!1,{value:Y,defaultValue:P}),V=(0,j.Z)(nn,2),T=V[0],an=V[1];function Z(c,n){var t=T;return H||(t=c,an(t),N==null||N(t,n)),t}function en(c){c.which===D.Z.LEFT?Z(!1,c):c.which===D.Z.RIGHT&&Z(!0,c),U==null||U(c)}function Q(c){var n=Z(!T,c);K==null||K(n,c)}var tn=R()(O,J,(B={},(0,m.Z)(B,"".concat(O,"-checked"),T),(0,m.Z)(B,"".concat(O,"-disabled"),H),B));return o.createElement("button",(0,h.Z)({},q,{type:"button",role:"switch","aria-checked":T,disabled:H,className:tn,ref:G,onKeyDown:en,onClick:Q}),X,o.createElement("span",{className:"".concat(O,"-inner")},o.createElement("span",{className:"".concat(O,"-inner-checked")},k),o.createElement("span",{className:"".concat(O,"-inner-unchecked")},_)))});A.displayName="Switch",p.Z=A}}]);
