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
    _this = undefined,
    _s = $RefreshSig$();







var index = function index(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      newUser = _useState[0],
      setNewUser = _useState[1];

  var submitUser = /*#__PURE__*/function () {
    var _ref2 = (0,D_my_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_my_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
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
      return _ref2.apply(this, arguments);
    };
  }();

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

_s(index, "637zbRJbmvAtUsI6Aq06j0/CbTs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODVhZWViMGVkMDcwNzJmMWQzOGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7Ozs7QUFhQSxJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUMxQixrQkFBOEJGLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsTUFBTUMsVUFBVTtBQUFBLG9PQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ01DLEtBQUssQ0FBQyxzQ0FBRCxFQUF5QztBQUNuRUMsZ0JBQUFBLE1BQU0sRUFBRSxNQUQyRDtBQUVuRUMsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRVAsa0JBQUFBLE9BQU8sRUFBUEE7QUFBRixpQkFBZixDQUY2RDtBQUduRVEsZ0JBQUFBLE9BQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURUO0FBSDBELGVBQXpDLENBRFg7O0FBQUE7QUFDWEMsY0FBQUEsUUFEVztBQUFBO0FBQUEscUJBUUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQVJGOztBQUFBO0FBUVhYLGNBQUFBLElBUlc7QUFTakJZLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JiLElBQXBCOztBQVRpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWRyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQVlBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsd0RBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDRTtBQUFJLGFBQUssRUFBRTtBQUFFVyxVQUFBQSxTQUFTLEVBQUU7QUFBYixTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxlQUFLLEVBQUViLE9BRlQ7QUFHRSxrQkFBUSxFQUFFLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9iLFVBQVUsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFRLGlCQUFPLEVBQUVkLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBV0U7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUNFLG1CQUFTLE1BRFg7QUFFRSxvQkFBVSxFQUFFLENBRmQ7QUFHRSx1QkFBYSxFQUFFO0FBQUVlLFlBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLFlBQUFBLEVBQUUsRUFBRSxDQUFiO0FBQWdCQyxZQUFBQSxFQUFFLEVBQUU7QUFBcEIsV0FIakI7QUFBQSxvQkFLR3BCLElBQUksQ0FBQ0EsSUFBTCxDQUFVcUIsR0FBVixDQUFjLFVBQUNDLElBQUQ7QUFBQSxnQ0FDYiw4REFBQyxtREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLENBQWY7QUFBa0IsbUJBQUssRUFBRTtBQUFFQyxnQkFBQUEsVUFBVSxFQUFFO0FBQWQsZUFBekI7QUFBQSxxQ0FDRSw4REFBQywwREFBRDtBQUFBLHdDQUNFLDhEQUFDLHlEQUFEO0FBQVksb0JBQUUsRUFBRTtBQUFFQyxvQkFBQUEsUUFBUSxFQUFFO0FBQVosbUJBQWhCO0FBQWtDLDhCQUFZLE1BQTlDO0FBQUEsNEJBQ0dGLElBQUksQ0FBQ0c7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUUsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLElBQXBCO0FBQXlCLDJCQUFTLEVBQUMsS0FBbkM7QUFBQSw0QkFDR0gsSUFBSSxDQUFDSTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFPRSw4REFBQyx5REFBRDtBQUFZLG9CQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRTtBQUFOLG1CQUFoQjtBQUFBLDRCQUE4QkwsSUFBSSxDQUFDTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGLGVBUUUsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLE9BQXBCO0FBQUEsNkJBQ0dOLElBQUksQ0FBQ08sTUFEUixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFkO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXlDRCxDQXZERDs7R0FBTTlCOzs7QUF5RE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMtYXBpL3VzZXJzXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW25ld1VzZXIsIHNldE5ld1VzZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgc3VibWl0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2dvcmVzdC5jby5pbi9wdWJsaWMvdjEvdXNlcnNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5ld1VzZXIgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb24gXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+VXNlcnM8L2gyPlxyXG5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdVc2VyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1VzZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DTGljaz17c3VibWl0VXNlcn0+QWRkIFVzZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgICByb3dTcGFjaW5nPXsyfVxyXG4gICAgICAgICAgICBjb2x1bW5TcGFjaW5nPXt7IHhzOiAxLCBzbTogMiwgbWQ6IDMgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEuZGF0YS5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIndoaXRlc21va2VcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE0IH19IGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYjogMS41IH19Pnt1c2VyLmVtYWlsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiQm94IiwiQ2FyZENvbnRlbnQiLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbmRleCIsImRhdGEiLCJuZXdVc2VyIiwic2V0TmV3VXNlciIsInN1Ym1pdFVzZXIiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0QWxpZ24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ4cyIsInNtIiwibWQiLCJtYXAiLCJ1c2VyIiwiYmFja2dyb3VuZCIsImZvbnRTaXplIiwic3RhdHVzIiwibmFtZSIsIm1iIiwiZW1haWwiLCJnZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9