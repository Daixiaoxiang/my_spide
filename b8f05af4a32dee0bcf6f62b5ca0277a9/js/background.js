(function(e){function t(t){for(var _,i,c=t[0],u=t[1],s=t[2],a=0,p=[];a<c.length;a++)i=c[a],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(_ in u)Object.prototype.hasOwnProperty.call(u,_)&&(e[_]=u[_]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],_=!0,c=1;c<o.length;c++){var u=o[c];0!==n[u]&&(_=!1)}_&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var _={},n={background:0},r=[];function i(t){if(_[t])return _[t].exports;var o=_[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=_,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)i.d(o,_,function(t){return e[t]}.bind(null,_));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;r.push(["fe77","chunk-common"]),o()})({fe77:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _js_fetch__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d1fe"),_js_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("f644");const storageKeys=["_lightup_plugin_version","_lightup_plugin_chunkvendor_script","_lightup_plugin_chunkcommon_script","_lightup_plugin_inject_script","_lightup_plugin_background_script","_lightup_plugin_popup_script","_lightup_plugin_content_script"];function getAppScripts(e){Promise.all([Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["f"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["b"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["e"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["a"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["g"])(),Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["d"])()]).then(t=>{try{const o={};storageKeys.forEach((e,_)=>{if("_lightup_plugin_version"===e){const n=t[_]||{};o[e]=n.version}else o[e]=t[_]}),Object(_js_util__WEBPACK_IMPORTED_MODULE_1__["b"])(storageKeys,o)?chrome.storage.local.set(o,()=>{console.log("fetchNew"),chrome.runtime.reload(),e&&e.call(null,!0)}):e&&e.call(null,!1)}catch(o){e&&e.call(null,!1)}}).catch(t=>{e&&e.call(null,!1)})}let activeWindowsNum=0,isFirstLaunchWindow=!1;chrome.windows.onCreated.addListener((function(e){activeWindowsNum<=0?activeWindowsNum=1:activeWindowsNum+=1,1===activeWindowsNum&&(isFirstLaunchWindow=!0),console.log(activeWindowsNum,"onCreated")})),chrome.windows.onRemoved.addListener((function(e){activeWindowsNum-=1,console.log(activeWindowsNum,"onRemoved")})),chrome.windows.getAll({populate:!0},(function(e){console.log(e,"getAllWindows"),activeWindowsNum=e.length,e.forEach((function(e){e.tabs.forEach((function(e){e.url.indexOf("lightup")>-1&&setTimeout(()=>{chrome.tabs.executeScript(e.id,{code:"window.location.reload();"})},1e3)}))}))})),chrome.storage.local.get(storageKeys,res=>{if(Object(_js_util__WEBPACK_IMPORTED_MODULE_1__["b"])(storageKeys,res))try{eval(res._lightup_plugin_chunkvendor_script),eval(res._lightup_plugin_background_script),console.log("evalbackground")}catch(e){console.log(e),getAppScripts(e=>{e||setTimeout(()=>{chrome.runtime.reload()},3e3)})}else getAppScripts(e=>{e||setTimeout(()=>{chrome.runtime.reload()},3e3)})}),chrome.runtime.onMessage.addListener((function(e,t,o){if("updateApp"===e.type)return(()=>{getAppScripts(o)})(),!0;if("queryManifestConfig"===e.type)return(()=>{Object(_js_fetch__WEBPACK_IMPORTED_MODULE_0__["f"])().then(e=>{console.log(e,"manifestconfig"),o(e)}).catch(e=>{o({})})})(),!0;if("shouldReloadApp"===e.type){const e=isFirstLaunchWindow||0===activeWindowsNum;return console.log(isFirstLaunchWindow,"isFirstLaunchWindow"),console.log(activeWindowsNum,"activeWindowsNum"),console.log(e,"shouldReload"),e&&chrome.runtime.reload(),o(e),!0}}))}});