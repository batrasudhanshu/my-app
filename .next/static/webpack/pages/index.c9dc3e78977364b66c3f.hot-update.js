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
/* harmony import */ var D_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\my-app\\pages\\index.js",
    _this = undefined;







var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    newUser = _useState[0],
    setNewUser = _useState[1];

var submitUser = /*#__PURE__*/function () {
  var _ref = (0,D_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data;
    return D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://gorest.co.in/public/v1/users", {
              method: "POST",
              body: JSON.stringify({
                newUser: newUser
              }),
              headers: {
                "Content-Type": "application/json "
              }
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            console.log("data", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function submitUser() {
    return _ref.apply(this, arguments);
  };
}();

var index = function index(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
      maxWidth: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
        style: {
          textAlign: "center"
        },
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("form", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
          type: "text",
          value: newUser,
          onChange: function onChange(e) {
            return setNewUser(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
          onCLick: submitUser,
          children: "Add User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          container: true,
          rowSpacing: 2,
          columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
          },
          children: data.data.map(function (user) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
              item: true,
              xs: 6,
              style: {
                background: "whitesmoke"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CardContent, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  sx: {
                    fontSize: 14
                  },
                  gutterBottom: true,
                  children: user.status
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  variant: "h5",
                  component: "div",
                  children: user.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  sx: {
                    mb: 1.5
                  },
                  children: user.email
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  variant: "body2",
                  children: [user.gender, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzlkYzNlNzg5NzczNjRiNjZjM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTs7OztBQWFBLGdCQUE4Qk0sK0NBQVEsQ0FBQyxFQUFELENBQXRDO0FBQUEsSUFBT0MsT0FBUDtBQUFBLElBQWdCQyxVQUFoQjs7QUFDQSxJQUFNQyxVQUFVO0FBQUEsaU9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDTUMsS0FBSyxDQUFDLHNDQUFELEVBQXlDO0FBQ25FQyxjQUFBQSxNQUFNLEVBQUUsTUFEMkQ7QUFFbkVDLGNBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRVAsZ0JBQUFBLE9BQU8sRUFBUEE7QUFBRixlQUFmLENBRjZEO0FBR25FUSxjQUFBQSxPQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQUgwRCxhQUF6QyxDQURYOztBQUFBO0FBQ1hDLFlBQUFBLFFBRFc7QUFBQTtBQUFBLG1CQVFFQSxRQUFRLENBQUNDLElBQVQsRUFSRjs7QUFBQTtBQVFYQyxZQUFBQSxJQVJXO0FBU2pCQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixJQUFwQjs7QUFUaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVlQsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQjs7QUFZQSxJQUFNWSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxRQUFjO0FBQUEsTUFBWEgsSUFBVyxTQUFYQSxJQUFXO0FBQzFCLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFFSSxVQUFBQSxTQUFTLEVBQUU7QUFBYixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxlQUFLLEVBQUVmLE9BRlQ7QUFHRSxrQkFBUSxFQUFFLGtCQUFDZ0IsQ0FBRDtBQUFBLG1CQUFPZixVQUFVLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWpCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBUSxpQkFBTyxFQUFFaEIsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFXRTtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsbUJBQVMsTUFEWDtBQUVFLG9CQUFVLEVBQUUsQ0FGZDtBQUdFLHVCQUFhLEVBQUU7QUFBRWlCLFlBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUFBLEVBQUUsRUFBRSxDQUFiO0FBQWdCQyxZQUFBQSxFQUFFLEVBQUU7QUFBcEIsV0FIakI7QUFBQSxvQkFLR1YsSUFBSSxDQUFDQSxJQUFMLENBQVVXLEdBQVYsQ0FBYyxVQUFDQyxJQUFEO0FBQUEsZ0NBQ2IsOERBQUMsbURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxDQUFmO0FBQWtCLG1CQUFLLEVBQUU7QUFBRUMsZ0JBQUFBLFVBQVUsRUFBRTtBQUFkLGVBQXpCO0FBQUEscUNBQ0UsOERBQUMsMERBQUQ7QUFBQSx3Q0FDRSw4REFBQyx5REFBRDtBQUFZLG9CQUFFLEVBQUU7QUFBRUMsb0JBQUFBLFFBQVEsRUFBRTtBQUFaLG1CQUFoQjtBQUFrQyw4QkFBWSxNQUE5QztBQUFBLDRCQUNHRixJQUFJLENBQUNHO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFLDhEQUFDLHlEQUFEO0FBQVkseUJBQU8sRUFBQyxJQUFwQjtBQUF5QiwyQkFBUyxFQUFDLEtBQW5DO0FBQUEsNEJBQ0dILElBQUksQ0FBQ0k7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBT0UsOERBQUMseURBQUQ7QUFBWSxvQkFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUU7QUFBTixtQkFBaEI7QUFBQSw0QkFBOEJMLElBQUksQ0FBQ007QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQVFFLDhEQUFDLHlEQUFEO0FBQVkseUJBQU8sRUFBQyxPQUFwQjtBQUFBLDZCQUNHTixJQUFJLENBQUNPLE1BRFIsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF5Q0QsQ0ExQ0Q7OztBQTRDQSwrREFBZWhCLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMtYXBpL3VzZXJzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFtuZXdVc2VyLCBzZXROZXdVc2VyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5jb25zdCBzdWJtaXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMvdjEvdXNlcnNcIiwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmV3VXNlciB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uIFwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxufTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+VXNlcnM8L2gyPlxyXG5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdVc2VyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DTGljaz17c3VibWl0VXNlcn0+QWRkIFVzZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICByb3dTcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAxLCBzbTogMiwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEuZGF0YS5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlc21va2VcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS41IH19Pnt1c2VyLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiQm94IiwiQ2FyZENvbnRlbnQiLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInN1Ym1pdFVzZXIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5kZXgiLCJ0ZXh0QWxpZ24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ4cyIsInNtIiwibWQiLCJtYXAiLCJ1c2VyIiwiYmFja2dyb3VuZCIsImZvbnRTaXplIiwic3RhdHVzIiwibmFtZSIsIm1iIiwiZW1haWwiLCJnZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9