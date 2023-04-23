"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Sections/Testimonials.tsx":
/*!**************************************************!*\
  !*** ./src/components/Sections/Testimonials.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ \"./node_modules/lottie-web/build/player/lottie.js\");\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./src/config.ts\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.tsx\");\n/* harmony import */ var _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInterval */ \"./src/hooks/useInterval.ts\");\n/* harmony import */ var _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWindow */ \"./src/hooks/useWindow.ts\");\n/* harmony import */ var _Icon_QuoteIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Icon/QuoteIcon */ \"./src/components/Icon/QuoteIcon.tsx\");\n/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Layout/Section */ \"./src/components/Layout/Section.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Testimonials = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), scrollValue = ref1[0], setScrollValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), parallaxEnabled = ref2[0], setParallaxEnabled = ref2[1];\n    var itemWidth = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var scrollContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var width = (0,_hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().width;\n    var imageSrc = _data_data__WEBPACK_IMPORTED_MODULE_5__.testimonial.imageSrc, testimonials = _data_data__WEBPACK_IMPORTED_MODULE_5__.testimonial.testimonials;\n    var animationContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var anim = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (animationContainer.current) {\n            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n            anim.current = lottie_web__WEBPACK_IMPORTED_MODULE_2___default().loadAnimation({\n                container: animationContainer.current,\n                loop: true,\n                autoplay: true,\n                animationData: __webpack_require__(/*! ../../images/lottie/developer.json */ \"./src/images/lottie/developer.json\")\n            });\n        }\n    }, []);\n    var resolveSrc = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {\n        if (!imageSrc) return undefined;\n        return typeof imageSrc === \"string\" ? imageSrc : imageSrc.src;\n    }, [\n        imageSrc\n    ]);\n    // Mobile iOS doesn't allow background-fixed elements\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setParallaxEnabled(!(_config__WEBPACK_IMPORTED_MODULE_4__.isMobile && _config__WEBPACK_IMPORTED_MODULE_4__.isApple));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;\n    }, [\n        width\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (scrollContainer.current) {\n            var newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);\n            setActiveIndex(newIndex);\n        }\n    }, [\n        itemWidth,\n        scrollValue\n    ]);\n    var setTestimonial = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(index) {\n        return function() {\n            if (scrollContainer !== null && scrollContainer.current !== null) {\n                scrollContainer.current.scrollLeft = itemWidth.current * index;\n            }\n        };\n    }, []);\n    var next = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function() {\n        if (activeIndex + 1 === testimonials.length) {\n            setTestimonial(0)();\n        } else {\n            setTestimonial(activeIndex + 1)();\n        }\n    }, [\n        activeIndex,\n        setTestimonial,\n        testimonials.length\n    ]);\n    var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(event) {\n        setScrollValue(event.currentTarget.scrollLeft);\n    }, []);\n    (0,_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next, 10000);\n    // If no testimonials, don't render the section\n    if (!testimonials.length) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Section__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        noPadding: true,\n        sectionId: _data_data__WEBPACK_IMPORTED_MODULE_5__.SectionId.Testimonials,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8\", parallaxEnabled && \"bg-fixed\", {\n                \"bg-neutral-700\": !imageSrc\n            }),\n            style: imageSrc ? {\n                backgroundImage: \"url(\".concat(resolveSrc)\n            } : undefined,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full max-w-screen-md px-4 lg:px-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth\",\n                            onScroll: handleScroll,\n                            ref: scrollContainer,\n                            children: testimonials.map(function(testimonial, index) {\n                                var isActive = index === activeIndex;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {\n                                    isActive: isActive,\n                                    testimonial: testimonial\n                                }, \"\".concat(testimonial.name, \"-\").concat(index), false, {\n                                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-x-4\",\n                            children: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(Array(testimonials.length)).map(function(_, index) {\n                                var isActive = index === activeIndex;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4\", isActive ? \"scale-100 opacity-100\" : \"scale-75 opacity-60\"),\n                                    disabled: isActive,\n                                    onClick: setTestimonial(index)\n                                }, \"select-button-\".concat(index), false, {\n                                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, _this);\n}, \"L3nlXlkRE4r4+py/I5NpY/2k51c=\", false, function() {\n    return [\n        _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n})), \"L3nlXlkRE4r4+py/I5NpY/2k51c=\", false, function() {\n    return [\n        _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = Testimonials;\nvar Testimonial = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function(param) {\n    var _testimonial = param.testimonial, text = _testimonial.text, name = _testimonial.name, image = _testimonial.image, isActive = param.isActive;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6\", isActive ? \"opacity-100\" : \"opacity-0\"),\n        children: [\n            image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-14 w-14 shrink-0 sm:h-16 sm:w-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"h-full w-full rounded-full\",\n                    src: image\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_QuoteIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                className: \"h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                lineNumber: 144,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"prose prose-sm font-medium italic text-white sm:prose-base\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs italic text-white sm:text-sm md:text-base lg:text-lg\",\n                        children: [\n                            \"-- \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n        lineNumber: 133,\n        columnNumber: 5\n    }, _this);\n});\n_c2 = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Testimonials$memo\");\n$RefreshReg$(_c1, \"Testimonials\");\n$RefreshReg$(_c2, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9UZXN0aW1vbmlhbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFvQztBQUNKO0FBQ2tFO0FBRW5EO0FBQ1E7QUFFTDtBQUNKO0FBQ0o7QUFDRjtBQUV4QyxJQUFNZ0IsWUFBWSxpQkFBT2QsR0FBQUEsMkNBQUksU0FBQyxXQUFNOztJQUNsQyxJQUFzQ0ssR0FBbUIsR0FBbkJBLCtDQUFRLENBQVMsQ0FBQyxDQUFDLEVBQWxEVSxXQUFXLEdBQW9CVixHQUFtQixHQUF2QyxFQUFFVyxjQUFjLEdBQUlYLEdBQW1CLEdBQXZCO0lBQ2xDLElBQXNDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFDWSxXQUFXLEdBQW9CWixJQUFXLEdBQS9CLEVBQUVhLGNBQWMsR0FBSWIsSUFBVyxHQUFmO0lBQ2xDLElBQThDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXREYyxlQUFlLEdBQXdCZCxJQUFlLEdBQXZDLEVBQUVlLGtCQUFrQixHQUFJZixJQUFlLEdBQW5CO0lBRTFDLElBQU1nQixTQUFTLEdBQUdqQiw2Q0FBTSxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFNa0IsZUFBZSxHQUFHbEIsNkNBQU0sQ0FBaUIsSUFBSSxDQUFDO0lBRXBELElBQU0sS0FBTSxHQUFJTyw0REFBUyxFQUFFLENBQXBCWSxLQUFLO0lBRVosSUFBT0MsUUFBUSxHQUFrQmYsNERBQWxCLEVBQUVnQixZQUFZLEdBQUloQixnRUFBSjtJQUM3QixJQUFNaUIsa0JBQWtCLEdBQUd0Qiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFNdUIsSUFBSSxHQUFHdkIsNkNBQU0sQ0FBYSxJQUFJLENBQUM7SUFDckNGLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUl3QixrQkFBa0IsQ0FBQ0UsT0FBTyxFQUFFO1lBQzlCLG9FQUFvRTtZQUNwRUQsSUFBSSxDQUFDQyxPQUFPLEdBQUc3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OERBQThEOzs0QkFBQyxLQUFHOzRCQUFDUSxJQUFJOzs7Ozs7NkJBQUs7Ozs7OztxQkFDckY7Ozs7OzthQUNGO0NBQ1AsQ0FDRjtBQXJCS0QsTUFBQUEsV0FBVztBQXVCakIsK0RBQWU5QyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvVGVzdGltb25pYWxzLnRzeD8xNTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInO1xyXG5pbXBvcnQge0ZDLCBtZW1vLCBVSUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtpc0FwcGxlLCBpc01vYmlsZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHtTZWN0aW9uSWQsIHRlc3RpbW9uaWFsfSBmcm9tICcuLi8uLi9kYXRhL2RhdGEnO1xyXG5pbXBvcnQge1Rlc3RpbW9uaWFsfSBmcm9tICcuLi8uLi9kYXRhL2RhdGFEZWYnO1xyXG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi4vLi4vaG9va3MvdXNlSW50ZXJ2YWwnO1xyXG5pbXBvcnQgdXNlV2luZG93IGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpbmRvdyc7XHJcbmltcG9ydCBRdW90ZUljb24gZnJvbSAnLi4vSWNvbi9RdW90ZUljb24nO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9MYXlvdXQvU2VjdGlvbic7XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHM6IEZDID0gbWVtbygoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtzY3JvbGxWYWx1ZSwgc2V0U2Nyb2xsVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BhcmFsbGF4RW5hYmxlZCwgc2V0UGFyYWxsYXhFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXRlbVdpZHRoID0gdXNlUmVmKDApO1xyXG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3coKTtcclxuXHJcbiAgY29uc3Qge2ltYWdlU3JjLCB0ZXN0aW1vbmlhbHN9ID0gdGVzdGltb25pYWw7XHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGFuaW0gPSB1c2VSZWY8bnVsbCB8IGFueT4obnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhbmltYXRpb25Db250YWluZXIuY3VycmVudCkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICBhbmltLmN1cnJlbnQgPSBsb3R0aWUubG9hZEFuaW1hdGlvbih7XHJcbiAgICAgICAgY29udGFpbmVyOiBhbmltYXRpb25Db250YWluZXIuY3VycmVudCwgLy8gdGhlIGRvbSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBhbmltYXRpb25cclxuXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBhbmltYXRpb25EYXRhOiByZXF1aXJlKCcuLi8uLi9pbWFnZXMvbG90dGllL2RldmVsb3Blci5qc29uJyksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgcmVzb2x2ZVNyYyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFpbWFnZVNyYykgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB0eXBlb2YgaW1hZ2VTcmMgPT09ICdzdHJpbmcnID8gaW1hZ2VTcmMgOiBpbWFnZVNyYy5zcmM7XHJcbiAgfSwgW2ltYWdlU3JjXSk7XHJcblxyXG4gIC8vIE1vYmlsZSBpT1MgZG9lc24ndCBhbGxvdyBiYWNrZ3JvdW5kLWZpeGVkIGVsZW1lbnRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhcmFsbGF4RW5hYmxlZCghKGlzTW9iaWxlICYmIGlzQXBwbGUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtV2lkdGguY3VycmVudCA9IHNjcm9sbENvbnRhaW5lci5jdXJyZW50ID8gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGggOiAwO1xyXG4gIH0sIFt3aWR0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5yb3VuZChzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0IC8gaXRlbVdpZHRoLmN1cnJlbnQpO1xyXG4gICAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgfSwgW2l0ZW1XaWR0aCwgc2Nyb2xsVmFsdWVdKTtcclxuXHJcbiAgY29uc3Qgc2V0VGVzdGltb25pYWwgPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIgIT09IG51bGwgJiYgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gaXRlbVdpZHRoLmN1cnJlbnQgKiBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcbiAgY29uc3QgbmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChhY3RpdmVJbmRleCArIDEgPT09IHRlc3RpbW9uaWFscy5sZW5ndGgpIHtcclxuICAgICAgc2V0VGVzdGltb25pYWwoMCkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRlc3RpbW9uaWFsKGFjdGl2ZUluZGV4ICsgMSkoKTtcclxuICAgIH1cclxuICB9LCBbYWN0aXZlSW5kZXgsIHNldFRlc3RpbW9uaWFsLCB0ZXN0aW1vbmlhbHMubGVuZ3RoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrPFVJRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50Pj4oZXZlbnQgPT4ge1xyXG4gICAgc2V0U2Nyb2xsVmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUludGVydmFsKG5leHQsIDEwMDAwKTtcclxuXHJcbiAgLy8gSWYgbm8gdGVzdGltb25pYWxzLCBkb24ndCByZW5kZXIgdGhlIHNlY3Rpb25cclxuICBpZiAoIXRlc3RpbW9uaWFscy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIG5vUGFkZGluZyBzZWN0aW9uSWQ9e1NlY3Rpb25JZC5UZXN0aW1vbmlhbHN9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgJ2ZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1jb3ZlciBiZy1jZW50ZXIgcHgtNCBweS0xNiBtZDpweS0yNCBsZzpweC04JyxcclxuICAgICAgICAgIHBhcmFsbGF4RW5hYmxlZCAmJiAnYmctZml4ZWQnLFxyXG4gICAgICAgICAgeydiZy1uZXV0cmFsLTcwMCc6ICFpbWFnZVNyY30sXHJcbiAgICAgICAgKX1cclxuICAgICAgICBzdHlsZT17aW1hZ2VTcmMgPyB7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cmVzb2x2ZVNyY31gfSA6IHVuZGVmaW5lZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBtYXgtdy1zY3JlZW4tbWQgcHgtNCBsZzpweC0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC15LTYgcm91bmRlZC14bCBiZy1ncmF5LTgwMC82MCBwLTYgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuby1zY3JvbGxiYXIgZmxleCB3LWZ1bGwgdG91Y2gtcGFuLXggc25hcC14IHNuYXAtbWFuZGF0b3J5IGdhcC14LTYgb3ZlcmZsb3cteC1hdXRvIHNjcm9sbC1zbW9vdGhcIlxyXG4gICAgICAgICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XHJcbiAgICAgICAgICAgICAgcmVmPXtzY3JvbGxDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsIGlzQWN0aXZlPXtpc0FjdGl2ZX0ga2V5PXtgJHt0ZXN0aW1vbmlhbC5uYW1lfS0ke2luZGV4fWB9IHRlc3RpbW9uaWFsPXt0ZXN0aW1vbmlhbH0gLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNFwiPlxyXG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkodGVzdGltb25pYWxzLmxlbmd0aCldLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdoLTMgdy0zIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTMwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgc206aC00IHNtOnctNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdzY2FsZS0xMDAgb3BhY2l0eS0xMDAnIDogJ3NjYWxlLTc1IG9wYWNpdHktNjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YHNlbGVjdC1idXR0b24tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldFRlc3RpbW9uaWFsKGluZGV4KX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFsOiBGQzx7dGVzdGltb25pYWw6IFRlc3RpbW9uaWFsOyBpc0FjdGl2ZTogYm9vbGVhbn0+ID0gbWVtbyhcclxuICAoe3Rlc3RpbW9uaWFsOiB7dGV4dCwgbmFtZSwgaW1hZ2V9LCBpc0FjdGl2ZX0pID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICdmbGV4IHctZnVsbCBzaHJpbmstMCBzbmFwLXN0YXJ0IHNuYXAtYWx3YXlzIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC15LTQgcC0yIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIHNtOmZsZXgtcm93IHNtOmdhcC14LTYnLFxyXG4gICAgICAgIGlzQWN0aXZlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnLFxyXG4gICAgICApfT5cclxuICAgICAge2ltYWdlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0IHNocmluay0wIHNtOmgtMTYgc206dy0xNlwiPlxyXG4gICAgICAgICAgey8qIDxRdW90ZUljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1sZWZ0LTIgaC00IHctNCBzdHJva2UtYmxhY2sgdGV4dC13aGl0ZVwiIC8+ICovfVxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbFwiIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFF1b3RlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHNocmluay0wIHRleHQtd2hpdGUgc206aC04IHNtOnctOFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvc2UgcHJvc2Utc20gZm9udC1tZWRpdW0gaXRhbGljIHRleHQtd2hpdGUgc206cHJvc2UtYmFzZVwiPnt0ZXh0fTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGl0YWxpYyB0ZXh0LXdoaXRlIHNtOnRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGdcIj4tLSB7bmFtZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJsb3R0aWUiLCJtZW1vIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc0FwcGxlIiwiaXNNb2JpbGUiLCJTZWN0aW9uSWQiLCJ0ZXN0aW1vbmlhbCIsInVzZUludGVydmFsIiwidXNlV2luZG93IiwiUXVvdGVJY29uIiwiU2VjdGlvbiIsIlRlc3RpbW9uaWFscyIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJzY3JvbGxWYWx1ZSIsInNldFNjcm9sbFZhbHVlIiwicGFyYWxsYXhFbmFibGVkIiwic2V0UGFyYWxsYXhFbmFibGVkIiwiaXRlbVdpZHRoIiwic2Nyb2xsQ29udGFpbmVyIiwid2lkdGgiLCJpbWFnZVNyYyIsInRlc3RpbW9uaWFscyIsImFuaW1hdGlvbkNvbnRhaW5lciIsImFuaW0iLCJjdXJyZW50IiwibG9hZEFuaW1hdGlvbiIsImNvbnRhaW5lciIsImxvb3AiLCJhdXRvcGxheSIsImFuaW1hdGlvbkRhdGEiLCJyZXF1aXJlIiwicmVzb2x2ZVNyYyIsInVuZGVmaW5lZCIsInNyYyIsIm9mZnNldFdpZHRoIiwibmV3SW5kZXgiLCJNYXRoIiwicm91bmQiLCJzY3JvbGxMZWZ0Iiwic2V0VGVzdGltb25pYWwiLCJpbmRleCIsIm5leHQiLCJsZW5ndGgiLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJub1BhZGRpbmciLCJzZWN0aW9uSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm9uU2Nyb2xsIiwicmVmIiwibWFwIiwiaXNBY3RpdmUiLCJUZXN0aW1vbmlhbCIsIm5hbWUiLCJBcnJheSIsIl8iLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ0ZXh0IiwiaW1hZ2UiLCJpbWciLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/Testimonials.tsx\n"));

/***/ })

});