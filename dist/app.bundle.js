/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@trident/extension-client-common/src/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ButtonType),
/* harmony export */   CLIENT_VERSION: () => (/* reexport safe */ _lib_extension_version__WEBPACK_IMPORTED_MODULE_5__.CLIENT_VERSION),
/* harmony export */   CloseMode: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.CloseMode),
/* harmony export */   DatahubFilterType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DatahubListPivot),
/* harmony export */   DefaultExtensionClientConfig: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig),
/* harmony export */   DialogType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DialogType),
/* harmony export */   DisplayColumn: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DisplayColumn),
/* harmony export */   ErrorDialogWidth: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ErrorDialogWidth),
/* harmony export */   ErrorKind: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ErrorKind),
/* harmony export */   ErrorSource: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ErrorSource),
/* harmony export */   ExposeTo: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ExposeTo),
/* harmony export */   ExtensionClient: () => (/* reexport safe */ _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__.ExtensionClient),
/* harmony export */   ExtensionHostApp: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ExtensionHostApp),
/* harmony export */   ExtensionLoadEventType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ExtensionLoadEventType),
/* harmony export */   ExtensionMessageType: () => (/* reexport safe */ _lib_extension_messages__WEBPACK_IMPORTED_MODULE_4__.ExtensionMessageType),
/* harmony export */   GatewayType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.GatewayType),
/* harmony export */   LifecycleEventType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.LifecycleEventType),
/* harmony export */   MessageBarType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.MessageBarType),
/* harmony export */   Messages: () => (/* reexport safe */ _lib_extension_messages__WEBPACK_IMPORTED_MODULE_4__.Messages),
/* harmony export */   NotificationToastDuration: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.NotificationType),
/* harmony export */   OnelakeExplorerType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.OnelakeExplorerType),
/* harmony export */   OpenMode: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.OpenMode),
/* harmony export */   OpenNotificationButtonType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.OpenNotificationButtonType),
/* harmony export */   Permissions: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.Permissions),
/* harmony export */   PreDefinedEventName: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.PreDefinedEventName),
/* harmony export */   PreDefinedExtensionAction: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.PreDefinedExtensionAction),
/* harmony export */   SharingLinkType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.SharingLinkType),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.SupportedDatahubStyleProperties),
/* harmony export */   bootstrap: () => (/* reexport safe */ _lib_extension_bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap),
/* harmony export */   createExtensionClient: () => (/* reexport safe */ _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__.createExtensionClient)
/* harmony export */ });
/* harmony import */ var _lib_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/apis */ "./node_modules/@trident/extension-client-common/src/lib/apis/index.js");
/* harmony import */ var _lib_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/contracts */ "./node_modules/@trident/extension-client-common/src/lib/contracts/index.js");
/* harmony import */ var _lib_extension_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/extension-bootstrap */ "./node_modules/@trident/extension-client-common/src/lib/extension-bootstrap.js");
/* harmony import */ var _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/extension-client */ "./node_modules/@trident/extension-client-common/src/lib/extension-client.js");
/* harmony import */ var _lib_extension_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
/* harmony import */ var _lib_extension_version__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/extension-version */ "./node_modules/@trident/extension-client-common/src/lib/extension-version.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/action-api.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/action-api.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=action-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/artifact-recent-runs-api.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/artifact-recent-runs-api.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-recent-runs-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/artifact-settings-api.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/artifact-settings-api.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-settings-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/auth-api.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/auth-api.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=auth-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/datahub-api.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/datahub-api.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=datahub-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/dialog-api.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/dialog-api.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=dialog-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/error-handling-api.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/error-handling-api.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=error-handling-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/event-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/event-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=event-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/action-api.js");
/* harmony import */ var _artifact_recent_runs_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artifact-recent-runs-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/artifact-recent-runs-api.js");
/* harmony import */ var _artifact_settings_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact-settings-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/artifact-settings-api.js");
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/auth-api.js");
/* harmony import */ var _datahub_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datahub-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/datahub-api.js");
/* harmony import */ var _dialog_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/dialog-api.js");
/* harmony import */ var _error_handling_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error-handling-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/error-handling-api.js");
/* harmony import */ var _event_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/event-api.js");
/* harmony import */ var _navigation_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/navigation-api.js");
/* harmony import */ var _notification_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/notification-api.js");
/* harmony import */ var _page_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/page-api.js");
/* harmony import */ var _panel_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/panel-api.js");
/* harmony import */ var _permission_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./permission-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/permission-api.js");
/* harmony import */ var _settings_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/settings-api.js");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/state-api.js");
/* harmony import */ var _subfolder_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./subfolder-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/subfolder-api.js");
/* harmony import */ var _theme_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme-api */ "./node_modules/@trident/extension-client-common/src/lib/apis/theme-api.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/navigation-api.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/navigation-api.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=navigation-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/notification-api.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/notification-api.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=notification-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/page-api.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/page-api.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=page-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/panel-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/panel-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=panel-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/permission-api.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/permission-api.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=permission-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/settings-api.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/settings-api.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=settings-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/state-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/state-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=state-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/subfolder-api.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/subfolder-api.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=subfolder-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/apis/theme-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/apis/theme-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=theme-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/action-client.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/action-client.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionClient: () => (/* binding */ ActionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ActionClient {
    constructor(broker) {
        this.broker = broker;
    }
    execute(action) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.executeAction.start(action));
    }
    onAction(handler) {
        return this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onAction, (action) => {
            return handler(action)
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onAction.resolve({ result }))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onAction.reject({ error }));
        });
    }
}
//# sourceMappingURL=action-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/artifact-recent-runs-client.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/artifact-recent-runs-client.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactRecentRunsClient: () => (/* binding */ ArtifactRecentRunsClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ArtifactRecentRunsClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openArtifactRecentRuns.start(config));
    }
}
//# sourceMappingURL=artifact-recent-runs-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/artifact-settings-client.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/artifact-settings-client.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactSettingsClient: () => (/* binding */ ArtifactSettingsClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ArtifactSettingsClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openArtifactSettings.start(config));
    }
    onClose(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onCloseArtifactSettings, callback);
    }
    setIframeDimensions(config) {
        this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.resizeIframeHeight.start({ iframeHeight: config.iframeHeight, artifactId: config.artifactId }));
    }
}
//# sourceMappingURL=artifact-settings-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/auth-client.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/auth-client.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthClient: () => (/* binding */ AuthClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class AuthClient {
    constructor(broker) {
        this.broker = broker;
    }
    getAccessToken(scopes, forceRefresh) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getAccessToken.start({ scopes, forceRefresh }));
    }
}
//# sourceMappingURL=auth-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/datahub-client.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/datahub-client.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatahubClient: () => (/* binding */ DatahubClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class DatahubClient {
    constructor(broker) {
        this.broker = broker;
    }
    openDialog(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openDatahubDialog.start(config));
    }
    openDatahubWizardDialog(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openDatahubWizardDialog.start(config));
    }
}
//# sourceMappingURL=datahub-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/dialog-client.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/dialog-client.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogClient: () => (/* binding */ DialogClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class DialogClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openDialog.start(config));
    }
    close(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.closeDialog.start(config || {}));
    }
}
//# sourceMappingURL=dialog-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/error-handling-client.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/error-handling-client.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandlingClient: () => (/* binding */ ErrorHandlingClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ErrorHandlingClient {
    constructor(broker) {
        this.broker = broker;
    }
    handleRequestFailure(response) {
        // Normalize headers because Headers object cannot be serialized by postMessage.
        let headers = response.headers;
        if (Headers && response.headers instanceof Headers) {
            headers = {};
            response.headers.forEach((value, key) => {
                headers[key] = value;
            });
        }
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.handleRequestFailure.start(Object.assign(Object.assign({}, response), { headers })));
    }
    handleInvalidRoute(config) {
        this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.handleInvalidRoute(config || {}));
    }
    openErrorDialog(config) {
        function probeErrorMessage(reason) {
            if (reason == null) {
                return 'Unknown error';
            }
            if (reason instanceof Error) {
                return `${reason.name}: ${reason.message}`;
            }
            if (typeof reason === 'object') {
                try {
                    return JSON.stringify(reason);
                }
                catch (e) {
                    return `Unstructured Error: ${e instanceof Error ? e.message : e}`;
                }
            }
            return `${reason}`;
        }
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openError.start({
            errorMsg: probeErrorMessage(config.errorMsg),
            errorOptions: config.errorOptions,
            kind: config.kind,
            featureName: config.featureName,
            width: config.width,
            autoFocus: config.autoFocus,
        }));
    }
}
//# sourceMappingURL=error-handling-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/event-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/event-client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventClient: () => (/* binding */ EventClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class EventClient {
    constructor(broker) {
        this.broker = broker;
    }
    emitEvent(details) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.emitEvent(details));
    }
}
//# sourceMappingURL=event-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/navigation-client.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/navigation-client.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationClient: () => (/* binding */ NavigationClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class NavigationClient {
    constructor(broker) {
        this.broker = broker;
    }
    navigate(target, route) {
        return target === 'host'
            ? this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.navigateAsync.start(route))
            : this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.navigateExtensionAsync.start(route));
    }
    onNavigate(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onNavigate, callback);
    }
    onBeforeNavigateAway(callback) {
        this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeave, (leaveData) => {
            return callback(leaveData)
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeave.resolve(Object.assign({}, result)))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeave.reject({ error }));
        });
        this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.listenLeave.start());
    }
    onAfterNavigateAway(callback) {
        this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeaveEnd, (leaveEndData) => {
            return callback(leaveEndData)
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeaveEnd.resolve({ result }))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onLeaveEnd.reject({ error }));
        });
        this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.listenLeaveEnd.start());
    }
}
//# sourceMappingURL=navigation-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/error-handling-client.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/non-public/error-handling-client.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _ErrorHandlingClient: () => (/* binding */ _ErrorHandlingClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class _ErrorHandlingClient {
    constructor(broker) {
        this.broker = broker;
    }
    registerUnhandledExceptionHandler(config) {
        window.addEventListener('unhandledrejection', (event) => {
            event.preventDefault();
            let unhandledErrorMessage = 'Unknown Error';
            if (event.reason instanceof Error) {
                unhandledErrorMessage = event.reason.message;
            }
            this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.logEvent({
                name: 'Unhandled Exception',
                properties: { ErrorMessage: unhandledErrorMessage, IFrame: config.iframe },
            }));
        });
    }
}
//# sourceMappingURL=error-handling-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/interaction-client.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/non-public/interaction-client.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _InteractionClient: () => (/* binding */ _InteractionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class _InteractionClient {
    constructor(broker) {
        this.broker = broker;
    }
    postDOMEvent(config) {
        const defaultConfig = {
            eventInitDict: {
                bubbles: true,
                cancelable: true,
                composed: true,
            },
        };
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.postDOMEvent(Object.assign(Object.assign({}, defaultConfig), config)));
    }
    onResetFocus(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.resetFocus, callback);
    }
    onQueryDomRect(callback) {
        this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getDOMRect, (config) => {
            return callback(config)
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getDOMRect.resolve(Object.assign({}, result)))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getDOMRect.reject({ error }));
        });
    }
}
//# sourceMappingURL=interaction-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/telemetry-client.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/non-public/telemetry-client.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _TelemetryClient: () => (/* binding */ _TelemetryClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class _TelemetryClient {
    constructor(broker) {
        this.broker = broker;
    }
    logEvent(event) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.logEvent(event));
    }
    postLifecycleEvent(event) {
        this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.postLifecycleEvent(event));
    }
    postCdnFallbackEvent(event) {
        this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.postCdnFallbackEvent(event));
    }
}
//# sourceMappingURL=telemetry-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/notification-client.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/notification-client.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationClient: () => (/* binding */ NotificationClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class NotificationClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openNotification.start(config));
    }
    hide(config) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.hideNotification(config));
    }
}
//# sourceMappingURL=notification-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/page-client.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/page-client.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageClient: () => (/* binding */ PageClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class PageClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openPage.start(config));
    }
}
//# sourceMappingURL=page-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/panel-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/panel-client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelClient: () => (/* binding */ PanelClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class PanelClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openPanel.start(config));
    }
    close(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.closePanel.start(config || {}));
    }
}
//# sourceMappingURL=panel-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/permission-client.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/permission-client.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionClient: () => (/* binding */ PermissionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class PermissionClient {
    constructor(broker) {
        this.broker = broker;
    }
    checkPermissionsOfArtifact(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.checkPermissionsOfArtifact.start(input));
    }
    checkPermissionsOfWorkspace(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.checkPermissionsOfWorkspace.start(input));
    }
    getPermissionsOfArtifact(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getPermissionsOfArtifact.start(input));
    }
    getPermissionsOfArtifactByUser(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getPermissionsOfArtifactByUser.start(input));
    }
    getPermissionsOfWorkspace(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getPermissionsOfWorkspace.start(input));
    }
    openArtifactSharingDialog(config) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openArtifactSharingDialog(config));
    }
    openArtifactSharingDialogWithResult(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openArtifactSharingDialogWithResult.start(config));
    }
    checkArtifactSharingEnabled(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.checkArtifactSharingEnabled.start(input));
    }
    getArtifactTypeShareablePermissions(input) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getArtifactTypeShareablePermissions.start(input));
    }
}
//# sourceMappingURL=permission-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/settings-client.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/settings-client.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsClient: () => (/* binding */ SettingsClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class SettingsClient {
    constructor(broker) {
        this.broker = broker;
    }
    get() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getSettings.start());
    }
    onChange(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onSettingsChange, callback);
    }
}
//# sourceMappingURL=settings-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/state-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/state-client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateClient: () => (/* binding */ StateClient)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-message-broker has been published and added to package.json

