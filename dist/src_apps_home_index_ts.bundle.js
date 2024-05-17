"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_home_index_ts"],{

/***/ "./src/apps/home/components/CreateModalContents/CreateModalContents.render.tsx":
/*!*************************************************************************************!*\
  !*** ./src/apps/home/components/CreateModalContents/CreateModalContents.render.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateModalContentsRender: () => (/* binding */ useCreateModalContentsRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogBody/DialogBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-text/lib/components/presets/Subtitle2/Subtitle2.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");




const useCreateModalContentsRender = (props) => {
    const { state, styles } = props;
    const isCreating = state.saveState === 'Loading';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.DialogBody, { className: styles.root, "data-testid": "create-modal-root" /* TestIds.Root */ },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Subtitle2, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.artifacts.operational_insights.create.title_create)),
        state.saveError && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MessageBar, { intent: 'error', "data-testid": "create-modal-error-banner" /* TestIds.ErrorBanner */ }, (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getTridentAPIErrorMessage)(state.saveError))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Field, { className: styles.nameField, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.artifacts.operational_insights.create.artifact_name_label), orientation: 'vertical' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Input, { onChange: (_ev, data) => state.setArtifactName(data.value), placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.artifacts.operational_insights.create
                    .artifact_name_placeholder), "data-testid": "create-modal-name-input" /* TestIds.NameInput */, value: state.artifactName })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.actions },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Button, { onClick: () => state.onClose('cancel'), "data-testid": "create-modal-cancel-button" /* TestIds.CancelButton */ }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.cancel)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Button, { appearance: 'primary', className: styles.saveButton, disabled: !state.isSubmitEnabled, onClick: state.onSubmit, "data-testid": "create-modal-save-button" /* TestIds.SaveButton */ },
                isCreating && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.Spinner, { size: 'tiny' }),
                isCreating ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.creating) : (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.create)))));
};


/***/ }),

/***/ "./src/apps/home/components/CreateModalContents/CreateModalContents.state.ts":
/*!***********************************************************************************!*\
  !*** ./src/apps/home/components/CreateModalContents/CreateModalContents.state.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateModalContentsState: () => (/* binding */ useCreateModalContentsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-hooks */ "./node_modules/@fluentui/react-hooks/lib/usePrevious.js");



