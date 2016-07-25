function hasClass(t,e){return t.classList?t.classList.contains(e):!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function addClass(t,e){t.classlist?t.classList.add(e):hasClass(t,e)||(t.className+=" "+e)}function removeClass(t,e){if(t.classlist)t.classList.remove(e);else if(hasClass(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}function getPosition(t){for(var e=0;t;){if("BODY"==t.tagName){var n=t.scrollTop||document.documentElement.scrollTop;e+=t.offsetTop-n+t.clientTop}else e+=t.offsetTop-t.scrollTop+t.clientTop;t=t.offsetParent}return{y:e}}function scrollImage(t){for(var e=document.documentElement.clientHeight,n=t[0],o=t[t.length-1],i=t.length-1;i>=length;i--){var s=t[i],r=getPosition(s).y,l=s.offsetHeight,a=r+l-e;r<=0&&a>=0||a>=0&&r>=0&&s==n?(addClass(s,"-fixed"),removeClass(s,"-absolute-bottom"),removeClass(s,"-absolute-top")):a<=0&&r<=0&&s!=o||r>=0&&a<=0?(addClass(s,"-absolute-bottom"),removeClass(s,"-fixed")):a>=0&&r>=0&&s!=n&&(addClass(s,"-absolute-top"),removeClass(s,"-fixed"))}}function updatePosition(){scrollImage(elements)}!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var e,n,o,i,s,r={},l="querySelector"in document&&"addEventListener"in t,a={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var t={},e=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e&&"[object Object]"===Object.prototype.toString.call(n[o])?t[o]=c(!0,t[o],n[o]):t[o]=n[o])};n<o;n++){var s=arguments[n];i(s)}return t},u=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},h=function(t,e){var n,o,i=e.charAt(0),s="classList"in document.documentElement;for("["===i&&(e=e.substr(1,e.length-2),n=e.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document&&1===t.nodeType;t=t.parentNode){if("."===i)if(s){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===e.substr(1))return t;if("["===i&&t.hasAttribute(n[0])){if(!o)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null};r.escapeCharacters=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,s="",r=n.charCodeAt(0);++i<o;){if(e=n.charCodeAt(i),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");s+=e>=1&&e<=31||127==e||0===i&&e>=48&&e<=57||1===i&&e>=48&&e<=57&&45===r?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+s};var d=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},f=function(t,e,n){var o=0;if(t.offsetParent)do o+=t.offsetTop,t=t.offsetParent;while(t);return o=o-e-n,o>=0?o:0},m=function(){return Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight)},p=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},g=function(e,n){t.history.pushState&&(n||"true"===n)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,e].join(""))},v=function(t){return null===t?0:u(t)+t.offsetTop};r.animateScroll=function(n,r,l){var u=p(r?r.getAttribute("data-options"):null),h=c(e||a,l||{},u),b="[object Number]"===Object.prototype.toString.call(n),w=b?null:"#"===n?t.document.documentElement:t.document.querySelector(n);if(b||w){var y=t.pageYOffset;o||(o=t.document.querySelector(h.selectorHeader)),i||(i=v(o));var H,T,E=b?n:f(w,i,parseInt(h.offset,10)),S=E-y,L=m(),O=0;b||g(n,h.updateURL);var C=function(e,o,i){var s=t.pageYOffset;(e==o||s==o||t.innerHeight+s>=L)&&(clearInterval(i),b||w.focus(),h.callback(n,r))},N=function(){O+=16,H=O/parseInt(h.speed,10),H=H>1?1:H,T=y+S*d(h.easing,H),t.scrollTo(0,Math.floor(T)),C(T,E,s)},B=function(){clearInterval(s),s=setInterval(N,16)};0===t.pageYOffset&&t.scrollTo(0,0),B()}};var b=function(t){if(0===t.button&&!t.metaKey&&!t.ctrlKey){var n=h(t.target,e.selector);if(n&&"a"===n.tagName.toLowerCase()){t.preventDefault();var o=r.escapeCharacters(n.hash);r.animateScroll(o,n,e)}}},w=function(t){n||(n=setTimeout(function(){n=null,i=v(o)},66))};return r.destroy=function(){e&&(t.document.removeEventListener("click",b,!1),t.removeEventListener("resize",w,!1),e=null,n=null,o=null,i=null,s=null)},r.init=function(n){l&&(r.destroy(),e=c(a,n||{}),o=t.document.querySelector(e.selectorHeader),i=v(o),t.document.addEventListener("click",b,!1),o&&t.addEventListener("resize",w,!1))},r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Headroom=e()}(this,function(){"use strict";function t(t){this.callback=t,this.ticking=!1}function e(t){return t&&"undefined"!=typeof window&&(t===window||t.nodeType)}function n(t){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var o,i,s=t||{};for(i=1;i<arguments.length;i++){var r=arguments[i]||{};for(o in r)"object"!=typeof s[o]||e(s[o])?s[o]=s[o]||r[o]:s[o]=n(s[o],r[o])}return s}function o(t){return t===Object(t)?t:{down:t,up:t}}function i(t,e){e=n(e,i.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=o(e.tolerance),this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}var s={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,t.prototype={constructor:t,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},i.prototype={constructor:i,init:function(){if(i.cutsTheMustard)return this.debouncer=new t(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;this.initialised=!1,this.elem.classList.remove(t.unpinned,t.pinned,t.top,t.notTop,t.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,n=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||n},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var n=t>this.lastKnownScrollY,o=t>=this.offset;return n&&o&&e},shouldPin:function(t,e){var n=t<this.lastKnownScrollY,o=t<=this.offset;return n&&e||o},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",n=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,n)?this.unpin():this.shouldPin(t,n)&&this.pin(),this.lastKnownScrollY=t)}},i.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},i.cutsTheMustard="undefined"!=typeof s&&s.rAF&&s.bind&&s.classList,i});var hrBody=document.body,headroom=new Headroom(hrBody,{offset:64,tolerance:{up:10,down:5}});headroom.init(),smoothScroll.init({easing:"easeInOutCubic"});var elements=[];window.onload=function(){for(var t=1;t>=0;t++){var e="js-"+t,n=document.getElementById(e);if(null===n)break;elements.push(n)}scrollImage(elements)},window.addEventListener("scroll",updatePosition,!1),window.addEventListener("resize",updatePosition,!1);
//# sourceMappingURL=scripts.js.map