const SHARED_STATE_KEY = Symbol.for('SHARED_STATE');
class StateClient {
    constructor(metaFactory, config) {
        this.metaFactory = metaFactory;
        this.config = config;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get sharedState() {
        if (this._sharedState) {
            return this._sharedState;
        }
        const meta = this.metaFactory();
        const worker = meta.iframeType === 'worker'
            ? window
            : Array.prototype.find.call(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.config.extensionHostWindow.frames, (frame) => {
                try {
                    return match(frame, meta.extensionName, 'worker');
                }
                catch (_a) {
                    return false;
                }
            });
        if (!worker) {
            throw new Error(`Cannot find the worker frame of ${meta.extensionName}`);
        }
        if (!worker[SHARED_STATE_KEY]) {
            Object.defineProperty(worker, SHARED_STATE_KEY, {
                value: {},
                writable: false,
                enumerable: false,
                configurable: false,
            });
        }
        return (this._sharedState = worker[SHARED_STATE_KEY]);
    }
}
function match(target, extensionName, iframeType) {
    const meta = _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.ExtensionMetaLoader.Load(target);
    return meta.iframeType === iframeType && meta.extensionName === extensionName;
}
//# sourceMappingURL=state-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/subfolder-client.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/subfolder-client.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubfolderClient: () => (/* binding */ SubfolderClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class SubfolderClient {
    constructor(broker) {
        this.broker = broker;
    }
    openSubfolderPickerDialog(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openSubfolderPickerDialog.start(config));
    }
}
//# sourceMappingURL=subfolder-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/clients/theme-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/clients/theme-client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeClient: () => (/* binding */ ThemeClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ThemeClient {
    constructor(broker) {
        this.broker = broker;
    }
    get() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getTheme.start());
    }
    onChange(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onThemeChange, callback);
    }
}
//# sourceMappingURL=theme-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-job.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-job.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-job.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-settings.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-settings.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-sharing.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-sharing.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Permissions: () => (/* binding */ Permissions),
/* harmony export */   SharingLinkType: () => (/* binding */ SharingLinkType)
/* harmony export */ });
var Permissions;
(function (Permissions) {
    Permissions[Permissions["None"] = 0] = "None";
    Permissions[Permissions["Read"] = 1] = "Read";
    Permissions[Permissions["Write"] = 2] = "Write";
    Permissions[Permissions["ReShare"] = 4] = "ReShare";
    Permissions[Permissions["Explore"] = 8] = "Explore";
    Permissions[Permissions["CopyOnWrite"] = 16] = "CopyOnWrite";
    Permissions[Permissions["WriteCheckRelaxForReadOnlyGroup"] = 32] = "WriteCheckRelaxForReadOnlyGroup";
    Permissions[Permissions["Execute"] = 64] = "Execute";
    Permissions[Permissions["ReadExplore"] = 9] = "ReadExplore";
    Permissions[Permissions["ReadWrite"] = 3] = "ReadWrite";
    Permissions[Permissions["ReadWriteCheckRelaxForReadOnlyGroup"] = 35] = "ReadWriteCheckRelaxForReadOnlyGroup";
    Permissions[Permissions["ReadReshare"] = 5] = "ReadReshare";
    Permissions[Permissions["All"] = 7] = "All";
})(Permissions || (Permissions = {}));
var SharingLinkType;
(function (SharingLinkType) {
    SharingLinkType["TenantOnly"] = "TenantOnly";
    SharingLinkType["SpecificPeople"] = "SpecificPeople";
    SharingLinkType["ExistingAccess"] = "ExistingAccess";
})(SharingLinkType || (SharingLinkType = {}));
//# sourceMappingURL=artifact-sharing.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/auth.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/auth.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/bootstrap.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/bootstrap.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultExtensionClientConfig: () => (/* binding */ DefaultExtensionClientConfig)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
const DefaultExtensionClientConfig = {
    extensionHostWindow: window.parent,
};
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/datahub-wizard.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/datahub-wizard.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company='Microsoft Corporation'>
//        Copyright (c) Microsoft Corporation. All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=datahub-wizard.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/datahub.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/datahub.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatahubFilterType: () => (/* binding */ DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* binding */ DatahubListPivot),
/* harmony export */   DisplayColumn: () => (/* binding */ DisplayColumn),
/* harmony export */   GatewayType: () => (/* binding */ GatewayType),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* binding */ SupportedDatahubStyleProperties)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var DatahubListPivot;
(function (DatahubListPivot) {
    DatahubListPivot[DatahubListPivot["All"] = 0] = "All";
    DatahubListPivot[DatahubListPivot["MyData"] = 1] = "MyData";
    DatahubListPivot[DatahubListPivot["TrustedInYourOrg"] = 2] = "TrustedInYourOrg";
    DatahubListPivot[DatahubListPivot["ThisWorkspace"] = 3] = "ThisWorkspace";
    DatahubListPivot[DatahubListPivot["ExternalDatasets"] = 4] = "ExternalDatasets";
    DatahubListPivot[DatahubListPivot["Recommended"] = 5] = "Recommended";
    DatahubListPivot[DatahubListPivot["Recent"] = 6] = "Recent";
    DatahubListPivot[DatahubListPivot["Favorites"] = 7] = "Favorites";
})(DatahubListPivot || (DatahubListPivot = {}));
var DatahubFilterType;
(function (DatahubFilterType) {
    DatahubFilterType["domain"] = "domain";
    DatahubFilterType["workspace"] = "workspace";
    DatahubFilterType["tridentCreateShortcut"] = "tridentCreateShortcut";
})(DatahubFilterType || (DatahubFilterType = {}));
var DisplayColumn;
(function (DisplayColumn) {
    DisplayColumn["Icon"] = "icon";
    DisplayColumn["Name"] = "name";
    DisplayColumn["Type"] = "type";
    DisplayColumn["Endorsement"] = "endorsement";
    DisplayColumn["Owner"] = "owner";
    DisplayColumn["Workspace"] = "workspaceName";
    DisplayColumn["LastRefreshed"] = "lastRefreshed";
    DisplayColumn["Sensitivity"] = "sensitivity";
    DisplayColumn["LastAccessed"] = "lastAccessed";
    DisplayColumn["NextRefresh"] = "nextRefresh";
    DisplayColumn["Organization"] = "organization";
    DisplayColumn["Region"] = "region";
})(DisplayColumn || (DisplayColumn = {}));
var SupportedDatahubStyleProperties;
(function (SupportedDatahubStyleProperties) {
    SupportedDatahubStyleProperties["searchHighlightColor"] = "searchHighlightColor";
    SupportedDatahubStyleProperties["lighterDialogBackgroundColor"] = "lighterDialogBackgroundColor";
    /* row */
    SupportedDatahubStyleProperties["selectedRowColor"] = "selectedRowColor";
    SupportedDatahubStyleProperties["hoverRowColor"] = "hoverRowColor";
    SupportedDatahubStyleProperties["rowBorderColor"] = "rowBorderColor";
    SupportedDatahubStyleProperties["rowForegroundColor"] = "rowForegroundColor";
    /* pill */
    SupportedDatahubStyleProperties["pillColor"] = "pillColor";
    SupportedDatahubStyleProperties["pillBorderColor"] = "pillBorderColor";
    SupportedDatahubStyleProperties["pillBackgroundColor"] = "pillBackgroundColor";
    SupportedDatahubStyleProperties["activePillColor"] = "activePillColor";
    SupportedDatahubStyleProperties["activePillBackgroundColor"] = "activePillBackgroundColor";
    SupportedDatahubStyleProperties["pillHoverBackgroundColor"] = "pillHoverBackgroundColor";
    /* endorsement */
    SupportedDatahubStyleProperties["endorsementForegroundColor"] = "endorsementForegroundColor";
    /* explorer - datahub workspace navigation*/
    SupportedDatahubStyleProperties["hoverDWBColor"] = "hoverDWBColor";
    SupportedDatahubStyleProperties["pressedDWBColor"] = "pressedDWBColor";
    SupportedDatahubStyleProperties["selectedDWBColor"] = "selectedDWBColor";
    SupportedDatahubStyleProperties["foregroundWSExpandIconColor"] = "foregroundWSExpandIconColor";
    SupportedDatahubStyleProperties["foregroundWSTitleColor"] = "foregroundWSTitleColor";
    SupportedDatahubStyleProperties["foregroundWSSubTitleColor"] = "foregroundWSSubTitleColor";
    SupportedDatahubStyleProperties["foregroundDWBColor"] = "foregroundDWBColor";
    SupportedDatahubStyleProperties["foregroundDWBIconColor"] = "foregroundDWBIconColor";
})(SupportedDatahubStyleProperties || (SupportedDatahubStyleProperties = {}));
var GatewayType;
(function (GatewayType) {
    GatewayType["Resource"] = "Resource";
    GatewayType["Personal"] = "Personal";
    GatewayType["VirtualNetwork"] = "VirtualNetwork";
    GatewayType["TenantCloud"] = "TenantCloud";
})(GatewayType || (GatewayType = {}));
//# sourceMappingURL=datahub.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/dialog.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/dialog.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonType: () => (/* binding */ ButtonType),
/* harmony export */   DialogType: () => (/* binding */ DialogType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var DialogType;
(function (DialogType) {
    DialogType[DialogType["IFrame"] = 0] = "IFrame";
    DialogType[DialogType["MessageBox"] = 1] = "MessageBox";
})(DialogType || (DialogType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Default"] = 0] = "Default";
    ButtonType[ButtonType["Primary"] = 1] = "Primary";
})(ButtonType || (ButtonType = {}));
//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/dom.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/dom.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/error.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/error.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialogWidth: () => (/* binding */ ErrorDialogWidth),
/* harmony export */   ErrorKind: () => (/* binding */ ErrorKind),
/* harmony export */   ErrorSource: () => (/* binding */ ErrorSource)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var ErrorDialogWidth;
(function (ErrorDialogWidth) {
    ErrorDialogWidth["Small"] = "288px";
    ErrorDialogWidth["Medium"] = "576px";
    ErrorDialogWidth["Large"] = "864px";
    ErrorDialogWidth["XLarge"] = "1440px";
})(ErrorDialogWidth || (ErrorDialogWidth = {}));
var ErrorSource;
(function (ErrorSource) {
    ErrorSource["TridentExtension"] = "TridentExtension";
    ErrorSource["ExtensionHost"] = "ExtensionHost";
    ErrorSource["ExtensionSDK"] = "ExtensionSDK";
})(ErrorSource || (ErrorSource = {}));
var ErrorKind;
(function (ErrorKind) {
    ErrorKind[ErrorKind["Error"] = 1] = "Error";
    ErrorKind[ErrorKind["Fatal"] = 2] = "Fatal";
    ErrorKind[ErrorKind["Warning"] = 3] = "Warning";
    ErrorKind[ErrorKind["Custom"] = 4] = "Custom";
})(ErrorKind || (ErrorKind = {}));
//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/event.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/event.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExposeTo: () => (/* binding */ ExposeTo),
/* harmony export */   PreDefinedEventName: () => (/* binding */ PreDefinedEventName)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
/**
 *  Predefined events that will be exposed to all consumers when they are emitted
 */
const PreDefinedEventName = ['loaded', 'rendered', 'error'];
var ExposeTo;
(function (ExposeTo) {
    ExposeTo[ExposeTo["Embed"] = 1] = "Embed";
    /**
    *  Includes all available consumers
    */
    ExposeTo[ExposeTo["All"] = 1] = "All";
})(ExposeTo || (ExposeTo = {}));
//# sourceMappingURL=event.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/extension-action.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/extension-action.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreDefinedExtensionAction: () => (/* binding */ PreDefinedExtensionAction)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var PreDefinedExtensionAction;
(function (PreDefinedExtensionAction) {
    PreDefinedExtensionAction["getArtifactActionDynamicAttrs"] = "getArtifactActionDynamicAttrs";
    PreDefinedExtensionAction["getHelpPaneData"] = "getHelpPaneData";
})(PreDefinedExtensionAction || (PreDefinedExtensionAction = {}));
//# sourceMappingURL=extension-action.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonType: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_7__.ButtonType),
/* harmony export */   CloseMode: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_22__.CloseMode),
/* harmony export */   DatahubFilterType: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_5__.DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_5__.DatahubListPivot),
/* harmony export */   DefaultExtensionClientConfig: () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_4__.DefaultExtensionClientConfig),
/* harmony export */   DialogType: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_7__.DialogType),
/* harmony export */   DisplayColumn: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_5__.DisplayColumn),
/* harmony export */   ErrorDialogWidth: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_9__.ErrorDialogWidth),
/* harmony export */   ErrorKind: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_9__.ErrorKind),
/* harmony export */   ErrorSource: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_9__.ErrorSource),
/* harmony export */   ExposeTo: () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_10__.ExposeTo),
/* harmony export */   ExtensionHostApp: () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_19__.ExtensionHostApp),
/* harmony export */   ExtensionLoadEventType: () => (/* reexport safe */ _telemetry__WEBPACK_IMPORTED_MODULE_21__.ExtensionLoadEventType),
/* harmony export */   GatewayType: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_5__.GatewayType),
/* harmony export */   LifecycleEventType: () => (/* reexport safe */ _telemetry__WEBPACK_IMPORTED_MODULE_21__.LifecycleEventType),
/* harmony export */   MessageBarType: () => (/* reexport safe */ _message_bar__WEBPACK_IMPORTED_MODULE_12__.MessageBarType),
/* harmony export */   NotificationToastDuration: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_14__.NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_14__.NotificationType),
/* harmony export */   OnelakeExplorerType: () => (/* reexport safe */ _onelake_explorer__WEBPACK_IMPORTED_MODULE_15__.OnelakeExplorerType),
/* harmony export */   OpenMode: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_22__.OpenMode),
/* harmony export */   OpenNotificationButtonType: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_14__.OpenNotificationButtonType),
/* harmony export */   Permissions: () => (/* reexport safe */ _artifact_sharing__WEBPACK_IMPORTED_MODULE_2__.Permissions),
/* harmony export */   PreDefinedEventName: () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_10__.PreDefinedEventName),
/* harmony export */   PreDefinedExtensionAction: () => (/* reexport safe */ _extension_action__WEBPACK_IMPORTED_MODULE_11__.PreDefinedExtensionAction),
/* harmony export */   SharingLinkType: () => (/* reexport safe */ _artifact_sharing__WEBPACK_IMPORTED_MODULE_2__.SharingLinkType),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_5__.SupportedDatahubStyleProperties)
/* harmony export */ });
/* harmony import */ var _artifact_job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artifact-job */ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-job.js");
/* harmony import */ var _artifact_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artifact-settings */ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-settings.js");
/* harmony import */ var _artifact_sharing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact-sharing */ "./node_modules/@trident/extension-client-common/src/lib/contracts/artifact-sharing.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ "./node_modules/@trident/extension-client-common/src/lib/contracts/auth.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap */ "./node_modules/@trident/extension-client-common/src/lib/contracts/bootstrap.js");
/* harmony import */ var _datahub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datahub */ "./node_modules/@trident/extension-client-common/src/lib/contracts/datahub.js");
/* harmony import */ var _datahub_wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datahub-wizard */ "./node_modules/@trident/extension-client-common/src/lib/contracts/datahub-wizard.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog */ "./node_modules/@trident/extension-client-common/src/lib/contracts/dialog.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom */ "./node_modules/@trident/extension-client-common/src/lib/contracts/dom.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error */ "./node_modules/@trident/extension-client-common/src/lib/contracts/error.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event */ "./node_modules/@trident/extension-client-common/src/lib/contracts/event.js");
/* harmony import */ var _extension_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extension-action */ "./node_modules/@trident/extension-client-common/src/lib/contracts/extension-action.js");
/* harmony import */ var _message_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message-bar */ "./node_modules/@trident/extension-client-common/src/lib/contracts/message-bar.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation */ "./node_modules/@trident/extension-client-common/src/lib/contracts/navigation.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notification */ "./node_modules/@trident/extension-client-common/src/lib/contracts/notification.js");
/* harmony import */ var _onelake_explorer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./onelake-explorer */ "./node_modules/@trident/extension-client-common/src/lib/contracts/onelake-explorer.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page */ "./node_modules/@trident/extension-client-common/src/lib/contracts/page.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./panel */ "./node_modules/@trident/extension-client-common/src/lib/contracts/panel.js");
/* harmony import */ var _perf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./perf */ "./node_modules/@trident/extension-client-common/src/lib/contracts/perf.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings */ "./node_modules/@trident/extension-client-common/src/lib/contracts/settings.js");
/* harmony import */ var _subfolder__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subfolder */ "./node_modules/@trident/extension-client-common/src/lib/contracts/subfolder.js");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./telemetry */ "./node_modules/@trident/extension-client-common/src/lib/contracts/telemetry.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui */ "./node_modules/@trident/extension-client-common/src/lib/contracts/ui.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/message-bar.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/message-bar.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBarType: () => (/* binding */ MessageBarType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var MessageBarType;
(function (MessageBarType) {
    MessageBarType[MessageBarType["Information"] = 0] = "Information";
    MessageBarType[MessageBarType["Error"] = 1] = "Error";
    MessageBarType[MessageBarType["Warning"] = 2] = "Warning";
    MessageBarType[MessageBarType["Success"] = 3] = "Success";
    // SevereWarning = 4 has been deprecated
    MessageBarType[MessageBarType["Blocked"] = 5] = "Blocked";
    MessageBarType[MessageBarType["Copilot"] = 6] = "Copilot";
})(MessageBarType || (MessageBarType = {}));
//# sourceMappingURL=message-bar.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/navigation.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/navigation.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/notification.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/notification.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationToastDuration: () => (/* binding */ NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* binding */ NotificationType),
/* harmony export */   OpenNotificationButtonType: () => (/* binding */ OpenNotificationButtonType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// TODO: Task 769816 Remove duplicated typings definition
var NotificationType;
(function (NotificationType) {
    /** @deprecated */
    NotificationType[NotificationType["Default"] = 0] = "Default";
    /** @deprecated */
    NotificationType[NotificationType["Alert"] = 1] = "Alert";
    NotificationType[NotificationType["Error"] = 2] = "Error";
    NotificationType[NotificationType["Loading"] = 3] = "Loading";
    NotificationType[NotificationType["Success"] = 4] = "Success";
    NotificationType[NotificationType["Warning"] = 5] = "Warning";
    NotificationType[NotificationType["Share"] = 6] = "Share";
    NotificationType[NotificationType["Info"] = 7] = "Info";
    /** @deprecated */
    NotificationType[NotificationType["NoIcon"] = 8] = "NoIcon";
    /** @deprecated */
    NotificationType[NotificationType["Delete"] = 10] = "Delete";
    /** @deprecated */
    NotificationType[NotificationType["Add"] = 11] = "Add";
    /** @deprecated */
    NotificationType[NotificationType["Feedback"] = 12] = "Feedback";
})(NotificationType || (NotificationType = {}));
var NotificationToastDuration;
(function (NotificationToastDuration) {
    NotificationToastDuration["Short"] = "Short";
    NotificationToastDuration["Medium"] = "Medium";
    NotificationToastDuration["Long"] = "Long";
})(NotificationToastDuration || (NotificationToastDuration = {}));
var OpenNotificationButtonType;
(function (OpenNotificationButtonType) {
    OpenNotificationButtonType[OpenNotificationButtonType["Primary"] = 1] = "Primary";
    OpenNotificationButtonType[OpenNotificationButtonType["Secondary"] = 2] = "Secondary";
    OpenNotificationButtonType[OpenNotificationButtonType["Link"] = 3] = "Link";
})(OpenNotificationButtonType || (OpenNotificationButtonType = {}));
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/onelake-explorer.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/onelake-explorer.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnelakeExplorerType: () => (/* binding */ OnelakeExplorerType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var OnelakeExplorerType;
(function (OnelakeExplorerType) {
    OnelakeExplorerType["Tables"] = "Tables";
    OnelakeExplorerType["Files"] = "Files";
})(OnelakeExplorerType || (OnelakeExplorerType = {}));
//# sourceMappingURL=onelake-explorer.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/page.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/page.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=page.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/panel.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/panel.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=panel.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/perf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/perf.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=perf.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/settings.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/settings.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionHostApp: () => (/* binding */ ExtensionHostApp)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var ExtensionHostApp;
(function (ExtensionHostApp) {
    ExtensionHostApp[ExtensionHostApp["FabricWebApp"] = 0] = "FabricWebApp";
    ExtensionHostApp[ExtensionHostApp["EmbedApp"] = 1] = "EmbedApp";
})(ExtensionHostApp || (ExtensionHostApp = {}));
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/subfolder.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/subfolder.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=subfolder.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/telemetry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/telemetry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionLoadEventType: () => (/* binding */ ExtensionLoadEventType),
/* harmony export */   LifecycleEventType: () => (/* binding */ LifecycleEventType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var LifecycleEventType;
(function (LifecycleEventType) {
    LifecycleEventType[LifecycleEventType["InitSucceeded"] = 1] = "InitSucceeded";
    LifecycleEventType[LifecycleEventType["InitFailed"] = 2] = "InitFailed";
})(LifecycleEventType || (LifecycleEventType = {}));
var ExtensionLoadEventType;
(function (ExtensionLoadEventType) {
    ExtensionLoadEventType["ExtensionBootstrap"] = "ExtensionBootstrap";
})(ExtensionLoadEventType || (ExtensionLoadEventType = {}));
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/contracts/ui.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/contracts/ui.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseMode: () => (/* binding */ CloseMode),
/* harmony export */   OpenMode: () => (/* binding */ OpenMode)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var OpenMode;
(function (OpenMode) {
    OpenMode[OpenMode["Append"] = 1] = "Append";
    OpenMode[OpenMode["ReplaceAll"] = 2] = "ReplaceAll";
})(OpenMode || (OpenMode = {}));
var CloseMode;
(function (CloseMode) {
    CloseMode[CloseMode["PopOne"] = 1] = "PopOne";
    CloseMode[CloseMode["ClearAll"] = 2] = "ClearAll";
})(CloseMode || (CloseMode = {}));
//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/extension-bootstrap.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/extension-bootstrap.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* binding */ bootstrap)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/index.js");
/* harmony import */ var _extension_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension-client */ "./node_modules/@trident/extension-client-common/src/lib/extension-client.js");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contracts */ "./node_modules/@trident/extension-client-common/src/lib/contracts/index.js");
/* harmony import */ var _extension_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extension-version */ "./node_modules/@trident/extension-client-common/src/lib/extension-version.js");
/* harmony import */ var _utils_event_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/event-generator */ "./node_modules/@trident/extension-client-common/src/lib/utils/event-generator.js");
/* harmony import */ var _utils_perf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/perf */ "./node_modules/@trident/extension-client-common/src/lib/utils/perf.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-message-broker has been published and added to package.json






