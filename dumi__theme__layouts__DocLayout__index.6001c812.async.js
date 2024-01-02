"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[40367],{49313:function(zn,Z,n){n.d(Z,{Z:function(){return dn},f:function(){return S}});var Y=n(667294),S=Y.createContext(!1);function dn(){return Y.useContext(S)}},438746:function(zn,Z,n){n.d(Z,{Z:function(){return E}});var Y=n(97857),S=n.n(Y),dn=n(952677),x=n.n(dn),b=n(805574),N=n.n(b),gn=n(385956),l=n(667294),d=n(302559);function M(W){return W.replace("-cn","").replace(/\/$/,"")}function E(){var W=(0,gn.useLocation)(),q=W.search,_=(0,d.Z)(),c=N()(_,2),o=c[1],u=l.useCallback(function(e,w){var g=M(e);if(o==="cn"&&(g="".concat(g,"-cn")),q&&(g="".concat(g).concat(q)),w){var j;x()(w)==="object"?j=w[o]:j=w,g="".concat(g,"#").concat(j)}return g},[o,q]);return S()(S()({},W),{},{pathname:M(W.pathname),getLink:u})}},361446:function(zn,Z,n){var Y=n(805574),S=n.n(Y),dn=n(719632),x=n.n(dn),b=n(667294),N=n(844183),gn=n(566254),l=n(385956),d=n(472638),M=n(438746),E=n(785893),W=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=(0,l.useFullSidebarData)(),o=(0,M.Z)(),u=o.pathname,e=o.search,w=(0,l.useSidebarData)(),g=_.before,j=_.after,rn=(0,b.useMemo)(function(){var an,p=x()(w!=null?w:[]);if(u.startsWith("/docs/spec")){var z=p.splice(0,1);p.push.apply(p,x()(z))}if(u.startsWith("/docs/react")){var T,I=(T=Object.entries(c).find(function(F){var k=S()(F,1),L=k[0];return L.startsWith("/changelog")}))===null||T===void 0?void 0:T[1];I&&p.splice(1,0,I[0])}if(u.startsWith("/changelog")){var P,X=(P=Object.entries(c).find(function(F){var k=S()(F,1),L=k[0];return L.startsWith("/docs/react")}))===null||P===void 0?void 0:P[1];X&&(p.unshift(X[0]),p.push.apply(p,x()(X.slice(1))))}var $=function(k){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return k&&L&&(0,E.jsx)(N.Z,{color:k==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:k.replace("VERSION",gn.Z)})};return(an=p==null?void 0:p.reduce(function(F,k){if(k!=null&&k.title)if(u.startsWith("/docs/spec")){var L,G,ln=k.children.reduce(function(y,h){var s,m,B=(s=(m=h.frontmatter)===null||m===void 0?void 0:m.type)!==null&&s!==void 0?s:"default";return y[B]||(y[B]=[]),y[B].push(h),y},{}),hn=[];hn.push.apply(hn,x()((L=(G=ln.default)===null||G===void 0?void 0:G.map(function(y){return{label:(0,E.jsxs)(d.Z,{to:"".concat(y.link).concat(e),children:[g,y==null?void 0:y.title,j]}),key:y.link.replace(/(-cn$)/g,"")}}))!==null&&L!==void 0?L:[])),Object.entries(ln).forEach(function(y){var h=S()(y,2),s=h[0],m=h[1];s!=="default"&&hn.push({type:"group",label:s,key:s,children:m==null?void 0:m.map(function(B){return{label:(0,E.jsxs)(d.Z,{to:"".concat(B.link).concat(e),children:[g,B==null?void 0:B.title,j]}),key:B.link.replace(/(-cn$)/g,"")}})})}),F.push({label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:hn})}else{var yn;F.push({type:"group",label:k==null?void 0:k.title,key:k==null?void 0:k.title,children:(yn=k.children)===null||yn===void 0?void 0:yn.map(function(y){var h,s;return{label:(0,E.jsxs)(d.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[g,(0,E.jsx)("span",{children:y==null?void 0:y.title},"english"),(0,E.jsx)("span",{className:"chinese",children:(h=y.frontmatter)===null||h===void 0?void 0:h.subtitle},"chinese"),$((s=y.frontmatter)===null||s===void 0?void 0:s.tag,!g&&!j),j]}),key:y.link.replace(/(-cn$)/g,"")}})})}else{var U=k.children||[];U.every(function(y){var h;return y==null||(h=y.frontmatter)===null||h===void 0?void 0:h.date})&&U.sort(function(y,h){var s,m;return((s=y.frontmatter)===null||s===void 0?void 0:s.date)>((m=h.frontmatter)===null||m===void 0?void 0:m.date)?-1:1}),F.push.apply(F,x()(U.map(function(y){return{label:(0,E.jsxs)(d.Z,{to:"".concat(y.link).concat(e),style:{display:"flex",alignItems:"center"},children:[g,y==null?void 0:y.title,$(y.frontmatter.tag,!g&&!j),j]}),key:y.link.replace(/(-cn$)/g,"")}})))}return F},[]))!==null&&an!==void 0?an:[]},[w,c,u,e,_]);return[rn,u]};Z.Z=W},148050:function(zn,Z,n){n.r(Z),n.d(Z,{default:function(){return W}});var Y=n(168400),S=n.n(Y),dn=n(667294),x=n(639389),b=n.n(x),N=n(65630),gn=n(879587),l=n(785893),d,M="https://github.com/ant-design/ant-design/edit/master/",E=(0,N.kc)(function(q){var _=q.token,c=q.css,o=_.colorIcon,u=_.colorText,e=_.iconCls;return{editButton:c(d||(d=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),e,o,u)}});function W(q){var _=q.title,c=q.filename,o=E(),u=o.styles;return(0,l.jsx)(gn.Z,{title:_,children:(0,l.jsx)("a",{className:u.editButton,href:"".concat(M).concat(c),target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)(x.EditOutlined,{})})})}},70569:function(zn,Z,n){n.r(Z),n.d(Z,{default:function(){return bo}});var Y=n(805574),S=n.n(Y),dn=n(693967),x=n.n(dn),b=n(727484),N=n.n(b),gn=n(533852),l=n(385956),d=n(667294),M=n(715778),E=n(75529),W=n(302559),q=n(438746),_=n(168400),c=n.n(_),o=n(370917),u=n(65630),e=n(785893),w,g={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},j=function(){var t=(0,u.Fg)(),r=function v(C){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return f<=10?`
.palette-`.concat(C,"-").concat(f,` {
  background: `).concat(t["".concat(C,"-").concat(f)],`;
}
`).concat(v(C,f+1),`
    `):""},i=function v(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return C<=13?`
