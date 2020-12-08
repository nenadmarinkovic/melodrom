webpackHotUpdate_N_E(1,{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/index.js\");\n/* harmony import */ var _styles_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Map */ \"./styles/Map.js\");\n/* harmony import */ var _styles_Map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Map__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_marker_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/marker.svg */ \"./assets/marker.svg\");\n/* harmony import */ var _assets_marker_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_marker_svg__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/melodrom/components/Map.js\";\n\n\n\n\n\nvar icon = new leaflet__WEBPACK_IMPORTED_MODULE_4___default.a.Icon({\n  iconUrl: _assets_marker_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  iconRetinaUrl: _assets_marker_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  iconSize: [55, 95]\n});\n\nfunction Map() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"MapContainer\"], {\n      center: [44.186767, 21.106179],\n      zoom: 15,\n      attributionControl: true,\n      scrollWheelZoom: false,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"TileLayer\"], {\n        url: \"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"], {\n        position: [48.167263, 16.308303],\n        icon: icon,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n          permanent: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Map__WEBPACK_IMPORTED_MODULE_6__[\"MapText\"], {\n            children: \"Fahrradwerkstatt Flickschuh Hetzendorfer Stra\\xDFe 81, 1120 Wien\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanM/Njc0NSJdLCJuYW1lcyI6WyJpY29uIiwiTCIsIkljb24iLCJpY29uVXJsIiwibWFya2VySWNvbiIsImljb25SZXRpbmFVcmwiLCJpY29uU2l6ZSIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLElBQUlDLDhDQUFDLENBQUNDLElBQU4sQ0FBVztBQUN0QkMsU0FBTyxFQUFFQyx5REFEYTtBQUV0QkMsZUFBYSxFQUFFRCx5REFGTztBQUd0QkUsVUFBUSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUw7QUFIWSxDQUFYLENBQWI7O0FBTUEsU0FBU0MsR0FBVCxHQUFlO0FBQ2Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQ0UsWUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FEVjtBQUVFLFVBQUksRUFBRSxFQUZSO0FBR0Usd0JBQWtCLEVBQUUsSUFIdEI7QUFJRSxxQkFBZSxFQUFFLEtBSm5CO0FBQUEsOEJBTUUscUVBQUMsdURBQUQ7QUFBVyxXQUFHLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRSxxRUFBQyxvREFBRDtBQUFRLGdCQUFRLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQUFsQjtBQUEwQyxZQUFJLEVBQUVQLElBQWhEO0FBQUEsK0JBQ0kscUVBQUMscURBQUQ7QUFBUyxtQkFBUyxNQUFsQjtBQUFBLGlDQUNFLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0tBcEJRTyxHO0FBc0JNQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwQ29udGFpbmVyLCBNYXJrZXIsIFRvb2x0aXAsIFRpbGVMYXllciB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XG5pbXBvcnQgeyBNYXBUZXh0IH0gZnJvbSBcIi4uL3N0eWxlcy9NYXBcIjtcbmltcG9ydCBMIGZyb20gXCJsZWFmbGV0XCI7XG5cbmltcG9ydCBtYXJrZXJJY29uIGZyb20gXCIuLi9hc3NldHMvbWFya2VyLnN2Z1wiO1xuXG5jb25zdCBpY29uID0gbmV3IEwuSWNvbih7XG4gIGljb25Vcmw6IG1hcmtlckljb24sXG4gIGljb25SZXRpbmFVcmw6IG1hcmtlckljb24sXG4gIGljb25TaXplOiBbNTUsIDk1XSxcbn0pO1xuXG5mdW5jdGlvbiBNYXAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgY2VudGVyPXtbNDQuMTg2NzY3LCAyMS4xMDYxNzldfVxuICAgICAgICB6b29tPXsxNX1cbiAgICAgICAgYXR0cmlidXRpb25Db250cm9sPXt0cnVlfVxuICAgICAgICBzY3JvbGxXaGVlbFpvb209e2ZhbHNlfVxuICAgICAgPlxuICAgICAgICA8VGlsZUxheWVyIHVybD1cImh0dHBzOi8vdGlsZXMuc3RhZGlhbWFwcy5jb20vdGlsZXMvYWxpZGFkZV9zbW9vdGgve3p9L3t4fS97eX17cn0ucG5nXCIgLz5cbiAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17WzQ4LjE2NzI2MywgMTYuMzA4MzAzXX0gaWNvbj17aWNvbn0+XG4gICAgICAgICAgICA8VG9vbHRpcCBwZXJtYW5lbnQ+XG4gICAgICAgICAgICAgIDxNYXBUZXh0PlxuICAgICAgICAgICAgICAgIEZhaHJyYWR3ZXJrc3RhdHQgRmxpY2tzY2h1aCBIZXR6ZW5kb3JmZXIgU3RyYcOfZSA4MSwgMTEyMCBXaWVuXG4gICAgICAgICAgICAgIDwvTWFwVGV4dD5cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICA8L01hcmtlcj5cbiAgICAgIDwvTWFwQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ }),

/***/ "./styles/Map.js":
/*!***********************!*\
  !*** ./styles/Map.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9NYXAuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Map.js\n");

/***/ })

})