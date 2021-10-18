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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGE2OTkwZTNmZDVlNGJmMDFjZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTs7OztBQVlBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixXQUFLLEVBQUU7QUFBRUMsUUFBQUEsVUFBVSxFQUFFO0FBQWQsT0FBaEM7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFZRSw4REFBQyxtREFBRDtBQUNFLG1CQUFTLE1BRFg7QUFFRSxvQkFBVSxFQUFFLENBRmQ7QUFHRSx1QkFBYSxFQUFFO0FBQUVDLFlBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUFBLEVBQUUsRUFBRSxDQUFiO0FBQWdCQyxZQUFBQSxFQUFFLEVBQUU7QUFBcEIsV0FIakI7QUFBQSxvQkFLR0osSUFBSSxDQUFDQSxJQUFMLENBQVVLLEdBQVYsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsZ0NBQ2IsOERBQUMsbURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQUEscUNBQ0UsOERBQUMsMERBQUQ7QUFBQSx3Q0FDRSw4REFBQyx5REFBRDtBQUFZLG9CQUFFLEVBQUU7QUFBRUMsb0JBQUFBLFFBQVEsRUFBRTtBQUFaLG1CQUFoQjtBQUFrQyw4QkFBWSxNQUE5QztBQUFBLDRCQUNHRCxJQUFJLENBQUNFO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFLDhEQUFDLHlEQUFEO0FBQVkseUJBQU8sRUFBQyxJQUFwQjtBQUF5QiwyQkFBUyxFQUFDLEtBQW5DO0FBQUEsNEJBQ0dGLElBQUksQ0FBQ0c7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBT0UsOERBQUMseURBQUQ7QUFBWSxvQkFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUU7QUFBTixtQkFBaEI7QUFBQSw0QkFBOEJKLElBQUksQ0FBQ0s7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVFFLDhEQUFDLHlEQUFEO0FBQVkseUJBQU8sRUFBQyxPQUFwQjtBQUFBLDZCQUNHTCxJQUFJLENBQUNNLE1BRFIsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEyQ0QsQ0E1Q0Q7OztBQThDQSwrREFBZWIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkQ29udGVudCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMtYXBpL3VzZXJzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuY29uc3QgaW5kZXggPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogXCJ3aGl0ZXNtb2tlXCIgfX0+XHJcbiAgICAgICAgPGgyPlVzZXJzPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIHtkYXRhLmRhdGEubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fT57dXNlci5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICApKX0gKi99XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgcm93U3BhY2luZz17MX1cclxuICAgICAgICAgICAgY29sdW1uU3BhY2luZz17eyB4czogMSwgc206IDIsIG1kOiAzIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLmRhdGEubWFwKCh1c2VyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNCB9fSBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDEuNSB9fT57dXNlci5lbWFpbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIkJveCIsIkNhcmRDb250ZW50IiwiQ29udGFpbmVyIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJSZWFjdCIsImluZGV4IiwiZGF0YSIsImJhY2tncm91bmQiLCJ4cyIsInNtIiwibWQiLCJtYXAiLCJ1c2VyIiwiZm9udFNpemUiLCJzdGF0dXMiLCJuYW1lIiwibWIiLCJlbWFpbCIsImdlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=