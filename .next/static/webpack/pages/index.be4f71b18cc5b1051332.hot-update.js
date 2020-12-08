webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ContactForm; });\n/* harmony import */ var _Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Form */ \"./styles/Form.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/Nenad/Web Development/melodrom/components/Form.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction ContactForm() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    submitted: false,\n    submitting: false,\n    info: {\n      error: false,\n      msg: null\n    }\n  }),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    Name: \"\",\n    Email: \"\",\n    Linkedin: \"\"\n  }),\n      inputs = _useState2[0],\n      setInputs = _useState2[1];\n\n  var handleServerResponse = function handleServerResponse(ok, msg) {\n    if (ok) {\n      setStatus({\n        submitted: true,\n        submitting: false,\n        info: {\n          error: false,\n          msg: msg\n        }\n      });\n      setInputs({\n        Name: \"\",\n        Email: \"\",\n        Linkedin: \"\"\n      });\n    } else {\n      setStatus({\n        info: {\n          error: true,\n          msg: msg\n        }\n      });\n    }\n  };\n\n  var handleOnChange = function handleOnChange(e) {\n    e.persist();\n    setInputs(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, Object(_Users_Nenad_Web_Development_melodrom_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.id, e.target.value));\n    });\n    setStatus({\n      submitted: false,\n      submitting: false,\n      info: {\n        error: false,\n        msg: null\n      }\n    });\n  };\n\n  var handleOnSubmit = function handleOnSubmit(e) {\n    e.preventDefault();\n    setStatus(function (prevStatus) {\n      return _objectSpread(_objectSpread({}, prevStatus), {}, {\n        submitting: true\n      });\n    });\n    axios__WEBPACK_IMPORTED_MODULE_3___default()({\n      method: \"POST\",\n      url: \"https://formspree.io/f/xpzoyzwj\",\n      data: inputs\n    }).then(function (response) {\n      handleServerResponse(true, \"Thank you, your message has been submitted.\");\n    })[\"catch\"](function (error) {\n      handleServerResponse(false, error.response.data.error);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-form\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormText\"], {\n        children: [\"\\u0421\\u043F\\u0440\\u0435\\u043C\\u043D\\u0438 \\u0441\\u0442\\u0435 \\u0434\\u0430 \\u0437\\u0430\\u043A\\u043E\\u0440\\u0430\\u0447\\u0438\\u0442\\u0435 \\u0443 \\u0447\\u0443\\u0434\\u0435\\u0441\\u0430\\u043D \\u0441\\u0432\\u0435\\u0442 \\u043C\\u0443\\u0437\\u0438\\u043A\\u0435?\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, this), \"\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u0438\\u0440\\u0430\\u0458\\u0442\\u0435 \\u041C\\u0435\\u043B\\u043E\\u0434\\u0440\\u043E\\u043C \\u043D\\u0430 \\u0431\\u0440\\u043E\\u0458 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430 060 1234567, \\u0438\\u043B\\u0438 \\u0443\\u0437 \\u043F\\u043E\\u043C\\u043E\\u045B \\u0444\\u043E\\u0440\\u043C\\u0435.\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-form\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"MainForm\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormContainer\"], {\n          onSubmit: handleOnSubmit,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FlexItem\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormLabel\"], {\n              htmlFor: \"name\",\n              children: \"Your Name and Surname:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormInput\"], {\n              id: \"Name\",\n              type: \"Name\",\n              name: \"_replyto\",\n              onChange: handleOnChange,\n              required: true,\n              value: inputs.Name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FlexItem\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormLabel\"], {\n              htmlFor: \"Email\",\n              children: \"Your Email:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"FormInput\"], {\n              id: \"Email\",\n              type: \"Email\",\n              name: \"_replyto\",\n              onChange: handleOnChange,\n              required: true,\n              value: inputs.Email\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n            type: \"submit\",\n            disabled: status.submitting,\n            children: !status.submitting ? !status.submitted ? \"Submit\" : \"Submitted\" : \"Submitting...\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this), status.info.error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Error\"], {\n          children: [\"Error: \", status.info.msg]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 33\n        }, this), !status.info.error && status.info.msg && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_4__[\"Message\"], {\n          children: status.info.msg\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(ContactForm, \"EiY3eqzE46p42aljdeSWyA/YcTg=\");\n\n_c = ContactForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzPzQ3MjkiXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZCIsInN1Ym1pdHRpbmciLCJpbmZvIiwiZXJyb3IiLCJtc2ciLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJOYW1lIiwiRW1haWwiLCJMaW5rZWRpbiIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZVNlcnZlclJlc3BvbnNlIiwib2siLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJwZXJzaXN0IiwicHJldiIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVPblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXR1cyIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBYWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDO0FBQ25DQyxhQUFTLEVBQUUsS0FEd0I7QUFFbkNDLGNBQVUsRUFBRSxLQUZ1QjtBQUduQ0MsUUFBSSxFQUFFO0FBQUVDLFdBQUssRUFBRSxLQUFUO0FBQWdCQyxTQUFHLEVBQUU7QUFBckI7QUFINkIsR0FBRCxDQURBO0FBQUEsTUFDN0JDLE1BRDZCO0FBQUEsTUFDckJDLFNBRHFCOztBQUFBLG1CQU9SUCxzREFBUSxDQUFDO0FBQ25DUSxRQUFJLEVBQUUsRUFENkI7QUFFbkNDLFNBQUssRUFBRSxFQUY0QjtBQUduQ0MsWUFBUSxFQUFFO0FBSHlCLEdBQUQsQ0FQQTtBQUFBLE1BTzdCQyxNQVA2QjtBQUFBLE1BT3JCQyxTQVBxQjs7QUFhcEMsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxFQUFELEVBQUtULEdBQUwsRUFBYTtBQUN4QyxRQUFJUyxFQUFKLEVBQVE7QUFDTlAsZUFBUyxDQUFD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IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgRmxleENvbnRhaW5lcixcbiAgTWFpbkZvcm0sXG4gIEZvcm1Db250YWluZXIsXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUlucHV0LFxuICBGbGV4SXRlbSxcbiAgQnV0dG9uLFxuICBFcnJvcixcbiAgTWVzc2FnZSxcbiAgRm9ybVRleHQsXG59IGZyb20gXCIuLi9zdHlsZXMvRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKHtcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfSxcbiAgfSk7XG5cbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICBOYW1lOiBcIlwiLFxuICAgIEVtYWlsOiBcIlwiLFxuICAgIExpbmtlZGluOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTZXJ2ZXJSZXNwb25zZSA9IChvaywgbXNnKSA9PiB7XG4gICAgaWYgKG9rKSB7XG4gICAgICBzZXRTdGF0dXMoe1xuICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBtc2cgfSxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRJbnB1dHMoe1xuICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICBFbWFpbDogXCJcIixcbiAgICAgICAgTGlua2VkaW46IFwiXCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdHVzKHtcbiAgICAgICAgaW5mbzogeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgZS5wZXJzaXN0KCk7XG5cbiAgICBzZXRJbnB1dHMoKHByZXYpID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSkpO1xuXG4gICAgc2V0U3RhdHVzKHtcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFN0YXR1cygocHJldlN0YXR1cykgPT4gKHsgLi4ucHJldlN0YXR1cywgc3VibWl0dGluZzogdHJ1ZSB9KSk7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hwem95endqXCIsXG4gICAgICBkYXRhOiBpbnB1dHMsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBoYW5kbGVTZXJ2ZXJSZXNwb25zZShcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIFwiVGhhbmsgeW91LCB5b3VyIG1lc3NhZ2UgaGFzIGJlZW4gc3VibWl0dGVkLlwiXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBoYW5kbGVTZXJ2ZXJSZXNwb25zZShmYWxzZSwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mb3JtXCI+XG4gICAgICAgIDxGb3JtVGV4dD5cbiAgICAgICAgICDQodC/0YDQtdC80L3QuCDRgdGC0LUg0LTQsCDQt9Cw0LrQvtGA0LDRh9C40YLQtSDRgyDRh9GD0LTQtdGB0LDQvSDRgdCy0LXRgiDQvNGD0LfQuNC60LU/XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAg0JrQvtC90YLQsNC60YLQuNGA0LDRmNGC0LVcbiAgICAgICAgICDQnNC10LvQvtC00YDQvtC8INC90LAg0LHRgNC+0Zgg0YLQtdC70LXRhNC+0L3QsCAwNjAgMTIzNDU2Nywg0LjQu9C4INGD0Lcg0L/QvtC80L7RmyDRhNC+0YDQvNC1LlxuICAgICAgICA8L0Zvcm1UZXh0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZvcm1cIj5cbiAgICAgICAgPE1haW5Gb3JtPlxuICAgICAgICAgIDxGb3JtQ29udGFpbmVyIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIE5hbWUgYW5kIFN1cm5hbWU6PC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgIDxGb3JtSW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiX3JlcGx5dG9cIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuTmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleEl0ZW0+XG4gICAgICAgICAgICA8RmxleEl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIkVtYWlsXCI+WW91ciBFbWFpbDo8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgPEZvcm1JbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIl9yZXBseXRvXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLkVtYWlsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GbGV4SXRlbT5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3N0YXR1cy5zdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgeyFzdGF0dXMuc3VibWl0dGluZ1xuICAgICAgICAgICAgICAgID8gIXN0YXR1cy5zdWJtaXR0ZWRcbiAgICAgICAgICAgICAgICAgID8gXCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgOiBcIlN1Ym1pdHRlZFwiXG4gICAgICAgICAgICAgICAgOiBcIlN1Ym1pdHRpbmcuLi5cIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybUNvbnRhaW5lcj5cbiAgICAgICAgICB7c3RhdHVzLmluZm8uZXJyb3IgJiYgPEVycm9yPkVycm9yOiB7c3RhdHVzLmluZm8ubXNnfTwvRXJyb3I+fVxuICAgICAgICAgIHshc3RhdHVzLmluZm8uZXJyb3IgJiYgc3RhdHVzLmluZm8ubXNnICYmIChcbiAgICAgICAgICAgIDxNZXNzYWdlPntzdGF0dXMuaW5mby5tc2d9PC9NZXNzYWdlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTWFpbkZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

})