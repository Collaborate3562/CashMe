(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{a5e146f1f3de3987ce62:function(e,t,r){"use strict";r.r(t);var n,o=r("8af190b70a6bc55c6f1b"),a=r("0d7f0986bcd2f33d8a2a"),i=r("1037a6e0d5914309f74c"),c=r.n(i),l=(r("8a2d1b95e05b6a321e74"),r("6938d226fd372a75cbf9")),u=r("4dd2a92e69dcbe1bab10"),f=r("387190e83edf0e5eb8f6");function d(e,t,r,o){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&a)for(var u in a)void 0===t[u]&&(t[u]=a[u]);else t||(t=a||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=Object(l.withStyles)(f.a)((function(e){var t=s(Object(o.useState)(null),2),r=t[0],n=t[1],i=Object(o.useCallback)((function(e){n(e),setTimeout((function(){console.log("You submitted:\n\n".concat(r))}),500)}),[r]),l=c.a.name+" - Reset Password",f=c.a.desc,b=e.classes;return d("div",{className:b.root},void 0,d(a.Helmet,{},void 0,d("title",{},void 0,l),d("meta",{name:"description",content:f}),d("meta",{property:"og:title",content:l}),d("meta",{property:"og:description",content:f}),d("meta",{property:"twitter:title",content:l}),d("meta",{property:"twitter:description",content:f})),d("div",{className:b.container},void 0,d("div",{className:b.userFormWrap},void 0,d(u.Eb,{onSubmit:function(e){return i(e)}}))))}))}}]);