.palette-gray-`.concat(C,` {
  background: `).concat(g[C],`;
}
`).concat(v(C+1),`
    `):""};return(0,e.jsx)(o.xB,{styles:(0,o.iv)(w||(w=c()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),t.colorError,r("blue"),r("purple"),r("cyan"),r("green"),r("magenta"),r("red"),r("volcano"),r("orange"),r("gold"),r("yellow"),r("lime"),r("geekblue"),i())})},rn=j,an,p=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(an||(an=c()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},z,T=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(z||(z=c()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},I,P=function(){var a=(0,u.Fg)(),t=a.anchorTop;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(I||(I=c()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),t)})},X=n(510274),$,F=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.colorPrimary;return(0,e.jsx)(o.xB,{styles:(0,o.iv)($||($=c()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: `,`;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),t.colorText,t.colorTextHeading,t.fontFamily,t.colorTextHeading,t.fontFamily,t.colorSplit,r,r,t.siteMarkdownCodeBg,t.colorSplit,t.codeFamily,t.siteMarkdownCodeBg,t.borderRadius,t.colorText,Math.max(t.fontSize-1,12),t.siteMarkdownCodeBg,t.borderRadius,t.colorTextSecondary,t.colorSplit,t.colorSplit,r,t.colorTextSecondary,t.colorText,t.colorSplit,t.colorSplit,t.colorSplit,t.colorSplit,Math.max(t.fontSize-1,12),t.codeFamily,t.lineHeight,t.colorSplit,t.colorText,t.magenta7,Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),Math.max(t.fontSize-1,12),r,r,r,i,new X.C(i).setAlpha(.75).toHex8String(),r,r,t.colorWhite,r,new X.C(i).setAlpha(.75).toHexString(),r,r,new X.C(i).setAlpha(.75).toHexString(),r,r,r,r,new X.C(i).setAlpha(.6).toHexString(),r,r,r)})},k=F,L,G=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(L||(L=c()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},ln,hn=function(){var t=(0,u.Fg)(),r=t.antCls,i=t.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(ln||(ln=c()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: calc(100% - `,`px);
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
            > .demo {
              overflow: auto;
            }
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),t.lineWidth*2,t.colorBgContainer,t.colorSplit,t.borderRadiusLG,t.colorText,t.colorBgContainer,t.colorBgContainer,t.borderRadiusLG,t.borderRadiusLG,t.colorPrimary,t.colorBgContainer,t.borderRadius,t.borderRadius,t.colorText,t.fontSize,i,t.colorTextSecondary,t.colorText,r,r,t.colorText,t.colorSplit,t.fontSize,t.borderRadius,t.borderRadius,t.colorSplit,r,r,t.borderRadius,t.borderRadius,t.colorBgContainer,t.colorSplit,t.colorSplit,t.colorTextSecondary,t.colorText,i,t.colorBgContainer,i,t.green6,t.colorBgContainer,t.purple3,t.purple6,r)})},yn=hn,U,y=function(){var a=(0,u.Fg)(),t=a.antCls,r=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(U||(U=c()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),r,t,a.colorPrimary,r,t)})},h,s=function(){var a=(0,u.Fg)(),t=a.iconCls;return(0,e.jsx)(o.xB,{styles:(0,o.iv)(h||(h=c()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,t,a.colorLinkHover)})},m,B=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(m||(m=c()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},D,O=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(D||(D=c()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},nn,cn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(nn||(nn=c()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},wn,xn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(wn||(wn=c()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},un,jn="dumi-default-",kn=function(){var a=(0,u.Fg)();return(0,e.jsx)(o.xB,{styles:(0,o.iv)(un||(un=c()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),jn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,jn,a.colorBgElevated,a.colorBgElevated,jn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},Mn,En=function(){return(0,e.jsx)(o.xB,{styles:(0,o.iv)(Mn||(Mn=c()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Tn=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T,{}),(0,e.jsx)(P,{}),(0,e.jsx)(k,{}),(0,e.jsx)(G,{}),(0,e.jsx)(yn,{}),(0,e.jsx)(y,{}),(0,e.jsx)(s,{}),(0,e.jsx)(B,{}),(0,e.jsx)(O,{}),(0,e.jsx)(cn,{}),(0,e.jsx)(xn,{}),(0,e.jsx)(En,{}),(0,e.jsx)(rn,{}),(0,e.jsx)(p,{}),(0,e.jsx)(kn,{})]})},Ln=Tn,Pn=n(97857),A=n.n(Pn),Bn=n(9783),en=n.n(Bn),vn=n(639389),Hn=n.n(vn),Nn=n(469181),In=n(344682),Zn=n(11739),Jn=n(664095),Vn=n(883458),ae=n(722449),ie="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",le="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Qn=function(t){return(0,e.jsx)(Hn(),A()(A()({},t),{},{children:(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:t.direction==="ltr"?ie:le})})}))},Kn=Qn,se=n(840070),An=n(373638),ee=n(438199),he,fe,dt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.headerHeight,v=t.colorTextHeading,C=t.fontFamily,f=t.mobileMaxWidth;return{logo:r(he||(he=c()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),i,v,C,i,v,f),title:r(fe||(fe=c()([`
      line-height: 32px;
    `])))}}),ct=function(t){var r=t.isZhCN,i=(0,l.useLocation)(),v=i.search,C=dt(),f=C.styles;return(0,e.jsx)("h1",{children:(0,e.jsxs)(l.Link,{to:An.J1("/",r,v),className:f.logo,children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,e.jsx)("span",{className:f.title,children:"Ant Design"})]})})},ut=ct,pt=n(963918),mt=n(988872),xe,ve,be,ye,we=(0,u.kc)(function(a){var t=a.css,r=a.token;return{smallStyle:t(xe||(xe=c()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:t(ve||(ve=c()([`
    color: `,`;
  `])),r.colorTextQuaternary),downOutlined:t(be||(be=c()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:t(ye||(ye=c()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),je=function(){var t=we(),r=t.styles;return(0,e.jsxs)("span",{className:r.smallStyle,children:["(",(0,e.jsx)(l.FormattedMessage,{id:"app.implementation.community"}),")"]})},Ce=function(){return[{label:(0,e.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,e.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,e.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,e.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,e.jsx)(je,{})]}),key:"ng"},{label:(0,e.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,e.jsx)(je,{})]}),key:"vue"}]},gt=function(t){var r=t.isRTL,i=we(),v=i.styles;return(0,e.jsx)(pt.Z,{menu:{items:Ce()},placement:"bottomRight",children:(0,e.jsxs)(mt.ZP,{size:"small",children:[(0,e.jsx)(l.FormattedMessage,{id:"app.header.menu.more"}),(0,e.jsx)(vn.DownOutlined,{className:x()(r?v.downOutlinedRTL:v.downOutlined,v.down)})]})})},ht=gt,ft=n(719632),de=n.n(ft),Se=n(923232),Yn=n(472638),ke,Me,xt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},vt=(0,u.kc)(function(a){var t=a.token,r=t.antCls,i=t.iconCls,v=t.fontFamily,C=t.headerHeight,f=t.menuItemBorder,V=t.colorPrimary,R=t.colorText;return{nav:(0,u.iv)(ke||(ke=c()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),v,r,r,r,40+12*2,C,C,f,R,r,i,r,V,r,r),popoverMenuNav:(0,u.iv)(Me||(Me=c()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),r,r,r,r,r)}}),bt=function(a){var t,r,i=a.isZhCN,v=a.isMobile,C=a.responsive,f=a.directionText,V=a.onLangChange,R=a.onDirectionChange,J=(0,l.useLocation)(),Q=J.pathname,pn=J.search,mn=(0,W.Z)(xt),sn=S()(mn,1),tn=sn[0],Cn=(0,l.useFullSidebarData)(),H=((t=Cn["/docs/blog"])===null||t===void 0||(t=t[0])===null||t===void 0?void 0:t.children)||[],bn=vt(),K=bn.styles,Sn=v?"inline":"horizontal",Rn=Q.split("/").filter(function(Un){return Un}).slice(0,-1).join("/"),On=Rn||"home";Q.startsWith("/changelog")?On="docs/react":Q.startsWith("/docs/resources")&&(On="docs/resources");var fn,Fn=[{label:(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,e.jsx)(l.FormattedMessage,{id:"app.header.lang"}),onClick:V,key:"switch-lang"},{label:f,onClick:R,key:"switch-direction"}].concat(de()(Ce()));v?fn=Fn:C==="crowded"&&(fn=[{label:(0,e.jsx)(vn.MenuOutlined,{}),key:"additional",children:de()(Fn)}]);var $n=[{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/spec/introduce",i,pn),children:tn.design}),key:"docs/spec"},{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/react/introduce",i,pn),children:tn.development}),key:"docs/react"},{label:(0,e.jsx)(Yn.Z,{to:An.J1("/components/overview/",i,pn),children:tn.components}),key:"components"},H.length?{label:(0,e.jsx)(Yn.Z,{to:An.J1(H.sort(function(Un,pe){var Xn,qn;return((Xn=Un.frontmatter)===null||Xn===void 0?void 0:Xn.date)>((qn=pe.frontmatter)===null||qn===void 0?void 0:qn.date)?-1:1})[0].link,i,pn),children:tn.blog}),key:"docs/blog"}:null,{label:(0,e.jsx)(Yn.Z,{to:An.J1("/docs/resources",i,pn),children:tn.resources}),key:"docs/resources"},i?{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,e.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,e.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,e.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(de()((r=fn)!==null&&r!==void 0?r:[]));return(0,e.jsx)(Se.Z,{mode:Sn,selectedKeys:[On],className:K.nav,disabledOverflow:!0,items:$n,style:{borderRight:0}})},yt=n(879587),Ee,Te,Be,Ae,Le,Gn="1.2em",wt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.colorText,v=t.colorBorder,C=t.colorBgContainer,f=t.colorBgTextHover,V=t.borderRadius,R=t.controlHeight,J=t.motionDurationMid;return{btn:r(Ee||(Ee=c()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),i,v,R,R,V,J,J,f,Gn,Gn,Gn),innerDiv:r(Te||(Te=c()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Gn,Gn),labelStyle:r(Be||(Be=c()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Gn,i,i),label1Style:r(Ae||(Ae=c()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),i,C),label2Style:r(Le||(Le=c()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),jt=function(t){var r=t.label1,i=t.label2,v=t.tooltip1,C=t.tooltip2,f=t.value,V=t.pure,R=t.onClick,J=wt(),Q=J.styles,pn=Q.btn,mn=Q.innerDiv,sn=Q.labelStyle,tn=Q.label1Style,Cn=Q.label2Style,H=(0,e.jsx)("button",{onClick:R,className:pn,"aria-label":t["aria-label"],children:(0,e.jsxs)("div",{className:"btn-inner",children:[V&&(f===1?r:i),!V&&(0,e.jsxs)("div",{className:mn,children:[(0,e.jsx)("span",{className:x()(sn,f===1?tn:Cn),children:r}),(0,e.jsx)("span",{className:x()(sn,f===1?Cn:tn),children:i})]})]})},"lang-button");return v||C?(0,e.jsx)(yt.Z,{title:f===1?v:C,children:H}):H},ce=jt,Pe,De,ze,Fe,Oe,Ne,Ie=1120,Re=1200,Ct={cn:{message:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",shortMessage:"\u8BED\u96C0\u5F81\u6587 \xB7 \u8BF4\u8BF4\u4F60\u548C\u5F00\u6E90\u7684\u6545\u4E8B\uFF0C\u8D62\u53D6 Ant Design \u7CBE\u7F8E\u5468\u8FB9 \u{1F381}",more:"\u524D\u5F80\u4E86\u89E3",link:"https://www.yuque.com/opensource2023"},en:{message:"",shortMessage:"",more:"",link:""}},St=(0,u.kc)(function(a){var t=a.token,r=a.css,i="#ced4d9";return{header:r(Pe||(Pe=c()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),t.colorBgContainer,t.boxShadowTertiary,t.mobileMaxWidth,i,i,i),menuRow:r(De||(De=c()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:r(ze||(ze=c()([`
      width: 16px;
    `]))),popoverMenu:en()({width:300},"".concat(t.antCls,"-popover-inner-content"),{padding:0}),banner:r(Fe||(Fe=c()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:r(Oe||(Oe=c()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),t.mobileMaxWidth),icon:r(Ne||(Ne=c()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),kt=function(){var t=(0,W.Z)(Ct),r=S()(t,2),i=r[0],v=r[1],C=(0,l.useSiteData)(),f=C.pkg,V=(0,An.Is)(),R=(0,d.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),J=S()(R,2),Q=J[0],pn=J[1],mn=(0,d.useContext)(ee.Z),sn=mn.direction,tn=mn.isMobile,Cn=mn.bannerVisible,H=mn.updateSiteConfig,bn=(0,d.useRef)(null),K=(0,l.useLocation)(),Sn=K.pathname,Rn=K.search,On=St(),fn=On.styles,Fn=(0,d.useCallback)(function(){pn(function(on){return A()(A()({},on),{},{menuVisible:!1})})},[]),$n=(0,d.useCallback)(function(){pn(function(on){return A()(A()({},on),{},{windowWidth:window.innerWidth})})},[]),Un=(0,d.useCallback)(function(){pn(function(on){return A()(A()({},on),{},{menuVisible:!0})})},[]),pe=(0,d.useCallback)(function(on){pn(function(Dn){return A()(A()({},Dn),{},{menuVisible:on})})},[]),Xn=function(){H({direction:sn!=="rtl"?"rtl":"ltr"})},qn=function(){H({bannerVisible:!1}),An.Fy()&&localStorage.setItem(se.ANT_DESIGN_NOT_SHOW_BANNER,N()().toISOString())};(0,d.useEffect)(function(){Fn()},[K]),(0,d.useEffect)(function(){return $n(),window.addEventListener("resize",$n),function(){window.removeEventListener("resize",$n),bn.current&&clearTimeout(bn.current)}},[]);var yo=(0,d.useCallback)(function(on){var Dn=window.location.href,re=window.location.pathname;if(/overview/.test(re)&&/0?[1-39][0-3]?x/.test(on)){window.location.href=Dn.replace(window.location.origin,on).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(on)?"":"/react","/introduce")).replace(/\/$/,"");return}var ne=new URL(Dn.replace(window.location.origin,on));ne.host.includes("antgroup")?(ne.pathname="".concat(ne.pathname.replace(/\/$/,""),"/"),window.location.href=ne.toString()):window.location.href=ne.href.replace(/\/$/,"")},[]),tt=(0,d.useCallback)(function(){var on="".concat(window.location.protocol,"//"),Dn=window.location.href.slice(on.length);An.Fy()&&localStorage.setItem("locale",An.KE(Sn)?"en-US":"zh-CN"),window.location.href=on+Dn.replace(window.location.pathname,An.J1(Sn,!An.KE(Sn),Rn).pathname)},[K]),wo=(0,d.useMemo)(function(){return sn!=="rtl"?"RTL":"LTR"},[sn]),jo=(0,d.useMemo)(function(){return sn==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[sn]),Co=Q.menuVisible,oe=Q.windowWidth,ot=Q.searching,rt=A()(en()({},f.version,f.version),V==null?void 0:V.docVersions),So=Object.keys(rt).map(function(on){return{value:rt[on],label:on}}),at=["","index","index-cn"].includes(Sn),it=v==="cn",ko=sn==="rtl",me=null;oe<Ie?me="crowded":oe<Re&&(me="narrow");var Mo=x()(fn.header,"clearfix",{"home-header":at}),ge={isZhCN:it,isRTL:ko},lt=(0,e.jsx)(bt,A()(A()({},ge),{},{responsive:me,isMobile:tn,directionText:wo,onLangChange:tt,onDirectionChange:Xn}),"nav"),_n=[lt,(0,e.jsx)(Nn.Z,{className:"version",size:"small",defaultValue:f.version,onChange:yo,dropdownStyle:jo,popupMatchSelectWidth:!1,getPopupContainer:function(Dn){return Dn.parentNode},options:So},"version"),(0,e.jsx)(ht,A()({},ge),"more"),(0,e.jsx)(ce,{onClick:tt,value:An.KE(Sn)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,e.jsx)(ce,{onClick:Xn,value:sn==="rtl"?2:1,label1:(0,e.jsx)(Kn,{className:fn.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,e.jsx)(Kn,{className:fn.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,e.jsx)(ce,{value:1,label1:(0,e.jsx)(vn.GithubOutlined,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];oe<Ie?_n=ot?[]:[lt]:oe<Re&&(_n=ot?[]:_n);var st=at?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,e.jsxs)("header",{className:Mo,children:[tn&&(0,e.jsx)(In.Z,{overlayClassName:fn.popoverMenu,placement:"bottomRight",content:_n,trigger:"click",open:Co,arrow:{arrowPointAtCenter:!0},onOpenChange:pe,children:(0,e.jsx)(vn.MenuOutlined,{className:"nav-phone-icon",onClick:Un})}),it&&Cn&&(0,e.jsx)(E.ZP,{theme:{token:{colorInfoBg:"linear-gradient(90deg, #84fab0, #8fd3f4)",colorTextBase:"#000"}},children:(0,e.jsx)(Zn.Z,{className:fn.banner,message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{children:tn?i.shortMessage:i.message}),(0,e.jsx)("a",{className:fn.link,href:i.link,target:"_blank",rel:"noreferrer",onClick:function(){var Dn,re;(Dn=(re=window).gtag)===null||Dn===void 0||Dn.call(re,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:i.link})},children:i.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:qn})}),(0,e.jsxs)(Jn.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,e.jsx)(Vn.Z,A()(A()({},st[0]),{},{children:(0,e.jsx)(ut,A()(A()({},ge),{},{location:K}))})),(0,e.jsxs)(Vn.Z,A()(A()({},st[1]),{},{className:fn.menuRow,children:[(0,e.jsx)("div",{className:"nav-search-wrapper",children:(0,e.jsx)(ae.ZP,{})}),!tn&&_n]}))]})]})},Mt=kt,Eo=n(945462),Et=n(513769),Tt=n.n(Et),He=n(777502),Bt=["children"],At=function(t){var r=t.children,i=Tt()(t,Bt);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:i.title}),(0,e.jsx)("meta",{property:"og:title",content:i.title}),i.desc&&(0,e.jsx)("meta",{name:"description",content:i.desc})]}),(0,e.jsx)("div",{style:{minHeight:"100vh"},children:r}),(0,e.jsx)(He.default,{})]})},Lt=At,Pt=n(86198),Ze=n(185209),Dt=function(){var t=(0,l.useRouteMeta)(),r=(0,d.useMemo)(function(){var f;if(!t.frontmatter.subtitle&&!t.frontmatter.title)f="404 Not Found - Ant Design";else{var V;f="".concat(t.frontmatter.subtitle||""," ").concat(((V=t.frontmatter)===null||V===void 0?void 0:V.title)||""," - Ant Design")}var R=t.frontmatter.description||"";return[f,R]},[t]),i=S()(r,2),v=i[0],C=i[1];return(0,e.jsxs)(l.Helmet,{children:[(0,e.jsx)("title",{children:v}),(0,e.jsx)("meta",{property:"og:title",content:v}),C&&(0,e.jsx)("meta",{name:"description",content:C})]})},We=Dt,zt=n(148050),Ft=n(823493),Ot=n.n(Ft),Nt=n(468990),It=n(658192),$e,Ue,Ve,Ke=["scroll","resize"],Rt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.boxShadowSecondary,v=t.antCls;return{affixTabs:r($e||($e=c()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),i,v,v,v),affixTabsFixed:r(Ue||(Ue=c()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:r(Ve||(Ve=c()([`
      text-transform: capitalize;
    `])))}}),Ge=32,Ht=function(){var t=d.useRef(null),r=d.useRef([]),i=d.useState(!1),v=S()(i,2),C=v[0],f=v[1],V=d.useState(void 0),R=S()(V,2),J=R[0],Q=R[1],pn=Rt(),mn=pn.styles,sn=mn.affixTabs,tn=mn.affixTabsFixed,Cn=mn.span;function H(K){var Sn=document.getElementById(K);if(Sn){var Rn=Sn.offsetTop-t.current.offsetHeight-Ge;(0,It.Z)(Rn)}}d.useEffect(function(){r.current=Array.from(document.querySelectorAll("h2[id]")).map(function(K){var Sn=K.id;return Sn}),f(!0)},[]),d.useEffect(function(){var K=decodeURIComponent((location.hash||"").slice(1));K&&H(K)},[C]);var bn=d.useMemo(function(){function K(){for(var Sn=window,Rn=Sn.scrollY,On=t.current.offsetHeight,fn=r.current.length-1;fn>=0;fn-=1){var Fn=r.current[fn],$n=document.getElementById(Fn),Un=$n.offsetTop-On-Ge;if(Un<=Rn){Q(Fn);return}}Q(void 0)}return Ot()(K)},[]);return d.useEffect(function(){return Ke.forEach(function(K){return window.addEventListener(K,bn)}),bn(),function(){Ke.forEach(function(K){return window.removeEventListener(K,bn)})}},[]),(0,e.jsx)("div",{className:x()(sn,J&&tn),ref:t,children:(0,e.jsx)(Nt.Z,{activeKey:J,onChange:H,items:r.current.map(function(K){return{key:K,label:(0,e.jsx)("span",{className:Cn,children:K.replace(/-/g," ")})}})})})},Zt=Ht,Xe,Je,Qe,Ye=40,te=1208,ue=24,Wt=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls;return{resourcePage:r(Xe||(Xe=c()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),te),resourceContent:r(Je||(Je=c()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Ye,te,ue,i),banner:r(Qe||(Qe=c()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Ye,te,te,ue,ue)}}),$t=function(t){var r,i=t.children,v=Wt(),C=v.styles,f=(0,l.useRouteMeta)();return(0,e.jsx)(E.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,e.jsxs)(Pt.Z,{children:[(0,e.jsx)(We,{}),(0,e.jsxs)("div",{id:"resources-page",className:C.resourcePage,children:[(0,e.jsx)(Zt,{}),(0,e.jsxs)("div",{className:C.banner,children:[(0,e.jsxs)(Ze.Z.Title,{style:{fontSize:30},children:[(r=f.frontmatter)===null||r===void 0?void 0:r.title,(0,e.jsx)(zt.default,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})]}),(0,e.jsx)("section",{children:f.frontmatter.description})]}),(0,e.jsx)("div",{className:C.resourceContent,children:i}),(0,e.jsx)(He.default,{})]})]})})},Ut=$t,Vt=n(945016),Kt=n(217187),Gt=n(524229),Xt=n(575054),Jt=n(442708),Qt=function(t){var r=t.children,i=t.fallback,v=i===void 0?(0,e.jsx)(Xt.Z.Input,{active:!0,size:"small"}):i,C=t.delay,f=C===void 0?200:C;return(0,e.jsx)(Jt.df,{triggerOnce:!0,delay:f,children:function(R){var J=R.inView,Q=R.ref;return(0,e.jsx)("div",{ref:Q,children:(0,e.jsx)(d.Suspense,{fallback:v,children:J?r:(0,e.jsx)("span",{})})})}})},Wn=Qt,qe,Yt=d.lazy(function(){return n.e(16175).then(n.bind(n,516175))}),qt=d.lazy(function(){return n.e(49148).then(n.bind(n,349148))}),_t=d.lazy(function(){return n.e(68301).then(n.bind(n,368301))}),no=d.lazy(function(){return n.e(58598).then(n.bind(n,458598))}),eo=d.lazy(function(){return Promise.resolve().then(n.bind(n,777502))}),to=d.lazy(function(){return n.e(66720).then(n.bind(n,366720))}),oo=d.lazy(function(){return Promise.all([n.e(2281),n.e(15926)]).then(n.bind(n,615926))}),ro=d.lazy(function(){return Promise.resolve().then(n.bind(n,148050))}),ao=(0,u.kc)(function(a){var t=a.token,r=a.css;return{articleWrapper:r(qe||(qe=c()([`
    padding: 0 170px 32px 64px;
    &.rtl {
      padding: 0 64px 144px 170px;
    }
    @media only screen and (max-width: `,`px) {
      &,
      &.rtl {
        padding: 0 48px;
      }
    }
  `])),t.screenLG)}}),io=function(t){var r,i,v,C=t.children,f=(0,l.useRouteMeta)(),V=(0,q.Z)(),R=V.pathname,J=V.hash,Q=(0,d.useContext)(ee.Z),pn=Q.direction,mn=ao(),sn=mn.styles,tn=(0,Kt.Z)(!1),Cn=S()(tn,2),H=Cn[0],bn=Cn[1],K=(0,d.useMemo)(function(){var fn;return((fn=f.toc)===null||fn===void 0?void 0:fn.filter(function(Fn){return Fn._debug_demo}).map(function(Fn){return Fn.id}))||[]},[f]),Sn=K.includes(J.slice(1));(0,d.useLayoutEffect)(function(){bn(Sn)},[]);var Rn=(0,d.useMemo)(function(){return{showDebug:H,setShowDebug:bn}},[H,K]),On=pn==="rtl";return(0,e.jsx)(Gt.Z.Provider,{value:Rn,children:(0,e.jsxs)(Vn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,e.jsx)(Wn,{fallback:null,children:(0,e.jsx)(_t,{showDebug:H,debugDemos:K})}),(0,e.jsxs)("article",{className:x()(sn.articleWrapper,{rtl:On}),children:[(r=f.frontmatter)!==null&&r!==void 0&&r.title?(0,e.jsxs)(Ze.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,e.jsxs)(Vt.Z,{size:"small",children:[(i=f.frontmatter)===null||i===void 0?void 0:i.title,(v=f.frontmatter)===null||v===void 0?void 0:v.subtitle,!R.startsWith("/components/overview")&&(0,e.jsx)(Wn,{fallback:null,children:(0,e.jsx)(ro,{title:(0,e.jsx)(l.FormattedMessage,{id:"app.content.edit-page"}),filename:f.frontmatter.filename})})]}),R.startsWith("/components/")&&(0,e.jsx)(Wn,{fallback:null,children:(0,e.jsx)(oo,{pathname:R})})]}):null,(0,e.jsx)(Wn,{fallback:null,children:(0,e.jsx)(no,{})}),!f.frontmatter.__autoDescription&&f.frontmatter.description,(0,e.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:C}),(0,e.jsx)(Wn,{children:(0,e.jsx)(qt,{zhihuLink:f.frontmatter.zhihu_url,yuqueLink:f.frontmatter.yuque_url,juejinLink:f.frontmatter.juejin_url})}),(0,e.jsx)(Wn,{children:(0,e.jsx)(Yt,{filename:f.frontmatter.filename})})]}),(0,e.jsx)(Wn,{fallback:null,children:(0,e.jsx)(to,{rtl:On})}),(0,e.jsx)(eo,{})]})})},lo=io,so=n(650010),co=n(361446),_e,nt,uo=(0,u.kc)(function(a){var t=a.token,r=a.css,i=t.antCls,v=t.fontFamily,C=t.colorSplit;return{asideContainer:r(_e||(_e=c()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),v,i,i,i,i,i,i,C,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),mainMenu:r(nt||(nt=c()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),t.headerHeight+t.contentMarginTop,t.headerHeight+t.contentMarginTop)}}),po=function(){var t=(0,l.useSidebarData)(),r=(0,d.useContext)(ee.Z),i=r.isMobile,v=r.theme,C=uo(),f=C.styles,V=(0,co.Z)(),R=S()(V,2),J=R[0],Q=R[1],pn=v.includes("dark"),mn=(0,u.Fg)(),sn=mn.colorBgContainer,tn=(0,e.jsx)(E.ZP,{theme:{components:{Menu:{itemBg:sn,darkItemBg:sn}}},children:(0,e.jsx)(Se.Z,{items:J,inlineIndent:30,className:f.asideContainer,mode:"inline",theme:pn?"dark":"light",selectedKeys:[Q],defaultOpenKeys:t==null?void 0:t.map(function(Cn){var H=Cn.title;return H}).filter(function(Cn){return Cn})})});return i?(0,e.jsx)(so.Z,{children:tn},"Mobile-menu"):(0,e.jsx)(Vn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:f.mainMenu,children:(0,e.jsx)("section",{className:"main-menu-inner",children:tn})})},mo=po,et,go=(0,u.kc)(function(a){var t=a.css,r=a.token;return{main:t(et||(et=c()([`
    display: flex;
    margin-top: `,`px;
  `])),r.contentMarginTop)}}),ho=function(t){var r=t.children,i=go(),v=i.styles;return(0,e.jsxs)("main",{className:v.main,children:[(0,e.jsx)(We,{}),(0,e.jsx)(mo,{}),(0,e.jsx)(lo,{children:r})]})},fo=ho,xo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},vo=function(){var t=(0,l.useOutlet)(),r=(0,q.Z)(),i=r.pathname,v=r.search,C=r.hash,f=(0,W.Z)(xo),V=S()(f,2),R=V[0],J=V[1],Q=(0,d.useRef)(null),pn=(0,d.useContext)(ee.Z),mn=pn.direction,sn=(0,l.useSiteData)(),tn=sn.loading;(0,d.useLayoutEffect)(function(){J==="cn"?N().locale("zh-cn"):N().locale("en")},[]),(0,d.useEffect)(function(){var H=document.getElementById("nprogress-style");H&&(Q.current=setTimeout(function(){var bn;(bn=H.parentNode)===null||bn===void 0||bn.removeChild(H)},0))},[]),(0,d.useEffect)(function(){var H,bn=C.replace("#","");bn&&((H=document.getElementById(decodeURIComponent(bn)))===null||H===void 0||H.scrollIntoView())},[tn,C]),(0,d.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",i+v)},[r]);var Cn=(0,d.useMemo)(function(){return["","/"].some(function(H){return H===i})||["/index"].some(function(H){return i.startsWith(H)})?(0,e.jsx)(Lt,{title:R.title,desc:R.description,children:t}):i.startsWith("/docs/resource")?(0,e.jsx)(Ut,{children:t}):i.startsWith("/theme-editor")?t:(0,e.jsx)(fo,{children:t})},[i,t]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.Helmet,{encodeSpecialCharacters:!1,children:[(0,e.jsx)("html",{lang:J==="cn"?"zh-CN":J,"data-direction":mn,className:x()({rtl:mn==="rtl"})}),(0,e.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,e.jsx)("meta",{property:"og:description",content:R.description}),(0,e.jsx)("meta",{property:"og:type",content:"website"}),(0,e.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,e.jsxs)(E.ZP,{direction:mn,locale:J==="cn"?M.Z:void 0,children:[(0,e.jsx)(Ln,{}),(0,e.jsx)(Mt,{}),Cn]})]})},bo=vo},840070:function(zn,Z,n){n.r(Z),n.d(Z,{ANT_DESIGN_NOT_SHOW_BANNER:function(){return P},default:function(){return F}});var Y=n(97857),S=n.n(Y),dn=n(805574),x=n.n(dn),b=n(667294),N=n(900210),gn=n(368655),l=n(359020),d=n(965516),M=n(682582),E=n(385956),W=n(49313),q=n(217187),_=n(438746),c=n(513769),o=n.n(c),u=n(75529),e=n(65630),w=n(438199),g=n(785893),j=["children","theme"],rn=64,an=38,p=function(L){var G=L.children,ln=L.theme,hn=o()(L,j),yn=(0,b.useContext)(u.ZP.ConfigContext),U=yn.getPrefixCls,y=yn.iconPrefixCls,h=U(),s=d.Z.useToken(),m=s.token,B=(0,b.useContext)(w.Z),D=B.bannerVisible;return b.useEffect(function(){u.ZP.config({theme:ln})},[ln]),(0,g.jsx)(e.f6,S()(S()({},hn),{},{theme:ln,customToken:{headerHeight:rn,bannerHeight:an,menuItemBorder:2,mobileMaxWidth:767.99,siteMarkdownCodeBg:m.colorFillTertiary,antCls:".".concat(h),iconCls:".".concat(y),marginFarXS:m.marginXXL/6*7,marginFarSM:m.marginXXL/3*5,marginFar:m.marginXXL*2,codeFamily:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",contentMarginTop:40,anchorTop:rn+m.margin+(D?an:0)},children:G}))},z=p,T=b.lazy(function(){return Promise.all([n.e(7898),n.e(14137),n.e(50263)]).then(n.bind(n,531434))}),I=768,P="ANT_DESIGN_NOT_SHOW_BANNER",X=function(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return L.map(function(G){return G==="dark"?d.Z.darkAlgorithm:G==="compact"?d.Z.compactAlgorithm:null}).filter(function(G){return G})},$=function(){var L=(0,E.useOutlet)(),G=(0,_.Z)(),ln=G.pathname,hn=(0,E.useSearchParams)(),yn=x()(hn,2),U=yn[0],y=yn[1],h=(0,q.Z)({isMobile:!1,direction:"ltr",theme:[],bannerVisible:!1}),s=x()(h,2),m=s[0],B=m.theme,D=B===void 0?[]:B,O=m.direction,nn=m.isMobile,cn=m.bannerVisible,wn=cn===void 0?!1:cn,xn=s[1],un=(0,b.useCallback)(function(A){xn(function(vn){return S()(S()({},vn),A)});var Bn=U.toString(),en=U;Object.entries(A).forEach(function(vn){var Hn=x()(vn,2),Nn=Hn[0],In=Hn[1];if(Nn==="direction"&&(In==="rtl"?en.set("direction","rtl"):en.delete("direction")),Nn==="theme"){var Zn;en=(0,E.createSearchParams)(S()(S()({},en),{},{theme:In.filter(function(Jn){return Jn!=="light"})})),(Zn=document.querySelector("html"))===null||Zn===void 0||Zn.setAttribute("data-prefers-color",In.includes("dark")?"dark":"light")}}),en.toString()!==Bn&&y(en)},[U,y]),jn=function(){un({isMobile:window.innerWidth<I})};(0,b.useEffect)(function(){var A=U.getAll("theme"),Bn=U.get("direction");return xn({theme:A,direction:Bn==="rtl"?"rtl":"ltr"}),jn(),window.addEventListener("resize",jn),function(){window.removeEventListener("resize",jn)}},[]);var kn=(0,b.useMemo)(function(){return{direction:O,updateSiteConfig:un,theme:D,isMobile:nn,bannerVisible:wn}},[nn,O,un,D,wn]),Mn=b.useState(function(){return(0,N.createCache)()}),En=x()(Mn,1),Tn=En[0];(0,E.useServerInsertedHTML)(function(){var A=(0,N.extractStyle)(Tn,{plain:!0,types:"style"});return(0,g.jsx)("style",{"data-type":"antd-cssinjs",dangerouslySetInnerHTML:{__html:A}})}),(0,E.useServerInsertedHTML)(function(){var A=(0,N.extractStyle)(Tn,{plain:!0,types:["cssVar","token"]});return(0,g.jsx)("style",{"data-type":"antd-css-var","data-rc-order":"prepend","data-rc-priority":"-9999",dangerouslySetInnerHTML:{__html:A}})}),(0,E.useServerInsertedHTML)(function(){return(0,g.jsx)("style",{"data-sandpack":"true",id:"sandpack",dangerouslySetInnerHTML:{__html:(0,l.$Z)()}})});var Ln=ln.startsWith("/~demos"),Pn=L;return Ln||(Pn=(0,g.jsxs)(M.Z,{children:[L,(0,g.jsx)(b.Suspense,{children:(0,g.jsx)(T,{value:D,onChange:function(Bn){return un({theme:Bn})}})})]})),(0,g.jsx)(W.f.Provider,{value:D.includes("dark"),children:(0,g.jsx)(N.StyleProvider,{cache:Tn,linters:[N.legacyNotSelectorLinter,N.parentSelectorLinter,N.NaNLinter],children:(0,g.jsx)(w.Z.Provider,{value:kn,children:(0,g.jsx)(z,{theme:{algorithm:X(D),token:{motion:!D.includes("motion-off")},cssVar:!0},children:(0,g.jsx)(gn.R,{disabled:!D.includes("happy-work"),children:Pn})})})})})},F=$},777502:function(zn,Z,n){n.r(Z),n.d(Z,{default:function(){return z}});var Y=n(805574),S=n.n(Y),dn=n(168400),x=n.n(dn),b=n(639389),N=n(510274),gn=n(65630),l=n(385956),d=n(391298),M=n(667294),E=n(630770),W=n(302559),q=n(438746),_=n(438199),c=n(693399),o=n(785893),u="ant-where-checker",e={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function w(){var T=(0,W.Z)(e),I=S()(T,1),P=I[0],X=M.useState(!0),$=S()(X,2),F=$[0],k=$[1];return M.useEffect(function(){var L=document.createElement("p");L.className=u,L.style.position="fixed",L.style.pointerEvents="none",L.style.visibility="hidden",L.style.width="0",document.body.appendChild(L),(0,c.updateCSS)(`
