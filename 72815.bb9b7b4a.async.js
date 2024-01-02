"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[72815],{172815:function(cr,j,e){e.r(j),e.d(j,{scopes:function(){return X}});var v=e(667294),c=e(256661),H=e(75529),a=e(639389),Y=e.n(a),X={"components-breadcrumb-demo-basic":{React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-withicon":{HomeOutlined:a.HomeOutlined,UserOutlined:a.UserOutlined,React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-separator":{React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-overlay":{React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-separator-component":{React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-debug-routes":{React:v,Breadcrumb:c.Z},"components-breadcrumb-demo-component-token":{HomeOutlined:a.HomeOutlined,UserOutlined:a.UserOutlined,React:v,Breadcrumb:c.Z,ConfigProvider:H.ZP}}},256661:function(cr,j,e){e.d(j,{Z:function(){return Hr}});var v=e(9783),c=e.n(v),H=e(97857),a=e.n(H),Y=e(805574),X=e.n(Y),dr=e(513769),g=e.n(dr),E=e(667294),ir=e(693967),U=e.n(ir),w=e(45598),k=e(430339),sr=e(106465),z=e(73287),ur=e(205085),mr=e.n(ur),vr=e(121267),i=e(785893),q=function(r){var t=r.children,n=E.useContext(z.E_),l=n.getPrefixCls,d=l("breadcrumb");return(0,i.jsx)("li",{className:"".concat(d,"-separator"),"aria-hidden":"true",children:t===""?t:t||"/"})};q.__ANT_BREADCRUMB_SEPARATOR=!0;var Z=q,fr=e(952677),br=e.n(fr),Cr=["className","onClick"];function hr(o,r){if(o.title===void 0||o.title===null)return null;var t=Object.keys(r).join("|");return br()(o.title)==="object"?o.title:String(o.title).replace(new RegExp(":(".concat(t,")"),"g"),function(n,l){return r[l]||n})}function _(o,r,t,n){if(t==null)return null;var l=r.className,d=r.onClick,s=g()(r,Cr),m=a()(a()({},(0,k.default)(s,{data:!0,aria:!0})),{},{onClick:d});return n!==void 0?(0,i.jsx)("a",a()(a()({},m),{},{className:U()("".concat(o,"-link"),l),href:n,children:t})):(0,i.jsx)("span",a()(a()({},m),{},{className:U()("".concat(o,"-link"),l),children:t}))}function gr(o,r){var t=function(l,d,s,m,f){if(r)return r(l,d,s,m);var y=hr(l,d);return _(o,l,y,f)};return t}var xr=["items"],pr=["key","title","label","path"],yr=["prefixCls","children","href"],rr=function(r){var t=r.prefixCls,n=r.separator,l=n===void 0?"/":n,d=r.children,s=r.menu,m=r.overlay,f=r.dropdownProps,y=r.href;if(!1)var O;var W=function(T){if(s||m){var x=a()({},f);if(s){var M=s||{},B=M.items,C=g()(M,xr);x.menu=a()(a()({},C),{},{items:B==null?void 0:B.map(function(b,p){var P=b.key,I=b.title,R=b.label,A=b.path,K=g()(b,pr),h=R!=null?R:I;return A&&(h=(0,i.jsx)("a",{href:"".concat(y).concat(A),children:h})),a()(a()({},K),{},{key:P!=null?P:p,label:h})})})}else m&&(x.overlay=m);return(0,i.jsx)(vr.Z,a()(a()({placement:"bottom"},x),{},{children:(0,i.jsxs)("span",{className:"".concat(t,"-overlay-link"),children:[T,(0,i.jsx)(mr(),{})]})}))}return T},S=W(d);return S!=null?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{children:S}),l&&(0,i.jsx)(Z,{children:l})]}):null},er=function(r){var t=r.prefixCls,n=r.children,l=r.href,d=g()(r,yr),s=E.useContext(z.E_),m=s.getPrefixCls,f=m("breadcrumb",t);return(0,i.jsx)(rr,a()(a()({},d),{},{prefixCls:f,children:_(f,d,n,l)}))};er.__ANT_BREADCRUMB_ITEM=!0;var Sr=er,ar=e(900210),nr=e(548073),Br=e(286665),Pr=e(986943),Ir=function(r){var t,n,l=r.componentCls,d=r.iconCls,s=r.calc;return c()({},l,a()(a()({},(0,nr.Wf)(r)),{},(n={color:r.itemColor,fontSize:r.fontSize},c()(n,d,{fontSize:r.iconFontSize}),c()(n,"ol",{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"}),c()(n,"a",a()({color:r.linkColor,transition:"color ".concat(r.motionDurationMid),padding:"0 ".concat((0,ar.unit)(r.paddingXXS)),borderRadius:r.borderRadiusSM,height:r.fontHeight,display:"inline-block",marginInline:s(r.marginXXS).mul(-1).equal(),"&:hover":{color:r.linkHoverColor,backgroundColor:r.colorBgTextHover}},(0,nr.Qy)(r))),c()(n,"li:last-child",{color:r.lastItemColor}),c()(n,"".concat(l,"-separator"),{marginInline:r.separatorMargin,color:r.separatorColor}),c()(n,"".concat(l,"-link"),c()({},`
          > `.concat(d,` + span,
          > `).concat(d,` + a
        `),{marginInlineStart:r.marginXXS})),c()(n,"".concat(l,"-overlay-link"),(t={borderRadius:r.borderRadiusSM,height:r.fontHeight,display:"inline-block",padding:"0 ".concat((0,ar.unit)(r.paddingXXS)),marginInline:s(r.marginXXS).mul(-1).equal()},c()(t,"> ".concat(d),{marginInlineStart:r.marginXXS,fontSize:r.fontSizeIcon}),c()(t,"&:hover",{color:r.linkHoverColor,backgroundColor:r.colorBgTextHover,a:{color:r.linkHoverColor}}),c()(t,"a",{"&:hover":{backgroundColor:"transparent"}}),t)),c()(n,"&".concat(r.componentCls,"-rtl"),{direction:"rtl"}),n)))},Rr=function(r){return{itemColor:r.colorTextDescription,lastItemColor:r.colorText,iconFontSize:r.fontSize,linkColor:r.colorTextDescription,linkHoverColor:r.colorText,separatorColor:r.colorTextDescription,separatorMargin:r.marginXS}},Nr=(0,Br.I$)("Breadcrumb",function(o){var r=(0,Pr.TS)(o,{});return Ir(r)},Rr),jr=["breadcrumbName","children"],Er=["breadcrumbName"];function Or(o){var r=o.breadcrumbName,t=o.children,n=g()(o,jr),l=a()({title:r},n);return t&&(l.menu={items:t.map(function(d){var s=d.breadcrumbName,m=g()(d,Er);return a()(a()({},m),{},{title:s})})}),l}function Tr(o,r){return(0,E.useMemo)(function(){return o||(r?r.map(Or):null)},[o,r])}var Mr=["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"],Ar=function(r,t){if(t===void 0)return t;var n=(t||"").replace(/^\//,"");return Object.keys(r).forEach(function(l){n=n.replace(":".concat(l),r[l])}),n},L=function(r){var t=r.prefixCls,n=r.separator,l=n===void 0?"/":n,d=r.style,s=r.className,m=r.rootClassName,f=r.routes,y=r.items,O=r.children,W=r.itemRender,S=r.params,$=S===void 0?{}:S,T=g()(r,Mr),x=E.useContext(z.E_),M=x.getPrefixCls,B=x.direction,C=x.breadcrumb,b,p=M("breadcrumb",t),P=Nr(p),I=X()(P,3),R=I[0],A=I[1],K=I[2],h=Tr(y,f);if(!1)var Gr,Jr;var Xr=gr(p,W);if(h&&h.length>0){var D=[],Ur=y||f;b=h.map(function(u,N){var F=u.path,V=u.key,Wr=u.type,tr=u.menu,lr=u.overlay,$r=u.onClick,Kr=u.className,Fr=u.separator,Vr=u.dropdownProps,Q=Ar($,F);Q!==void 0&&D.push(Q);var or=V!=null?V:N;if(Wr==="separator")return(0,i.jsx)(Z,{children:Fr},or);var G={},Qr=N===h.length-1;tr?G.menu=tr:lr&&(G.overlay=lr);var J=u.href;return D.length&&Q!==void 0&&(J="#/".concat(D.join("/"))),(0,i.jsx)(rr,a()(a()(a()({},G),(0,k.default)(u,{data:!0,aria:!0})),{},{className:Kr,dropdownProps:Vr,href:J,separator:Qr?"":l,onClick:$r,prefixCls:p,children:Xr(u,$,Ur,D,J)}),or)})}else if(O){var zr=(0,w.default)(O).length;b=(0,w.default)(O).map(function(u,N){if(!u)return u;var F=N===zr-1;return(0,sr.Tm)(u,{separator:F?"":l,key:N})})}var Zr=U()(p,C==null?void 0:C.className,c()({},"".concat(p,"-rtl"),B==="rtl"),s,m,A,K),Lr=a()(a()({},C==null?void 0:C.style),d);return R((0,i.jsx)("nav",a()(a()({className:Zr,style:Lr},T),{},{children:(0,i.jsx)("ol",{children:b})})))};L.Item=Sr,L.Separator=Z;var Dr=L,Hr=Dr}}]);
