webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var _Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Form */ \"./styles/Form.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/melodrom/components/Form.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    submitted: false,\n    submitting: false,\n    info: {\n      error: false,\n      msg: null\n    }\n  }),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    Name: \"\",\n    Email: \"\",\n    Linkedin: \"\"\n  }),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var handleServerResponse = function handleServerResponse(ok, msg) {\n    if (ok) {\n      setStatus({\n        submitted: true,\n        submitting: false,\n        info: {\n          error: false,\n          msg: msg\n        }\n      });\n      setInputs({\n        Name: \"\",\n        Email: \"\",\n        Linkedin: \"\"\n      });\n    } else {\n      setStatus({\n        info: {\n          error: true,\n          msg: msg\n        }\n      });\n    }\n  };\n\n  var handleOnChange = function handleOnChange(e) {\n    e.persist();\n    setInputs(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, Object(_Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.id, e.target.value));\n    });\n    setStatus({\n      submitted: false,\n      submitting: false,\n      info: {\n        error: false,\n        msg: null\n      }\n    });\n  };\n\n  var handleOnSubmit = function handleOnSubmit(e) {\n    e.preventDefault();\n    setStatus(function (prevStatus) {\n      return _objectSpread(_objectSpread({}, prevStatus), {}, {\n        submitting: true\n      });\n    });\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"POST\",\n      url: \"https://formspree.io/f/xpzoyzwj\",\n      data: inputs\n    }).then(function (response) {\n      handleServerResponse(true, \"Thank you, your message has been submitted.\");\n    })[\"catch\"](function (error) {\n      handleServerResponse(false, error.response.data.error);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-form\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormText\"], {\n        children: [\"\\u0421\\u043F\\u0440\\u0435\\u043C\\u043D\\u0438 \\u0441\\u0442\\u0435 \\u0434\\u0430 \\u0437\\u0430\\u043A\\u043E\\u0440\\u0430\\u0447\\u0438\\u0442\\u0435 \\u0443 \\u0447\\u0443\\u0434\\u0435\\u0441\\u0430\\u043D \\u0441\\u0432\\u0435\\u0442 \\u043C\\u0443\\u0437\\u0438\\u043A\\u0435?\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this), \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u0438\\u0440\\u0430\\u0458\\u0442\\u0435 \\u041C\\u0435\\u043B\\u043E\\u0434\\u0440\\u043E\\u043C \\u043D\\u0430 \\u0431\\u0440\\u043E\\u0458 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430 060 1234567, \\u0438\\u043B\\u0438 \\u0443\\u0437 \\u043F\\u043E\\u043C\\u043E\\u045B \\u0444\\u043E\\u0440\\u043C\\u0435.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-form\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"MainForm\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormContainer\"], {\n          onSubmit: handleOnSubmit,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FlexItem\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormLabel\"], {\n              htmlFor: \"name\",\n              children: \"Your Name and Surname:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormInput\"], {\n              id: \"Name\",\n              type: \"Name\",\n              name: \"_replyto\",\n              onChange: handleOnChange,\n              required: true,\n              value: inputs.Name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FlexItem\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormLabel\"], {\n              htmlFor: \"Email\",\n              children: \"Your Email:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormInput\"], {\n              id: \"Email\",\n              type: \"Email\",\n              name: \"_replyto\",\n              onChange: handleOnChange,\n              required: true,\n              value: inputs.Email\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n            type: \"submit\",\n            disabled: status.submitting,\n            children: !status.submitting ? !status.submitted ? \"Submit\" : \"Submitted\" : \"Submitting...\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, this), status.info.error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Error\"], {\n          children: [\"Error: \", status.info.msg]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 33\n        }, this), !status.info.error && status.info.msg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Message\"], {\n          children: status.info.msg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ContactForm, \"EiY3eqzE46p42aljdeSWyA/YcTg=\");\n\n_c = ContactForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZCIsInN1Ym1pdHRpbmciLCJpbmZvIiwiZXJyb3IiLCJtc2ciLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJOYW1lIiwiRW1haWwiLCJMaW5rZWRpbiIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZVNlcnZlclJlc3BvbnNlIiwib2siLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJwZXJzaXN0IiwicHJldiIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVPblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXR1cyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBYWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDO0FBQ25DQyxhQUFTLEVBQUUsS0FEd0I7QUFFbkNDLGNBQVUsRUFBRSxLQUZ1QjtBQUduQ0MsUUFBSSxFQUFFO0FBQUVDLFdBQUssRUFBRSxLQUFUO0FBQWdCQyxTQUFHLEVBQUU7QUFBckI7QUFINkIsR0FBRCxDQURBO0FBQUEsTUFDN0JDLE1BRDZCO0FBQUEsTUFDckJDLFNBRHFCOztBQUFBLG1CQU9SUCxzREFBUSxDQUFDO0FBQ25DUSxRQUFJLEVBQUUsRUFENkI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsWUFBUSxFQUFFO0FBSHlCLEdBQUQsQ0FQQTtBQUFBLE1BTzdCQyxNQVA2QjtBQUFBLE1BT3JCQyxTQVBxQjs7QUFhcEMsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxFQUFELEVBQUtULEdBQUwsRUFBYTtBQUN4QyxRQUFJUyxFQUFKLEVBQVE7QUFDTlAsZUFBUyxDQUFD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O0FBQUEsb0JBREYsZUFFRSxxRUFBQyxzREFBRDtBQUNFLGdCQUFFLEVBQUMsT0FETDtBQUVFLGtCQUFJLEVBQUMsT0FGUDtBQUdFLGtCQUFJLEVBQUMsVUFIUDtBQUlFLHNCQUFRLEVBQUVPLGNBSlo7QUFLRSxzQkFBUSxNQUxWO0FBTUUsbUJBQUssRUFBRUosTUFBTSxDQUFDRjtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRixlQXdCRSxxRUFBQyxtREFBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixvQkFBUSxFQUFFSCxNQUFNLENBQUNKLFVBQXZDO0FBQUEsc0JBQ0csQ0FBQ0ksTUFBTSxDQUFDSixVQUFSLEdBQ0csQ0FBQ0ksTUFBTSxDQUFDTCxTQUFSLEdBQ0UsUUFERixHQUVFLFdBSEwsR0FJRztBQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQWlDR0ssTUFBTSxDQUFDSCxJQUFQLENBQVlDLEtBQVosaUJBQXFCLHFFQUFDLGtEQUFEO0FBQUEsZ0NBQWVFLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZRSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakN4QixFQWtDRyxDQUFDQyxNQUFNLENBQUNILElBQVAsQ0FBWUMsS0FBYixJQUFzQkUsTUFBTSxDQUFDSCxJQUFQLENBQVlFLEdBQWxDLGlCQUNDLHFFQUFDLG9EQUFEO0FBQUEsb0JBQVVDLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZRTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQSxrQkFERjtBQXFERDs7R0F4SHVCTixXOztLQUFBQSxXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBGbGV4Q29udGFpbmVyLFxuICBNYWluRm9ybSxcbiAgRm9ybUNvbnRhaW5lcixcbiAgRm9ybUxhYmVsLFxuICBGb3JtSW5wdXQsXG4gIEZsZXhJdGVtLFxuICBCdXR0b24sXG4gIEVycm9yLFxuICBNZXNzYWdlLFxuICBGb3JtVGV4dCxcbn0gZnJvbSBcIi4uL3N0eWxlcy9Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xuICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9LFxuICB9KTtcblxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgIE5hbWU6IFwiXCIsXG4gICAgRW1haWw6IFwiXCIsXG4gICAgTGlua2VkaW46IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVNlcnZlclJlc3BvbnNlID0gKG9rLCBtc2cpID0+IHtcbiAgICBpZiAob2spIHtcbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIHN1Ym1pdHRlZDogdHJ1ZSxcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG1zZyB9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldElucHV0cyh7XG4gICAgICAgIE5hbWU6IFwiXCIsXG4gICAgICAgIEVtYWlsOiBcIlwiLFxuICAgICAgICBMaW5rZWRpbjogXCJcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBlLnBlcnNpc3QoKTtcblxuICAgIHNldElucHV0cygocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG5cbiAgICBzZXRTdGF0dXMoe1xuICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U3RhdHVzKChwcmV2U3RhdHVzKSA9PiAoeyAuLi5wcmV2U3RhdHVzLCBzdWJtaXR0aW5nOiB0cnVlIH0pKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZm9ybXNwcmVlLmlvL2YveHB6b3l6d2pcIixcbiAgICAgIGRhdGE6IGlucHV0cyxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGhhbmRsZVNlcnZlclJlc3BvbnNlKFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgXCJUaGFuayB5b3UsIHlvdXIgbWVzc2FnZSBoYXMgYmVlbiBzdWJtaXR0ZWQuXCJcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGhhbmRsZVNlcnZlclJlc3BvbnNlKGZhbHNlLCBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZvcm1cIj5cbiAgICAgICAgPEZvcm1UZXh0PlxuICAgICAgICAgINCh0L/RgNC10LzQvdC4INGB0YLQtSDQtNCwINC30LDQutC+0YDQsNGH0LjRgtC1INGDINGH0YPQtNC10YHQsNC9INGB0LLQtdGCINC80YPQt9C40LrQtT9cbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICDQmtC+0L3RgtCw0LrRgtC40YDQsNGY0YLQtVxuICAgICAgICAgINCc0LXQu9C+0LTRgNC+0Lwg0L3QsCDQsdGA0L7RmCDRgtC10LvQtdGE0L7QvdCwIDA2MCAxMjM0NTY3LCDQuNC70Lgg0YPQtyDQv9C+0LzQvtGbINGE0L7RgNC80LUuXG4gICAgICAgIDwvRm9ybVRleHQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZm9ybVwiPlxuICAgICAgICA8TWFpbkZvcm0+XG4gICAgICAgICAgPEZvcm1Db250YWluZXIgb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgTmFtZSBhbmQgU3VybmFtZTo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJfcmVwbHl0b1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5OYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4SXRlbT5cbiAgICAgICAgICAgIDxGbGV4SXRlbT5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiRW1haWxcIj5Zb3VyIEVtYWlsOjwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiX3JlcGx5dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuRW1haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZsZXhJdGVtPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c3RhdHVzLnN1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICB7IXN0YXR1cy5zdWJtaXR0aW5nXG4gICAgICAgICAgICAgICAgPyAhc3RhdHVzLnN1Ym1pdHRlZFxuICAgICAgICAgICAgICAgICAgPyBcIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA6IFwiU3VibWl0dGVkXCJcbiAgICAgICAgICAgICAgICA6IFwiU3VibWl0dGluZy4uLlwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxuICAgICAgICAgIHtzdGF0dXMuaW5mby5lcnJvciAmJiA8RXJyb3I+RXJyb3I6IHtzdGF0dXMuaW5mby5tc2d9PC9FcnJvcj59XG4gICAgICAgICAgeyFzdGF0dXMuaW5mby5lcnJvciAmJiBzdGF0dXMuaW5mby5tc2cgJiYgKFxuICAgICAgICAgICAgPE1lc3NhZ2U+e3N0YXR1cy5pbmZvLm1zZ308L01lc3NhZ2U+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9NYWluRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

})