/**
 * @description
 * Every extension app needs to support being loaded in two modes:
 * - **UI mode**: App in UI mode is loaded in visible IFrames and listens for its own route changes
 * to render corresponding UI components, including pages, panels, dialogs, and so on.
 * - **Worker mode**: App in worker mode runs in an invisible IFrame, which is mainly used to receive
 * commands sent from the outside world and respond to them.
 *
 * The bootstrap() method is to simplify the initialization steps. The bootstrap() method internally
 * detects whether the current App is loaded in UI mode or worker mode, and then call the appropriate
 * initialization method (initializeUI vs. initializeWorker). After the initialization is complete,
 * it notifies Trident micro-frontend framework of the initialization success or failure.
 *
 * @returns promise which resolves when the initialization is complete.
 */
function bootstrap(config) {
    var _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
        const { iframeType, environmentName, iframeId, extensionName, bootstrapPath, cdnFallbackTime } = _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.ExtensionMetaLoader.Load();
        const client = new _extension_client__WEBPACK_IMPORTED_MODULE_1__.ExtensionClient({
            extensionHostWindow: (_a = config.extensionHostWindow) !== null && _a !== void 0 ? _a : _contracts__WEBPACK_IMPORTED_MODULE_2__.DefaultExtensionClientConfig.extensionHostWindow
        });
        const params = {
            environmentName,
            bootstrapPath: bootstrapPath ? (bootstrapPath.startsWith('/') ? bootstrapPath : `/${bootstrapPath}`) : null,
        };
        window.performance.mark("TridentExtensionBootstrapLoadStartTimestamp");
        try {
            if (iframeType === 'worker') {
                yield config.initializeWorker(params);
            }
            else {
                yield config.initializeUI(params);
                client._interaction.onResetFocus((config) => {
                    const allTabbable = document.body.querySelectorAll('input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])');
                    if (allTabbable.length > 0) {
                        if (config.index === 'first') {
                            allTabbable[0].focus();
                        }
                        else {
                            allTabbable[allTabbable.length - 1].focus();
                        }
                    }
                });
                if (iframeType === 'page' || iframeType === 'panel') {
                    window.performance.mark("TridentExtensionBootstrapLoadEndTimestamp");
                    const extensionBootstrapStartTimeMarker = window.performance.getEntriesByName("TridentExtensionBootstrapLoadStartTimestamp", "mark");
                    const extensionBootstrapEndTimeMarker = window.performance.getEntriesByName("TridentExtensionBootstrapLoadEndTimestamp", "mark");
                    const extensionBootstrapStartTimestamp = (extensionBootstrapStartTimeMarker === null || extensionBootstrapStartTimeMarker === void 0 ? void 0 : extensionBootstrapStartTimeMarker.length) > 0 ? extensionBootstrapStartTimeMarker[0].startTime : 0;
                    const extensionBootstrapEndTimestamp = (extensionBootstrapEndTimeMarker === null || extensionBootstrapEndTimeMarker === void 0 ? void 0 : extensionBootstrapEndTimeMarker.length) > 0 ? extensionBootstrapEndTimeMarker[0].startTime : 0;
                    client._telemetry.logEvent({
                        name: _contracts__WEBPACK_IMPORTED_MODULE_2__.ExtensionLoadEventType.ExtensionBootstrap,
                        properties: (0,_utils_event_generator__WEBPACK_IMPORTED_MODULE_4__.populateExtensionLoadPerformanceTelemetry)({
                            extensionBootstrapStartTimestamp,
                            extensionBootstrapEndTimestamp,
                            clientVersion: _extension_version__WEBPACK_IMPORTED_MODULE_3__.CLIENT_VERSION,
                            extensionName,
                            iframeId,
                        })
                    });
                    client._interaction.onQueryDomRect((config) => {
                        const { selector, setFocus } = config;
                        let target;
                        if (selector) {
                            target = document.querySelector(selector);
                        }
                        if (!target || !selector) {
                            return Promise.resolve({ isSucceed: false });
                        }
                        else {
                            const rect = target.getBoundingClientRect();
                            if (setFocus) {
                                target.focus();
                            }
                            return Promise.resolve({
                                isSucceed: true,
                                rect
                            });
                        }
                    });
                }
                registerDocumentEventListeners(client);
            }
            client._errorHandling.registerUnhandledExceptionHandler({ iframe: iframeType });
            const extensionBootstrapStartTimeMarker = window.performance.getEntriesByName("TridentExtensionBootstrapLoadStartTimestamp", "mark");
            const extensionBootstrapStart = (extensionBootstrapStartTimeMarker === null || extensionBootstrapStartTimeMarker === void 0 ? void 0 : extensionBootstrapStartTimeMarker.length) > 0 ? extensionBootstrapStartTimeMarker[0].startTime : 0;
            const extensionBootstrapEnd = performance.now();
            client._telemetry.postLifecycleEvent({
                name: _contracts__WEBPACK_IMPORTED_MODULE_2__.LifecycleEventType.InitSucceeded,
                properties: Object.assign({ clientVersion: _extension_version__WEBPACK_IMPORTED_MODULE_3__.CLIENT_VERSION, iframeType,
                    iframeId,
                    extensionName, isCDNFallback: cdnFallbackTime != null }, (0,_utils_perf__WEBPACK_IMPORTED_MODULE_5__.getExtensionPerformance)({ extensionBootstrapStart, extensionBootstrapEnd }))
            });
        }
        catch (error) {
            client._telemetry.postLifecycleEvent({
                name: _contracts__WEBPACK_IMPORTED_MODULE_2__.LifecycleEventType.InitFailed,
                properties: {
                    error: String(error),
                    clientVersion: _extension_version__WEBPACK_IMPORTED_MODULE_3__.CLIENT_VERSION,
                    isCDNFallback: cdnFallbackTime != null,
                },
            });
        }
        finally {
            flushEventAndInit(client);
            postCDNFallbackMessage(client, extensionName, cdnFallbackTime);
        }
    });
}
function registerDocumentEventListeners(client) {
    document.addEventListener('click', (event) => {
        client._interaction.postDOMEvent({ eventType: event.type });
    });
    document.addEventListener('keydown', (event) => {
        client._interaction.postDOMEvent({
            eventType: event.type,
            eventProps: {
                key: event.key
            }
        });
    });
    document.addEventListener('keyup', (event) => {
        client._interaction.postDOMEvent({
            eventType: event.type,
            eventProps: {
                key: event.key
            }
        });
    });
}
function flushEventAndInit(client) {
    let cachedEvents = [];
    try {
        const cachedEventsJSON = sessionStorage.getItem('cachedEvents');
        if (cachedEventsJSON) {
            cachedEvents = JSON.parse(cachedEventsJSON);
        }
    }
    catch (exception) {
        client._telemetry.logEvent({
            name: 'ParseCachedEventsFailed',
            properties: { error: String(exception) }
        });
    }
    for (const event of cachedEvents) {
        client._telemetry.logEvent(event);
    }
    try {
        sessionStorage.removeItem('cachedEvents');
    }
    catch (exception) {
        console.error(exception);
    }
    window.logEvent = client._telemetry.logEvent.bind(client._telemetry);
}
function postCDNFallbackMessage(client, extensionName, cdnFallbackTime) {
    if (cdnFallbackTime) {
        client._telemetry.postCdnFallbackEvent({
            extensionName: extensionName,
            timestamp: cdnFallbackTime !== null && cdnFallbackTime !== void 0 ? cdnFallbackTime : Date.now().toString(),
        });
    }
}
//# sourceMappingURL=extension-bootstrap.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/extension-client.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/extension-client.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionClient: () => (/* binding */ ExtensionClient),
/* harmony export */   createExtensionClient: () => (/* binding */ createExtensionClient)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/index.js");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts */ "./node_modules/@trident/extension-client-common/src/lib/contracts/index.js");
/* harmony import */ var _clients_non_public_error_handling_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients/non-public/error-handling-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/error-handling-client.js");
/* harmony import */ var _clients_non_public_interaction_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/non-public/interaction-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/interaction-client.js");
/* harmony import */ var _clients_non_public_telemetry_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/non-public/telemetry-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/non-public/telemetry-client.js");
/* harmony import */ var _clients_action_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients/action-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/action-client.js");
/* harmony import */ var _clients_artifact_recent_runs_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/artifact-recent-runs-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/artifact-recent-runs-client.js");
/* harmony import */ var _clients_artifact_settings_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/artifact-settings-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/artifact-settings-client.js");
/* harmony import */ var _clients_auth_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients/auth-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/auth-client.js");
/* harmony import */ var _clients_datahub_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients/datahub-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/datahub-client.js");
/* harmony import */ var _clients_dialog_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients/dialog-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/dialog-client.js");
/* harmony import */ var _clients_error_handling_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients/error-handling-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/error-handling-client.js");
/* harmony import */ var _clients_event_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/event-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/event-client.js");
/* harmony import */ var _clients_navigation_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/navigation-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/navigation-client.js");
/* harmony import */ var _clients_notification_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/notification-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/notification-client.js");
/* harmony import */ var _clients_page_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients/page-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/page-client.js");
/* harmony import */ var _clients_panel_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/panel-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/panel-client.js");
/* harmony import */ var _clients_permission_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients/permission-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/permission-client.js");
/* harmony import */ var _clients_settings_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients/settings-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/settings-client.js");
/* harmony import */ var _clients_state_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clients/state-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/state-client.js");
/* harmony import */ var _clients_subfolder_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./clients/subfolder-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/subfolder-client.js");
/* harmony import */ var _clients_theme_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clients/theme-client */ "./node_modules/@trident/extension-client-common/src/lib/clients/theme-client.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-message-broker has been published and added to package.json






















class ExtensionClient {
    constructor(config = _contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig) {
        this.config = config;
        this.broker = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionClientMessageBroker)({ getIframeId: () => this.meta.iframeId, extensionHostWindow: this.config.extensionHostWindow });
        /** @internal */
        this._errorHandling = new _clients_non_public_error_handling_client__WEBPACK_IMPORTED_MODULE_2__._ErrorHandlingClient(this.broker);
        /** @internal */
        this._interaction = new _clients_non_public_interaction_client__WEBPACK_IMPORTED_MODULE_3__._InteractionClient(this.broker);
        /** @internal */
        this._telemetry = new _clients_non_public_telemetry_client__WEBPACK_IMPORTED_MODULE_4__._TelemetryClient(this.broker);
        /** @internal */
        this.auth = new _clients_auth_client__WEBPACK_IMPORTED_MODULE_8__.AuthClient(this.broker);
        this.action = new _clients_action_client__WEBPACK_IMPORTED_MODULE_5__.ActionClient(this.broker);
        this.artifactRecentRuns = new _clients_artifact_recent_runs_client__WEBPACK_IMPORTED_MODULE_6__.ArtifactRecentRunsClient(this.broker);
        this.artifactSettings = new _clients_artifact_settings_client__WEBPACK_IMPORTED_MODULE_7__.ArtifactSettingsClient(this.broker);
        this.dialog = new _clients_dialog_client__WEBPACK_IMPORTED_MODULE_10__.DialogClient(this.broker);
        this.datahub = new _clients_datahub_client__WEBPACK_IMPORTED_MODULE_9__.DatahubClient(this.broker);
        this.errorHandling = new _clients_error_handling_client__WEBPACK_IMPORTED_MODULE_11__.ErrorHandlingClient(this.broker);
        this.event = new _clients_event_client__WEBPACK_IMPORTED_MODULE_12__.EventClient(this.broker);
        this.navigation = new _clients_navigation_client__WEBPACK_IMPORTED_MODULE_13__.NavigationClient(this.broker);
        this.notification = new _clients_notification_client__WEBPACK_IMPORTED_MODULE_14__.NotificationClient(this.broker);
        this.page = new _clients_page_client__WEBPACK_IMPORTED_MODULE_15__.PageClient(this.broker);
        this.panel = new _clients_panel_client__WEBPACK_IMPORTED_MODULE_16__.PanelClient(this.broker);
        this.permission = new _clients_permission_client__WEBPACK_IMPORTED_MODULE_17__.PermissionClient(this.broker);
        this.settings = new _clients_settings_client__WEBPACK_IMPORTED_MODULE_18__.SettingsClient(this.broker);
        this.state = new _clients_state_client__WEBPACK_IMPORTED_MODULE_19__.StateClient(() => this.meta, this.config);
        this.subfolder = new _clients_subfolder_client__WEBPACK_IMPORTED_MODULE_20__.SubfolderClient(this.broker);
        this.theme = new _clients_theme_client__WEBPACK_IMPORTED_MODULE_21__.ThemeClient(this.broker);
        if (!config.extensionHostWindow) {
            throw new Error('Create extension client failed: empty extension host window');
        }
    }
    get meta() {
        return _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.ExtensionMetaLoader.Load();
    }
}
/**
 * @description create an extension client instance.
 *
 * @returns the extension client instance
 *
 * @param config configuration of the extension client, optional with default config:
    * - `extensionHostWindow` – A window object - Reference to the extension host window, usefully when extensions have nested frames and use the extension client library in the inner frame - optional with default value to window.parent!.
 */
function createExtensionClient(config = _contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig) {
    return new ExtensionClient(config);
}
//# sourceMappingURL=extension-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/extension-messages.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/extension-messages.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionMessageType: () => (/* binding */ ExtensionMessageType),
/* harmony export */   Messages: () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-message-broker has been published and added to package.json

