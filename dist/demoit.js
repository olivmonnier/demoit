!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)},function(e,t){function n(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise(function(i,o){var a=e.apply(t,r);function c(e){n(a,i,o,c,u,"next",e)}function u(e){n(a,i,o,c,u,"throw",e)}c(void 0)})}}},function(e,t,n){var r=n(7);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}},function(e,t,n){var r=n(8),i=n(9),o=n(10);e.exports=function(e,t){return r(e)||i(e,t)||o()}},function(e,t,n){e.exports=n(11)},function(e,t,n){var r=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n(6),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(e){r.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"==typeof e,l=t.regeneratorRuntime;if(l)s&&(e.exports=l);else{(l=t.regeneratorRuntime=s?e.exports:{}).wrap=x;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==r&&i.call(m,a)&&(y=m);var w=E.prototype=F.prototype=Object.create(y);L.prototype=w.constructor=E,E.constructor=L,E[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===L||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(w),e},l.awrap=function(e){return{__await:e}},S(k.prototype),k.prototype[c]=function(){return this},l.AsyncIterator=k,l.async=function(e,t,n,r){var i=new k(x(e,t,n,r));return l.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},S(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=P,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return c.type="throw",c.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function x(e,t,n,r){var i=t&&t.prototype instanceof F?t:F,o=Object.create(i.prototype),a=new _(r||[]);return o._invoke=function(e,t,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=b(e,t,n);if("normal"===u.type){if(r=n.done?h:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function b(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}function F(){}function L(){}function E(){}function S(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function k(e){var t;this._invoke=function(n,r){function o(){return new Promise(function(t,o){!function t(n,r,o,a){var c=b(e[n],e,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(s).then(function(e){u.value=e,o(u)},function(e){return t("throw",e,o,a)})}a(c.arg)}(n,r,t,o)})}return t=t?t.then(o,o):o()}}function j(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,j(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),a=n.n(o),c=n(2),u=n.n(c),s=function(e){return document.querySelector(e)},l=function(e){var t=document.createElement("style");t.innerHTML=e,document.body.appendChild(t)},f={},p=function(e,t){if(f[e])return t();var n=document.createElement("script");n.src=e,n.addEventListener("load",function(){f[e]=!0,t()}),document.body.appendChild(n)},d=function(e,t){if(f[e])return t();var n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.addEventListener("load",function(){f[e]=!0,t()}),document.body.appendChild(n)},h=function(){var e=a()(i.a.mark(function e(t){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(e){return new Promise(function(t){var n=e.split(".").pop().toLowerCase();"js"===n?p(e,t):"css"===n?(d(e),t()):t()})})));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),v=function(){try{return[].slice.call(document.querySelectorAll("script[src]")).map(function(e){return e.src}).find(function(e){return e.match("demoit.js")}).replace("demoit.js","")}catch(e){return"./"}},y=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}};function g(e){var t=s(".storage"),n=s(".manage-storage"),r=s(".manage-storage .cancel"),i=s(".settings-json");t.addEventListener("click",function(){n.style.display="block",i.value=JSON.stringify(e.dump(),null,2)}),r.addEventListener("click",function(){n.style.display="none"})}var m="DEMOIT_v1",w={content:"",filename:"untitled.js",editing:!1},x={editor:{theme:"material"},dependencies:[],files:[]},b=function(){var e=a()(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./settings.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0);case 11:if(!y()){e.next=22;break}if(n=localStorage.getItem(m),e.prev=13,!n){e.next=16;break}return e.abrupt("return",JSON.parse(n));case 16:e.next=22;break;case 18:return e.prev=18,e.t1=e.catch(13),console.error("There is some data in the local storage under the ".concat(m," key. However, it is not a valid JSON.")),e.abrupt("return",x);case 22:return e.abrupt("return",x);case 23:case"end":return e.stop()}},e,this,[[0,9],[13,18]])}));return function(){return e.apply(this,arguments)}}();function F(){return L.apply(this,arguments)}function L(){return(L=a()(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=y(),e.next=3,b();case 3:return n=e.sent,(r={activeFileIndex:0,dump:function(){return n},getDependencies:function(){return n.dependencies},setDependencies:function(e){n.dependencies=e},getEditorSettings:function(){return n.editor},getFiles:function(){return n.files},getCurrentFile:function(){return this.getFiles()[this.activeFileIndex]},getFileAt:function(e){return this.getFiles()[e]},makeSureOneFileAtLeast:function(){0===this.getFiles().length&&(n.files.push(w),this.activeFileIndex=0)},editFile:function(e,r){n.files[e]=u()({},n.files[e],r),t&&localStorage.setItem(m,JSON.stringify(n))},editCurrentFile:function(e){this.editFile(this.activeFileIndex,e)},changeActiveFile:function(e){return this.activeFileIndex=e,this.getCurrentFile()},addNewFile:function(){return n.files.push(w),this.changeActiveFile(n.files.length-1)},deleteFile:function(e){if(e===this.activeFileIndex)this.activeFileIndex=0,n.files.splice(e,1);else{var t=this.getCurrentFile();n.files.splice(e,1),this.activeFileIndex=this.getFiles().findIndex(function(e){return e===t})||0}}}).makeSureOneFileAtLeast(),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var E=function(){var e=a()(i.a.mark(function e(t,n,r,o){var a,c,l,f;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=s(".js-code-editor"),c=CodeMirror(a,u()({value:n||"",mode:"jsx",tabSize:2,lineNumbers:!1,autofocus:!0,foldGutter:!1,gutters:[],styleSelectedText:!0},t)),l=function(){return r(c.getValue())},f=function(){return o(c.getValue())},c.on("change",f),c.setOption("extraKeys",{"Ctrl-S":l,"Cmd-S":l}),CodeMirror.normalizeKeyMap(),c.focus(),e.abrupt("return",c);case 9:case"end":return e.stop()}},e,this)}));return function(t,n,r,i){return e.apply(this,arguments)}}(),S=function(){var e=a()(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.theme,e.prev=1,e.next=4,fetch("".concat(v(),"vendor/codemirror/theme/").concat(n,".css"));case 4:return r=e.sent,e.next=7,r.text();case 7:o=e.sent,l(o),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[1,11]])}));return function(t){return e.apply(this,arguments)}}();function k(){var e=s(".console"),t=!0,n=function(n){var r=document.createElement("div"),i=function(e){return e.replace(/[&<>"']/g,function(e){return"&"+{"&":"amp","<":"lt",">":"gt",'"':"quot","'":"#39"}[e]+";"})}(n.toString());r.innerHTML="<p>"+i+"</p>",t&&(e.innerHTML="",t=!1),e.appendChild(r)};return function(){var t=console.error,r=console.log,i=console.warn,o=console.info,a=console.clear;console.error=function(e){n(e.toString()+e.stack),t.apply(console,arguments)},console.log=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(n),r.apply(console,t)},console.warn=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(n),i.apply(console,t)},console.info=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach(n),o.apply(console,t)},console.clear=function(){e.innerHTML="";for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];a.apply(console,n)}}(),{clear:function(){t=!0,e.innerHTML='<div class="hint">console.log</div>'}}}var j=n(3),O=n.n(j),I="demoit-split-sizes-v2";function _(){var e=void 0!==window.localStorage,t=[25,75,75,25],n=function(){if(e){var n=localStorage.getItem(I);if(n&&4===(n=n.split(",")).length)return n.map(Number)}return t}(),r=O()(n,4),i=r[0],o=r[1],a=r[2],c=r[3],u=Split([".left",".right"],{sizes:[i,o],gutterSize:4}),s=Split([".output",".console"],{sizes:[a,c],gutterSize:4,direction:"vertical"});e&&setInterval(function(){localStorage.setItem(I,u.getSizes().join(",")+","+s.getSizes().join(","))},4e3)}function P(e,t,n,r){var i=s(".files .nav"),o=function(){var t=[];t.push("<ul>"),e.getFiles().forEach(function(n,r){var i=n.filename,o=n.editing;t.push('<li><a href="javascript:window.showFile('.concat(r,');void(0);" ').concat(e.activeFileIndex===r?'class="active"':"",'" oncontextmenu="javascript:window.editFile(').concat(r,');void(0);">').concat(i).concat(o?" *":"","</a></li>"))}),t.push("</ul>"),t.push('<ul class="with-icons"><li><a href="javascript:window.newFile()"><svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg></a></li></ul>'),i.innerHTML=t.join("")};return o(),window.showFile=function(e){return t(e)},window.editFile=function(e){return r(e)},window.newFile=function(){return n()},o}var A={presets:["react",["es2015",{modules:!1}]]};function M(e){try{new Function(function(e){return Babel.transform(e,A).code}(e))()}catch(e){console.error(e)}}var T=function(e){var t=e.clear;return function(){var e=a()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t(),n=s(".output"),"undefined"!=typeof ReactDOM&&ReactDOM.unmountComponentAtNode(n),n.innerHTML='<div class="hint">&lt;div id="output" /&gt;</div>';case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()};function C(e){var t,n,r=s(".edit-file"),i=s('.edit-file input[name="filename"]'),o=s(".edit-file .save"),a=s(".edit-file .cancel"),c=s(".edit-file .delete");return o.addEventListener("click",function(){e.editFile(t,{filename:i.value}),i.value="",r.style.display="none",n("rename")}),a.addEventListener("click",function(){i.value="",r.style.display="none"}),c.addEventListener("click",function(){e.deleteFile(t),i.value="",r.style.display="none",n("delete")}),function(o,a){var u=e.getFileAt(o);c.style.display=e.getFiles().length>1?"block":"none",t=o,n=a,i.value=u.filename,r.style.display="block",i.focus()}}function N(e,t){var n=s(".dependencies"),r=s(".manage-dependencies"),o=s(".manage-dependencies .cancel"),c=s(".manage-dependencies .save"),u=s(".dependencies-list");n.addEventListener("click",function(){r.style.display="block",u.value=e.getDependencies().join("\n")}),o.addEventListener("click",function(){r.style.display="none"}),c.addEventListener("click",a()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.setDependencies(u.value.split(/\r?\n/).filter(function(e){return""!==e||"\n"!==e})),c.innerHTML="loading dependencies ...",c.disabled=!0,n.next=5,t();case 5:r.style.display="none",c.innerHTML="Save",c.disabled=!1;case 8:case"end":return n.stop()}},n,this)})))}window.onload=a()(i.a.mark(function e(){var t,n,r,o,c,u,s,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _(),e.next=3,F();case 3:return t=e.sent,n=t.getCurrentFile(),r=n.content,o=T(k()),c=C(t),g(t),e.next=10,h(t.getDependencies());case 10:return e.next=12,S(t.getEditorSettings());case 12:return e.next=14,E(t.getEditorSettings(),r,function(){var e=a()(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t.editCurrentFile({content:n,editing:!1}),l(),M(n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(e){t.editCurrentFile({editing:!0}),l()});case 14:u=e.sent,s=function(){var e=a()(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:u.setValue(n.content),u.focus(),t.editCurrentFile({editing:!1}),M(n.content),l();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),l=P(t,function(){var e=a()(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s(t.changeActiveFile(n));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),function(){var e=a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s(t.addNewFile());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),function(e){c(e,function(){var e=a()(i.a.mark(function e(n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l(),"delete"===n&&s(t.getCurrentFile()),u.focus();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())}),N(t,a()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.getDependencies());case 2:case"end":return e.stop()}},e,this)}))),r&&M(r),document.querySelector(".container").style.opacity=1;case 20:case"end":return e.stop()}},e,this)}))}]);