const MODULE_NAME = 'OperationalInsightsCreate';
const useCreateModalContentsState = (props) => {
    const { artifactId, isOpen, onClose, workspaceId: workspaceIdProp } = props;
    const mode = artifactId ? 'edit' : 'create';
    // contexts
    // state
    const [getArtifactResult, setGetArtifactResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'NotCalled',
    });
    const [createArtifactResult, setCreateArtifactResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'NotCalled',
    });
    const [updateArtifactResult, setUpdateArtifactResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'NotCalled',
    });
    const [artifactName, setArtifactName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    // hooks
    const artifactClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useArtifactClient)();
    // callbacks
    const isSubmitEnabled = artifactName?.trim().length > 0 && // name entered
        !(0,_do_core__WEBPACK_IMPORTED_MODULE_1__.isDataStateLoading)(createArtifactResult, updateArtifactResult, getArtifactResult) && // not creating, updating, fetching
        !(createArtifactResult?.data || updateArtifactResult?.data); // haven't already saved
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        if (mode === 'edit') {
            const artifactUpateParams = {
                etag: getArtifactResult?.data?.etag || '',
                payload: {
                    ...getArtifactResult,
                    displayName: artifactName,
                },
                objectId: artifactId,
            };
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, `Updating artifact {payload}`, artifactUpateParams);
            setUpdateArtifactResult({ state: 'Loading' });
            const result = await artifactClient?.updateArtifact(artifactUpateParams);
            if (result) {
                setUpdateArtifactResult(result);
            }
        }
        else {
            const args = {
                workspaceObjectId: workspaceIdProp,
                payload: {
                    artifactType: 'DigitalOperationsOperationalInsight',
                    displayName: artifactName,
                },
            };
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, `Create artifact {payload}`, args);
            setCreateArtifactResult({ state: 'Loading' });
            const result = await artifactClient?.createArtifact(args);
            if (result) {
                setCreateArtifactResult(result);
            }
        }
    }, [
        artifactClient,
        artifactId,
        artifactName,
        getArtifactResult,
        mode,
        workspaceIdProp,
    ]);
    // side effects
    const previousOpen = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(isOpen);
    // when the dialog is closed, reset the state
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!isOpen && previousOpen) {
            setGetArtifactResult({ state: 'NotCalled' });
            setCreateArtifactResult({ state: 'NotCalled' });
            setUpdateArtifactResult({ state: 'NotCalled' });
        }
    }, [isOpen, previousOpen]);
    // when the dialog is opened, if we are in edit mode, get the artifact details
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isOpen && mode === 'edit' && isOpen !== previousOpen) {
            const fetchArtifact = async () => {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, `Fetching artifact with id: ${artifactId}`);
                setGetArtifactResult({ state: 'Loading' });
                const result = await artifactClient?.getArtifact({
                    objectId: artifactId,
                });
                if (result) {
                    setGetArtifactResult(result);
                }
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, `Fetched artifact with id: ${artifactId}`);
            };
            fetchArtifact();
        }
    }, [artifactClient, artifactId, isOpen, mode, previousOpen]);
    // if the call completed, close the dialog
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (createArtifactResult.state === 'Complete' &&
            createArtifactResult.data) {
            onClose('submit', {
                objectId: createArtifactResult.data.objectId,
                displayName: createArtifactResult.data.displayName,
            });
        }
    }, [createArtifactResult, onClose]);
    // if the call completed, close the dialog
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (updateArtifactResult.state === 'Complete' &&
            updateArtifactResult.data) {
            onClose('submit', {
                objectId: updateArtifactResult.data.objectId,
                displayName: updateArtifactResult.data.displayName,
            });
        }
    }, [updateArtifactResult, onClose]);
    // data
    const saveError = createArtifactResult.error || updateArtifactResult.error;
    const saveState = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.combineStates)(createArtifactResult.state, updateArtifactResult.state);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            saveError,
            setArtifactName,
            artifactName,
            onClose,
            isSubmitEnabled,
            onSubmit,
            saveState,
            getArtifactResult,
        };
    }, [
        artifactName,
        getArtifactResult,
        isSubmitEnabled,
        onClose,
        onSubmit,
        saveError,
        saveState,
    ]);
    return state;
};


/***/ }),

/***/ "./src/apps/home/components/CreateModalContents/CreateModalContents.styles.ts":
/*!************************************************************************************!*\
  !*** ./src/apps/home/components/CreateModalContents/CreateModalContents.styles.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Bqenvij: "f1l02sjl",
    Beiy3e4: "f1vx9l62",
    Bxyxcbc: "f1immsc2",
    z8tnut: "fqag9an",
    z189sj: ["f1gbmcue", "f1rh9g5y"],
    Byoj8tv: "fp67ikv",
    uwmqm3: ["f1rh9g5y", "f1gbmcue"],
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  nameField: {
    jrapky: "f10jk5vf"
  },
  actions: {
    mc9l5x: "f22iagw",
    Brf1p80: "f9c4gz4",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  saveButton: {
    mc9l5x: "f22iagw",
    i8kkvl: "f1q8lukm",
    Belr9w4: "f1ma2n7n"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1l02sjl{height:100%;}", ".f1vx9l62{flex-direction:column;}", ".f1immsc2{max-height:100%;}", ".fqag9an{padding-top:16px;}", ".f1gbmcue{padding-right:16px;}", ".f1rh9g5y{padding-left:16px;}", ".fp67ikv{padding-bottom:16px;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f10jk5vf{margin-bottom:auto;}", ".f9c4gz4{justify-content:flex-end;}", ".f1q8lukm{column-gap:4px;}", ".f1ma2n7n{row-gap:4px;}"]
});

/***/ }),