var ExtensionMessageType;
(function (ExtensionMessageType) {
    ExtensionMessageType["executeAction"] = "ExecuteAction";
    ExtensionMessageType["onAction"] = "OnAction";
    ExtensionMessageType["navigateAsync"] = "NavigateAsync";
    ExtensionMessageType["navigateExtensionAsync"] = "NavigateExtensionAsync";
    ExtensionMessageType["onNavigate"] = "OnNavigate";
    ExtensionMessageType["listenLeave"] = "ListenLeave";
    ExtensionMessageType["onLeave"] = "OnLeave";
    ExtensionMessageType["listenLeaveEnd"] = "ListenLeaveEnd";
    ExtensionMessageType["onLeaveEnd"] = "OnLeaveEnd";
    ExtensionMessageType["getAccessToken"] = "GetAccessToken";
    ExtensionMessageType["getSettings"] = "GetSettings";
    ExtensionMessageType["onSettingsChange"] = "OnSettingsChange";
    ExtensionMessageType["openNotification"] = "OpenNotification";
    ExtensionMessageType["hideNotification"] = "hideNotification";
    ExtensionMessageType["openPage"] = "OpenPage";
    ExtensionMessageType["openDatahubDialog"] = "OpenDatahubDialog";
    ExtensionMessageType["openDatahubWizardDialog"] = "OpenDatahubWizardDialog";
    ExtensionMessageType["openDialog"] = "OpenDialog";
    ExtensionMessageType["closeDialog"] = "CloseDialog";
    ExtensionMessageType["openPanel"] = "OpenPanel";
    ExtensionMessageType["closePanel"] = "ClosePanel";
    ExtensionMessageType["logEvent"] = "LogEvent";
    ExtensionMessageType["postLifecycleEvent"] = "PostLifecycleEvent";
    ExtensionMessageType["postDOMEvent"] = "PostDOMEvent";
    ExtensionMessageType["getDOMRect"] = "GetDOMRect";
    ExtensionMessageType["resetFocus"] = "ResetFocus";
    ExtensionMessageType["getTheme"] = "GetTheme";
    ExtensionMessageType["onThemeChange"] = "OnThemeChange";
    ExtensionMessageType["openArtifactRecentRuns"] = "OpenArtifactRecentRuns";
    ExtensionMessageType["handleRequestFailure"] = "HandleRequestFailure";
    ExtensionMessageType["handleInvalidRoute"] = "HandleInvalidRoute";
    ExtensionMessageType["openError"] = "openError";
    ExtensionMessageType["emitEvent"] = "EmitEvent";
    ExtensionMessageType["checkPermissionsOfArtifact"] = "CheckPermissionsOfArtifact";
    ExtensionMessageType["checkPermissionsOfWorkspace"] = "CheckPermissionsOfWorkspace";
    ExtensionMessageType["getPermissionsOfArtifact"] = "GetPermissionsOfArtifact";
    ExtensionMessageType["getPermissionsOfArtifactByUser"] = "GetPermissionsOfArtifactByUser";
    ExtensionMessageType["getPermissionsOfWorkspace"] = "GetPermissionsOfWorkspace";
    ExtensionMessageType["checkArtifactSharingEnabled"] = "CheckArtifactSharingEnabled";
    ExtensionMessageType["getArtifactTypeShareablePermissions"] = "GetArtifactTypeShareablePermissions";
    ExtensionMessageType["openArtifactSharingDialog"] = "OpenArtifactSharingDialog";
    ExtensionMessageType["openArtifactSharingDialogWithResult"] = "OpenArtifactSharingDialogWithResult";
    ExtensionMessageType["openArtifactSettings"] = "OpenArtifactSettings";
    ExtensionMessageType["onCloseArtifactSettings"] = "onCloseArtifactSettings";
    ExtensionMessageType["resizeIframeHeight"] = "resizeIframeHeight";
    ExtensionMessageType["postCdnFallbackEvent"] = "PostCdnFallbackEvent";
    ExtensionMessageType["openSubfolderPickerDialog"] = "OpenSubfolderPickerDialog";
})(ExtensionMessageType || (ExtensionMessageType = {}));
const executeAction = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.executeAction);
const onAction = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.onAction);
const navigateAsync = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.navigateAsync);
const navigateExtensionAsync = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.navigateExtensionAsync);
const onNavigate = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onNavigate);
const listenLeave = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.listenLeave);
const onLeave = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.onLeave);
const listenLeaveEnd = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.listenLeaveEnd);
const onLeaveEnd = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.onLeaveEnd);
const getAccessToken = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getAccessToken);
const getSettings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getSettings);
const onSettingsChange = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onSettingsChange);
const openNotification = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openNotification);
const hideNotification = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.hideNotification);
const openPage = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openPage);
const openDatahubDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openDatahubDialog);
const openDatahubWizardDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openDatahubWizardDialog);
const openDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openDialog);
const closeDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.closeDialog);
const openPanel = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openPanel);
const closePanel = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.closePanel);
const logEvent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.logEvent);
const postLifecycleEvent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.postLifecycleEvent);
const postDOMEvent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.postDOMEvent);
const getDOMRect = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getDOMRect);
const resetFocus = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.resetFocus);
const getTheme = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getTheme);
const onThemeChange = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onThemeChange);
const openArtifactRecentRuns = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openArtifactRecentRuns);
const handleRequestFailure = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.handleRequestFailure);
const handleInvalidRoute = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.handleInvalidRoute);
const openError = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openError);
const emitEvent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.emitEvent);
const checkPermissionsOfArtifact = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.checkPermissionsOfArtifact);
const checkPermissionsOfWorkspace = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.checkPermissionsOfWorkspace);
const getPermissionsOfArtifact = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getPermissionsOfArtifact);
const getPermissionsOfArtifactByUser = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getPermissionsOfArtifactByUser);
const getPermissionsOfWorkspace = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getPermissionsOfWorkspace);
const checkArtifactSharingEnabled = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.checkArtifactSharingEnabled);
const getArtifactTypeShareablePermissions = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getArtifactTypeShareablePermissions);
const openArtifactSharingDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.openArtifactSharingDialog);
const openArtifactSharingDialogWithResult = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openArtifactSharingDialogWithResult);
const openArtifactSettings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openArtifactSettings);
const onCloseArtifactSettings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onCloseArtifactSettings);
const resizeIframeHeight = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.resizeIframeHeight);
const postCdnFallbackEvent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.postCdnFallbackEvent);
const openSubfolderPickerDialog = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openSubfolderPickerDialog);
/** @internal */
const Messages = {
    executeAction,
    onAction,
    navigateAsync,
    navigateExtensionAsync,
    onNavigate,
    listenLeave,
    onLeave,
    listenLeaveEnd,
    onLeaveEnd,
    getAccessToken,
    getSettings,
    onSettingsChange,
    openNotification,
    hideNotification,
    openPage,
    openDatahubDialog,
    openDatahubWizardDialog,
    openDialog,
    closeDialog,
    openPanel,
    closePanel,
    logEvent,
    postLifecycleEvent,
    postDOMEvent,
    getDOMRect,
    resetFocus,
    getTheme,
    onThemeChange,
    openArtifactRecentRuns,
    openError,
    emitEvent,
    handleRequestFailure,
    handleInvalidRoute,
    checkPermissionsOfArtifact,
    checkPermissionsOfWorkspace,
    getPermissionsOfArtifact,
    getPermissionsOfArtifactByUser,
    getPermissionsOfWorkspace,
    checkArtifactSharingEnabled,
    getArtifactTypeShareablePermissions,
    openArtifactSharingDialog,
    openArtifactSharingDialogWithResult,
    openArtifactSettings,
    onCloseArtifactSettings,
    resizeIframeHeight,
    postCdnFallbackEvent,
    openSubfolderPickerDialog,
};
//# sourceMappingURL=extension-messages.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/extension-version.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/extension-version.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_VERSION: () => (/* binding */ CLIENT_VERSION)
/* harmony export */ });
const CLIENT_VERSION = '1.14.34';
//# sourceMappingURL=extension-version.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/utils/event-generator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/utils/event-generator.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateExtensionLoadPerformanceTelemetry: () => (/* binding */ populateExtensionLoadPerformanceTelemetry)
/* harmony export */ });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
/*
 * Background:
 * 1.Datapipeline team use es6 while other teams use es5 online
 * 2.Bowser lib use export default and the compile is not compatible with es6
 * Solution:
 * 1. Use import * as bowser from 'bowser' and bowser? to compatible while the bowser is undifined after compile
 * Notice:
 * 1. Why don't use import bowser from 'bowser' lib? Because it need add compileOption esModuleInterop and allowSyntheticDefaultImports,
 * and need to modify the compile, not make sence.
 * 2. Don't use import { getParser } from 'bowser' which will lead to a regression -- let Datapipeline compile error
 */
// eslint-disable-next-line no-restricted-syntax -- bowser has been published and added to package.json

// eslint-disable-next-line no-restricted-syntax -- uuid has been published and added to package.json

function populateExtensionLoadPerformanceTelemetry(extensionIframePerformance) {
    var _a;
    const { clientVersion, extensionName, iframeId, extensionBootstrapStartTimestamp, extensionBootstrapEndTimestamp } = extensionIframePerformance;
    const navigator = window.navigator;
    const navigatorConnection = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.connection;
    const performanceNavigationTiming = (window.performance.getEntriesByType("navigation"))[0];
    const { connectEnd, connectStart, decodedBodySize, domContentLoadedEventEnd, domContentLoadedEventStart, domInteractive, domainLookupEnd, domainLookupStart, duration, encodedBodySize, entryType, fetchStart, loadEventEnd, nextHopProtocol, redirectCount, redirectEnd, redirectStart, requestStart, responseStart, responseEnd, secureConnectionStart, transferSize, unloadEventEnd, unloadEventStart, } = performanceNavigationTiming;
    // Use bowser? to compatible with es6
    const browser = (bowser__WEBPACK_IMPORTED_MODULE_0__ === null || bowser__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : bowser__WEBPACK_IMPORTED_MODULE_0__.getParser) ? bowser__WEBPACK_IMPORTED_MODULE_0__.getParser(navigator.userAgent) : undefined;
    const windowPerformanceTimeOrigin = window.performance.timeOrigin;
    return Object.assign(Object.assign({}, buildBaseEvent(clientVersion)), { extensionName, eventName: "ExtensionLoad", iframeId, 
        // cdnEnabled: !!(window as any).useCDN, // Update this with global setting if this doesn't depend on extension specific setting
        compressionSavings: (transferSize && decodedBodySize) ? Math.round((1 - (transferSize / decodedBodySize)) * 100) : -1, decodedBodySize: decodedBodySize !== null && decodedBodySize !== void 0 ? decodedBodySize : -1, deviceMemory: navigator.deviceMemory || 0, dnsLookupDuration: Math.ceil(domainLookupEnd - domainLookupStart), dnsPersistentConnectionOrCached: fetchStart === domainLookupStart && fetchStart === domainLookupEnd, documentLoadDuration: Math.ceil(windowPerformanceTimeOrigin + loadEventEnd - windowPerformanceTimeOrigin + fetchStart), documentLoadEndTimestamp: new Date(Math.ceil(windowPerformanceTimeOrigin + loadEventEnd)).toISOString(), documentLoadStartTimestamp: new Date(Math.ceil(windowPerformanceTimeOrigin + fetchStart)).toISOString(), domContentLoadedDuration: Math.ceil(windowPerformanceTimeOrigin + domContentLoadedEventEnd - windowPerformanceTimeOrigin + domContentLoadedEventStart), effectiveBandwidth: navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.downlink, effectiveConnectionType: navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.effectiveType, effectiveRoundTripTime: navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.rtt, encodedBodySize: encodedBodySize !== null && encodedBodySize !== void 0 ? encodedBodySize : -1, hardwareConcurrency: navigator.hardwareConcurrency, isHttp2: nextHopProtocol === "http/2", extensionBootstrapLoadDuration: Math.ceil(extensionBootstrapEndTimestamp - extensionBootstrapStartTimestamp), extensionBootstrapLoadEndTimestamp: new Date(Math.ceil(windowPerformanceTimeOrigin + extensionBootstrapEndTimestamp)).toISOString(), extensionBootstrapLoadStartTimestamp: new Date(Math.ceil(windowPerformanceTimeOrigin + extensionBootstrapStartTimestamp)).toISOString(), navigationType: entryType, redirectCount, redirectDocumentDuration: Math.ceil(((windowPerformanceTimeOrigin + redirectEnd) - (windowPerformanceTimeOrigin + redirectStart))), requestDuration: Math.ceil(((windowPerformanceTimeOrigin + responseStart) - (windowPerformanceTimeOrigin + requestStart))), responseDuration: Math.ceil(((windowPerformanceTimeOrigin + responseEnd) - (windowPerformanceTimeOrigin + responseStart))), screenHeight: window.screen.height, screenWidth: window.screen.width, sslNegotiationDuration: Math.ceil(((windowPerformanceTimeOrigin + requestStart) - (windowPerformanceTimeOrigin + secureConnectionStart))), tcpConnectionSetupDuration: Math.ceil(((windowPerformanceTimeOrigin + connectEnd) - (windowPerformanceTimeOrigin + connectStart))), timeToFirstByte: Math.ceil(((windowPerformanceTimeOrigin + responseStart) - (windowPerformanceTimeOrigin + fetchStart))), timeToLastByte: Math.ceil(((windowPerformanceTimeOrigin + responseEnd) - (windowPerformanceTimeOrigin + fetchStart))), timeToInteractiveDom: domInteractive, transferSize: transferSize !== null && transferSize !== void 0 ? transferSize : -1, unloadDocumentDuration: Math.ceil((unloadEventEnd - unloadEventStart)), visualViewportHeight: window.outerHeight, visualViewportWidth: window.outerWidth });
    function buildBaseEvent(clientVersion) {
        var _a, _b, _c, _d;
        return {
            browserName: (_a = browser === null || browser === void 0 ? void 0 : browser.getBrowserName()) !== null && _a !== void 0 ? _a : '',
            browserVersion: (_b = browser === null || browser === void 0 ? void 0 : browser.getBrowserVersion()) !== null && _b !== void 0 ? _b : '',
            operatingSystemName: (_c = browser === null || browser === void 0 ? void 0 : browser.getOSName()) !== null && _c !== void 0 ? _c : '',
            operatingSystemVersion: (_d = browser === null || browser === void 0 ? void 0 : browser.getOSVersion()) !== null && _d !== void 0 ? _d : '',
            userAgent: window.navigator.userAgent,
            durationMs: Math.ceil(duration),
            eventId: uuid__WEBPACK_IMPORTED_MODULE_1__["default"](),
            level: "Informational" /* Level.Informational */,
            logAnalyticsCategory: "Report User Action" /* LogAnalyticsCategory.ReportUserAction */,
            pageHidden: !!window.document.hidden,
            sessionSource: "Trident" /* SessionSource.Trident */,
            status: "Succeeded" /* Status.Succeeded */,
            timeGenerated: new Date(Math.ceil(windowPerformanceTimeOrigin + fetchStart)).toISOString(),
            clientVersion,
            consumptionMethod: "Trident Web App" /* ConsumptionMethod.TridentWebApp */,
            online: true,
            operationEndTime: new Date(Math.floor(windowPerformanceTimeOrigin + loadEventEnd)).toISOString(),
            operationStartTime: new Date(Math.floor(windowPerformanceTimeOrigin + fetchStart)).toISOString(),
            operationName: "ExtensionLoad",
            operationVersion: "1.0.0",
        };
    }
}
//# sourceMappingURL=event-generator.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-common/src/lib/utils/perf.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-common/src/lib/utils/perf.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExtensionPerformance: () => (/* binding */ getExtensionPerformance)
/* harmony export */ });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- bowser has been published and added to package.json

const maxResoureceTimingsNum = 20;
function getExtensionPerformance(extensionIframePerformance) {
    var _a, _b, _c, _d;
    const { extensionBootstrapStart, extensionBootstrapEnd } = extensionIframePerformance;
    const navigator = window.navigator;
    const navigatorConnection = navigator === null || navigator === void 0 ? void 0 : navigator.connection;
    const performanceNavigationTiming = (window.performance.getEntriesByType("navigation"))[0];
    const { connectEnd, connectStart, decodedBodySize, domContentLoadedEventEnd, domContentLoadedEventStart, domInteractive, domainLookupEnd, domainLookupStart, encodedBodySize, entryType, fetchStart, loadEventStart, loadEventEnd, nextHopProtocol, redirectCount, redirectEnd, redirectStart, requestStart, responseStart, responseEnd, secureConnectionStart, transferSize, unloadEventEnd, unloadEventStart, } = performanceNavigationTiming;
    const performanceResourceTimings = (window.performance.getEntriesByType("resource"));
    const extensionResourceTimings = performanceResourceTimings.map(performanceResourceTiming => {
        var _a;
        return {
            fetchStart: String(Math.round(performanceResourceTiming.fetchStart)),
            initiatorType: performanceResourceTiming.initiatorType,
            name: performanceResourceTiming.name,
            requestStart: String(Math.round(performanceResourceTiming.requestStart)),
            responseStart: String(Math.round(performanceResourceTiming.responseStart)),
            responseEnd: String(Math.round(performanceResourceTiming.responseEnd)),
            transferSize: String(Math.round((_a = performanceResourceTiming.transferSize) !== null && _a !== void 0 ? _a : -1)),
        };
    });
    const extensionResourceTimingsNum = extensionResourceTimings.length;
    // keep the extensionResourceTimings less than maxResoureceTimingsNum and return the max perf cost Timings; else will be trunked by telemetry service
    if (extensionResourceTimings.length > maxResoureceTimingsNum) {
        extensionResourceTimings.sort((resourceTiming1, resourceTiming2) => {
            return (Number(resourceTiming2.responseEnd) - Number(resourceTiming2.requestStart)) - (Number(resourceTiming1.responseEnd) - Number(resourceTiming1.requestStart));
        });
        extensionResourceTimings.splice(maxResoureceTimingsNum);
    }
    const windowPerformanceTimeOrigin = window.performance.timeOrigin;
    // Use bowser? to compatible with es6
    const browser = (bowser__WEBPACK_IMPORTED_MODULE_0__ === null || bowser__WEBPACK_IMPORTED_MODULE_0__ === void 0 ? void 0 : bowser__WEBPACK_IMPORTED_MODULE_0__.getParser) ? bowser__WEBPACK_IMPORTED_MODULE_0__.getParser(navigator.userAgent) : undefined;
    return {
        connectEnd: String(Math.round(connectEnd)),
        connectStart: String(Math.round(connectStart)),
        decodedBodySize: String(decodedBodySize !== null && decodedBodySize !== void 0 ? decodedBodySize : -1),
        domContentLoadedEventEnd: String(Math.round(domContentLoadedEventEnd)),
        domContentLoadedEventStart: String(Math.round(domContentLoadedEventStart)),
        domInteractive: String(Math.round(domInteractive)),
        domainLookupEnd: String(Math.round(domainLookupEnd)),
        domainLookupStart: String(Math.round(domainLookupStart)),
        encodedBodySize: String(encodedBodySize !== null && encodedBodySize !== void 0 ? encodedBodySize : -1),
        entryType: entryType,
        fetchStart: String(Math.round(fetchStart)),
        loadEventStart: String(Math.round(loadEventStart)),
        loadEventEnd: String(Math.round(loadEventEnd)),
        nextHopProtocol,
        redirectCount: String(redirectCount),
        redirectEnd: String(Math.round(redirectEnd)),
        redirectStart: String(Math.round(redirectStart)),
        requestStart: String(Math.round(requestStart)),
        responseStart: String(Math.round(responseStart)),
        responseEnd: String(Math.round(responseEnd)),
        secureConnectionStart: String(Math.round(secureConnectionStart)),
        transferSize: String(transferSize !== null && transferSize !== void 0 ? transferSize : -1),
        unloadEventEnd: String(Math.round(unloadEventEnd)),
        unloadEventStart: String(Math.round(unloadEventStart)),
        timeOrigin: String(Math.round(windowPerformanceTimeOrigin)),
        deviceMemory: String(navigator.deviceMemory || 0),
        downlink: String(navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.downlink),
        effectiveType: String(navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.effectiveType),
        hardwareConcurrency: String(navigator.hardwareConcurrency),
        rtt: String(navigatorConnection === null || navigatorConnection === void 0 ? void 0 : navigatorConnection.rtt),
        userAgent: navigator.userAgent,
        browserName: (_a = browser === null || browser === void 0 ? void 0 : browser.getBrowserName()) !== null && _a !== void 0 ? _a : '',
        browserVersion: (_b = browser === null || browser === void 0 ? void 0 : browser.getBrowserVersion()) !== null && _b !== void 0 ? _b : '',
        operatingSystemName: (_c = browser === null || browser === void 0 ? void 0 : browser.getOSName()) !== null && _c !== void 0 ? _c : '',
        operatingSystemVersion: (_d = browser === null || browser === void 0 ? void 0 : browser.getOSVersion()) !== null && _d !== void 0 ? _d : '',
        extensionBootstrapEnd: String(Math.round(extensionBootstrapEnd)),
        extensionBootstrapStart: String(Math.round(extensionBootstrapStart)),
        performanceResourceTimings: JSON.stringify(extensionResourceTimings),
        performanceResourceTimingsNum: String(extensionResourceTimingsNum),
    };
}
//# sourceMappingURL=perf.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_META_KEY: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.EXT_META_KEY),
/* harmony export */   ExtensionMetaLoader: () => (/* reexport safe */ _lib_extension_meta_loader__WEBPACK_IMPORTED_MODULE_2__.ExtensionMetaLoader),
/* harmony export */   bootstrapPathKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.bootstrapPathKey),
/* harmony export */   cdnFallbackKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.cdnFallbackKey),
/* harmony export */   createAsyncExtensionMessage: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.createAsyncExtensionMessage),
/* harmony export */   createExtensionClientMessageBroker: () => (/* reexport safe */ _lib_extension_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionClientMessageBroker),
/* harmony export */   createExtensionMessage: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.createExtensionMessage),
/* harmony export */   createMessage: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.createMessage),
/* harmony export */   environmentNameKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.environmentNameKey),
/* harmony export */   extensionHostOriginKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.extensionHostOriginKey),
/* harmony export */   extensionNameKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.extensionNameKey),
/* harmony export */   iframeIdKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.iframeIdKey),
/* harmony export */   iframeTypeKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.iframeTypeKey),
/* harmony export */   isExtensionMessageType: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.isExtensionMessageType),
/* harmony export */   rejectPrefix: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.rejectPrefix),
/* harmony export */   resolvePrefix: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.resolvePrefix),
/* harmony export */   startPrefix: () => (/* reexport safe */ _lib_message__WEBPACK_IMPORTED_MODULE_3__.startPrefix),
/* harmony export */   useCDNKey: () => (/* reexport safe */ _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__.useCDNKey)
/* harmony export */ });
/* harmony import */ var _lib_extension_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/extension-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-message-broker.js");
/* harmony import */ var _lib_extension_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/extension-meta */ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta.js");
/* harmony import */ var _lib_extension_meta_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/extension-meta-loader */ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta-loader.js");
/* harmony import */ var _lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/message */ "./node_modules/@trident/extension-client-message-broker/src/lib/message.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-message-broker.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/lib/extension-message-broker.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createExtensionClientMessageBroker: () => (/* binding */ createExtensionClientMessageBroker)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extension_meta_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension-meta-loader */ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta-loader.js");
/* harmony import */ var _message_broker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-broker */ "./node_modules/@trident/extension-client-message-broker/src/lib/message-broker.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------



