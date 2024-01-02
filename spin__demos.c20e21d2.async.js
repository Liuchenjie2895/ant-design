"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[66522],{106750:function(j,s,n){n.d(s,{Z:function(){return ln}});var D=n(97857),o=n.n(D),h=n(9783),e=n.n(h),r=n(805574),M=n.n(r),f=n(513769),L=n.n(f),y=n(667294),p=n(693967),O=n.n(p),g=n(518475),T=n(376148),K=n(73287),b=n(286665),W=n(986943),X=["wrap","nowrap","wrap-reverse"],w=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],A=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],$=function(a,l){var i={};return X.forEach(function(c){i["".concat(a,"-wrap-").concat(c)]=l.wrap===c}),i},J=function(a,l){var i={};return A.forEach(function(c){i["".concat(a,"-align-").concat(c)]=l.align===c}),i["".concat(a,"-align-stretch")]=!l.align&&!!l.vertical,i},k=function(a,l){var i={};return w.forEach(function(c){i["".concat(a,"-justify-").concat(c)]=l.justify===c}),i};function q(t,a){return O()(o()(o()(o()({},$(t,a)),J(t,a)),k(t,a)))}var F=q,G=function(a){var l=a.componentCls;return e()({},l,{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}})},V=function(a){var l=a.componentCls;return e()({},l,{"&-gap-small":{gap:a.flexGapSM},"&-gap-middle":{gap:a.flexGap},"&-gap-large":{gap:a.flexGapLG}})},nn=function(a){var l=a.componentCls,i={};return X.forEach(function(c){i["".concat(l,"-wrap-").concat(c)]={flexWrap:c}}),i},an=function(a){var l=a.componentCls,i={};return A.forEach(function(c){i["".concat(l,"-align-").concat(c)]={alignItems:c}}),i},Q=function(a){var l=a.componentCls,i={};return w.forEach(function(c){i["".concat(l,"-justify-").concat(c)]={justifyContent:c}}),i},N=function(){return{}},en=(0,b.I$)("Flex",function(t){var a=t.paddingXS,l=t.padding,i=t.paddingLG,c=(0,W.TS)(t,{flexGapSM:a,flexGap:l,flexGapLG:i});return[G(c),V(c),nn(c),an(c),Q(c)]},N,{resetStyle:!1}),R=n(785893),tn=["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"],Y=y.forwardRef(function(t,a){var l,i=t.prefixCls,c=t.rootClassName,u=t.className,v=t.style,m=t.flex,d=t.gap,x=t.children,C=t.vertical,B=C===void 0?!1:C,P=t.component,E=P===void 0?"div":P,S=L()(t,tn),I=y.useContext(K.E_),_=I.flex,U=I.direction,sn=I.getPrefixCls,Z=sn("flex",i),cn=en(Z),on=M()(cn,3),un=on[0],H=on[1],hn=on[2],gn=B!=null?B:_==null?void 0:_.vertical,z=O()(u,c,_==null?void 0:_.className,Z,H,hn,F(Z,t),(l={},e()(l,"".concat(Z,"-rtl"),U==="rtl"),e()(l,"".concat(Z,"-gap-").concat(d),(0,T.n)(d)),e()(l,"".concat(Z,"-vertical"),gn),l)),rn=o()(o()({},_==null?void 0:_.style),v);return m&&(rn.flex=m),d&&!(0,T.n)(d)&&(rn.gap=d),un((0,R.jsx)(E,o()(o()({ref:a,className:z,style:rn},(0,g.default)(S,["justify","wrap","align"])),{},{children:x})))}),ln=Y},979331:function(j,s,n){n.d(s,{Z:function(){return ln}});var D=n(97857),o=n.n(D),h=n(9783),e=n.n(h),r=n(805574),M=n.n(r),f=n(513769),L=n.n(f),y=n(667294),p=n(100628),O=n.n(p),g=n(693967),T=n.n(g),K=n(33413),b=n(189265),W=n(73287),X=n(147315),w=n(947170),A=n(900210),$=n(510274),J=n(548073),k=n(286665),q=n(986943),F=function(a){var l,i,c,u,v,m=a.componentCls,d=a.trackHeightSM,x=a.trackPadding,C=a.trackMinWidthSM,B=a.innerMinMarginSM,P=a.innerMaxMarginSM,E=a.handleSizeSM,S=a.calc,I="".concat(m,"-inner"),_=(0,A.unit)(S(E).add(S(x).mul(2)).equal()),U=(0,A.unit)(S(P).mul(2).equal());return e()({},m,e()({},"&".concat(m,"-small"),(v={minWidth:C,height:d,lineHeight:(0,A.unit)(d)},e()(v,"".concat(m,"-inner"),(l={paddingInlineStart:P,paddingInlineEnd:B},e()(l,"".concat(I,"-checked"),{marginInlineStart:"calc(-100% + ".concat(_," - ").concat(U,")"),marginInlineEnd:"calc(100% - ".concat(_," + ").concat(U,")")}),e()(l,"".concat(I,"-unchecked"),{marginTop:S(d).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),l)),e()(v,"".concat(m,"-handle"),{width:E,height:E}),e()(v,"".concat(m,"-loading-icon"),{top:S(S(E).sub(a.switchLoadingIconSize)).div(2).equal(),fontSize:a.switchLoadingIconSize}),e()(v,"&".concat(m,"-checked"),(c={},e()(c,"".concat(m,"-inner"),(i={paddingInlineStart:B,paddingInlineEnd:P},e()(i,"".concat(I,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(i,"".concat(I,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(_," + ").concat(U,")"),marginInlineEnd:"calc(-100% + ".concat(_," - ").concat(U,")")}),i)),e()(c,"".concat(m,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,A.unit)(S(E).add(x).equal()),")")}),c)),e()(v,"&:not(".concat(m,"-disabled):active"),(u={},e()(u,"&:not(".concat(m,"-checked) ").concat(I),e()({},"".concat(I,"-unchecked"),{marginInlineStart:S(a.marginXXS).div(2).equal(),marginInlineEnd:S(a.marginXXS).mul(-1).div(2).equal()})),e()(u,"&".concat(m,"-checked ").concat(I),e()({},"".concat(I,"-checked"),{marginInlineStart:S(a.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:S(a.marginXXS).div(2).equal()})),u)),v)))},G=function(a){var l,i=a.componentCls,c=a.handleSize,u=a.calc;return e()({},i,(l={},e()(l,"".concat(i,"-loading-icon").concat(a.iconCls),{position:"relative",top:u(u(c).sub(a.fontSize)).div(2).equal(),color:a.switchLoadingIconColor,verticalAlign:"top"}),e()(l,"&".concat(i,"-checked ").concat(i,"-loading-icon"),{color:a.switchColor}),l))},V=function(a){var l,i,c=a.componentCls,u=a.trackPadding,v=a.handleBg,m=a.handleShadow,d=a.handleSize,x=a.calc,C="".concat(c,"-handle");return e()({},c,(i={},e()(i,C,{position:"absolute",top:u,insetInlineStart:u,width:d,height:d,transition:"all ".concat(a.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:v,borderRadius:x(d).div(2).equal(),boxShadow:m,transition:"all ".concat(a.switchDuration," ease-in-out"),content:'""'}}),e()(i,"&".concat(c,"-checked ").concat(C),{insetInlineStart:"calc(100% - ".concat((0,A.unit)(x(d).add(u).equal()),")")}),e()(i,"&:not(".concat(c,"-disabled):active"),(l={},e()(l,"".concat(C,"::before"),{insetInlineEnd:a.switchHandleActiveInset,insetInlineStart:0}),e()(l,"&".concat(c,"-checked ").concat(C,"::before"),{insetInlineEnd:0,insetInlineStart:a.switchHandleActiveInset}),l)),i))},nn=function(a){var l,i,c,u,v=a.componentCls,m=a.trackHeight,d=a.trackPadding,x=a.innerMinMargin,C=a.innerMaxMargin,B=a.handleSize,P=a.calc,E="".concat(v,"-inner"),S=(0,A.unit)(P(B).add(P(d).mul(2)).equal()),I=(0,A.unit)(P(C).mul(2).equal());return e()({},v,(u={},e()(u,E,(l={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:C,paddingInlineEnd:x,transition:"padding-inline-start ".concat(a.switchDuration," ease-in-out, padding-inline-end ").concat(a.switchDuration," ease-in-out")},e()(l,"".concat(E,"-checked, ").concat(E,"-unchecked"),{display:"block",color:a.colorTextLightSolid,fontSize:a.fontSizeSM,transition:"margin-inline-start ".concat(a.switchDuration," ease-in-out, margin-inline-end ").concat(a.switchDuration," ease-in-out"),pointerEvents:"none"}),e()(l,"".concat(E,"-checked"),{marginInlineStart:"calc(-100% + ".concat(S," - ").concat(I,")"),marginInlineEnd:"calc(100% - ".concat(S," + ").concat(I,")")}),e()(l,"".concat(E,"-unchecked"),{marginTop:P(m).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),l)),e()(u,"&".concat(v,"-checked ").concat(E),(i={paddingInlineStart:x,paddingInlineEnd:C},e()(i,"".concat(E,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),e()(i,"".concat(E,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(S," + ").concat(I,")"),marginInlineEnd:"calc(-100% + ".concat(S," - ").concat(I,")")}),i)),e()(u,"&:not(".concat(v,"-disabled):active"),(c={},e()(c,"&:not(".concat(v,"-checked) ").concat(E),e()({},"".concat(E,"-unchecked"),{marginInlineStart:P(d).mul(2).equal(),marginInlineEnd:P(d).mul(-1).mul(2).equal()})),e()(c,"&".concat(v,"-checked ").concat(E),e()({},"".concat(E,"-checked"),{marginInlineStart:P(d).mul(-1).mul(2).equal(),marginInlineEnd:P(d).mul(2).equal()})),c)),u))},an=function(a){var l,i=a.componentCls,c=a.trackHeight,u=a.trackMinWidth;return e()({},i,o()(o()(o()({},(0,J.Wf)(a)),{},e()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:u,height:c,lineHeight:"".concat((0,A.unit)(c)),verticalAlign:"middle",background:a.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(a.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(i,"-disabled)"),{background:a.colorTextTertiary}),(0,J.Qy)(a)),{},(l={},e()(l,"&".concat(i,"-checked"),e()({background:a.switchColor},"&:hover:not(".concat(i,"-disabled)"),{background:a.colorPrimaryHover})),e()(l,"&".concat(i,"-loading, &").concat(i,"-disabled"),{cursor:"not-allowed",opacity:a.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),e()(l,"&".concat(i,"-rtl"),{direction:"rtl"}),l)))},Q=function(a){var l=a.fontSize,i=a.lineHeight,c=a.controlHeight,u=a.colorWhite,v=l*i,m=c/2,d=2,x=v-d*2,C=m-d*2;return{trackHeight:v,trackHeightSM:m,trackMinWidth:x*2+d*4,trackMinWidthSM:C*2+d*2,trackPadding:d,handleBg:u,handleSize:x,handleSizeSM:C,handleShadow:"0 2px 4px 0 ".concat(new $.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:x/2,innerMaxMargin:x+d+d*2,innerMinMarginSM:C/2,innerMaxMarginSM:C+d+d*2}},N=(0,k.I$)("Switch",function(t){var a=(0,q.TS)(t,{switchDuration:t.motionDurationMid,switchColor:t.colorPrimary,switchDisabledOpacity:t.opacityLoading,switchLoadingIconSize:t.calc(t.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(t.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[an(a),nn(a),V(a),G(a),F(a)]},Q),en=n(260869),R=n(785893),tn=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],Y=y.forwardRef(function(t,a){var l,i=t.prefixCls,c=t.size,u=t.disabled,v=t.loading,m=t.className,d=t.rootClassName,x=t.style,C=t.checked,B=t.value,P=t.defaultChecked,E=t.defaultValue,S=t.onChange,I=L()(t,tn),_=(0,en.default)(!1,{value:C!=null?C:B,defaultValue:P!=null?P:E}),U=M()(_,2),sn=U[0],Z=U[1],cn=y.useContext(W.E_),on=cn.getPrefixCls,un=cn.direction,H=cn.switch,hn=y.useContext(X.Z),gn=(u!=null?u:hn)||v,z=on("switch",i),rn=(0,R.jsx)("div",{className:"".concat(z,"-handle"),children:v&&(0,R.jsx)(O(),{className:"".concat(z,"-loading-icon")})}),Cn=N(z),vn=M()(Cn,3),En=vn[0],Sn=vn[1],Mn=vn[2],Pn=(0,w.Z)(c),In=T()(H==null?void 0:H.className,(l={},e()(l,"".concat(z,"-small"),Pn==="small"),e()(l,"".concat(z,"-loading"),v),e()(l,"".concat(z,"-rtl"),un==="rtl"),l),m,d,Sn,Mn),xn=o()(o()({},H==null?void 0:H.style),x),Dn=function(){for(var fn=arguments.length,mn=new Array(fn),dn=0;dn<fn;dn++)mn[dn]=arguments[dn];Z(mn[0]),S==null||S.apply(void 0,mn)};return En((0,R.jsx)(b.Z,{component:"Switch",children:(0,R.jsx)(K.Z,o()(o()({},I),{},{checked:sn,onChange:Dn,prefixCls:z,className:In,style:xn,disabled:gn,ref:a,loadingIcon:rn}))}))});Y.__ANT_SWITCH=!0;var ln=Y},874767:function(j,s,n){n.r(s);var D=n(667294),o=n(313579),h=n(785893),e=function(){return(0,h.jsx)(o.Z,{})};s.default=e},539006:function(j,s,n){n.r(s);var D=n(667294),o=n(639389),h=n.n(o),e=n(313579),r=n(785893),M=function(){return(0,r.jsx)(e.Z,{indicator:(0,r.jsx)(o.LoadingOutlined,{style:{fontSize:24},spin:!0})})};s.default=M},183475:function(j,s,n){n.r(s);var D=n(805574),o=n.n(D),h=n(667294),e=n(313579),r=n(11739),M=n(979331),f=n(785893),L=function(){var p=h.useState(!1),O=o()(p,2),g=O[0],T=O[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(e.Z,{spinning:g,delay:500,children:(0,f.jsx)(r.Z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),(0,f.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,f.jsx)(M.Z,{checked:g,onChange:T})]})]})};s.default=L},891046:function(j,s,n){n.r(s);var D=n(805574),o=n.n(D),h=n(667294),e=n(988872),r=n(313579),M=n(785893),f=function(){var y=h.useState(!1),p=o()(y,2),O=p[0],g=p[1],T=function(){g(!0),setTimeout(function(){g(!1)},3e3)};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(e.ZP,{onClick:T,children:"Show fullscreen for 3s"}),(0,M.jsx)(r.Z,{spinning:O,fullscreen:!0})]})};s.default=f},426667:function(j,s,n){n.r(s);var D=n(667294),o=n(313579),h=n(785893),e=function(){return(0,h.jsx)("div",{className:"example",children:(0,h.jsx)(o.Z,{})})};s.default=e},667602:function(j,s,n){n.r(s);var D=n(805574),o=n.n(D),h=n(667294),e=n(313579),r=n(11739),M=n(979331),f=n(785893),L=function(){var p=h.useState(!1),O=o()(p,2),g=O[0],T=O[1];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(e.Z,{spinning:g,children:(0,f.jsx)(r.Z,{type:"info",message:"Alert message title",description:"Further details about the context of this alert."})}),(0,f.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,f.jsx)(M.Z,{checked:g,onChange:T})]})]})};s.default=L},150619:function(j,s,n){n.r(s);var D=n(667294),o=n(106750),h=n(313579),e=n(785893),r=function(){return(0,e.jsxs)(o.Z,{align:"center",gap:"middle",children:[(0,e.jsx)(h.Z,{size:"small"}),(0,e.jsx)(h.Z,{}),(0,e.jsx)(h.Z,{size:"large"})]})};s.default=r},220742:function(j,s,n){n.r(s);var D=n(667294),o=n(106750),h=n(313579),e=n(11739),r=n(785893),M=function(){return(0,r.jsxs)(o.Z,{gap:"small",vertical:!0,children:[(0,r.jsxs)(o.Z,{gap:"small",children:[(0,r.jsx)(h.Z,{tip:"Loading",size:"small",children:(0,r.jsx)("div",{className:"content"})}),(0,r.jsx)(h.Z,{tip:"Loading",children:(0,r.jsx)("div",{className:"content"})}),(0,r.jsx)(h.Z,{tip:"Loading",size:"large",children:(0,r.jsx)("div",{className:"content"})})]}),(0,r.jsx)(h.Z,{tip:"Loading...",children:(0,r.jsx)(e.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})};s.default=M},33413:function(j,s,n){var D=n(487462),o=n(204942),h=n(297685),e=n(912402),r=n(667294),M=n(693967),f=n.n(M),L=n(821770),y=n(915105),p=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],O=r.forwardRef(function(g,T){var K,b=g.prefixCls,W=b===void 0?"rc-switch":b,X=g.className,w=g.checked,A=g.defaultChecked,$=g.disabled,J=g.loadingIcon,k=g.checkedChildren,q=g.unCheckedChildren,F=g.onClick,G=g.onChange,V=g.onKeyDown,nn=(0,e.Z)(g,p),an=(0,L.default)(!1,{value:w,defaultValue:A}),Q=(0,h.Z)(an,2),N=Q[0],en=Q[1];function R(t,a){var l=N;return $||(l=t,en(l),G==null||G(l,a)),l}function tn(t){t.which===y.Z.LEFT?R(!1,t):t.which===y.Z.RIGHT&&R(!0,t),V==null||V(t)}function Y(t){var a=R(!N,t);F==null||F(a,t)}var ln=f()(W,X,(K={},(0,o.Z)(K,"".concat(W,"-checked"),N),(0,o.Z)(K,"".concat(W,"-disabled"),$),K));return r.createElement("button",(0,D.Z)({},nn,{type:"button",role:"switch","aria-checked":N,disabled:$,className:ln,ref:T,onKeyDown:tn,onClick:Y}),J,r.createElement("span",{className:"".concat(W,"-inner")},r.createElement("span",{className:"".concat(W,"-inner-checked")},k),r.createElement("span",{className:"".concat(W,"-inner-unchecked")},q)))});O.displayName="Switch",s.Z=O}}]);