/***/ "./src/apps/home/components/CreateModalContents/CreateModalContents.tsx":
/*!******************************************************************************!*\
  !*** ./src/apps/home/components/CreateModalContents/CreateModalContents.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateModalContents: () => (/* binding */ CreateModalContents)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _CreateModalContents_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateModalContents.render */ "./src/apps/home/components/CreateModalContents/CreateModalContents.render.tsx");
/* harmony import */ var _CreateModalContents_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateModalContents.styles */ "./src/apps/home/components/CreateModalContents/CreateModalContents.styles.ts");
/* harmony import */ var _CreateModalContents_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateModalContents.state */ "./src/apps/home/components/CreateModalContents/CreateModalContents.state.ts");




const MODULE_NAME = 'CreateModalContents';
const CreateModalContents = (props) => {
    // get state
    const state = (0,_CreateModalContents_state__WEBPACK_IMPORTED_MODULE_3__.useCreateModalContentsState)(props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_CreateModalContents_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the item
    return (0,_CreateModalContents_render__WEBPACK_IMPORTED_MODULE_1__.useCreateModalContentsRender)({ state, styles });
};
CreateModalContents.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/home/components/CreateModalContents/index.ts":
/*!***************************************************************!*\
  !*** ./src/apps/home/components/CreateModalContents/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateModalContents: () => (/* reexport safe */ _CreateModalContents__WEBPACK_IMPORTED_MODULE_0__.CreateModalContents)
/* harmony export */ });
/* harmony import */ var _CreateModalContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateModalContents */ "./src/apps/home/components/CreateModalContents/CreateModalContents.tsx");



/***/ }),

/***/ "./src/apps/home/components/HomeSection/HomeSection.render.tsx":
/*!*********************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/HomeSection.render.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHomeSectionRender: () => (/* binding */ useHomeSectionRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _SectionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionCard */ "./src/apps/home/components/HomeSection/SectionCard/index.ts");



const useHomeSectionRender = ({ state, styles, children, className, }) => {
    const { slots, slotProps } = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.getSlots)(state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { role: 'group', className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.title, { ...slotProps.title }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", { className: styles.aside }, children),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: styles.row, role: 'group' }, state.actions.map(renderSectionCard))));
};
const renderSectionCard = (action) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SectionCard__WEBPACK_IMPORTED_MODULE_1__.SectionCard, { className: action.className, key: action.key, title: action.title, icon: action.icon, action: action.action }, action.children));
};


/***/ }),

/***/ "./src/apps/home/components/HomeSection/HomeSection.root.tsx":
/*!*******************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/HomeSection.root.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeSection: () => (/* binding */ HomeSection)
/* harmony export */ });
/* harmony import */ var _HomeSection_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeSection.render */ "./src/apps/home/components/HomeSection/HomeSection.render.tsx");
/* harmony import */ var _HomeSection_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeSection.styles */ "./src/apps/home/components/HomeSection/HomeSection.styles.ts");
/* harmony import */ var _HomeSection_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeSection.state */ "./src/apps/home/components/HomeSection/HomeSection.state.ts");



const MODULE_NAME = 'HomeSection';
const HomeSection = (props) => {
    // get state
    const state = (0,_HomeSection_state__WEBPACK_IMPORTED_MODULE_2__.useHomeSectionState)(props);
    // get styles
    const styles = (0,_HomeSection_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_HomeSection_render__WEBPACK_IMPORTED_MODULE_0__.useHomeSectionRender)({
        state,
        styles,
        children: props.children,
        className: props.className,
    });
};
HomeSection.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/home/components/HomeSection/HomeSection.state.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/HomeSection.state.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHomeSectionState: () => (/* binding */ useHomeSectionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'HomeSection.state';
const useHomeSectionState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            actions: props.actions,
            components: {
                title: 'h2',
            },
            title: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.title),
        };
    }, [props.actions, props.title]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/home/components/HomeSection/HomeSection.styles.ts":