function createExtensionClientMessageBroker(config) {
    return new ExtensionClientMessageBrokerImpl(config.getIframeId, config.extensionHostWindow);
}
class ExtensionClientMessageBrokerImpl {
    constructor(getIframeId, extensionHostWindow) {
        this.getIframeId = getIframeId;
        this.broker = new _message_broker__WEBPACK_IMPORTED_MODULE_1__.MessageBroker({
            getTargetWindow: () => {
                if (!extensionHostWindow) {
                    throw new Error('Cannot find the extension host window');
                }
                return extensionHostWindow;
            },
            getTargetOrigin: () => {
                return _extension_meta_loader__WEBPACK_IMPORTED_MODULE_0__.ExtensionMetaLoader.Load().extensionHostOrigin;
            },
            shouldProcessMessage: (event) => {
                return event.origin === _extension_meta_loader__WEBPACK_IMPORTED_MODULE_0__.ExtensionMetaLoader.Load().extensionHostOrigin;
            },
        });
    }
    listenFor(creator, handler) {
        this.broker.listenFor(creator, handler);
    }
    listenForAsync(creator, handler) {
        this.broker.listenForAsync(creator, handler);
    }
    send(message) {
        this.broker.send(message(this.getIframeId()));
    }
    sendAsync(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            return this.broker.sendAsync(message(this.getIframeId()));
        });
    }
}
//# sourceMappingURL=extension-message-broker.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta-loader.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta-loader.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionMetaLoader: () => (/* binding */ ExtensionMetaLoader)
/* harmony export */ });
/* harmony import */ var _extension_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extension-meta */ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ExtensionMetaLoader {
    constructor(target = window) {
        this.target = target;
    }
    static Load(target) {
        return new this(target).load();
    }
    load() {
        return this.meta || (this.meta = this.tryLoad());
    }
    get meta() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.target[_extension_meta__WEBPACK_IMPORTED_MODULE_0__.EXT_META_KEY];
    }
    set meta(meta) {
        Object.defineProperty(this.target, _extension_meta__WEBPACK_IMPORTED_MODULE_0__.EXT_META_KEY, {
            get: () => meta,
            enumerable: false,
            configurable: false,
        });
    }
    tryLoad() {
        const params = new URLSearchParams(this.target.location.search);
        const raw = {
            iframeId: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.iframeIdKey),
            iframeType: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.iframeTypeKey),
            environmentName: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.environmentNameKey),
            extensionName: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.extensionNameKey),
            extensionHostOrigin: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.extensionHostOriginKey),
            bootstrapPath: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.bootstrapPathKey),
            useCDN: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.useCDNKey) === 'true',
            cdnFallbackTime: params.get(_extension_meta__WEBPACK_IMPORTED_MODULE_0__.cdnFallbackKey),
        };
        this.assert(raw);
        return Object.freeze(raw);
    }
    // Note: update this method if meta definition changed
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert(isMeta) {
        const meta = isMeta;
        if (meta.iframeId == null) {
            throw new Error("Empty iframeId");
        }
        if (!/^(worker|dialog|panel|page)$/.test(meta.iframeType || '')) {
            throw new Error(`Invalid uiType: "${meta.iframeType}", must be 'worker', 'page', 'panel' or 'dialog'`);
        }
        if (meta.environmentName == null) {
            throw new Error("Empty environmentName");
        }
        if (meta.extensionName == null) {
            throw new Error("Empty extensionName");
        }
        if (meta.extensionHostOrigin == null) {
            throw new Error("Empty extensionHostOrigin");
        }
    }
}
//# sourceMappingURL=extension-meta-loader.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/lib/extension-meta.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXT_META_KEY: () => (/* binding */ EXT_META_KEY),
/* harmony export */   bootstrapPathKey: () => (/* binding */ bootstrapPathKey),
/* harmony export */   cdnFallbackKey: () => (/* binding */ cdnFallbackKey),
/* harmony export */   environmentNameKey: () => (/* binding */ environmentNameKey),
/* harmony export */   extensionHostOriginKey: () => (/* binding */ extensionHostOriginKey),
/* harmony export */   extensionNameKey: () => (/* binding */ extensionNameKey),
/* harmony export */   iframeIdKey: () => (/* binding */ iframeIdKey),
/* harmony export */   iframeTypeKey: () => (/* binding */ iframeTypeKey),
/* harmony export */   useCDNKey: () => (/* binding */ useCDNKey)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
const EXT_META_KEY = Symbol.for('EXTENSION_META');
const iframeIdKey = '__iframeId';
const iframeTypeKey = '__iframeType';
const environmentNameKey = '__environmentName';
const extensionNameKey = '__extensionName';
const extensionHostOriginKey = '__extensionHostOrigin';
const bootstrapPathKey = '__bootstrapPath';
const useCDNKey = '__useCDN';
const cdnFallbackKey = '__cdnFallbackTime';
//# sourceMappingURL=extension-meta.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/lib/message-broker.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/lib/message-broker.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBroker: () => (/* binding */ MessageBroker),
/* harmony export */   isAsyncExtensionMessage: () => (/* binding */ isAsyncExtensionMessage),
/* harmony export */   isExtensionMessage: () => (/* binding */ isExtensionMessage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./node_modules/@trident/extension-client-message-broker/src/lib/message.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------


function isExtensionMessage(message) {
    const extensionMessage = message;
    return extensionMessage != null
        && typeof extensionMessage === 'object'
        && extensionMessage.type !== undefined
        && extensionMessage.iframeId !== undefined;
}
function isAsyncExtensionMessage(message) {
    return message.asyncId !== undefined;
}
class MessageBroker {
    constructor(config) {
        this.genericListeners = new Set();
        this.syncListeners = new Map();
        this.asyncListeners = new Map();
        this.asyncResponders = new Map();
        this.listener = (message) => this.onMessage(message);
        this.getTargetWindow = config.getTargetWindow;
        this.getTargetOrigin = config.getTargetOrigin;
        this.onExtensionMessage = config.onExtensionMessage;
        this.shouldProcessMessage = config.shouldProcessMessage;
        window.addEventListener('message', this.listener);
    }
    listen(handler) {
        this.genericListeners.add(handler);
    }
    listenFor(creator, handler) {
        const type = creator.type;
        const syncListeners = this.syncListeners.get(type);
        if (syncListeners) {
            syncListeners.add(handler);
        }
        else {
            this.syncListeners.set(type, new Set([handler]));
        }
    }
    listenForAsync(creator, handler) {
        const type = creator.start.type;
        const asyncListeners = this.asyncListeners.get(type);
        if (asyncListeners) {
            asyncListeners.add(handler);
        }
        else {
            this.asyncListeners.set(type, new Set([handler]));
        }
    }
    send(message) {
        this.sendMessage(message);
    }
    sendAsync(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const { asyncId } = message;
                this.asyncResponders.set(asyncId, [
                    resolve,
                    reject,
                ]);
                this.sendMessage(message);
            });
        });
    }
    onMessage(event) {
        if (!this.shouldProcessMessage(event)) {
            return;
        }
        const message = event.data;
        if (isExtensionMessage(message)) {
            if (this.onExtensionMessage) {
                this.onExtensionMessage(event);
            }
            const isAsyncMessage = isAsyncExtensionMessage(message);
            if (isAsyncMessage) {
                const resolvers = this.asyncResponders.get(message.asyncId);
                if (resolvers) {
                    const [resolve, reject] = resolvers;
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { type, asyncId, iframeId } = message, props = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(message, ["type", "asyncId", "iframeId"]);
                    if (type.startsWith(_message__WEBPACK_IMPORTED_MODULE_0__.resolvePrefix)) {
                        resolve(props);
                    }
                    else if (message.type.startsWith(_message__WEBPACK_IMPORTED_MODULE_0__.rejectPrefix)) {
                        reject(props);
                    }
                }
            }
            for (const listener of Array.from(this.genericListeners)) {
                listener(message);
            }
            const syncListeners = this.syncListeners.get(message.type);
            if (syncListeners) {
                for (const listener of Array.from(syncListeners)) {
                    listener(message);
                }
            }
            if (isAsyncExtensionMessage(message) && message.type.startsWith(_message__WEBPACK_IMPORTED_MODULE_0__.startPrefix)) {
                const asyncListeners = this.asyncListeners.get(message.type);
                if (asyncListeners) {
                    for (const listener of Array.from(asyncListeners)) {
                        Promise.resolve(listener(message)).then((responseCreator) => this.sendMessage(responseCreator(message.iframeId, message.asyncId)));
                    }
                }
            }
        }
    }
    sendMessage(message) {
        this.getTargetWindow(message).postMessage(message, this.getTargetOrigin(message));
    }
}
//# sourceMappingURL=message-broker.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client-message-broker/src/lib/message.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client-message-broker/src/lib/message.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAsyncExtensionMessage: () => (/* binding */ createAsyncExtensionMessage),
/* harmony export */   createExtensionMessage: () => (/* binding */ createExtensionMessage),
/* harmony export */   createMessage: () => (/* binding */ createMessage),
/* harmony export */   isExtensionMessageType: () => (/* binding */ isExtensionMessageType),
/* harmony export */   rejectPrefix: () => (/* binding */ rejectPrefix),
/* harmony export */   resolvePrefix: () => (/* binding */ resolvePrefix),
/* harmony export */   startPrefix: () => (/* binding */ startPrefix)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- uuid has been published and added to package.json

const createMessage = (type, creator) => Object.assign(creator !== undefined
    ? (...args) => (Object.assign({ type }, creator(...args)))
    : (props) => props !== undefined
        ? (Object.assign({ type }, props))
        : ({ type }), { type });
const createExtensionMessage = (type) => Object.assign((props) => createMessage(type, (iframeId) => (Object.assign({ iframeId }, props))), { type });
const isExtensionMessageType = (creator) => (message) => (message === null || message === void 0 ? void 0 : message.type) === creator.type;
const startPrefix = '[Start]';
const resolvePrefix = '[Resolve]';
const rejectPrefix = '[Reject]';
const createAsyncExtensionMessage = (type) => ({
    start: Object.assign((props) => createMessage(`${startPrefix} ${type}`, (iframeId) => (Object.assign(Object.assign({}, props), { asyncId: (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(), iframeId }))), { type: `${startPrefix} ${type}` }),
    resolve: Object.assign((props) => createMessage(`${resolvePrefix} ${type}`, (iframeId, asyncId) => (Object.assign(Object.assign({}, props), { asyncId,
        iframeId }))), { type: `${resolvePrefix} ${type}` }),
    reject: Object.assign((props) => createMessage(`${rejectPrefix} ${type}`, (iframeId, asyncId) => (Object.assign(Object.assign({}, props), { asyncId,
        iframeId }))), { type: `${rejectPrefix} ${type}` }),
});
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADUserMetaDataObjectType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ADUserMetaDataObjectType),
/* harmony export */   ArtifactJobPropertyIndex: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ArtifactJobPropertyIndex),
/* harmony export */   ArtifactStage: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ArtifactStage),
/* harmony export */   ButtonType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ButtonType),
/* harmony export */   CLIENT_VERSION: () => (/* reexport safe */ _lib_extension_version__WEBPACK_IMPORTED_MODULE_4__.CLIENT_VERSION),
/* harmony export */   CertificationState: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.CertificationState),
/* harmony export */   CloseMode: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.CloseMode),
/* harmony export */   DatahubFilterType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DatahubListPivot),
/* harmony export */   DefaultExtensionClientConfig: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig),
/* harmony export */   DialogType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DialogType),
/* harmony export */   DisplayColumn: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.DisplayColumn),
/* harmony export */   EndorsementArtifactType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.EndorsementArtifactType),
/* harmony export */   EndorsementLinkType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.EndorsementLinkType),
/* harmony export */   ErrorKind: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ErrorKind),
/* harmony export */   ExposeTo: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ExposeTo),
/* harmony export */   ExtensionClient: () => (/* reexport safe */ _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__.ExtensionClient),
/* harmony export */   ExtensionLoadEventType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ExtensionLoadEventType),
/* harmony export */   FeatureOwner: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.FeatureOwner),
/* harmony export */   GroupType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.GroupType),
/* harmony export */   LifecycleEventType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.LifecycleEventType),
/* harmony export */   NativeProductTypes: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.NativeProductTypes),
/* harmony export */   NotificationToastDuration: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.NotificationType),
/* harmony export */   OpenMode: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.OpenMode),
/* harmony export */   OpenNotificationButtonType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.OpenNotificationButtonType),
/* harmony export */   Permissions: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.Permissions),
/* harmony export */   PreDefinedEventName: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.PreDefinedEventName),
/* harmony export */   PreDefinedExtensionAction: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.PreDefinedExtensionAction),
/* harmony export */   ReservedFeedbackAttribute: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ReservedFeedbackAttribute),
/* harmony export */   ShortcutType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.ShortcutType),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.SupportedDatahubStyleProperties),
/* harmony export */   TriggerType: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.TriggerType),
/* harmony export */   UserAccountStatus: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.UserAccountStatus),
/* harmony export */   bootstrap: () => (/* reexport safe */ _lib_extension_bootstrap__WEBPACK_IMPORTED_MODULE_2__.bootstrap),
/* harmony export */   createExtensionClient: () => (/* reexport safe */ _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__.createExtensionClient),
/* harmony export */   defaultIimeoutForOpenArtifactRequest: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.defaultIimeoutForOpenArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactRequest: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.defaultTimeoutForCreateArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactUI: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.defaultTimeoutForCreateArtifactUI),
/* harmony export */   defaultTimeoutForOpenArtifact: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.defaultTimeoutForOpenArtifact),
/* harmony export */   extensionActivityStatusList: () => (/* reexport safe */ _lib_contracts__WEBPACK_IMPORTED_MODULE_1__.extensionActivityStatusList)
/* harmony export */ });
/* harmony import */ var _lib_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/apis */ "./node_modules/@trident/extension-client/src/lib/apis/index.js");
/* harmony import */ var _lib_contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/contracts */ "./node_modules/@trident/extension-client/src/lib/contracts/index.js");
/* harmony import */ var _lib_extension_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/extension-bootstrap */ "./node_modules/@trident/extension-client/src/lib/extension-bootstrap.js");
/* harmony import */ var _lib_extension_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/extension-client */ "./node_modules/@trident/extension-client/src/lib/extension-client.js");
/* harmony import */ var _lib_extension_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/extension-version */ "./node_modules/@trident/extension-client/src/lib/extension-version.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/artifact-action-api.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/artifact-action-api.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-action-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/artifact-api.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/artifact-api.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/artifact-status-api.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/artifact-status-api.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-status-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/auth-api.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/auth-api.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=auth-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/ces-api.js":
/*!************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/ces-api.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=ces-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/git-integration-api.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/git-integration-api.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=git-integration-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/help-pane-api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/help-pane-api.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=help-pane-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _artifact_action_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./artifact-action-api */ "./node_modules/@trident/extension-client/src/lib/apis/artifact-action-api.js");
/* harmony import */ var _artifact_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artifact-api */ "./node_modules/@trident/extension-client/src/lib/apis/artifact-api.js");
/* harmony import */ var _artifact_status_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact-status-api */ "./node_modules/@trident/extension-client/src/lib/apis/artifact-status-api.js");
/* harmony import */ var _auth_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-api */ "./node_modules/@trident/extension-client/src/lib/apis/auth-api.js");
/* harmony import */ var _ces_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ces-api */ "./node_modules/@trident/extension-client/src/lib/apis/ces-api.js");
/* harmony import */ var _git_integration_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./git-integration-api */ "./node_modules/@trident/extension-client/src/lib/apis/git-integration-api.js");
/* harmony import */ var _help_pane_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help-pane-api */ "./node_modules/@trident/extension-client/src/lib/apis/help-pane-api.js");
/* harmony import */ var _information_protection_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./information-protection-api */ "./node_modules/@trident/extension-client/src/lib/apis/information-protection-api.js");
/* harmony import */ var _interaction_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interaction-api */ "./node_modules/@trident/extension-client/src/lib/apis/interaction-api.js");
/* harmony import */ var _multitasking_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multitasking-api */ "./node_modules/@trident/extension-client/src/lib/apis/multitasking-api.js");
/* harmony import */ var _notification_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-api */ "./node_modules/@trident/extension-client/src/lib/apis/notification-api.js");
/* harmony import */ var _shortcut_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shortcut-api */ "./node_modules/@trident/extension-client/src/lib/apis/shortcut-api.js");
/* harmony import */ var _telemetry_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./telemetry-api */ "./node_modules/@trident/extension-client/src/lib/apis/telemetry-api.js");
/* harmony import */ var _universal_security_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./universal-security-api */ "./node_modules/@trident/extension-client/src/lib/apis/universal-security-api.js");
/* harmony import */ var _user_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-api */ "./node_modules/@trident/extension-client/src/lib/apis/user-api.js");
/* harmony import */ var _workspace_settings_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workspace-settings-api */ "./node_modules/@trident/extension-client/src/lib/apis/workspace-settings-api.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/information-protection-api.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/information-protection-api.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=information-protection-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/interaction-api.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/interaction-api.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=interaction-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/multitasking-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/multitasking-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=multitasking-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/notification-api.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/notification-api.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=notification-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/shortcut-api.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/shortcut-api.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=shortcut-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/telemetry-api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/telemetry-api.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=telemetry-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/universal-security-api.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/universal-security-api.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=universal-security-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/user-api.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/user-api.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=user-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/apis/workspace-settings-api.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/apis/workspace-settings-api.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=workspace-settings-api.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/artifact-action-client.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/artifact-action-client.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactActionClient: () => (/* binding */ ArtifactActionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ArtifactActionClient {
    constructor(broker) {
        this.broker = broker;
    }
    registerProvider(handler) {
        return this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetArtifactActionData, (action) => {
            return handler(action.data)
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetArtifactActionData.resolve({ result }))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetArtifactActionData.reject({ error }));
        });
    }
}
//# sourceMappingURL=artifact-action-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/artifact-client.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/artifact-client.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactClient: () => (/* binding */ ArtifactClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ArtifactClient {
    constructor(broker) {
        this.broker = broker;
    }
    onChange(config, callback) {
        let subId;
        this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onArtifactUpdate, ({ subscriptionId, changes }) => {
            if (subscriptionId === subId) {
                callback({ changes });
            }
        });
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.subscribeArtifactUpdate.start(config)).then(({ subscriptionId }) => {
            subId = subscriptionId;
            return {
                unsubscribe: () => {
                    subId = undefined;
                    this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.unsubscribeArtifactUpdate({ subscriptionId }));
                },
            };
        });
    }
}
//# sourceMappingURL=artifact-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/artifact-status-client.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/artifact-status-client.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactStatusClient: () => (/* binding */ ArtifactStatusClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ArtifactStatusClient {
    constructor(broker) {
        this.broker = broker;
    }
    update(config) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.updateSelectedArtifactState(config));
    }
}
//# sourceMappingURL=artifact-status-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/auth-client.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/auth-client.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthClient: () => (/* binding */ AuthClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class AuthClient {
    constructor(client, broker) {
        this.client = client;
        this.broker = broker;
    }
    getAccessToken(scopes, forceRefresh) {
        return this.client.auth.getAccessToken(scopes, forceRefresh);
    }
    getMWCToken(claimsContext) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getMWCToken.start(claimsContext));
    }
    getMWCTokenV2(claimsContext) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getMWCTokenV2.start(claimsContext));
    }
}
//# sourceMappingURL=auth-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/ces-client.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/ces-client.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CESClient: () => (/* binding */ CESClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class CESClient {
    constructor(broker) {
        this.broker = broker;
    }
    sendRatingFeedback(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.sendRatingFeedback.start(config));
    }
}
//# sourceMappingURL=ces-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/git-integration-client.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/git-integration-client.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GitIntegrationClient: () => (/* binding */ GitIntegrationClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class GitIntegrationClient {
    constructor(broker) {
        this.broker = broker;
    }
    getGitConnection(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getGitConnection.start(config));
    }
    onGitConnectionChange(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGitConnectionChange, callback);
    }
}
//# sourceMappingURL=git-integration-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/help-pane-client.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/help-pane-client.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelpPaneClient: () => (/* binding */ HelpPaneClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class HelpPaneClient {
    constructor(broker) {
        this.broker = broker;
    }
    registerDataProvider(handler) {
        return this.broker.listenForAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetHelpPaneData, () => {
            return handler()
                .then((result) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetHelpPaneData.resolve({ result }))
                .catch((error) => _extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onGetHelpPaneData.reject({ error }));
        });
    }
}
//# sourceMappingURL=help-pane-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/information-protection-client.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/information-protection-client.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InformationProtectionClient: () => (/* binding */ InformationProtectionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class InformationProtectionClient {
    constructor(broker) {
        this.broker = broker;
    }
    getUserPolicySettings() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getInformationProtectionUserPolicySettings.start());
    }
    getLabels() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getInformationProtectionLabels.start());
    }
    getLabelByArtifactObjectId(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getLabelByArtifactObjectId.start(config));
    }
    shouldShowCreateComponent() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.shouldShowInformationProtectionCreateComponent.start());
    }
}
//# sourceMappingURL=information-protection-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/interaction-client.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/interaction-client.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InteractionClient: () => (/* binding */ InteractionClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class InteractionClient {
    constructor(broker) {
        this.broker = broker;
    }
    postDOMEvent(config) {
        const defaultConfig = {
            eventInitDict: {
                bubbles: true,
                cancelable: true,
                composed: true,
            },
        };
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.postDOMEvent(Object.assign(Object.assign({}, defaultConfig), config)));
    }
}
//# sourceMappingURL=interaction-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/multitasking-client.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/multitasking-client.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultitaskingClient: () => (/* binding */ MultitaskingClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class MultitaskingClient {
    constructor(broker) {
        this.broker = broker;
    }
    updateTab(config) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.updateTab(config));
    }
}
//# sourceMappingURL=multitasking-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/non-public/localization-client.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/non-public/localization-client.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _LocalizationClient: () => (/* binding */ _LocalizationClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class _LocalizationClient {
    constructor(broker) {
        this.broker = broker;
    }
    getLocalizedStrings(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getLocalizedStrings.start(config));
    }
}
//# sourceMappingURL=localization-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/shortcut-client.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/shortcut-client.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShortcutClient: () => (/* binding */ ShortcutClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class ShortcutClient {
    constructor(broker) {
        this.broker = broker;
    }
    openCreateWizard(createShortcutConfig) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openCreateShortcut.start(createShortcutConfig));
    }
    onCreateWizardClose(callback) {
        return this.broker.listenFor(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.onShortcutWizardClosed, callback);
    }
}
//# sourceMappingURL=shortcut-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/telemetry-client.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/telemetry-client.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TelemetryClient: () => (/* binding */ TelemetryClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
/* harmony import */ var _utils_perf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/perf */ "./node_modules/@trident/extension-client/src/lib/utils/perf.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------


