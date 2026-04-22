"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/stream/notifications/route";
exports.ids = ["app/api/stream/notifications/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstream%2Fnotifications%2Froute&page=%2Fapi%2Fstream%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstream%2Fnotifications%2Froute.ts&appDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstream%2Fnotifications%2Froute&page=%2Fapi%2Fstream%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstream%2Fnotifications%2Froute.ts&appDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Vinayaka_Alumnix_frontend_app_api_stream_notifications_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/stream/notifications/route.ts */ \"(rsc)/./app/api/stream/notifications/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stream/notifications/route\",\n        pathname: \"/api/stream/notifications\",\n        filename: \"route\",\n        bundlePath: \"app/api/stream/notifications/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Vinayaka\\\\Alumnix\\\\frontend\\\\app\\\\api\\\\stream\\\\notifications\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Vinayaka_Alumnix_frontend_app_api_stream_notifications_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/stream/notifications/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGc3RyZWFtJTJGbm90aWZpY2F0aW9ucyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGc3RyZWFtJTJGbm90aWZpY2F0aW9ucyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN0cmVhbSUyRm5vdGlmaWNhdGlvbnMlMkZyb3V0ZS50cyZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDVmluYXlha2ElNUNBbHVtbml4JTVDZnJvbnRlbmQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1ZpbmF5YWthJTVDQWx1bW5peCU1Q2Zyb250ZW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQztBQUM5RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW1uaXgvP2ZhMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVmluYXlha2FcXFxcQWx1bW5peFxcXFxmcm9udGVuZFxcXFxhcHBcXFxcYXBpXFxcXHN0cmVhbVxcXFxub3RpZmljYXRpb25zXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zdHJlYW0vbm90aWZpY2F0aW9ucy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3N0cmVhbS9ub3RpZmljYXRpb25zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHJlYW0vbm90aWZpY2F0aW9ucy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFZpbmF5YWthXFxcXEFsdW1uaXhcXFxcZnJvbnRlbmRcXFxcYXBwXFxcXGFwaVxcXFxzdHJlYW1cXFxcbm90aWZpY2F0aW9uc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc3RyZWFtL25vdGlmaWNhdGlvbnMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstream%2Fnotifications%2Froute&page=%2Fapi%2Fstream%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstream%2Fnotifications%2Froute.ts&appDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/stream/notifications/route.ts":
/*!***********************************************!*\
  !*** ./app/api/stream/notifications/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_realtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/realtime */ \"(rsc)/./lib/realtime.ts\");\n\n\n\nfunction sseFormat(data, event) {\n    const payload = `data: ${JSON.stringify(data)}\\n`;\n    const evt = event ? `event: ${event}\\n` : \"\";\n    return `${evt}${payload}\\n`;\n}\nasync function GET() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session) return new Response(\"Unauthorized\", {\n        status: 401\n    });\n    const uid = session.uid;\n    let isClosed = false;\n    const stream = new ReadableStream({\n        start (controller) {\n            const enc = new TextEncoder();\n            const safeEnqueue = (data)=>{\n                if (!isClosed) {\n                    try {\n                        controller.enqueue(data);\n                    } catch (e) {\n                        isClosed = true;\n                    }\n                }\n            };\n            safeEnqueue(enc.encode(`retry: 2000\\n\\n`));\n            safeEnqueue(enc.encode(sseFormat({\n                ok: true\n            }, \"ready\")));\n            const channel = `notifications:${uid}`;\n            const unsubUser = _lib_realtime__WEBPACK_IMPORTED_MODULE_2__.realtimeHub.subscribe(channel, (msg)=>{\n                safeEnqueue(enc.encode(sseFormat(msg, \"notifications\")));\n            });\n            let unsubAdmin = ()=>{};\n            if (session.role === \"ADMIN\") {\n                unsubAdmin = _lib_realtime__WEBPACK_IMPORTED_MODULE_2__.realtimeHub.subscribe(\"admin:notifications\", (msg)=>{\n                    safeEnqueue(enc.encode(sseFormat(msg)));\n                });\n            }\n            const keepAlive = setInterval(()=>{\n                safeEnqueue(enc.encode(`event: ping\\ndata: {}\\n\\n`));\n            }, 15000);\n            // Store cleanup on the controller if needed, but the cancel() method below is better\n            controller._cleanup = ()=>{\n                isClosed = true;\n                clearInterval(keepAlive);\n                unsubUser();\n                unsubAdmin();\n            };\n        },\n        cancel (controller) {\n            isClosed = true;\n            if (controller._cleanup) controller._cleanup();\n        }\n    });\n    return new Response(stream, {\n        headers: {\n            \"Content-Type\": \"text/event-stream\",\n            \"Cache-Control\": \"no-cache, no-transform\",\n            Connection: \"keep-alive\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0cmVhbS9ub3RpZmljYXRpb25zL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ0o7QUFDSTtBQUU3QyxTQUFTRyxVQUFVQyxJQUFhLEVBQUVDLEtBQWM7SUFDOUMsTUFBTUMsVUFBVSxDQUFDLE1BQU0sRUFBRUMsS0FBS0MsU0FBUyxDQUFDSixNQUFNLEVBQUUsQ0FBQztJQUNqRCxNQUFNSyxNQUFNSixRQUFRLENBQUMsT0FBTyxFQUFFQSxNQUFNLEVBQUUsQ0FBQyxHQUFHO0lBQzFDLE9BQU8sQ0FBQyxFQUFFSSxJQUFJLEVBQUVILFFBQVEsRUFBRSxDQUFDO0FBQzdCO0FBRU8sZUFBZUk7SUFDcEIsTUFBTUMsVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNVLFNBQVMsT0FBTyxJQUFJQyxTQUFTLGdCQUFnQjtRQUFFQyxRQUFRO0lBQUk7SUFDaEUsTUFBTUMsTUFBTSxRQUFpQkEsR0FBRztJQUVoQyxJQUFJQyxXQUFXO0lBQ2YsTUFBTUMsU0FBUyxJQUFJQyxlQUFlO1FBQ2hDQyxPQUFNQyxVQUFVO1lBQ2QsTUFBTUMsTUFBTSxJQUFJQztZQUVoQixNQUFNQyxjQUFjLENBQUNsQjtnQkFDbkIsSUFBSSxDQUFDVyxVQUFVO29CQUNiLElBQUk7d0JBQ0ZJLFdBQVdJLE9BQU8sQ0FBQ25CO29CQUNyQixFQUFFLE9BQU9vQixHQUFHO3dCQUNWVCxXQUFXO29CQUNiO2dCQUNGO1lBQ0Y7WUFFQU8sWUFBWUYsSUFBSUssTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDO1lBQ3hDSCxZQUFZRixJQUFJSyxNQUFNLENBQUN0QixVQUFVO2dCQUFFdUIsSUFBSTtZQUFLLEdBQUc7WUFFL0MsTUFBTUMsVUFBVSxDQUFDLGNBQWMsRUFBRWIsSUFBSSxDQUFDO1lBQ3RDLE1BQU1jLFlBQVkxQixzREFBV0EsQ0FBQzJCLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDRztnQkFDaERSLFlBQVlGLElBQUlLLE1BQU0sQ0FBQ3RCLFVBQVUyQixLQUFLO1lBQ3hDO1lBRUEsSUFBSUMsYUFBYSxLQUFPO1lBQ3hCLElBQUksUUFBaUJDLElBQUksS0FBSyxTQUFTO2dCQUNyQ0QsYUFBYTdCLHNEQUFXQSxDQUFDMkIsU0FBUyxDQUFDLHVCQUF1QixDQUFDQztvQkFDekRSLFlBQVlGLElBQUlLLE1BQU0sQ0FBQ3RCLFVBQVUyQjtnQkFDbkM7WUFDRjtZQUVBLE1BQU1HLFlBQVlDLFlBQVk7Z0JBQzVCWixZQUFZRixJQUFJSyxNQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztZQUNwRCxHQUFHO1lBRUgscUZBQXFGO1lBQ3BGTixXQUFtQmdCLFFBQVEsR0FBRztnQkFDN0JwQixXQUFXO2dCQUNYcUIsY0FBY0g7Z0JBQ2RMO2dCQUNBRztZQUNGO1FBQ0Y7UUFDQU0sUUFBT2xCLFVBQVU7WUFDZkosV0FBVztZQUNYLElBQUksV0FBb0JvQixRQUFRLEVBQUUsV0FBb0JBLFFBQVE7UUFDaEU7SUFDRjtJQUVBLE9BQU8sSUFBSXZCLFNBQVNJLFFBQVE7UUFDMUJzQixTQUFTO1lBQ1AsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQkMsWUFBWTtRQUNkO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW1uaXgvLi9hcHAvYXBpL3N0cmVhbS9ub3RpZmljYXRpb25zL3JvdXRlLnRzPzc2NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgeyByZWFsdGltZUh1YiB9IGZyb20gXCJAL2xpYi9yZWFsdGltZVwiO1xyXG5cclxuZnVuY3Rpb24gc3NlRm9ybWF0KGRhdGE6IHVua25vd24sIGV2ZW50Pzogc3RyaW5nKSB7XHJcbiAgY29uc3QgcGF5bG9hZCA9IGBkYXRhOiAke0pTT04uc3RyaW5naWZ5KGRhdGEpfVxcbmA7XHJcbiAgY29uc3QgZXZ0ID0gZXZlbnQgPyBgZXZlbnQ6ICR7ZXZlbnR9XFxuYCA6IFwiXCI7XHJcbiAgcmV0dXJuIGAke2V2dH0ke3BheWxvYWR9XFxuYDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiVW5hdXRob3JpemVkXCIsIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgY29uc3QgdWlkID0gKHNlc3Npb24gYXMgYW55KS51aWQgYXMgc3RyaW5nO1xyXG5cclxuICBsZXQgaXNDbG9zZWQgPSBmYWxzZTtcclxuICBjb25zdCBzdHJlYW0gPSBuZXcgUmVhZGFibGVTdHJlYW0oe1xyXG4gICAgc3RhcnQoY29udHJvbGxlcikge1xyXG4gICAgICBjb25zdCBlbmMgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHNhZmVFbnF1ZXVlID0gKGRhdGE6IFVpbnQ4QXJyYXkpID0+IHtcclxuICAgICAgICBpZiAoIWlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoZGF0YSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlzQ2xvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzYWZlRW5xdWV1ZShlbmMuZW5jb2RlKGByZXRyeTogMjAwMFxcblxcbmApKTtcclxuICAgICAgc2FmZUVucXVldWUoZW5jLmVuY29kZShzc2VGb3JtYXQoeyBvazogdHJ1ZSB9LCBcInJlYWR5XCIpKSk7XHJcblxyXG4gICAgICBjb25zdCBjaGFubmVsID0gYG5vdGlmaWNhdGlvbnM6JHt1aWR9YDtcclxuICAgICAgY29uc3QgdW5zdWJVc2VyID0gcmVhbHRpbWVIdWIuc3Vic2NyaWJlKGNoYW5uZWwsIChtc2c6IGFueSkgPT4ge1xyXG4gICAgICAgIHNhZmVFbnF1ZXVlKGVuYy5lbmNvZGUoc3NlRm9ybWF0KG1zZywgXCJub3RpZmljYXRpb25zXCIpKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHVuc3ViQWRtaW4gPSAoKSA9PiB7fTtcclxuICAgICAgaWYgKChzZXNzaW9uIGFzIGFueSkucm9sZSA9PT0gXCJBRE1JTlwiKSB7XHJcbiAgICAgICAgdW5zdWJBZG1pbiA9IHJlYWx0aW1lSHViLnN1YnNjcmliZShcImFkbWluOm5vdGlmaWNhdGlvbnNcIiwgKG1zZzogYW55KSA9PiB7XHJcbiAgICAgICAgICBzYWZlRW5xdWV1ZShlbmMuZW5jb2RlKHNzZUZvcm1hdChtc2cpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGtlZXBBbGl2ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBzYWZlRW5xdWV1ZShlbmMuZW5jb2RlKGBldmVudDogcGluZ1xcbmRhdGE6IHt9XFxuXFxuYCkpO1xyXG4gICAgICB9LCAxNTAwMCk7XHJcblxyXG4gICAgICAvLyBTdG9yZSBjbGVhbnVwIG9uIHRoZSBjb250cm9sbGVyIGlmIG5lZWRlZCwgYnV0IHRoZSBjYW5jZWwoKSBtZXRob2QgYmVsb3cgaXMgYmV0dGVyXHJcbiAgICAgIChjb250cm9sbGVyIGFzIGFueSkuX2NsZWFudXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNDbG9zZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoa2VlcEFsaXZlKTtcclxuICAgICAgICB1bnN1YlVzZXIoKTtcclxuICAgICAgICB1bnN1YkFkbWluKCk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY2FuY2VsKGNvbnRyb2xsZXIpIHtcclxuICAgICAgaXNDbG9zZWQgPSB0cnVlO1xyXG4gICAgICBpZiAoKGNvbnRyb2xsZXIgYXMgYW55KS5fY2xlYW51cCkgKGNvbnRyb2xsZXIgYXMgYW55KS5fY2xlYW51cCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKHN0cmVhbSwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvZXZlbnQtc3RyZWFtXCIsXHJcbiAgICAgIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlLCBuby10cmFuc2Zvcm1cIixcclxuICAgICAgQ29ubmVjdGlvbjogXCJrZWVwLWFsaXZlXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicmVhbHRpbWVIdWIiLCJzc2VGb3JtYXQiLCJkYXRhIiwiZXZlbnQiLCJwYXlsb2FkIiwiSlNPTiIsInN0cmluZ2lmeSIsImV2dCIsIkdFVCIsInNlc3Npb24iLCJSZXNwb25zZSIsInN0YXR1cyIsInVpZCIsImlzQ2xvc2VkIiwic3RyZWFtIiwiUmVhZGFibGVTdHJlYW0iLCJzdGFydCIsImNvbnRyb2xsZXIiLCJlbmMiLCJUZXh0RW5jb2RlciIsInNhZmVFbnF1ZXVlIiwiZW5xdWV1ZSIsImUiLCJlbmNvZGUiLCJvayIsImNoYW5uZWwiLCJ1bnN1YlVzZXIiLCJzdWJzY3JpYmUiLCJtc2ciLCJ1bnN1YkFkbWluIiwicm9sZSIsImtlZXBBbGl2ZSIsInNldEludGVydmFsIiwiX2NsZWFudXAiLCJjbGVhckludGVydmFsIiwiY2FuY2VsIiwiaGVhZGVycyIsIkNvbm5lY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/stream/notifications/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/auth/login\",\n        error: \"/auth/login\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                },\n                roleRequirement: {\n                    label: \"Role\",\n                    type: \"text\"\n                }\n            },\n            async authorize (credentials) {\n                const email = (credentials?.email || \"\").toLowerCase().trim();\n                const password = (credentials?.password || \"\").trim();\n                const roleRequirement = credentials?.roleRequirement;\n                console.log(\"--- DEBUG AUTH ---\", {\n                    incomingEmail: email,\n                    pwLength: password.length,\n                    roleReq: roleRequirement\n                });\n                if (!email || !password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email\n                    }\n                });\n                if (!user) {\n                    console.log(\"--- DEBUG AUTH --- FAILED: USER NOT FOUND in DB\");\n                    return null;\n                }\n                if (!user.verifiedAt) {\n                    console.log(\"--- DEBUG AUTH --- FAILED: USER NOT VERIFIED\");\n                    return null;\n                }\n                // Check password\n                const ok = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, user.passwordHash);\n                if (!ok) {\n                    console.log(\"--- DEBUG AUTH --- FAILED: PASSWORD MISMATCH\");\n                    return null;\n                }\n                // SEPARATION LOGIC: If a role requirement is passed, reject if the user doesn't match\n                if (roleRequirement && user.role !== roleRequirement) {\n                    console.log(\"--- DEBUG AUTH --- FAILED: ROLE MISMATCH\", {\n                        userRole: user.role,\n                        required: roleRequirement\n                    });\n                    return null;\n                }\n                console.log(\"--- DEBUG AUTH --- SUCCESS:\", user.email);\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.uid = user.id;\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.uid = token.uid;\n            session.role = token.role;\n            return session;\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tFO0FBQ3BDO0FBQ1E7QUFFL0IsTUFBTUcsY0FBK0I7SUFDMUNDLFNBQVM7UUFBRUMsVUFBVTtJQUFNO0lBQzNCQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQUMsV0FBVztRQUNUYiwyRUFBbUJBLENBQUM7WUFDbEJjLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7Z0JBQ2hERSxpQkFBaUI7b0JBQUVILE9BQU87b0JBQVFDLE1BQU07Z0JBQU87WUFDakQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixNQUFNQyxRQUFRLENBQUNELGFBQWFDLFNBQVMsRUFBQyxFQUFHTSxXQUFXLEdBQUdDLElBQUk7Z0JBQzNELE1BQU1KLFdBQVcsQ0FBQ0osYUFBYUksWUFBWSxFQUFDLEVBQUdJLElBQUk7Z0JBQ25ELE1BQU1ILGtCQUFrQkwsYUFBYUs7Z0JBRXJDSSxRQUFRQyxHQUFHLENBQUMsc0JBQXNCO29CQUFFQyxlQUFlVjtvQkFBT1csVUFBVVIsU0FBU1MsTUFBTTtvQkFBRUMsU0FBU1Q7Z0JBQWdCO2dCQUU5RyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0csVUFBVSxPQUFPO2dCQUVoQyxNQUFNVyxPQUFPLE1BQU01QiwrQ0FBTUEsQ0FBQzRCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUFFQyxPQUFPO3dCQUFFaEI7b0JBQU07Z0JBQUU7Z0JBQzdELElBQUksQ0FBQ2MsTUFBTTtvQkFBRU4sUUFBUUMsR0FBRyxDQUFDO29CQUFvRCxPQUFPO2dCQUFNO2dCQUMxRixJQUFJLENBQUNLLEtBQUtHLFVBQVUsRUFBRTtvQkFBRVQsUUFBUUMsR0FBRyxDQUFDO29CQUFpRCxPQUFPO2dCQUFNO2dCQUVsRyxpQkFBaUI7Z0JBQ2pCLE1BQU1TLEtBQUssTUFBTWpDLHdEQUFjLENBQUNrQixVQUFVVyxLQUFLTSxZQUFZO2dCQUMzRCxJQUFJLENBQUNGLElBQUk7b0JBQUVWLFFBQVFDLEdBQUcsQ0FBQztvQkFBaUQsT0FBTztnQkFBTTtnQkFFckYsc0ZBQXNGO2dCQUN0RixJQUFJTCxtQkFBbUJVLEtBQUtPLElBQUksS0FBS2pCLGlCQUFpQjtvQkFDcERJLFFBQVFDLEdBQUcsQ0FBQyw0Q0FBNEM7d0JBQUVhLFVBQVVSLEtBQUtPLElBQUk7d0JBQUVFLFVBQVVuQjtvQkFBZ0I7b0JBQ3pHLE9BQU87Z0JBQ1Q7Z0JBRUFJLFFBQVFDLEdBQUcsQ0FBQywrQkFBK0JLLEtBQUtkLEtBQUs7Z0JBQ3JELE9BQU87b0JBQ0x3QixJQUFJVixLQUFLVSxFQUFFO29CQUNYeEIsT0FBT2MsS0FBS2QsS0FBSztvQkFDakJGLE1BQU1nQixLQUFLaEIsSUFBSTtvQkFDZnVCLE1BQU1QLEtBQUtPLElBQUk7Z0JBQ2pCO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RJLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRWIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JhLE1BQU1DLEdBQUcsR0FBRyxLQUFjSixFQUFFO2dCQUM1QkcsTUFBTU4sSUFBSSxHQUFHLEtBQWNBLElBQUk7WUFDakM7WUFDQSxPQUFPTTtRQUNUO1FBQ0EsTUFBTXZDLFNBQVEsRUFBRUEsT0FBTyxFQUFFdUMsS0FBSyxFQUFFO1lBQzdCdkMsUUFBZ0J3QyxHQUFHLEdBQUdELE1BQU1DLEdBQUc7WUFDL0J4QyxRQUFnQmlDLElBQUksR0FBR00sTUFBTU4sSUFBSTtZQUNsQyxPQUFPakM7UUFDVDtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW1uaXgvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiBcImp3dFwiIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXV0aC9sb2dpblwiLFxyXG4gICAgZXJyb3I6IFwiL2F1dGgvbG9naW5cIixcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgICByb2xlUmVxdWlyZW1lbnQ6IHsgbGFiZWw6IFwiUm9sZVwiLCB0eXBlOiBcInRleHRcIiB9LCAvLyBcIlVTRVJcIiBvciBcIkFETUlOXCJcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSAoY3JlZGVudGlhbHM/LmVtYWlsIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKGNyZWRlbnRpYWxzPy5wYXNzd29yZCB8fCBcIlwiKS50cmltKCk7XHJcbiAgICAgICAgY29uc3Qgcm9sZVJlcXVpcmVtZW50ID0gY3JlZGVudGlhbHM/LnJvbGVSZXF1aXJlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBERUJVRyBBVVRIIC0tLVwiLCB7IGluY29taW5nRW1haWw6IGVtYWlsLCBwd0xlbmd0aDogcGFzc3dvcmQubGVuZ3RoLCByb2xlUmVxOiByb2xlUmVxdWlyZW1lbnQgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyKSB7IGNvbnNvbGUubG9nKFwiLS0tIERFQlVHIEFVVEggLS0tIEZBSUxFRDogVVNFUiBOT1QgRk9VTkQgaW4gREJcIik7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgaWYgKCF1c2VyLnZlcmlmaWVkQXQpIHsgY29uc29sZS5sb2coXCItLS0gREVCVUcgQVVUSCAtLS0gRkFJTEVEOiBVU0VSIE5PVCBWRVJJRklFRFwiKTsgcmV0dXJuIG51bGw7IH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgcGFzc3dvcmRcclxuICAgICAgICBjb25zdCBvayA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XHJcbiAgICAgICAgaWYgKCFvaykgeyBjb25zb2xlLmxvZyhcIi0tLSBERUJVRyBBVVRIIC0tLSBGQUlMRUQ6IFBBU1NXT1JEIE1JU01BVENIXCIpOyByZXR1cm4gbnVsbDsgfVxyXG5cclxuICAgICAgICAvLyBTRVBBUkFUSU9OIExPR0lDOiBJZiBhIHJvbGUgcmVxdWlyZW1lbnQgaXMgcGFzc2VkLCByZWplY3QgaWYgdGhlIHVzZXIgZG9lc24ndCBtYXRjaFxyXG4gICAgICAgIGlmIChyb2xlUmVxdWlyZW1lbnQgJiYgdXNlci5yb2xlICE9PSByb2xlUmVxdWlyZW1lbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIERFQlVHIEFVVEggLS0tIEZBSUxFRDogUk9MRSBNSVNNQVRDSFwiLCB7IHVzZXJSb2xlOiB1c2VyLnJvbGUsIHJlcXVpcmVkOiByb2xlUmVxdWlyZW1lbnQgfSk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIERFQlVHIEFVVEggLS0tIFNVQ0NFU1M6XCIsIHVzZXIuZW1haWwpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxyXG4gICAgICAgIH0gYXMgYW55O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi51aWQgPSAodXNlciBhcyBhbnkpLmlkO1xyXG4gICAgICAgIHRva2VuLnJvbGUgPSAodXNlciBhcyBhbnkpLnJvbGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIChzZXNzaW9uIGFzIGFueSkudWlkID0gdG9rZW4udWlkO1xyXG4gICAgICAoc2Vzc2lvbiBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJyb2xlUmVxdWlyZW1lbnQiLCJhdXRob3JpemUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiaW5jb21pbmdFbWFpbCIsInB3TGVuZ3RoIiwibGVuZ3RoIiwicm9sZVJlcSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJ2ZXJpZmllZEF0Iiwib2siLCJjb21wYXJlIiwicGFzc3dvcmRIYXNoIiwicm9sZSIsInVzZXJSb2xlIiwicmVxdWlyZWQiLCJpZCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.__prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) global.__prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU92QyxNQUFNQyxTQUNYQyxPQUFPQyxRQUFRLElBQ2YsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBS0MsS0FBc0MsR0FBRztRQUFDO1FBQVM7S0FBTyxHQUFHLENBQVM7QUFDN0UsR0FBRztBQUVMLElBQUlBLElBQXFDLEVBQUVILE9BQU9DLFFBQVEsR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHVtbml4Ly4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICB2YXIgX19wcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsLl9fcHJpc21hID8/XHJcbiAgbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgICBsb2c6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBbXCJlcnJvclwiLCBcIndhcm5cIl0gOiBbXCJlcnJvclwiXSxcclxuICB9KTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5fX3ByaXNtYSA9IHByaXNtYTtcclxuXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJfX3ByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ }),

/***/ "(rsc)/./lib/realtime.ts":
/*!*************************!*\
  !*** ./lib/realtime.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   realtimeHub: () => (/* binding */ realtimeHub)\n/* harmony export */ });\nclass Hub {\n    subscribe(channel, listener) {\n        if (!this.channels.has(channel)) this.channels.set(channel, new Set());\n        this.channels.get(channel).add(listener);\n        return ()=>this.channels.get(channel).delete(listener);\n    }\n    publish(channel, data) {\n        const listeners = this.channels.get(channel);\n        if (!listeners) return;\n        listeners.forEach((l)=>l(data));\n    }\n    constructor(){\n        this.channels = new Map();\n    }\n}\nconst realtimeHub = global.__realtimeHub ?? new Hub();\nif (true) global.__realtimeHub = realtimeHub;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcmVhbHRpbWUudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BO0lBR0pDLFVBQWFDLE9BQWUsRUFBRUMsUUFBcUIsRUFBRTtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQ0gsVUFBVSxJQUFJLENBQUNFLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDSixTQUFTLElBQUlLO1FBQ2hFLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxHQUFHLENBQUNOLFNBQVVPLEdBQUcsQ0FBQ047UUFDaEMsT0FBTyxJQUFNLElBQUksQ0FBQ0MsUUFBUSxDQUFDSSxHQUFHLENBQUNOLFNBQVVRLE1BQU0sQ0FBQ1A7SUFDbEQ7SUFFQVEsUUFBV1QsT0FBZSxFQUFFVSxJQUFPLEVBQUU7UUFDbkMsTUFBTUMsWUFBWSxJQUFJLENBQUNULFFBQVEsQ0FBQ0ksR0FBRyxDQUFDTjtRQUNwQyxJQUFJLENBQUNXLFdBQVc7UUFDaEJBLFVBQVVDLE9BQU8sQ0FBQyxDQUFDQyxJQUFNQSxFQUFFSDtJQUM3Qjs7YUFaUVIsV0FBVyxJQUFJWTs7QUFhekI7QUFPTyxNQUFNQyxjQUFjQyxPQUFPQyxhQUFhLElBQUksSUFBSW5CLE1BQU07QUFDN0QsSUFBSW9CLElBQXFDLEVBQUVGLE9BQU9DLGFBQWEsR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbHVtbml4Ly4vbGliL3JlYWx0aW1lLnRzPzEwNGEiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBMaXN0ZW5lcjxUPiA9IChkYXRhOiBUKSA9PiB2b2lkO1xyXG5cclxuY2xhc3MgSHViIHtcclxuICBwcml2YXRlIGNoYW5uZWxzID0gbmV3IE1hcDxzdHJpbmcsIFNldDxMaXN0ZW5lcjxhbnk+Pj4oKTtcclxuXHJcbiAgc3Vic2NyaWJlPFQ+KGNoYW5uZWw6IHN0cmluZywgbGlzdGVuZXI6IExpc3RlbmVyPFQ+KSB7XHJcbiAgICBpZiAoIXRoaXMuY2hhbm5lbHMuaGFzKGNoYW5uZWwpKSB0aGlzLmNoYW5uZWxzLnNldChjaGFubmVsLCBuZXcgU2V0KCkpO1xyXG4gICAgdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbCkhLmFkZChsaXN0ZW5lcik7XHJcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbCkhLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaXNoPFQ+KGNoYW5uZWw6IHN0cmluZywgZGF0YTogVCkge1xyXG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5jaGFubmVscy5nZXQoY2hhbm5lbCk7XHJcbiAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xyXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGwpID0+IGwoZGF0YSkpO1xyXG4gIH1cclxufVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICB2YXIgX19yZWFsdGltZUh1YjogSHViIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVhbHRpbWVIdWIgPSBnbG9iYWwuX19yZWFsdGltZUh1YiA/PyBuZXcgSHViKCk7XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5fX3JlYWx0aW1lSHViID0gcmVhbHRpbWVIdWI7XHJcblxyXG4iXSwibmFtZXMiOlsiSHViIiwic3Vic2NyaWJlIiwiY2hhbm5lbCIsImxpc3RlbmVyIiwiY2hhbm5lbHMiLCJoYXMiLCJzZXQiLCJTZXQiLCJnZXQiLCJhZGQiLCJkZWxldGUiLCJwdWJsaXNoIiwiZGF0YSIsImxpc3RlbmVycyIsImZvckVhY2giLCJsIiwiTWFwIiwicmVhbHRpbWVIdWIiLCJnbG9iYWwiLCJfX3JlYWx0aW1lSHViIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/realtime.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstream%2Fnotifications%2Froute&page=%2Fapi%2Fstream%2Fnotifications%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstream%2Fnotifications%2Froute.ts&appDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinayaka%5CAlumnix%5Cfrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();