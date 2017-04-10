!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;"undefined"!=typeof window?e=window:"undefined"!=typeof global?e=global:"undefined"!=typeof self&&(e=self),e.page=t()}}(function(){return function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){var n=e[a][1][t];return i(n?n:t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(n){"use strict";function r(t,e){if("function"==typeof t)return r("*",t);if("function"==typeof e)for(var n=new s(t),i=1;i<arguments.length;++i)r.callbacks.push(n.middleware(arguments[i]));else"string"==typeof t?r["string"==typeof e?"redirect":"show"](t,e):r.start(t)}function i(t){if(!t.handled){var e;e=y?g+v.hash.replace("#!",""):v.pathname+v.search,e!==t.canonicalPath&&(r.stop(),t.handled=!1,v.href=t.canonicalPath)}}function o(t){return"string"!=typeof t?t:m?decodeURIComponent(t.replace(/\+/g," ")):t}function a(t,e){"/"===t[0]&&0!==t.indexOf(g)&&(t=g+(y?"#!":"")+t);var n=t.indexOf("?");if(this.canonicalPath=t,this.path=t.replace(g,"")||"/",y&&(this.path=this.path.replace("#!","")||"/"),this.title=document.title,this.state=e||{},this.state.path=t,this.querystring=~n?o(t.slice(n+1)):"",this.pathname=o(~n?t.slice(0,n):t),this.params={},this.hash="",!y){if(!~this.path.indexOf("#"))return;var r=this.path.split("#");this.path=r[0],this.hash=o(r[1])||"",this.querystring=this.querystring.split("#")[0]}}function s(t,e){e=e||{},this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=h(this.path,this.keys=[],e.sensitive,e.strict)}function u(t){if(1===c(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){for(var e=t.target;e&&"A"!==e.nodeName;)e=e.parentNode;if(e&&"A"===e.nodeName&&!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var i=e.getAttribute("href");if((y||e.pathname!==v.pathname||!e.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!e.target&&f(e.href)){var o=e.pathname+e.search+(e.hash||"");"undefined"!=typeof n&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o;0===o.indexOf(g)&&(o=o.substr(g.length)),y&&(o=o.replace("#!","")),g&&a===o||(t.preventDefault(),r.show(a))}}}}function c(t){return t=t||window.event,null===t.which?t.button:t.which}function f(t){var e=v.protocol+"//"+v.hostname;return v.port&&(e+=":"+v.port),t&&0===t.indexOf(e)}var h=t("path-to-regexp");e.exports=r;var p,d,l="undefined"!=typeof document&&document.ontouchstart?"touchstart":"click",v="undefined"!=typeof window&&(window.history.location||window.location),w=!0,m=!0,g="",y=!1;r.callbacks=[],r.exits=[],r.current="",r.len=0,r.base=function(t){return 0===arguments.length?g:void(g=t)},r.start=function(t){if(t=t||{},!p&&(p=!0,!1===t.dispatch&&(w=!1),!1===t.decodeURLComponents&&(m=!1),!1!==t.popstate&&window.addEventListener("popstate",x,!1),!1!==t.click&&document.addEventListener(l,u,!1),!0===t.hashbang&&(y=!0),w)){var e=y&&~v.hash.indexOf("#!")?v.hash.substr(2)+v.search:v.pathname+v.search+v.hash;r.replace(e,null,!0,w)}},r.stop=function(){p&&(r.current="",r.len=0,p=!1,document.removeEventListener(l,u,!1),window.removeEventListener("popstate",x,!1))},r.show=function(t,e,n,i){var o=new a(t,e);return r.current=o.path,!1!==n&&r.dispatch(o),!1!==o.handled&&!1!==i&&o.pushState(),o},r.back=function(t,e){r.len>0?(history.back(),r.len--):setTimeout(t?function(){r.show(t,e)}:function(){r.show(g,e)})},r.redirect=function(t,e){"string"==typeof t&&"string"==typeof e&&r(t,function(t){setTimeout(function(){r.replace(e)},0)}),"string"==typeof t&&"undefined"==typeof e&&setTimeout(function(){r.replace(t)},0)},r.replace=function(t,e,n,i){var o=new a(t,e);return r.current=o.path,o.init=n,o.save(),!1!==i&&r.dispatch(o),o},r.dispatch=function(t){function e(){var t=r.exits[s++];return t?void t(o,e):n()}function n(){var e=r.callbacks[a++];return t.path!==r.current?void(t.handled=!1):e?void e(t,n):i(t)}var o=d,a=0,s=0;d=t,o?e():n()},r.exit=function(t,e){if("function"==typeof t)return r.exit("*",t);for(var n=new s(t),i=1;i<arguments.length;++i)r.exits.push(n.middleware(arguments[i]))},r.Context=a,a.prototype.pushState=function(){r.len++,history.pushState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},a.prototype.save=function(){history.replaceState(this.state,this.title,y&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},r.Route=s,s.prototype.middleware=function(t){var e=this;return function(n,r){return e.match(n.path,n.params)?t(n,r):void r()}},s.prototype.match=function(t,e){var n=this.keys,r=t.indexOf("?"),i=~r?t.slice(0,r):t,a=this.regexp.exec(decodeURIComponent(i));if(!a)return!1;for(var s=1,u=a.length;u>s;++s){var c=n[s-1],f=o(a[s]);void 0===f&&hasOwnProperty.call(e,c.name)||(e[c.name]=f)}return!0};var x=function(){var t=!1;if("undefined"!=typeof window)return"complete"===document.readyState?t=!0:window.addEventListener("load",function(){setTimeout(function(){t=!0},0)}),function(e){if(t)if(e.state){var n=e.state.path;r.replace(n,e.state)}else r.show(v.pathname+v.hash,void 0,void 0,!1)}}();r.sameOrigin=f}).call(this,t("_process"))},{_process:2,"path-to-regexp":3}],2:[function(t,e,n){function r(){}var i=e.exports={};i.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.MutationObserver,n="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};var r=[];if(e){var i=document.createElement("div"),o=new MutationObserver(function(){var t=r.slice();r.length=0,t.forEach(function(t){t()})});return o.observe(i,{attributes:!0}),function(t){r.length||i.setAttribute("yes","no"),r.push(t)}}return n?(window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),r.length>0)){var n=r.shift();n()}},!0),function(t){r.push(t),window.postMessage("process-tick","*")}):function(t){setTimeout(t,0)}}(),i.title="browser",i.browser=!0,i.env={},i.argv=[],i.on=r,i.addListener=r,i.once=r,i.off=r,i.removeListener=r,i.removeAllListeners=r,i.emit=r,i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")}},{}],3:[function(t,e,n){function r(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function i(t,e){return t.keys=e,t}function o(t){return t.sensitive?"":"i"}function a(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,delimiter:null,optional:!1,repeat:!1});return i(t,e)}function s(t,e,n){for(var r=[],a=0;a<t.length;a++)r.push(c(t[a],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",o(n));return i(s,e)}function u(t,e){function n(t,n,o,a,s,u,c,f){if(n)return n;if(f)return"\\"+f;var h="+"===c||"*"===c,p="?"===c||"*"===c;return e.push({name:a||i++,delimiter:o||"/",optional:p,repeat:h}),o=o?"\\"+o:"",s=r(s||u||"[^"+(o||"\\/")+"]+?"),h&&(s=s+"(?:"+o+s+")*"),p?"(?:"+o+"("+s+"))?":o+"("+s+")"}var i=0;return t.replace(h,n)}function c(t,e,n){if(e=e||[],f(e)?n||(n={}):(n=e,e=[]),t instanceof RegExp)return a(t,e,n);if(f(t))return s(t,e,n);var r=n.strict,c=n.end!==!1,h=u(t,e),p="/"===t.charAt(t.length-1);return r||(h=(p?h.slice(0,-2):h)+"(?:\\/(?=$))?"),h+=c?"$":r&&p?"":"(?=\\/|$)",i(new RegExp("^"+h,o(n)),e)}var f=t("isarray");e.exports=c;var h=new RegExp(["(\\\\.)","([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?","([.+*?=^!:${}()[\\]|\\/])"].join("|"),"g")},{isarray:4}],4:[function(t,e,n){e.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},{}]},{},[1])(1)});;/*
 *  Copyright 2012-2013 (c) Pierre Duquesne <stackp@online.fr>
 *  Licensed under the New BSD License.
 *  https://github.com/stackp/promisejs
 */
(function(a){function b(){this._callbacks=[];}b.prototype.then=function(a,c){var d;if(this._isdone)d=a.apply(c,this.result);else{d=new b();this._callbacks.push(function(){var b=a.apply(c,arguments);if(b&&typeof b.then==='function')b.then(d.done,d);});}return d;};b.prototype.done=function(){this.result=arguments;this._isdone=true;for(var a=0;a<this._callbacks.length;a++)this._callbacks[a].apply(null,arguments);this._callbacks=[];};function c(a){var c=new b();var d=[];if(!a||!a.length){c.done(d);return c;}var e=0;var f=a.length;function g(a){return function(){e+=1;d[a]=Array.prototype.slice.call(arguments);if(e===f)c.done(d);};}for(var h=0;h<f;h++)a[h].then(g(h));return c;}function d(a,c){var e=new b();if(a.length===0)e.done.apply(e,c);else a[0].apply(null,c).then(function(){a.splice(0,1);d(a,arguments).then(function(){e.done.apply(e,arguments);});});return e;}function e(a){var b="";if(typeof a==="string")b=a;else{var c=encodeURIComponent;var d=[];for(var e in a)if(a.hasOwnProperty(e))d.push(c(e)+'='+c(a[e]));b=d.join('&');}return b;}function f(){var a;if(window.XMLHttpRequest)a=new XMLHttpRequest();else if(window.ActiveXObject)try{a=new ActiveXObject("Msxml2.XMLHTTP");}catch(b){a=new ActiveXObject("Microsoft.XMLHTTP");}return a;}function g(a,c,d,g){var h=new b();var j,k;d=d||{};g=g||{};try{j=f();}catch(l){h.done(i.ENOXHR,"");return h;}k=e(d);if(a==='GET'&&k){c+='?'+k;k=null;}j.open(a,c);var m='application/x-www-form-urlencoded';for(var n in g)if(g.hasOwnProperty(n))if(n.toLowerCase()==='content-type')m=g[n];else j.setRequestHeader(n,g[n]);j.setRequestHeader('Content-type',m);function o(){j.abort();h.done(i.ETIMEOUT,"",j);}var p=i.ajaxTimeout;if(p)var q=setTimeout(o,p);j.onreadystatechange=function(){if(p)clearTimeout(q);if(j.readyState===4){var a=(!j.status||(j.status<200||j.status>=300)&&j.status!==304);h.done(a,j.responseText,j);}};j.send(k);return h;}function h(a){return function(b,c,d){return g(a,b,c,d);};}var i={Promise:b,join:c,chain:d,ajax:g,get:h('GET'),post:h('POST'),put:h('PUT'),del:h('DELETE'),ENOXHR:1,ETIMEOUT:2,ajaxTimeout:0};if(typeof define==='function'&&define.amd)define(function(){return i;});else a.promise=i;})(this);;/* store.js - Copyright (c) 2010-2017 Marcus Westin */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.store=e()}}(function(){var define,module,exports;return function e(t,r,n){function o(u,a){if(!r[u]){if(!t[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var r=t[u][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t,r){"use strict";var n=e("../src/store-engine"),o=e("../storages/all"),i=[e("../plugins/json2")];t.exports=n.createStore(o,i)},{"../plugins/json2":2,"../src/store-engine":4,"../storages/all":6}],2:[function(e,t,r){"use strict";function n(){return e("./lib/json2"),{}}t.exports=n},{"./lib/json2":3}],3:[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,o,i,u,a=gap,s=t[e];switch(s&&"object"===("undefined"==typeof s?"undefined":_typeof(s))&&"function"==typeof s.toJSON&&(s=s.toJSON(e)),"function"==typeof rep&&(s=rep.call(t,e,s)),"undefined"==typeof s?"undefined":_typeof(s)){case"string":return quote(s);case"number":return isFinite(s)?String(s):"null";case"boolean":case"null":return String(s);case"object":if(!s)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(s)){for(i=s.length,r=0;r<i;r+=1)u[r]=str(r,s)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+a+"]":"["+u.join(",")+"]",gap=a,o}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(i=rep.length,r=0;r<i;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,s),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(o=str(n,s),o&&u.push(quote(n)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+a+"}":"{"+u.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;n<r;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!==("undefined"==typeof t?"undefined":_typeof(t))||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,o=e[t];if(o&&"object"===("undefined"==typeof o?"undefined":_typeof(o)))for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(e,t,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},{}],4:[function(e,t,r){"use strict";function n(e,t){var r={_seenPlugins:[],_namespacePrefix:"",_namespaceRegexp:null,_legalNamespace:/^[a-zA-Z0-9_\-]+$/,_storage:function(){if(!this.enabled)throw new Error("store.js: No supported storage has been added! Add one (e.g store.addStorage(require('store/storages/cookieStorage')) or use a build with more built-in storages (e.g https://github.com/marcuswestin/store.js/tree/master/dist/store.legacy.min.js)");return this._storage.resolved},_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var r=e.read(t)===t;return e.remove(t),r}catch(n){return!1}},_assignPluginFnProp:function(e,t){var r=this[t];this[t]=function(){function t(){if(r){var e=r.apply(o,t.args);return delete t.args,e}}var n=Array.prototype.slice.call(arguments,0),o=this,i=[t].concat(n);return t.args=n,e.apply(o,i)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var r="";try{r=JSON.parse(e)}catch(n){r=e}return void 0!==r?r:t}},n=a(r,l);return u(e,function(e){n.addStorage(e)}),u(t,function(e){n.addPlugin(e)}),n}var o=e("./util"),i=o.pluck,u=o.each,a=o.create,s=o.isList,c=o.isFunction,f=o.isObject;t.exports={createStore:n};var l={version:"2.0.3",enabled:!1,storage:null,addStorage:function(e){this.enabled||this._testStorage(e)&&(this._storage.resolved=e,this.enabled=!0,this.storage=e.name)},addPlugin:function(e){var t=this;if(s(e))return void u(e,function(e){t.addPlugin(e)});var r=i(this._seenPlugins,function(t){return e===t});if(!r){if(this._seenPlugins.push(e),!c(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!f(n))throw new Error("Plugins must return an object of function properties");u(n,function(r,n){if(!c(r))throw new Error("Bad plugin property: "+n+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(r,n)})}},get:function(e,t){var r=this._storage().read(this._namespacePrefix+e);return this._deserialize(r,t)},set:function(e,t){return void 0===t?this.remove(e):(this._storage().write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this._storage().remove(this._namespacePrefix+e)},each:function(e){var t=this;this._storage().each(function(r,n){e(t._deserialize(r),n.replace(t._namespaceRegexp,""))})},clearAll:function(){this._storage().clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},namespace:function(e){if(!this._legalNamespace.test(e))throw new Error("store.js namespaces can only have alhpanumerics + underscores and dashes");var t="__storejs_"+e+"_";return a(this,{_namespacePrefix:t,_namespaceRegexp:t?new RegExp("^"+t):null})},createStore:function(e,t){return n(e,t)}}},{"./util":5}],5:[function(e,t,r){(function(e){"use strict";function r(){return Object.assign?Object.assign:function(e,t,r,n){for(var o=1;o<arguments.length;o++)a(Object(arguments[o]),function(t,r){e[r]=t});return e}}function n(){if(Object.create)return function(e,t,r,n){var o=u(arguments,1);return g.apply(this,[Object.create(e)].concat(o))};var e=function(){};return function(t,r,n,o){var i=u(arguments,1);return e.prototype=t,g.apply(this,[new e].concat(i))}}function o(){return String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}}function i(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}}function u(e,t){return Array.prototype.slice.call(e,t||0)}function a(e,t){c(e,function(e,r){return t(e,r),!1})}function s(e,t){var r=f(e)?[]:{};return c(e,function(e,n){return r[n]=t(e,n),!1}),r}function c(e,t){if(f(e)){for(var r=0;r<e.length;r++)if(t(e[r],r))return e[r]}else for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))return e[n]}function f(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}function l(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e){return e&&"[object Object]"==={}.toString.call(e)}var g=r(),d=n(),v=o(),h="undefined"!=typeof window?window:e;t.exports={assign:g,create:d,trim:v,bind:i,slice:u,each:a,map:s,pluck:c,isList:f,isFunction:l,isObject:p,Global:h}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,r){"use strict";t.exports={localStorage:e("./localStorage"),"oldFF-globalStorage":e("./oldFF-globalStorage"),"oldIE-userDataStorage":e("./oldIE-userDataStorage"),cookieStorage:e("./cookieStorage"),sessionStorage:e("./sessionStorage"),memoryStorage:e("./memoryStorage")}},{"./cookieStorage":7,"./localStorage":8,"./memoryStorage":9,"./oldFF-globalStorage":10,"./oldIE-userDataStorage":11,"./sessionStorage":12}],7:[function(e,t,r){"use strict";function n(e){if(!e||!s(e))return null;var t="(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";return unescape(p.cookie.replace(new RegExp(t),"$1"))}function o(e){for(var t=p.cookie.split(/; ?/g),r=t.length-1;r>=0;r--)if(l(t[r])){var n=t[r].split("="),o=unescape(n[0]),i=unescape(n[1]);e(i,o)}}function i(e,t){e&&(p.cookie=escape(e)+"="+escape(t)+"; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/")}function u(e){e&&s(e)&&(p.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")}function a(){o(function(e,t){u(t)})}function s(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(p.cookie)}var c=e("../src/util"),f=c.Global,l=c.trim;t.exports={name:"cookieStorage",read:n,write:i,each:o,remove:u,clearAll:a};var p=f.document},{"../src/util":5}],8:[function(e,t,r){"use strict";function n(){return f.localStorage}function o(e){return n().getItem(e)}function i(e,t){return n().setItem(e,t)}function u(e){for(var t=n().length-1;t>=0;t--){var r=n().key(t);e(o(r),r)}}function a(e){return n().removeItem(e)}function s(){return n().clear()}var c=e("../src/util"),f=c.Global;t.exports={name:"localStorage",read:o,write:i,each:u,remove:a,clearAll:s}},{"../src/util":5}],9:[function(e,t,r){"use strict";function n(e){return s[e]}function o(e,t){s[e]=t}function i(e){for(var t in s)s.hasOwnProperty(t)&&e(s[t],t)}function u(e){delete s[e]}function a(e){s={}}t.exports={name:"memoryStorage",read:n,write:o,each:i,remove:u,clearAll:a};var s={}},{}],10:[function(e,t,r){"use strict";function n(e){return f[e]}function o(e,t){f[e]=t}function i(e){for(var t=f.length-1;t>=0;t--){var r=f.key(t);e(f[r],r)}}function u(e){return f.removeItem(e)}function a(){i(function(e,t){delete f[e]})}var s=e("../src/util"),c=s.Global;t.exports={name:"oldFF-globalStorage",read:n,write:o,each:i,remove:u,clearAll:a};var f=c.globalStorage},{"../src/util":5}],11:[function(e,t,r){"use strict";function n(e,t){if(!v){var r=s(e);d(function(e){e.setAttribute(r,t),e.save(p)})}}function o(e){if(!v){var t=s(e),r=null;return d(function(e){r=e.getAttribute(t)}),r}}function i(e){d(function(t){for(var r=t.XMLDocument.documentElement.attributes,n=r.length-1;n>=0;n--){var o=r[n];e(t.getAttribute(o.name),o.name)}})}function u(e){var t=s(e);d(function(e){e.removeAttribute(t),e.save(p)})}function a(){d(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(p);for(var r=t.length-1;r>=0;r--)e.removeAttribute(t[r].name);e.save(p)})}function s(e){return e.replace(/^d/,"___$&").replace(h,"___")}function c(){if(!g||!g.documentElement||!g.documentElement.addBehavior)return null;var e,t,r,n="script";try{t=new ActiveXObject("htmlfile"),t.open(),t.write("<"+n+">document.w=window</"+n+'><iframe src="/favicon.ico"></iframe>'),t.close(),e=t.w.frames[0].document,r=e.createElement("div")}catch(o){r=g.createElement("div"),e=g.body}return function(t){var n=[].slice.call(arguments,0);n.unshift(r),e.appendChild(r),r.addBehavior("#default#userData"),r.load(p),t.apply(this,n),e.removeChild(r)}}var f=e("../src/util"),l=f.Global;t.exports={name:"oldIE-userDataStorage",write:n,read:o,each:i,remove:u,clearAll:a};var p="storejs",g=l.document,d=c(),v=(l.navigator?l.navigator.userAgent:"").match(/ (MSIE 8|MSIE 9|MSIE 10)\./),h=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")},{"../src/util":5}],12:[function(e,t,r){"use strict";function n(){return f.sessionStorage}function o(e){return n().getItem(e)}function i(e,t){return n().setItem(e,t)}function u(e){for(var t=n().length-1;t>=0;t--){var r=n().key(t);e(o(r),r)}}function a(e){return n().removeItem(e)}function s(){return n().clear()}var c=e("../src/util"),f=c.Global;t.exports={name:"sessionStorage",read:o,write:i,each:u,remove:a,clearAll:s}},{"../src/util":5}]},{},[1])(1)});;/*!
 * Vue.js v2.2.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function t(e){var t=parseFloat(e);return isNaN(t)?e:t}function n(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function r(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function i(e,t){return Ni.call(e,t)}function o(e){return"string"==typeof e||"number"==typeof e}function a(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}function s(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function c(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function u(e,t){for(var n in t)e[n]=t[n];return e}function l(e){return null!==e&&"object"==typeof e}function f(e){return Ri.call(e)===Fi}function p(e){for(var t={},n=0;n<e.length;n++)e[n]&&u(t,e[n]);return t}function d(){}function v(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}function h(e,t){var n=l(e),r=l(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{return JSON.stringify(e)===JSON.stringify(t)}catch(n){return e===t}}function m(e,t){for(var n=0;n<e.length;n++)if(h(e[n],t))return n;return-1}function g(e){var t=!1;return function(){t||(t=!0,e())}}function y(e){return/native code/.test(e.toString())}function _(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function b(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function $(e){if(!ro.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function w(e){ao.target&&so.push(ao.target),ao.target=e}function x(){ao.target=so.pop()}function C(e,t){e.__proto__=t}function k(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];b(e,o,t[o])}}function A(e,t){if(l(e)){var n;return i(e,"__ob__")&&e.__ob__ instanceof po?n=e.__ob__:fo.shouldConvert&&!Qi()&&(Array.isArray(e)||f(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new po(e)),t&&n&&n.vmCount++,n}}function O(e,t,n,r){var i=new ao,o=Object.getOwnPropertyDescriptor(e,t);if(!o||o.configurable!==!1){var a=o&&o.get,s=o&&o.set,c=A(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ao.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&E(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=A(t),i.notify())}})}}function S(e,t,n){if(Array.isArray(e))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(i(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(O(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function T(e,t){if(Array.isArray(e))return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||i(e,t)&&(delete e[t],n&&n.dep.notify())}function E(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&E(t)}function j(e,t){if(!t)return e;for(var n,r,o,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],o=t[n],i(e,n)?f(r)&&f(o)&&j(r,o):S(e,n,o);return e}function N(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function I(e,t){var n=Object.create(e||null);return t?u(n,t):n}function L(e){var t=e.props;if(t){var n,r,i,o={};if(Array.isArray(t))for(n=t.length;n--;)r=t[n],"string"==typeof r&&(i=Li(r),o[i]={type:null});else if(f(t))for(var a in t)r=t[a],i=Li(a),o[i]=f(r)?r:{type:r};e.props=o}}function D(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function M(e,t,n){function r(r){var i=vo[r]||ho;l[r]=i(e[r],t[r],n,r)}L(t),D(t);var o=t.extends;if(o&&(e="function"==typeof o?M(e,o.options,n):M(e,o,n)),t.mixins)for(var a=0,s=t.mixins.length;a<s;a++){var c=t.mixins[a];c.prototype instanceof ft&&(c=c.options),e=M(e,c,n)}var u,l={};for(u in e)r(u);for(u in t)i(e,u)||r(u);return l}function P(e,t,n,r){if("string"==typeof n){var o=e[t];if(i(o,n))return o[n];var a=Li(n);if(i(o,a))return o[a];var s=Di(a);if(i(o,s))return o[s];var c=o[n]||o[a]||o[s];return c}}function R(e,t,n,r){var o=t[e],a=!i(n,e),s=n[e];if(U(Boolean,o.type)&&(a&&!i(o,"default")?s=!1:U(String,o.type)||""!==s&&s!==Pi(e)||(s=!0)),void 0===s){s=F(r,o,e);var c=fo.shouldConvert;fo.shouldConvert=!0,A(s),fo.shouldConvert=c}return s}function F(e,t,n){if(i(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==H(t.type)?r.call(e):r}}function H(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t&&t[1]}function U(e,t){if(!Array.isArray(t))return H(t)===H(e);for(var n=0,r=t.length;n<r;n++)if(H(t[n])===H(e))return!0;return!1}function B(e,t,n){if(Bi.errorHandler)Bi.errorHandler.call(null,e,t,n);else{if(!zi||"undefined"==typeof console)throw e;console.error(e)}}function V(e){return new mo(void 0,void 0,void 0,String(e))}function z(e){var t=new mo(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function J(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=z(e[r]);return n}function K(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function q(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=bo(o),a&&(s?a!==s&&(s.fns=a,e[o]=s):(a.fns||(a=e[o]=K(a)),n(c.name,a,c.once,c.capture)));for(o in t)e[o]||(c=bo(o),r(c.name,t[o],c.capture))}function W(e,t,n){function i(){n.apply(this,arguments),r(o.fns,i)}var o,a=e[t];a?a.fns&&a.merged?(o=a,o.fns.push(i)):o=K([a,i]):o=K([i]),o.merged=!0,e[t]=o}function Z(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function G(e){return o(e)?[V(e)]:Array.isArray(e)?Y(e):void 0}function Y(e,t){var n,r,i,a=[];for(n=0;n<e.length;n++)r=e[n],null!=r&&"boolean"!=typeof r&&(i=a[a.length-1],Array.isArray(r)?a.push.apply(a,Y(r,(t||"")+"_"+n)):o(r)?i&&i.text?i.text+=String(r):""!==r&&a.push(V(r)):r.text&&i&&i.text?a[a.length-1]=V(i.text+r.text):(r.tag&&null==r.key&&null!=t&&(r.key="__vlist"+t+"_"+n+"__"),a.push(r)));return a}function Q(e){return e&&e.filter(function(e){return e&&e.componentOptions})[0]}function X(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ne(e,t)}function ee(e,t,n){n?yo.$once(e,t):yo.$on(e,t)}function te(e,t){yo.$off(e,t)}function ne(e,t,n){yo=e,q(t,n||{},ee,te,e)}function re(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;for(var s,c=a.length;c--;)if(s=a[c],s===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?c(n):n;for(var r=c(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}function ie(e,t){var n={};if(!e)return n;for(var r,i,o=[],a=0,s=e.length;a<s;a++)if(i=e[a],(i.context===t||i.functionalContext===t)&&i.data&&(r=i.data.slot)){var c=n[r]||(n[r]=[]);"template"===i.tag?c.push.apply(c,i.children):c.push(i)}else o.push(i);return o.every(oe)||(n.default=o),n}function oe(e){return e.isComment||" "===e.text}function ae(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function se(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ce(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&ve(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=$o;$o=n,n._vnode=e,i?n.$el=n.__patch__(i,e):n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),$o=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ve(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||r(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,ve(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.__patch__(e._vnode,null)}}}function ue(e,t,n){e.$el=t,e.$options.render||(e.$options.render=_o),ve(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new So(e,r,d),n=!1,null==e.$vnode&&(e._isMounted=!0,ve(e,"mounted")),e}function le(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==no);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){fo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=R(u,e.$options.props,t,e)}fo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ne(e,n,l)}o&&(e.$slots=ie(i,r.context),e.$forceUpdate())}function fe(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function pe(e,t){if(t){if(e._directInactive=!1,fe(e))return}else if(e._directInactive)return;if(e._inactive||null==e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)pe(e.$children[n]);ve(e,"activated")}}function de(e,t){if(!(t&&(e._directInactive=!0,fe(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)de(e.$children[n]);ve(e,"deactivated")}}function ve(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){B(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function he(){wo.length=0,xo={},Co=ko=!1}function me(){ko=!0;var e,t,n;for(wo.sort(function(e,t){return e.id-t.id}),Ao=0;Ao<wo.length;Ao++)e=wo[Ao],t=e.id,xo[t]=null,e.run();for(Ao=wo.length;Ao--;)e=wo[Ao],n=e.vm,n._watcher===e&&n._isMounted&&ve(n,"updated");Xi&&Bi.devtools&&Xi.emit("flush"),he()}function ge(e){var t=e.id;if(null==xo[t]){if(xo[t]=!0,ko){for(var n=wo.length-1;n>=0&&wo[n].id>e.id;)n--;wo.splice(Math.max(n,Ao)+1,0,e)}else wo.push(e);Co||(Co=!0,to(me))}}function ye(e){To.clear(),_e(e,To)}function _e(e,t){var n,r,i=Array.isArray(e);if((i||l(e))&&Object.isExtensible(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)_e(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)_e(e[r[n]],t)}}function be(e,t,n){Eo.get=function(){return this[t][n]},Eo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Eo)}function $e(e){e._watchers=[];var t=e.$options;t.props&&we(e,t.props),t.methods&&Oe(e,t.methods),t.data?xe(e):A(e._data={},!0),t.computed&&Ce(e,t.computed),t.watch&&Se(e,t.watch)}function we(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;fo.shouldConvert=o;var a=function(o){i.push(o);var a=R(o,t,n,e);O(r,o,a),o in e||be(e,"_props",o)};for(var s in t)a(s);fo.shouldConvert=!0}function xe(e){var t=e.$options.data;t=e._data="function"==typeof t?t.call(e):t||{},f(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,o=n.length;o--;)r&&i(r,n[o])||_(n[o])||be(e,"_data",n[o]);A(t,!0)}function Ce(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new So(e,o,d,jo),r in e||ke(e,r,i)}}function ke(e,t,n){"function"==typeof n?(Eo.get=Ae(t),Eo.set=d):(Eo.get=n.get?n.cache!==!1?Ae(t):n.get:d,Eo.set=n.set?n.set:d),Object.defineProperty(e,t,Eo)}function Ae(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ao.target&&t.depend(),t.value}}function Oe(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?d:s(t[n],e)}function Se(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Te(e,n,r[i]);else Te(e,n,r)}}function Te(e,t,n){var r;f(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Ee(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=S,e.prototype.$delete=T,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new So(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}function je(e,t,n,r,i){if(e){var o=n.$options._base;if(l(e)&&(e=o.extend(e)),"function"==typeof e){if(!e.cid)if(e.resolved)e=e.resolved;else if(e=Re(e,o,function(){n.$forceUpdate()}),!e)return;ct(e),t=t||{},t.model&&Ve(e.options,t);var a=Fe(t,e);if(e.options.functional)return Ne(e,a,t,n,r);var s=t.on;t.on=t.nativeOn,e.options.abstract&&(t={}),Ue(t);var c=e.options.name||i,u=new mo("vue-component-"+e.cid+(c?"-"+c:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:a,listeners:s,tag:i,children:r});return u}}}function Ne(e,t,n,r,i){var o={},a=e.options.props;if(a)for(var s in a)o[s]=R(s,a,t);var c=Object.create(r),u=function(e,t,n,r){return ze(c,e,t,n,r,!0)},l=e.options.render.call(null,u,{props:o,data:n,parent:r,children:i,slots:function(){return ie(i,r)}});return l instanceof mo&&(l.functionalContext=r,n.slot&&((l.data||(l.data={})).slot=n.slot)),l}function Ie(e,t,n,r){var i=e.componentOptions,o={_isComponent:!0,parent:t,propsData:i.propsData,_componentTag:i.tag,_parentVnode:e,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new i.Ctor(o)}function Le(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){var i=e.componentInstance=Ie(e,$o,n,r);i.$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var o=e;De(o,o)}}function De(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;le(r,n.propsData,n.listeners,t,n.children)}function Me(e){e.componentInstance._isMounted||(e.componentInstance._isMounted=!0,ve(e.componentInstance,"mounted")),e.data.keepAlive&&pe(e.componentInstance,!0)}function Pe(e){e.componentInstance._isDestroyed||(e.data.keepAlive?de(e.componentInstance,!0):e.componentInstance.$destroy())}function Re(e,t,n){if(!e.requested){e.requested=!0;var r=e.pendingCallbacks=[n],i=!0,o=function(n){if(l(n)&&(n=t.extend(n)),e.resolved=n,!i)for(var o=0,a=r.length;o<a;o++)r[o](n)},a=function(e){},s=e(o,a);return s&&"function"==typeof s.then&&!e.resolved&&s.then(o,a),i=!1,e.resolved}e.pendingCallbacks.push(n)}function Fe(e,t){var n=t.options.props;if(n){var r={},i=e.attrs,o=e.props,a=e.domProps;if(i||o||a)for(var s in n){var c=Pi(s);He(r,o,s,c,!0)||He(r,i,s,c)||He(r,a,s,c)}return r}}function He(e,t,n,r,o){if(t){if(i(t,n))return e[n]=t[n],o||delete t[n],!0;if(i(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function Ue(e){e.hook||(e.hook={});for(var t=0;t<Io.length;t++){var n=Io[t],r=e.hook[n],i=No[n];e.hook[n]=r?Be(i,r):i}}function Be(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function Ve(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});i[r]?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}function ze(e,t,n,r,i,a){return(Array.isArray(n)||o(n))&&(i=r,r=n,n=void 0),a&&(i=Do),Je(e,t,n,r,i)}function Je(e,t,n,r,i){if(n&&n.__ob__)return _o();if(!t)return _o();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===Do?r=G(r):i===Lo&&(r=Z(r));var o,a;if("string"==typeof t){var s;a=Bi.getTagNamespace(t),o=Bi.isReservedTag(t)?new mo(Bi.parsePlatformTagName(t),n,r,void 0,void 0,e):(s=P(e.$options,"components",t))?je(s,n,e,r,t):new mo(t,n,r,void 0,void 0,e)}else o=je(t,n,e,r);return o?(a&&Ke(o,a),o):_o()}function Ke(e,t){if(e.ns=t,"foreignObject"!==e.tag&&e.children)for(var n=0,r=e.children.length;n<r;n++){var i=e.children[n];i.tag&&!i.ns&&Ke(i,t)}}function qe(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(l(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return n}function We(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&u(n,r),i(n)||t;var o=this.$slots[e];return o||t}function Ze(e){return P(this.$options,"filters",e,!0)||Ui}function Ge(e,t,n){var r=Bi.keyCodes[t]||n;return Array.isArray(r)?r.indexOf(e)===-1:r!==e}function Ye(e,t,n,r){if(n)if(l(n)){Array.isArray(n)&&(n=p(n));for(var i in n)if("class"===i||"style"===i)e[i]=n[i];else{var o=e.attrs&&e.attrs.type,a=r||Bi.mustUseProp(t,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={});a[i]=n[i]}}else;return e}function Qe(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?J(n):z(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),et(n,"__static__"+e,!1),n)}function Xe(e,t,n){return et(e,"__once__"+t+(n?"_"+n:""),!0),e}function et(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&tt(e[r],t+"_"+r,n);else tt(e,t,n)}function tt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function nt(e){e.$vnode=null,e._vnode=null,e._staticTrees=null;var t=e.$options._parentVnode,n=t&&t.context;e.$slots=ie(e.$options._renderChildren,n),e.$scopedSlots=no,e._c=function(t,n,r,i){return ze(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return ze(e,t,n,r,i,!0)}}function rt(n){n.prototype.$nextTick=function(e){return to(e,this)},n.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=J(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||no,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){B(t,e,"render function"),a=e._vnode}return a instanceof mo||(a=_o()),a.parent=i,a},n.prototype._o=Xe,n.prototype._n=t,n.prototype._s=e,n.prototype._l=qe,n.prototype._t=We,n.prototype._q=h,n.prototype._i=m,n.prototype._m=Qe,n.prototype._f=Ze,n.prototype._k=Ge,n.prototype._b=Ye,n.prototype._v=V,n.prototype._e=_o,n.prototype._u=ae}function it(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function ot(e){var t=e.$options.inject;if(t)for(var n=Array.isArray(t),r=n?t:eo?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++)for(var o=r[i],a=n?o:t[o],s=e;s;){if(s._provided&&a in s._provided){e[o]=s._provided[a];break}s=s.$parent}}function at(e){e.prototype._init=function(e){var t=this;t._uid=Mo++,t._isVue=!0,e&&e._isComponent?st(t,e):t.$options=M(ct(t.constructor),e||{},t),t._renderProxy=t,t._self=t,se(t),X(t),nt(t),ve(t,"beforeCreate"),ot(t),$e(t),it(t),ve(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function st(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ct(e){var t=e.options;if(e.super){var n=ct(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=ut(e);i&&u(e.extendOptions,i),t=e.options=M(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function ut(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=lt(n[i],r[i]));return t}function lt(e,t){if(Array.isArray(e)){var n=[];t=Array.isArray(t)?t:[t];for(var r=0;r<e.length;r++)t.indexOf(e[r])<0&&n.push(e[r]);return n}return e}function ft(e){this._init(e)}function pt(e){e.use=function(e){if(!e.installed){var t=c(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function dt(e){e.mixin=function(e){this.options=M(this.options,e)}}function vt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=M(n.options,e),a.super=n,a.options.props&&ht(a),a.options.computed&&mt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Bi._assetTypes.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=u({},a.options),i[r]=a,a}}function ht(e){var t=e.options.props;for(var n in t)be(e.prototype,"_props",n)}function mt(e){var t=e.options.computed;for(var n in t)ke(e.prototype,n,t[n])}function gt(e){Bi._assetTypes.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function yt(e){return e&&(e.Ctor.options.name||e.tag)}function _t(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:e instanceof RegExp&&e.test(t)}function bt(e,t){for(var n in e){var r=e[n];if(r){var i=yt(r.componentOptions);i&&!t(i)&&($t(r),e[n]=null)}}}function $t(e){e&&(e.componentInstance._inactive||ve(e.componentInstance,"deactivated"),e.componentInstance.$destroy())}function wt(e){var t={};t.get=function(){return Bi},Object.defineProperty(e,"config",t),e.util={warn:io,extend:u,mergeOptions:M,defineReactive:O},e.set=S,e.delete=T,e.nextTick=to,e.options=Object.create(null),Bi._assetTypes.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,u(e.options.components,Fo),pt(e),dt(e),vt(e),gt(e)}function xt(e){for(var t=e.data,n=e,r=e;r.componentInstance;)r=r.componentInstance._vnode,r.data&&(t=Ct(r.data,t));for(;n=n.parent;)n.data&&(t=Ct(t,n.data));return kt(t)}function Ct(e,t){return{staticClass:At(e.staticClass,t.staticClass),class:e.class?[e.class,t.class]:t.class}}function kt(e){var t=e.class,n=e.staticClass;return n||t?At(n,Ot(t)):""}function At(e,t){return e?t?e+" "+t:e:t||""}function Ot(e){var t="";if(!e)return t;if("string"==typeof e)return e;if(Array.isArray(e)){for(var n,r=0,i=e.length;r<i;r++)e[r]&&(n=Ot(e[r]))&&(t+=n+" ");return t.slice(0,-1)}if(l(e)){for(var o in e)e[o]&&(t+=o+" ");return t.slice(0,-1)}return t}function St(e){return oa(e)?"svg":"math"===e?"math":void 0}function Tt(e){if(!zi)return!0;if(sa(e))return!1;if(e=e.toLowerCase(),null!=ca[e])return ca[e];var t=document.createElement(e);return e.indexOf("-")>-1?ca[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ca[e]=/HTMLUnknownElement/.test(t.toString())}function Et(e){if("string"==typeof e){var t=document.querySelector(e);return t?t:document.createElement("div")}return e}function jt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Nt(e,t){return document.createElementNS(ra[e],t)}function It(e){return document.createTextNode(e)}function Lt(e){return document.createComment(e)}function Dt(e,t,n){e.insertBefore(t,n)}function Mt(e,t){e.removeChild(t)}function Pt(e,t){e.appendChild(t)}function Rt(e){return e.parentNode}function Ft(e){return e.nextSibling}function Ht(e){return e.tagName}function Ut(e,t){e.textContent=t}function Bt(e,t,n){e.setAttribute(t,n)}function Vt(e,t){var n=e.data.ref;if(n){var i=e.context,o=e.componentInstance||e.elm,a=i.$refs;t?Array.isArray(a[n])?r(a[n],o):a[n]===o&&(a[n]=void 0):e.data.refInFor?Array.isArray(a[n])&&a[n].indexOf(o)<0?a[n].push(o):a[n]=[o]:a[n]=o}}function zt(e){return null==e}function Jt(e){return null!=e}function Kt(e,t){return e.key===t.key&&e.tag===t.tag&&e.isComment===t.isComment&&!e.data==!t.data}function qt(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,Jt(i)&&(o[i]=r);return o}function Wt(e){function t(e){return new mo(O.tagName(e).toLowerCase(),{},[],void 0,e)}function r(e,t){function n(){0===--n.listeners&&i(e)}return n.listeners=t,n}function i(e){var t=O.parentNode(e);t&&O.removeChild(t,e)}function a(e,t,n,r,i){if(e.isRootInsert=!i,!s(e,t,n,r)){var o=e.data,a=e.children,c=e.tag;Jt(c)?(e.elm=e.ns?O.createElementNS(e.ns,c):O.createElement(c,e),v(e),f(e,a,t),Jt(o)&&d(e,t),l(n,e.elm,r)):e.isComment?(e.elm=O.createComment(e.text),l(n,e.elm,r)):(e.elm=O.createTextNode(e.text),l(n,e.elm,r))}}function s(e,t,n,r){var i=e.data;if(Jt(i)){var o=Jt(e.componentInstance)&&i.keepAlive;if(Jt(i=i.hook)&&Jt(i=i.init)&&i(e,!1,n,r),Jt(e.componentInstance))return c(e,t),o&&u(e,t,n,r),!0}}function c(e,t){e.data.pendingInsert&&t.push.apply(t,e.data.pendingInsert),e.elm=e.componentInstance.$el,p(e)?(d(e,t),v(e)):(Vt(e),t.push(e))}function u(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,Jt(i=o.data)&&Jt(i=i.transition)){for(i=0;i<k.activate.length;++i)k.activate[i](fa,o);t.push(o);break}l(n,e.elm,r)}function l(e,t,n){e&&(n?O.insertBefore(e,t,n):O.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)a(t[r],n,e.elm,null,!0);else o(e.text)&&O.appendChild(e.elm,O.createTextNode(e.text))}function p(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return Jt(e.tag)}function d(e,t){for(var n=0;n<k.create.length;++n)k.create[n](fa,e);x=e.data.hook,Jt(x)&&(x.create&&x.create(fa,e),x.insert&&t.push(e))}function v(e){for(var t,n=e;n;)Jt(t=n.context)&&Jt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,""),n=n.parent;Jt(t=$o)&&t!==e.context&&Jt(t=t.$options._scopeId)&&O.setAttribute(e.elm,t,"")}function h(e,t,n,r,i,o){for(;r<=i;++r)a(n[r],o,e,t)}function m(e){var t,n,r=e.data;if(Jt(r))for(Jt(t=r.hook)&&Jt(t=t.destroy)&&t(e),t=0;t<k.destroy.length;++t)k.destroy[t](e);if(Jt(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n])}function g(e,t,n,r){for(;n<=r;++n){var o=t[n];Jt(o)&&(Jt(o.tag)?(y(o),m(o)):i(o.elm))}}function y(e,t){if(t||Jt(e.data)){var n=k.remove.length+1;for(t?t.listeners+=n:t=r(e.elm,n),Jt(x=e.componentInstance)&&Jt(x=x._vnode)&&Jt(x.data)&&y(x,t),x=0;x<k.remove.length;++x)k.remove[x](e,t);Jt(x=e.data.hook)&&Jt(x=x.remove)?x(e,t):t()}else i(e.elm)}function _(e,t,n,r,i){for(var o,s,c,u,l=0,f=0,p=t.length-1,d=t[0],v=t[p],m=n.length-1,y=n[0],_=n[m],$=!i;l<=p&&f<=m;)zt(d)?d=t[++l]:zt(v)?v=t[--p]:Kt(d,y)?(b(d,y,r),d=t[++l],y=n[++f]):Kt(v,_)?(b(v,_,r),v=t[--p],_=n[--m]):Kt(d,_)?(b(d,_,r),$&&O.insertBefore(e,d.elm,O.nextSibling(v.elm)),d=t[++l],_=n[--m]):Kt(v,y)?(b(v,y,r),$&&O.insertBefore(e,v.elm,d.elm),v=t[--p],y=n[++f]):(zt(o)&&(o=qt(t,l,p)),s=Jt(y.key)?o[y.key]:null,zt(s)?(a(y,r,e,d.elm),y=n[++f]):(c=t[s],Kt(c,y)?(b(c,y,r),t[s]=void 0,$&&O.insertBefore(e,y.elm,d.elm),y=n[++f]):(a(y,r,e,d.elm),y=n[++f])));l>p?(u=zt(n[m+1])?null:n[m+1].elm,h(e,u,n,f,m,r)):f>m&&g(e,t,l,p)}function b(e,t,n,r){if(e!==t){if(t.isStatic&&e.isStatic&&t.key===e.key&&(t.isCloned||t.isOnce))return t.elm=e.elm,void(t.componentInstance=e.componentInstance);var i,o=t.data,a=Jt(o);a&&Jt(i=o.hook)&&Jt(i=i.prepatch)&&i(e,t);var s=t.elm=e.elm,c=e.children,u=t.children;if(a&&p(t)){for(i=0;i<k.update.length;++i)k.update[i](e,t);Jt(i=o.hook)&&Jt(i=i.update)&&i(e,t)}zt(t.text)?Jt(c)&&Jt(u)?c!==u&&_(s,c,u,n,r):Jt(u)?(Jt(e.text)&&O.setTextContent(s,""),h(s,null,u,0,u.length-1,n)):Jt(c)?g(s,c,0,c.length-1):Jt(e.text)&&O.setTextContent(s,""):e.text!==t.text&&O.setTextContent(s,t.text),a&&Jt(i=o.hook)&&Jt(i=i.postpatch)&&i(e,t)}}function $(e,t,n){if(n&&e.parent)e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function w(e,t,n){t.elm=e;var r=t.tag,i=t.data,o=t.children;if(Jt(i)&&(Jt(x=i.hook)&&Jt(x=x.init)&&x(t,!0),Jt(x=t.componentInstance)))return c(t,n),!0;if(Jt(r)){if(Jt(o))if(e.hasChildNodes()){for(var a=!0,s=e.firstChild,u=0;u<o.length;u++){if(!s||!w(s,o[u],n)){a=!1;break}s=s.nextSibling}if(!a||s)return!1}else f(t,o,n);if(Jt(i))for(var l in i)if(!S(l)){d(t,n);break}}else e.data!==t.text&&(e.data=t.text);return!0}var x,C,k={},A=e.modules,O=e.nodeOps;for(x=0;x<pa.length;++x)for(k[pa[x]]=[],C=0;C<A.length;++C)void 0!==A[C][pa[x]]&&k[pa[x]].push(A[C][pa[x]]);var S=n("attrs,style,class,staticClass,staticStyle,key");return function(e,n,r,i,o,s){if(!n)return void(e&&m(e));var c=!1,u=[];if(e){var l=Jt(e.nodeType);if(!l&&Kt(e,n))b(e,n,u,i);else{if(l){if(1===e.nodeType&&e.hasAttribute("server-rendered")&&(e.removeAttribute("server-rendered"),r=!0),r&&w(e,n,u))return $(n,u,!0),e;e=t(e)}var f=e.elm,d=O.parentNode(f);if(a(n,u,f._leaveCb?null:d,O.nextSibling(f)),n.parent){for(var v=n.parent;v;)v.elm=n.elm,v=v.parent;if(p(n))for(var h=0;h<k.create.length;++h)k.create[h](fa,n.parent)}null!==d?g(d,[e],0,0):Jt(e.tag)&&m(e)}}else c=!0,a(n,u,o,s);return $(n,u,c),n.elm}}function Zt(e,t){(e.data.directives||t.data.directives)&&Gt(e,t)}function Gt(e,t){var n,r,i,o=e===fa,a=t===fa,s=Yt(e.data.directives,e.context),c=Yt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Xt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Xt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Xt(u[n],"inserted",t,e)};o?W(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&W(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Xt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Xt(s[n],"unbind",e,e,a)}function Yt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=va),n[Qt(i)]=i,i.def=P(t.$options,"directives",i.name,!0);return n}function Qt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Xt(e,t,n,r,i){var o=e.def&&e.def[t];o&&o(n.elm,e,n,r,i)}function en(e,t){if(e.data.attrs||t.data.attrs){var n,r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};s.__ob__&&(s=t.data.attrs=u({},s));for(n in s)r=s[n],i=a[n],i!==r&&tn(o,n,r);qi&&s.value!==a.value&&tn(o,"value",s.value);for(n in a)null==s[n]&&(ea(n)?o.removeAttributeNS(Xo,ta(n)):Yo(n)||o.removeAttribute(n))}}function tn(e,t,n){Qo(t)?na(n)?e.removeAttribute(t):e.setAttribute(t,t):Yo(t)?e.setAttribute(t,na(n)||"false"===n?"false":"true"):ea(t)?na(n)?e.removeAttributeNS(Xo,ta(t)):e.setAttributeNS(Xo,t,n):na(n)?e.removeAttribute(t):e.setAttribute(t,n)}function nn(e,t){var n=t.elm,r=t.data,i=e.data;if(r.staticClass||r.class||i&&(i.staticClass||i.class)){var o=xt(t),a=n._transitionClasses;a&&(o=At(o,Ot(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}function rn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&(m=e.charAt(h)," "===m);h--);m&&ya.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=on(o,a[i]);return o}function on(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";
var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+","+i}function an(e){console.error("[Vue compiler]: "+e)}function sn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function cn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function un(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function ln(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function fn(e,t,n,r,i){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t);var o;r&&r.native?(delete r.native,o=e.nativeEvents||(e.nativeEvents={})):o=e.events||(e.events={});var a={value:n,modifiers:r},s=o[t];Array.isArray(s)?i?s.unshift(a):s.push(a):s?o[t]=i?[a,s]:[s,a]:o[t]=a}function pn(e,t,n){var r=dn(e,":"+t)||dn(e,"v-bind:"+t);if(null!=r)return rn(r);if(n!==!1){var i=dn(e,t);if(null!=i)return JSON.stringify(i)}}function dn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function vn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v",s=a;o&&(s="(typeof "+a+" === 'string'? "+a+".trim(): "+a+")"),i&&(s="_n("+s+")");var c=hn(t,s);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ("+a+") {"+c+"}"}}function hn(e,t){var n=mn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function mn(e){if(Uo=e,Ho=Uo.length,Vo=zo=Jo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Ho-1)return{exp:e,idx:null};for(;!yn();)Bo=gn(),_n(Bo)?$n(Bo):91===Bo&&bn(Bo);return{exp:e.substring(0,zo),idx:e.substring(zo+1,Jo)}}function gn(){return Uo.charCodeAt(++Vo)}function yn(){return Vo>=Ho}function _n(e){return 34===e||39===e}function bn(e){var t=1;for(zo=Vo;!yn();)if(e=gn(),_n(e))$n(e);else if(91===e&&t++,93===e&&t--,0===t){Jo=Vo;break}}function $n(e){for(var t=e;!yn()&&(e=gn(),e!==t););}function wn(e,t,n){Ko=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)kn(e,r,i);else if("input"===o&&"checkbox"===a)xn(e,r,i);else if("input"===o&&"radio"===a)Cn(e,r,i);else if("input"===o||"textarea"===o)An(e,r,i);else if(!Bi.isReservedTag(o))return vn(e,r,i),!1;return!0}function xn(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null",o=pn(e,"true-value")||"true",a=pn(e,"false-value")||"false";cn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),fn(e,ba,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+t+"=$$c}",null,!0)}function Cn(e,t,n){var r=n&&n.number,i=pn(e,"value")||"null";i=r?"_n("+i+")":i,cn(e,"checked","_q("+t+","+i+")"),fn(e,ba,hn(t,i),null,!0)}function kn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",a="var $$selectedVal = "+i+";";a=a+" "+hn(t,o),fn(e,"change",a,null,!0)}function An(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?_a:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=hn(t,l);c&&(f="if($event.target.composing)return;"+f),cn(e,"value","("+t+")"),fn(e,u,f,null,!0),(s||a||"number"===r)&&fn(e,"blur","$forceUpdate()")}function On(e){var t;e[_a]&&(t=Ki?"change":"input",e[t]=[].concat(e[_a],e[t]||[]),delete e[_a]),e[ba]&&(t=Yi?"click":"change",e[t]=[].concat(e[ba],e[t]||[]),delete e[ba])}function Sn(e,t,n,r){if(n){var i=t,o=qo;t=function(n){var a=1===arguments.length?i(n):i.apply(null,arguments);null!==a&&Tn(e,t,r,o)}}qo.addEventListener(e,t,r)}function Tn(e,t,n,r){(r||qo).removeEventListener(e,t,n)}function En(e,t){if(e.data.on||t.data.on){var n=t.data.on||{},r=e.data.on||{};qo=t.elm,On(n),q(n,r,Sn,Tn,t.context)}}function jn(e,t){if(e.data.domProps||t.data.domProps){var n,r,i=t.elm,o=e.data.domProps||{},a=t.data.domProps||{};a.__ob__&&(a=t.data.domProps=u({},a));for(n in o)null==a[n]&&(i[n]="");for(n in a)if(r=a[n],"textContent"!==n&&"innerHTML"!==n||(t.children&&(t.children.length=0),r!==o[n]))if("value"===n){i._value=r;var s=null==r?"":String(r);Nn(i,t,s)&&(i.value=s)}else i[n]=r}}function Nn(e,t,n){return!e.composing&&("option"===t.tag||In(e,n)||Ln(e,n))}function In(e,t){return document.activeElement!==e&&e.value!==t}function Ln(e,n){var r=e.value,i=e._vModifiers;return i&&i.number||"number"===e.type?t(r)!==t(n):i&&i.trim?r.trim()!==n.trim():r!==n}function Dn(e){var t=Mn(e.style);return e.staticStyle?u(e.staticStyle,t):t}function Mn(e){return Array.isArray(e)?p(e):"string"==typeof e?xa(e):e}function Pn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=Dn(i.data))&&u(r,n);(n=Dn(e.data))&&u(r,n);for(var o=e;o=o.parent;)o.data&&(n=Dn(o.data))&&u(r,n);return r}function Rn(e,t){var n=t.data,r=e.data;if(n.staticStyle||n.style||r.staticStyle||r.style){var i,o,a=t.elm,s=e.data.staticStyle,c=e.data.style||{},l=s||c,f=Mn(t.data.style)||{};t.data.style=f.__ob__?u({},f):f;var p=Pn(t,!0);for(o in l)null==p[o]&&Aa(a,o,"");for(o in p)i=p[o],i!==l[o]&&Aa(a,o,null==i?"":i)}}function Fn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Hn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Un(e){if(e){if("object"==typeof e){var t={};return e.css!==!1&&u(t,Ea(e.name||"v")),u(t,e),t}return"string"==typeof e?Ea(e):void 0}}function Bn(e){Ra(function(){Ra(e)})}function Vn(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Fn(e,t)}function zn(e,t){e._transitionClasses&&r(e._transitionClasses,t),Hn(e,t)}function Jn(e,t,n){var r=Kn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===Na?Da:Pa,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function Kn(e,t){var n,r=window.getComputedStyle(e),i=r[La+"Delay"].split(", "),o=r[La+"Duration"].split(", "),a=qn(i,o),s=r[Ma+"Delay"].split(", "),c=r[Ma+"Duration"].split(", "),u=qn(s,c),l=0,f=0;t===Na?a>0&&(n=Na,l=a,f=o.length):t===Ia?u>0&&(n=Ia,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?Na:Ia:null,f=n?n===Na?o.length:c.length:0);var p=n===Na&&Fa.test(r[La+"Property"]);return{type:n,timeout:l,propCount:f,hasTransform:p}}function qn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Wn(t)+Wn(e[n])}))}function Wn(e){return 1e3*Number(e.slice(0,-1))}function Zn(e,n){var r=e.elm;r._leaveCb&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=Un(e.data.transition);if(i&&!r._enterCb&&1===r.nodeType){for(var o=i.css,a=i.type,s=i.enterClass,c=i.enterToClass,u=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,d=i.appearActiveClass,v=i.beforeEnter,h=i.enter,m=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,b=i.appear,$=i.afterAppear,w=i.appearCancelled,x=i.duration,C=$o,k=$o.$vnode;k&&k.parent;)k=k.parent,C=k.context;var A=!C._isMounted||!e.isRootInsert;if(!A||b||""===b){var O=A&&f?f:s,S=A&&d?d:u,T=A&&p?p:c,E=A?_||v:v,j=A&&"function"==typeof b?b:h,N=A?$||m:m,I=A?w||y:y,L=t(l(x)?x.enter:x),D=o!==!1&&!qi,M=Qn(j),P=r._enterCb=g(function(){D&&(zn(r,T),zn(r,S)),P.cancelled?(D&&zn(r,O),I&&I(r)):N&&N(r),r._enterCb=null});e.data.show||W(e.data.hook||(e.data.hook={}),"insert",function(){var t=r.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),j&&j(r,P)}),E&&E(r),D&&(Vn(r,O),Vn(r,S),Bn(function(){Vn(r,T),zn(r,O),P.cancelled||M||(Yn(L)?setTimeout(P,L):Jn(r,a,P))})),e.data.show&&(n&&n(),j&&j(r,P)),D||M||P()}}}function Gn(e,n){function r(){w.cancelled||(e.data.show||((i.parentNode._pending||(i.parentNode._pending={}))[e.key]=e),p&&p(i),_&&(Vn(i,c),Vn(i,f),Bn(function(){Vn(i,u),zn(i,c),w.cancelled||b||(Yn($)?setTimeout(w,$):Jn(i,s,w))})),d&&d(i,w),_||b||w())}var i=e.elm;i._enterCb&&(i._enterCb.cancelled=!0,i._enterCb());var o=Un(e.data.transition);if(!o)return n();if(!i._leaveCb&&1===i.nodeType){var a=o.css,s=o.type,c=o.leaveClass,u=o.leaveToClass,f=o.leaveActiveClass,p=o.beforeLeave,d=o.leave,v=o.afterLeave,h=o.leaveCancelled,m=o.delayLeave,y=o.duration,_=a!==!1&&!qi,b=Qn(d),$=t(l(y)?y.leave:y),w=i._leaveCb=g(function(){i.parentNode&&i.parentNode._pending&&(i.parentNode._pending[e.key]=null),_&&(zn(i,u),zn(i,f)),w.cancelled?(_&&zn(i,c),h&&h(i)):(n(),v&&v(i)),i._leaveCb=null});m?m(r):r()}}function Yn(e){return"number"==typeof e&&!isNaN(e)}function Qn(e){if(!e)return!1;var t=e.fns;return t?Qn(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Xn(e,t){t.data.show||Zn(t)}function er(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=m(r,nr(a))>-1,a.selected!==o&&(a.selected=o);else if(h(nr(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function tr(e,t){for(var n=0,r=t.length;n<r;n++)if(h(nr(t[n]),e))return!1;return!0}function nr(e){return"_value"in e?e._value:e.value}function rr(e){e.target.composing=!0}function ir(e){e.target.composing=!1,or(e.target,"input")}function or(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ar(e){return!e.componentInstance||e.data&&e.data.transition?e:ar(e.componentInstance._vnode)}function sr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?sr(Q(t.children)):e}function cr(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Li(o)]=i[o];return t}function ur(e,t){return/\d-keep-alive$/.test(t.tag)?e("keep-alive"):null}function lr(e){for(;e=e.parent;)if(e.data.transition)return!0}function fr(e,t){return t.key===e.key&&t.tag===e.tag}function pr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function dr(e){e.data.newPos=e.elm.getBoundingClientRect()}function vr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function hr(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}function mr(e){return Qa=Qa||document.createElement("div"),Qa.innerHTML=e,Qa.textContent}function gr(e,t){var n=t?Rs:Ps;return e.replace(n,function(e){return Ms[e]})}function yr(e,t){function n(t){f+=t,e=e.substring(t)}function r(){var t=e.match(us);if(t){var r={tagName:t[1],attrs:[],start:f};n(t[0].length);for(var i,o;!(i=e.match(ls))&&(o=e.match(as));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=f,r}}function i(e){var n=e.tagName,r=e.unarySlash;u&&("p"===s&&ns(n)&&o(s),ts(n)&&s===n&&o(n));for(var i=l(n)||"html"===n&&"head"===s||!!r,a=e.attrs.length,f=new Array(a),p=0;p<a;p++){var d=e.attrs[p];hs&&d[0].indexOf('""')===-1&&(""===d[3]&&delete d[3],""===d[4]&&delete d[4],""===d[5]&&delete d[5]);var v=d[3]||d[4]||d[5]||"";f[p]={name:d[1],value:gr(v,t.shouldDecodeNewlines)}}i||(c.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:f}),s=n),t.start&&t.start(n,f,i,e.start,e.end)}function o(e,n,r){var i,o;if(null==n&&(n=f),null==r&&(r=f),e&&(o=e.toLowerCase()),e)for(i=c.length-1;i>=0&&c[i].lowerCasedTag!==o;i--);else i=0;if(i>=0){for(var a=c.length-1;a>=i;a--)t.end&&t.end(c[a].tag,n,r);c.length=i,s=i&&c[i-1].tag}else"br"===o?t.start&&t.start(e,[],!0,n,r):"p"===o&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var a,s,c=[],u=t.expectHTML,l=t.isUnaryTag||Hi,f=0;e;){if(a=e,s&&Ls(s)){var p=s.toLowerCase(),d=Ds[p]||(Ds[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=0,h=e.replace(d,function(e,n,r){return v=r.length,"script"!==p&&"style"!==p&&"noscript"!==p&&(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});f+=e.length-h.length,e=h,o(p,f-v,f)}else{var m=e.indexOf("<");if(0===m){if(ds.test(e)){var g=e.indexOf("-->");if(g>=0){n(g+3);continue}}if(vs.test(e)){var y=e.indexOf("]>");if(y>=0){n(y+2);continue}}var _=e.match(ps);if(_){n(_[0].length);continue}var b=e.match(fs);if(b){var $=f;n(b[0].length),o(b[1],$,f);continue}var w=r();if(w){i(w);continue}}var x=void 0,C=void 0,k=void 0;if(m>=0){for(C=e.slice(m);!(fs.test(C)||us.test(C)||ds.test(C)||vs.test(C)||(k=C.indexOf("<",1),k<0));)m+=k,C=e.slice(m);x=e.substring(0,m),n(m)}m<0&&(x=e,e=""),t.chars&&x&&t.chars(x)}if(e===a){t.chars&&t.chars(e);break}}o()}function _r(e,t){var n=t?Us(t):Fs;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=rn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function br(e,t){function n(e){e.pre&&(s=!1),_s(e.tag)&&(c=!1)}ms=t.warn||an,gs=t.getTagNamespace||Hi,ys=t.mustUseProp||Hi,_s=t.isPreTag||Hi,bs=sn(t.modules,"preTransformNode"),$s=sn(t.modules,"transformNode"),ws=sn(t.modules,"postTransformNode"),xs=t.delimiters;var r,i,o=[],a=t.preserveWhitespace!==!1,s=!1,c=!1;return yr(e,{warn:ms,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){function l(e){}var f=i&&i.ns||gs(e);Ki&&"svg"===f&&(a=Rr(a));var p={type:1,tag:e,attrsList:a,attrsMap:Mr(a),parent:i,children:[]};f&&(p.ns=f),Pr(p)&&!Qi()&&(p.forbidden=!0);for(var d=0;d<bs.length;d++)bs[d](p,t);if(s||($r(p),p.pre&&(s=!0)),_s(p.tag)&&(c=!0),s)wr(p);else{kr(p),Ar(p),Er(p),xr(p),p.plain=!p.key&&!a.length,Cr(p),jr(p),Nr(p);for(var v=0;v<$s.length;v++)$s[v](p,t);Ir(p)}if(r?o.length||r.if&&(p.elseif||p.else)&&(l(p),Tr(r,{exp:p.elseif,block:p})):(r=p,l(r)),i&&!p.forbidden)if(p.elseif||p.else)Or(p,i);else if(p.slotScope){i.plain=!1;var h=p.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[h]=p}else i.children.push(p),p.parent=i;u?n(p):(i=p,o.push(p));for(var m=0;m<ws.length;m++)ws[m](p,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Ki||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Zs(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=_r(e,xs))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function $r(e){null!=dn(e,"v-pre")&&(e.pre=!0)}function wr(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function xr(e){var t=pn(e,"key");t&&(e.key=t)}function Cr(e){var t=pn(e,"ref");t&&(e.ref=t,e.refInFor=Lr(e))}function kr(e){var t;if(t=dn(e,"v-for")){var n=t.match(zs);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Js);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function Ar(e){var t=dn(e,"v-if");if(t)e.if=t,Tr(e,{exp:t,block:e});else{null!=dn(e,"v-else")&&(e.else=!0);var n=dn(e,"v-else-if");n&&(e.elseif=n)}}function Or(e,t){var n=Sr(t.children);n&&n.if&&Tr(n,{exp:e.elseif,block:e})}function Sr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Tr(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Er(e){var t=dn(e,"v-once");null!=t&&(e.once=!0)}function jr(e){if("slot"===e.tag)e.slotName=pn(e,"name");else{var t=pn(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=dn(e,"scope"))}}function Nr(e){var t;(t=pn(e,"is"))&&(e.component=t),null!=dn(e,"inline-template")&&(e.inlineTemplate=!0)}function Ir(e){var t,n,r,i,o,a,s,c,u=e.attrsList;for(t=0,n=u.length;t<n;t++)if(r=i=u[t].name,o=u[t].value,Bs.test(r))if(e.hasBindings=!0,s=Dr(r),s&&(r=r.replace(Ws,"")),Ks.test(r))r=r.replace(Ks,""),o=rn(o),c=!1,s&&(s.prop&&(c=!0,r=Li(r),"innerHtml"===r&&(r="innerHTML")),s.camel&&(r=Li(r))),c||ys(e.tag,e.attrsMap.type,r)?cn(e,r,o):un(e,r,o);else if(Vs.test(r))r=r.replace(Vs,""),fn(e,r,o,s);else{r=r.replace(Bs,"");var l=r.match(qs);l&&(a=l[1])&&(r=r.slice(0,-(a.length+1))),ln(e,r,i,o,a,s)}else un(e,r,JSON.stringify(o))}function Lr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Dr(e){var t=e.match(Ws);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Mr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Pr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Rr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Gs.test(r.name)||(r.name=r.name.replace(Ys,""),t.push(r))}return t}function Fr(e,t){e&&(Cs=Qs(t.staticKeys||""),ks=t.isReservedTag||Hi,Ur(e),Br(e,!1))}function Hr(e){return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Ur(e){if(e.static=zr(e),1===e.type){if(!ks(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Ur(r),r.static||(e.static=!1)}}}function Br(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Br(e.children[n],t||!!e.for);e.ifConditions&&Vr(e.ifConditions,t)}}function Vr(e,t){for(var n=1,r=e.length;n<r;n++)Br(e[n].block,t)}function zr(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||ji(e.tag)||!ks(e.tag)||Jr(e)||!Object.keys(e).every(Cs))))}function Jr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function Kr(e,t){var n=t?"nativeOn:{":"on:{";for(var r in e)n+='"'+r+'":'+qr(r,e[r])+",";return n.slice(0,-1)+"}"}function qr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return qr(e,t)}).join(",")+"]";var n=ec.test(t.value),r=Xs.test(t.value);if(t.modifiers){var i="",o=[];for(var a in t.modifiers)rc[a]?(i+=rc[a],tc[a]&&o.push(a)):o.push(a);o.length&&(i+=Wr(o));var s=n?t.value+"($event)":r?"("+t.value+")($event)":t.value;return"function($event){"+i+s+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Wr(e){return"if(!('button' in $event)&&"+e.map(Zr).join("&&")+")return null;"}function Zr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=tc[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Gr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Yr(e,t){var n=js,r=js=[],i=Ns;Ns=0,Is=t,As=t.warn||an,Os=sn(t.modules,"transformCode"),Ss=sn(t.modules,"genData"),Ts=t.directives||{},Es=t.isReservedTag||Hi;var o=e?Qr(e):'_c("div")';return js=n,Ns=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Qr(e){if(e.staticRoot&&!e.staticProcessed)return Xr(e);if(e.once&&!e.onceProcessed)return ei(e);if(e.for&&!e.forProcessed)return ri(e);if(e.if&&!e.ifProcessed)return ti(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return hi(e);var t;if(e.component)t=mi(e.component,e);else{var n=e.plain?void 0:ii(e),r=e.inlineTemplate?null:ui(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<Os.length;i++)t=Os[i](e,t);return t}return ui(e)||"void 0"}function Xr(e){return e.staticProcessed=!0,js.push("with(this){return "+Qr(e)+"}"),"_m("+(js.length-1)+(e.staticInFor?",true":"")+")"}function ei(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ti(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Qr(e)+","+Ns++ +(t?","+t:"")+")":Qr(e)}return Xr(e)}function ti(e){return e.ifProcessed=!0,ni(e.ifConditions.slice())}function ni(e){function t(e){return e.once?ei(e):Qr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+ni(e):""+t(n.block)}function ri(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Qr(e)+"})"}function ii(e){var t="{",n=oi(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<Ss.length;r++)t+=Ss[r](e);if(e.attrs&&(t+="attrs:{"+gi(e.attrs)+"},"),e.props&&(t+="domProps:{"+gi(e.props)+"},"),e.events&&(t+=Kr(e.events)+","),e.nativeEvents&&(t+=Kr(e.nativeEvents,!0)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=si(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=ai(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function oi(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Ts[i.name]||ic[i.name];c&&(o=!!c(e,i,As)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function ai(e){var t=e.children[0];if(1===t.type){var n=Yr(t,Is);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function si(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return ci(t,e[t])}).join(",")+"])"}function ci(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?ui(t)||"void 0":Qr(t))+"}]"}function ui(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Qr(r);var i=t?li(n):0;return"["+n.map(di).join(",")+"]"+(i?","+i:"")}}function li(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(fi(r)||r.ifConditions&&r.ifConditions.some(function(e){return fi(e.block)})){t=2;break}(pi(r)||r.ifConditions&&r.ifConditions.some(function(e){return pi(e.block)}))&&(t=1)}}return t}function fi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function pi(e){return!Es(e.tag)}function di(e){return 1===e.type?Qr(e):vi(e)}function vi(e){return"_v("+(2===e.type?e.expression:yi(JSON.stringify(e.text)))+")"}function hi(e){var t=e.slotName||'"default"',n=ui(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return Li(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function mi(e,t){var n=t.inlineTemplate?null:ui(t,!0);return"_c("+e+","+ii(t)+(n?","+n:"")+")"}function gi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+yi(r.value)+","}return t.slice(0,-1)}function yi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function _i(e,t){var n=br(e.trim(),t);Fr(n,t);var r=Yr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function bi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),d}}function $i(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=u(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=_i(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=bi(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=bi(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}function wi(e,t){var n=(t.warn||an,dn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=pn(e,"class",!1);r&&(e.classBinding=r)}function xi(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function Ci(e,t){var n=(t.warn||an,dn(e,"style"));n&&(e.staticStyle=JSON.stringify(xa(n)));var r=pn(e,"style",!1);r&&(e.styleBinding=r)}function ki(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function Ai(e,t){t.value&&cn(e,"textContent","_s("+t.value+")")}function Oi(e,t){t.value&&cn(e,"innerHTML","_s("+t.value+")")}function Si(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ti,Ei,ji=n("slot,component",!0),Ni=Object.prototype.hasOwnProperty,Ii=/-(\w)/g,Li=a(function(e){return e.replace(Ii,function(e,t){return t?t.toUpperCase():""})}),Di=a(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Mi=/([^-])([A-Z])/g,Pi=a(function(e){return e.replace(Mi,"$1-$2").replace(Mi,"$1-$2").toLowerCase()}),Ri=Object.prototype.toString,Fi="[object Object]",Hi=function(){return!1},Ui=function(e){return e},Bi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Hi,isUnknownElement:Hi,getTagNamespace:d,parsePlatformTagName:Ui,mustUseProp:Hi,_assetTypes:["component","directive","filter"],_lifecycleHooks:["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],_maxUpdateCount:100},Vi="__proto__"in{},zi="undefined"!=typeof window,Ji=zi&&window.navigator.userAgent.toLowerCase(),Ki=Ji&&/msie|trident/.test(Ji),qi=Ji&&Ji.indexOf("msie 9.0")>0,Wi=Ji&&Ji.indexOf("edge/")>0,Zi=Ji&&Ji.indexOf("android")>0,Gi=Ji&&/iphone|ipad|ipod|ios/.test(Ji),Yi=Ji&&/chrome\/\d+/.test(Ji)&&!Wi,Qi=function(){return void 0===Ti&&(Ti=!zi&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Ti},Xi=zi&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,eo="undefined"!=typeof Symbol&&y(Symbol)&&"undefined"!=typeof Reflect&&y(Reflect.ownKeys),to=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&y(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Gi&&setTimeout(d)}}else if("undefined"==typeof MutationObserver||!y(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){e&&e.call(i),o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){o=e})}}();Ei="undefined"!=typeof Set&&y(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return this.set[e]===!0},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var no=Object.freeze({}),ro=/[^\w.$]/,io=d,oo=0,ao=function(){this.id=oo++,this.subs=[]};ao.prototype.addSub=function(e){this.subs.push(e)},ao.prototype.removeSub=function(e){r(this.subs,e)},ao.prototype.depend=function(){ao.target&&ao.target.addDep(this)},ao.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},ao.target=null;var so=[],co=Array.prototype,uo=Object.create(co);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=co[e];b(uo,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":o=i;break;case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var lo=Object.getOwnPropertyNames(uo),fo={shouldConvert:!0,isSettingProps:!1},po=function(e){if(this.value=e,this.dep=new ao,this.vmCount=0,b(e,"__ob__",this),Array.isArray(e)){var t=Vi?C:k;t(e,uo,lo),this.observeArray(e)}else this.walk(e)};po.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)O(e,t[n],e[t[n]])},po.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)A(e[t])};var vo=Bi.optionMergeStrategies;vo.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?j(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return j(t.call(this),e.call(this))}:t:e},Bi._lifecycleHooks.forEach(function(e){vo[e]=N}),Bi._assetTypes.forEach(function(e){vo[e+"s"]=I}),vo.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};u(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},vo.props=vo.methods=vo.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return u(n,e),u(n,t),n};var ho=function(e,t){return void 0===t?e:t},mo=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},go={child:{}};go.child.get=function(){return this.componentInstance},Object.defineProperties(mo.prototype,go);var yo,_o=function(){var e=new mo;return e.text="",e.isComment=!0,e},bo=a(function(e){var t="~"===e.charAt(0);e=t?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:t,capture:n}}),$o=null,wo=[],xo={},Co=!1,ko=!1,Ao=0,Oo=0,So=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Oo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ei,this.newDepIds=new Ei,this.expression="","function"==typeof t?this.getter=t:(this.getter=$(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};So.prototype.get=function(){w(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){B(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&ye(e),x(),this.cleanupDeps(),e},So.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},So.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},So.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ge(this)},So.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){B(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},So.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},So.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},So.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||r(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);
this.active=!1}};var To=new Ei,Eo={enumerable:!0,configurable:!0,get:d,set:d},jo={lazy:!0},No={init:Le,prepatch:De,insert:Me,destroy:Pe},Io=Object.keys(No),Lo=1,Do=2,Mo=0;at(ft),Ee(ft),re(ft),ce(ft),rt(ft);var Po=[String,RegExp],Ro={name:"keep-alive",abstract:!0,props:{include:Po,exclude:Po},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)$t(e.cache[t])},watch:{include:function(e){bt(this.cache,function(t){return _t(e,t)})},exclude:function(e){bt(this.cache,function(t){return!_t(e,t)})}},render:function(){var e=Q(this.$slots.default),t=e&&e.componentOptions;if(t){var n=yt(t);if(n&&(this.include&&!_t(this.include,n)||this.exclude&&_t(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Fo={KeepAlive:Ro};wt(ft),Object.defineProperty(ft.prototype,"$isServer",{get:Qi}),ft.version="2.2.2";var Ho,Uo,Bo,Vo,zo,Jo,Ko,qo,Wo,Zo=n("input,textarea,option,select"),Go=function(e,t,n){return"value"===n&&Zo(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Yo=n("contenteditable,draggable,spellcheck"),Qo=n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Xo="http://www.w3.org/1999/xlink",ea=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},ta=function(e){return ea(e)?e.slice(6,e.length):""},na=function(e){return null==e||e===!1},ra={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ia=n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),oa=n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),aa=function(e){return"pre"===e},sa=function(e){return ia(e)||oa(e)},ca=Object.create(null),ua=Object.freeze({createElement:jt,createElementNS:Nt,createTextNode:It,createComment:Lt,insertBefore:Dt,removeChild:Mt,appendChild:Pt,parentNode:Rt,nextSibling:Ft,tagName:Ht,setTextContent:Ut,setAttribute:Bt}),la={create:function(e,t){Vt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Vt(e,!0),Vt(t))},destroy:function(e){Vt(e,!0)}},fa=new mo("",{},[]),pa=["create","activate","update","remove","destroy"],da={create:Zt,update:Zt,destroy:function(e){Zt(e,fa)}},va=Object.create(null),ha=[la,da],ma={create:en,update:en},ga={create:nn,update:nn},ya=/[\w).+\-_$\]]/,_a="__r",ba="__c",$a={create:En,update:En},wa={create:jn,update:jn},xa=a(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),Ca=/^--/,ka=/\s*!important$/,Aa=function(e,t,n){Ca.test(t)?e.style.setProperty(t,n):ka.test(n)?e.style.setProperty(t,n.replace(ka,""),"important"):e.style[Sa(t)]=n},Oa=["Webkit","Moz","ms"],Sa=a(function(e){if(Wo=Wo||document.createElement("div"),e=Li(e),"filter"!==e&&e in Wo.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Oa.length;n++){var r=Oa[n]+t;if(r in Wo.style)return r}}),Ta={create:Rn,update:Rn},Ea=a(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ja=zi&&!qi,Na="transition",Ia="animation",La="transition",Da="transitionend",Ma="animation",Pa="animationend";ja&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(La="WebkitTransition",Da="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ma="WebkitAnimation",Pa="webkitAnimationEnd"));var Ra=zi&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Fa=/\b(transform|all)(,|$)/,Ha=zi?{create:Xn,activate:Xn,remove:function(e,t){e.data.show?t():Gn(e,t)}}:{},Ua=[ma,ga,$a,wa,Ta,Ha],Ba=Ua.concat(ha),Va=Wt({nodeOps:ua,modules:Ba});qi&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&or(e,"input")});var za={inserted:function(e,t,n){if("select"===n.tag){var r=function(){er(e,t,n.context)};r(),(Ki||Wi)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(Zi||(e.addEventListener("compositionstart",rr),e.addEventListener("compositionend",ir)),qi&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){er(e,t,n.context);var r=e.multiple?t.value.some(function(t){return tr(t,e.options)}):t.value!==t.oldValue&&tr(t.value,e.options);r&&or(e,"change")}}},Ja={bind:function(e,t,n){var r=t.value;n=ar(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!qi?(n.data.show=!0,Zn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(r!==i){n=ar(n);var o=n.data&&n.data.transition;o&&!qi?(n.data.show=!0,r?Zn(n,function(){e.style.display=e.__vOriginalDisplay}):Gn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Ka={model:za,show:Ja},qa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Wa={name:"transition",props:qa,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var r=this.mode,i=n[0];if(lr(this.$vnode))return i;var a=sr(i);if(!a)return i;if(this._leaving)return ur(e,i);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:o(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=cr(this),l=this._vnode,f=sr(l);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),f&&f.data&&!fr(a,f)){var p=f&&(f.data.transition=u({},c));if("out-in"===r)return this._leaving=!0,W(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),ur(e,i);if("in-out"===r){var d,v=function(){d()};W(c,"afterEnter",v),W(c,"enterCancelled",v),W(p,"delayLeave",function(e){d=e})}}return i}}},Za=u({tag:String,moveClass:String},qa);delete Za.mode;var Ga={props:Za,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=cr(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(pr),e.forEach(dr),e.forEach(vr);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Vn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Da,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Da,e),n._moveCb=null,zn(n,t))})}})}},methods:{hasMove:function(e,t){if(!ja)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Hn(n,e)}),Fn(n,t),n.style.display="none",this.$el.appendChild(n);var r=Kn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Ya={Transition:Wa,TransitionGroup:Ga};ft.config.mustUseProp=Go,ft.config.isReservedTag=sa,ft.config.getTagNamespace=St,ft.config.isUnknownElement=Tt,u(ft.options.directives,Ka),u(ft.options.components,Ya),ft.prototype.__patch__=zi?Va:d,ft.prototype.$mount=function(e,t){return e=e&&zi?Et(e):void 0,ue(this,e,t)},setTimeout(function(){Bi.devtools&&Xi&&Xi.emit("init",ft)},0);var Qa,Xa=!!zi&&hr("\n","&#10;"),es=n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ts=n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ns=n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),rs=/([^\s"'<>\/=]+)/,is=/(?:=)/,os=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],as=new RegExp("^\\s*"+rs.source+"(?:\\s*("+is.source+")\\s*(?:"+os.join("|")+"))?"),ss="[a-zA-Z_][\\w\\-\\.]*",cs="((?:"+ss+"\\:)?"+ss+")",us=new RegExp("^<"+cs),ls=/^\s*(\/?)>/,fs=new RegExp("^<\\/"+cs+"[^>]*>"),ps=/^<!DOCTYPE [^>]+>/i,ds=/^<!--/,vs=/^<!\[/,hs=!1;"x".replace(/x(.)?/g,function(e,t){hs=""===t});var ms,gs,ys,_s,bs,$s,ws,xs,Cs,ks,As,Os,Ss,Ts,Es,js,Ns,Is,Ls=n("script,style",!0),Ds={},Ms={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ps=/&(?:lt|gt|quot|amp);/g,Rs=/&(?:lt|gt|quot|amp|#10);/g,Fs=/\{\{((?:.|\n)+?)\}\}/g,Hs=/[-.*+?^${}()|[\]\/\\]/g,Us=a(function(e){var t=e[0].replace(Hs,"\\$&"),n=e[1].replace(Hs,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Bs=/^v-|^@|^:/,Vs=/^@|^v-on:/,zs=/(.*?)\s+(?:in|of)\s+(.*)/,Js=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Ks=/^:|^v-bind:/,qs=/:(.*)$/,Ws=/\.[^.]+/g,Zs=a(mr),Gs=/^xmlns:NS\d+/,Ys=/^NS\d+:/,Qs=a(Hr),Xs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ec=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,tc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},nc=function(e){return"if("+e+")return null;"},rc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:nc("$event.target !== $event.currentTarget"),ctrl:nc("!$event.ctrlKey"),shift:nc("!$event.shiftKey"),alt:nc("!$event.altKey"),meta:nc("!$event.metaKey"),left:nc("'button' in $event && $event.button !== 0"),middle:nc("'button' in $event && $event.button !== 1"),right:nc("'button' in $event && $event.button !== 2")},ic={bind:Gr,cloak:d},oc={staticKeys:["staticClass"],transformNode:wi,genData:xi},ac={staticKeys:["staticStyle"],transformNode:Ci,genData:ki},sc=[oc,ac],cc={model:wn,text:Ai,html:Oi},uc={expectHTML:!0,modules:sc,directives:cc,isPreTag:aa,isUnaryTag:es,mustUseProp:Go,isReservedTag:sa,getTagNamespace:St,staticKeys:v(sc)},lc=$i(uc),fc=lc.compileToFunctions,pc=a(function(e){var t=Et(e);return t&&t.innerHTML}),dc=ft.prototype.$mount;return ft.prototype.$mount=function(e,t){if(e=e&&Et(e),e===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=pc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=Si(e));if(r){var i=fc(r,{shouldDecodeNewlines:Xa,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return dc.call(this,e,t)},ft.compile=fc,ft});;/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
;/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);
;/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);