class TelemetryClient {
    constructor(broker) {
        this.broker = broker;
    }
    logEvent(event) {
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.logEvent(event));
    }
    startActivity(config) {
        _utils_perf__WEBPACK_IMPORTED_MODULE_1__.commonActivityPerfTracker.startActivity(config);
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.startActivity(config));
    }
    updateActivityStatus(config) {
        let perfMetrics = null;
        if (config.status !== 'Pending') { // Ended
            if (config.activityType === 'openArtifact') {
                perfMetrics = _utils_perf__WEBPACK_IMPORTED_MODULE_1__.openArtifactRequestPerfTracker.endActivity(config.artifactObjectId);
            }
            else {
                perfMetrics = _utils_perf__WEBPACK_IMPORTED_MODULE_1__.commonActivityPerfTracker.endActivity(config);
            }
        }
        return this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.updateActivityStatus(Object.assign(Object.assign({}, config), { perf: perfMetrics || undefined })));
    }
}
//# sourceMappingURL=telemetry-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/universal-security-client.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/universal-security-client.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversalSecurityClient: () => (/* binding */ UniversalSecurityClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class UniversalSecurityClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(universalSecurityConfig) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openUniversalSecurity.start(universalSecurityConfig));
    }
}
//# sourceMappingURL=universal-security-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/user-client.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/user-client.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserClient: () => (/* binding */ UserClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class UserClient {
    constructor(broker) {
        this.broker = broker;
    }
    getProfile() {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.getUserProfile.start());
    }
    findUsers(findUsersInput) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.findUsers.start(findUsersInput));
    }
}
//# sourceMappingURL=user-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/clients/workspace-settings-client.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/clients/workspace-settings-client.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkspaceSettingsClient: () => (/* binding */ WorkspaceSettingsClient)
/* harmony export */ });
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

class WorkspaceSettingsClient {
    constructor(broker) {
        this.broker = broker;
    }
    open(config) {
        return this.broker.sendAsync(_extension_messages__WEBPACK_IMPORTED_MODULE_0__.Messages.openWorkspaceSettings.start(config));
    }
}
//# sourceMappingURL=workspace-settings-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/activity.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/activity.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultIimeoutForOpenArtifactRequest: () => (/* binding */ defaultIimeoutForOpenArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactRequest: () => (/* binding */ defaultTimeoutForCreateArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactUI: () => (/* binding */ defaultTimeoutForCreateArtifactUI),
/* harmony export */   defaultTimeoutForOpenArtifact: () => (/* binding */ defaultTimeoutForOpenArtifact),
/* harmony export */   extensionActivityStatusList: () => (/* binding */ extensionActivityStatusList)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
const extensionActivityStatusList = [
    'Pending',
    'Succeeded',
    'SucceededWithErrors',
    'Failed',
    'FailedWithRemote',
    'Interrupted',
    'Cancelled',
];
const defaultTimeoutForOpenArtifact = 60 * 1000;
const defaultTimeoutForCreateArtifactUI = 60 * 1000;
const defaultTimeoutForCreateArtifactRequest = 60 * 1000;
const defaultIimeoutForOpenArtifactRequest = Infinity;
//# sourceMappingURL=activity.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-action.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-action.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-action.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-change.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-change.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-change.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-create.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-create.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-create.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-job.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-job.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactJobPropertyIndex: () => (/* binding */ ArtifactJobPropertyIndex)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var ArtifactJobPropertyIndex;
(function (ArtifactJobPropertyIndex) {
    /**
     * A name specific to workload, like "Application_1" in Spark.
     */
    ArtifactJobPropertyIndex["AdditionalName"] = "1";
    /**
     * A unique Id specific to workload, like "Livy ID" in Spark.
     */
    ArtifactJobPropertyIndex["UniqueId"] = "2";
    /**
     * The type of job specific to workload, like "Session/Batch/Streaming.
     */
    ArtifactJobPropertyIndex["JobType"] = "3";
    /**
     * The kind specific to workload, like "Manual/Scheduled/Retry(2/2 attempts).
     */
    ArtifactJobPropertyIndex["RunKind"] = "4";
    /**
     * The related artifacts specific to workload.
     */
    ArtifactJobPropertyIndex["RelatedArtifacts"] = "5";
    /**
     * The capacity usage of the job, like cpu/mem usage.
     */
    ArtifactJobPropertyIndex["CapacityUsage"] = "6";
    /**
     * A brief message why the job failed, like "Access denied". Will be displayed as tooltip next to the status in the UX when available.
     */
    ArtifactJobPropertyIndex["InlineError"] = "7";
    /**
     * The exact status of job specific to workload, like "Library Packaging". Will be displayed next to the status in the UX when available.
     */
    ArtifactJobPropertyIndex["SubStatus"] = "8";
    /**
     * The average execution duration in seconds of success jobs over the past period of time.
     */
    ArtifactJobPropertyIndex["AverageDuration"] = "9";
    /**
     * The average number of job executions per day in the past period of time.
     */
    ArtifactJobPropertyIndex["ActivitiesPerDay"] = "10";
})(ArtifactJobPropertyIndex || (ArtifactJobPropertyIndex = {}));
//# sourceMappingURL=artifact-job.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-select.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-select.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-select.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-settings.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-settings.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-sharing.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-sharing.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Permissions: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.Permissions)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=artifact-sharing.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/artifact-state.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=artifact-state.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/auth.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/auth.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/bootstrap.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/bootstrap.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultExtensionClientConfig: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.DefaultExtensionClientConfig)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/capacity-settings.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/capacity-settings.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=capacity-settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/ces.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/ces.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservedFeedbackAttribute: () => (/* binding */ ReservedFeedbackAttribute)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
const ReservedFeedbackAttribute = {
    Like: 'Like',
    Product: 'Product',
    FeedbackFeatureName: 'FeedbackFeatureName',
};
//# sourceMappingURL=ces.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/datahub.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/datahub.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatahubFilterType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.DatahubListPivot),
/* harmony export */   DisplayColumn: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.DisplayColumn),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.SupportedDatahubStyleProperties)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=datahub.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/dialog.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/dialog.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.ButtonType),
/* harmony export */   DialogType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.DialogType)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=dialog.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/dom.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/dom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/endorsement.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/endorsement.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtifactStage: () => (/* binding */ ArtifactStage),
/* harmony export */   CertificationState: () => (/* binding */ CertificationState),
/* harmony export */   EndorsementArtifactType: () => (/* binding */ EndorsementArtifactType),
/* harmony export */   EndorsementLinkType: () => (/* binding */ EndorsementLinkType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// TODO: #962930 - unify contracts between trident and shared repos.
// Copy from src\Clients\PowerBIContracts\contracts.ts
var EndorsementArtifactType;
(function (EndorsementArtifactType) {
    EndorsementArtifactType[EndorsementArtifactType["Unknown"] = 0] = "Unknown";
    EndorsementArtifactType[EndorsementArtifactType["Dashboard"] = 1] = "Dashboard";
    EndorsementArtifactType[EndorsementArtifactType["Report"] = 2] = "Report";
    EndorsementArtifactType[EndorsementArtifactType["Model"] = 3] = "Model";
    EndorsementArtifactType[EndorsementArtifactType["Workbook"] = 4] = "Workbook";
    EndorsementArtifactType[EndorsementArtifactType["App"] = 5] = "App";
    EndorsementArtifactType[EndorsementArtifactType["RdlReport"] = 6] = "RdlReport";
    EndorsementArtifactType[EndorsementArtifactType["Dataflow"] = 7] = "Dataflow";
    EndorsementArtifactType[EndorsementArtifactType["Tile"] = 8] = "Tile";
    EndorsementArtifactType[EndorsementArtifactType["StreamingDataflow"] = 9] = "StreamingDataflow";
    EndorsementArtifactType[EndorsementArtifactType["Folder"] = 10] = "Folder";
    EndorsementArtifactType[EndorsementArtifactType["Datamart"] = 11] = "Datamart";
    EndorsementArtifactType[EndorsementArtifactType["Artifact"] = 12] = "Artifact";
})(EndorsementArtifactType || (EndorsementArtifactType = {}));
var CertificationState;
(function (CertificationState) {
    CertificationState[CertificationState["Off"] = 0] = "Off";
    CertificationState[CertificationState["Promoted"] = 1] = "Promoted";
    CertificationState[CertificationState["Certified"] = 2] = "Certified";
})(CertificationState || (CertificationState = {}));
var ArtifactStage;
(function (ArtifactStage) {
    ArtifactStage["None"] = "None";
    ArtifactStage["Promoted"] = "Promoted";
    ArtifactStage["Certified"] = "Certified";
})(ArtifactStage || (ArtifactStage = {}));
var EndorsementLinkType;
(function (EndorsementLinkType) {
    EndorsementLinkType["LearnMore"] = "Learn More Link";
    EndorsementLinkType["HowToCertify"] = "How To Certify Link";
})(EndorsementLinkType || (EndorsementLinkType = {}));
//# sourceMappingURL=endorsement.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/error.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/error.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorKind: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.ErrorKind)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/event.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/event.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExposeTo: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.ExposeTo),
/* harmony export */   PreDefinedEventName: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.PreDefinedEventName)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=event.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/extension-action.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/extension-action.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreDefinedExtensionAction: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.PreDefinedExtensionAction)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=extension-action.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/git-integration.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/git-integration.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=git-integration.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/help.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/help.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=help.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADUserMetaDataObjectType: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_38__.ADUserMetaDataObjectType),
/* harmony export */   ArtifactJobPropertyIndex: () => (/* reexport safe */ _artifact_job__WEBPACK_IMPORTED_MODULE_4__.ArtifactJobPropertyIndex),
/* harmony export */   ArtifactStage: () => (/* reexport safe */ _endorsement__WEBPACK_IMPORTED_MODULE_16__.ArtifactStage),
/* harmony export */   ButtonType: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_14__.ButtonType),
/* harmony export */   CertificationState: () => (/* reexport safe */ _endorsement__WEBPACK_IMPORTED_MODULE_16__.CertificationState),
/* harmony export */   CloseMode: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_36__.CloseMode),
/* harmony export */   DatahubFilterType: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_13__.DatahubFilterType),
/* harmony export */   DatahubListPivot: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_13__.DatahubListPivot),
/* harmony export */   DefaultExtensionClientConfig: () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_10__.DefaultExtensionClientConfig),
/* harmony export */   DialogType: () => (/* reexport safe */ _dialog__WEBPACK_IMPORTED_MODULE_14__.DialogType),
/* harmony export */   DisplayColumn: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_13__.DisplayColumn),
/* harmony export */   EndorsementArtifactType: () => (/* reexport safe */ _endorsement__WEBPACK_IMPORTED_MODULE_16__.EndorsementArtifactType),
/* harmony export */   EndorsementLinkType: () => (/* reexport safe */ _endorsement__WEBPACK_IMPORTED_MODULE_16__.EndorsementLinkType),
/* harmony export */   ErrorKind: () => (/* reexport safe */ _error__WEBPACK_IMPORTED_MODULE_17__.ErrorKind),
/* harmony export */   ExposeTo: () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_18__.ExposeTo),
/* harmony export */   ExtensionLoadEventType: () => (/* reexport safe */ _telemetry__WEBPACK_IMPORTED_MODULE_35__.ExtensionLoadEventType),
/* harmony export */   FeatureOwner: () => (/* reexport safe */ _shortcut__WEBPACK_IMPORTED_MODULE_32__.FeatureOwner),
/* harmony export */   GroupType: () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_38__.GroupType),
/* harmony export */   LifecycleEventType: () => (/* reexport safe */ _telemetry__WEBPACK_IMPORTED_MODULE_35__.LifecycleEventType),
/* harmony export */   NativeProductTypes: () => (/* reexport safe */ _product__WEBPACK_IMPORTED_MODULE_30__.NativeProductTypes),
/* harmony export */   NotificationToastDuration: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_26__.NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_26__.NotificationType),
/* harmony export */   OpenMode: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_36__.OpenMode),
/* harmony export */   OpenNotificationButtonType: () => (/* reexport safe */ _notification__WEBPACK_IMPORTED_MODULE_26__.OpenNotificationButtonType),
/* harmony export */   Permissions: () => (/* reexport safe */ _artifact_sharing__WEBPACK_IMPORTED_MODULE_7__.Permissions),
/* harmony export */   PreDefinedEventName: () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_18__.PreDefinedEventName),
/* harmony export */   PreDefinedExtensionAction: () => (/* reexport safe */ _extension_action__WEBPACK_IMPORTED_MODULE_19__.PreDefinedExtensionAction),
/* harmony export */   ReservedFeedbackAttribute: () => (/* reexport safe */ _ces__WEBPACK_IMPORTED_MODULE_12__.ReservedFeedbackAttribute),
/* harmony export */   ShortcutType: () => (/* reexport safe */ _shortcut__WEBPACK_IMPORTED_MODULE_32__.ShortcutType),
/* harmony export */   SupportedDatahubStyleProperties: () => (/* reexport safe */ _datahub__WEBPACK_IMPORTED_MODULE_13__.SupportedDatahubStyleProperties),
/* harmony export */   TriggerType: () => (/* reexport safe */ _information_protection__WEBPACK_IMPORTED_MODULE_22__.TriggerType),
/* harmony export */   UserAccountStatus: () => (/* reexport safe */ _telemetry__WEBPACK_IMPORTED_MODULE_35__.UserAccountStatus),
/* harmony export */   defaultIimeoutForOpenArtifactRequest: () => (/* reexport safe */ _activity__WEBPACK_IMPORTED_MODULE_0__.defaultIimeoutForOpenArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactRequest: () => (/* reexport safe */ _activity__WEBPACK_IMPORTED_MODULE_0__.defaultTimeoutForCreateArtifactRequest),
/* harmony export */   defaultTimeoutForCreateArtifactUI: () => (/* reexport safe */ _activity__WEBPACK_IMPORTED_MODULE_0__.defaultTimeoutForCreateArtifactUI),
/* harmony export */   defaultTimeoutForOpenArtifact: () => (/* reexport safe */ _activity__WEBPACK_IMPORTED_MODULE_0__.defaultTimeoutForOpenArtifact),
/* harmony export */   extensionActivityStatusList: () => (/* reexport safe */ _activity__WEBPACK_IMPORTED_MODULE_0__.extensionActivityStatusList)
/* harmony export */ });
/* harmony import */ var _activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activity */ "./node_modules/@trident/extension-client/src/lib/contracts/activity.js");
/* harmony import */ var _artifact_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artifact-action */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-action.js");
/* harmony import */ var _artifact_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artifact-change */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-change.js");
/* harmony import */ var _artifact_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artifact-create */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-create.js");
/* harmony import */ var _artifact_job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artifact-job */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-job.js");
/* harmony import */ var _artifact_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artifact-select */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-select.js");
/* harmony import */ var _artifact_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./artifact-settings */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-settings.js");
/* harmony import */ var _artifact_sharing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artifact-sharing */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-sharing.js");
/* harmony import */ var _artifact_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./artifact-state */ "./node_modules/@trident/extension-client/src/lib/contracts/artifact-state.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth */ "./node_modules/@trident/extension-client/src/lib/contracts/auth.js");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap */ "./node_modules/@trident/extension-client/src/lib/contracts/bootstrap.js");
/* harmony import */ var _capacity_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capacity-settings */ "./node_modules/@trident/extension-client/src/lib/contracts/capacity-settings.js");
/* harmony import */ var _ces__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ces */ "./node_modules/@trident/extension-client/src/lib/contracts/ces.js");
/* harmony import */ var _datahub__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datahub */ "./node_modules/@trident/extension-client/src/lib/contracts/datahub.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog */ "./node_modules/@trident/extension-client/src/lib/contracts/dialog.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dom */ "./node_modules/@trident/extension-client/src/lib/contracts/dom.js");
/* harmony import */ var _endorsement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./endorsement */ "./node_modules/@trident/extension-client/src/lib/contracts/endorsement.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error */ "./node_modules/@trident/extension-client/src/lib/contracts/error.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./event */ "./node_modules/@trident/extension-client/src/lib/contracts/event.js");
/* harmony import */ var _extension_action__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./extension-action */ "./node_modules/@trident/extension-client/src/lib/contracts/extension-action.js");
/* harmony import */ var _git_integration__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./git-integration */ "./node_modules/@trident/extension-client/src/lib/contracts/git-integration.js");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./help */ "./node_modules/@trident/extension-client/src/lib/contracts/help.js");
/* harmony import */ var _information_protection__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./information-protection */ "./node_modules/@trident/extension-client/src/lib/contracts/information-protection.js");
/* harmony import */ var _list_action__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./list-action */ "./node_modules/@trident/extension-client/src/lib/contracts/list-action.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./localization */ "./node_modules/@trident/extension-client/src/lib/contracts/localization.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./navigation */ "./node_modules/@trident/extension-client/src/lib/contracts/navigation.js");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./notification */ "./node_modules/@trident/extension-client/src/lib/contracts/notification.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page */ "./node_modules/@trident/extension-client/src/lib/contracts/page.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./panel */ "./node_modules/@trident/extension-client/src/lib/contracts/panel.js");
/* harmony import */ var _perf__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./perf */ "./node_modules/@trident/extension-client/src/lib/contracts/perf.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./product */ "./node_modules/@trident/extension-client/src/lib/contracts/product.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./settings */ "./node_modules/@trident/extension-client/src/lib/contracts/settings.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@trident/extension-client/src/lib/contracts/shortcut.js");
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./subscription */ "./node_modules/@trident/extension-client/src/lib/contracts/subscription.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tab */ "./node_modules/@trident/extension-client/src/lib/contracts/tab.js");
/* harmony import */ var _telemetry__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./telemetry */ "./node_modules/@trident/extension-client/src/lib/contracts/telemetry.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./ui */ "./node_modules/@trident/extension-client/src/lib/contracts/ui.js");
/* harmony import */ var _universal_security__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./universal-security */ "./node_modules/@trident/extension-client/src/lib/contracts/universal-security.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user */ "./node_modules/@trident/extension-client/src/lib/contracts/user.js");
/* harmony import */ var _workspace_settings__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./workspace-settings */ "./node_modules/@trident/extension-client/src/lib/contracts/workspace-settings.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------








































