(function(qiao){
	(function(global){var modModules={};var MODULE_PRE_DEFINED=1;var MODULE_ANALYZED=2;var MODULE_PREPARED=3;var MODULE_DEFINED=4;var modAutoDefineModules={};function modFlagAutoDefine(id){if(!modIs(id,MODULE_DEFINED)){modAutoDefineModules[id]=1}}var BUILDIN_MODULE={require:globalRequire,exports:1,module:1};var actualGlobalRequire=createLocalRequire();var waitTimeout;var requireConf={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}};function globalRequire(requireId,callback){var invalidIds=[];function monitor(id){if(id.indexOf(".")===0){invalidIds.push(id)}}if(typeof requireId==="string"){monitor(requireId)}else{each(requireId,function(id){monitor(id)})}if(invalidIds.length>0){throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+invalidIds.join(", "))}var timeout=requireConf.waitSeconds;if(timeout&&requireId instanceof Array){if(waitTimeout){clearTimeout(waitTimeout)}waitTimeout=setTimeout(waitTimeoutNotice,timeout*1e3)}return actualGlobalRequire(requireId,callback)}globalRequire.version="2.0.8";globalRequire.loader="esl";globalRequire.toUrl=actualGlobalRequire.toUrl;function waitTimeoutNotice(){var hangModules=[];var missModules=[];var hangModulesMap={};var missModulesMap={};var visited={};function checkError(id,hard){if(visited[id]||modIs(id,MODULE_DEFINED)){return}visited[id]=1;if(!modIs(id,MODULE_PREPARED)){if(!hangModulesMap[id]){hangModulesMap[id]=1;hangModules.push(id)}}var mod=modModules[id];if(!mod){if(!missModulesMap[id]){missModulesMap[id]=1;missModules.push(id)}}else if(hard){if(!hangModulesMap[id]){hangModulesMap[id]=1;hangModules.push(id)}each(mod.depMs,function(dep){checkError(dep.absId,dep.hard)})}}for(var id in modAutoDefineModules){checkError(id,1)}if(hangModules.length||missModules.length){throw new Error("[MODULE_TIMEOUT]Hang( "+(hangModules.join(", ")||"none")+" ) Miss( "+(missModules.join(", ")||"none")+" )")}}var wait4PreDefine=[];function modCompletePreDefine(currentId){each(wait4PreDefine,function(mod){modPreDefine(currentId,mod.deps,mod.factory)});wait4PreDefine.length=0}function globalDefine(id,dependencies,factory){if(factory==null){if(dependencies==null){factory=id;id=null}else{factory=dependencies;dependencies=null;if(id instanceof Array){dependencies=id;id=null}}}if(factory==null){return}var opera=window.opera;if(!id&&document.attachEvent&&!(opera&&opera.toString()==="[object Opera]")){var currentScript=getCurrentScript();id=currentScript&&currentScript.getAttribute("data-require-id")}if(id){modPreDefine(id,dependencies,factory)}else{wait4PreDefine[0]={deps:dependencies,factory:factory}}}globalDefine.amd={};function moduleConfigGetter(){var conf=requireConf.config[this.id];if(conf&&typeof conf==="object"){return conf}return{}}function modPreDefine(id,dependencies,factory){if(!modModules[id]){modModules[id]={id:id,depsDec:dependencies,deps:dependencies||["require","exports","module"],factoryDeps:[],factory:factory,exports:{},config:moduleConfigGetter,state:MODULE_PRE_DEFINED,require:createLocalRequire(id),depMs:[],depMkv:{},depRs:[]}}}function modPrepare(id){var mod=modModules[id];if(!mod||modIs(id,MODULE_ANALYZED)){return}var deps=mod.deps;var factory=mod.factory;var hardDependsCount=0;if(typeof factory==="function"){hardDependsCount=Math.min(factory.length,deps.length);!mod.depsDec&&factory.toString().replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,function($0,$1,depId){deps.push(depId)})}var requireModules=[];var depResources=[];each(deps,function(depId,index){var idInfo=parseId(depId);var absId=normalize(idInfo.mod,id);var moduleInfo;var resInfo;if(absId&&!BUILDIN_MODULE[absId]){if(idInfo.res){resInfo={id:depId,mod:absId,res:idInfo.res};depResources.push(depId);mod.depRs.push(resInfo)}moduleInfo=mod.depMkv[absId];if(!moduleInfo){moduleInfo={id:idInfo.mod,absId:absId,hard:index<hardDependsCount};mod.depMs.push(moduleInfo);mod.depMkv[absId]=moduleInfo;requireModules.push(absId)}}else{moduleInfo={absId:absId}}if(index<hardDependsCount){mod.factoryDeps.push(resInfo||moduleInfo)}});mod.state=MODULE_ANALYZED;modInitFactoryInvoker(id);nativeAsyncRequire(requireModules);depResources.length&&mod.require(depResources,function(){each(mod.depRs,function(res){if(!res.absId){res.absId=normalize(res.id,id)}});modAutoDefine()})}function modAutoDefine(){for(var id in modAutoDefineModules){modPrepare(id);modUpdatePreparedState(id);modTryInvokeFactory(id)}}function modUpdatePreparedState(id){var visited={};update(id);function update(id){modPrepare(id);if(!modIs(id,MODULE_ANALYZED)){return false}if(modIs(id,MODULE_PREPARED)||visited[id]){return true}visited[id]=1;var mod=modModules[id];var prepared=true;each(mod.depMs,function(dep){return prepared=update(dep.absId)});prepared&&each(mod.depRs,function(dep){prepared=!!dep.absId;return prepared});if(prepared&&!modIs(id,MODULE_PREPARED)){mod.state=MODULE_PREPARED}return prepared}}function modInitFactoryInvoker(id){var mod=modModules[id];var invoking;mod.invokeFactory=invokeFactory;function invokeFactory(){if(invoking||mod.state!==MODULE_PREPARED){return}invoking=1;var factoryReady=1;each(mod.factoryDeps,function(dep){var depId=dep.absId;if(!BUILDIN_MODULE[depId]){modTryInvokeFactory(depId);return factoryReady=modIs(depId,MODULE_DEFINED)}});if(factoryReady){try{var factory=mod.factory;var exports=typeof factory==="function"?factory.apply(global,modGetModulesExports(mod.factoryDeps,{require:mod.require,exports:mod.exports,module:mod})):factory;if(exports!=null){mod.exports=exports}mod.invokeFactory=null}catch(ex){if(/^\[MODULE_MISS\]"([^"]+)/.test(ex.message)){var hardCirclurDep=mod.depMkv[RegExp.$1];hardCirclurDep&&(hardCirclurDep.hard=1);invoking=0;return}throw ex}modDefined(id)}}}function modIs(id,state){return modModules[id]&&modModules[id].state>=state}function modTryInvokeFactory(id){var mod=modModules[id];if(mod&&mod.invokeFactory){mod.invokeFactory()}}function modGetModulesExports(modules,buildinModules){var args=[];each(modules,function(id,index){if(typeof id==="object"){id=id.absId}args[index]=buildinModules[id]||modModules[id].exports});return args}var modDefinedListeners={};function modAddDefinedListener(id,listener){if(modIs(id,MODULE_DEFINED)){listener();return}var listeners=modDefinedListeners[id];if(!listeners){listeners=modDefinedListeners[id]=[]}listeners.push(listener)}function modDefined(id){var mod=modModules[id];mod.state=MODULE_DEFINED;delete modAutoDefineModules[id];var listeners=modDefinedListeners[id]||[];var len=listeners.length;while(len--){listeners[len]()}listeners.length=0;modDefinedListeners[id]=null}function nativeAsyncRequire(ids,callback,baseId){var isCallbackCalled=0;each(ids,function(id){if(!(BUILDIN_MODULE[id]||modIs(id,MODULE_DEFINED))){modAddDefinedListener(id,tryFinishRequire);(id.indexOf("!")>0?loadResource:loadModule)(id,baseId)}});tryFinishRequire();function tryFinishRequire(){if(typeof callback==="function"&&!isCallbackCalled){var isAllCompleted=1;each(ids,function(id){if(!BUILDIN_MODULE[id]){return isAllCompleted=!!modIs(id,MODULE_DEFINED)}});if(isAllCompleted){isCallbackCalled=1;callback.apply(global,modGetModulesExports(ids,BUILDIN_MODULE))}}}}var loadingModules={};function loadModule(moduleId){if(loadingModules[moduleId]||modModules[moduleId]){return}loadingModules[moduleId]=1;var shimConf=requireConf.shim[moduleId];if(shimConf instanceof Array){requireConf.shim[moduleId]=shimConf={deps:shimConf}}var shimDeps=shimConf&&(shimConf.deps||[]);if(shimDeps){each(shimDeps,function(dep){if(!requireConf.shim[dep]){requireConf.shim[dep]={}}});actualGlobalRequire(shimDeps,load)}else{load()}function load(){var bundleModuleId=bundlesIndex[moduleId];createScript(bundleModuleId||moduleId,loaded)}function loaded(){if(shimConf){var exports;if(typeof shimConf.init==="function"){exports=shimConf.init.apply(global,modGetModulesExports(shimDeps,BUILDIN_MODULE))}if(exports==null&&shimConf.exports){exports=global;each(shimConf.exports.split("."),function(prop){exports=exports[prop];return!!exports})}globalDefine(moduleId,shimDeps,exports||{})}else{modCompletePreDefine(moduleId)}modAutoDefine()}}function loadResource(pluginAndResource,baseId){if(modModules[pluginAndResource]){return}var bundleModuleId=bundlesIndex[pluginAndResource];if(bundleModuleId){loadModule(bundleModuleId);return}var idInfo=parseId(pluginAndResource);var resource={id:pluginAndResource,state:MODULE_ANALYZED};modModules[pluginAndResource]=resource;function pluginOnload(value){resource.exports=value||true;modDefined(pluginAndResource)}pluginOnload.fromText=function(id,text){new Function(text)();modCompletePreDefine(id)};function load(plugin){var pluginRequire=baseId?modModules[baseId].require:actualGlobalRequire;plugin.load(idInfo.res,pluginRequire,pluginOnload,moduleConfigGetter.call({id:pluginAndResource}))}load(actualGlobalRequire(idInfo.mod))}globalRequire.config=function(conf){if(conf){for(var key in requireConf){var newValue=conf[key];var oldValue=requireConf[key];if(!newValue){continue}if(key==="urlArgs"&&typeof newValue==="string"){requireConf.urlArgs["*"]=newValue}else{if(oldValue instanceof Array){oldValue.push.apply(oldValue,newValue)}else if(typeof oldValue==="object"){for(var k in newValue){oldValue[k]=newValue[k]}}else{requireConf[key]=newValue}}}createConfIndex()}};createConfIndex();var pathsIndex;var packagesIndex;var mappingIdIndex;var bundlesIndex;var urlArgsIndex;function createKVSortedIndex(value,allowAsterisk){var index=kv2List(value,1,allowAsterisk);index.sort(descSorterByKOrName);return index}function createConfIndex(){requireConf.baseUrl=requireConf.baseUrl.replace(/\/$/,"")+"/";pathsIndex=createKVSortedIndex(requireConf.paths);mappingIdIndex=createKVSortedIndex(requireConf.map,1);each(mappingIdIndex,function(item){item.v=createKVSortedIndex(item.v)});packagesIndex=[];each(requireConf.packages,function(packageConf){var pkg=packageConf;if(typeof packageConf==="string"){pkg={name:packageConf.split("/")[0],location:packageConf,main:"main"}}pkg.location=pkg.location||pkg.name;pkg.main=(pkg.main||"main").replace(/\.js$/i,"");pkg.reg=createPrefixRegexp(pkg.name);packagesIndex.push(pkg)});packagesIndex.sort(descSorterByKOrName);urlArgsIndex=createKVSortedIndex(requireConf.urlArgs,1);bundlesIndex={};function bundlesIterator(id){bundlesIndex[resolvePackageId(id)]=key}for(var key in requireConf.bundles){each(requireConf.bundles[key],bundlesIterator)}}function indexRetrieve(value,index,hitBehavior){each(index,function(item){if(item.reg.test(value)){hitBehavior(item.v,item.k,item);return false}})}function toUrl(source,baseId){var extReg=/(\.[a-z0-9]+)$/i;var queryReg=/(\?[^#]*)$/;var extname="";var id=source;var query="";if(queryReg.test(source)){query=RegExp.$1;source=source.replace(queryReg,"")}if(extReg.test(source)){extname=RegExp.$1;id=source.replace(extReg,"")}if(baseId!=null){id=normalize(id,baseId)}var url=id;var isPathMap;indexRetrieve(id,pathsIndex,function(value,key){url=url.replace(key,value);isPathMap=1});if(!isPathMap){indexRetrieve(id,packagesIndex,function(value,key,item){url=url.replace(item.name,item.location)})}if(!/^([a-z]{2,10}:\/)?\//i.test(url)){url=requireConf.baseUrl+url}url+=extname+query;indexRetrieve(id,urlArgsIndex,function(value){url+=(url.indexOf("?")>0?"&":"?")+value});return url}function createLocalRequire(baseId){var requiredCache={};function req(requireId,callback){if(typeof requireId==="string"){if(!requiredCache[requireId]){var topLevelId=normalize(requireId,baseId);modTryInvokeFactory(topLevelId);if(!modIs(topLevelId,MODULE_DEFINED)){throw new Error('[MODULE_MISS]"'+topLevelId+'" is not exists!')}requiredCache[requireId]=modModules[topLevelId].exports}return requiredCache[requireId]}else if(requireId instanceof Array){var pureModules=[];var normalizedIds=[];each(requireId,function(id,i){var idInfo=parseId(id);var absId=normalize(idInfo.mod,baseId);var resId=idInfo.res;var normalizedId=absId;if(resId){var trueResId=absId+"!"+resId;if(resId.indexOf(".")!==0&&bundlesIndex[trueResId]){absId=normalizedId=trueResId}else{normalizedId=null}}normalizedIds[i]=normalizedId;modFlagAutoDefine(absId);pureModules.push(absId)});nativeAsyncRequire(pureModules,function(){each(normalizedIds,function(id,i){if(id==null){id=normalizedIds[i]=normalize(requireId[i],baseId);modFlagAutoDefine(id)}});nativeAsyncRequire(normalizedIds,callback,baseId);modAutoDefine()},baseId);modAutoDefine()}}req.toUrl=function(id){return toUrl(id,baseId||"")};return req}function normalize(id,baseId){if(!id){return""}baseId=baseId||"";var idInfo=parseId(id);if(!idInfo){return id}var resourceId=idInfo.res;var moduleId=relative2absolute(idInfo.mod,baseId);indexRetrieve(baseId,mappingIdIndex,function(value){indexRetrieve(moduleId,value,function(mdValue,mdKey){moduleId=moduleId.replace(mdKey,mdValue)})});moduleId=resolvePackageId(moduleId);if(resourceId){var mod=modIs(moduleId,MODULE_DEFINED)&&actualGlobalRequire(moduleId);resourceId=mod&&mod.normalize?mod.normalize(resourceId,function(resId){return normalize(resId,baseId)}):normalize(resourceId,baseId);moduleId+="!"+resourceId}return moduleId}function resolvePackageId(id){each(packagesIndex,function(packageConf){var name=packageConf.name;if(name===id){id=name+"/"+packageConf.main;return false}});return id}function relative2absolute(id,baseId){if(id.indexOf(".")!==0){return id}var segs=baseId.split("/").slice(0,-1).concat(id.split("/"));var res=[];for(var i=0;i<segs.length;i++){var seg=segs[i];switch(seg){case".":break;case"..":if(res.length&&res[res.length-1]!==".."){res.pop()}else{res.push(seg)}break;default:seg&&res.push(seg)}}return res.join("/")}function parseId(id){var segs=id.split("!");if(segs[0]){return{mod:segs[0],res:segs[1]}}}function kv2List(source,keyMatchable,allowAsterisk){var list=[];for(var key in source){if(source.hasOwnProperty(key)){var item={k:key,v:source[key]};list.push(item);if(keyMatchable){item.reg=key==="*"&&allowAsterisk?/^/:createPrefixRegexp(key)}}}return list}function createPrefixRegexp(prefix){return new RegExp("^"+prefix+"(/|$)")}function each(source,iterator){if(source instanceof Array){for(var i=0,len=source.length;i<len;i++){if(iterator(source[i],i)===false){break}}}}function descSorterByKOrName(a,b){var aValue=a.k||a.name;var bValue=b.k||b.name;if(bValue==="*"){return-1}if(aValue==="*"){return 1}return bValue.length-aValue.length}var currentlyAddingScript;var interactiveScript;function getCurrentScript(){if(currentlyAddingScript){return currentlyAddingScript}else if(interactiveScript&&interactiveScript.readyState==="interactive"){return interactiveScript}var scripts=document.getElementsByTagName("script");var scriptLen=scripts.length;while(scriptLen--){var script=scripts[scriptLen];if(script.readyState==="interactive"){interactiveScript=script;return script}}}var headElement=document.getElementsByTagName("head")[0];var baseElement=document.getElementsByTagName("base")[0];if(baseElement){headElement=baseElement.parentNode}function createScript(moduleId,onload){var script=document.createElement("script");script.setAttribute("data-require-id",moduleId);script.src=toUrl(moduleId+".js");script.async=true;if(script.readyState){script.onreadystatechange=innerOnload}else{script.onload=innerOnload}function innerOnload(){var readyState=script.readyState;if(typeof readyState==="undefined"||/^(loaded|complete)$/.test(readyState)){script.onload=script.onreadystatechange=null;script=null;onload()}}currentlyAddingScript=script;baseElement?headElement.insertBefore(script,baseElement):headElement.appendChild(script);currentlyAddingScript=null}if(!global.define){global.define=globalDefine;if(!global.require){global.require=globalRequire}global.esl=globalRequire}var mainModule;(function(){var scripts=document.getElementsByTagName("script");var len=scripts.length;while(len--){var script=scripts[len];if(mainModule=script.getAttribute("data-main")){break}}})();mainModule&&setTimeout(function(){globalRequire([mainModule])},4)})(window.qiao=window.qiao||{});
var define=qiao.define;var require=qiao.require;
require.config({
	baseUrl: (BDBridgeConfig.FRONT_ROOT || BDBridgeConfig.ROOT) + 'asset/',
    urlArgs: {
        'front/webimlite/main': 5
    }
});

define("front/base/lang",function(){"use strict";function e(e){return"[object Array]"===n.call(e)}function t(e){return!(!e||!i.test(e))}var n={}.toString,i=/\{\s*\[(?:native code|function)\]\s*\}/i;return{isNative:t,isArray:t(Array.isArray)?Array.isArray:e,isObject:function(e){return e&&"[object Object]"===n.call(e)},isFunction:function(e){return e&&"[object Function]"===n.call(e)},instanceOf:function(e,t){return e&&e.hasOwnProperty&&e instanceof t},extend:function(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n];return e}}}),define("front/base/string",function(require){"use strict";var e=require("./lang"),t=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)","g");return{format:function(t,n){t=String(t);var i=[].slice.call(arguments,1);if(i.length)return i=1==i.length?e.isArray(n)||e.isObject(n)?n:i:i,t.replace(/#\{(.+?)\}/g,function(t,n){var r=i[n];if(e.isFunction(r))r=r(n);return"undefined"==typeof r?"":r});else return t},objectToString:function(e){var t=[],n=function(e){if("object"==typeof e&&null!==e)return this.objectToString(e);else return/^(string|number)$/.test(typeof e)?'"'+e+'"':e};for(var i in e)t.push('"'+i+'":'+n(e[i]));return"{"+t.join(",")+"}"},encodeHTML:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},trim:function(e){return e.replace(t,"")}}}),define("front/pre/loader",function(){function e(e){var t=document.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href",e),document.getElementsByTagName("head")[0].appendChild(t),t}function t(e,t){var n=t&&document.getElementById(t);if(n)n.parentNode.removeChild(n);return n=document.createElement("script"),n.setAttribute("type","text/javascript"),t&&n.setAttribute("id",t),n.setAttribute("charset","UTF-8"),n.setAttribute("src",e),document.getElementsByTagName("head")[0].appendChild(n),n}return{js:t,css:e}}),define("front/pre/storage",function(){var e;if(window.localStorage)e=window.localStorage;else if(window.globalStorage)e=window.globalStorage;else try{var t=document.createElement("div");t.style.display="none",t.style.behavior='url("#default#userData")';var n=document.getElementsByTagName("script"),i=n[n.length-1];if("head"==i.parentNode.tagName)i=document.body.firstElementChild||document.body.firstChild;i.parentNode.insertBefore(t,i);var r=+new Date+31536e6;t.expires=new Date(r).toUTCString();var a="_QIAO_USERDATA_";t.load(a),e={setItem:function(e,n){t.setAttribute(e,n),t.save(a)},getItem:function(e){return t.getAttribute(e)||null}}}catch(o){e={setItem:function(){},getItem:function(){return null}}}return{setItem:function(t,n){e.setItem(t,n)},getItem:function(t){return e.getItem(t)}}}),define("front/pre/const",function(){function e(){var e=i.NS+"BSL";return window[e]||(window[e]={})}function t(e,t){var r=i[t]||n;return r+e}var n="QIAO",i={LS:n+"_LS_",NS:n+"_NS_",CK:n+"_CK_"};return{WEB_ROOT:"http://qiao.baidu.com/v3",RCV_ROOT:"http://r.qiao.baidu.com/",createLSKey:function(e){return t(e,"LS")},addEntity:function(t,n){var r=e(),a=i.NS+"BSL."+t;return r[t]=n,a},getEntity:function(t){var n=e();return n[t]},createCookieKey:function(e){return t(e,"CK")}}}),define("front/pre/enter",function(require){function e(e,t){for(var n in t)if(t.hasOwnProperty(n))e[n]=t[n];return e}function t(e){if(e.status){if(500===e.status&&C.fail<M)m(g),C.fail++;return!0}if(0===e.saved){if(C.limit<M)m(g),C.limit++;return!0}return!1}function n(n){if(n&&!t(n)){if(n.tag){switch(n.tag.op){case L:k=n.tag.val;var i=g,r=v,a="return "+n.tag.val,o=new Function(a),s=o()();m(i,r,s);break;case S:if(n.isAuthCode=!0,n.tag.val)n.url=n.tag.val;break;case E:n.isSecondVerify=!0}if(n.tag.op===L)return}var l=y.getEntity("callback");if(n.jscode=k,n=e(n,_),l)return void l(n);else return void y.addEntity("data",n)}}function i(){var e=navigator.userAgent;return!!e.match(/.*Mobile.*/)||"ontouchstart"in window}function r(e,t){var n=new RegExp("(^|&|\\?|#)"+t+"=([^&]*)(&|$)",""),i=e.match(n);return i&&i[2]||null}function a(e){return new Function("return ("+e+")")()}function o(e,t,n){var i=e+"="+escape(t),r=0;if(n)r=new Date,r.setTime(r.getTime()+24*n*60*60*1e3);i+=(r?";expires="+r.toGMTString():"")+";path=/;",document.cookie=i}function s(e){var t=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),n=document.cookie.match(t);if(null!=n)return unescape(n[2]);else return null}function l(e){var t=y.createLSKey(e+"_BID"),n=b.getItem(t);return n||""}function u(e){var t=r(e,"word"),n=r(e,"u");if(null!=t&&null==n)e=t;else if(null==t&&null!=n)e=n;else return"";if(e=e.replace(/%3A/gi,":").replace(/%2F/gi,"/").replace(/%3F/gi,"?"),e=e.replace(/(((http|https):\/\/)?[\w\.-]+)(\/|\?)?\S*/i,"$1"),-1==e.search(/^(http|https):\/\//i))e="http://"+e;return e}function d(){var e=document.referrer;return e=-1==e.indexOf("cpro.baidu.com")?e:u(e)}function f(e){var t=y.createCookieKey(e+"_R"),n=d(),i=window.location.host,r=s(t);if(""==n)return n=r||"",o(t,n,T),n;if(-1==n.indexOf(i))return o(t,n,T),n;if(null!==r)n=r;return n}function c(){for(var e=["baidu.com","baidu.com","google.com","google.cn","bing.com","search.live.com","search.yahoo.com","one.cn.yahoo.com","sogou.com","gougou.com","youdao.com","soso.com","zhongsou.com","search.114.vnet.cn"],t=["wd","word","q","q","q","q","p","p","query","search","q","w","w","kw"],n=["gbk","gbk","utf8","utf8","utf8","utf8","utf8","utf8","gbk","utf8","utf8","gbk","gbk","gbk"],i=d(),a={word:"",coding:""},o=0,s=e.length;s>o;o++)if(-1!=i.indexOf(e[o])){a.word=r(i,t[o])||"",a.coding=n[o];break}else;return a}function h(){var e=(new Date).getTimezoneOffset(),t=parseInt(e/60,10),n=e%60,i="-";if(0>t||0>n)if(i="+",t=-t,0>n)n=-n;return t+="",n+="","UTC"+i+t+":"+n}function p(e){var t=y.createLSKey(e+"_INFO"),n=b.getItem(t)||"{}";n=a(n);var i=window.navigator,r=window.screen;return n.lang=i.language||i.systemLanguage,n.rsl=r.width+"*"+r.height,n.tz=h(),n.cbit=r.colorDepth,n}function m(e,t,n){g=e,v=t;var a=p(e),o=c(),s=document.title.substring(0,100).replace(/\r|\n/g,""),u=f(e);_.referrer=u,_.title=s,_.location=window.location.href;var d="Enter.php?callback="+D+"&siteid="+e+"&ucid="+t+"&bid="+l(e)+"&referrer="+encodeURIComponent(u)+"&word="+o.word+"&coding="+o.coding+"&bdclkid="+(r(location.href,"bdclkid")||"")+"&title="+encodeURIComponent(s)+"&vis_type="+(i()?2:3)+"&lang="+a.lang+"&rsl="+a.rsl+"&tz="+a.tz+"&cbit="+a.cbit+"&fromSite="+(BDBridgeConfig.FROM_SITE||"")+"&t="+(new Date).getTime();if(n||0===n){var h={jscode:n};h=w.objectToString(h),h="&tag="+h,d+=h}x.js(y.RCV_ROOT+d,"BridgeRCVEnter")}var g,v,y=require("./const"),b=require("./storage"),x=require("./loader"),w=require("../base/string"),_={},C={limit:0,fail:0},M=3,T=2,L=2,S=4,E=3,k="",D=y.addEntity("handleEnter",n);return m}),define("front/pre/module",function(require){function e(e,t){for(var module,i=(new Date).getTime(),r=0;module=e[r];r++)n.js(t.js+module.name+".js?v="+i),n.css(t.css+module.name+".css?v="+i)}function t(e,t){return""+(e.version?e.version+"/":"")+e.name+"."+t+(e.stamp?"?v="+e.stamp:"?v=")}var n=require("./loader");return{load:function(i,r,a){if(a)return void e(i,r);for(var module,o=0;module=i[o];o++)n.js(r.js+t(module,"js")+"20160511"),n.css(r.css+t({version:module.version,name:"main",stamp:module.stamp},"css")+"20160125");var s=r.fix;n.css(s+"asset/front/css/fix.css?t="+ +new Date)}}}),define("front/pre/version",function(require){function e(e){return a.createLSKey("version_"+e)}function t(t,n){var r,a=e(t),o=[];for(var s in n)if(n.hasOwnProperty(s))r=n[s]||{},o.push(s+":"),o.push(r.version||""),o.push("|"),o.push(r.stamp||""),o.push(";");o.pop(),i.setItem(a,o.join(""))}function n(t){var n,r=e(t),a=i.getItem(r)||"",o={};a=a.split(";");for(var s,l=0;s=a[l];l++)s=s.split(":"),n=s[0],s=s[1].split("|"),o[n]={version:s[0]||"",stamp:s[1]||""};return o}var i=require("./storage"),r=require("./loader"),a=require("./const");return{update:function(e){var n,i=["siteid="+e],o=a.addEntity("handleVersion",function(i){try{t(e,i),n.parentNode.removeChild(n)}catch(r){}});i.push("callback="+o),i.push("t="+(new Date).getTime()),n=r.js(a.WEB_ROOT+"version.js?"+i.join("&"))},get:function(e,t){var i=n(e);return t?i[t]:i}}}),require(["front/pre/enter","front/pre/module","front/pre/version","front/pre/const"],function(e,module,t,n){if(window.BDBridgeConfig){var i=BDBridgeConfig.BD_BRIDGE_DATA.siteid,r=BDBridgeConfig.BD_BRIDGE_DATA.ucid;n.WEB_ROOT=BDBridgeConfig.FRONT_ROOT||BDBridgeConfig.ROOT,n.RCV_ROOT=BDBridgeConfig.RCV_ROOT,e(i,r);var a=["icon","invite","mess","api"],o=BDBridgeConfig.OPEN_MODULES,s=t.get(i),l=s.main||{},u=function(){function e(){for(var e,t=location.href,i=0,r=null;e=n[i];i++)if(e.url==t||t.indexOf(e.url)>-1)!r&&(r=e),r&&r.url&&r.url.length<e.url.length&&(r=e);if(r)return r.pageid;else return"0"}for(var t,n=BDBridgeConfig.BD_BRIDGE_SPECIAL||[],i=BDBridgeConfig.BD_BRIDGE_STYLE_ITEM||[],r=n&&n.length<=0?"0":e(),a=0;t=i[a];a++)if(t.pageid===r)return{styleId:t.styleid,openModules:t.OPEN_MODULES}}(),d=u.styleId,o=u.openModules||"1111",f=BDBridgeConfig.CSS_LOADER_URL+d;if("0"==d)f=BDBridgeConfig.CSS_DEFAULT_URL;var c,h=[];l.name=["main"],h.push(l);var p=!1;if("hidden"===window.bd_bridge_show_hidden)p=!0;if(!p)for(var m=0,g=o.length;g-1>m;m++)if(c=o.charAt(m),"0"!==c&&a[m])l.name.push(a[m]);l.name.push(a[o.length-1]),l.name=l.name.join("_"),module.load(h,{js:BDBridgeConfig.JS_LOADER_URL,css:f+"/",fix:n.WEB_ROOT},BDBridgeConfig.LOADER_NO_COMBO),setTimeout(function(){t.update(i)},0)}});

})(window.qiao = {});