:where(.`.concat(u,`) {
  content: "__CHECK__";
}
    `),u);var G=getComputedStyle(L),ln=G.content;k(String(ln).includes("CHECK")),document.body.removeChild(L),(0,c.removeCSS)(u)},[]),F?null:(0,o.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[P.whereNotSupport," ",(0,o.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:P.whereDocUrl,children:P.whereDocTitle})]})})}var g,j,rn={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},an=function(){var I=(0,M.useContext)(_.Z),P=I.isMobile;return(0,gn.kc)(function(X){var $=X.token,F=X.css,k=new N.C((0,E.Z)("#f0f3fa","#fff")).onBackground($.colorBgContainer).toHexString();return{holder:F(g||(g=x()([`
      background: `,`;
    `])),k),footer:F(j||(j=x()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),k,$.colorTextSecondary,$.colorText,P?60:0,P?20:0,$.marginXXL,$.fontSize)}})()},p=function(){var I=(0,q.Z)(),P=(0,W.Z)(rn),X=S()(P,2),$=X[0],F=X[1],k=an(),L=k.styles,G=I.getLink,ln=M.useMemo(function(){var hn=F==="cn",yn={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:hn?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:hn?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:hn?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},U={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.community"}),items:[{icon:(0,o.jsx)(b.AntDesignOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,o.jsx)(b.MediumOutlined,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,o.jsx)(b.TwitterOutlined,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(b.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,o.jsx)(b.ZhihuOutlined,{style:{color:"#056de8"}}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};hn&&U.items.push({icon:(0,o.jsx)(b.UsergroupAddOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.work_with_us"}),url:G("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.Link});var y={title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.help"}),items:[{icon:(0,o.jsx)(b.GithubOutlined,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,o.jsx)(b.HistoryOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.change-log"}),url:G("/changelog"),LinkComponent:l.Link},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.faq"}),url:G("/docs/react/faq"),LinkComponent:l.Link},{icon:(0,o.jsx)(b.BugOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,o.jsx)(b.IssuesCloseOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,o.jsx)(b.MessageOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,o.jsx)(b.QuestionCircleOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},h={icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.more-product"}),items:[{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://mdn.alipayobjects.com/huamei_j9rjmc/afts/img/A*3ittT5OEo2gAAAAAAAAAAAAADvGmAQ/original",width:16,height:16,alt:"Galacean"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean"}),description:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.galacean.slogan"}),url:"https://galacean.antgroup.com/",openExternal:!0},{icon:(0,o.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,o.jsx)(b.BgColorsOutlined,{}),title:(0,o.jsx)(l.FormattedMessage,{id:"app.footer.theme"}),url:G("/theme-editor"),LinkComponent:l.Link}]};return[yn,U,y,h]},[F,I.search]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.Z,{columns:ln,className:L.footer,bottom:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,o.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,o.jsx)("div",{children:$.owner})]})}),(0,o.jsx)(w,{})]})},z=p},373638:function(zn,Z,n){n.d(Z,{J1:function(){return M},Is:function(){return c},Fy:function(){return W},KE:function(){return d},qE:function(){return E}});var Y=n(661227),S=n(805574),dn=n(97857),x=n(385564),b=n(842348),N=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),gn={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":N?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function l(o,u,e,w){var g=o.map(function(p){return p.meta}).filter(function(p){return!p.skip}),j=[],rn=function(z,T){return(z.order||0)-(T.order||0)};g.sort(rn).forEach(function(p){if(p.category&&(p.category=p.category[u]||p.category),p.type&&(p.type=p.type[u]||p.type),p!=null&&p.title&&(p.title=p.title[u]||p.title),!p.category){j.push(p);return}if(p.category==="Components"&&p.type){var z=j.find(function(P){return(P==null?void 0:P.title)===p.type});z||(z={type:"type",title:p.type,children:[],order:w[p.type]},j.push(z)),z.children=z.children||[],z.children.push(p);return}var T=j.find(function(P){return(P==null?void 0:P.title)===p.category});if(T||(T={type:"category",title:p.category,children:[],order:e[p.category]},j.push(T)),T.children=T.children||[],p.type){var I=T.children.filter(function(P){return(P==null?void 0:P.title)===p.type})[0];I||(I={type:"type",title:p.type,children:[],order:w[p.type]},T.children.push(I)),I.children=I.children||[],I.children.push(p)}else T.children.push(p)});function an(p){return p.sort(rn).map(function(z){return z.children?_objectSpread(_objectSpread({},z),{},{children:an(z.children)}):z})}return an(j)}function d(o){return/-cn\/?$/.test(o)}function M(o,u,e,w){var g=o.startsWith("/")?o:"/".concat(o),j;if(u?g==="/"?j="/index-cn":g.endsWith("/")?j=g.replace(/\/$/,"-cn/"):(j="".concat(g,"-cn"),j=j.replace(/(-cn)+/,"-cn")):j=/\/?index-cn/.test(g)?"/":g.replace("-cn",""),w){var rn=w[u?"zhCN":"enUS"];j+="#".concat(rn)}return{pathname:j,search:e}}function E(o){var u="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",e=new Image,w,g=function(rn){w||(w=!0,e.src="",o(rn))};return e.onload=function(){return g("responded")},e.onerror=function(){return g("error")},e.src=u,setTimeout(function(){return g("timeout")},1500)}function W(){var o="test",u=window.localStorage;try{return u.setItem(o,"1"),u.removeItem(o),!0}catch(e){return!1}}function q(o){return new Promise(function(u,e){var w=document.createElement("script");w.type="text/javascript",w.src=o,w.onload=u,w.onerror=e,document.head.appendChild(w)})}function _(o){var u=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(o))return"";var e=flattenDeep(o.filter(function(w){if(Array.isArray(w)){var g=_slicedToArray(w,1),j=g[0];return j==="p"}return!1}).map(function(w){var g=flatten(w),j=_toArray(g),rn=j[0],an=j.slice(1),p=an.filter(function(z){return typeof z=="string"&&!u.includes(z)}).join("");return[rn,p]})).find(function(w){return w&&typeof w=="string"&&!u.includes(w)});return e}var c=function(){return gn}},647727:function(zn,Z,n){n.d(Z,{Z:function(){return Y.Z}});var Y=n(582485)},682582:function(zn,Z,n){n.d(Z,{Z:function(){return p}});var Y=n(97857),S=n.n(Y),dn=n(805574),x=n.n(dn),b=n(667294),N=n(693967),gn=n.n(N),l=n(73287),d=n(215570),M=n(578898),E=n(890887),W=b.createContext({}),q=b.createContext({message:{},notification:{},modal:{}}),_=q,c=n(9783),o=n.n(c),u=n(286665),e=function(T){var I=T.componentCls,P=T.colorText,X=T.fontSize,$=T.lineHeight,F=T.fontFamily;return o()({},I,{color:P,fontSize:X,lineHeight:$,fontFamily:F})},w=function(){return{}},g=(0,u.I$)("App",e,w),j=n(785893),rn=function(){return b.useContext(_)},an=function(T){var I=T.prefixCls,P=T.children,X=T.className,$=T.rootClassName,F=T.message,k=T.notification,L=T.style,G=T.component,ln=G===void 0?"div":G,hn=(0,b.useContext)(l.E_),yn=hn.getPrefixCls,U=yn("app",I),y=g(U),h=x()(y,3),s=h[0],m=h[1],B=h[2],D=gn()(m,U,X,$,B),O=(0,b.useContext)(W),nn=b.useMemo(function(){return{message:S()(S()({},O.message),F),notification:S()(S()({},O.notification),k)}},[F,k,O.message,O.notification]),cn=(0,d.Z)(nn.message),wn=x()(cn,2),xn=wn[0],un=wn[1],jn=(0,E.Z)(nn.notification),kn=x()(jn,2),Mn=kn[0],En=kn[1],Tn=(0,M.Z)(),Ln=x()(Tn,2),Pn=Ln[0],A=Ln[1],Bn=b.useMemo(function(){return{message:xn,notification:Mn,modal:Pn}},[xn,Mn,Pn]),en=ln===!1?b.Fragment:ln,vn={className:D,style:L};return s((0,j.jsx)(_.Provider,{value:Bn,children:(0,j.jsx)(W.Provider,{value:nn,children:(0,j.jsxs)(en,S()(S()({},ln===!1?void 0:vn),{},{children:[A,un,En,P]}))})}))};an.useApp=rn;var p=an},86198:function(zn,Z,n){n.d(Z,{Z:function(){return y}});var Y=n(719632),S=n.n(Y),dn=n(9783),x=n.n(dn),b=n(805574),N=n.n(b),gn=n(513769),l=n.n(gn),d=n(97857),M=n.n(d),E=n(667294),W=n(693967),q=n.n(W),_=n(518475),c=n(73287),o=n(121790),u=n(45598),e=n(296708);function w(h,s,m){if(typeof m=="boolean")return m;if(h.length)return!0;var B=(0,u.default)(s);return B.some(function(D){return D.type===e.Z})}var g=n(900210),j=n(286665),rn=function(s){var m,B=s.componentCls,D=s.bodyBg,O=s.lightSiderBg,nn=s.lightTriggerBg,cn=s.lightTriggerColor;return x()({},"".concat(B,"-sider-light"),(m={background:O},x()(m,"".concat(B,"-sider-trigger"),{color:cn,background:nn}),x()(m,"".concat(B,"-sider-zero-width-trigger"),{color:cn,background:nn,border:"1px solid ".concat(D),borderInlineStart:0}),m))},an=rn,p=function(s){var m,B,D=s.antCls,O=s.componentCls,nn=s.colorText,cn=s.triggerColor,wn=s.footerBg,xn=s.triggerBg,un=s.headerHeight,jn=s.headerPadding,kn=s.headerColor,Mn=s.footerPadding,En=s.triggerHeight,Tn=s.zeroTriggerHeight,Ln=s.zeroTriggerWidth,Pn=s.motionDurationMid,A=s.motionDurationSlow,Bn=s.fontSize,en=s.borderRadius,vn=s.bodyBg,Hn=s.headerBg,Nn=s.siderBg;return B={},x()(B,O,M()(M()((m={display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:vn,"&, *":{boxSizing:"border-box"}},x()(m,"&".concat(O,"-has-sider"),x()({flexDirection:"row"},"> ".concat(O,", > ").concat(O,"-content"),{width:0})),x()(m,"".concat(O,"-header, &").concat(O,"-footer"),{flex:"0 0 auto"}),x()(m,"".concat(O,"-sider"),{position:"relative",minWidth:0,background:Nn,transition:"all ".concat(Pn,", background 0s"),"&-children":x()({height:"100%",marginTop:-.1,paddingTop:.1},"".concat(D,"-menu").concat(D,"-menu-inline-collapsed"),{width:"auto"}),"&-has-trigger":{paddingBottom:En},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:En,color:cn,lineHeight:(0,g.unit)(En),textAlign:"center",background:xn,cursor:"pointer",transition:"all ".concat(Pn)},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:un,insetInlineEnd:s.calc(Ln).mul(-1).equal(),zIndex:1,width:Ln,height:Tn,color:cn,fontSize:s.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:Nn,borderStartStartRadius:0,borderStartEndRadius:en,borderEndEndRadius:en,borderEndStartRadius:0,cursor:"pointer",transition:"background ".concat(A," ease"),"&::after":{position:"absolute",inset:0,background:"transparent",transition:"all ".concat(A),content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:s.calc(Ln).mul(-1).equal(),borderStartStartRadius:en,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:en}}}}),m),an(s)),{},{"&-rtl":{direction:"rtl"}})),x()(B,"".concat(O,"-header"),x()({height:un,padding:jn,color:kn,lineHeight:(0,g.unit)(un),background:Hn},"".concat(D,"-menu"),{lineHeight:"inherit"})),x()(B,"".concat(O,"-footer"),{padding:Mn,color:nn,fontSize:Bn,background:wn}),x()(B,"".concat(O,"-content"),{flex:"auto",minHeight:0}),B},z=function(s){var m=s.colorBgLayout,B=s.controlHeight,D=s.controlHeightLG,O=s.colorText,nn=s.controlHeightSM,cn=s.marginXXS,wn=s.colorTextLightSolid,xn=s.colorBgContainer,un=D*1.25;return{colorBgHeader:"#001529",colorBgBody:m,colorBgTrigger:"#002140",bodyBg:m,headerBg:"#001529",headerHeight:B*2,headerPadding:"0 ".concat(un,"px"),headerColor:O,footerPadding:"".concat(nn,"px ").concat(un,"px"),footerBg:m,siderBg:"#001529",triggerHeight:D+cn*2,triggerBg:"#002140",triggerColor:wn,zeroTriggerWidth:D,zeroTriggerHeight:D,lightSiderBg:xn,lightTriggerBg:xn,lightTriggerColor:O}},T=(0,j.I$)("Layout",function(h){return[p(h)]},z,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]}),I=n(785893),P=["prefixCls","suffixCls","className","tagName"],X=["prefixCls","className","rootClassName","children","hasSider","tagName","style"];function $(h){var s=h.suffixCls,m=h.tagName,B=h.displayName;return function(D){var O=E.forwardRef(function(nn,cn){return(0,I.jsx)(D,M()({ref:cn,suffixCls:s,tagName:m},nn))});return O}}var F=E.forwardRef(function(h,s){var m=h.prefixCls,B=h.suffixCls,D=h.className,O=h.tagName,nn=l()(h,P),cn=E.useContext(c.E_),wn=cn.getPrefixCls,xn=wn("layout",m),un=T(xn),jn=N()(un,3),kn=jn[0],Mn=jn[1],En=jn[2],Tn=B?"".concat(xn,"-").concat(B):xn;return kn((0,I.jsx)(O,M()({className:q()(m||Tn,D,Mn,En),ref:s},nn)))}),k=E.forwardRef(function(h,s){var m,B=E.useContext(c.E_),D=B.direction,O=E.useState([]),nn=N()(O,2),cn=nn[0],wn=nn[1],xn=h.prefixCls,un=h.className,jn=h.rootClassName,kn=h.children,Mn=h.hasSider,En=h.tagName,Tn=h.style,Ln=l()(h,X),Pn=(0,_.default)(Ln,["suffixCls"]),A=E.useContext(c.E_),Bn=A.getPrefixCls,en=A.layout,vn=Bn("layout",xn),Hn=w(cn,kn,Mn),Nn=T(vn),In=N()(Nn,3),Zn=In[0],Jn=In[1],Vn=In[2],ae=q()(vn,(m={},x()(m,"".concat(vn,"-has-sider"),Hn),x()(m,"".concat(vn,"-rtl"),D==="rtl"),m),en==null?void 0:en.className,un,jn,Jn,Vn),ie=E.useMemo(function(){return{siderHook:{addSider:function(Qn){wn(function(Kn){return[].concat(S()(Kn),[Qn])})},removeSider:function(Qn){wn(function(Kn){return Kn.filter(function(se){return se!==Qn})})}}}},[]);return Zn((0,I.jsx)(o.V.Provider,{value:ie,children:(0,I.jsx)(En,M()(M()({ref:s,className:ae,style:M()(M()({},en==null?void 0:en.style),Tn)},Pn),{},{children:kn}))}))}),L=$({tagName:"div",displayName:"Layout"})(k),G=$({suffixCls:"header",tagName:"header",displayName:"Header"})(F),ln=$({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(F),hn=$({suffixCls:"content",tagName:"main",displayName:"Content"})(F),yn=L,U=yn;U.Header=G,U.Footer=ln,U.Content=hn,U.Sider=e.Z,U._InternalSiderContext=e.D;var y=U},715778:function(zn,Z,n){n.d(Z,{Z:function(){return W}});var Y=n(174219),S=n(97857),dn=n.n(S),x=n(585369),b={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},N=b,gn={lang:dn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},x.Z),timePickerLocale:dn()({},N)};gn.lang.ok="\u786E\u5B9A";var l=gn,d=l,M="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",E={locale:"zh-cn",Pagination:Y.Z,DatePicker:l,TimePicker:N,Calendar:d,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:M,method:M,array:M,object:M,number:M,date:M,boolean:M,integer:M,float:M,regexp:M,email:M,url:M,hex:M},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},W=E}}]);