/*!********************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/HomeSection.styles.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  row: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: "f1s9ku6b",
    Bt984gj: "f122n59",
    i8kkvl: "f9vy7p0"
  },
  aside: {
    Byoj8tv: "fe2my4m"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1s9ku6b{justify-content:start;}", ".f122n59{align-items:center;}", ".f9vy7p0{column-gap:20px;}", ".fe2my4m{padding-bottom:20px;}"]
});

/***/ }),

/***/ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.render.tsx":
/*!*********************************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/SectionCard/SectionCard.render.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSectionCardRender: () => (/* binding */ useSectionCardRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/Card/Card.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/CardHeader/CardHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-text/lib/components/presets/Body1/Body1.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/CardFooter/CardFooter.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");


const useSectionCardRender = ({ state, styles, children, className, }) => {
    const { slots, slotProps } = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.getSlots)(state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Card, { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.CardHeader, { header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Body1, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: styles.title, ...slotProps.title })), action: slots.icon ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.icon, { ...slotProps.icon }) : null }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.body }, children),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.CardFooter, { className: styles.footer }, slots.action !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Button, { ...slotProps.action, ref: undefined })) : null)));
};


/***/ }),

/***/ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.root.tsx":
/*!*******************************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/SectionCard/SectionCard.root.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionCard: () => (/* binding */ SectionCard)
/* harmony export */ });
/* harmony import */ var _SectionCard_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionCard.render */ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.render.tsx");
/* harmony import */ var _SectionCard_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionCard.styles */ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.styles.ts");
/* harmony import */ var _SectionCard_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionCard.state */ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.state.ts");



const MODULE_NAME = 'SectionCard';
const SectionCard = (props) => {
    // get state
    const state = (0,_SectionCard_state__WEBPACK_IMPORTED_MODULE_2__.useSectionCardState)(props);
    // get styles
    const styles = (0,_SectionCard_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_SectionCard_render__WEBPACK_IMPORTED_MODULE_0__.useSectionCardRender)({
        state,
        styles,
        children: props.children,
        className: props.className,
    });
};
SectionCard.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.state.ts":
/*!*******************************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/SectionCard/SectionCard.state.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSectionCardState: () => (/* binding */ useSectionCardState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'SectionCard.state';
const useSectionCardState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            components: {
                title: 'h3',
                icon: 'div',
                action: 'button',
            },
            title: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.title),
            icon: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.icon),
            action: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.action),
        };
    }, [props.action, props.icon, props.title]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.styles.ts":
/*!********************************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/SectionCard/SectionCard.styles.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  title: {
    B6of3ja: "fvjh0tl",
    t21cq0: ["f8zmjen", "fjf1xye"],
    jrapky: "fd1gkq",
    Frg6f3: ["fjf1xye", "f8zmjen"]
  },
  body: {
    qb2dma: "f1ub7u0d"
  },
  footer: {}
}, {
  d: [".fvjh0tl{margin-top:4px;}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".fd1gkq{margin-bottom:4px;}", ".f1ub7u0d{align-self:stretch;}"]
});

/***/ }),

/***/ "./src/apps/home/components/HomeSection/SectionCard/index.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/home/components/HomeSection/SectionCard/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionCard: () => (/* reexport safe */ _SectionCard_root__WEBPACK_IMPORTED_MODULE_0__.SectionCard)
/* harmony export */ });
/* harmony import */ var _SectionCard_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionCard.root */ "./src/apps/home/components/HomeSection/SectionCard/SectionCard.root.tsx");



/***/ }),

