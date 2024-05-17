"use strict";
(self["webpackChunksample_tridentreactapp"] = self["webpackChunksample_tridentreactapp"] || []).push([["src_index_worker_ts"],{

/***/ "./src/index.worker.ts":
/*!*****************************!*\
  !*** ./src/index.worker.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _trident_extension_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client */ "./node_modules/@trident/extension-client/src/index.js");

function initialize(params) {
    const extensionClient = (0,_trident_extension_client__WEBPACK_IMPORTED_MODULE_0__.createExtensionClient)();
    console.log(params.environmentName);
    extensionClient.onAction((message) => {
        switch (message.action) {
            case 'open.page1':
                return extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page1' },
                });
            case 'open.page2':
                return extensionClient.openPage({
                    extensionName: 'my-extension',
                    route: { path: '/page2' },
                });
            default:
                throw new Error('Unknown action received');
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=src_index_worker_ts.bundle.b41756be8c9083913a97.js.map