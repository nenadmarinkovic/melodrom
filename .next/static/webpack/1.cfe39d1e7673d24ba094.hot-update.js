webpackHotUpdate_N_E(1,{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/esm/index.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_marker_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/marker.svg */ \"./assets/marker.svg\");\n/* harmony import */ var _assets_marker_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_marker_svg__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/melodrom/components/Map.js\";\n\n\n\n\nvar icon = new leaflet__WEBPACK_IMPORTED_MODULE_3___default.a.Icon({\n  iconUrl: _assets_marker_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  iconRetinaUrl: _assets_marker_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  iconSize: [55, 95]\n});\n\nfunction Map() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"MapContainer\"], {\n      center: [44.186767, 21.106179],\n      zoom: 15,\n      attributionControl: true,\n      scrollWheelZoom: false,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"TileLayer\"], {\n        url: \"https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"], {\n        position: [48.167263, 16.308303],\n        icon: icon,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_leaflet__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], {\n          permanent: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MapText, {\n            children: \"Fahrradwerkstatt Flickschuh Hetzendorfer Stra\\xDFe 81, 1120 Wien\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAuanM/Njc0NSJdLCJuYW1lcyI6WyJpY29uIiwiTCIsIkljb24iLCJpY29uVXJsIiwibWFya2VySWNvbiIsImljb25SZXRpbmFVcmwiLCJpY29uU2l6ZSIsIk1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsSUFBSUMsOENBQUMsQ0FBQ0MsSUFBTixDQUFXO0FBQ3RCQyxTQUFPLEVBQUVDLHlEQURhO0FBRXRCQyxlQUFhLEVBQUVELHlEQUZPO0FBR3RCRSxVQUFRLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTDtBQUhZLENBQVgsQ0FBYjs7QUFNQSxTQUFTQyxHQUFULEdBQWU7QUFDYixzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFDRSxZQUFNLEVBQUUsQ0FBQyxTQUFELEVBQVksU0FBWixDQURWO0FBRUUsVUFBSSxFQUFFLEVBRlI7QUFHRSx3QkFBa0IsRUFBRSxJQUh0QjtBQUlFLHFCQUFlLEVBQUUsS0FKbkI7QUFBQSw4QkFNRSxxRUFBQyx1REFBRDtBQUFXLFdBQUcsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FLHFFQUFDLG9EQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWxCO0FBQTBDLFlBQUksRUFBRVAsSUFBaEQ7QUFBQSwrQkFDSSxxRUFBQyxxREFBRDtBQUFTLG1CQUFTLE1BQWxCO0FBQUEsaUNBQ0UscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztLQXBCUU8sRztBQXNCTUEsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcENvbnRhaW5lciwgTWFya2VyLCBUb29sdGlwLCBUaWxlTGF5ZXIgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IEwgZnJvbSBcImxlYWZsZXRcIjtcblxuaW1wb3J0IG1hcmtlckljb24gZnJvbSBcIi4uL2Fzc2V0cy9tYXJrZXIuc3ZnXCI7XG5cbmNvbnN0IGljb24gPSBuZXcgTC5JY29uKHtcbiAgaWNvblVybDogbWFya2VySWNvbixcbiAgaWNvblJldGluYVVybDogbWFya2VySWNvbixcbiAgaWNvblNpemU6IFs1NSwgOTVdLFxufSk7XG5cbmZ1bmN0aW9uIE1hcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE1hcENvbnRhaW5lclxuICAgICAgICBjZW50ZXI9e1s0NC4xODY3NjcsIDIxLjEwNjE3OV19XG4gICAgICAgIHpvb209ezE1fVxuICAgICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w9e3RydWV9XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbT17ZmFsc2V9XG4gICAgICA+XG4gICAgICAgIDxUaWxlTGF5ZXIgdXJsPVwiaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aC97en0ve3h9L3t5fXtyfS5wbmdcIiAvPlxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtbNDguMTY3MjYzLCAxNi4zMDgzMDNdfSBpY29uPXtpY29ufT5cbiAgICAgICAgICAgIDxUb29sdGlwIHBlcm1hbmVudD5cbiAgICAgICAgICAgICAgPE1hcFRleHQ+XG4gICAgICAgICAgICAgICAgRmFocnJhZHdlcmtzdGF0dCBGbGlja3NjaHVoIEhldHplbmRvcmZlciBTdHJhw59lIDgxLCAxMTIwIFdpZW5cbiAgICAgICAgICAgICAgPC9NYXBUZXh0PlxuICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDwvTWFya2VyPlxuICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

})