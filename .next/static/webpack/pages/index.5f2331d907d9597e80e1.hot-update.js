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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        style: {
          textAlign: "center"
        },
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          container: true,
          rowSpacing: 2,
          columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
          },
          children: data.data.map(function (user) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
              item: true,
              xs: 6,
              style: {
                background: "whitesmoke"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.CardContent, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  sx: {
                    fontSize: 14
                  },
                  gutterBottom: true,
                  children: user.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  variant: "h5",
                  component: "div",
                  children: user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  sx: {
                    mb: 1.5
                  },
                  children: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                  variant: "body2",
                  children: [user.gender, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWYyMzMxZDkwN2Q5NTk3ZTgwZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTs7OztBQVlBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUIsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUFBLDhCQUNFO0FBQUksYUFBSyxFQUFFO0FBQUVDLFVBQUFBLFNBQVMsRUFBRTtBQUFiLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFDRSxtQkFBUyxNQURYO0FBRUUsb0JBQVUsRUFBRSxDQUZkO0FBR0UsdUJBQWEsRUFBRTtBQUFFQyxZQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxZQUFBQSxFQUFFLEVBQUUsQ0FBYjtBQUFnQkMsWUFBQUEsRUFBRSxFQUFFO0FBQXBCLFdBSGpCO0FBQUEsb0JBS0dKLElBQUksQ0FBQ0EsSUFBTCxDQUFVSyxHQUFWLENBQWMsVUFBQ0MsSUFBRDtBQUFBLGdDQUNiLDhEQUFDLG1EQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsQ0FBZjtBQUFrQixtQkFBSyxFQUFFO0FBQUVDLGdCQUFBQSxVQUFVLEVBQUU7QUFBZCxlQUF6QjtBQUFBLHFDQUNFLDhEQUFDLDBEQUFEO0FBQUEsd0NBQ0UsOERBQUMseURBQUQ7QUFBWSxvQkFBRSxFQUFFO0FBQUVDLG9CQUFBQSxRQUFRLEVBQUU7QUFBWixtQkFBaEI7QUFBa0MsOEJBQVksTUFBOUM7QUFBQSw0QkFDR0YsSUFBSSxDQUFDRztBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSw4REFBQyx5REFBRDtBQUFZLHlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsMkJBQVMsRUFBQyxLQUFuQztBQUFBLDRCQUNHSCxJQUFJLENBQUNJO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU9FLDhEQUFDLHlEQUFEO0FBQVksb0JBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFO0FBQU4sbUJBQWhCO0FBQUEsNEJBQThCTCxJQUFJLENBQUNNO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsZUFRRSw4REFBQyx5REFBRDtBQUFZLHlCQUFPLEVBQUMsT0FBcEI7QUFBQSw2QkFDR04sSUFBSSxDQUFDTyxNQURSLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWQ7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBa0NELENBbkNEOzs7QUFxQ0EsK0RBQWVkLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9nb3Jlc3QuY28uaW4vcHVibGljLWFwaS91c2Vyc1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbmNvbnN0IGluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+VXNlcnM8L2gyPlxyXG5cclxuICAgICAgICA8Zm9ybT48L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICByb3dTcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAxLCBzbTogMiwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEuZGF0YS5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlc21va2VcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS41IH19Pnt1c2VyLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiQm94IiwiQ2FyZENvbnRlbnQiLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwiaW5kZXgiLCJkYXRhIiwidGV4dEFsaWduIiwieHMiLCJzbSIsIm1kIiwibWFwIiwidXNlciIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsInN0YXR1cyIsIm5hbWUiLCJtYiIsImVtYWlsIiwiZ2VuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==