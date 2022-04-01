"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{8508:function(e,t,n){n.d(t,{Z:function(){return Pe}});var r=n(7462),o=n(4942),a=n(4902),i=n(7294),c=n(4184),l=n.n(c),s=n(344),u=n(882),f=n(1002),p=n(1413),d=n(7685),m=n(91),v=n(5398),g={adjustX:1,adjustY:1},y=[0,0],b={topLeft:{points:["bl","tl"],overflow:g,offset:[0,-4],targetOffset:y},topCenter:{points:["bc","tc"],overflow:g,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:g,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:g,offset:[0,4],targetOffset:y},bottomCenter:{points:["tc","bc"],overflow:g,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:g,offset:[0,4],targetOffset:y}},h=n(5105),C=h.Z.ESC,E=h.Z.TAB;function N(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,o=e.menuRef,a=e.menuClassName,c=e.onVisibleChange,l=function(){t&&r.current&&(r.current.triggerRef.current&&r.current.triggerRef.current.focus(),n(!1),"function"===typeof c&&c(!1))},s=function(e){switch(e.keyCode){case C:case E:l()}};i.useEffect((function(){return t?(setTimeout((function(){!function(){if(o.current){var e,t,n,r=(null===(e=o.current.className)||void 0===e?void 0:e.includes(a))?o.current:null===(t=(n=o.current).querySelector)||void 0===t?void 0:t.call(n,a);r&&r.focus()}}(),window.addEventListener("keydown",s)}),100),function(){window.removeEventListener("keydown",s)}):function(){return null}}),[t]);return{returnFocus:function(){t&&r.current&&r.current.triggerRef.current&&setTimeout((function(){var e,t,n;null===(e=r.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||n.focus()}),100)}}}var w=n(2550),x=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function O(e,t){var n=e.arrow,r=void 0!==n&&n,a=e.prefixCls,c=void 0===a?"rc-dropdown":a,s=e.transitionName,u=e.animation,f=e.align,g=e.placement,y=void 0===g?"bottomLeft":g,h=e.placements,C=void 0===h?b:h,E=e.getPopupContainer,O=e.showAction,Z=e.hideAction,k=e.overlayClassName,P=e.overlayStyle,T=e.visible,R=e.trigger,S=void 0===R?["hover"]:R,A=(0,m.Z)(e,x),_=i.useState(),j=(0,d.Z)(_,2),I=j[0],L=j[1],D="visible"in e?T:I,B=i.useRef(null);i.useImperativeHandle(t,(function(){return B.current}));var V=i.useRef(null),M="".concat(c,"-menu"),W=N({visible:D,setTriggerVisible:L,triggerRef:B,menuRef:V,menuClassName:M,onVisibleChange:e.onVisibleChange}).returnFocus,U=function(){var t=e.overlay;return"function"===typeof t?t():t},H=function(t){var n=e.onOverlayClick,r=U().props;L(!1),n&&n(t),r.onClick&&r.onClick(t),W()},z=function(){var e=U(),t={prefixCls:M,onClick:H,ref:(0,w.Yr)(e)?V:void 0};return"string"===typeof e.type&&delete t.prefixCls,i.createElement(i.Fragment,null,r&&i.createElement("div",{className:"".concat(c,"-arrow")}),i.cloneElement(e,t))},F=Z;return F||-1===S.indexOf("contextMenu")||(F=["click"]),i.createElement(v.Z,(0,p.Z)((0,p.Z)({builtinPlacements:C},A),{},{prefixCls:c,ref:B,popupClassName:l()(k,(0,o.Z)({},"".concat(c,"-show-arrow"),r)),popupStyle:P,action:S,showAction:O,hideAction:F||[],popupPlacement:y,popupAlign:f,popupTransitionName:s,popupAnimation:u,popupVisible:D,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?z:z(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;L(t),"function"===typeof n&&n(t)},getPopupContainer:E}),function(){var t=e.children,n=t.props?t.props:{},r=l()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(c,"-open")}());return D&&t?i.cloneElement(t,{className:r}):t}())}var Z=i.forwardRef(O),k=n(8073),P=n(9705),T=n(8423),R=n(1975),S=n(3144),A=n(5671),_=(0,S.Z)((function e(t){(0,A.Z)(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))})),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},I=function(e){return i.createElement(R.C,null,(function(t){var n,a=t.getPrefixCls,c=t.direction,s=e.prefixCls,u=e.size,f=e.className,p=j(e,["prefixCls","size","className"]),d=a("btn-group",s),m="";switch(u){case"large":m="lg";break;case"small":m="sm";break;case"middle":case void 0:break;default:console.warn(new _(u).error)}var v=l()(d,(n={},(0,o.Z)(n,"".concat(d,"-").concat(m),m),(0,o.Z)(n,"".concat(d,"-rtl"),"rtl"===c),n),f);return i.createElement("div",(0,r.Z)({},p,{className:v}))}))},L=n(7326),D=n(2531),B=n(3568),V=n(4958),M=n(5164),W=0,U={};function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=W++,r=t;function o(){(r-=1)<=0?(e(),delete U[n]):U[n]=(0,M.Z)(o)}return U[n]=(0,M.Z)(o),n}H.cancel=function(e){void 0!==e&&(M.Z.cancel(U[e]),delete U[e])},H.ids=U;var z,F=n(6159);function Y(e){return!e||null===e.offsetParent||e.hidden}function q(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var G=function(e){(0,D.Z)(n,e);var t=(0,B.Z)(n);function n(){var e;return(0,A.Z)(this,n),(e=t.apply(this,arguments)).containerRef=i.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var r,o,a=e.props,i=a.insertExtraNode;if(!(a.disabled||!t||Y(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var c=(0,L.Z)(e).extraNode,l=e.context.getPrefixCls;c.className="".concat(l(""),"-click-animating-node");var s=e.getAttributeName();if(t.setAttribute(s,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&q(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){c.style.borderColor=n;var u=(null===(r=t.getRootNode)||void 0===r?void 0:r.call(t))||t.ownerDocument,f=u instanceof Document?u.body:null!==(o=u.firstChild)&&void 0!==o?o:u;z=(0,V.hq)("\n      [".concat(l(""),"-click-animating-without-extra-node='true']::after, .").concat(l(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:f})}i&&t.appendChild(c),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!Y(n.target)){e.resetEffect(t);var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,r)}),0),H.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=H((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!i.isValidElement(r))return r;var o=e.containerRef;return(0,w.Yr)(r)&&(o=(0,w.sQ)(r.ref,e.containerRef)),(0,F.Tm)(r,{ref:o})},e}return(0,S.Z)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,r=this.getAttributeName();e.setAttribute(r,"false"),z&&(z.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return i.createElement(R.C,null,this.renderWave)}}]),n}(i.Component);G.contextType=R.E_;var J=n(3355),Q=n(1687),X=n(7647),$=n(2874),K=n(888),ee=function(){return{width:0,opacity:0,transform:"scale(0)"}},te=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},ne=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?i.createElement("span",{className:"".concat(t,"-loading-icon")},i.createElement(K.Z,null)):i.createElement($.Z,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:ee,onAppearActive:te,onEnterStart:ee,onEnterActive:te,onLeaveStart:te,onLeaveActive:ee},(function(e,n){var r=e.className,o=e.style;return i.createElement("span",{className:"".concat(t,"-loading-icon"),style:o,ref:n},i.createElement(K.Z,{className:r}))}))},re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},oe=/^[\u4e00-\u9fa5]{2}$/,ae=oe.test.bind(oe);function ie(e){return"text"===e||"link"===e}function ce(e,t){if(null!=e){var n,r=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&ae(e.props.children)?(0,F.Tm)(e,{children:e.props.children.split("").join(r)}):"string"===typeof e?ae(e)?i.createElement("span",null,e.split("").join(r)):i.createElement("span",null,e):(n=e,i.isValidElement(n)&&n.type===i.Fragment?i.createElement("span",null,e):e)}}(0,J.b)("default","primary","ghost","dashed","link","text"),(0,J.b)("default","circle","round"),(0,J.b)("submit","button","reset");var le=function(e,t){var n,a=e.loading,c=void 0!==a&&a,s=e.prefixCls,u=e.type,p=void 0===u?"default":u,m=e.danger,v=e.shape,g=void 0===v?"default":v,y=e.size,b=e.className,h=e.children,C=e.icon,E=e.ghost,N=void 0!==E&&E,w=e.block,x=void 0!==w&&w,O=e.htmlType,Z=void 0===O?"button":O,k=re(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),P=i.useContext(X.Z),S=i.useState(!!c),A=(0,d.Z)(S,2),_=A[0],j=A[1],I=i.useState(!1),L=(0,d.Z)(I,2),D=L[0],B=L[1],V=i.useContext(R.E_),M=V.getPrefixCls,W=V.autoInsertSpaceInButton,U=V.direction,H=t||i.createRef(),z=function(){return 1===i.Children.count(h)&&!C&&!ie(p)},F="object"===(0,f.Z)(c)&&c.delay?c.delay||!0:!!c;i.useEffect((function(){var e=null;return"number"===typeof F?e=window.setTimeout((function(){e=null,j(F)}),F):j(F),function(){e&&(window.clearTimeout(e),e=null)}}),[F]),i.useEffect((function(){if(H&&H.current&&!1!==W){var e=H.current.textContent;z()&&ae(e)?D||B(!0):D&&B(!1)}}),[H]);var Y=function(t){var n=e.onClick,r=e.disabled;_||r?t.preventDefault():null===n||void 0===n||n(t)};(0,Q.Z)(!("string"===typeof C&&C.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(C,"` at https://ant.design/components/icon")),(0,Q.Z)(!(N&&ie(p)),"Button","`link` or `text` button can't be a `ghost` button.");var q=M("btn",s),J=!1!==W,$=y||P,K=$&&{large:"lg",small:"sm",middle:void 0}[$]||"",ee=_?"loading":C,te=l()(q,(n={},(0,o.Z)(n,"".concat(q,"-").concat(g),"default"!==g&&g),(0,o.Z)(n,"".concat(q,"-").concat(p),p),(0,o.Z)(n,"".concat(q,"-").concat(K),K),(0,o.Z)(n,"".concat(q,"-icon-only"),!h&&0!==h&&!!ee),(0,o.Z)(n,"".concat(q,"-background-ghost"),N&&!ie(p)),(0,o.Z)(n,"".concat(q,"-loading"),_),(0,o.Z)(n,"".concat(q,"-two-chinese-chars"),D&&J),(0,o.Z)(n,"".concat(q,"-block"),x),(0,o.Z)(n,"".concat(q,"-dangerous"),!!m),(0,o.Z)(n,"".concat(q,"-rtl"),"rtl"===U),n),b),oe=C&&!_?C:i.createElement(ne,{existIcon:!!C,prefixCls:q,loading:!!_}),le=h||0===h?function(e,t){var n=!1,r=[];return i.Children.forEach(e,(function(e){var t=(0,f.Z)(e),o="string"===t||"number"===t;if(n&&o){var a=r.length-1,i=r[a];r[a]="".concat(i).concat(e)}else r.push(e);n=o})),i.Children.map(r,(function(e){return ce(e,t)}))}(h,z()&&J):null,se=(0,T.Z)(k,["navigate"]);if(void 0!==se.href)return i.createElement("a",(0,r.Z)({},se,{className:te,onClick:Y,ref:H}),oe,le);var ue=i.createElement("button",(0,r.Z)({},k,{type:Z,className:te,onClick:Y,ref:H}),oe,le);return ie(p)?ue:i.createElement(G,{disabled:!!_},ue)},se=i.forwardRef(le);se.displayName="Button",se.Group=I,se.__ANT_BUTTON=!0;var ue=se,fe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},pe=ue.Group,de=function(e){var t=i.useContext(R.E_),n=t.getPopupContainer,o=t.getPrefixCls,a=t.direction,c=e.prefixCls,s=e.type,u=void 0===s?"default":s,f=e.disabled,p=e.loading,m=e.onClick,v=e.htmlType,g=e.children,y=e.className,b=e.overlay,h=e.trigger,C=e.align,E=e.visible,N=e.onVisibleChange,w=e.placement,x=e.getPopupContainer,O=e.href,Z=e.icon,k=void 0===Z?i.createElement(P.Z,null):Z,T=e.title,S=e.buttonsRender,A=void 0===S?function(e){return e}:S,_=e.mouseEnterDelay,j=e.mouseLeaveDelay,I=e.overlayClassName,L=e.overlayStyle,D=e.destroyPopupOnHide,B=fe(e,["prefixCls","type","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),V=o("dropdown-button",c),M={align:C,overlay:b,disabled:f,trigger:f?[]:h,onVisibleChange:N,getPopupContainer:x||n,mouseEnterDelay:_,mouseLeaveDelay:j,overlayClassName:I,overlayStyle:L,destroyPopupOnHide:D};"visible"in e&&(M.visible=E),M.placement="placement"in e?w:"rtl"===a?"bottomLeft":"bottomRight";var W=A([i.createElement(ue,{type:u,disabled:f,loading:p,onClick:m,htmlType:v,href:O,title:T},g),i.createElement(ue,{type:u,icon:k})]),U=(0,d.Z)(W,2),H=U[0],z=U[1];return i.createElement(pe,(0,r.Z)({},B,{className:l()(V,y)}),H,i.createElement(ye,M,z))};de.__ANT_BUTTON=!0;var me=de,ve=n(636),ge=((0,J.b)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom"),function(e){var t,n=i.useContext(R.E_),a=n.getPopupContainer,c=n.getPrefixCls,s=n.direction,u=e.arrow,p=e.prefixCls,d=e.children,m=e.trigger,v=e.disabled,g=e.getPopupContainer,y=e.overlayClassName,b=c("dropdown",p),h=i.Children.only(d),C=(0,F.Tm)(h,{className:l()("".concat(b,"-trigger"),(0,o.Z)({},"".concat(b,"-rtl"),"rtl"===s),h.props.className),disabled:v}),E=l()(y,(0,o.Z)({},"".concat(b,"-rtl"),"rtl"===s)),N=v?[]:m;N&&-1!==N.indexOf("contextMenu")&&(t=!0);var w=(0,ve.Z)({arrowPointAtCenter:"object"===(0,f.Z)(u)&&u.pointAtCenter,autoAdjustOverflow:!0});return i.createElement(Z,(0,r.Z)({alignPoint:t},e,{builtinPlacements:w,arrow:!!u,overlayClassName:E,prefixCls:b,getPopupContainer:g||a,transitionName:function(){var t=c(),n=e.placement,r=void 0===n?"":n,o=e.transitionName;return void 0!==o?o:r.indexOf("top")>=0?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:N,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var o=(n=i.Children.only("string"===typeof n?i.createElement("span",null,n):n)).props;(0,Q.Z)(!o.mode||"vertical"===o.mode,"Dropdown",'mode="'.concat(o.mode,"\" is not supported for Dropdown's Menu."));var a=o.selectable,c=void 0!==a&&a,l=o.expandIcon,s="undefined"!==typeof l&&i.isValidElement(l)?l:i.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},i.createElement(k.Z,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:(0,F.Tm)(n,{mode:"vertical",selectable:c,expandIcon:s})}(b)},placement:function(){var t=e.placement;if(!t)return"rtl"===s?"bottomRight":"bottomLeft";if(t.includes("Center")){var n=t.slice(0,t.indexOf("Center"));return(0,Q.Z)(!t.includes("Center"),"Dropdown","You are using '".concat(t,"' placement in Dropdown, which is deprecated. Try to use '").concat(n,"' instead.")),n}return t}()}),C)});ge.Button=me,ge.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var ye=ge,be=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},he=function(e){var t,n,o=e.prefixCls,a=e.separator,c=void 0===a?"/":a,l=e.children,s=e.overlay,f=e.dropdownProps,p=be(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,i.useContext(R.E_).getPrefixCls)("breadcrumb",o);return t="href"in p?i.createElement("a",(0,r.Z)({className:"".concat(d,"-link")},p),l):i.createElement("span",(0,r.Z)({className:"".concat(d,"-link")},p),l),n=t,t=s?i.createElement(ye,(0,r.Z)({overlay:s,placement:"bottom"},f),i.createElement("span",{className:"".concat(d,"-overlay-link")},n,i.createElement(u.Z,null))):n,l?i.createElement("span",null,t,c&&i.createElement("span",{className:"".concat(d,"-separator")},c)):null};he.__ANT_BREADCRUMB_ITEM=!0;var Ce=he,Ee=function(e){var t=e.children,n=(0,i.useContext(R.E_).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(n,"-separator")},t||"/")};Ee.__ANT_BREADCRUMB_SEPARATOR=!0;var Ne=Ee,we=n(3708),xe=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function Oe(e,t,n,r){var o=n.indexOf(e)===n.length-1,a=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return o?i.createElement("span",null,a):i.createElement("a",{href:"#/".concat(r.join("/"))},a)}var Ze=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},ke=function(e){var t,n=e.prefixCls,c=e.separator,u=void 0===c?"/":c,f=e.style,p=e.className,d=e.routes,m=e.children,v=e.itemRender,g=void 0===v?Oe:v,y=e.params,b=void 0===y?{}:y,h=xe(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=i.useContext(R.E_),E=C.getPrefixCls,N=C.direction,w=E("breadcrumb",n);if(d&&d.length>0){var x=[];t=d.map((function(e){var t,n=Ze(e.path,b);return n&&x.push(n),e.children&&e.children.length&&(t=i.createElement(we.Z,null,e.children.map((function(e){return i.createElement(we.Z.Item,{key:e.path||e.breadcrumbName},g(e,b,d,function(e,t,n){var r=(0,a.Z)(e),o=Ze(t||"",n);return o&&r.push(o),r}(x,e.path,b)))})))),i.createElement(Ce,{overlay:t,separator:u,key:n||e.breadcrumbName},g(e,b,d,x))}))}else m&&(t=(0,s.Z)(m).map((function(e,t){return e?((0,Q.Z)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,F.Tm)(e,{separator:u,key:t})):e})));var O=l()(w,(0,o.Z)({},"".concat(w,"-rtl"),"rtl"===N),p);return i.createElement("div",(0,r.Z)({className:O,style:f},h),t)};ke.Item=Ce,ke.Separator=Ne;var Pe=ke}}]);