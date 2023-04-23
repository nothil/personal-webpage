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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-web */ \"./node_modules/lottie-web/build/player/lottie.js\");\n/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ \"./src/config.ts\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/data */ \"./src/data/data.tsx\");\n/* harmony import */ var _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useInterval */ \"./src/hooks/useInterval.ts\");\n/* harmony import */ var _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWindow */ \"./src/hooks/useWindow.ts\");\n/* harmony import */ var _Layout_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layout/Section */ \"./src/components/Layout/Section.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Testimonials = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(_c = _s(function() {\n    _s();\n    var profileImageSrc = _data_data__WEBPACK_IMPORTED_MODULE_5__.aboutData.profileImageSrc, description = _data_data__WEBPACK_IMPORTED_MODULE_5__.aboutData.description, aboutItems = _data_data__WEBPACK_IMPORTED_MODULE_5__.aboutData.aboutItems;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), activeIndex = ref[0], setActiveIndex = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0), scrollValue = ref1[0], setScrollValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), parallaxEnabled = ref2[0], setParallaxEnabled = ref2[1];\n    var itemWidth = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(0);\n    var scrollContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var width = (0,_hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"])().width;\n    var animationContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var anim = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var imageSrc = _data_data__WEBPACK_IMPORTED_MODULE_5__.testimonial.imageSrc, testimonials = _data_data__WEBPACK_IMPORTED_MODULE_5__.testimonial.testimonials;\n    var resolveSrc = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function() {\n        if (!imageSrc) return undefined;\n        return typeof imageSrc === \"string\" ? imageSrc : imageSrc.src;\n    }, [\n        imageSrc\n    ]);\n    // Mobile iOS doesn't allow background-fixed elements\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setParallaxEnabled(!(_config__WEBPACK_IMPORTED_MODULE_4__.isMobile && _config__WEBPACK_IMPORTED_MODULE_4__.isApple));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (animationContainer.current) {\n            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion\n            anim.current = lottie_web__WEBPACK_IMPORTED_MODULE_2___default().loadAnimation({\n                container: animationContainer.current,\n                loop: true,\n                autoplay: true,\n                animationData: __webpack_require__(/*! ../../images/lottie/build.json */ \"./src/images/lottie/build.json\")\n            });\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;\n    }, [\n        width\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (scrollContainer.current) {\n            var newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);\n            setActiveIndex(newIndex);\n        }\n    }, [\n        itemWidth,\n        scrollValue\n    ]);\n    var setTestimonial = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(index) {\n        return function() {\n            if (scrollContainer !== null && scrollContainer.current !== null) {\n                scrollContainer.current.scrollLeft = itemWidth.current * index;\n            }\n        };\n    }, []);\n    var next = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function() {\n        if (activeIndex + 1 === testimonials.length) {\n            setTestimonial(0)();\n        } else {\n            setTestimonial(activeIndex + 1)();\n        }\n    }, [\n        activeIndex,\n        setTestimonial,\n        testimonials.length\n    ]);\n    var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function(event) {\n        setScrollValue(event.currentTarget.scrollLeft);\n    }, []);\n    (0,_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(next, 10000);\n    // If no testimonials, don't render the section\n    if (!testimonials.length) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout_Section__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        noPadding: true,\n        sectionId: _data_data__WEBPACK_IMPORTED_MODULE_5__.SectionId.About,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8\", parallaxEnabled && \"bg-fixed\", {\n                \"bg-neutral-700\": !profileImageSrc\n            }),\n            style: profileImageSrc ? {\n                backgroundImage: \"url(\".concat(resolveSrc)\n            } : undefined,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full max-w-screen-md px-4 lg:px-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-span-1 flex justify-center md:justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: animationContainer\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-x-4\",\n                            children: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Array(testimonials.length)).map(function(_, index) {\n                                var isActive = index === activeIndex;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(\"h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4\", isActive ? \"scale-100 opacity-100\" : \"scale-75 opacity-60\"),\n                                    disabled: isActive,\n                                    onClick: setTestimonial(index)\n                                }, \"select-button-\".concat(index), false, {\n                                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 19\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nothile Ngcobo\\\\Projects\\\\Assesment\\\\personal-webpage\\\\src\\\\components\\\\Sections\\\\Testimonials.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n}, \"JwXROJu+i6hs8znUnryOmWynoFE=\", false, function() {\n    return [\n        _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n})), \"JwXROJu+i6hs8znUnryOmWynoFE=\", false, function() {\n    return [\n        _hooks_useWindow__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        _hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c1 = Testimonials;\n// const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(\n//   ({testimonial: {text, name, image}, isActive}) => (\n//     <div\n//       className={classNames(\n//         'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',\n//         isActive ? 'opacity-100' : 'opacity-0',\n//       )}>\n//       {image ? (\n//         <div className=\"relative h-14 w-14 shrink-0 sm:h-16 sm:w-16\">\n//           {/* <QuoteIcon className=\"absolute -top-2 -left-2 h-4 w-4 stroke-black text-white\" /> */}\n//           <img className=\"h-full w-full rounded-full\" src={image} />\n//         </div>\n//       ) : (\n//         <QuoteIcon className=\"h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8\" />\n//       )}\n//       <div className=\"flex flex-col gap-y-4\">\n//         <p className=\"prose prose-sm font-medium italic text-white sm:prose-base\">{text}</p>\n//         <p className=\"text-xs italic text-white sm:text-sm md:text-base lg:text-lg\">-- {name}</p>\n//       </div>\n//     </div>\n//   ),\n// );\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c, _c1;\n$RefreshReg$(_c, \"Testimonials$memo\");\n$RefreshReg$(_c1, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWN0aW9ucy9UZXN0aW1vbmlhbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQW9DO0FBQ0o7QUFDa0U7QUFFbkQ7QUFDbUI7QUFFaEI7QUFDSjtBQUVOO0FBRXhDLElBQU1nQixZQUFZLGlCQUFPZCxHQUFBQSwyQ0FBSSxTQUFDLFdBQU07O0lBQ2xDLElBQU9lLGVBQWUsR0FBNkJQLGlFQUE3QixFQUFFUSxXQUFXLEdBQWdCUiw2REFBaEIsRUFBRVMsVUFBVSxHQUFJVCw0REFBSjtJQUMvQyxJQUFzQ0gsR0FBbUIsR0FBbkJBLCtDQUFRLENBQVMsQ0FBQyxDQUFDLEVBQWxEYSxXQUFXLEdBQW9CYixHQUFtQixHQUF2QyxFQUFFYyxjQUFjLEdBQUlkLEdBQW1CLEdBQXZCO0lBQ2xDLElBQXNDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTFDZSxXQUFXLEdBQW9CZixJQUFXLEdBQS9CLEVBQUVnQixjQUFjLEdBQUloQixJQUFXLEdBQWY7SUFDbEMsSUFBOENBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdERpQixlQUFlLEdBQXdCakIsSUFBZSxHQUF2QyxFQUFFa0Isa0JBQWtCLEdBQUlsQixJQUFlLEdBQW5CO0lBRTFDLElBQU1tQixTQUFTLEdBQUdwQiw2Q0FBTSxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFNcUIsZUFBZSxHQUFHckIsNkNBQU0sQ0FBaUIsSUFBSSxDQUFDO0lBRXBELElBQU0sS0FBTSxHQUFJUSw0REFBUyxFQUFFLENBQXBCYyxLQUFLO0lBQ1osSUFBTUMsa0JBQWtCLEdBQUd2Qiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFNd0IsSUFBSSxHQUFHeEIsNkNBQU0sQ0FBYSxJQUFJLENBQUM7SUFFckMsSUFBT3lCLFFBQVEsR0FBa0JuQiw0REFBbEIsRUFBRW9CLFlBQVksR0FBSXBCLGdFQUFKO0lBRTdCLElBQU1xQixVQUFV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RTs7Ozt5Q0FDWSxDQUMzQzs0QkFDSixDQUFDLENBQUM7Ozs7O2lDQUNFOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7OztpQkFDRjs7Ozs7YUFDRSxDQUNWO0FBQ0osQ0FBQzs7UUFsSGlCbkMsd0RBQVM7UUE0RHpCRCwwREFBVzs7R0FzRFg7O1FBbEhnQkMsd0RBQVM7UUE0RHpCRCwwREFBVzs7RUFzRFg7O0FBRUYsK0VBQStFO0FBQy9FLHdEQUF3RDtBQUN4RCxXQUFXO0FBQ1gsK0JBQStCO0FBQy9CLGtKQUFrSjtBQUNsSixrREFBa0Q7QUFDbEQsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQix3RUFBd0U7QUFDeEUsc0dBQXNHO0FBQ3RHLHVFQUF1RTtBQUN2RSxpQkFBaUI7QUFDakIsY0FBYztBQUNkLDhFQUE4RTtBQUM5RSxXQUFXO0FBQ1gsZ0RBQWdEO0FBQ2hELCtGQUErRjtBQUMvRixvR0FBb0c7QUFDcEcsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsS0FBSztBQUVMLCtEQUFlRyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvVGVzdGltb25pYWxzLnRzeD8xNTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWInO1xyXG5pbXBvcnQge0ZDLCBtZW1vLCBVSUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtpc0FwcGxlLCBpc01vYmlsZX0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHthYm91dERhdGEsIFNlY3Rpb25JZCwgdGVzdGltb25pYWx9IGZyb20gJy4uLy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCB7VGVzdGltb25pYWx9IGZyb20gJy4uLy4uL2RhdGEvZGF0YURlZic7XHJcbmltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnRlcnZhbCc7XHJcbmltcG9ydCB1c2VXaW5kb3cgZnJvbSAnLi4vLi4vaG9va3MvdXNlV2luZG93JztcclxuaW1wb3J0IFF1b3RlSWNvbiBmcm9tICcuLi9JY29uL1F1b3RlSWNvbic7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL0xheW91dC9TZWN0aW9uJztcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFsczogRkMgPSBtZW1vKCgpID0+IHtcclxuICBjb25zdCB7cHJvZmlsZUltYWdlU3JjLCBkZXNjcmlwdGlvbiwgYWJvdXRJdGVtc30gPSBhYm91dERhdGE7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtzY3JvbGxWYWx1ZSwgc2V0U2Nyb2xsVmFsdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BhcmFsbGF4RW5hYmxlZCwgc2V0UGFyYWxsYXhFbmFibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaXRlbVdpZHRoID0gdXNlUmVmKDApO1xyXG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3coKTtcclxuICBjb25zdCBhbmltYXRpb25Db250YWluZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYW5pbSA9IHVzZVJlZjxudWxsIHwgYW55PihudWxsKTtcclxuXHJcbiAgY29uc3Qge2ltYWdlU3JjLCB0ZXN0aW1vbmlhbHN9ID0gdGVzdGltb25pYWw7XHJcblxyXG4gIGNvbnN0IHJlc29sdmVTcmMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghaW1hZ2VTcmMpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdHlwZW9mIGltYWdlU3JjID09PSAnc3RyaW5nJyA/IGltYWdlU3JjIDogaW1hZ2VTcmMuc3JjO1xyXG4gIH0sIFtpbWFnZVNyY10pO1xyXG5cclxuICAvLyBNb2JpbGUgaU9TIGRvZXNuJ3QgYWxsb3cgYmFja2dyb3VuZC1maXhlZCBlbGVtZW50c1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYXJhbGxheEVuYWJsZWQoIShpc01vYmlsZSAmJiBpc0FwcGxlKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50KSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXHJcbiAgICAgIGFuaW0uY3VycmVudCA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LCAvLyB0aGUgZG9tIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGFuaW1hdGlvblxyXG5cclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IHJlcXVpcmUoJy4uLy4uL2ltYWdlcy9sb3R0aWUvYnVpbGQuanNvbicpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpdGVtV2lkdGguY3VycmVudCA9IHNjcm9sbENvbnRhaW5lci5jdXJyZW50ID8gc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGggOiAwO1xyXG4gIH0sIFt3aWR0aF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNjcm9sbENvbnRhaW5lci5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5yb3VuZChzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0IC8gaXRlbVdpZHRoLmN1cnJlbnQpO1xyXG4gICAgICBzZXRBY3RpdmVJbmRleChuZXdJbmRleCk7XHJcbiAgICB9XHJcbiAgfSwgW2l0ZW1XaWR0aCwgc2Nyb2xsVmFsdWVdKTtcclxuXHJcbiAgY29uc3Qgc2V0VGVzdGltb25pYWwgPSB1c2VDYWxsYmFjayhcclxuICAgIChpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB7XHJcbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIgIT09IG51bGwgJiYgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQgIT09IG51bGwpIHtcclxuICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gaXRlbVdpZHRoLmN1cnJlbnQgKiBpbmRleDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtdLFxyXG4gICk7XHJcbiAgY29uc3QgbmV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChhY3RpdmVJbmRleCArIDEgPT09IHRlc3RpbW9uaWFscy5sZW5ndGgpIHtcclxuICAgICAgc2V0VGVzdGltb25pYWwoMCkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRlc3RpbW9uaWFsKGFjdGl2ZUluZGV4ICsgMSkoKTtcclxuICAgIH1cclxuICB9LCBbYWN0aXZlSW5kZXgsIHNldFRlc3RpbW9uaWFsLCB0ZXN0aW1vbmlhbHMubGVuZ3RoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IHVzZUNhbGxiYWNrPFVJRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50Pj4oZXZlbnQgPT4ge1xyXG4gICAgc2V0U2Nyb2xsVmFsdWUoZXZlbnQuY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUludGVydmFsKG5leHQsIDEwMDAwKTtcclxuXHJcbiAgLy8gSWYgbm8gdGVzdGltb25pYWxzLCBkb24ndCByZW5kZXIgdGhlIHNlY3Rpb25cclxuICBpZiAoIXRlc3RpbW9uaWFscy5sZW5ndGgpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIG5vUGFkZGluZyBzZWN0aW9uSWQ9e1NlY3Rpb25JZC5BYm91dH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAnZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWNvdmVyIGJnLWNlbnRlciBweC00IHB5LTE2IG1kOnB5LTI0IGxnOnB4LTgnLFxyXG4gICAgICAgICAgcGFyYWxsYXhFbmFibGVkICYmICdiZy1maXhlZCcsXHJcbiAgICAgICAgICB7J2JnLW5ldXRyYWwtNzAwJzogIXByb2ZpbGVJbWFnZVNyY30sXHJcbiAgICAgICAgKX1cclxuICAgICAgICBzdHlsZT17cHJvZmlsZUltYWdlU3JjID8ge2JhY2tncm91bmRJbWFnZTogYHVybCgke3Jlc29sdmVTcmN9YH0gOiB1bmRlZmluZWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctc2NyZWVuLW1kIHB4LTQgbGc6cHgtMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAteS02IHJvdW5kZWQteGwgYmctZ3JheS04MDAvNjAgcC02IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXNjcm9sbGJhciBmbGV4IHctZnVsbCB0b3VjaC1wYW4teCBzbmFwLXggc25hcC1tYW5kYXRvcnkgZ2FwLXgtNiBvdmVyZmxvdy14LWF1dG8gc2Nyb2xsLXNtb290aFwiXHJcbiAgICAgICAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cclxuICAgICAgICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpbmRleCA9PT0gYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8IGlzQWN0aXZlPXtpc0FjdGl2ZX0ga2V5PXtgJHt0ZXN0aW1vbmlhbC5uYW1lfS0ke2luZGV4fWB9IHRlc3RpbW9uaWFsPXt0ZXN0aW1vbmlhbH0gLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0yNCB3LTI0IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXhsIG1kOmgtMzIgbWQ6dy0zMlwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gcmVmPXthbmltYXRpb25Db250YWluZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNFwiPlxyXG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkodGVzdGltb25pYWxzLmxlbmd0aCldLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT09IGFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICdoLTMgdy0zIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTMwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgc206aC00IHNtOnctNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdzY2FsZS0xMDAgb3BhY2l0eS0xMDAnIDogJ3NjYWxlLTc1IG9wYWNpdHktNjAnLFxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17YHNlbGVjdC1idXR0b24tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NldFRlc3RpbW9uaWFsKGluZGV4KX0+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59KTtcclxuXHJcbi8vIGNvbnN0IFRlc3RpbW9uaWFsOiBGQzx7dGVzdGltb25pYWw6IFRlc3RpbW9uaWFsOyBpc0FjdGl2ZTogYm9vbGVhbn0+ID0gbWVtbyhcclxuLy8gICAoe3Rlc3RpbW9uaWFsOiB7dGV4dCwgbmFtZSwgaW1hZ2V9LCBpc0FjdGl2ZX0pID0+IChcclxuLy8gICAgIDxkaXZcclxuLy8gICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4vLyAgICAgICAgICdmbGV4IHctZnVsbCBzaHJpbmstMCBzbmFwLXN0YXJ0IHNuYXAtYWx3YXlzIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC15LTQgcC0yIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIHNtOmZsZXgtcm93IHNtOmdhcC14LTYnLFxyXG4vLyAgICAgICAgIGlzQWN0aXZlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnLFxyXG4vLyAgICAgICApfT5cclxuLy8gICAgICAge2ltYWdlID8gKFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNCB3LTE0IHNocmluay0wIHNtOmgtMTYgc206dy0xNlwiPlxyXG4vLyAgICAgICAgICAgey8qIDxRdW90ZUljb24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0yIC1sZWZ0LTIgaC00IHctNCBzdHJva2UtYmxhY2sgdGV4dC13aGl0ZVwiIC8+ICovfVxyXG4vLyAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbFwiIHNyYz17aW1hZ2V9IC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgPFF1b3RlSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01IHNocmluay0wIHRleHQtd2hpdGUgc206aC04IHNtOnctOFwiIC8+XHJcbi8vICAgICAgICl9XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAteS00XCI+XHJcbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvc2UgcHJvc2Utc20gZm9udC1tZWRpdW0gaXRhbGljIHRleHQtd2hpdGUgc206cHJvc2UtYmFzZVwiPnt0ZXh0fTwvcD5cclxuLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGl0YWxpYyB0ZXh0LXdoaXRlIHNtOnRleHQtc20gbWQ6dGV4dC1iYXNlIGxnOnRleHQtbGdcIj4tLSB7bmFtZX08L3A+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKSxcclxuLy8gKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJsb3R0aWUiLCJtZW1vIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpc0FwcGxlIiwiaXNNb2JpbGUiLCJhYm91dERhdGEiLCJTZWN0aW9uSWQiLCJ0ZXN0aW1vbmlhbCIsInVzZUludGVydmFsIiwidXNlV2luZG93IiwiU2VjdGlvbiIsIlRlc3RpbW9uaWFscyIsInByb2ZpbGVJbWFnZVNyYyIsImRlc2NyaXB0aW9uIiwiYWJvdXRJdGVtcyIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJzY3JvbGxWYWx1ZSIsInNldFNjcm9sbFZhbHVlIiwicGFyYWxsYXhFbmFibGVkIiwic2V0UGFyYWxsYXhFbmFibGVkIiwiaXRlbVdpZHRoIiwic2Nyb2xsQ29udGFpbmVyIiwid2lkdGgiLCJhbmltYXRpb25Db250YWluZXIiLCJhbmltIiwiaW1hZ2VTcmMiLCJ0ZXN0aW1vbmlhbHMiLCJyZXNvbHZlU3JjIiwidW5kZWZpbmVkIiwic3JjIiwiY3VycmVudCIsImxvYWRBbmltYXRpb24iLCJjb250YWluZXIiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwicmVxdWlyZSIsIm9mZnNldFdpZHRoIiwibmV3SW5kZXgiLCJNYXRoIiwicm91bmQiLCJzY3JvbGxMZWZ0Iiwic2V0VGVzdGltb25pYWwiLCJpbmRleCIsIm5leHQiLCJsZW5ndGgiLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJub1BhZGRpbmciLCJzZWN0aW9uSWQiLCJBYm91dCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwic3BhbiIsInJlZiIsIkFycmF5IiwibWFwIiwiXyIsImlzQWN0aXZlIiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Sections/Testimonials.tsx\n"));

/***/ })

});