/***/ "./src/apps/home/components/HomeSection/index.ts":
/*!*******************************************************!*\
  !*** ./src/apps/home/components/HomeSection/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeSection: () => (/* reexport safe */ _HomeSection_root__WEBPACK_IMPORTED_MODULE_0__.HomeSection)
/* harmony export */ });
/* harmony import */ var _HomeSection_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeSection.root */ "./src/apps/home/components/HomeSection/HomeSection.root.tsx");



/***/ }),

/***/ "./src/apps/home/components/index.ts":
/*!*******************************************!*\
  !*** ./src/apps/home/components/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateModalContents: () => (/* reexport safe */ _CreateModalContents__WEBPACK_IMPORTED_MODULE_0__.CreateModalContents)
/* harmony export */ });
/* harmony import */ var _CreateModalContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateModalContents */ "./src/apps/home/components/CreateModalContents/index.ts");



/***/ }),

/***/ "./src/apps/home/index.ts":
/*!********************************!*\
  !*** ./src/apps/home/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDialog: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_0__.CreateDialog),
/* harmony export */   CreateModalContents: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.CreateModalContents),
/* harmony export */   HomePage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_0__.HomePage)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/apps/home/pages/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/apps/home/components/index.ts");




/***/ }),

/***/ "./src/apps/home/pages/CreateDialog/CreateDialog.render.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/home/pages/CreateDialog/CreateDialog.render.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateDialogRender: () => (/* binding */ useCreateDialogRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./src/apps/home/components/index.ts");


const useCreateDialogRender = (props) => {
    const { state, styles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_1__.CreateModalContents, { artifactId: '' // always create mode
            , isOpen: state.isOpen, onClose: state.onDialogClose, workspaceId: state.workspaceObjectId })));
};


/***/ }),

/***/ "./src/apps/home/pages/CreateDialog/CreateDialog.state.ts":
/*!****************************************************************!*\
  !*** ./src/apps/home/pages/CreateDialog/CreateDialog.state.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateDialogState: () => (/* binding */ useCreateDialogState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const MODULE_NAME = 'CreateDialog';
const useCreateDialogState = (props) => {
    const qsp = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useURLQueryParms)();
    const workspaceObjectId = qsp?.[_do_core__WEBPACK_IMPORTED_MODULE_1__.SearchParams.WORKSPACE_OBJECT_ID];
    // contexts
    // state
    // hooks
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    // callbacks
    const onDialogClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (action, artifact) => {
        if (action === 'submit' && artifact) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, `Create dialog closing. Navigating to edit page for artifact ${artifact.objectId}`);
            await navigation?.closeDialog();
            // navigate to the page with the new artifact
            navigation?.navigate({
                path: _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.home(artifact.objectId),
            });
        }
        else {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, `Create dialog closing. Cancelled.`);
            await navigation?.closeDialog();
        }
    }, [navigation]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            isOpen: props.isOpen,
            onDialogClose,
            workspaceObjectId,
        };
    }, [onDialogClose, props.isOpen, workspaceObjectId]);
    return state;
};


/***/ }),

/***/ "./src/apps/home/pages/CreateDialog/CreateDialog.styles.ts":
/*!*****************************************************************!*\
  !*** ./src/apps/home/pages/CreateDialog/CreateDialog.styles.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {}
}, {});

/***/ }),

/***/ "./src/apps/home/pages/CreateDialog/CreateDialog.tsx":
/*!***********************************************************!*\
  !*** ./src/apps/home/pages/CreateDialog/CreateDialog.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDialog: () => (/* binding */ CreateDialog)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _CreateDialog_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateDialog.render */ "./src/apps/home/pages/CreateDialog/CreateDialog.render.tsx");
/* harmony import */ var _CreateDialog_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateDialog.styles */ "./src/apps/home/pages/CreateDialog/CreateDialog.styles.ts");
/* harmony import */ var _CreateDialog_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateDialog.state */ "./src/apps/home/pages/CreateDialog/CreateDialog.state.ts");




