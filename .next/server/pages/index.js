"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\my-app\\pages\\index.js";




const getStaticProps = async () => {
  const res = await fetch("https://gorest.co.in/public-api/users");
  const data = await res.json();
  return {
    props: {
      data
    }
  };
};

const index = ({
  data
}) => {
  const {
    0: newUser,
    1: setNewUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const submitUser = async () => {
    const response = await fetch("https://gorest.co.in/public/v1/users", {
      method: "POST",
      body: JSON.stringify({
        newUser
      }),
      headers: {
        "Content-Type": "application/json "
      }
    });
    const data = await response.json();
    console.log("data", data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Container, {
      maxWidth: "md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        style: {
          textAlign: "center"
        },
        children: "Users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          value: newUser,
          onChange: e => setNewUser(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
          onCLick: submitUser,
          children: "Add User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
          container: true,
          rowSpacing: 2,
          columnSpacing: {
            xs: 1,
            sm: 2,
            md: 3
          },
          children: data.data.map(user => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
            item: true,
            xs: 6,
            style: {
              background: "whitesmoke"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CardContent, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                sx: {
                  fontSize: 14
                },
                gutterBottom: true,
                children: user.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: "h5",
                component: "div",
                children: user.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                sx: {
                  mb: 1.5
                },
                children: user.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, {
                variant: "body2",
                children: [user.gender, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUMsa0JBQUFBLEVBQUUsRUFBRTtBQUFOLGlCQUFoQjtBQUFBLDBCQUE4QkwsSUFBSSxDQUFDTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGLGVBUUUsOERBQUMseURBQUQ7QUFBWSx1QkFBTyxFQUFDLE9BQXBCO0FBQUEsMkJBQ0dOLElBQUksQ0FBQ08sTUFEUixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXlDRCxDQXZERDs7QUF5REEsaUVBQWUzQixLQUFmOzs7Ozs7Ozs7O0FDN0VBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL215LWFwcC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vbXktYXBwL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1hcHAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDYXJkQ29udGVudCxcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy1hcGkvdXNlcnNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgaW5kZXggPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbbmV3VXNlciwgc2V0TmV3VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzdWJtaXRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZ29yZXN0LmNvLmluL3B1YmxpYy92MS91c2Vyc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmV3VXNlciB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbiBcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5Vc2VyczwvaDI+XHJcblxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e25ld1VzZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3VXNlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNMaWNrPXtzdWJtaXRVc2VyfT5BZGQgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIHJvd1NwYWNpbmc9ezJ9XHJcbiAgICAgICAgICAgIGNvbHVtblNwYWNpbmc9e3sgeHM6IDEsIHNtOiAyLCBtZDogMyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5kYXRhLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwid2hpdGVzbW9rZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMTQgfX0gZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAxLjUgfX0+e3VzZXIuZW1haWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiQm94IiwiQ2FyZENvbnRlbnQiLCJDb250YWluZXIiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsImluZGV4IiwibmV3VXNlciIsInNldE5ld1VzZXIiLCJzdWJtaXRVc2VyIiwicmVzcG9uc2UiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwidGV4dEFsaWduIiwiZSIsInRhcmdldCIsInZhbHVlIiwieHMiLCJzbSIsIm1kIiwibWFwIiwidXNlciIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsInN0YXR1cyIsIm5hbWUiLCJtYiIsImVtYWlsIiwiZ2VuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==