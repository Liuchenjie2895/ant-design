"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[41470],{241470:function(dn,x,t){t.r(x),t.d(x,{scopes:function(){return b}});var v=t(639389),E=t.n(v),m=t(667294),a=t(988872),P=t(315816),O=t(945016),C=t(95976),A=t(469922),R=t(979331),b={"notification-demo-hooks":{RadiusBottomleftOutlined:v.RadiusBottomleftOutlined,RadiusBottomrightOutlined:v.RadiusBottomrightOutlined,RadiusUpleftOutlined:v.RadiusUpleftOutlined,RadiusUprightOutlined:v.RadiusUprightOutlined,React:m,useMemo:m.useMemo,Button:a.ZP,Divider:P.Z,Space:O.Z,notification:C.Z},"notification-demo-duration":{React:m,Button:a.ZP,notification:C.Z},"notification-demo-with-icon":{React:m,Button:a.ZP,notification:C.Z,Space:O.Z},"notification-demo-with-btn":{React:m,Button:a.ZP,notification:C.Z,Space:O.Z},"notification-demo-custom-icon":{React:m,SmileOutlined:v.SmileOutlined,Button:a.ZP,notification:C.Z},"notification-demo-placement":{React:m,BorderBottomOutlined:v.BorderBottomOutlined,BorderTopOutlined:v.BorderTopOutlined,RadiusBottomleftOutlined:v.RadiusBottomleftOutlined,RadiusBottomrightOutlined:v.RadiusBottomrightOutlined,RadiusUpleftOutlined:v.RadiusUpleftOutlined,RadiusUprightOutlined:v.RadiusUprightOutlined,Button:a.ZP,Divider:P.Z,notification:C.Z,Space:O.Z},"notification-demo-custom-style":{React:m,Button:a.ZP,notification:C.Z},"notification-demo-update":{React:m,Button:a.ZP,notification:C.Z},"notification-demo-stack":{React:m,useMemo:m.useMemo,Button:a.ZP,Divider:P.Z,InputNumber:A.Z,notification:C.Z,Space:O.Z,Switch:R.Z},"notification-demo-basic":{React:m,Button:a.ZP,notification:C.Z},"notification-demo-render-panel":{React:m,Button:a.ZP,notification:C.Z}}},979331:function(dn,x,t){t.d(x,{Z:function(){return en}});var v=t(97857),E=t.n(v),m=t(9783),a=t.n(m),P=t(805574),O=t.n(P),C=t(513769),A=t.n(C),R=t(667294),b=t(100628),j=t.n(b),I=t(693967),G=t.n(I),T=t(33413),$=t(189265),p=t(73287),J=t(147315),Y=t(947170),D=t(900210),H=t(510274),X=t(548073),k=t(286665),_=t(986943),U=function(n){var i,c,d,l,r,s=n.componentCls,o=n.trackHeightSM,f=n.trackPadding,g=n.trackMinWidthSM,W=n.innerMinMarginSM,S=n.innerMaxMarginSM,u=n.handleSizeSM,h=n.calc,M="".concat(s,"-inner"),L=(0,D.unit)(h(u).add(h(f).mul(2)).equal()),B=(0,D.unit)(h(S).mul(2).equal());return a()({},s,a()({},"&".concat(s,"-small"),(r={minWidth:g,height:o,lineHeight:(0,D.unit)(o)},a()(r,"".concat(s,"-inner"),(i={paddingInlineStart:S,paddingInlineEnd:W},a()(i,"".concat(M,"-checked"),{marginInlineStart:"calc(-100% + ".concat(L," - ").concat(B,")"),marginInlineEnd:"calc(100% - ".concat(L," + ").concat(B,")")}),a()(i,"".concat(M,"-unchecked"),{marginTop:h(o).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),i)),a()(r,"".concat(s,"-handle"),{width:u,height:u}),a()(r,"".concat(s,"-loading-icon"),{top:h(h(u).sub(n.switchLoadingIconSize)).div(2).equal(),fontSize:n.switchLoadingIconSize}),a()(r,"&".concat(s,"-checked"),(d={},a()(d,"".concat(s,"-inner"),(c={paddingInlineStart:W,paddingInlineEnd:S},a()(c,"".concat(M,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(M,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(L," + ").concat(B,")"),marginInlineEnd:"calc(-100% + ".concat(L," - ").concat(B,")")}),c)),a()(d,"".concat(s,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,D.unit)(h(u).add(f).equal()),")")}),d)),a()(r,"&:not(".concat(s,"-disabled):active"),(l={},a()(l,"&:not(".concat(s,"-checked) ").concat(M),a()({},"".concat(M,"-unchecked"),{marginInlineStart:h(n.marginXXS).div(2).equal(),marginInlineEnd:h(n.marginXXS).mul(-1).div(2).equal()})),a()(l,"&".concat(s,"-checked ").concat(M),a()({},"".concat(M,"-checked"),{marginInlineStart:h(n.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:h(n.marginXXS).div(2).equal()})),l)),r)))},K=function(n){var i,c=n.componentCls,d=n.handleSize,l=n.calc;return a()({},c,(i={},a()(i,"".concat(c,"-loading-icon").concat(n.iconCls),{position:"relative",top:l(l(d).sub(n.fontSize)).div(2).equal(),color:n.switchLoadingIconColor,verticalAlign:"top"}),a()(i,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:n.switchColor}),i))},N=function(n){var i,c,d=n.componentCls,l=n.trackPadding,r=n.handleBg,s=n.handleShadow,o=n.handleSize,f=n.calc,g="".concat(d,"-handle");return a()({},d,(c={},a()(c,g,{position:"absolute",top:l,insetInlineStart:l,width:o,height:o,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:r,borderRadius:f(o).div(2).equal(),boxShadow:s,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),a()(c,"&".concat(d,"-checked ").concat(g),{insetInlineStart:"calc(100% - ".concat((0,D.unit)(f(o).add(l).equal()),")")}),a()(c,"&:not(".concat(d,"-disabled):active"),(i={},a()(i,"".concat(g,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),a()(i,"&".concat(d,"-checked ").concat(g,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),i)),c))},q=function(n){var i,c,d,l,r=n.componentCls,s=n.trackHeight,o=n.trackPadding,f=n.innerMinMargin,g=n.innerMaxMargin,W=n.handleSize,S=n.calc,u="".concat(r,"-inner"),h=(0,D.unit)(S(W).add(S(o).mul(2)).equal()),M=(0,D.unit)(S(g).mul(2).equal());return a()({},r,(l={},a()(l,u,(i={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:g,paddingInlineEnd:f,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},a()(i,"".concat(u,"-checked, ").concat(u,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(i,"".concat(u,"-checked"),{marginInlineStart:"calc(-100% + ".concat(h," - ").concat(M,")"),marginInlineEnd:"calc(100% - ".concat(h," + ").concat(M,")")}),a()(i,"".concat(u,"-unchecked"),{marginTop:S(s).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),i)),a()(l,"&".concat(r,"-checked ").concat(u),(c={paddingInlineStart:f,paddingInlineEnd:g},a()(c,"".concat(u,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(c,"".concat(u,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(h," + ").concat(M,")"),marginInlineEnd:"calc(-100% + ".concat(h," - ").concat(M,")")}),c)),a()(l,"&:not(".concat(r,"-disabled):active"),(d={},a()(d,"&:not(".concat(r,"-checked) ").concat(u),a()({},"".concat(u,"-unchecked"),{marginInlineStart:S(o).mul(2).equal(),marginInlineEnd:S(o).mul(-1).mul(2).equal()})),a()(d,"&".concat(r,"-checked ").concat(u),a()({},"".concat(u,"-checked"),{marginInlineStart:S(o).mul(-1).mul(2).equal(),marginInlineEnd:S(o).mul(2).equal()})),d)),l))},nn=function(n){var i,c=n.componentCls,d=n.trackHeight,l=n.trackMinWidth;return a()({},c,E()(E()(E()({},(0,X.Wf)(n)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:l,height:d,lineHeight:"".concat((0,D.unit)(d)),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorTextTertiary}),(0,X.Qy)(n)),{},(i={},a()(i,"&".concat(c,"-checked"),a()({background:n.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorPrimaryHover})),a()(i,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(i,"&".concat(c,"-rtl"),{direction:"rtl"}),i)))},V=function(n){var i=n.fontSize,c=n.lineHeight,d=n.controlHeight,l=n.colorWhite,r=i*c,s=d/2,o=2,f=r-o*2,g=s-o*2;return{trackHeight:r,trackHeightSM:s,trackMinWidth:f*2+o*4,trackMinWidthSM:g*2+o*2,trackPadding:o,handleBg:l,handleSize:f,handleSizeSM:g,handleShadow:"0 2px 4px 0 ".concat(new H.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:f/2,innerMaxMargin:f+o+o*2,innerMinMarginSM:g/2,innerMaxMarginSM:g+o+o*2}},w=(0,k.I$)("Switch",function(e){var n=(0,_.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(e.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[nn(n),q(n),N(n),K(n),U(n)]},V),an=t(260869),y=t(785893),tn=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],Q=R.forwardRef(function(e,n){var i,c=e.prefixCls,d=e.size,l=e.disabled,r=e.loading,s=e.className,o=e.rootClassName,f=e.style,g=e.checked,W=e.value,S=e.defaultChecked,u=e.defaultValue,h=e.onChange,M=A()(e,tn),L=(0,an.default)(!1,{value:g!=null?g:W,defaultValue:S!=null?S:u}),B=O()(L,2),sn=B[0],un=B[1],cn=R.useContext(p.E_),hn=cn.getPrefixCls,gn=cn.direction,z=cn.switch,mn=R.useContext(J.Z),vn=(l!=null?l:mn)||r,Z=hn("switch",c),Sn=(0,y.jsx)("div",{className:"".concat(Z,"-handle"),children:r&&(0,y.jsx)(j(),{className:"".concat(Z,"-loading-icon")})}),Cn=w(Z),on=O()(Cn,3),fn=on[0],Mn=on[1],In=on[2],En=(0,Y.Z)(d),Pn=G()(z==null?void 0:z.className,(i={},a()(i,"".concat(Z,"-small"),En==="small"),a()(i,"".concat(Z,"-loading"),r),a()(i,"".concat(Z,"-rtl"),gn==="rtl"),i),s,o,Mn,In),On=E()(E()({},z==null?void 0:z.style),f),Dn=function(){for(var rn=arguments.length,ln=new Array(rn),F=0;F<rn;F++)ln[F]=arguments[F];un(ln[0]),h==null||h.apply(void 0,ln)};return fn((0,y.jsx)($.Z,{component:"Switch",children:(0,y.jsx)(T.Z,E()(E()({},M),{},{checked:sn,onChange:Dn,prefixCls:Z,className:Pn,style:On,disabled:vn,ref:n,loadingIcon:Sn}))}))});Q.__ANT_SWITCH=!0;var en=Q},33413:function(dn,x,t){var v=t(487462),E=t(204942),m=t(297685),a=t(912402),P=t(667294),O=t(693967),C=t.n(O),A=t(821770),R=t(915105),b=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],j=P.forwardRef(function(I,G){var T,$=I.prefixCls,p=$===void 0?"rc-switch":$,J=I.className,Y=I.checked,D=I.defaultChecked,H=I.disabled,X=I.loadingIcon,k=I.checkedChildren,_=I.unCheckedChildren,U=I.onClick,K=I.onChange,N=I.onKeyDown,q=(0,a.Z)(I,b),nn=(0,A.default)(!1,{value:Y,defaultValue:D}),V=(0,m.Z)(nn,2),w=V[0],an=V[1];function y(e,n){var i=w;return H||(i=e,an(i),K==null||K(i,n)),i}function tn(e){e.which===R.Z.LEFT?y(!1,e):e.which===R.Z.RIGHT&&y(!0,e),N==null||N(e)}function Q(e){var n=y(!w,e);U==null||U(n,e)}var en=C()(p,J,(T={},(0,E.Z)(T,"".concat(p,"-checked"),w),(0,E.Z)(T,"".concat(p,"-disabled"),H),T));return P.createElement("button",(0,v.Z)({},q,{type:"button",role:"switch","aria-checked":w,disabled:H,className:en,ref:G,onKeyDown:tn,onClick:Q}),X,P.createElement("span",{className:"".concat(p,"-inner")},P.createElement("span",{className:"".concat(p,"-inner-checked")},k),P.createElement("span",{className:"".concat(p,"-inner-unchecked")},_)))});j.displayName="Switch",x.Z=j}}]);
