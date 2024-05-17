"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_shell_index_worker_ts"],{

/***/ "./src/apps/shell/constants/shellActions.ts":
/*!**************************************************!*\
  !*** ./src/apps/shell/constants/shellActions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactOperationalInsightAction: () => (/* binding */ ArtifactOperationalInsightAction),
/* harmony export */   MultiTaskingActions: () => (/* binding */ MultiTaskingActions)
/* harmony export */ });
/** action names associated with the Artifact `Operational-Insight` */
var ArtifactOperationalInsightAction;
(function (ArtifactOperationalInsightAction) {
    ArtifactOperationalInsightAction["CreateOperationalInsight"] = "create.operational-insight";
})(ArtifactOperationalInsightAction || (ArtifactOperationalInsightAction = {}));
/** actions managing the lifecyle of a tab. These are dispatched from here: https://dev.azure.com/powerbi/PowerBIClients/_git/PowerBIClients?path=trident/libs/extension/registry/src/tabs/digital-operations.ts */
var MultiTaskingActions;
(function (MultiTaskingActions) {
    MultiTaskingActions["onInit"] = "multitasking.on-init";
    MultiTaskingActions["canDeactivate"] = "multitasking.can-deactivate";
    MultiTaskingActions["onDeactivate"] = "multitasking.on-deactivate";
    MultiTaskingActions["canDestroy"] = "multitasking.can-destroy";
    MultiTaskingActions["onDestroy"] = "multitasking.on-destroy";
    MultiTaskingActions["onDelete"] = "multitasking.on-delete";
})(MultiTaskingActions || (MultiTaskingActions = {}));


/***/ }),

/***/ "./src/apps/shell/index.worker.ts":
/*!****************************************!*\
  !*** ./src/apps/shell/index.worker.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _trident_extension_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client */ "./node_modules/@trident/extension-client/src/index.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/shellActions */ "./src/apps/shell/constants/shellActions.ts");



const MODULE_NAME = 'ExtensionWorker';
function initialize(_params) {
    const extensionClient = (0,_trident_extension_client__WEBPACK_IMPORTED_MODULE_0__.createExtensionClient)();
    extensionClient.action.onAction((message) => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, `Received action. ${JSON.stringify(message)}`);
        const actionType = message.action;
        switch (actionType) {
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.ArtifactOperationalInsightAction.CreateOperationalInsight: {
                const data = message.data;
                return extensionClient.dialog.open({
                    extensionName: _do_core__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_NAMES.DigitalOperations,
                    options: {
                        height: 175,
                        width: 400,
                    },
                    route: {
                        path: _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.create,
                        queryParams: {
                            [_do_core__WEBPACK_IMPORTED_MODULE_1__.SearchParams.WORKSPACE_OBJECT_ID]: data.workspaceObjectId || '',
                        },
                    },
                });
            }
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.onInit:
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.canDeactivate:
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.onDeactivate:
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.canDestroy:
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.onDestroy:
            case _constants_shellActions__WEBPACK_IMPORTED_MODULE_2__.MultiTaskingActions.onDelete:
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, `[IMDX] Received tab action. Taking no action. ActionType: ${actionType}`);
                return Promise.resolve();
            default:
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, `[IMDX] Unknown action type. Taking no action. ActionType: ${actionType}`);
                return Promise.resolve();
        }
    });
}


/***/ })

}]);
//# sourceMappingURL=src_apps_shell_index_worker_ts.bundle.js.map