//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/information-protection.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/information-protection.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TriggerType: () => (/* binding */ TriggerType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// Copy from src\Modern\Shared\InformationProtection\typings.d.ts 
var TriggerType;
(function (TriggerType) {
    TriggerType[TriggerType["Manual"] = 1] = "Manual";
    TriggerType[TriggerType["Inheritance"] = 2] = "Inheritance";
    TriggerType[TriggerType["Publish"] = 3] = "Publish";
})(TriggerType || (TriggerType = {}));
//# sourceMappingURL=information-protection.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/list-action.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/list-action.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=list-action.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/localization.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/localization.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=localization.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/navigation.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/navigation.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/notification.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/notification.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationToastDuration: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.NotificationToastDuration),
/* harmony export */   NotificationType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.NotificationType),
/* harmony export */   OpenNotificationButtonType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.OpenNotificationButtonType)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=notification.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/page.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/page.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=page.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/panel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/panel.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=panel.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/perf.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/perf.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=perf.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/product.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/product.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NativeProductTypes: () => (/* binding */ NativeProductTypes)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
/**
 * Keeping the native list of product types hard coded for validation.
 * Please do not use this type explicetly as it will block support for 3rd party extensions
 */
const NativeProductTypes = [
    'api-playground',
    'app-development',
    'data-activator',
    'databases',
    'data-engineering',
    'data-factory',
    'data-science',
    'data-warehouse',
    'digital-operations',
    'functions',
    'industry-solutions',
    'kusto',
    'microsoft-supply-chain-center',
    'power-bi',
];
//# sourceMappingURL=product.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/settings.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/settings.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/shortcut.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/shortcut.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureOwner: () => (/* binding */ FeatureOwner),
/* harmony export */   ShortcutType: () => (/* binding */ ShortcutType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
var ShortcutType;
(function (ShortcutType) {
    ShortcutType["ADLS"] = "ADLS";
    ShortcutType["ExternalADLS"] = "ExternalADLS";
    ShortcutType["S3"] = "S3";
    ShortcutType["Dataverse"] = "Dataverse";
    ShortcutType["GCP"] = "GCP";
    ShortcutType["S3Compatible"] = "S3Compatible";
})(ShortcutType || (ShortcutType = {}));
var FeatureOwner;
(function (FeatureOwner) {
    FeatureOwner["Platform"] = "Platform";
    FeatureOwner["Workload"] = "Workload";
})(FeatureOwner || (FeatureOwner = {}));
//# sourceMappingURL=shortcut.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/subscription.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/subscription.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=subscription.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/tab.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/tab.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/telemetry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/telemetry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionLoadEventType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.ExtensionLoadEventType),
/* harmony export */   LifecycleEventType: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.LifecycleEventType),
/* harmony export */   UserAccountStatus: () => (/* binding */ UserAccountStatus)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


var UserAccountStatus;
(function (UserAccountStatus) {
    UserAccountStatus[UserAccountStatus["Member"] = 0] = "Member";
    UserAccountStatus[UserAccountStatus["Guest"] = 1] = "Guest";
})(UserAccountStatus || (UserAccountStatus = {}));
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/ui.js":
/*!************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/ui.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseMode: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.CloseMode),
/* harmony export */   OpenMode: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.OpenMode)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/universal-security.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/universal-security.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=universal-security.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/user.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/user.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADUserMetaDataObjectType: () => (/* binding */ ADUserMetaDataObjectType),
/* harmony export */   GroupType: () => (/* binding */ GroupType)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// copy from Typings\contracts.d.ts
var ADUserMetaDataObjectType;
(function (ADUserMetaDataObjectType) {
    ADUserMetaDataObjectType[ADUserMetaDataObjectType["User"] = 1] = "User";
    ADUserMetaDataObjectType[ADUserMetaDataObjectType["Group"] = 2] = "Group";
    ADUserMetaDataObjectType[ADUserMetaDataObjectType["External"] = 3] = "External";
    ADUserMetaDataObjectType[ADUserMetaDataObjectType["All"] = 3] = "All";
})(ADUserMetaDataObjectType || (ADUserMetaDataObjectType = {}));
var GroupType;
(function (GroupType) {
    GroupType[GroupType["Unknown"] = 0] = "Unknown";
    GroupType[GroupType["SecurityGroup"] = 1] = "SecurityGroup";
    GroupType[GroupType["DistributionList"] = 2] = "DistributionList";
    GroupType[GroupType["EmailEnabledSecurityGroup"] = 3] = "EmailEnabledSecurityGroup";
    GroupType[GroupType["O365Group"] = 4] = "O365Group";
})(GroupType || (GroupType = {}));
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/contracts/workspace-settings.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/contracts/workspace-settings.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------

//# sourceMappingURL=workspace-settings.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/extension-bootstrap.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/extension-bootstrap.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* reexport safe */ _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.bootstrap)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json


//# sourceMappingURL=extension-bootstrap.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/extension-client.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/extension-client.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionClient: () => (/* binding */ ExtensionClient),
/* harmony export */   createExtensionClient: () => (/* binding */ createExtensionClient)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contracts */ "./node_modules/@trident/extension-client/src/lib/contracts/index.js");
/* harmony import */ var _extension_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension-messages */ "./node_modules/@trident/extension-client/src/lib/extension-messages.js");
/* harmony import */ var _clients_non_public_localization_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients/non-public/localization-client */ "./node_modules/@trident/extension-client/src/lib/clients/non-public/localization-client.js");
/* harmony import */ var _clients_artifact_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients/artifact-client */ "./node_modules/@trident/extension-client/src/lib/clients/artifact-client.js");
/* harmony import */ var _clients_artifact_action_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clients/artifact-action-client */ "./node_modules/@trident/extension-client/src/lib/clients/artifact-action-client.js");
/* harmony import */ var _clients_artifact_status_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clients/artifact-status-client */ "./node_modules/@trident/extension-client/src/lib/clients/artifact-status-client.js");
/* harmony import */ var _clients_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/auth-client */ "./node_modules/@trident/extension-client/src/lib/clients/auth-client.js");
/* harmony import */ var _clients_ces_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients/ces-client */ "./node_modules/@trident/extension-client/src/lib/clients/ces-client.js");
/* harmony import */ var _clients_help_pane_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients/help-pane-client */ "./node_modules/@trident/extension-client/src/lib/clients/help-pane-client.js");
/* harmony import */ var _clients_information_protection_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients/information-protection-client */ "./node_modules/@trident/extension-client/src/lib/clients/information-protection-client.js");
/* harmony import */ var _clients_interaction_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./clients/interaction-client */ "./node_modules/@trident/extension-client/src/lib/clients/interaction-client.js");
/* harmony import */ var _clients_multitasking_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/multitasking-client */ "./node_modules/@trident/extension-client/src/lib/clients/multitasking-client.js");
/* harmony import */ var _clients_shortcut_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clients/shortcut-client */ "./node_modules/@trident/extension-client/src/lib/clients/shortcut-client.js");
/* harmony import */ var _clients_telemetry_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/telemetry-client */ "./node_modules/@trident/extension-client/src/lib/clients/telemetry-client.js");
/* harmony import */ var _clients_universal_security_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients/universal-security-client */ "./node_modules/@trident/extension-client/src/lib/clients/universal-security-client.js");
/* harmony import */ var _clients_user_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./clients/user-client */ "./node_modules/@trident/extension-client/src/lib/clients/user-client.js");
/* harmony import */ var _clients_git_integration_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clients/git-integration-client */ "./node_modules/@trident/extension-client/src/lib/clients/git-integration-client.js");
/* harmony import */ var _clients_workspace_settings_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clients/workspace-settings-client */ "./node_modules/@trident/extension-client/src/lib/clients/workspace-settings-client.js");
/* harmony import */ var _utils_perf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/perf */ "./node_modules/@trident/extension-client/src/lib/utils/perf.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json




















