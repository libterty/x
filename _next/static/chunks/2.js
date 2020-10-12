(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./components/System/Taskbar/TaskbarEntry.tsx":
/*!****************************************************!*\
  !*** ./components/System/Taskbar/TaskbarEntry.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/Taskbar/TaskbarEntry.module.scss */ \"./styles/System/Taskbar/TaskbarEntry.module.scss\");\n/* harmony import */ var _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_System_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/System/Icon */ \"./components/System/Icon.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/Taskbar/TaskbarEntry.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar TaskbarEntry = function TaskbarEntry(_ref) {\n  _s();\n\n  var icon = _ref.icon,\n      id = _ref.id,\n      name = _ref.name,\n      onBlur = _ref.onBlur,\n      onClick = _ref.onClick;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_6__[\"SessionContext\"]),\n      foregroundId = _useContext.session.foregroundId;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_5__[\"ProcessContext\"]),\n      taskbarElement = _useContext2.taskbarElement;\n\n  var refCallback = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (element) {\n    return taskbarElement(id, element);\n  }, [id]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].li, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, _utils_motions__WEBPACK_IMPORTED_MODULE_7__[\"taskbarEntriesMotionSettings\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: \"\".concat(_styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taskbarEntry, \" \").concat(foregroundId === id && _styles_System_Taskbar_TaskbarEntry_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.foreground),\n    ref: refCallback,\n    role: \"button\",\n    onBlur: onBlur,\n    onClick: onClick,\n    tabIndex: 0,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"figure\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_components_System_Icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    src: icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }), __jsx(\"figcaption\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, name))));\n};\n\n_s(TaskbarEntry, \"AWQ9euJ7IQxOHoEnKXJKh2AdAxQ=\");\n\n_c = TaskbarEntry;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskbarEntry);\n\nvar _c;\n\n$RefreshReg$(_c, \"TaskbarEntry\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkudHN4PzRmZjYiXSwibmFtZXMiOlsiVGFza2JhckVudHJ5IiwiaWNvbiIsImlkIiwibmFtZSIsIm9uQmx1ciIsIm9uQ2xpY2siLCJ1c2VDb250ZXh0IiwiU2Vzc2lvbkNvbnRleHQiLCJmb3JlZ3JvdW5kSWQiLCJzZXNzaW9uIiwiUHJvY2Vzc0NvbnRleHQiLCJ0YXNrYmFyRWxlbWVudCIsInJlZkNhbGxiYWNrIiwidXNlQ2FsbGJhY2siLCJlbGVtZW50IiwidGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyIsInN0eWxlcyIsInRhc2tiYXJFbnRyeSIsImZvcmVncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUF5QyxHQUFHLFNBQTVDQSxZQUE0QyxPQU01QztBQUFBOztBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLEVBSUksUUFKSkEsRUFJSTtBQUFBLE1BSEpDLElBR0ksUUFISkEsSUFHSTtBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLE9BQ0ksUUFESkEsT0FDSTs7QUFBQSxvQkFHQUMsd0RBQVUsQ0FBQ0MsdUVBQUQsQ0FIVjtBQUFBLE1BRVNDLFlBRlQsZUFFRkMsT0FGRSxDQUVTRCxZQUZUOztBQUFBLHFCQUl1QkYsd0RBQVUsQ0FBQ0ksdUVBQUQsQ0FKakM7QUFBQSxNQUlJQyxjQUpKLGdCQUlJQSxjQUpKOztBQUtKLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxPQUFEO0FBQUEsV0FBYUgsY0FBYyxDQUFDVCxFQUFELEVBQUtZLE9BQUwsQ0FBM0I7QUFBQSxHQUFELEVBQTJDLENBQ3hFWixFQUR3RSxDQUEzQyxDQUEvQjtBQUlBLFNBQ0UsTUFBQyxvREFBRCxDQUFRLEVBQVIseUZBQWVhLDJFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUNFLGFBQVMsWUFBS0Msc0ZBQU0sQ0FBQ0MsWUFBWixjQUNQVCxZQUFZLEtBQUtOLEVBQWpCLElBQXVCYyxzRkFBTSxDQUFDRSxVQUR2QixDQURYO0FBSUUsT0FBRyxFQUFFTixXQUpQO0FBS0UsUUFBSSxFQUFDLFFBTFA7QUFNRSxVQUFNLEVBQUVSLE1BTlY7QUFPRSxXQUFPLEVBQUVDLE9BUFg7QUFRRSxZQUFRLEVBQUUsQ0FSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTSxPQUFHLEVBQUVKLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRSxJQUFiLENBRkYsQ0FWRixDQURGLENBREY7QUFtQkQsQ0FsQ0Q7O0dBQU1ILFk7O0tBQUFBLFk7QUFvQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vVGFza2Jhci9UYXNrYmFyRW50cnkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgdHlwZSB7IFRhc2tiYXJFbnRyeVByb3BzIH0gZnJvbSAnQC90eXBlcy9jb21wb25lbnRzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeSc7XG5cbmltcG9ydCBJY29uIGZyb20gJ0AvY29tcG9uZW50cy9TeXN0ZW0vSWNvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFByb2Nlc3NDb250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9Qcm9jZXNzTWFuYWdlcic7XG5pbXBvcnQgeyBTZXNzaW9uQ29udGV4dCB9IGZyb20gJ0AvY29udGV4dHMvU2Vzc2lvbk1hbmFnZXInO1xuaW1wb3J0IHsgdGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdXRpbHMvbW90aW9ucyc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGFza2JhckVudHJ5OiBSZWFjdC5GQzxUYXNrYmFyRW50cnlQcm9wcz4gPSAoe1xuICBpY29uLFxuICBpZCxcbiAgbmFtZSxcbiAgb25CbHVyLFxuICBvbkNsaWNrXG59KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzZXNzaW9uOiB7IGZvcmVncm91bmRJZCB9XG4gIH0gPSB1c2VDb250ZXh0KFNlc3Npb25Db250ZXh0KTtcbiAgY29uc3QgeyB0YXNrYmFyRWxlbWVudCB9ID0gdXNlQ29udGV4dChQcm9jZXNzQ29udGV4dCk7XG4gIGNvbnN0IHJlZkNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHRhc2tiYXJFbGVtZW50KGlkLCBlbGVtZW50KSwgW1xuICAgIGlkXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5saSB7Li4udGFza2JhckVudHJpZXNNb3Rpb25TZXR0aW5nc30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhc2tiYXJFbnRyeX0gJHtcbiAgICAgICAgICBmb3JlZ3JvdW5kSWQgPT09IGlkICYmIHN0eWxlcy5mb3JlZ3JvdW5kXG4gICAgICAgIH1gfVxuICAgICAgICByZWY9e3JlZkNhbGxiYWNrfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgPlxuICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgIDxJY29uIHNyYz17aWNvbn0gLz5cbiAgICAgICAgICA8ZmlnY2FwdGlvbj57bmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24ubGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrYmFyRW50cnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/System/Taskbar/TaskbarEntry.tsx\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles/System/Taskbar/TaskbarEntry.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".TaskbarEntry_taskbarEntry__GRm1o {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n  min-width: 0;\\n  height: 30px;\\n  margin: 0 4px;\\n  border-bottom: 2px solid #76b9ed;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o:hover {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(64, 64, 64, 0.5);\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure {\\n  font-size: 12px;\\n  display: flex;\\n  align-items: center;\\n  height: 28px;\\n  color: #f8f8ff;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure img {\\n  width: 16px;\\n  margin: 0 5px;\\n}\\n.TaskbarEntry_taskbarEntry__GRm1o figure figcaption {\\n  overflow: hidden;\\n  width: 125px;\\n  padding-right: 5px;\\n  letter-spacing: 0;\\n  text-overflow: ellipsis;\\n}\\n\\n.TaskbarEntry_foreground__3NELy {\\n  margin: 0;\\n  padding: 0 4px;\\n  background-color: rgba(89, 89, 89, 0.5);\\n}\\n.TaskbarEntry_foreground__3NELy:hover {\\n  background-color: rgba(115, 115, 115, 0.5);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/System/Taskbar/TaskbarEntry.module.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAIA;ECiBE,mBAAA;EACA,uBAAA;EDfA,YAAA;EACA,YAAA;EACA,aAAA;EAEA,gCAAA;AAJF;AAME;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AALJ;AAaE;EACE,eAAA;EAEA,aAAA;EACA,mBAAA;EAEA,YAAA;EAEA,cAAA;AAdJ;AAgBI;EACE,WAAA;EACA,aAAA;AAdN;AAiBI;EACE,gBAAA;EAEA,YAAA;EACA,kBAAA;EAEA,iBAAA;EACA,uBAAA;AAjBN;;AAsBA;EACE,SAAA;EACA,cAAA;EAEA,uCAAA;AApBF;AA2BE;EACE,0CAAA;AAzBJ\",\"sourcesContent\":[\"@import '@/styles/maps';\\n@import '@/styles/mixins';\\n@import '@/styles/variables';\\n\\n.taskbarEntry {\\n  @include textOverflowEllipsis;\\n\\n  min-width: 0;\\n  height: map-get($taskbar, height);\\n  margin: 0 4px;\\n\\n  border-bottom: $thickLine solid $highlightColor;\\n\\n  &:hover {\\n    margin: 0;\\n    padding: 0 4px;\\n\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n  }\\n\\n  figure {\\n    font-size: map-get($taskbarEntry, font-size);\\n\\n    display: flex;\\n    align-items: center;\\n\\n    height: map-get($taskbar, height) - $thickLine;\\n\\n    color: map-get($taskbarEntry, text-color);\\n\\n    img {\\n      width: map-get($taskbarEntry, icon-width);\\n      margin: 0 map-get($taskbarEntry, icon-margin);\\n    }\\n\\n    figcaption {\\n      overflow: hidden;\\n\\n      width: map-get($taskbarEntry, text-width);\\n      padding-right: 5px;\\n\\n      letter-spacing: 0;\\n      text-overflow: ellipsis;\\n    }\\n  }\\n}\\n\\n.foreground {\\n  margin: 0;\\n  padding: 0 4px;\\n\\n  background-color: hsla(\\n    0,\\n    0%,\\n    map-get($taskbar, foreground-lightness),\\n    map-get($taskbar, opacity)\\n  );\\n\\n  &:hover {\\n    background-color: hsla(\\n      0,\\n      0%,\\n      map-get($taskbar, hover-foreground-lightness),\\n      map-get($taskbar, opacity)\\n    );\\n  }\\n}\\n\",\"@import '@/styles/maps';\\n\\n@mixin bottomLeft {\\n  position: fixed;\\n  bottom: 0;\\n  left: 0;\\n}\\n\\n@mixin bottomRight {\\n  position: fixed;\\n  right: 0;\\n  bottom: 0;\\n}\\n\\n@mixin topLeft {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n}\\n\\n@mixin textOverflowEllipsis {\\n  white-space: nowrap;\\n  text-overflow: ellipsis;\\n}\\n\\n@mixin scrollbars($size, $border-radius, $foreground-color, $background-color) {\\n  &::-webkit-scrollbar {\\n    width: $size;\\n    height: $size;\\n  }\\n\\n  &::-webkit-scrollbar-track {\\n    border-left: 1px solid lighten($foreground-color, 10%);\\n  }\\n\\n  &::-webkit-scrollbar-thumb {\\n    border: 4px solid transparent;\\n    border-radius: $border-radius;\\n    background-color: $foreground-color;\\n    background-clip: padding-box;\\n\\n    &:hover {\\n      background-color: darken($foreground-color, 20%);\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"taskbarEntry\": \"TaskbarEntry_taskbarEntry__GRm1o\",\n\t\"foreground\": \"TaskbarEntry_foreground__3NELy\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcz8xODMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxzQ0FBc0Msd0JBQXdCLDRCQUE0QixpQkFBaUIsaUJBQWlCLGtCQUFrQixxQ0FBcUMsR0FBRywyQ0FBMkMsY0FBYyxtQkFBbUIsNENBQTRDLEdBQUcsNENBQTRDLG9CQUFvQixrQkFBa0Isd0JBQXdCLGlCQUFpQixtQkFBbUIsR0FBRyxnREFBZ0QsZ0JBQWdCLGtCQUFrQixHQUFHLHVEQUF1RCxxQkFBcUIsaUJBQWlCLHVCQUF1QixzQkFBc0IsNEJBQTRCLEdBQUcscUNBQXFDLGNBQWMsbUJBQW1CLDRDQUE0QyxHQUFHLHlDQUF5QywrQ0FBK0MsR0FBRyxPQUFPLDhJQUE4SSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLGtEQUFrRCw0QkFBNEIsK0JBQStCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHNDQUFzQyxrQkFBa0Isc0RBQXNELGVBQWUsZ0JBQWdCLHFCQUFxQix5SUFBeUksS0FBSyxjQUFjLG1EQUFtRCxzQkFBc0IsMEJBQTBCLHVEQUF1RCxrREFBa0QsYUFBYSxrREFBa0Qsc0RBQXNELE9BQU8sb0JBQW9CLHlCQUF5QixvREFBb0QsMkJBQTJCLDRCQUE0QixnQ0FBZ0MsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLGNBQWMsbUJBQW1CLGtJQUFrSSxlQUFlLGtKQUFrSixLQUFLLEdBQUcsNkJBQTZCLHVCQUF1QixvQkFBb0IsY0FBYyxZQUFZLEdBQUcsd0JBQXdCLG9CQUFvQixhQUFhLGNBQWMsR0FBRyxvQkFBb0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEdBQUcsb0ZBQW9GLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssa0NBQWtDLDZEQUE2RCxLQUFLLGtDQUFrQyxvQ0FBb0Msb0NBQW9DLDBDQUEwQyxtQ0FBbUMsaUJBQWlCLHlEQUF5RCxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDaG1IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtaW4td2lkdGg6IDA7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDAgNHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3NmI5ZWQ7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbzpob3ZlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDY0LCA2NCwgMC41KTtcXG59XFxuLlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfX0dSbTFvIGZpZ3VyZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGNvbG9yOiAjZjhmOGZmO1xcbn1cXG4uVGFza2JhckVudHJ5X3Rhc2tiYXJFbnRyeV9fR1JtMW8gZmlndXJlIGltZyB7XFxuICB3aWR0aDogMTZweDtcXG4gIG1hcmdpbjogMCA1cHg7XFxufVxcbi5UYXNrYmFyRW50cnlfdGFza2JhckVudHJ5X19HUm0xbyBmaWd1cmUgZmlnY2FwdGlvbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLlRhc2tiYXJFbnRyeV9mb3JlZ3JvdW5kX18zTkVMeSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODksIDg5LCA4OSwgMC41KTtcXG59XFxuLlRhc2tiYXJFbnRyeV9mb3JlZ3JvdW5kX18zTkVMeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTE1LCAxMTUsIDAuNSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VDaUJFLG1CQUFBO0VBQ0EsdUJBQUE7RURmQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxnQ0FBQTtBQUpGO0FBTUU7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUVBLHVDQUFBO0FBTEo7QUFhRTtFQUNFLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBRUEsY0FBQTtBQWRKO0FBZ0JJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFkTjtBQWlCSTtFQUNFLGdCQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSx1QkFBQTtBQWpCTjs7QUFzQkE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUVBLHVDQUFBO0FBcEJGO0FBMkJFO0VBQ0UsMENBQUE7QUF6QkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuQGltcG9ydCAnQC9zdHlsZXMvbWl4aW5zJztcXG5AaW1wb3J0ICdAL3N0eWxlcy92YXJpYWJsZXMnO1xcblxcbi50YXNrYmFyRW50cnkge1xcbiAgQGluY2x1ZGUgdGV4dE92ZXJmbG93RWxsaXBzaXM7XFxuXFxuICBtaW4td2lkdGg6IDA7XFxuICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCk7XFxuICBtYXJnaW46IDAgNHB4O1xcblxcbiAgYm9yZGVyLWJvdHRvbTogJHRoaWNrTGluZSBzb2xpZCAkaGlnaGxpZ2h0Q29sb3I7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYShcXG4gICAgICAwLFxcbiAgICAgIDAlLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIGhvdmVyLWxpZ2h0bmVzcyksXFxuICAgICAgbWFwLWdldCgkdGFza2Jhciwgb3BhY2l0eSlcXG4gICAgKTtcXG4gIH1cXG5cXG4gIGZpZ3VyZSB7XFxuICAgIGZvbnQtc2l6ZTogbWFwLWdldCgkdGFza2JhckVudHJ5LCBmb250LXNpemUpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IG1hcC1nZXQoJHRhc2tiYXIsIGhlaWdodCkgLSAkdGhpY2tMaW5lO1xcblxcbiAgICBjb2xvcjogbWFwLWdldCgkdGFza2JhckVudHJ5LCB0ZXh0LWNvbG9yKTtcXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLXdpZHRoKTtcXG4gICAgICBtYXJnaW46IDAgbWFwLWdldCgkdGFza2JhckVudHJ5LCBpY29uLW1hcmdpbik7XFxuICAgIH1cXG5cXG4gICAgZmlnY2FwdGlvbiB7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICB3aWR0aDogbWFwLWdldCgkdGFza2JhckVudHJ5LCB0ZXh0LXdpZHRoKTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmZvcmVncm91bmQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAwLFxcbiAgICAwJSxcXG4gICAgbWFwLWdldCgkdGFza2JhciwgZm9yZWdyb3VuZC1saWdodG5lc3MpLFxcbiAgICBtYXAtZ2V0KCR0YXNrYmFyLCBvcGFjaXR5KVxcbiAgKTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKFxcbiAgICAgIDAsXFxuICAgICAgMCUsXFxuICAgICAgbWFwLWdldCgkdGFza2JhciwgaG92ZXItZm9yZWdyb3VuZC1saWdodG5lc3MpLFxcbiAgICAgIG1hcC1nZXQoJHRhc2tiYXIsIG9wYWNpdHkpXFxuICAgICk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnQC9zdHlsZXMvbWFwcyc7XFxuXFxuQG1peGluIGJvdHRvbUxlZnQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuQG1peGluIGJvdHRvbVJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG5AbWl4aW4gdG9wTGVmdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG5AbWl4aW4gdGV4dE92ZXJmbG93RWxsaXBzaXMge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFycygkc2l6ZSwgJGJvcmRlci1yYWRpdXMsICRmb3JlZ3JvdW5kLWNvbG9yLCAkYmFja2dyb3VuZC1jb2xvcikge1xcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogJHNpemU7XFxuICAgIGhlaWdodDogJHNpemU7XFxuICB9XFxuXFxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRlbigkZm9yZWdyb3VuZC1jb2xvciwgMTAlKTtcXG4gIH1cXG5cXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1jb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRmb3JlZ3JvdW5kLWNvbG9yLCAyMCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRhc2tiYXJFbnRyeVwiOiBcIlRhc2tiYXJFbnRyeV90YXNrYmFyRW50cnlfX0dSbTFvXCIsXG5cdFwiZm9yZWdyb3VuZFwiOiBcIlRhc2tiYXJFbnRyeV9mb3JlZ3JvdW5kX18zTkVMeVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss\n");

/***/ }),

/***/ "./styles/System/Taskbar/TaskbarEntry.module.scss":
/*!********************************************************!*\
  !*** ./styles/System/Taskbar/TaskbarEntry.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement);};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./TaskbarEntry.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/System/Taskbar/TaskbarEntry.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1N5c3RlbS9UYXNrYmFyL1Rhc2tiYXJFbnRyeS5tb2R1bGUuc2Nzcz82NjdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsK2dCQUFvVDs7QUFFdFY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sK2dCQUFvVDtBQUMxVDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLCtnQkFBb1Q7O0FBRTlVOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiLi9zdHlsZXMvU3lzdGVtL1Rhc2tiYXIvVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGFza2JhckVudHJ5Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/System/Taskbar/TaskbarEntry.module.scss\n");

/***/ })

}]);