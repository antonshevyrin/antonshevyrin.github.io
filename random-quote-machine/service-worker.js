"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/random-quote-machine/index.html","d68c9b65ef44064ddb3cf4976759dc06"],["/random-quote-machine/static/css/main.6f922c0e.css","f17ae4e6d5d22297b2371b9b89c4c4dc"],["/random-quote-machine/static/js/main.f193ec6b.js","3c3c87088184c1424644bf86bd77aee5"],["/random-quote-machine/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/random-quote-machine/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/random-quote-machine/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/random-quote-machine/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/random-quote-machine/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/random-quote-machine/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/random-quote-machine/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/random-quote-machine/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/random-quote-machine/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/random-quote-machine/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/random-quote-machine/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});