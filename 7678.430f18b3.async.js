"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[7678],{807678:function(k,h,o){o.r(h),o.d(h,{scopes:function(){return x}});var d=o(667294),a=o(181632),S=o(371707),b=o(75529),x={"carousel-demo-basic":{React:d,Carousel:a.Z},"carousel-demo-position":{React:d,useState:d.useState,Carousel:a.Z,Radio:S.ZP},"carousel-demo-autoplay":{React:d,Carousel:a.Z},"carousel-demo-fade":{React:d,Carousel:a.Z},"carousel-demo-component-token":{React:d,Carousel:a.Z,ConfigProvider:b.ZP}}},181632:function(k,h,o){o.d(h,{Z:function(){return Q}});var d=o(9783),a=o.n(d),S=o(805574),b=o.n(S),x=o(97857),r=o.n(x),M=o(513769),z=o.n(M),c=o(667294),j=o(777602),w=o(693967),A=o.n(w),Z=o(73287),X=o(900210),$=o(548073),B=o(286665),L=o(986943),F=function(t){var i,s=t.componentCls,n=t.antCls,l=t.carouselArrowSize,m=t.carouselDotOffset,p=t.marginXXS,C=t.calc(l).mul(-1.25).equal(),f=p;return a()({},s,r()(r()({},(0,$.Wf)(t)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":(i={pointerEvents:"none"},a()(i,"input".concat(n,"-radio-input, input").concat(n,"-checkbox-input"),{visibility:"hidden"}),a()(i,"&.slick-active",a()({pointerEvents:"auto"},"input".concat(n,"-radio-input, input").concat(n,"-checkbox-input"),{visibility:"visible"})),a()(i,"> div > div",{verticalAlign:"bottom"}),i)},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"},".slick-arrow.slick-hidden":{display:"none"},".slick-prev, .slick-next":{position:"absolute",top:"50%",display:"block",width:l,height:l,marginTop:t.calc(l).mul(-1).div(2).equal(),padding:0,color:"transparent",fontSize:0,lineHeight:0,background:"transparent",border:0,outline:"none",cursor:"pointer","&:hover, &:focus":{color:"transparent",background:"transparent",outline:"none","&::before":{opacity:1}},"&.slick-disabled::before":{opacity:.25}},".slick-prev":{insetInlineStart:C,"&::before":{content:'"\u2190"'}},".slick-next":{insetInlineEnd:C,"&::before":{content:'"\u2192"'}},".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:m},"&-top":{top:m,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:t.dotWidth,height:t.dotHeight,marginInline:f,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(t.motionDurationSlow),button:{position:"relative",display:"block",width:"100%",height:t.dotHeight,padding:0,color:"transparent",fontSize:0,background:t.colorBgContainer,border:0,borderRadius:t.dotHeight,outline:"none",cursor:"pointer",opacity:.3,transition:"all ".concat(t.motionDurationSlow),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:t.calc(f).mul(-1).equal(),content:'""'}},"&.slick-active":{width:t.dotActiveWidth,"& button":{background:t.colorBgContainer,opacity:1},"&: hover, &:focus":{opacity:1}}}}}))},K=function(t){var i=t.componentCls,s=t.carouselDotOffset,n=t.marginXXS,l={width:t.dotHeight,height:t.dotWidth};return a()({},"".concat(i,"-vertical"),{".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:t.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:s},"&-right":{insetInlineEnd:s,insetInlineStart:"auto"},li:r()(r()({},l),{},{margin:"".concat((0,X.unit)(n)," 0"),verticalAlign:"baseline",button:l,"&.slick-active":r()(r()({},l),{},{button:l})})}})},U=function(t){var i=t.componentCls;return[a()({},"".concat(i,"-rtl"),{direction:"rtl",".slick-dots":a()({},"".concat(i,"-rtl&"),{flexDirection:"row-reverse"})}),a()({},"".concat(i,"-vertical"),{".slick-dots":a()({},"".concat(i,"-rtl&"),{flexDirection:"column"})})]},V=function(){var t=24;return{dotWidth:16,dotHeight:3,dotWidthActive:t,dotActiveWidth:t}},G=(0,B.I$)("Carousel",function(e){var t=e.controlHeightLG,i=e.controlHeightSM,s=(0,L.TS)(e,{carouselArrowSize:e.calc(t).div(2).equal(),carouselDotOffset:e.calc(i).div(2).equal()});return[F(s),K(s),U(s)]},V,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),I=o(785893),Y=["dots","arrows","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],J=c.forwardRef(function(e,t){var i,s=e.dots,n=s===void 0?!0:s,l=e.arrows,m=l===void 0?!1:l,p=e.draggable,C=p===void 0?!1:p,f=e.waitForAnimate,q=f===void 0?!1:f,R=e.dotPosition,P=R===void 0?"bottom":R,T=e.vertical,W=T===void 0?P==="left"||P==="right":T,_=e.rootClassName,tt=e.className,ot=e.style,et=e.id,it=z()(e,Y),D=c.useContext(Z.E_),at=D.getPrefixCls,nt=D.direction,v=D.carousel,u=c.useRef(),H=function(ft){var gt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;u.current.slickGoTo(ft,gt)};c.useImperativeHandle(t,function(){return{goTo:H,autoPlay:u.current.innerSlider.autoPlay,innerSlider:u.current.innerSlider,prev:u.current.slickPrev,next:u.current.slickNext}},[u.current]);var O=c.useRef(c.Children.count(e.children));c.useEffect(function(){O.current!==c.Children.count(e.children)&&(H(e.initialSlide||0,!1),O.current=c.Children.count(e.children))},[e.children]);var g=r()({vertical:W,className:A()(tt,v==null?void 0:v.className),style:r()(r()({},v==null?void 0:v.style),ot)},it);g.effect==="fade"&&(g.fade=!0);var y=at("carousel",g.prefixCls),N="slick-dots",lt=!!n,rt=A()(N,"".concat(N,"-").concat(P),typeof n=="boolean"?!1:n==null?void 0:n.className),st=G(y),E=b()(st,3),ct=E[0],dt=E[1],ut=E[2],vt=A()(y,(i={},a()(i,"".concat(y,"-rtl"),nt==="rtl"),a()(i,"".concat(y,"-vertical"),g.vertical),i),dt,ut,_);return ct((0,I.jsx)("div",{className:vt,id:et,children:(0,I.jsx)(j.Z,r()(r()({ref:u},g),{},{dots:lt,dotsClass:rt,arrows:m,draggable:C,verticalSwiping:W,waitForAnimate:q}))}))}),Q=J}}]);