const MODULE_NAME = 'CreateDialog';
const CreateDialog = (_props) => {
    // get state
    const state = (0,_CreateDialog_state__WEBPACK_IMPORTED_MODULE_3__.useCreateDialogState)(_props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_CreateDialog_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the item
    return (0,_CreateDialog_render__WEBPACK_IMPORTED_MODULE_1__.useCreateDialogRender)({ state, styles });
};
CreateDialog.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/home/pages/CreateDialog/index.ts":
/*!***************************************************!*\
  !*** ./src/apps/home/pages/CreateDialog/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDialog: () => (/* reexport safe */ _CreateDialog__WEBPACK_IMPORTED_MODULE_0__.CreateDialog)
/* harmony export */ });
/* harmony import */ var _CreateDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateDialog */ "./src/apps/home/pages/CreateDialog/CreateDialog.tsx");



/***/ }),

/***/ "./src/apps/home/pages/HomePage/HomePage.render.tsx":
/*!**********************************************************!*\
  !*** ./src/apps/home/pages/HomePage/HomePage.render.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useHomePageRender: () => (/* binding */ useHomePageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _components_HomeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HomeSection */ "./src/apps/home/components/HomeSection/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




const TestIds = {
    MappingJobs: 'Homepage-mapping-jobs-button',
};
const useHomePageRender = (props) => {
    const { state, styles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.Page, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.title)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HomeSection__WEBPACK_IMPORTED_MODULE_2__.HomeSection, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.title), actions: [
                    {
                        key: 'mapping',
                        className: styles.card,
                        title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.mapping.title),
                        action: {
                            onClick: state.navigateToMappingPage,
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.mapping.button),
                        },
                        children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.mapping.description),
                    },
                    {
                        key: 'contextualization',
                        className: styles.card,
                        title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.contextualization.title),
                        action: {
                            onClick: state.navigateToContextualizationPage,
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.contextualization.button),
                        },
                        children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.contextualization.description),
                    },
                    {
                        key: 'modeling',
                        className: styles.card,
                        title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.grouping.title),
                        action: {
                            onClick: state.navigateToModelingPage,
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.grouping.button),
                        },
                        children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.cards.grouping.description),
                    },
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, { akaShortLink: 'PAL-overview-prepare', contentBefore: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.prepare.description), text: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.learn_more) })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HomeSection__WEBPACK_IMPORTED_MODULE_2__.HomeSection, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.explorer.title), actions: [
                    {
                        key: 'explorer',
                        className: styles.card,
                        title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.explorer.cards.explorer.title),
                        action: {
                            onClick: state.navigateToExplorer,
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.explorer.cards.explorer.button),
                        },
                        children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.explorer.cards.explorer.description),
                    },
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, { akaShortLink: 'PAL-explorer', contentBefore: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.explorer.description), text: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.learn_more) })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_HomeSection__WEBPACK_IMPORTED_MODULE_2__.HomeSection, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.calc_engine.title), actions: [
                    {
                        key: 'calc-engine',
                        className: styles.card,
                        title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.calc_engine.cards.formulas.title),
                        action: {
                            onClick: state.navigateToCalcEngine,
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.calc_engine.cards.formulas.button),
                        },
                        children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.calc_engine.cards.formulas.description),
                    },
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, { akaShortLink: 'PAL-formulas', contentBefore: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.home.calc_engine.description), text: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.learn_more) })))));
};


/***/ }),

/***/ "./src/apps/home/pages/HomePage/HomePage.root.tsx":
/*!********************************************************!*\
  !*** ./src/apps/home/pages/HomePage/HomePage.root.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _HomePage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.render */ "./src/apps/home/pages/HomePage/HomePage.render.tsx");
