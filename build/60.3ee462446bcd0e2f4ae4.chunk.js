(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"955f3d75071f5294eb59":function(e,a,t){"use strict";t.r(a);var n,i=t("8af190b70a6bc55c6f1b"),s=t.n(i),r=(t("8a2d1b95e05b6a321e74"),t("435859b6b76fb67a754a")),o=t.n(r),l=t("b27e083e7741c2dccb3f"),u=t.n(l),c=t("b912ecc4473ae8a2ff0b"),m=t.n(c),d=t("921c0b8c557fe6ba5da8"),b=t.n(d),p=t("6938d226fd372a75cbf9"),f=t("2aea235afd5c55b8b19b"),v=t.n(f),g=t("4dd2a92e69dcbe1bab10"),h=t("873b08b59fbc642861bb"),y=t.n(h),N=t("e94e25c91c97baacaba3"),w=t.n(N),S=t("4f2c331fbef0a6b53010"),O=t.n(S),j=t("bea9ea6673f57669d8f2"),k=t("b701c9c5068c915d4789"),A=t("fd107da5869b7ae197ce"),P=t.n(A);function q(){return(q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function B(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function x(e,a,t,i){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,r=arguments.length-3;if(a||0===r||(a={children:void 0}),1===r)a.children=i;else if(r>1){for(var o=new Array(r),l=0;l<r;l++)o[l]=arguments[l+3];a.children=o}if(a&&s)for(var u in s)void 0===a[u]&&(a[u]=s[u]);else a||(a=s||{});return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}var E=Object(p.withStyles)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var a=e.classes,t=e.children;return x("li",{className:a.listItem},void 0,t)})),I={heading:function(e){var a,t,n=e.level,i=B(e,["level"]);switch(n){case 1:a="h4";break;case 2:a="subtitle1";break;case 3:a="h6";break;case 4:a="caption",t=!0;break;default:a=""}return s.a.createElement(b.a,q({},i,{gutterBottom:!0,variant:a,paragraph:t}))},listItem:function(e){e.tight,e.ordered;var a=B(e,["tight","ordered"]);return x(E,{},void 0,s.a.createElement(b.a,q({component:"span"},a)))},paragraph:function(e){return s.a.createElement(b.a,q({},e,{paragraph:!0}))}};function C(e){return s.a.createElement(P.a,q({renderers:I},e))}var F,J=t("20004eeded46443adb8c"),M=t("6e5df27b0b36e7acbe48");function R(e,a,t,n){F||(F="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,s=arguments.length-3;if(a||0===s||(a={children:void 0}),1===s)a.children=n;else if(s>1){for(var r=new Array(s),o=0;o<s;o++)r[o]=arguments[o+3];a.children=r}if(a&&i)for(var l in i)void 0===a[l]&&(a[l]=i[l]);else a||(a=i||{});return{$$typeof:F,type:e,key:void 0===t?null:""+t,ref:null,props:a,_owner:null}}var V=R(b.a,{variant:"h4",gutterBottom:!0},void 0,"From the Firehouse"),$=R(C,{},void 0,"## Sample blog post\n\n#### April 1, 2020 by Olivier\n\n![Image of Flower]\n(https://res.cloudinary.com/walden-global-services/image/upload/v1544584530/dandelion/1.jpg)\n\nThis blog post shows a few different types of content that are supported and styled with\nMaterial styles. Basic typography, images, and code are all supported.\nYou can extend these by modifying `Markdown.js`.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\nSed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n\nCurabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\nNullam id dolor id nibh ultricies vehicula ut id elit.\n\nEtiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\nAenean lacinia bibendum nulla sed consectetur.\n\n## Heading\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\nDuis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\n\n### Sub-heading\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\n\n    Example code block\n    Aenean lacinia bibendum nulla sed consectetur.\n    Etiam porta sem malesuada magna mollis euismod.\n    Fusce dapibus, tellus ac cursus commodo.\n    Tortor mauris condimentum nibh, ut fermentum massa.\n\n### Sub-heading\n\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\nAenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\nsit amet risus.\n\n![Image of Bird]\n(https://res.cloudinary.com/walden-global-services/image/upload/v1544584530/dandelion/6.jpg)\n\n - Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n - Donec id elit non mi porta gravida at eget metus.\n - Nulla vitae elit libero, a pharetra augue.\n\nDonec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n\n 1. Vestibulum id ligula porta felis euismod semper.\n 2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n 3. Maecenas sed diam eget risus varius blandit sit amet non magna.\n\nCras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.\nVestibulum bibendum nisi eget magna malesuada, at mattis eros efficitur.\nVivamus facilisis quam ullamcorper iaculis gravida.\n"),z=R(g.m,{dataList:j.a}),D=R(o.a,{item:!0,md:4,xs:12},void 0,R(J.a,{}));a.default=Object(p.withStyles)(M.a)((function(e){var a=e.classes;return R(i.Fragment,{},void 0,R("div",{className:a.root},void 0,R(o.a,{container:!0,spacing:3},void 0,R(o.a,{item:!0,md:8,xs:12},void 0,R("article",{className:a.article},void 0,R("div",{className:a.content},void 0,V,$,R(u.a,{className:a.dividerBordered}))),R("section",{className:a.socmedShare},void 0,R("div",{className:a.btnArea},void 0,R(b.a,{className:a.title},void 0,"Share to social media"),R(v.a,{variant:"outlined",size:"small",className:a.redBtn,type:"button"},void 0,R(y.a,{className:m()(a.leftIcon,a.iconSmall)}),"Socmed 1"),R(v.a,{variant:"outlined",size:"small",className:a.blueBtn,type:"button"},void 0,R(w.a,{className:m()(a.leftIcon,a.iconSmall)}),"Socmed 2"),R(v.a,{variant:"outlined",size:"small",className:a.cyanBtn,type:"button"},void 0,R(O.a,{className:m()(a.leftIcon,a.iconSmall)}),"Socmed 3"))),R(u.a,{className:a.dividerBordered}),R("section",{},void 0,R(b.a,{className:a.title},void 0,"Write comments"),z),R(b.a,{variant:"h6",className:a.title2,gutterBottom:!0},void 0,"Related Posts"),R(o.a,{container:!0,spacing:3},void 0,R(o.a,{item:!0,sm:4,xs:12},void 0,R(g.Jb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:k.a[5]})),R(o.a,{item:!0,sm:4,xs:12},void 0,R(g.Jb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:k.a[25]})),R(o.a,{item:!0,sm:4,xs:12},void 0,R(g.Jb,{title:"Post title",date:"Nov 12",desc:"Aenean facilisis vitae purus facilisis semper.",action:"Read more",image:k.a[45]})))),D)))}))}}]);