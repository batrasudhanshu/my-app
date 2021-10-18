"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\my-app\\pages\\index.js",
    _this = undefined;






var index = function index(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {
      maxWidth: "md",
      style: {
        background: "whitesmoke"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        style: {
          textAlign: "center"
        },
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          container: true,
          rowSpacing: 1,
          columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
          },
          children: data.data.map(function (user) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
              item: true,
              xs: 6,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  sx: {
                    fontSize: 14
                  },
                  gutterBottom: true,
                  children: user.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  variant: "h5",
                  component: "div",
                  children: user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  sx: {
                    mb: 1.5
                  },
                  children: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  variant: "body2",
                  children: [user.gender, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWY1NWI5MzRjMTI1YmIwNjZkMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTs7OztBQVlBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBaEM7QUFBQSw4QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFFQyxVQUFBQSxTQUFTLEVBQUU7QUFBYixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLCtCQVlFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQVMsTUFEWDtBQUVFLG9CQUFVLEVBQUUsQ0FGZDtBQUdFLHVCQUFhLEVBQUU7QUFBRUMsWUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsWUFBQUEsRUFBRSxFQUFFLENBQWI7QUFBZ0JDLFlBQUFBLEVBQUUsRUFBRTtBQUFwQixXQUhqQjtBQUFBLG9CQUtHTCxJQUFJLENBQUNBLElBQUwsQ0FBVU0sR0FBVixDQUFjLFVBQUNDLElBQUQ7QUFBQSxnQ0FDYiw4REFBQyxtREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLENBQWY7QUFBQSxxQ0FDRSw4REFBQywwREFBRDtBQUFBLHdDQUNFLDhEQUFDLHlEQUFEO0FBQVksb0JBQUUsRUFBRTtBQUFFQyxvQkFBQUEsUUFBUSxFQUFFO0FBQVosbUJBQWhCO0FBQWtDLDhCQUFZLE1BQTlDO0FBQUEsNEJBQ0dELElBQUksQ0FBQ0U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLElBQXBCO0FBQXlCLDJCQUFTLEVBQUMsS0FBbkM7QUFBQSw0QkFDR0YsSUFBSSxDQUFDRztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFPRSw4REFBQyx5REFBRDtBQUFZLG9CQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRTtBQUFOLG1CQUFoQjtBQUFBLDRCQUE4QkosSUFBSSxDQUFDSztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGLGVBUUUsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLE9BQXBCO0FBQUEsNkJBQ0dMLElBQUksQ0FBQ00sTUFEUixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFkO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTJDRCxDQTVDRDs7O0FBOENBLCtEQUFlZCxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy1hcGkvdXNlcnNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5jb25zdCBpbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlc21va2VcIiB9fT5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlVzZXJzPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIHtkYXRhLmRhdGEubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fT57dXNlci5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgcm93U3BhY2luZz17MX1cclxuICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLmRhdGEubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fT57dXNlci5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIkNhcmRDb250ZW50IiwiQ29udGFpbmVyIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsImluZGV4IiwiZGF0YSIsImJhY2tncm91bmQiLCJ0ZXh0QWxpZ24iLCJ4cyIsInNtIiwibWQiLCJtYXAiLCJ1c2VyIiwiZm9udFNpemUiLCJzdGF0dXMiLCJuYW1lIiwibWIiLCJlbWFpbCIsImdlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=