/* harmony import */ var _HomePage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.styles */ "./src/apps/home/pages/HomePage/HomePage.styles.ts");
/* harmony import */ var _HomePage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.state */ "./src/apps/home/pages/HomePage/HomePage.state.ts");




const MODULE_NAME = 'HomePage';
const HomePage = () => {
    // get state
    const state = (0,_HomePage_state__WEBPACK_IMPORTED_MODULE_3__.useHomePageState)();
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_HomePage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the item
    return (0,_HomePage_render__WEBPACK_IMPORTED_MODULE_1__.useHomePageRender)({ state, styles });
};
HomePage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/home/pages/HomePage/HomePage.state.ts":
/*!********************************************************!*\
  !*** ./src/apps/home/pages/HomePage/HomePage.state.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHomePageState: () => (/* binding */ useHomePageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const useHomePageState = () => {
    // contexts
    // state
    // hooks
    const mainRouteProps = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useAppRouteProps)();
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            navigateToMappingPage: () => {
                navigation?.navigate({
                    path: `${_do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.prepare(mainRouteProps.artifactId)}/mapping`,
                });
            },
            navigateToContextualizationPage: () => {
                navigation?.navigate({
                    path: `${_do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.prepare(mainRouteProps.artifactId)}/contextualize`,
                });
            },
            navigateToModelingPage: () => {
                navigation?.navigate({
                    path: `${_do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.prepare(mainRouteProps.artifactId)}/models`,
                });
            },
            navigateToExplorer: () => {
                navigation?.navigate({
                    path: _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.explorer(mainRouteProps.artifactId),
                });
            },
            navigateToCalcEngine: () => {
                navigation?.navigate({
                    path: _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.insights(mainRouteProps.artifactId),
                });
            },
        };
    }, [navigation, mainRouteProps.artifactId]);
    return state;
};


/***/ }),

/***/ "./src/apps/home/pages/HomePage/HomePage.styles.ts":
/*!*********************************************************!*\
  !*** ./src/apps/home/pages/HomePage/HomePage.styles.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Brf1p80: "f1s9ku6b",
    Bt984gj: "f1s2louj",
    Belr9w4: "fd7ph1c"
  },
  rotate180: {
    Bz10aip: ["fl2uh7s", "fapi2jb"]
  },
  card: {
    a9b677: "f19xx7i5",
    B2u0y6b: "f182w2et",
    sshi5w: "fvh86u7"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1s9ku6b{justify-content:start;}", ".f1s2louj{align-items:start;}", ".fd7ph1c{row-gap:10px;}", ".fl2uh7s{transform:rotate(180deg);}", ".fapi2jb{transform:rotate(-180deg);}", ".f19xx7i5{width:25vw;}", ".f182w2et{max-width:418px;}", ".fvh86u7{min-height:160px;}"]
});

/***/ }),

/***/ "./src/apps/home/pages/HomePage/index.ts":
/*!***********************************************!*\
  !*** ./src/apps/home/pages/HomePage/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* reexport safe */ _HomePage_root__WEBPACK_IMPORTED_MODULE_0__.HomePage)
/* harmony export */ });
/* harmony import */ var _HomePage_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.root */ "./src/apps/home/pages/HomePage/HomePage.root.tsx");



/***/ }),

/***/ "./src/apps/home/pages/index.ts":
/*!**************************************!*\
  !*** ./src/apps/home/pages/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDialog: () => (/* reexport safe */ _CreateDialog__WEBPACK_IMPORTED_MODULE_1__.CreateDialog),
/* harmony export */   HomePage: () => (/* reexport safe */ _HomePage__WEBPACK_IMPORTED_MODULE_0__.HomePage)
/* harmony export */ });
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage */ "./src/apps/home/pages/HomePage/index.ts");
/* harmony import */ var _CreateDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateDialog */ "./src/apps/home/pages/CreateDialog/index.ts");




/***/ })

}]);
//# sourceMappingURL=src_apps_home_index_ts.bundle.js.map