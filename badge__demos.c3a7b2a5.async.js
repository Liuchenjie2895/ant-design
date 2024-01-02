"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[30954],{979331:function(I,i,n){n.d(i,{Z:function(){return sn}});var M=n(97857),c=n.n(M),s=n(9783),a=n.n(s),t=n(805574),l=n.n(t),d=n(513769),E=n.n(d),h=n(667294),L=n(100628),P=n.n(L),j=n(693967),B=n.n(j),Z=n(33413),K=n(189265),T=n(73287),z=n(147315),y=n(947170),R=n(900210),U=n(510274),H=n(548073),Y=n(286665),k=n(986943),N=function(e){var r,u,g,v,C,D=e.componentCls,_=e.trackHeightSM,A=e.trackPadding,O=e.trackMinWidthSM,Q=e.innerMinMarginSM,f=e.innerMaxMarginSM,m=e.handleSizeSM,x=e.calc,S="".concat(D,"-inner"),w=(0,R.unit)(x(m).add(x(A).mul(2)).equal()),V=(0,R.unit)(x(f).mul(2).equal());return a()({},D,a()({},"&".concat(D,"-small"),(C={minWidth:O,height:_,lineHeight:(0,R.unit)(_)},a()(C,"".concat(D,"-inner"),(r={paddingInlineStart:f,paddingInlineEnd:Q},a()(r,"".concat(S,"-checked"),{marginInlineStart:"calc(-100% + ".concat(w," - ").concat(V,")"),marginInlineEnd:"calc(100% - ".concat(w," + ").concat(V,")")}),a()(r,"".concat(S,"-unchecked"),{marginTop:x(_).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),r)),a()(C,"".concat(D,"-handle"),{width:m,height:m}),a()(C,"".concat(D,"-loading-icon"),{top:x(x(m).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize}),a()(C,"&".concat(D,"-checked"),(g={},a()(g,"".concat(D,"-inner"),(u={paddingInlineStart:Q,paddingInlineEnd:f},a()(u,"".concat(S,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(u,"".concat(S,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(w," + ").concat(V,")"),marginInlineEnd:"calc(-100% + ".concat(w," - ").concat(V,")")}),u)),a()(g,"".concat(D,"-handle"),{insetInlineStart:"calc(100% - ".concat((0,R.unit)(x(m).add(A).equal()),")")}),g)),a()(C,"&:not(".concat(D,"-disabled):active"),(v={},a()(v,"&:not(".concat(D,"-checked) ").concat(S),a()({},"".concat(S,"-unchecked"),{marginInlineStart:x(e.marginXXS).div(2).equal(),marginInlineEnd:x(e.marginXXS).mul(-1).div(2).equal()})),a()(v,"&".concat(D,"-checked ").concat(S),a()({},"".concat(S,"-checked"),{marginInlineStart:x(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:x(e.marginXXS).div(2).equal()})),v)),C)))},F=function(e){var r,u=e.componentCls,g=e.handleSize,v=e.calc;return a()({},u,(r={},a()(r,"".concat(u,"-loading-icon").concat(e.iconCls),{position:"relative",top:v(v(g).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"}),a()(r,"&".concat(u,"-checked ").concat(u,"-loading-icon"),{color:e.switchColor}),r))},$=function(e){var r,u,g=e.componentCls,v=e.trackPadding,C=e.handleBg,D=e.handleShadow,_=e.handleSize,A=e.calc,O="".concat(g,"-handle");return a()({},g,(u={},a()(u,O,{position:"absolute",top:v,insetInlineStart:v,width:_,height:_,transition:"all ".concat(e.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:C,borderRadius:A(_).div(2).equal(),boxShadow:D,transition:"all ".concat(e.switchDuration," ease-in-out"),content:'""'}}),a()(u,"&".concat(g,"-checked ").concat(O),{insetInlineStart:"calc(100% - ".concat((0,R.unit)(A(_).add(v).equal()),")")}),a()(u,"&:not(".concat(g,"-disabled):active"),(r={},a()(r,"".concat(O,"::before"),{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),a()(r,"&".concat(g,"-checked ").concat(O,"::before"),{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}),r)),u))},X=function(e){var r,u,g,v,C=e.componentCls,D=e.trackHeight,_=e.trackPadding,A=e.innerMinMargin,O=e.innerMaxMargin,Q=e.handleSize,f=e.calc,m="".concat(C,"-inner"),x=(0,R.unit)(f(Q).add(f(_).mul(2)).equal()),S=(0,R.unit)(f(O).mul(2).equal());return a()({},C,(v={},a()(v,m,(r={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:O,paddingInlineEnd:A,transition:"padding-inline-start ".concat(e.switchDuration," ease-in-out, padding-inline-end ").concat(e.switchDuration," ease-in-out")},a()(r,"".concat(m,"-checked, ").concat(m,"-unchecked"),{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start ".concat(e.switchDuration," ease-in-out, margin-inline-end ").concat(e.switchDuration," ease-in-out"),pointerEvents:"none"}),a()(r,"".concat(m,"-checked"),{marginInlineStart:"calc(-100% + ".concat(x," - ").concat(S,")"),marginInlineEnd:"calc(100% - ".concat(x," + ").concat(S,")")}),a()(r,"".concat(m,"-unchecked"),{marginTop:f(D).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}),r)),a()(v,"&".concat(C,"-checked ").concat(m),(u={paddingInlineStart:A,paddingInlineEnd:O},a()(u,"".concat(m,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),a()(u,"".concat(m,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(x," + ").concat(S,")"),marginInlineEnd:"calc(-100% + ".concat(x," - ").concat(S,")")}),u)),a()(v,"&:not(".concat(C,"-disabled):active"),(g={},a()(g,"&:not(".concat(C,"-checked) ").concat(m),a()({},"".concat(m,"-unchecked"),{marginInlineStart:f(_).mul(2).equal(),marginInlineEnd:f(_).mul(-1).mul(2).equal()})),a()(g,"&".concat(C,"-checked ").concat(m),a()({},"".concat(m,"-checked"),{marginInlineStart:f(_).mul(-1).mul(2).equal(),marginInlineEnd:f(_).mul(2).equal()})),g)),v))},W=function(e){var r,u=e.componentCls,g=e.trackHeight,v=e.trackMinWidth;return a()({},u,c()(c()(c()({},(0,H.Wf)(e)),{},a()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:v,height:g,lineHeight:"".concat((0,R.unit)(g)),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(u,"-disabled)"),{background:e.colorTextTertiary}),(0,H.Qy)(e)),{},(r={},a()(r,"&".concat(u,"-checked"),a()({background:e.switchColor},"&:hover:not(".concat(u,"-disabled)"),{background:e.colorPrimaryHover})),a()(r,"&".concat(u,"-loading, &").concat(u,"-disabled"),{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),a()(r,"&".concat(u,"-rtl"),{direction:"rtl"}),r)))},q=function(e){var r=e.fontSize,u=e.lineHeight,g=e.controlHeight,v=e.colorWhite,C=r*u,D=g/2,_=2,A=C-_*2,O=D-_*2;return{trackHeight:C,trackHeightSM:D,trackMinWidth:A*2+_*4,trackMinWidthSM:O*2+_*2,trackPadding:_,handleBg:v,handleSize:A,handleSizeSM:O,handleShadow:"0 2px 4px 0 ".concat(new U.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:A/2,innerMaxMargin:A+_+_*2,innerMinMarginSM:O/2,innerMaxMarginSM:O+_+_*2}},G=(0,Y.I$)("Switch",function(o){var e=(0,k.TS)(o,{switchDuration:o.motionDurationMid,switchColor:o.colorPrimary,switchDisabledOpacity:o.opacityLoading,switchLoadingIconSize:o.calc(o.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:"rgba(0, 0, 0, ".concat(o.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[W(e),X(e),$(e),F(e),N(e)]},q),tn=n(260869),p=n(785893),en=["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"],nn=h.forwardRef(function(o,e){var r,u=o.prefixCls,g=o.size,v=o.disabled,C=o.loading,D=o.className,_=o.rootClassName,A=o.style,O=o.checked,Q=o.value,f=o.defaultChecked,m=o.defaultValue,x=o.onChange,S=E()(o,en),w=(0,tn.default)(!1,{value:O!=null?O:Q,defaultValue:f!=null?f:m}),V=l()(w,2),dn=V[0],un=V[1],cn=h.useContext(T.E_),hn=cn.getPrefixCls,En=cn.direction,J=cn.switch,_n=h.useContext(z.Z),vn=(v!=null?v:_n)||C,b=hn("switch",u),gn=(0,p.jsx)("div",{className:"".concat(b,"-handle"),children:C&&(0,p.jsx)(P(),{className:"".concat(b,"-loading-icon")})}),Mn=G(b),ln=l()(Mn,3),Cn=ln[0],Pn=ln[1],Dn=ln[2],mn=(0,y.Z)(g),xn=B()(J==null?void 0:J.className,(r={},a()(r,"".concat(b,"-small"),mn==="small"),a()(r,"".concat(b,"-loading"),C),a()(r,"".concat(b,"-rtl"),En==="rtl"),r),D,_,Pn,Dn),On=c()(c()({},J==null?void 0:J.style),A),jn=function(){for(var on=arguments.length,rn=new Array(on),an=0;an<on;an++)rn[an]=arguments[an];un(rn[0]),x==null||x.apply(void 0,rn)};return Cn((0,p.jsx)(K.Z,{component:"Switch",children:(0,p.jsx)(Z.Z,c()(c()({},S),{},{checked:dn,onChange:jn,prefixCls:b,className:xn,style:On,disabled:vn,ref:e,loadingIcon:gn}))}))});nn.__ANT_SWITCH=!0;var sn=nn},429026:function(I,i,n){n.r(i);var M=n(667294),c=n(639389),s=n.n(c),a=n(945016),t=n(707898),l=n(796586),d=n(785893),E=function(){return(0,d.jsxs)(a.Z,{size:"middle",children:[(0,d.jsx)(t.Z,{count:5,children:(0,d.jsx)(l.C,{shape:"square",size:"large"})}),(0,d.jsx)(t.Z,{count:0,showZero:!0,children:(0,d.jsx)(l.C,{shape:"square",size:"large"})}),(0,d.jsx)(t.Z,{count:(0,d.jsx)(c.ClockCircleOutlined,{style:{color:"#f5222d"}}),children:(0,d.jsx)(l.C,{shape:"square",size:"large"})})]})};i.default=E},279788:function(I,i,n){n.r(i);var M=n(805574),c=n.n(M),s=n(667294),a=n(639389),t=n.n(a),l=n(988872),d=n(945016),E=n(707898),h=n(796586),L=n(979331),P=n(785893),j=l.ZP.Group,B=function(){var K=(0,s.useState)(5),T=c()(K,2),z=T[0],y=T[1],R=(0,s.useState)(!0),U=c()(R,2),H=U[0],Y=U[1],k=function(){y(z+1)},N=function(){var W=z-1;W<0&&(W=0),y(W)},F=function(){var W=Math.floor(Math.random()*100);y(W)},$=function(W){Y(W)};return(0,P.jsxs)(d.Z,{direction:"vertical",children:[(0,P.jsxs)(d.Z,{size:"large",children:[(0,P.jsx)(E.Z,{count:z,children:(0,P.jsx)(h.C,{shape:"square",size:"large"})}),(0,P.jsxs)(j,{children:[(0,P.jsx)(l.ZP,{onClick:N,icon:(0,P.jsx)(a.MinusOutlined,{})}),(0,P.jsx)(l.ZP,{onClick:k,icon:(0,P.jsx)(a.PlusOutlined,{})}),(0,P.jsx)(l.ZP,{onClick:F,icon:(0,P.jsx)(a.QuestionOutlined,{})})]})]}),(0,P.jsxs)(d.Z,{size:"large",children:[(0,P.jsx)(E.Z,{dot:H,children:(0,P.jsx)(h.C,{shape:"square",size:"large"})}),(0,P.jsx)(L.Z,{onChange:$,checked:H})]})]})};i.default=B},932211:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(785893),t=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],l=function(h){var L=h.color;return(0,a.jsx)("div",{style:{width:90,height:90,lineHeight:"90px",background:"#ccc",textAlign:"center"},children:L})},d=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.Z,{wrap:!0,size:["large","middle"],children:t.map(function(h){return(0,a.jsx)(s.Z,{color:h,count:44,children:(0,a.jsx)(l,{color:h})},h)})}),(0,a.jsx)(c.Z,{wrap:!0,size:["large","middle"],children:t.map(function(h){return(0,a.jsx)(s.Z,{status:"processing",color:h,text:"loading"},h)})})]})};i.default=d},565905:function(I,i,n){n.r(i);var M=n(667294),c=n(315816),s=n(945016),a=n(707898),t=n(785893),l=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],d=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{orientation:"left",children:"Presets"}),(0,t.jsx)(s.Z,{direction:"vertical",children:l.map(function(h){return(0,t.jsx)(a.Z,{color:h,text:h},h)})}),(0,t.jsx)(c.Z,{orientation:"left",children:"Custom"}),(0,t.jsxs)(s.Z,{direction:"vertical",children:[(0,t.jsx)(a.Z,{color:"#f50",text:"#f50"}),(0,t.jsx)(a.Z,{color:"rgb(45, 183, 245)",text:"rgb(45, 183, 245)"}),(0,t.jsx)(a.Z,{color:"hsl(102, 53%, 61%)",text:"hsl(102, 53%, 61%)"}),(0,t.jsx)(a.Z,{color:"hwb(205 6% 9%)",text:"hwb(205 6% 9%)"})]})]})};i.default=d},795276:function(I,i,n){n.r(i);var M=n(639389),c=n.n(M),s=n(667294),a=n(75529),t=n(945016),l=n(707898),d=n(796586),E=n(785893);i.default=function(){return(0,E.jsx)(a.ZP,{theme:{components:{Badge:{indicatorHeight:24,indicatorHeightSM:18,dotSize:4,textFontWeight:"bold",statusSize:8}}},children:(0,E.jsxs)(t.Z,{direction:"vertical",children:[(0,E.jsx)(l.Z,{count:5,children:(0,E.jsx)(d.C,{shape:"square",size:"large"})}),(0,E.jsx)(l.Z,{count:26}),(0,E.jsx)(l.Z,{dot:!0,children:(0,E.jsx)(M.NotificationOutlined,{})}),(0,E.jsx)(l.Z,{status:"success",text:"Success"}),(0,E.jsx)(l.Z,{size:"small",count:0,showZero:!0})]})})}},543713:function(I,i,n){n.r(i);var M=n(667294),c=n(639389),s=n.n(c),a=n(945016),t=n(707898),l=n(785893),d=function(){return(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(t.Z,{dot:!0,children:(0,l.jsx)(c.NotificationOutlined,{style:{fontSize:16}})}),(0,l.jsx)(t.Z,{dot:!0,children:(0,l.jsx)("a",{href:"#",children:"Link something"})})]})};i.default=d},322094:function(I,i,n){n.r(i);var M=n(667294),c=n(707898),s=n(796586),a=n(785893),t=function(){return(0,a.jsx)("a",{href:"#",children:(0,a.jsx)(c.Z,{count:5,children:(0,a.jsx)(s.C,{shape:"square",size:"large"})})})};i.default=t},70034:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(796586),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{size:"middle",wrap:!0,children:[(0,t.jsxs)(c.Z,{size:"middle",wrap:!0,children:[(0,t.jsx)(s.Z,{count:5,status:"success",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,status:"warning",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:5,color:"#fa541c",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"success",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"warning",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,status:"processing",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{dot:!0,color:"#fa541c",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]}),(0,t.jsxs)(c.Z,{size:"middle",wrap:!0,children:[(0,t.jsx)(s.Z,{count:0,showZero:!0}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"blue"}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"#f0f"}),(0,t.jsx)(s.Z,{count:0,showZero:!0,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:0,showZero:!0,color:"blue",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})]})};i.default=l},528199:function(I,i,n){n.r(i);var M=n(805574),c=n.n(M),s=n(667294),a=n(639389),t=n.n(a),l=n(945016),d=n(979331),E=n(707898),h=n(785893),L=function(){var j=(0,s.useState)(!0),B=c()(j,2),Z=B[0],K=B[1];return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(d.Z,{checked:Z,onChange:function(){return K(!Z)}}),(0,h.jsx)(E.Z,{count:Z?11:0,showZero:!0,color:"#faad14"}),(0,h.jsx)(E.Z,{count:Z?25:0}),(0,h.jsx)(E.Z,{count:Z?(0,h.jsx)(a.ClockCircleOutlined,{style:{color:"#f5222d"}}):0}),(0,h.jsx)(E.Z,{className:"site-badge-count-109",count:Z?109:0,style:{backgroundColor:"#52c41a"}})]})};i.default=L},279305:function(I,i,n){n.r(i);var M=n(667294),c=n(707898),s=n(796586),a=n(785893),t=function(){return(0,a.jsx)(c.Z,{count:5,offset:[10,10],children:(0,a.jsx)(s.C,{shape:"square",size:"large"})})};i.default=t},959241:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(796586),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{size:"large",children:[(0,t.jsx)(s.Z,{count:99,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:100,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:99,overflowCount:10,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:1e3,overflowCount:999,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=l},7650:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(294047),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{direction:"vertical",style:{width:"100%"},children:[(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"purple",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",placement:"start",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})}),(0,t.jsx)(s.Z.Ribbon,{text:"\u5566\u5566\u5566\u5566",color:"#2db7f5",placement:"end",children:(0,t.jsx)(a.Z,{children:"\u63A8\u5F00\u7A97\u6237\u4E3E\u8D77\u671B\u8FDC\u955C"})})]})};i.default=l},147071:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(294047),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{direction:"vertical",size:"middle",style:{width:"100%"},children:[(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"pink",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"red",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"cyan",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"green",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"purple",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"volcano",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})}),(0,t.jsx)(s.Z.Ribbon,{text:"Hippies",color:"magenta",children:(0,t.jsx)(a.Z,{title:"Pushes open the window",size:"small",children:"and raises the spyglass."})})]})};i.default=l},890592:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(796586),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{size:"middle",children:[(0,t.jsx)(s.Z,{size:"default",count:5,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{size:"small",count:5,children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=l},615578:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(785893),t=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(s.Z,{status:"success"}),(0,a.jsx)(s.Z,{status:"error"}),(0,a.jsx)(s.Z,{status:"default"}),(0,a.jsx)(s.Z,{status:"processing"}),(0,a.jsx)(s.Z,{status:"warning"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(c.Z,{direction:"vertical",children:[(0,a.jsx)(s.Z,{status:"success",text:"Success"}),(0,a.jsx)(s.Z,{status:"error",text:"Error"}),(0,a.jsx)(s.Z,{status:"default",text:"Default"}),(0,a.jsx)(s.Z,{status:"processing",text:"Processing"}),(0,a.jsx)(s.Z,{status:"warning",text:"Warning"})]})]})};i.default=t},988745:function(I,i,n){n.r(i);var M=n(667294),c=n(945016),s=n(707898),a=n(796586),t=n(785893),l=function(){return(0,t.jsxs)(c.Z,{size:"large",children:[(0,t.jsx)(s.Z,{count:5,title:"Custom hover text",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})}),(0,t.jsx)(s.Z,{count:-5,title:"Negative",children:(0,t.jsx)(a.C,{shape:"square",size:"large"})})]})};i.default=l},33413:function(I,i,n){var M=n(487462),c=n(204942),s=n(297685),a=n(912402),t=n(667294),l=n(693967),d=n.n(l),E=n(821770),h=n(915105),L=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],P=t.forwardRef(function(j,B){var Z,K=j.prefixCls,T=K===void 0?"rc-switch":K,z=j.className,y=j.checked,R=j.defaultChecked,U=j.disabled,H=j.loadingIcon,Y=j.checkedChildren,k=j.unCheckedChildren,N=j.onClick,F=j.onChange,$=j.onKeyDown,X=(0,a.Z)(j,L),W=(0,E.default)(!1,{value:y,defaultValue:R}),q=(0,s.Z)(W,2),G=q[0],tn=q[1];function p(o,e){var r=G;return U||(r=o,tn(r),F==null||F(r,e)),r}function en(o){o.which===h.Z.LEFT?p(!1,o):o.which===h.Z.RIGHT&&p(!0,o),$==null||$(o)}function nn(o){var e=p(!G,o);N==null||N(e,o)}var sn=d()(T,z,(Z={},(0,c.Z)(Z,"".concat(T,"-checked"),G),(0,c.Z)(Z,"".concat(T,"-disabled"),U),Z));return t.createElement("button",(0,M.Z)({},X,{type:"button",role:"switch","aria-checked":G,disabled:U,className:sn,ref:B,onKeyDown:en,onClick:nn}),H,t.createElement("span",{className:"".concat(T,"-inner")},t.createElement("span",{className:"".concat(T,"-inner-checked")},Y),t.createElement("span",{className:"".concat(T,"-inner-unchecked")},k)))});P.displayName="Switch",i.Z=P}}]);
