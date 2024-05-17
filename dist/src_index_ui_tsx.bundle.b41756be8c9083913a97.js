"use strict";
(self["webpackChunksample_tridentreactapp"] = self["webpackChunksample_tridentreactapp"] || []).push([["src_index_ui_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ribbon */ "./src/Ribbon.tsx");


function App({ history, extensionClient, environmentConfig }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Ribbon__WEBPACK_IMPORTED_MODULE_1__.Ribbon, { selectedValue: "tab1" })));
}


/***/ }),

/***/ "./src/Ribbon.tsx":
/*!************************!*\
  !*** ./src/Ribbon.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ribbon": () => (/* binding */ Ribbon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/TabList/TabList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/Tab/Tab.js");


const Ribbon = (props) => {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.TabList, Object.assign({}, props),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Tab, { value: "tab1" }, "First Tab"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Tab, { value: "tab2" }, "Second Tab")));
};


/***/ }),

/***/ "./src/environments.ts":
/*!*****************************!*\
  !*** ./src/environments.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environments": () => (/* binding */ environments)
/* harmony export */ });
const environments = {
    Onebox: {
        aSetting: "onebox",
    },
    INT: {
        aSetting: "int",
    },
    TEST: {
        aSetting: "test",
    },
    DAILY: {
        aSetting: "daily",
    },
    DXT: {
        aSetting: "dxt",
    },
    MSIT: {
        aSetting: "msit",
    },
    PROD: {
        aSetting: "prod",
    },
    FF: {
        aSetting: "ff",
    },
    TB: {
        aSetting: "tb",
    },
    PF: {
        aSetting: "pf",
    },
    MC: {
        aSetting: "mc",
    },
    USNat: {
        aSetting: "usnat",
    },
    USSec: {
        aSetting: "ussec",
    },
    DEFAULT: {
        aSetting: "default",
    },
};


/***/ }),

/***/ "./src/index.ui.tsx":
/*!**************************!*\
  !*** ./src/index.ui.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _trident_extension_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client */ "./node_modules/@trident/extension-client/src/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _environments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments */ "./src/environments.ts");






function initialize(params) {
    const client = (0,_trident_extension_client__WEBPACK_IMPORTED_MODULE_0__.createExtensionClient)();
    const history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createBrowserHistory)();
    const currentEnvironment = _environments__WEBPACK_IMPORTED_MODULE_4__.environments[params.environmentName] || _environments__WEBPACK_IMPORTED_MODULE_4__.environments.DEFAULT;
    // client.onNavigate(route => history.push(route.targetUrl));
    // const [location, setLocation] = React.useState<string>('');
    // client.navigation.onNavigate(route => {
    //     console.log('here we are');
    //     history.replace(route.targetUrl);
    //     setLocation(location);
    // });
    // client.navigation.navigate()
    react_dom__WEBPACK_IMPORTED_MODULE_2__.render(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__.App
    // location={location}
    , { 
        // location={location}
        history: history, extensionClient: client, environmentConfig: currentEnvironment }), document.querySelector("#root"));
}


/***/ })

}]);
//# sourceMappingURL=src_index_ui_tsx.bundle.b41756be8c9083913a97.js.map