"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/dashboard/page",{

/***/ "(app-pages-browser)/./app/contexts/AuthContext.js":
/*!*************************************!*\
  !*** ./app/contexts/AuthContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ useAuth,AuthProvider auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst useAuth = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (context === undefined) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n_s(useAuth, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst AuthProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Demo users for testing\n    const demoUsers = [\n        {\n            id: \"buyer-1\",\n            email: \"buyer@demo.com\",\n            password: \"password123\",\n            name: \"John Buyer\",\n            role: \"buyer\",\n            city: \"Mumbai\",\n            isVerified: true\n        },\n        {\n            id: \"seller-1\",\n            email: \"seller@demo.com\",\n            password: \"password123\",\n            name: \"Jane Seller\",\n            role: \"seller\",\n            city: \"Mumbai\",\n            isVerified: true,\n            businessName: \"Jane's Crafts\",\n            description: \"Beautiful handmade items\"\n        },\n        {\n            id: \"admin-1\",\n            email: \"admin@demo.com\",\n            password: \"password123\",\n            name: \"Admin User\",\n            role: \"admin\",\n            city: \"Mumbai\",\n            isVerified: true\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check for saved user session\n        const savedUser = localStorage.getItem(\"currentUser\");\n        if (savedUser) {\n            try {\n                setUser(JSON.parse(savedUser));\n            } catch (error) {\n                console.error(\"Error parsing saved user:\", error);\n                localStorage.removeItem(\"currentUser\");\n            }\n        }\n    }, []);\n    const login = async (email, password)=>{\n        try {\n            setIsLoading(true);\n            console.log(\"Attempting login for:\", email);\n            // Find demo user\n            const demoUser = demoUsers.find((u)=>u.email === email.trim().toLowerCase() && u.password === password);\n            if (!demoUser) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Invalid email or password. Please check your credentials.\");\n                return false;\n            }\n            // Set user without password\n            const { password: _, ...userWithoutPassword } = demoUser;\n            setUser(userWithoutPassword);\n            localStorage.setItem(\"currentUser\", JSON.stringify(userWithoutPassword));\n            console.log(\"Login successful\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Welcome back!\");\n            return true;\n        } catch (error) {\n            console.error(\"Critical login error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An unexpected error occurred. Please try again.\");\n            return false;\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const register = async function(email, password, name) {\n        let role = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : \"buyer\", city = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : \"Mumbai\", businessName = arguments.length > 5 ? arguments[5] : void 0, description = arguments.length > 6 ? arguments[6] : void 0, mobile = arguments.length > 7 ? arguments[7] : void 0, verificationDoc = arguments.length > 8 ? arguments[8] : void 0, verificationData = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : null;\n        try {\n            setIsLoading(true);\n            console.log(\"Attempting registration for:\", email, \"as\", role);\n            // Check if email already exists\n            const existingUser = demoUsers.find((u)=>u.email === email.trim().toLowerCase());\n            if (existingUser) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"This email is already registered. Please try logging in.\");\n                return false;\n            }\n            // Create new user\n            const newUser = {\n                id: \"user-\".concat(Date.now()),\n                email: email.trim().toLowerCase(),\n                name,\n                role,\n                city,\n                isVerified: role === \"buyer\" || role === \"admin\",\n                businessName: role === \"seller\" ? businessName : undefined,\n                description: role === \"seller\" ? description : undefined,\n                mobile: role === \"seller\" ? mobile : undefined,\n                // Additional verification data for sellers\n                verificationData: role === \"seller\" ? verificationData : undefined,\n                // Terms and conditions acceptance\n                termsAccepted: true,\n                privacyPolicyAccepted: true,\n                sellerAgreementAccepted: role === \"seller\" ? true : undefined,\n                termsAcceptedDate: new Date().toISOString()\n            };\n            // Add to demo users (in real app, this would be saved to database)\n            demoUsers.push({\n                ...newUser,\n                password\n            });\n            // Set current user\n            setUser(newUser);\n            localStorage.setItem(\"currentUser\", JSON.stringify(newUser));\n            console.log(\"Registration successful\");\n            if (role === \"seller\") {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Seller account created successfully! Please wait for admin approval to start listing products.\");\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Account created successfully! Welcome to Zaryah!\");\n            }\n            return true;\n        } catch (error) {\n            console.error(\"Critical registration error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"An unexpected error occurred. Please try again.\");\n            return false;\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const logout = async ()=>{\n        try {\n            console.log(\"Logging out user...\");\n            setIsLoading(true);\n            setUser(null);\n            localStorage.removeItem(\"currentUser\");\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Logged out successfully\");\n            console.log(\"Logout successful\");\n        } catch (error) {\n            console.error(\"Unexpected logout error:\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(\"Logout failed\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            login,\n            register,\n            logout,\n            isLoading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\4_zaryah\\\\project\\\\app\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 186,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AuthProvider, \"mNeCcSUdkuZSbl/YJwRRwadhE2I=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb250ZXh0cy9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVzRTtBQUNuQztBQUVuQyxNQUFNSyw0QkFBY0wsb0RBQWFBLENBQUNNO0FBRTNCLE1BQU1DLFVBQVU7O0lBQ3JCLE1BQU1DLFVBQVVQLGlEQUFVQSxDQUFDSTtJQUMzQixJQUFJRyxZQUFZRixXQUFXO1FBQ3pCLE1BQU0sSUFBSUcsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBQztHQU5ZRDtBQVFOLE1BQU1HLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0MseUJBQXlCO0lBQ3pCLE1BQU1jLFlBQVk7UUFDaEI7WUFDRUMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsWUFBWTtRQUNkO1FBQ0E7WUFDRU4sSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGFBQWE7UUFDZjtRQUNBO1lBQ0VSLElBQUk7WUFDSkMsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFlBQVk7UUFDZDtLQUNEO0lBRURwQixnREFBU0EsQ0FBQztRQUNSLCtCQUErQjtRQUMvQixNQUFNdUIsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUlGLFdBQVc7WUFDYixJQUFJO2dCQUNGYixRQUFRZ0IsS0FBS0MsS0FBSyxDQUFDSjtZQUNyQixFQUFFLE9BQU9LLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO2dCQUMzQ0os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SUFDRjtJQUVBLE1BQU02QyxTQUFTO1FBQ2IsSUFBSTtZQUNGNUIsUUFBUUcsR0FBRyxDQUFDO1lBQ1pwQixhQUFhO1lBRWJGLFFBQVE7WUFDUmMsYUFBYU0sVUFBVSxDQUFDO1lBQ3hCN0IsdURBQUtBLENBQUN5QyxPQUFPLENBQUM7WUFDZGIsUUFBUUcsR0FBRyxDQUFDO1FBRWQsRUFBRSxPQUFPSixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDM0IsdURBQUtBLENBQUMyQixLQUFLLENBQUM7UUFDZCxTQUFVO1lBQ1JoQixhQUFhO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVixZQUFZd0QsUUFBUTtRQUFDQyxPQUFPO1lBQUVsRDtZQUFNc0I7WUFBT1k7WUFBVWM7WUFBUTlDO1FBQVU7a0JBQ3JFSDs7Ozs7O0FBR1AsRUFBQztJQTlLWUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzPzE2YzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnXG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpXG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIC8vIERlbW8gdXNlcnMgZm9yIHRlc3RpbmdcbiAgY29uc3QgZGVtb1VzZXJzID0gW1xuICAgIHtcbiAgICAgIGlkOiAnYnV5ZXItMScsXG4gICAgICBlbWFpbDogJ2J1eWVyQGRlbW8uY29tJyxcbiAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnLFxuICAgICAgbmFtZTogJ0pvaG4gQnV5ZXInLFxuICAgICAgcm9sZTogJ2J1eWVyJyxcbiAgICAgIGNpdHk6ICdNdW1iYWknLFxuICAgICAgaXNWZXJpZmllZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzZWxsZXItMScsXG4gICAgICBlbWFpbDogJ3NlbGxlckBkZW1vLmNvbScsXG4gICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkMTIzJyxcbiAgICAgIG5hbWU6ICdKYW5lIFNlbGxlcicsXG4gICAgICByb2xlOiAnc2VsbGVyJyxcbiAgICAgIGNpdHk6ICdNdW1iYWknLFxuICAgICAgaXNWZXJpZmllZDogdHJ1ZSxcbiAgICAgIGJ1c2luZXNzTmFtZTogJ0phbmVcXCdzIENyYWZ0cycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0JlYXV0aWZ1bCBoYW5kbWFkZSBpdGVtcydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYWRtaW4tMScsXG4gICAgICBlbWFpbDogJ2FkbWluQGRlbW8uY29tJyxcbiAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnLFxuICAgICAgbmFtZTogJ0FkbWluIFVzZXInLFxuICAgICAgcm9sZTogJ2FkbWluJyxcbiAgICAgIGNpdHk6ICdNdW1iYWknLFxuICAgICAgaXNWZXJpZmllZDogdHJ1ZVxuICAgIH1cbiAgXVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIHNhdmVkIHVzZXIgc2Vzc2lvblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpXG4gICAgaWYgKHNhdmVkVXNlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHNhdmVkVXNlcikpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwYXJzaW5nIHNhdmVkIHVzZXI6JywgZXJyb3IpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyBsb2dpbiBmb3I6JywgZW1haWwpXG4gICAgICBcbiAgICAgIC8vIEZpbmQgZGVtbyB1c2VyXG4gICAgICBjb25zdCBkZW1vVXNlciA9IGRlbW9Vc2Vycy5maW5kKHUgPT4gXG4gICAgICAgIHUuZW1haWwgPT09IGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpICYmIHUucGFzc3dvcmQgPT09IHBhc3N3b3JkXG4gICAgICApXG5cbiAgICAgIGlmICghZGVtb1VzZXIpIHtcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQuIFBsZWFzZSBjaGVjayB5b3VyIGNyZWRlbnRpYWxzLicpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdXNlciB3aXRob3V0IHBhc3N3b3JkXG4gICAgICBjb25zdCB7IHBhc3N3b3JkOiBfLCAuLi51c2VyV2l0aG91dFBhc3N3b3JkIH0gPSBkZW1vVXNlclxuICAgICAgc2V0VXNlcih1c2VyV2l0aG91dFBhc3N3b3JkKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcldpdGhvdXRQYXNzd29yZCkpXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJylcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1dlbGNvbWUgYmFjayEnKVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDcml0aWNhbCBsb2dpbiBlcnJvcjonLCBlcnJvcilcbiAgICAgIHRvYXN0LmVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKFxuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICAgIG5hbWUsXG4gICAgcm9sZSA9ICdidXllcicsXG4gICAgY2l0eSA9ICdNdW1iYWknLFxuICAgIGJ1c2luZXNzTmFtZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBtb2JpbGUsXG4gICAgdmVyaWZpY2F0aW9uRG9jLFxuICAgIHZlcmlmaWNhdGlvbkRhdGEgPSBudWxsXG4gICkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHJlZ2lzdHJhdGlvbiBmb3I6JywgZW1haWwsICdhcycsIHJvbGUpXG4gICAgICBcbiAgICAgIC8vIENoZWNrIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzXG4gICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBkZW1vVXNlcnMuZmluZCh1ID0+IHUuZW1haWwgPT09IGVtYWlsLnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgICB0b2FzdC5lcnJvcignVGhpcyBlbWFpbCBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuIFBsZWFzZSB0cnkgbG9nZ2luZyBpbi4nKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIG5ldyB1c2VyXG4gICAgICBjb25zdCBuZXdVc2VyID0ge1xuICAgICAgICBpZDogYHVzZXItJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIGVtYWlsOiBlbWFpbC50cmltKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgaXNWZXJpZmllZDogcm9sZSA9PT0gJ2J1eWVyJyB8fCByb2xlID09PSAnYWRtaW4nLFxuICAgICAgICBidXNpbmVzc05hbWU6IHJvbGUgPT09ICdzZWxsZXInID8gYnVzaW5lc3NOYW1lIDogdW5kZWZpbmVkLFxuICAgICAgICBkZXNjcmlwdGlvbjogcm9sZSA9PT0gJ3NlbGxlcicgPyBkZXNjcmlwdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgbW9iaWxlOiByb2xlID09PSAnc2VsbGVyJyA/IG1vYmlsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gQWRkaXRpb25hbCB2ZXJpZmljYXRpb24gZGF0YSBmb3Igc2VsbGVyc1xuICAgICAgICB2ZXJpZmljYXRpb25EYXRhOiByb2xlID09PSAnc2VsbGVyJyA/IHZlcmlmaWNhdGlvbkRhdGEgOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFRlcm1zIGFuZCBjb25kaXRpb25zIGFjY2VwdGFuY2VcbiAgICAgICAgdGVybXNBY2NlcHRlZDogdHJ1ZSxcbiAgICAgICAgcHJpdmFjeVBvbGljeUFjY2VwdGVkOiB0cnVlLFxuICAgICAgICBzZWxsZXJBZ3JlZW1lbnRBY2NlcHRlZDogcm9sZSA9PT0gJ3NlbGxlcicgPyB0cnVlIDogdW5kZWZpbmVkLFxuICAgICAgICB0ZXJtc0FjY2VwdGVkRGF0ZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEFkZCB0byBkZW1vIHVzZXJzIChpbiByZWFsIGFwcCwgdGhpcyB3b3VsZCBiZSBzYXZlZCB0byBkYXRhYmFzZSlcbiAgICAgIGRlbW9Vc2Vycy5wdXNoKHsgLi4ubmV3VXNlciwgcGFzc3dvcmQgfSlcbiAgICAgIFxuICAgICAgLy8gU2V0IGN1cnJlbnQgdXNlclxuICAgICAgc2V0VXNlcihuZXdVc2VyKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRVc2VyJywgSlNPTi5zdHJpbmdpZnkobmV3VXNlcikpXG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCcpXG4gICAgICBcbiAgICAgIGlmIChyb2xlID09PSAnc2VsbGVyJykge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdTZWxsZXIgYWNjb3VudCBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEgUGxlYXNlIHdhaXQgZm9yIGFkbWluIGFwcHJvdmFsIHRvIHN0YXJ0IGxpc3RpbmcgcHJvZHVjdHMuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0FjY291bnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhIFdlbGNvbWUgdG8gWmFyeWFoIScpXG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyaXRpY2FsIHJlZ2lzdHJhdGlvbiBlcnJvcjonLCBlcnJvcilcbiAgICAgIHRvYXN0LmVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ0xvZ2dpbmcgb3V0IHVzZXIuLi4nKVxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICBcbiAgICAgIHNldFVzZXIobnVsbClcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50VXNlcicpXG4gICAgICB0b2FzdC5zdWNjZXNzKCdMb2dnZWQgb3V0IHN1Y2Nlc3NmdWxseScpXG4gICAgICBjb25zb2xlLmxvZygnTG9nb3V0IHN1Y2Nlc3NmdWwnKVxuICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgbG9nb3V0IGVycm9yOicsIGVycm9yKVxuICAgICAgdG9hc3QuZXJyb3IoJ0xvZ291dCBmYWlsZWQnKVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIHJlZ2lzdGVyLCBsb2dvdXQsIGlzTG9hZGluZyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJkZW1vVXNlcnMiLCJpZCIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwicm9sZSIsImNpdHkiLCJpc1ZlcmlmaWVkIiwiYnVzaW5lc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJzYXZlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwicmVtb3ZlSXRlbSIsImxvZ2luIiwibG9nIiwiZGVtb1VzZXIiLCJmaW5kIiwidSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIl8iLCJ1c2VyV2l0aG91dFBhc3N3b3JkIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZWdpc3RlciIsIm1vYmlsZSIsInZlcmlmaWNhdGlvbkRvYyIsInZlcmlmaWNhdGlvbkRhdGEiLCJleGlzdGluZ1VzZXIiLCJuZXdVc2VyIiwiRGF0ZSIsIm5vdyIsInRlcm1zQWNjZXB0ZWQiLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiLCJzZWxsZXJBZ3JlZW1lbnRBY2NlcHRlZCIsInRlcm1zQWNjZXB0ZWREYXRlIiwidG9JU09TdHJpbmciLCJwdXNoIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/contexts/AuthContext.js\n"));

/***/ })

});