class ExtensionClient {
    constructor(config = _contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig) {
        this.config = config;
        this.client = new _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_0__.ExtensionClient(this.config);
        this._localization = new _clients_non_public_localization_client__WEBPACK_IMPORTED_MODULE_3__._LocalizationClient(this.broker);
        this.action = this.client.action;
        this.artifact = new _clients_artifact_client__WEBPACK_IMPORTED_MODULE_4__.ArtifactClient(this.broker);
        this.artifactAction = new _clients_artifact_action_client__WEBPACK_IMPORTED_MODULE_5__.ArtifactActionClient(this.broker);
        this.artifactRecentRuns = this.client.artifactRecentRuns;
        this.artifactSettings = this.client.artifactSettings;
        this.artifactStatus = new _clients_artifact_status_client__WEBPACK_IMPORTED_MODULE_6__.ArtifactStatusClient(this.broker);
        this.auth = new _clients_auth_client__WEBPACK_IMPORTED_MODULE_7__.AuthClient(this.client, this.broker);
        this.ces = new _clients_ces_client__WEBPACK_IMPORTED_MODULE_8__.CESClient(this.broker);
        this.datahub = this.client.datahub;
        this.gitIntegration = new _clients_git_integration_client__WEBPACK_IMPORTED_MODULE_17__.GitIntegrationClient(this.broker);
        this.dialog = this.client.dialog;
        this.errorHandling = this.client.errorHandling;
        this.event = this.client.event;
        this.helpPane = new _clients_help_pane_client__WEBPACK_IMPORTED_MODULE_9__.HelpPaneClient(this.broker);
        this.informationProtection = new _clients_information_protection_client__WEBPACK_IMPORTED_MODULE_10__.InformationProtectionClient(this.broker);
        this.interaction = new _clients_interaction_client__WEBPACK_IMPORTED_MODULE_11__.InteractionClient(this.broker);
        this.multitasking = new _clients_multitasking_client__WEBPACK_IMPORTED_MODULE_12__.MultitaskingClient(this.broker);
        this.navigation = this.client.navigation;
        this.notification = this.client.notification;
        this.page = this.client.page;
        this.panel = this.client.panel;
        this.permission = this.client.permission;
        this.settings = this.client.settings;
        this.shortcut = new _clients_shortcut_client__WEBPACK_IMPORTED_MODULE_13__.ShortcutClient(this.broker);
        this.state = this.client.state;
        this.subfolder = this.client.subfolder;
        this.telemetry = new _clients_telemetry_client__WEBPACK_IMPORTED_MODULE_14__.TelemetryClient(this.broker);
        this.theme = this.client.theme;
        this.universalSecurity = new _clients_universal_security_client__WEBPACK_IMPORTED_MODULE_15__.UniversalSecurityClient(this.broker);
        this.user = new _clients_user_client__WEBPACK_IMPORTED_MODULE_16__.UserClient(this.broker);
        this.workspaceSettings = new _clients_workspace_settings_client__WEBPACK_IMPORTED_MODULE_18__.WorkspaceSettingsClient(this.broker);
        this.navigation.onNavigate((nav) => {
            _utils_perf__WEBPACK_IMPORTED_MODULE_19__.openArtifactRequestPerfTracker.onNavigate(nav.targetUrl);
        });
    }
    get broker() {
        return this.client.broker;
    }
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    //
    // ██████╗  ██████╗     ███╗   ██╗ ██████╗ ████████╗     █████╗ ██████╗ ██████╗     ███╗   ██╗███████╗██╗    ██╗    ██████╗ ███████╗██╗      ██████╗ ██╗    ██╗
    // ██╔══██╗██╔═══██╗    ████╗  ██║██╔═══██╗╚══██╔══╝    ██╔══██╗██╔══██╗██╔══██╗    ████╗  ██║██╔════╝██║    ██║    ██╔══██╗██╔════╝██║     ██╔═══██╗██║    ██║
    // ██║  ██║██║   ██║    ██╔██╗ ██║██║   ██║   ██║       ███████║██║  ██║██║  ██║    ██╔██╗ ██║█████╗  ██║ █╗ ██║    ██████╔╝█████╗  ██║     ██║   ██║██║ █╗ ██║
    // ██║  ██║██║   ██║    ██║╚██╗██║██║   ██║   ██║       ██╔══██║██║  ██║██║  ██║    ██║╚██╗██║██╔══╝  ██║███╗██║    ██╔══██╗██╔══╝  ██║     ██║   ██║██║███╗██║
    // ██████╔╝╚██████╔╝    ██║ ╚████║╚██████╔╝   ██║       ██║  ██║██████╔╝██████╔╝    ██║ ╚████║███████╗╚███╔███╔╝    ██████╔╝███████╗███████╗╚██████╔╝╚███╔███╔╝
    // ╚═════╝  ╚═════╝     ╚═╝  ╚═══╝ ╚═════╝    ╚═╝       ╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝     ╚═════╝ ╚══════╝╚══════╝ ╚═════╝  ╚══╝╚══╝
    //
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get sharedState() {
        return this.state.sharedState;
    }
    registerArtifactActionProvider(handler) {
        return this.artifactAction.registerProvider(handler);
    }
    registerHelpPaneDataProvider(handler) {
        return this.helpPane.registerDataProvider(handler);
    }
    handleInvalidRoute(config) {
        return this.errorHandling.handleInvalidRoute(config);
    }
    onAction(handler) {
        return this.action.onAction(handler);
    }
    onNavigate(handler) {
        return this.navigation.onNavigate(handler);
    }
    onLeave(handler) {
        return this.navigation.onBeforeNavigateAway(handler);
    }
    onLeaveEnd(handler) {
        return this.navigation.onAfterNavigateAway(handler);
    }
    onArtifactUpdate(config, handler) {
        return this.artifact.onChange(config, handler);
    }
    getAccessToken(scopes, forceRefresh) {
        return this.auth.getAccessToken(scopes, forceRefresh);
    }
    getMWCToken(claimsContext) {
        return this.auth.getMWCToken(claimsContext);
    }
    getMWCTokenV2(claimsContext) {
        return this.auth.getMWCTokenV2(claimsContext);
    }
    getSettings() {
        return this.settings.get();
    }
    getTheme() {
        return this.theme.get();
    }
    getUserProfile() {
        return this.user.getProfile();
    }
    handleRequestFailure(response) {
        return this.errorHandling.handleRequestFailure(response);
    }
    onSettingsChange(handler) {
        return this.settings.onChange(handler);
    }
    onThemeChange(handler) {
        return this.theme.onChange(handler);
    }
    openUniversalSecurity(universalSecurityConfig) {
        return this.universalSecurity.open(universalSecurityConfig);
    }
    openCreateShortcut(createShortcutConfig) {
        return this.shortcut.openCreateWizard(createShortcutConfig);
    }
    onShortcutWizardClosed(handler) {
        return this.shortcut.onCreateWizardClose(handler);
    }
    logEvent(event) {
        return this.telemetry.logEvent(event);
    }
    openNotification(config) {
        return this.notification.open(config);
    }
    hideNotification(config) {
        return this.notification.hide(config);
    }
    openError(config) {
        return this.errorHandling.openErrorDialog(config);
    }
    openPage(config) {
        return this.page.open(config);
    }
    openDialog(config) {
        return this.dialog.open(config);
    }
    closeDialog(config = {}) {
        return this.dialog.close(config);
    }
    openPanel(config) {
        return this.panel.open(config);
    }
    closePanel(config = {}) {
        return this.panel.close(config);
    }
    openArtifactSettings(config) {
        return this.artifactSettings.open(config);
    }
    openArtifactRecentRuns(config) {
        return this.artifactRecentRuns.open(config);
    }
    setExtensionIframeDimensions(config) {
        return this.artifactSettings.setIframeDimensions(config);
    }
    onCloseArtifactSettings(handler) {
        return this.artifactSettings.onClose(handler);
    }
    setRoute(route) {
        this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.setRoute(route));
    }
    navigate(route) {
        this.broker.send(_extension_messages__WEBPACK_IMPORTED_MODULE_2__.Messages.navigate(route));
    }
    navigateAsync(route) {
        return this.navigation.navigate('host', route);
    }
    updateTab(config) {
        return this.multitasking.updateTab(config);
    }
    executeAction(action) {
        return this.action.execute(action);
    }
    postDOMEvent(config) {
        return this.interaction.postDOMEvent(config);
    }
    getInformationProtectionLabels() {
        return this.informationProtection.getLabels();
    }
    getInformationProtectionUserPolicySettings() {
        return this.informationProtection.getUserPolicySettings();
    }
    shouldShowInformationProtectionCreateComponent() {
        return this.informationProtection.shouldShowCreateComponent();
    }
    getLabelByArtifactObjectId(config) {
        return this.informationProtection.getLabelByArtifactObjectId(config);
    }
    updateSelectedArtifactState(config) {
        return this.artifactStatus.update(config);
    }
    openDatahubDialog(config) {
        return this.datahub.openDialog(config);
    }
    /**
     * @state experimental
     *
     * @description
     * ATTENTION: not part of the Interface in order to keep it internal to Trident platform developers
     * Returns localized strings for the requested ids that exist in Trident strings
     *
     * @param config includes keys details for strings in Trident
     */
    getLocalizedStrings(config) {
        return this._localization.getLocalizedStrings(config);
    }
    openArtifactSharingDialog(config) {
        return this.permission.openArtifactSharingDialog(config);
    }
    checkPermissionsOfArtifact(input) {
        return this.permission.checkPermissionsOfArtifact(input);
    }
    checkPermissionsOfWorkspace(input) {
        return this.permission.checkPermissionsOfWorkspace(input);
    }
    getPermissionsOfArtifact(input) {
        return this.permission.getPermissionsOfArtifact(input);
    }
    getPermissionsOfWorkspace(input) {
        return this.permission.getPermissionsOfWorkspace(input);
    }
    checkArtifactSharingEnabled(input) {
        return this.permission.checkArtifactSharingEnabled(input);
    }
    getArtifactTypeShareablePermissions(input) {
        return this.permission.getArtifactTypeShareablePermissions(input);
    }
    updateActivityStatus(input) {
        return this.telemetry.updateActivityStatus(input);
    }
}
/**
 * @state experimental
 *
 * @description create an extension client instance.
 *
 * @returns the extension client instance
 *
 * @param config configuration of the extension client, optional with default config:
    * - `extensionHostWindow` – A window object - Reference to the extension host window, usefully when extensions have nested frames and use the extension client library in the inner frame - optional with default value to window.parent!.
 */
function createExtensionClient(config = _contracts__WEBPACK_IMPORTED_MODULE_1__.DefaultExtensionClientConfig) {
    return new ExtensionClient(config);
}
//# sourceMappingURL=extension-client.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/extension-messages.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/extension-messages.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionMessageType: () => (/* binding */ ExtensionMessageType),
/* harmony export */   Messages: () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var _trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trident/extension-client-message-broker */ "./node_modules/@trident/extension-client-message-broker/src/index.js");
/* harmony import */ var _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trident/extension-client-common */ "./node_modules/@trident/extension-client-common/src/index.js");
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-message-broker has been published and added to package.json

// eslint-disable-next-line no-restricted-syntax -- @trident/extension-client-common has been published and added to package.json

var ExtensionMessageType;
(function (ExtensionMessageType) {
    ExtensionMessageType["onGetArtifactActionData"] = "OnGetArtifactActionData";
    ExtensionMessageType["onGetHelpPaneData"] = "OnGetHelpPaneData";
    ExtensionMessageType["onArtifactUpdate"] = "OnArtifactUpdate";
    ExtensionMessageType["subscribeArtifactUpdate"] = "SubscribeArtifactUpdate";
    ExtensionMessageType["unsubscribeArtifactUpdate"] = "UnubscribeArtifactUpdate";
    ExtensionMessageType["getMWCToken"] = "GetMWCToken";
    ExtensionMessageType["getMWCTokenV2"] = "GetMWCTokenV2";
    ExtensionMessageType["getUserProfile"] = "GetUserProfile";
    ExtensionMessageType["openCreateShortcut"] = "openCreateShortcut";
    ExtensionMessageType["onShortcutWizardClosed"] = "onShortcutWizardClosed";
    ExtensionMessageType["setRoute"] = "SetRoute";
    ExtensionMessageType["navigate"] = "Navigate";
    ExtensionMessageType["updateTab"] = "UpdateTab";
    ExtensionMessageType["shouldShowInformationProtectionCreateComponent"] = "ShouldShowInformationProtectionCreateComponent";
    ExtensionMessageType["getInformationProtectionUserPolicySettings"] = "GetInformationProtectionUserPolicySettings";
    ExtensionMessageType["getInformationProtectionLabels"] = "GetInformationProtectionLabels";
    ExtensionMessageType["getLabelByArtifactObjectId"] = "GetLabelByArtifactObjectIdResult";
    ExtensionMessageType["updateSelectedArtifactState"] = "UpdateSelectedArtifactState";
    ExtensionMessageType["openUniversalSecurity"] = "OpenUniversalSecurity";
    ExtensionMessageType["getLocalizedStrings"] = "GetLocalizedStrings";
    ExtensionMessageType["startActivity"] = "StartActivity";
    ExtensionMessageType["updateActivityStatus"] = "UpdateActivityStatus";
    ExtensionMessageType["findUsers"] = "FindUsers";
    ExtensionMessageType["getGitConnection"] = "GetGitConnection";
    ExtensionMessageType["onGitConnectionChange"] = "OnGitConnectionChange";
    ExtensionMessageType["openWorkspaceSettings"] = "OpenWorkspaceSettings";
    ExtensionMessageType["sendRatingFeedback"] = "SendRatingFeedback";
})(ExtensionMessageType || (ExtensionMessageType = {}));
const openNotification = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(_trident_extension_client_common__WEBPACK_IMPORTED_MODULE_1__.ExtensionMessageType.openNotification);
const onGetArtifactActionData = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.onGetArtifactActionData);
const onGetHelpPaneData = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.onGetHelpPaneData);
const onArtifactUpdate = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onArtifactUpdate);
const subscribeArtifactUpdate = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.subscribeArtifactUpdate);
const unsubscribeArtifactUpdate = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.unsubscribeArtifactUpdate);
const getMWCToken = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getMWCToken);
const getMWCTokenV2 = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getMWCTokenV2);
const startActivity = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.startActivity);
const updateActivityStatus = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.updateActivityStatus);
const getUserProfile = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getUserProfile);
const setRoute = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.setRoute);
const navigate = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.navigate);
const updateTab = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.updateTab);
const updateSelectedArtifactState = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.updateSelectedArtifactState);
const openUniversalSecurity = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openUniversalSecurity);
const openCreateShortcut = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openCreateShortcut);
const onShortcutWizardClosed = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onShortcutWizardClosed);
const shouldShowInformationProtectionCreateComponent = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.shouldShowInformationProtectionCreateComponent);
const getInformationProtectionUserPolicySettings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getInformationProtectionUserPolicySettings);
const getInformationProtectionLabels = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getInformationProtectionLabels);
const getLabelByArtifactObjectId = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getLabelByArtifactObjectId);
const getLocalizedStrings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getLocalizedStrings);
const findUsers = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.findUsers);
const getGitConnection = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.getGitConnection);
const onGitConnectionChange = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createExtensionMessage)(ExtensionMessageType.onGitConnectionChange);
const openWorkspaceSettings = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.openWorkspaceSettings);
const sendRatingFeedback = (0,_trident_extension_client_message_broker__WEBPACK_IMPORTED_MODULE_0__.createAsyncExtensionMessage)(ExtensionMessageType.sendRatingFeedback);
const Messages = Object.assign(Object.assign({}, _trident_extension_client_common__WEBPACK_IMPORTED_MODULE_1__.Messages), { openNotification,
    onGetArtifactActionData,
    onGetHelpPaneData,
    onArtifactUpdate,
    subscribeArtifactUpdate,
    unsubscribeArtifactUpdate,
    getMWCToken,
    getMWCTokenV2,
    startActivity,
    updateActivityStatus,
    getUserProfile,
    setRoute,
    navigate,
    updateTab,
    updateSelectedArtifactState,
    openUniversalSecurity,
    openCreateShortcut,
    onShortcutWizardClosed,
    shouldShowInformationProtectionCreateComponent,
    getInformationProtectionUserPolicySettings,
    getInformationProtectionLabels,
    getLabelByArtifactObjectId,
    getLocalizedStrings,
    findUsers,
    getGitConnection,
    onGitConnectionChange,
    openWorkspaceSettings,
    sendRatingFeedback });
//# sourceMappingURL=extension-messages.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/extension-version.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/extension-version.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT_VERSION: () => (/* binding */ CLIENT_VERSION)
/* harmony export */ });
const CLIENT_VERSION = '1.54.4';
//# sourceMappingURL=extension-version.js.map

/***/ }),

/***/ "./node_modules/@trident/extension-client/src/lib/utils/perf.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@trident/extension-client/src/lib/utils/perf.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonActivityPerfTracker: () => (/* binding */ commonActivityPerfTracker),
/* harmony export */   openArtifactRequestPerfTracker: () => (/* binding */ openArtifactRequestPerfTracker)
/* harmony export */ });
//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
//-----------------------------------------------------------------------
class ActivityPerfTracker {
    constructor() {
        this.store = new Map();
    }
    startActivity(activityId) {
        try {
            this.store.set(activityId, performance.now());
        }
        catch ( /* ignore */_a) { /* ignore */ }
    }
    endActivity(activityId) {
        try {
            const start = this.store.get(activityId);
            if (!start) {
                return null;
            }
            this.store.delete(activityId);
            const end = performance.now();
            const requests = window.performance.getEntriesByType('resource').filter((perfItem) => perfItem.startTime >= start && perfItem.startTime + perfItem.duration <= end).map((perfItem) => JSON.parse(JSON.stringify(perfItem)) // Raw PerformanceResourceTiming cannot be cloned when calling 'postMessage'
            );
            return {
                start: Math.round(performance.timeOrigin + start),
                end: Math.round(performance.timeOrigin + end),
                requests,
            };
        }
        catch ( /* ignore */_a) { /* ignore */ }
        return null;
    }
}
/**
 * This class is used to collect the performance of opening an artifact.
 * It is a temporary solution to automatically track the start and end time of opening an artifact.
 */
class OpenArtifactRequestPerfTracker extends ActivityPerfTracker {
    onNavigate(url) {
        try {
            const artifactId = this.extractArtifactId(url);
            if (artifactId) {
                this.startActivity(artifactId);
            }
        }
        catch ( /* ignore */_a) { /* ignore */ }
    }
    extractArtifactId(url) {
        var _a;
        if (url.includes('extensionScenario=openArtifact')) {
            return (_a = url.split('?')[0].split('/').pop()) !== null && _a !== void 0 ? _a : '';
        }
        return '';
    }
}
class CommonActivityPerfTracker {
    constructor() {
        this.tracker = new ActivityPerfTracker();
    }
    startActivity(config) {
        try {
            this.tracker.startActivity(this.getActivityId(config));
        }
        catch (e) { /* ignore */ }
    }
    endActivity(config) {
        try {
            if (config.status !== 'Pending') {
                return this.tracker.endActivity(this.getActivityId(config));
            }
        }
        catch (e) { /** ignore */ }
        return null;
    }
    getActivityId(config) {
        const parameters = [config.activityType];
        switch (config.activityType) {
            case 'openArtifact': {
                parameters.push(config.artifactObjectId);
                break;
            }
            case 'openArtifact:request': {
                parameters.push(config.requestId);
                break;
            }
            case 'renderUI': {
                parameters.push(config.scenario);
                break;
            }
            case 'createArtifact:UI':
            case 'createArtifact:request':
            case 'createArtifact:requests': {
                parameters.push(config.artifactType);
                break;
            }
            case 'updateArtifact:requests':
            case 'deleteArtifact:requests': {
                parameters.push(config.artifactType, config.artifactObjectId);
                break;
            }
            default: break;
        }
        return parameters.join(':');
    }
}
const openArtifactRequestPerfTracker = new OpenArtifactRequestPerfTracker();
const commonActivityPerfTracker = new CommonActivityPerfTracker();
//# sourceMappingURL=perf.js.map

/***/ }),

/***/ "./node_modules/bowser/es5.js":
/*!************************************!*\
  !*** ./node_modules/bowser/es5.js ***!
  \************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/apps/shell/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/apps/shell/index.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
#root {
  margin: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
`, "",{"version":3,"sources":["webpack://./src/apps/shell/index.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB","sourcesContent":["html,\r\nbody,\r\n#root {\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/apps/shell/index.css":
/*!**********************************!*\
  !*** ./src/apps/shell/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/apps/shell/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/apps/shell/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/apps/shell/index.css");
/* harmony import */ var _trident_extension_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trident/extension-client */ "./node_modules/@trident/extension-client/src/index.js");


(0,_trident_extension_client__WEBPACK_IMPORTED_MODULE_1__.bootstrap)({
    initializeWorker: (params) => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_tokens_lib_themes_web_lightTheme_js-node_modules_lakehouse-ux_c-eb2a40"), __webpack_require__.e("src_apps_core_index_ts"), __webpack_require__.e("src_apps_shell_index_worker_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index.worker */ "./src/apps/shell/index.worker.ts")).then(({ initialize }) => initialize(params)),
    initializeUI: (params) => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_tokens_lib_themes_web_lightTheme_js-node_modules_lakehouse-ux_c-eb2a40"), __webpack_require__.e("vendors-node_modules_fluentui_react-button_lib_components_Button_Button_js-node_modules_fluen-54b94b"), __webpack_require__.e("src_apps_core_index_ts"), __webpack_require__.e("src_apps_shell_index_ui_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./index.ui */ "./src/apps/shell/index.ui.tsx")).then(({ initialize }) => initialize(params)),
});

})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map