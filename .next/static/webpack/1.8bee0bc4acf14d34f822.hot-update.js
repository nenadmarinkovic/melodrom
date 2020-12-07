webpackHotUpdate_N_E(1,{

/***/ "./components/Piano.js":
/*!*****************************!*\
  !*** ./components/Piano.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_piano__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-piano */ \"./node_modules/react-piano/dist/react-piano.esm.js\");\n/* harmony import */ var _components_DimensionsProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DimensionsProvider */ \"./components/DimensionsProvider.js\");\n/* harmony import */ var _components_DimensionsProvider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_DimensionsProvider__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_SoundfontProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SoundfontProvider */ \"./components/SoundfontProvider.js\");\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/melodrom/components/Piano.js\";\n\n\n\n\nvar audioContext = new (window.AudioContext || window.webkitAudioContext)();\nvar soundfontHostname = \"https://d1pzp51pvbm36p.cloudfront.net\";\nvar noteRange = {\n  first: react_piano__WEBPACK_IMPORTED_MODULE_2__[\"MidiNumbers\"].fromNote(\"c3\"),\n  last: react_piano__WEBPACK_IMPORTED_MODULE_2__[\"MidiNumbers\"].fromNote(\"f4\")\n};\nvar keyboardShortcuts = react_piano__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardShortcuts\"].create({\n  firstNote: noteRange.first,\n  lastNote: noteRange.last,\n  keyboardConfig: react_piano__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardShortcuts\"].HOME_ROW\n});\n\nfunction BasicPiano() {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SoundfontProvider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    instrumentName: \"acoustic_grand_piano\",\n    audioContext: audioContext,\n    hostname: soundfontHostname,\n    render: function render(_ref) {\n      var isLoading = _ref.isLoading,\n          playNote = _ref.playNote,\n          stopNote = _ref.stopNote;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_piano__WEBPACK_IMPORTED_MODULE_2__[\"Piano\"], {\n        noteRange: noteRange,\n        width: 300,\n        playNote: playNote,\n        stopNote: stopNote,\n        disabled: isLoading,\n        keyboardShortcuts: keyboardShortcuts\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}\n\n_c = BasicPiano;\nfunction App() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BasicPiano, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, this);\n}\n_c2 = App;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BasicPiano\");\n$RefreshReg$(_c2, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QaWFuby5qcz84OTE4Il0sIm5hbWVzIjpbImF1ZGlvQ29udGV4dCIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsInNvdW5kZm9udEhvc3RuYW1lIiwibm90ZVJhbmdlIiwiZmlyc3QiLCJNaWRpTnVtYmVycyIsImZyb21Ob3RlIiwibGFzdCIsImtleWJvYXJkU2hvcnRjdXRzIiwiS2V5Ym9hcmRTaG9ydGN1dHMiLCJjcmVhdGUiLCJmaXJzdE5vdGUiLCJsYXN0Tm90ZSIsImtleWJvYXJkQ29uZmlnIiwiSE9NRV9ST1ciLCJCYXNpY1BpYW5vIiwiaXNMb2FkaW5nIiwicGxheU5vdGUiLCJzdG9wTm90ZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsS0FBS0MsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNFLGtCQUFuQyxHQUFyQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLHVDQUExQjtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsT0FBSyxFQUFFQyx1REFBVyxDQUFDQyxRQUFaLENBQXFCLElBQXJCLENBRFM7QUFFaEJDLE1BQUksRUFBRUYsdURBQVcsQ0FBQ0MsUUFBWixDQUFxQixJQUFyQjtBQUZVLENBQWxCO0FBSUEsSUFBTUUsaUJBQWlCLEdBQUdDLDZEQUFpQixDQUFDQyxNQUFsQixDQUF5QjtBQUNqREMsV0FBUyxFQUFFUixTQUFTLENBQUNDLEtBRDRCO0FBRWpEUSxVQUFRLEVBQUVULFNBQVMsQ0FBQ0ksSUFGNkI7QUFHakRNLGdCQUFjLEVBQUVKLDZEQUFpQixDQUFDSztBQUhlLENBQXpCLENBQTFCOztBQU1BLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFDcEIsc0JBQ0UscUVBQUMscUVBQUQ7QUFDRSxrQkFBYyxFQUFDLHNCQURqQjtBQUVFLGdCQUFZLEVBQUVqQixZQUZoQjtBQUdFLFlBQVEsRUFBRUksaUJBSFo7QUFJRSxVQUFNLEVBQUU7QUFBQSxVQUFHYyxTQUFILFFBQUdBLFNBQUg7QUFBQSxVQUFjQyxRQUFkLFFBQWNBLFFBQWQ7QUFBQSxVQUF3QkMsUUFBeEIsUUFBd0JBLFFBQXhCO0FBQUEsMEJBQ04scUVBQUMsaURBQUQ7QUFDRSxpQkFBUyxFQUFFZixTQURiO0FBRUUsYUFBSyxFQUFFLEdBRlQ7QUFHRSxnQkFBUSxFQUFFYyxRQUhaO0FBSUUsZ0JBQVEsRUFBRUMsUUFKWjtBQUtFLGdCQUFRLEVBQUVGLFNBTFo7QUFNRSx5QkFBaUIsRUFBRVI7QUFOckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURNO0FBQUE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0tBbEJRTyxVO0FBb0JNLFNBQVNJLEdBQVQsR0FBZTtBQUM1QixzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO01BTnVCQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QaWFuby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUGlhbm8sIEtleWJvYXJkU2hvcnRjdXRzLCBNaWRpTnVtYmVycyB9IGZyb20gXCJyZWFjdC1waWFub1wiO1xuaW1wb3J0IERpbWVuc2lvbnNQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9EaW1lbnNpb25zUHJvdmlkZXJcIjtcbmltcG9ydCBTb3VuZGZvbnRQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb3VuZGZvbnRQcm92aWRlclwiO1xuXG5jb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbmNvbnN0IHNvdW5kZm9udEhvc3RuYW1lID0gXCJodHRwczovL2QxcHpwNTFwdmJtMzZwLmNsb3VkZnJvbnQubmV0XCI7XG5cbmNvbnN0IG5vdGVSYW5nZSA9IHtcbiAgZmlyc3Q6IE1pZGlOdW1iZXJzLmZyb21Ob3RlKFwiYzNcIiksXG4gIGxhc3Q6IE1pZGlOdW1iZXJzLmZyb21Ob3RlKFwiZjRcIiksXG59O1xuY29uc3Qga2V5Ym9hcmRTaG9ydGN1dHMgPSBLZXlib2FyZFNob3J0Y3V0cy5jcmVhdGUoe1xuICBmaXJzdE5vdGU6IG5vdGVSYW5nZS5maXJzdCxcbiAgbGFzdE5vdGU6IG5vdGVSYW5nZS5sYXN0LFxuICBrZXlib2FyZENvbmZpZzogS2V5Ym9hcmRTaG9ydGN1dHMuSE9NRV9ST1csXG59KTtcblxuZnVuY3Rpb24gQmFzaWNQaWFubygpIHtcbiAgcmV0dXJuIChcbiAgICA8U291bmRmb250UHJvdmlkZXJcbiAgICAgIGluc3RydW1lbnROYW1lPVwiYWNvdXN0aWNfZ3JhbmRfcGlhbm9cIlxuICAgICAgYXVkaW9Db250ZXh0PXthdWRpb0NvbnRleHR9XG4gICAgICBob3N0bmFtZT17c291bmRmb250SG9zdG5hbWV9XG4gICAgICByZW5kZXI9eyh7IGlzTG9hZGluZywgcGxheU5vdGUsIHN0b3BOb3RlIH0pID0+IChcbiAgICAgICAgPFBpYW5vXG4gICAgICAgICAgbm90ZVJhbmdlPXtub3RlUmFuZ2V9XG4gICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICBwbGF5Tm90ZT17cGxheU5vdGV9XG4gICAgICAgICAgc3RvcE5vdGU9e3N0b3BOb3RlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAga2V5Ym9hcmRTaG9ydGN1dHM9e2tleWJvYXJkU2hvcnRjdXRzfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCYXNpY1BpYW5vIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Piano.js\n");

/***/ })

})