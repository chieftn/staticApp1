"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_shell_index_ui_tsx"],{

/***/ "./src/assets/Empty.svg":
/*!******************************!*\
  !*** ./src/assets/Empty.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f425b6a8a2fcf7fb9909.svg";

/***/ }),

/***/ "./src/assets/Error.svg":
/*!******************************!*\
  !*** ./src/assets/Error.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d003cdcb50011049f994.svg";

/***/ }),

/***/ "./src/apps/components/Card/Card.styles.ts":
/*!*************************************************!*\
  !*** ./src/apps/components/Card/Card.styles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    E5pizo: "f1whvlc6",
    Beiy3e4: "f1vx9l62",
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    i8kkvl: "f5wq1k0",
    Belr9w4: "f1k5ttpu",
    z8tnut: "fqag9an",
    z189sj: ["f1gbmcue", "f1rh9g5y"],
    Byoj8tv: "fp67ikv",
    uwmqm3: ["f1rh9g5y", "f1gbmcue"]
  },
  content: {},
  header: {}
}, {
  d: [".f22iagw{display:flex;}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f1vx9l62{flex-direction:column;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f5wq1k0{column-gap:16px;}", ".f1k5ttpu{row-gap:16px;}", ".fqag9an{padding-top:16px;}", ".f1gbmcue{padding-right:16px;}", ".f1rh9g5y{padding-left:16px;}", ".fp67ikv{padding-bottom:16px;}"]
});

/***/ }),

/***/ "./src/apps/components/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/apps/components/Card/Card.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _Card_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.styles */ "./src/apps/components/Card/Card.styles.ts");
/* harmony import */ var _components_CardTitle_CardTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CardTitle/CardTitle */ "./src/apps/components/Card/components/CardTitle/CardTitle.tsx");




const Card = (props) => {
    const { title, children, className } = props;
    // contexts
    // state
    // hooks
    // callbacks
    // side effects
    // styles
    const classNames = (0,_Card_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: className ? (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(classNames.root, className) : classNames.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.header },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_CardTitle_CardTitle__WEBPACK_IMPORTED_MODULE_2__["default"], { title: title })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.content }, children)));
};


/***/ }),

/***/ "./src/apps/components/Card/components/CardTitle/CardTitle.styles.ts":
/*!***************************************************************************!*\
  !*** ./src/apps/components/Card/components/CardTitle/CardTitle.styles.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Bt984gj: "f122n59",
    Bhrd7zp: "fl43uef",
    i8kkvl: "f1q8lukm",
    Belr9w4: "f1ma2n7n"
  },
  titleStart: {
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34"
  },
  titleEnd: {
    mc9l5x: "f22iagw",
    Bh6795r: "f1jhi6b8",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34",
    qb2dma: "f1locze1"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f122n59{align-items:center;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f1q8lukm{column-gap:4px;}", ".f1ma2n7n{row-gap:4px;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".f1pztt34{flex-basis:0;}", ".f1jhi6b8{flex-grow:0;}", ".f1locze1{align-self:end;}"]
});

/***/ }),

/***/ "./src/apps/components/Card/components/CardTitle/CardTitle.tsx":
/*!*********************************************************************!*\
  !*** ./src/apps/components/Card/components/CardTitle/CardTitle.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardTitle_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTitle.styles */ "./src/apps/components/Card/components/CardTitle/CardTitle.styles.ts");


const CardTitle = (props) => {
    const { title } = props;
    // contexts
    // state
    // hooks
    // callbacks
    // side effects
    // styles
    const classNames = (0,_CardTitle_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    if (typeof title === 'string') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: classNames.root }, title);
    }
    else {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.titleStart },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, title.icon),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, title.text)),
            title.actions?.length && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.titleEnd }, title.actions))));
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardTitle);


/***/ }),

/***/ "./src/apps/components/Card/index.ts":
/*!*******************************************!*\
  !*** ./src/apps/components/Card/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.Card)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/apps/components/Card/Card.tsx");



/***/ }),

/***/ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.render.tsx":
/*!******************************************************************************!*\
  !*** ./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.render.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDateTimeRangeInputRender: () => (/* binding */ useDateTimeRangeInputRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");



const useDateTimeRangeInputRender = ({ state, styles }) => {
    const inputContainerClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.inputContainer, state.layout === 'vertical' && styles.verticalLayout);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: inputContainerClassNames },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { className: state.errorMessages.start ? undefined : styles.fieldWithoutError, validationMessage: state.startDateInputProps.disabled
                    ? undefined
                    : state.errorMessages.start, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.time_range_controls.start_date)), ...(state.startDateFieldProps ?? {}) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { type: 'datetime-local', ...state.startDateInputProps })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { className: state.errorMessages.end ? undefined : styles.fieldWithoutError, validationMessage: state.endDateInputProps.disabled
                    ? undefined
                    : state.errorMessages.end, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.time_range_controls.end_date)), ...(state.endDateFieldProps ?? {}) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { type: 'datetime-local', ...state.endDateInputProps })))));
};


/***/ }),

/***/ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.root.tsx":
/*!****************************************************************************!*\
  !*** ./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.root.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimeRangeInput: () => (/* binding */ DateTimeRangeInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DateTimeRangeInput_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTimeRangeInput.render */ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.render.tsx");
/* harmony import */ var _DateTimeRangeInput_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTimeRangeInput.styles */ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.styles.ts");
/* harmony import */ var _DateTimeRangeInput_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateTimeRangeInput.state */ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.state.ts");




const MODULE_NAME = 'DateTimeRangeInput';
const DateTimeRangeInput = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => {
    // get state
    const state = (0,_DateTimeRangeInput_state__WEBPACK_IMPORTED_MODULE_3__.useDateTimeRangeInputState)(props, ref);
    // get styles
    const styles = (0,_DateTimeRangeInput_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    // render the item
    return (0,_DateTimeRangeInput_render__WEBPACK_IMPORTED_MODULE_1__.useDateTimeRangeInputRender)({ state, styles });
});
DateTimeRangeInput.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.state.ts":
/*!****************************************************************************!*\
  !*** ./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.state.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDateTimeRangeInputState: () => (/* binding */ useDateTimeRangeInputState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");




const DEBUG_LOGGING = false;
const MODULE_NAME = 'Loading.state';
const useDateTimeRangeInputState = (props, ref) => {
    // state
    const startDate = props.startDateInputProps.value;
    const endDate = props.endDateInputProps.value;
    const [errorMessages, setErrorMessages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        start: '',
        end: '',
    });
    // callbacks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
        getIsValid: () => validate(props),
    }));
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!startDate || !endDate) {
            setErrorMessages((0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft) => {
                draft.start =
                    // no start date provided and start date is required
                    !startDate && props.startDateFieldProps?.required
                        ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.error_messages
                            .start_date_required)
                        : '';
            }));
            setErrorMessages((0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft) => {
                // no start date provided and start date is required
                draft.end =
                    !endDate && props.endDateFieldProps?.required
                        ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.error_messages.end_date_required)
                        : '';
            }));
            // stop here to allow user to provide both dates
            return;
        }
        const numericalStartDate = new Date(startDate).getTime();
        const numericalEndDate = new Date(endDate).getTime();
        setErrorMessages((0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft) => {
            draft.start = isNaN(numericalStartDate)
                ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.error_messages.date_format_invalid)
                : '';
        }));
        setErrorMessages((0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft) => {
            draft.end = isNaN(numericalEndDate)
                ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.error_messages.date_format_invalid)
                : numericalStartDate > numericalEndDate
                    ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.error_messages.end_date_after_start)
                    : '';
        }));
    }, [endDate, startDate, props.startDateFieldProps, props.endDateFieldProps]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            ...props,
            errorMessages,
        };
    }, [errorMessages, props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};
function validate(props) {
    const startDate = props.startDateInputProps.value;
    const endDate = props.endDateInputProps.value;
    const hasValidStartDate = !props.startDateFieldProps?.required || !!startDate;
    const hasValidEndDate = !props.endDateFieldProps?.required || !!endDate;
    const isEndDateAfterStartDate = endDate && startDate
        ? new Date(endDate).getTime() > new Date(startDate).getTime()
        : true;
    return hasValidStartDate && hasValidEndDate && isEndDateAfterStartDate;
}


/***/ }),

/***/ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.styles.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.styles.ts ***!
  \*****************************************************************************/
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
    Belr9w4: "f1ma2n7n",
    sshi5w: "f1n5o1gx"
  },
  inputContainer: {
    mc9l5x: "f22iagw",
    i8kkvl: "f4akndk"
  },
  verticalLayout: {
    Beiy3e4: "f1vx9l62",
    Belr9w4: "fn67r4l"
  },
  fieldWithoutError: {
    Byoj8tv: "fp67ikv"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1ma2n7n{row-gap:4px;}", ".f1n5o1gx{min-height:80px;}", ".f4akndk{column-gap:12px;}", ".fn67r4l{row-gap:8px;}", ".fp67ikv{padding-bottom:16px;}"]
});

/***/ }),

/***/ "./src/apps/components/DateTimeRangeInput/index.ts":
/*!*********************************************************!*\
  !*** ./src/apps/components/DateTimeRangeInput/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimeRangeInput: () => (/* reexport safe */ _DateTimeRangeInput_root__WEBPACK_IMPORTED_MODULE_0__.DateTimeRangeInput)
/* harmony export */ });
/* harmony import */ var _DateTimeRangeInput_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimeRangeInput.root */ "./src/apps/components/DateTimeRangeInput/DateTimeRangeInput.root.tsx");



/***/ }),

/***/ "./src/apps/components/Editor/Editor.styles.ts":
/*!*****************************************************!*\
  !*** ./src/apps/components/Editor/Editor.styles.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    Bqenvij: "f1l02sjl"
  }
}, {
  d: [".f1l02sjl{height:100%;}"]
});

/***/ }),

/***/ "./src/apps/components/Editor/Editor.tsx":
/*!***********************************************!*\
  !*** ./src/apps/components/Editor/Editor.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-popover/lib/components/Popover/Popover.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-popover/lib/components/PopoverSurface/PopoverSurface.js");
/* harmony import */ var _Editor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.styles */ "./src/apps/components/Editor/Editor.styles.ts");
/* harmony import */ var _microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/digital-operations.calculation-validator */ "./node_modules/@microsoft/digital-operations.calculation-validator/dist/index.js");
/* harmony import */ var _do_insights_components_InsightsDetailsPanel_components_ExpressionEditor_components_ExpressionEditorContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/index.ts");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-hooks */ "./node_modules/@fluentui/react-hooks/lib/useBoolean.js");
/* harmony import */ var _Editor_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Editor.utils */ "./src/apps/components/Editor/Editor.utils.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/**
 * This file is a slightly modified version of the monaco-editor sample for webpack in github.
 * (https://github.com/microsoft/monaco-editor/blob/main/samples/browser-esm-webpack-typescript-react/src/components/Editor.tsx)
 *  */








// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
self.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId, label) {
        if (label === 'json') {
            return `${window.location.origin}/json.worker.bundle.js`;
        }
        return `${window.location.origin}/json.worker.bundle.js`;
    },
};
const Editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
    const monaco = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Would need to import monaco-editor namespace for type
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // Would need to import monaco-editor namespace for type
    const divEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const styles = (0,_Editor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    const [isContextMenuOpen, { setTrue, setFalse, toggle }] = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_6__.useBoolean)(false);
    const menuPositioningRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        async function createEditor() {
            if (!monaco.current) {
                const monacoImport = await Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_monaco-editor_esm_vs_editor_editor_main_js"), __webpack_require__.e("data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AAAAAXNSR0IArs4c6QAAAARnQU1-ba2ffd")]).then(__webpack_require__.bind(__webpack_require__, /*! monaco-editor */ "./node_modules/monaco-editor/esm/vs/editor/editor.main.js"));
                monaco.current = monacoImport;
                // Register the language here
                const language = props.language ?? props.options.language ?? 'plaintext';
                if (!monaco.current.languages
                    .getLanguages()
                    .some((lang) => lang.id === language)) {
                    monaco.current.languages.register({
                        id: language,
                    });
                }
                if (divEl.current) {
                    editorRef.current = monaco.current.editor.create(divEl.current, props.options);
                }
                if (props.isExpressionEditor) {
                    const editor = editorRef.current;
                    // Disable the browser's default context menu
                    editor
                        .getDomNode()
                        .addEventListener('contextmenu', (event) => {
                        event.preventDefault();
                    });
                    // Listen for right-clicks in the editor
                    editor.onContextMenu((event) => {
                        (0,_Editor_utils__WEBPACK_IMPORTED_MODULE_4__.triggerContextMenu)(editor, event, setTrue, menuPositioningRef);
                    });
                    editor.onDidChangeModelContent(() => {
                        (0,_Editor_utils__WEBPACK_IMPORTED_MODULE_4__.handleExpressionErrors)(editor, monaco.current, _microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_2__);
                    });
                    editor.onDidFocusEditorText(() => {
                        if (editor.getValue() ===
                            (0,_do_localization__WEBPACK_IMPORTED_MODULE_5__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_5__.strings.insights.expression_editor.placeholder)) {
                            // clear the placeholder text when the editor is focused
                            editor.setValue('');
                        }
                    });
                    // editor.onDidBlurEditorText(() => {
                    //   //TODO: fix conflict with context menu
                    //   if (editor.getValue().trim() === '') {
                    //     // set the placeholder text when the editor is blurred and the value is empty
                    //     editor.setValue(
                    //       t(strings.insights.expression_editor.placeholder),
                    //     );
                    //   }
                    // });
                }
            }
            else {
                editorRef.current.setValue(props.options.value);
            }
        }
        createEditor();
    }, [
        props.options,
        props.isExpressionEditor,
        props.language,
        setTrue,
        setFalse,
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
        return {
            getValue: () => {
                return editorRef.current.getValue();
            },
            setValue: (value) => {
                editorRef.current.setValue(value);
            },
            insertValueAtCursor: (value) => {
                // handles adding the values selected from the context menu into the editor.
                (0,_Editor_utils__WEBPACK_IMPORTED_MODULE_4__.handleValueSelected)(value, editorRef, monaco.current, 
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                () => { });
            },
        };
    }, []);
    const onChangeContextMenuVisibility = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        if (value === undefined) {
            toggle();
        }
        else {
            value ? setTrue() : setFalse();
        }
    }, [setFalse, setTrue, toggle]);
    const onValueSelected = (value) => {
        // handles adding values selected from the context menu into the editor
        (0,_Editor_utils__WEBPACK_IMPORTED_MODULE_4__.handleValueSelected)(value, editorRef, monaco.current, setFalse);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.mergeClasses)('Editor', styles.root), ref: divEl }, props.isExpressionEditor && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Popover, { open: isContextMenuOpen, onOpenChange: 
        /* istanbul ignore next */
        (e, data) => 
        // handle the popover dismissing itself when you click away
        onChangeContextMenuVisibility(data.open), positioning: { positioningRef: menuPositioningRef } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.PopoverSurface, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_insights_components_InsightsDetailsPanel_components_ExpressionEditor_components_ExpressionEditorContextMenu__WEBPACK_IMPORTED_MODULE_3__.ExpressionEditorContextMenu, { handleMenuItemSelect: onValueSelected }))))));
});


/***/ }),

/***/ "./src/apps/components/Editor/Editor.utils.ts":
/*!****************************************************!*\
  !*** ./src/apps/components/Editor/Editor.utils.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleExpressionErrors: () => (/* binding */ handleExpressionErrors),
/* harmony export */   handleValueSelected: () => (/* binding */ handleValueSelected),
/* harmony export */   triggerContextMenu: () => (/* binding */ triggerContextMenu)
/* harmony export */ });
function triggerContextMenu(// position and open the context menu
editor, event, setTrue, menuPositioningRef) {
    const position = event.target.position;
    if (position) {
        const top = editor.getTopForLineNumber(position.lineNumber);
        const left = editor.getOffsetForColumn(position.lineNumber, position.column);
        const editorRect = editor.getDomNode().getBoundingClientRect();
        const viewportTop = top + editorRect.top + 190;
        const viewportLeft = left + editorRect.left;
        const virtualElement = {
            getBoundingClientRect: () => ({
                width: 0,
                height: 0,
                x: viewportLeft,
                y: viewportTop,
                top: viewportTop,
                right: viewportLeft,
                left: viewportLeft,
                bottom: viewportTop,
            }),
        };
        menuPositioningRef.current?.setTarget(virtualElement);
        setTrue(); // Open the context menu
    }
}
function handleExpressionErrors(// highlight syntax errors in the editor
editor, monaco, expressionValidator) {
    const expression = editor.getValue();
    const syntaxErrors = expressionValidator.validateCalculationExpression(expression);
    const monacoErrors = [];
    for (const e of syntaxErrors) {
        monacoErrors.push({
            startLineNumber: e.startLine,
            startColumn: e.startCol,
            endLineNumber: e.endLine,
            endColumn: e.endCol,
            message: e.message,
            severity: monaco.MarkerSeverity.Error,
        });
    }
    const models = monaco.editor.getModels();
    const model = models[models.length - 1]; // TODO: Implement model reuse to avoid performance issues
    monaco.editor.setModelMarkers(
    // TODO: Update Error Highlighting to align with Figma
    model, 'errors', monacoErrors);
}
function handleValueSelected(// insert the selected value from context menu into the editor
selectedItemName, editorRef, monaco, setFalse) {
    const position = editorRef.current.getPosition();
    const range = new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column);
    const id = { major: 1, minor: 1 }; //operation Id
    const text = selectedItemName;
    const op = { identifier: id, range, text, forceMoveMarkers: true };
    editorRef.current.executeEdits('my-source', [op]);
    setFalse();
    // Refocus the editor
    editorRef.current.focus();
    // Move cursor to the end of the inserted value
    const newPosition = position.delta(0, selectedItemName.length);
    editorRef.current.setPosition(newPosition);
}


/***/ }),

/***/ "./src/apps/components/Editor/index.ts":
/*!*********************************************!*\
  !*** ./src/apps/components/Editor/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* reexport safe */ _Editor__WEBPACK_IMPORTED_MODULE_0__.Editor)
/* harmony export */ });
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./src/apps/components/Editor/Editor.tsx");



/***/ }),

/***/ "./src/apps/components/EmptyContents/EmptyContents.render.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/EmptyContents/EmptyContents.render.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyContentsTestIds: () => (/* binding */ EmptyContentsTestIds),
/* harmony export */   useEmptyContentsRender: () => (/* binding */ useEmptyContentsRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _assets_Empty_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/Empty.svg */ "./src/assets/Empty.svg");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js");





var EmptyContentsTestIds;
(function (EmptyContentsTestIds) {
    EmptyContentsTestIds["EmptyContents"] = "EmptyContents";
})(EmptyContentsTestIds || (EmptyContentsTestIds = {}));
const useEmptyContentsRender = ({ state, styles, }) => {
    const { slots, slotProps } = (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_2__.getSlots)(state);
    if (!slots.root) {
        slots.root = 'div';
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.root, { "data-testid": state.testId ?? EmptyContentsTestIds.EmptyContents, ...slotProps.root, className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.root, state.className) },
        slots.image ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.image, { ...slotProps.image })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Image, { src: _assets_Empty_svg__WEBPACK_IMPORTED_MODULE_1__, role: 'presentation' })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.header, { ...slotProps.header, className: styles.header }),
        slots.subtitle && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.subtitle, { ...slotProps.subtitle }),
        slots.button && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.button, { ...slotProps.button }),
        slots.footer && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.footer, { ...slotProps.footer })));
};


/***/ }),

/***/ "./src/apps/components/EmptyContents/EmptyContents.root.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/EmptyContents/EmptyContents.root.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyContents: () => (/* binding */ EmptyContents)
/* harmony export */ });
/* harmony import */ var _EmptyContents_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyContents.render */ "./src/apps/components/EmptyContents/EmptyContents.render.tsx");
/* harmony import */ var _EmptyContents_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyContents.styles */ "./src/apps/components/EmptyContents/EmptyContents.styles.ts");
/* harmony import */ var _EmptyContents_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyContents.state */ "./src/apps/components/EmptyContents/EmptyContents.state.ts");



const MODULE_NAME = 'EmptyContents';
const EmptyContents = (props) => {
    // get state
    const state = (0,_EmptyContents_state__WEBPACK_IMPORTED_MODULE_2__.useEmptyContentsState)(props);
    // get styles
    const styles = (0,_EmptyContents_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_EmptyContents_render__WEBPACK_IMPORTED_MODULE_0__.useEmptyContentsRender)({
        state,
        styles,
    });
};
EmptyContents.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/EmptyContents/EmptyContents.state.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/EmptyContents/EmptyContents.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEmptyContentsState: () => (/* binding */ useEmptyContentsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'EmptyContents.state';
const useEmptyContentsState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            className: props.className,
            testId: props.testId,
            components: {
                root: 'div',
                image: 'div',
                header: 'h2',
                subtitle: 'span',
                button: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Button,
                footer: 'div',
            },
            root: {},
            image: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.resolveShorthand)(props.image),
            header: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.resolveShorthand)(props.header),
            subtitle: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.resolveShorthand)(props.subtitle),
            button: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.resolveShorthand)(props.button, {
                defaultProps: { appearance: 'primary' },
            }),
            footer: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.resolveShorthand)(props.footer),
        };
    }, [props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/EmptyContents/EmptyContents.styles.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/components/EmptyContents/EmptyContents.styles.ts ***!
  \*******************************************************************/
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
    Bt984gj: "f122n59",
    Belr9w4: "f7qsgvn",
    B6of3ja: "fgr6219",
    t21cq0: ["f1ujusj6", "fcgxt0o"],
    jrapky: "f10jk5vf",
    Frg6f3: ["fcgxt0o", "f1ujusj6"],
    Bqenvij: "f1l02sjl",
    Brf1p80: "f4d9j23"
  },
  header: {
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f122n59{align-items:center;}", ".f7qsgvn{row-gap:24px;}", ".fgr6219{margin-top:auto;}", ".f1ujusj6{margin-right:auto;}", ".fcgxt0o{margin-left:auto;}", ".f10jk5vf{margin-bottom:auto;}", ".f1l02sjl{height:100%;}", ".f4d9j23{justify-content:center;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}"]
});

/***/ }),

/***/ "./src/apps/components/EmptyContents/index.ts":
/*!****************************************************!*\
  !*** ./src/apps/components/EmptyContents/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyContents: () => (/* reexport safe */ _EmptyContents_root__WEBPACK_IMPORTED_MODULE_0__.EmptyContents)
/* harmony export */ });
/* harmony import */ var _EmptyContents_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyContents.root */ "./src/apps/components/EmptyContents/EmptyContents.root.tsx");



/***/ }),

/***/ "./src/apps/components/ErrorBoundary/ErrorBoundary.render.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/ErrorBoundary/ErrorBoundary.render.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useErrorBoundaryRender: () => (/* binding */ useErrorBoundaryRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-error-boundary */ "./node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorMessage */ "./src/apps/components/ErrorMessage/index.ts");



const useErrorBoundaryRender = ({ state, children, }) => {
    // we're not testing the code coverage of external components
    /* istanbul ignore next */
    const ErrorFallback = (eProps) => {
        state.onError(eProps.error);
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, { message: eProps.error.message });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_error_boundary__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, { FallbackComponent: ErrorFallback }, children));
};


/***/ }),

/***/ "./src/apps/components/ErrorBoundary/ErrorBoundary.root.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/ErrorBoundary/ErrorBoundary.root.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary.render */ "./src/apps/components/ErrorBoundary/ErrorBoundary.render.tsx");
/* harmony import */ var _ErrorBoundary_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorBoundary.state */ "./src/apps/components/ErrorBoundary/ErrorBoundary.state.ts");


const MODULE_NAME = 'ErrorBoundary';
const ErrorBoundary = (props) => {
    // get state
    const state = (0,_ErrorBoundary_state__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundaryState)();
    // render the item
    return (0,_ErrorBoundary_render__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundaryRender)({ state, children: props.children });
};
ErrorBoundary.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/ErrorBoundary/ErrorBoundary.state.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/ErrorBoundary/ErrorBoundary.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useErrorBoundaryState: () => (/* binding */ useErrorBoundaryState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'ErrorBoundary.state';
const useErrorBoundaryState = () => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const logger = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (debugLogging ? (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)() : undefined), [debugLogging]);
    // callbacks
    const logError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((error) => {
        logger?.error(MODULE_NAME, 'Error. {error}', {
            error,
        });
    }, [logger]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onError: logError,
        };
    }, [logError]);
    return state;
};


/***/ }),

/***/ "./src/apps/components/ErrorBoundary/index.ts":
/*!****************************************************!*\
  !*** ./src/apps/components/ErrorBoundary/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _ErrorBoundary_root__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary.root */ "./src/apps/components/ErrorBoundary/ErrorBoundary.root.tsx");



/***/ }),

/***/ "./src/apps/components/ErrorMessage/ErrorMessage.render.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/ErrorMessage/ErrorMessage.render.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useErrorMessageRender: () => (/* binding */ useErrorMessageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Error_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/Error.svg */ "./src/assets/Error.svg");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js");




var TestIds;
(function (TestIds) {
    TestIds["Main"] = "error-message-main";
})(TestIds || (TestIds = {}));
const useErrorMessageRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": state.testId ?? TestIds.Main, role: 'alert', className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Image, { src: _assets_Error_svg__WEBPACK_IMPORTED_MODULE_1__, role: 'presentation' }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.error)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, state.message)));
};


/***/ }),

/***/ "./src/apps/components/ErrorMessage/ErrorMessage.root.tsx":
/*!****************************************************************!*\
  !*** ./src/apps/components/ErrorMessage/ErrorMessage.root.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: () => (/* binding */ ErrorMessage)
/* harmony export */ });
/* harmony import */ var _ErrorMessage_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage.render */ "./src/apps/components/ErrorMessage/ErrorMessage.render.tsx");
/* harmony import */ var _ErrorMessage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage.styles */ "./src/apps/components/ErrorMessage/ErrorMessage.styles.ts");


const MODULE_NAME = 'ErrorMessage';
const ErrorMessage = (props) => {
    // no state, just props
    // get styles
    const styles = (0,_ErrorMessage_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_ErrorMessage_render__WEBPACK_IMPORTED_MODULE_0__.useErrorMessageRender)({ state: props, styles });
};
ErrorMessage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/ErrorMessage/ErrorMessage.styles.ts":
/*!*****************************************************************!*\
  !*** ./src/apps/components/ErrorMessage/ErrorMessage.styles.ts ***!
  \*****************************************************************/
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
    Bt984gj: "f122n59",
    Belr9w4: "f7qsgvn",
    B6of3ja: "fgr6219",
    t21cq0: ["f1ujusj6", "fcgxt0o"],
    jrapky: "f10jk5vf",
    Frg6f3: ["fcgxt0o", "f1ujusj6"],
    Bqenvij: "f1l02sjl",
    Brf1p80: "f4d9j23"
  },
  header: {
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f122n59{align-items:center;}", ".f7qsgvn{row-gap:24px;}", ".fgr6219{margin-top:auto;}", ".f1ujusj6{margin-right:auto;}", ".fcgxt0o{margin-left:auto;}", ".f10jk5vf{margin-bottom:auto;}", ".f1l02sjl{height:100%;}", ".f4d9j23{justify-content:center;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}"]
});

/***/ }),

/***/ "./src/apps/components/ErrorMessage/index.ts":
/*!***************************************************!*\
  !*** ./src/apps/components/ErrorMessage/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _ErrorMessage_root__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage)
/* harmony export */ });
/* harmony import */ var _ErrorMessage_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage.root */ "./src/apps/components/ErrorMessage/ErrorMessage.root.tsx");



/***/ }),

/***/ "./src/apps/components/ExternalLink/ExternalLink.render.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/ExternalLink/ExternalLink.render.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExternalLinkRender: () => (/* binding */ useExternalLinkRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-utilities */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-15.js");




const useExternalLinkRender = ({ state, styles, }) => {
    const { slots, slotProps } = (0,_fluentui_react_utilities__WEBPACK_IMPORTED_MODULE_1__.getSlots)(state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.root, { ...slotProps.root, className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.root, state.className) },
        slots.contentBefore ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.contentBefore, { className: styles.marginBefore, ...slotProps.contentBefore })) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Link, { href: state.href, target: '_blank' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.text, { ...slotProps.text, className: styles.text }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.WindowNew16Regular, null)),
        slots.contentAfter ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.contentAfter, { className: styles.marginAfter, ...slotProps.contentAfter })) : null));
};


/***/ }),

/***/ "./src/apps/components/ExternalLink/ExternalLink.root.tsx":
/*!****************************************************************!*\
  !*** ./src/apps/components/ExternalLink/ExternalLink.root.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalLink: () => (/* binding */ ExternalLink)
/* harmony export */ });
/* harmony import */ var _ExternalLink_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalLink.render */ "./src/apps/components/ExternalLink/ExternalLink.render.tsx");
/* harmony import */ var _ExternalLink_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExternalLink.styles */ "./src/apps/components/ExternalLink/ExternalLink.styles.ts");
/* harmony import */ var _ExternalLink_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExternalLink.state */ "./src/apps/components/ExternalLink/ExternalLink.state.ts");



const MODULE_NAME = 'ExternalLink';
const ExternalLink = (props) => {
    // get state
    const state = (0,_ExternalLink_state__WEBPACK_IMPORTED_MODULE_2__.useExternalLinkState)(props);
    // get styles
    const styles = (0,_ExternalLink_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_ExternalLink_render__WEBPACK_IMPORTED_MODULE_0__.useExternalLinkRender)({ state, styles });
};
ExternalLink.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/ExternalLink/ExternalLink.state.ts":
/*!****************************************************************!*\
  !*** ./src/apps/components/ExternalLink/ExternalLink.state.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExternalLinkState: () => (/* binding */ useExternalLinkState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'ExternalLink.state';
const useExternalLinkState = (props) => {
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
                root: 'div',
                text: 'span',
                contentBefore: 'span',
                contentAfter: 'span',
            },
            root: {},
            className: props.className,
            text: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.text),
            href: `https://aka.ms/${props.akaShortLink}`,
            contentAfter: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.contentAfter),
            contentBefore: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.contentBefore),
        };
    }, [
        props.akaShortLink,
        props.className,
        props.contentAfter,
        props.contentBefore,
        props.text,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/ExternalLink/ExternalLink.styles.ts":
/*!*****************************************************************!*\
  !*** ./src/apps/components/ExternalLink/ExternalLink.styles.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f1bxpd7w"
  },
  text: {
    B6of3ja: "f2zxqi",
    t21cq0: ["f8zmjen", "fjf1xye"],
    Bhrd7zp: "flh3ekv"
  },
  marginBefore: {
    t21cq0: ["f8zmjen", "fjf1xye"]
  },
  marginAfter: {
    Frg6f3: ["fjf1xye", "f8zmjen"]
  }
}, {
  d: [".f1bxpd7w{display:contents;}", ".f2zxqi{margin-top:8px;}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".flh3ekv{font-weight:var(--fontWeightBold);}"]
});

/***/ }),

/***/ "./src/apps/components/ExternalLink/index.ts":
/*!***************************************************!*\
  !*** ./src/apps/components/ExternalLink/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalLink: () => (/* reexport safe */ _ExternalLink_root__WEBPACK_IMPORTED_MODULE_0__.ExternalLink)
/* harmony export */ });
/* harmony import */ var _ExternalLink_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalLink.root */ "./src/apps/components/ExternalLink/ExternalLink.root.tsx");



/***/ }),

/***/ "./src/apps/components/FilterCombobox/FilterCombobox.render.tsx":
/*!**********************************************************************!*\
  !*** ./src/apps/components/FilterCombobox/FilterCombobox.render.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilterComboboxRender: () => (/* binding */ useFilterComboboxRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Combobox/Combobox.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");


const useFilterComboboxRender = ({ state, styles, }) => {
    const selectedListId = `${state.comboId}-selection`;
    const labelledBy = state.selectedOptions && state.selectedOptions.length > 0
        ? `${state.comboId} ${selectedListId}`
        : state.comboId;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Combobox, { "data-testid": state.dataTestId, className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.root, state.className), "aria-labelledby": labelledBy, multiselect: state.multiselect, onChange: state.onChange, onOptionSelect: state.onSelect, placeholder: state.placeholder, ref: state.comboboxInputRef, value: state.value, selectedOptions: state.selectedOptions, disabled: state.disabled, title: state.value }, state.children));
};


/***/ }),

/***/ "./src/apps/components/FilterCombobox/FilterCombobox.root.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/FilterCombobox/FilterCombobox.root.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterCombobox: () => (/* binding */ FilterCombobox)
/* harmony export */ });
/* harmony import */ var _FilterCombobox_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterCombobox.render */ "./src/apps/components/FilterCombobox/FilterCombobox.render.tsx");
/* harmony import */ var _FilterCombobox_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterCombobox.styles */ "./src/apps/components/FilterCombobox/FilterCombobox.styles.ts");
/* harmony import */ var _FilterCombobox_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterCombobox.state */ "./src/apps/components/FilterCombobox/FilterCombobox.state.ts");



const MODULE_NAME = 'FilterCombobox';
const FilterCombobox = (props) => {
    // get state
    const state = (0,_FilterCombobox_state__WEBPACK_IMPORTED_MODULE_2__.useFilterComboboxState)(props);
    // get styles
    const styles = (0,_FilterCombobox_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FilterCombobox_render__WEBPACK_IMPORTED_MODULE_0__.useFilterComboboxRender)({ state, styles });
};
FilterCombobox.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/FilterCombobox/FilterCombobox.state.ts":
/*!********************************************************************!*\
  !*** ./src/apps/components/FilterCombobox/FilterCombobox.state.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilterComboboxState: () => (/* binding */ useFilterComboboxState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js");
/* harmony import */ var _FilterCombobox_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterCombobox.utils */ "./src/apps/components/FilterCombobox/FilterCombobox.utils.tsx");




const DEBUG_LOGGING = false;
const MODULE_NAME = 'FilterCombobox.state';
const useFilterComboboxState = (props) => {
    // state
    const comboboxInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const comboId = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.useId)('combo-multi');
    const children = (0,_FilterCombobox_utils__WEBPACK_IMPORTED_MODULE_2__.useComboboxFilterWithFreeform)(props.options, props.query, {
        noOptionsMessage: props.noOptionsMessage,
        freeform: props.freeform,
    });
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const onChange = (event) => {
            props.onQueryChange(event.target.value);
        };
        const onSelect = (_event, data) => {
            props.onSelectedOptionsChange(data.selectedOptions);
        };
        return {
            dataTestId: props.dataTestId,
            freeform: props.freeform,
            children,
            comboId,
            comboboxInputRef,
            multiselect: props.multiselect,
            onChange,
            onSelect,
            className: props.className,
            placeholder: props.placeholder,
            selectedOptions: props.selectedOptions,
            value: props.value,
        };
    }, [children, comboId, props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/FilterCombobox/FilterCombobox.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/components/FilterCombobox/FilterCombobox.styles.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f13qh94s",
    wkccdc: "f1uwxql5",
    B7hvi0a: "f1m2n5bn",
    i8kkvl: "f16mnhsx",
    Belr9w4: "fbi42co",
    Doo0ds: "f14vjzk2",
    Bsyu0ui: "fn95gcf"
  },
  tagsList: {
    dclx09: "ftrb29c",
    jrapky: "fyacil5",
    B6of3ja: "f1hu3pq6",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    mc9l5x: "f22iagw",
    w08cwm: "f17p0ad6"
  }
}, {
  d: [".f13qh94s{display:grid;}", ".f1uwxql5{grid-template-rows:repeat(1fr);}", ".f1m2n5bn{justify-items:start;}", ".f16mnhsx{column-gap:2px;}", ".fbi42co{row-gap:2px;}", ".f14vjzk2>input{text-overflow:ellipsis;}", ".fn95gcf>input{width:95%;}", ".ftrb29c{list-style-type:none;}", ".fyacil5{margin-bottom:var(--spacingVerticalXXS);}", ".f1hu3pq6{margin-top:0;}", ".f1cnd47f{padding-left:0;}", ".fhxju0i{padding-right:0;}", ".f22iagw{display:flex;}", ".f17p0ad6{grid-gap:var(--spacingHorizontalXXS);}"]
});

/***/ }),

/***/ "./src/apps/components/FilterCombobox/FilterCombobox.utils.tsx":
/*!*********************************************************************!*\
  !*** ./src/apps/components/FilterCombobox/FilterCombobox.utils.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useComboboxFilterWithFreeform: () => (/* binding */ useComboboxFilterWithFreeform)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



function useComboboxFilterWithFreeform(options, query = '', { noOptionsMessage, freeform, } = {}) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const lowercaseTrimmedQuery = query.toLocaleLowerCase().trim();
        const lowercaseOptions = options.map((option) => typeof option === 'string'
            ? option.toLocaleLowerCase()
            : option?.value?.toLocaleLowerCase());
        // query is defined and not included in the options
        if (lowercaseTrimmedQuery &&
            !lowercaseOptions.find((option) => option.includes(lowercaseTrimmedQuery))) {
            const option = freeform
                ? // if freeform is enabled, return the query as an option
                    query
                : // otherwise, return the no options message
                    noOptionsMessage ?? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.filter_combobox.no_options_message);
            return [
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Option, { disabled: !freeform, key: option, value: freeform ? option : undefined, text: option }, option),
            ];
        }
        return options.reduce((options, option) => {
            const value = typeof option === 'string' ? option : option?.value;
            // query is either not present, or included in the options
            if (!query || value.toLocaleLowerCase().includes(lowercaseTrimmedQuery)) {
                const text = typeof option === 'string' ? option : option?.children;
                if (text) {
                    options.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Option, { key: value, value: value, text: text }, text));
                }
            }
            return options;
        }, []);
    }, [query, options, noOptionsMessage, freeform]);
}


/***/ }),

/***/ "./src/apps/components/FilterCombobox/index.ts":
/*!*****************************************************!*\
  !*** ./src/apps/components/FilterCombobox/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterCombobox: () => (/* reexport safe */ _FilterCombobox_root__WEBPACK_IMPORTED_MODULE_0__.FilterCombobox)
/* harmony export */ });
/* harmony import */ var _FilterCombobox_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterCombobox.root */ "./src/apps/components/FilterCombobox/FilterCombobox.root.tsx");



/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/FilterRow.render.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/FilterRow.render.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useFilterRowRender: () => (/* binding */ useFilterRowRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _FilterRow_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterRow.types */ "./src/apps/components/Filters/FilterRow/FilterRow.types.ts");





var TestIds;
(function (TestIds) {
    TestIds["LogicalOperatorDropdown"] = "filter-row-logical-operator-picker";
    TestIds["PropertyDropdown"] = "filter-row-property-picker";
    TestIds["OperatorDropdown"] = "filter-row-operator-picker";
    TestIds["BooleanValueDropdown"] = "filter-row-boolean-value-picker";
    TestIds["ValueField"] = "filter-row-value-field";
    TestIds["DeleteButton"] = "filter-row-delete-button";
    TestIds["DateValueField"] = "filter-row-date-value-field";
    TestIds["TimeSeriesValueField"] = "filter-row-time-series-value-field";
    TestIds["TimeSeriesStartTimeField"] = "filter-row-time-series-start-time-field";
    TestIds["TimeSeriesEndTimeField"] = "filter-row-time-series-end-time-field";
})(TestIds || (TestIds = {}));
const useFilterRowRender = ({ state, styles, }) => {
    const stringOperators = [
        {
            name: 'eq',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.equals),
        },
        {
            name: 'contains',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.contains),
        },
    ];
    const numberOperators = [
        {
            name: 'eq',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.equals),
        },
        {
            name: 'gt',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.greater_than),
        },
        {
            name: 'lt',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.less_than),
        },
        {
            name: 'ge',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.greater_than_or_equals),
        },
        {
            name: 'le',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.less_than_or_equals),
        },
    ];
    const booleanOperators = [
        {
            name: 'eq',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.equals),
        },
    ];
    const logicalOperators = [
        {
            name: 'and',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.logical_operators.and),
        },
        {
            name: 'or',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.logical_operators.or),
        },
    ];
    const booleanValueOptions = [
        {
            name: 'true',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.true),
        },
        {
            name: 'false',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.false),
        },
    ];
    const dateOperators = [
        {
            name: 'gt',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.is_after),
        },
        {
            name: 'lt',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operators.is_before),
        },
    ];
    const valueTypeLocalizedOptionMapping = {
        String: {
            name: 'String',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_types.string),
        },
        Int: {
            name: 'Int',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_types.integer),
        },
        Double: {
            name: 'Double',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_types.double),
        },
        DateTime: {
            name: 'DateTime',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_types.date_time),
        },
        Bool: {
            name: 'Bool',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_types.boolean),
        },
    };
    const getOptions = () => {
        if (state.operatorOptions !== undefined) {
            return state.operatorOptions;
        }
        switch (state.propertyType) {
            case 'number':
                return numberOperators;
            case 'boolean':
                return booleanOperators;
            case 'date':
                return dateOperators;
            case 'timeSeries':
                return numberOperators;
            default:
                return stringOperators;
        }
    };
    const renderBooleanValueDropdown = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), validationMessage: state.valueValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), value: state.value, onOptionSelect: (_ev, selection) => state.setValue(state.rowIndex, `${selection.optionValue}`), "data-testid": TestIds.BooleanValueDropdown }, booleanValueOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Option, { key: option.name, value: option.name }, option.localizedString))))));
    };
    const renderDateValueDropdown = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { validationMessage: state.propertyValidationMessage },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Input, { type: 'datetime-local', onChange: (_, data) => state.setValue(state.rowIndex, data.value), value: state.value, "data-testid": TestIds.DateValueField }))));
    };
    const renderTimeSeriesValue = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), validationMessage: state.valueValidationMessage },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Input, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), value: state.value, onChange: (_e, data) => {
                        state.setValue(state.rowIndex, data.value);
                    }, "data-testid": TestIds.TimeSeriesValueField }))));
    };
    const renderTimeSeriesDateTime = () => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.timeSeriesDateTime },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.newLine }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.time_series_between)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Input, { type: 'date', onChange: (_e, data) => {
                        if (state.setTimeSeriesStartTimeUTC) {
                            state.setTimeSeriesStartTimeUTC(state.rowIndex, data.value);
                        }
                    }, value: state.timeSeriesStartTimeUTC, "data-testid": TestIds.TimeSeriesStartTimeField })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.time_series_and)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Input, { type: 'date', onChange: (_e, data) => {
                        if (state.setTimeSeriesEndTimeUTC) {
                            state.setTimeSeriesEndTimeUTC(state.rowIndex, data.value);
                        }
                    }, value: state.timeSeriesEndTimeUTC, "data-testid": TestIds.TimeSeriesEndTimeField }))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: state.propertyType === 'timeSeries' ? styles.timeSeriesRow : styles.root },
        state.rowIndex === 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { className: styles.firstFilterColumn }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.first_filter_prefix))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": 'logical_operator' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { className: styles.firstFilterColumn, placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.logical_operators.and), value: logicalOperators.find((x) => x.name === state.logicalOperator)
                    ?.localizedString ?? state.logicalOperator, onOptionSelect: (_, selection) => {
                    if (state.setLogicalOperator) {
                        state.setLogicalOperator(state.rowIndex, `${selection.optionValue}`);
                    }
                }, defaultValue: 'and', defaultSelectedOptions: ['and'], listbox: { className: styles.dropdownListbox }, "data-testid": TestIds.LogicalOperatorDropdown }, logicalOperators.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Option, { key: option.name, text: option.name }, option.localizedString)))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.property_picker_placeholder), validationMessage: state.propertyValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.property_picker_placeholder), value: state.property, onOptionSelect: (_ev, selection) => {
                    if (selection.optionValue) {
                        const [name, valueType] = selection.optionValue.split(_FilterRow_types__WEBPACK_IMPORTED_MODULE_2__.FilterRowOptionDelimiter);
                        state.setProperty(state.rowIndex, name, valueType);
                    }
                }, disabled: state.propertyOptions.length < 2, "data-testid": TestIds.PropertyDropdown }, state.propertyOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Option, { key: option.name + _FilterRow_types__WEBPACK_IMPORTED_MODULE_2__.FilterRowOptionDelimiter + option.valueType, text: option.name, value: option.name + _FilterRow_types__WEBPACK_IMPORTED_MODULE_2__.FilterRowOptionDelimiter + option.valueType },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.propertyOption },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, option.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.propertyType }, valueTypeLocalizedOptionMapping[option.valueType]
                        .localizedString))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operator_picker_placeholder), validationMessage: state.operatorValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.operator_picker_placeholder), value: getOptions().find((x) => x.name === state.operator)
                    ?.localizedString ?? state.operator, onOptionSelect: (_ev, selection) => state.setOperator(state.rowIndex, `${selection.optionValue}`), "data-testid": TestIds.OperatorDropdown }, getOptions().map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Option, { key: option.name, value: option.name }, option.localizedString))))),
        state.propertyType === 'boolean' && renderBooleanValueDropdown(),
        state.propertyType === 'date' && renderDateValueDropdown(),
        state.propertyType === 'timeSeries' && renderTimeSeriesValue(),
        state.propertyType === 'timeSeries' && renderTimeSeriesDateTime(),
        state.propertyType !== 'boolean' &&
            state.propertyType !== 'date' &&
            state.propertyType !== 'timeSeries' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), validationMessage: state.valueValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Input, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.value_field_placeholder), value: state.value, onChange: (_e, data) => {
                    state.setValue(state.rowIndex, data.value);
                }, "data-testid": TestIds.ValueField }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Tooltip, { content: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.delete_filter_row_tooltip), relationship: 'label' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Button, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.Delete24Regular, null), appearance: 'transparent', "data-testid": TestIds.DeleteButton, onClick: () => state.deleteFilterRule(state.rowIndex), disabled: !state.isDeleteRowEnabled }))));
};


/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/FilterRow.root.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/FilterRow.root.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterRow: () => (/* binding */ FilterRow)
/* harmony export */ });
/* harmony import */ var _FilterRow_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterRow.render */ "./src/apps/components/Filters/FilterRow/FilterRow.render.tsx");
/* harmony import */ var _FilterRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterRow.styles */ "./src/apps/components/Filters/FilterRow/FilterRow.styles.ts");
/* harmony import */ var _FilterRow_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterRow.state */ "./src/apps/components/Filters/FilterRow/FilterRow.state.ts");



const MODULE_NAME = 'FilterRow';
const FilterRow = (props) => {
    // get state
    const state = (0,_FilterRow_state__WEBPACK_IMPORTED_MODULE_2__.useFilterRowState)(props);
    // get styles
    const styles = (0,_FilterRow_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FilterRow_render__WEBPACK_IMPORTED_MODULE_0__.useFilterRowRender)({ state, styles });
};
FilterRow.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/FilterRow.state.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/FilterRow.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFilterRowState: () => (/* binding */ useFilterRowState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'FilterRow.state';
const useFilterRowState = (props) => {
    // contexts
    const { setFilterValid } = props;
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    const valueValidationMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        let validationMessage;
        if (props.propertyType === 'number' && isNaN(Number(props.value))) {
            validationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.query_panel.number_value_validation_message);
        }
        else if (props.propertyType === 'boolean' &&
            props.value !== '' && // when value isn't selected yet
            props.value !== 'true' &&
            props.value !== 'false') {
            validationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.query_panel.boolean_value_validation_message);
        }
        else if (props.propertyType === 'date' && !isDateValid(props.value)) {
            validationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.query_panel.date_value_validation_message);
        }
        setFilterValid && setFilterValid(props.rowIndex, !validationMessage);
        return validationMessage;
    }, [props.rowIndex, props.propertyType, setFilterValid, props.value]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            propertyType: props.propertyType,
            isDeleteRowEnabled: props.allowDeleteFinalRow
                ? props.totalRows > 0
                : props.totalRows !== 1,
            rowIndex: props.rowIndex,
            propertyOptions: props.propertyOptions,
            operatorOptions: props.operatorOptions,
            logicalOperatorOptions: props.logicalOperatorOptions,
            property: props.property,
            setProperty: props.setProperty,
            operator: props.operator,
            setOperator: props.setOperator,
            value: props.value,
            setValue: props.setValue,
            logicalOperator: props.logicalOperator,
            setLogicalOperator: props.setLogicalOperator,
            deleteFilterRule: props.deleteFilterRule,
            // TODO: commented out for now, next pr adds form validation so these will be uncommented
            // propertyValidationMessage: undefined,
            // operatorValidationMessage: undefined,
            valueValidationMessage,
            allowDeleteFinalRow: props.allowDeleteFinalRow,
            timeSeriesStartTimeUTC: props.timeSeriesStartTimeUTC,
            setTimeSeriesStartTimeUTC: props.setTimeSeriesStartTimeUTC,
            timeSeriesEndTimeUTC: props.timeSeriesEndTimeUTC,
            setTimeSeriesEndTimeUTC: props.setTimeSeriesEndTimeUTC,
        };
    }, [
        props.allowDeleteFinalRow,
        props.deleteFilterRule,
        props.logicalOperator,
        props.logicalOperatorOptions,
        props.operator,
        props.operatorOptions,
        props.property,
        props.propertyOptions,
        props.propertyType,
        props.rowIndex,
        props.setLogicalOperator,
        props.setOperator,
        props.setProperty,
        props.setTimeSeriesEndTimeUTC,
        props.setTimeSeriesStartTimeUTC,
        props.setValue,
        props.timeSeriesStartTimeUTC,
        props.timeSeriesEndTimeUTC,
        props.totalRows,
        props.value,
        valueValidationMessage,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};
function isDateValid(dateStr) {
    return !isNaN(Date.parse(dateStr));
}


/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/FilterRow.styles.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/FilterRow.styles.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f4px1ci",
    Bt984gj: "f122n59",
    Bqenvij: "fzki0ko"
  },
  propertyOption: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    a9b677: "fly5x3f",
    Brf1p80: "f1869bpl"
  },
  firstFilterColumn: {
    Bf4jedk: "fh7ncta",
    a9b677: "fa9ln6p",
    fsow6f: "f17mccla"
  },
  dropdownListbox: {
    Bf4jedk: "f18p0k4z",
    a9b677: "fa9ln6p"
  },
  propertyType: {
    sj55zd: "f11d4kpn"
  },
  timeSeriesRow: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Eh141a: "fni485r",
    i8kkvl: "f4px1ci",
    Bt984gj: "f122n59",
    Bqenvij: "f11ysow2"
  },
  timeSeriesDateTime: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f4px1ci",
    Bt984gj: "f122n59",
    Bqenvij: "fzki0ko"
  },
  newLine: {
    a9b677: "fly5x3f"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f4px1ci{column-gap:8px;}", ".f122n59{align-items:center;}", ".fzki0ko{height:56px;}", ".fly5x3f{width:100%;}", ".f1869bpl{justify-content:space-between;}", ".fh7ncta{min-width:64px;}", ".fa9ln6p{width:64px;}", ".f17mccla{text-align:center;}", ".f18p0k4z{min-width:unset;}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".fni485r{flex-wrap:wrap;}", ".f11ysow2{height:auto;}"]
});

/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/FilterRow.types.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/FilterRow.types.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterRowOptionDelimiter: () => (/* binding */ FilterRowOptionDelimiter)
/* harmony export */ });
const FilterRowOptionDelimiter = '🐞';


/***/ }),

/***/ "./src/apps/components/Filters/FilterRow/index.ts":
/*!********************************************************!*\
  !*** ./src/apps/components/Filters/FilterRow/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterRow: () => (/* reexport safe */ _FilterRow_root__WEBPACK_IMPORTED_MODULE_0__.FilterRow)
/* harmony export */ });
/* harmony import */ var _FilterRow_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterRow.root */ "./src/apps/components/Filters/FilterRow/FilterRow.root.tsx");



/***/ }),

/***/ "./src/apps/components/Filters/Filters.types.ts":
/*!******************************************************!*\
  !*** ./src/apps/components/Filters/Filters.types.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SqlTypeFilterRowTypeMapping: () => (/* binding */ SqlTypeFilterRowTypeMapping)
/* harmony export */ });
const SqlTypeFilterRowTypeMapping = {
    String: 'string',
    Int: 'number',
    Double: 'number',
    Bool: 'boolean',
    DateTime: 'date',
};


/***/ }),

/***/ "./src/apps/components/Filters/SortRow/SortRow.render.tsx":
/*!****************************************************************!*\
  !*** ./src/apps/components/Filters/SortRow/SortRow.render.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useSortRowRender: () => (/* binding */ useSortRowRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



var TestIds;
(function (TestIds) {
    TestIds["PropertyDropdown"] = "sort-row-property-picker";
    TestIds["OrderDropdown"] = "sort-row-order-picker";
})(TestIds || (TestIds = {}));
const useSortRowRender = ({ state, styles, }) => {
    const orderOptions = [
        {
            name: 'ASC',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.order_ascending),
        },
        {
            name: 'DESC',
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.order_descending),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.property_picker_placeholder), validationMessage: state.propertyValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.property_picker_placeholder), value: state.property, onOptionSelect: (_ev, selection) => state.setProperty(`${selection.optionValue}`), "data-testid": TestIds.PropertyDropdown }, state.propertyOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Option, { key: option.name, text: option.name },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.propertyOption },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, option.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.propertyType }, option.valueType ?? option.type))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Field, { "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.order_picker_placeholder), validationMessage: state.orderValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.order_picker_placeholder), value: orderOptions.find((x) => x.name === state.order)?.localizedString ??
                    state.order, onOptionSelect: (_ev, selection) => state.setOrder(`${selection.optionValue}`), "data-testid": TestIds.OrderDropdown }, orderOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Option, { key: option.name, text: option.name }, option.localizedString)))))));
};


/***/ }),

/***/ "./src/apps/components/Filters/SortRow/SortRow.root.tsx":
/*!**************************************************************!*\
  !*** ./src/apps/components/Filters/SortRow/SortRow.root.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortRow: () => (/* binding */ SortRow)
/* harmony export */ });
/* harmony import */ var _SortRow_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortRow.render */ "./src/apps/components/Filters/SortRow/SortRow.render.tsx");
/* harmony import */ var _SortRow_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortRow.styles */ "./src/apps/components/Filters/SortRow/SortRow.styles.ts");
/* harmony import */ var _SortRow_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortRow.state */ "./src/apps/components/Filters/SortRow/SortRow.state.ts");



const MODULE_NAME = 'SortRow';
const SortRow = (props) => {
    // get state
    const state = (0,_SortRow_state__WEBPACK_IMPORTED_MODULE_2__.useSortRowState)(props);
    // get styles
    const styles = (0,_SortRow_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_SortRow_render__WEBPACK_IMPORTED_MODULE_0__.useSortRowRender)({ state, styles });
};
SortRow.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/Filters/SortRow/SortRow.state.ts":
/*!**************************************************************!*\
  !*** ./src/apps/components/Filters/SortRow/SortRow.state.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSortRowState: () => (/* binding */ useSortRowState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'SortRow.state';
const useSortRowState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            // TODO: Temporary hack to filter out attributes, timeseries, and label until sort is supported for these
            propertyOptions: props.propertyOptions.filter((option) => option.source !== 'Attribute' &&
                option.source !== 'TimeSeries' &&
                option.source !== 'Label'),
            property: props.property,
            setProperty: props.setProperty,
            order: props.order,
            setOrder: props.setOrder,
            propertyValidationMessage: props.propertyValidationMessage,
            orderValidationMessage: props.orderValidationMessage,
        };
    }, [
        props.propertyOptions,
        props.property,
        props.setProperty,
        props.order,
        props.setOrder,
        props.propertyValidationMessage,
        props.orderValidationMessage,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/Filters/SortRow/SortRow.styles.ts":
/*!***************************************************************!*\
  !*** ./src/apps/components/Filters/SortRow/SortRow.styles.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f4px1ci",
    Bt984gj: "f6jr5hl"
  },
  propertyOption: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    a9b677: "fly5x3f",
    Brf1p80: "f1869bpl"
  },
  propertyType: {
    sj55zd: "f11d4kpn"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f4px1ci{column-gap:8px;}", ".f6jr5hl{align-items:flex-start;}", ".fly5x3f{width:100%;}", ".f1869bpl{justify-content:space-between;}", ".f11d4kpn{color:var(--colorNeutralForeground3);}"]
});

/***/ }),

/***/ "./src/apps/components/Filters/SortRow/index.ts":
/*!******************************************************!*\
  !*** ./src/apps/components/Filters/SortRow/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortRow: () => (/* reexport safe */ _SortRow_root__WEBPACK_IMPORTED_MODULE_0__.SortRow)
/* harmony export */ });
/* harmony import */ var _SortRow_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SortRow.root */ "./src/apps/components/Filters/SortRow/SortRow.root.tsx");



/***/ }),

/***/ "./src/apps/components/Filters/index.ts":
/*!**********************************************!*\
  !*** ./src/apps/components/Filters/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterRow: () => (/* reexport safe */ _FilterRow__WEBPACK_IMPORTED_MODULE_0__.FilterRow),
/* harmony export */   SortRow: () => (/* reexport safe */ _SortRow__WEBPACK_IMPORTED_MODULE_1__.SortRow),
/* harmony export */   SqlTypeFilterRowTypeMapping: () => (/* reexport safe */ _Filters_types__WEBPACK_IMPORTED_MODULE_2__.SqlTypeFilterRowTypeMapping)
/* harmony export */ });
/* harmony import */ var _FilterRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterRow */ "./src/apps/components/Filters/FilterRow/index.ts");
/* harmony import */ var _SortRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SortRow */ "./src/apps/components/Filters/SortRow/index.ts");
/* harmony import */ var _Filters_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters.types */ "./src/apps/components/Filters/Filters.types.ts");





/***/ }),

/***/ "./src/apps/components/Graph/Graph.render.tsx":
/*!****************************************************!*\
  !*** ./src/apps/components/Graph/Graph.render.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGraphRender: () => (/* binding */ useGraphRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Graph_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.types */ "./src/apps/components/Graph/Graph.types.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-hooks */ "./node_modules/@fluentui/react-hooks/lib/useId.js");
/* harmony import */ var cytoscape_navigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cytoscape-navigator */ "./node_modules/cytoscape-navigator/cytoscape-navigator.js");
/* harmony import */ var cytoscape_navigator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cytoscape_navigator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cytoscape_context_menus_cytoscape_context_menus_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cytoscape-context-menus/cytoscape-context-menus.css */ "./node_modules/cytoscape-context-menus/cytoscape-context-menus.css");
/* harmony import */ var cytoscape_panzoom_cytoscape_js_panzoom_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cytoscape-panzoom/cytoscape.js-panzoom.css */ "./node_modules/cytoscape-panzoom/cytoscape.js-panzoom.css");
/* harmony import */ var cytoscape_panzoom_font_awesome_4_0_3_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cytoscape-panzoom/font-awesome-4.0.3/css/font-awesome.min.css */ "./node_modules/cytoscape-panzoom/font-awesome-4.0.3/css/font-awesome.min.css");
/* harmony import */ var _Graph_render_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Graph.render.css */ "./src/apps/components/Graph/Graph.render.css");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




 // TODO: lazy load these extensions too
const panzoom = __webpack_require__(/*! cytoscape-panzoom */ "./node_modules/cytoscape-panzoom/cytoscape-panzoom.js"); // TODO: instead of using pan zoom extension we can customly implement it using cytoscape ref instance's native .pan, .zoom and .center methods
const contextMenus = __webpack_require__(/*! cytoscape-context-menus */ "./node_modules/cytoscape-context-menus/cytoscape-context-menus.js"); // TODO: instead of using context menus extension we can customly implement it using node on click callbacks
 // TODO: override styles as needed
 // TODO: instead of using their style, we can use fluentui icons with custom implementation of cytoscape-panzoom
 // TODO: instead of using font-awesome we can use fluentui icons with custom implementation of cytoscape-panzoom
 // alternatively you can import from cytoscape-navigator/cytoscape.js-navigator.css.css

const CytoscapeComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_cytoscape_dist_cytoscape_js"), __webpack_require__.e("node_modules_react-cytoscapejs_dist_react-cytoscape_modern_js")]).then(__webpack_require__.bind(__webpack_require__, /*! react-cytoscapejs */ "./node_modules/react-cytoscapejs/dist/react-cytoscape.modern.js")));
const setupCytoscape = (cyModuleRef) => {
    // register extensions
    if (typeof cyModuleRef.current('core', 'navigator') === 'undefined') {
        cytoscape_navigator__WEBPACK_IMPORTED_MODULE_2___default()(cyModuleRef.current);
    }
    if (typeof cyModuleRef.current('core', 'panzoom') !== 'function') {
        panzoom(cyModuleRef.current);
    }
    if (typeof cyModuleRef.current('core', 'contextMenus') !== 'function') {
        contextMenus(cyModuleRef.current);
    }
};
const useGraphRender = (props) => {
    const { state, styles } = props;
    const cyModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const cyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const navigatorId = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useId)('navigator');
    const getDefaultContextMenuOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((cy, callback) => {
        return {
            evtType: 'cxttap',
            menuItems: [
                {
                    id: 'details',
                    content: (0,_do_localization__WEBPACK_IMPORTED_MODULE_7__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_7__.strings.explorer.twins.graph.viewTwinDetails),
                    tooltipText: (0,_do_localization__WEBPACK_IMPORTED_MODULE_7__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_7__.strings.explorer.twins.graph.viewTwinDetails),
                    selector: 'node, edge',
                    onClickFunction: function () {
                        alert('Show details!'); // TODO: hook twin or relationship details modal call here
                    },
                    hasTrailingDivider: true,
                },
                {
                    id: 'expand',
                    content: (0,_do_localization__WEBPACK_IMPORTED_MODULE_7__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_7__.strings.explorer.twins.graph.expandNode),
                    selector: 'node',
                    onClickFunction: function (event) {
                        callback(event.target.data('id'), _Graph_types__WEBPACK_IMPORTED_MODULE_1__.NodeActions.expand);
                    },
                    hasTrailingDivider: true,
                },
                {
                    id: 'collapse',
                    content: (0,_do_localization__WEBPACK_IMPORTED_MODULE_7__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_7__.strings.explorer.twins.graph.collapseNode),
                    selector: 'node',
                    onClickFunction: function (event) {
                        callback(event.target.data('id'), _Graph_types__WEBPACK_IMPORTED_MODULE_1__.NodeActions.collapse);
                    },
                    hasTrailingDivider: true,
                },
            ],
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        async function fetchCyModule() {
            // lazy load cytoscape module
            await __webpack_require__.e(/*! import() */ "vendors-node_modules_cytoscape_dist_cytoscape_js").then(__webpack_require__.t.bind(__webpack_require__, /*! cytoscape */ "./node_modules/cytoscape/dist/cytoscape.js", 23)).then((module) => {
                cyModuleRef.current = module.default;
                setupCytoscape(cyModuleRef);
            });
        }
        if (!cyModuleRef.current) {
            fetchCyModule();
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.Spinner, { className: styles.spinner }) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CytoscapeComponent, { elements: state.elements, className: styles.graph, layout: state.layout, stylesheet: state.cytoscapeStylesheet, cy: (cy) => {
                    // initialize the Cytoscape instance once
                    if (cyRef.current !== cy) {
                        cyRef.current = cy;
                        cy.navigator({
                            ..._Graph_types__WEBPACK_IMPORTED_MODULE_1__.DefaultNavigationOptions,
                            container: `#${navigatorId}`,
                        });
                        cy.panzoom(_Graph_types__WEBPACK_IMPORTED_MODULE_1__.DefaultPanZoomOptions);
                        cy.contextMenus(getDefaultContextMenuOptions(cyRef.current, state.handleExpandCollapse));
                        cy.on('add', 'node', () => {
                            cy.layout(state.layout).run(); // make sure that the layout is run after adding a new node
                        });
                    }
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.navigatorContainer },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: navigatorId, className: styles.navigator, role: 'presentation' })))));
};


/***/ }),

/***/ "./src/apps/components/Graph/Graph.root.tsx":
/*!**************************************************!*\
  !*** ./src/apps/components/Graph/Graph.root.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _Graph_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.render */ "./src/apps/components/Graph/Graph.render.tsx");
/* harmony import */ var _Graph_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph.styles */ "./src/apps/components/Graph/Graph.styles.ts");
/* harmony import */ var _Graph_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graph.state */ "./src/apps/components/Graph/Graph.state.ts");




const MODULE_NAME = 'Graph';
const Graph = (props) => {
    // get state
    const state = (0,_Graph_state__WEBPACK_IMPORTED_MODULE_3__.useGraphState)(props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_Graph_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_Graph_render__WEBPACK_IMPORTED_MODULE_1__.useGraphRender)({
        state,
        styles,
    });
};
Graph.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/Graph/Graph.state.ts":
/*!**************************************************!*\
  !*** ./src/apps/components/Graph/Graph.state.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGraphState: () => (/* binding */ useGraphState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Graph_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph.types */ "./src/apps/components/Graph/Graph.types.ts");
/* harmony import */ var _Graph_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Graph.styles */ "./src/apps/components/Graph/Graph.styles.ts");



const useGraphState = (props) => {
    // contexts
    // state
    const [elements, setElements] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        if (!props.data) {
            return [];
        }
        else {
            const elements = [];
            if (props.data.nodes) {
                const nodes = props.data.nodes.map((e) => ({
                    data: e,
                }));
                elements.push(...nodes);
            }
            if (props.data.edges) {
                const edges = props.data.edges.map((e) => ({
                    data: e,
                }));
                elements.push(...edges);
            }
            return elements;
        }
    });
    // hooks
    // callbacks
    const getAllChildrenTwinIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((twinId) => {
        const directChildrenTwinIds = props.data.edges
            .filter((e) => e.source === twinId)
            .map((e) => e.target);
        const recursiveChildrenTwinIds = [];
        directChildrenTwinIds.forEach((childId) => {
            // TODO: make this iterative
            recursiveChildrenTwinIds.push(childId);
            recursiveChildrenTwinIds.push(...getAllChildrenTwinIds(childId));
        });
        return recursiveChildrenTwinIds;
    }, [props.data?.edges]);
    const handleExpandCollapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((twinId, action) => {
        const directChildrenTwinIds = props.data.edges
            .filter((e) => e.source === twinId)
            .map((e) => e.target);
        if (action === _Graph_types__WEBPACK_IMPORTED_MODULE_1__.NodeActions.expand) {
            setElements((prevElements) => {
                const newElements = Object.assign([], prevElements);
                directChildrenTwinIds.forEach((childId) => {
                    // add direct children nodes to graph elements
                    if (prevElements.findIndex((e) => e.data.id === childId) === -1) {
                        const childNode = props.data.nodes.find((n) => n.id === childId);
                        if (childNode) {
                            newElements.push({
                                data: childNode,
                            });
                        }
                    }
                    // add direct children edges to graph elements
                    if (prevElements.findIndex((e) => e.data.source === twinId &&
                        e.data.target === childId) === -1) {
                        const relationEdge = props.data.edges.find((n) => n.source === twinId && n.target === childId);
                        if (relationEdge) {
                            newElements.push({
                                data: relationEdge,
                            });
                        }
                    }
                });
                return newElements;
            });
        }
        else {
            // collapse node by shaking the subtree for all descendents nodes and edges
            const allChildrenTwinwIds = getAllChildrenTwinIds(twinId);
            setElements((prevElements) => {
                return prevElements.filter((e) => allChildrenTwinwIds.indexOf(e.data.id) === -1 &&
                    !(e.data.source === twinId ||
                        allChildrenTwinwIds.includes(e.data.source)) /** also remove edges that are connected to the all the descendent nodes that are being collapsed in subtrees,
                otherwise the nodes will be added when expanded again but no edges will be rendered,
                so the removal and addition of nodes and edges should be together */);
            });
        }
    }, [getAllChildrenTwinIds, props.data?.edges, props.data?.nodes]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            elements,
            layout: props.layout ?? _Graph_types__WEBPACK_IMPORTED_MODULE_1__.GraphLayouts.breadthfirst,
            cytoscapeStylesheet: props.cytoscapeStylesheet ?? _Graph_styles__WEBPACK_IMPORTED_MODULE_2__.DefaultCytoscapeStylesheet,
            handleExpandCollapse,
        };
    }, [elements, handleExpandCollapse, props.cytoscapeStylesheet, props.layout]);
    return state;
};


/***/ }),

/***/ "./src/apps/components/Graph/Graph.styles.ts":
/*!***************************************************!*\
  !*** ./src/apps/components/Graph/Graph.styles.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultCytoscapeStylesheet: () => (/* binding */ DefaultCytoscapeStylesheet),
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");


const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  spinner: {
    Bqenvij: "f1l02sjl"
  },
  graph: {
    a9b677: "f1aft9fd",
    Bqenvij: "f1aliw46"
  },
  navigatorContainer: {
    qhf8xq: "f1euv43f",
    B5kzvoi: "ff8plos",
    j35jbq: ["fy2oqeq", "f1ye5ixh"],
    De3pzq: "fxugw4r",
    Bqenvij: "fjr5b71",
    a9b677: "f1m4fr9j",
    z8tnut: "f1xp5gbu",
    z189sj: ["f1sgzk6v", "f1bg5zqg"],
    Byoj8tv: "f1d7kygh",
    uwmqm3: ["f1bg5zqg", "f1sgzk6v"],
    Bbmb7ep: ["f19gwsd", "f3xzbnz"],
    Beyfa6y: ["f3xzbnz", "f19gwsd"],
    B7oj6ja: ["f1cxotgb", "fxymw9n"],
    Btl43ni: ["fxymw9n", "f1cxotgb"],
    g2u3we: "fhh09w3",
    h3c5rm: ["f1llp1o6", "f1vjn2nj"],
    B9xav0g: "f71zf03",
    zhjwy3: ["f1vjn2nj", "f1llp1o6"]
  },
  navigator: {
    qhf8xq: "f10pi13n",
    Bqenvij: "f1l02sjl",
    a9b677: "fly5x3f",
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw",
    De3pzq: "f1dmdbja"
  }
}, {
  d: [".f1l02sjl{height:100%;}", ".f1aft9fd{width:90vw;}", ".f1aliw46{height:90vh;}", ".f1euv43f{position:absolute;}", ".ff8plos{bottom:20px;}", ".fy2oqeq{right:20px;}", ".f1ye5ixh{left:20px;}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fjr5b71{height:120px;}", ".f1m4fr9j{width:155px;}", ".f1xp5gbu{padding-top:6px;}", ".f1sgzk6v{padding-right:6px;}", ".f1bg5zqg{padding-left:6px;}", ".f1d7kygh{padding-bottom:6px;}", ".f19gwsd{border-bottom-right-radius:5px;}", ".f3xzbnz{border-bottom-left-radius:5px;}", ".f1cxotgb{border-top-right-radius:5px;}", ".fxymw9n{border-top-left-radius:5px;}", ".fhh09w3{border-top-color:var(--colorNeutralBackground1);}", ".f1llp1o6{border-right-color:var(--colorNeutralBackground1);}", ".f1vjn2nj{border-left-color:var(--colorNeutralBackground1);}", ".f71zf03{border-bottom-color:var(--colorNeutralBackground1);}", ".f10pi13n{position:relative;}", ".fly5x3f{width:100%;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}", ".f1dmdbja{background-color:var(--colorNeutralBackground2);}"]
});
const DefaultCytoscapeStylesheet = [{
  selector: 'node',
  style: {
    label: 'data(label)',
    'background-color': node => node.data('color') ? node.data('color') : 'gray'
  }
}, {
  selector: 'edge',
  style: {
    label: 'data(label)',
    width: 3,
    'target-arrow-shape': 'triangle',
    'text-rotation': 'autorotate',
    'curve-style': 'bezier',
    'text-margin-y': -10
  }
}, {
  selector: ':selected',
  css: {
    'background-color': 'SteelBlue',
    // TODO: themify colors as needed
    'line-color': 'black',
    'target-arrow-color': 'black',
    'source-arrow-color': 'black'
  }
}];

/***/ }),

/***/ "./src/apps/components/Graph/Graph.types.ts":
/*!**************************************************!*\
  !*** ./src/apps/components/Graph/Graph.types.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowedGraphLayouts: () => (/* binding */ AllowedGraphLayouts),
/* harmony export */   DefaultNavigationOptions: () => (/* binding */ DefaultNavigationOptions),
/* harmony export */   DefaultPanZoomOptions: () => (/* binding */ DefaultPanZoomOptions),
/* harmony export */   GraphLayouts: () => (/* binding */ GraphLayouts),
/* harmony export */   NodeActions: () => (/* binding */ NodeActions)
/* harmony export */ });
var AllowedGraphLayouts;
(function (AllowedGraphLayouts) {
    AllowedGraphLayouts["random"] = "random";
    AllowedGraphLayouts["grid"] = "grid";
    AllowedGraphLayouts["circle"] = "circle";
    AllowedGraphLayouts["concentric"] = "concentric";
    AllowedGraphLayouts["breadthfirst"] = "breadthfirst";
    AllowedGraphLayouts["dagre"] = "dagre";
    AllowedGraphLayouts["fcose"] = "fcose";
    AllowedGraphLayouts["cola"] = "cola";
})(AllowedGraphLayouts || (AllowedGraphLayouts = {}));
var NodeActions;
(function (NodeActions) {
    NodeActions[NodeActions["expand"] = 0] = "expand";
    NodeActions[NodeActions["collapse"] = 1] = "collapse";
})(NodeActions || (NodeActions = {}));
const GraphLayouts = {
    random: {
        name: AllowedGraphLayouts.random,
    },
    grid: {
        name: AllowedGraphLayouts.grid,
    },
    circle: {
        name: AllowedGraphLayouts.circle,
    },
    concentric: {
        name: AllowedGraphLayouts.concentric,
        minNodeSpacing: 100,
    },
    breadthfirst: {
        name: AllowedGraphLayouts.breadthfirst,
    },
    dagre: {
        name: AllowedGraphLayouts.dagre,
    },
    fcose: {
        name: AllowedGraphLayouts.fcose,
    },
    cola: {
        name: AllowedGraphLayouts.cola,
    },
};
const DefaultNavigationOptions = {
    container: true, // html dom element
    viewLiveFramerate: 2, // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
    dblClickDelay: 200, // milliseconds
    removeCustomContainer: true, // destroy the container specified by user on plugin destroy
    rerenderDelay: 500, // ms to throttle rerender updates to the panzoom for performance
};
const DefaultPanZoomOptions = {
    zoomFactor: 0.05, // zoom factor per zoom tick
    zoomDelay: 45, // how many ms between zoom ticks
    minZoom: 0.1, // min zoom level
    maxZoom: 10, // max zoom level
    fitPadding: 50, // padding when fitting
    panSpeed: 10, // how many ms in between pan ticks
    panDistance: 10, // max pan distance per tick
    panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
    panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
    panInactiveArea: 8, // radius of inactive area in pan drag box
    panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
    zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
    fitSelector: undefined, // selector of elements to fit
    animateOnFit: function () {
        // whether to animate on fit
        return false;
    },
    fitAnimationDuration: 1000, // duration of animation on fit
    // icon class names
    sliderHandleIcon: 'fa fa-minus',
    zoomInIcon: 'fa fa-plus',
    zoomOutIcon: 'fa fa-minus',
    resetIcon: 'fa fa-expand',
};


/***/ }),

/***/ "./src/apps/components/Graph/index.ts":
/*!********************************************!*\
  !*** ./src/apps/components/Graph/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* reexport safe */ _Graph_root__WEBPACK_IMPORTED_MODULE_0__.Graph)
/* harmony export */ });
/* harmony import */ var _Graph_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph.root */ "./src/apps/components/Graph/Graph.root.tsx");



/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.reducer.tsx":
/*!*********************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.reducer.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyTreeReducer: () => (/* binding */ HierarchyTreeReducer),
/* harmony export */   MODULE_NAME: () => (/* binding */ MODULE_NAME),
/* harmony export */   debugLogging: () => (/* binding */ debugLogging),
/* harmony export */   useHierarchyTreeReducer: () => (/* binding */ useHierarchyTreeReducer)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyTree.types */ "./src/apps/components/HierarchyTree/HierarchyTree.types.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTree.utils */ "./src/apps/components/HierarchyTree/HierarchyTree.utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const debugLogging = true;
const MODULE_NAME = 'HierarchyTreeReducer';
const INITIAL_TREE = {
    state: 'uncalled',
    nodes: [],
};
const HierarchyTreeReducer = (0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)((draft, action) => {
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, `Updating HierarchyTreeReducer context ${action.type} with payload: `, action.payload);
    switch (action.type) {
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.TOGGLE_NODE: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                node.open = !node.open;
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADING_ROOTS: {
            draft.state = 'pending';
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.FAILED_TO_LOAD_ROOTS: {
            draft.state = 'error';
            draft.errorCode = action.payload.errorCode;
            draft.errorMessage = action.payload.errorMessage;
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADED_ROOTS: {
            draft.state = 'success';
            draft.nodes = action.payload.nodes;
            draft.continuationToken = action.payload.continuationToken;
            draft.continuationUri = action.payload.continuationUri;
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADING_MORE_ROOTS: {
            draft.isLoadingMore = true;
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADED_MORE_ROOTS: {
            draft.isLoadingMore = false;
            draft.state = 'success';
            draft.nodes = [...draft.nodes, ...action.payload.nodes];
            draft.continuationToken = action.payload.continuationToken;
            draft.continuationUri = action.payload.continuationUri;
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADING_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                if (node.children === undefined) {
                    node.children = {
                        state: 'pending',
                    };
                }
                else {
                    node.children.state = 'pending';
                }
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADED_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                if (node.children === undefined) {
                    node.children = {
                        state: 'success',
                        data: action.payload.nodes || [],
                    };
                }
                else {
                    node.children.state = 'success';
                    if (action.payload.nodes) {
                        node.children.data =
                            action.payload.nodes;
                    }
                }
                node.continuationToken = action.payload.continuationToken;
                node.continuationUri = action.payload.continuationUri;
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADING_MORE_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                node.isLoadingMore = true;
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.LOADED_MORE_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                node.isLoadingMore = false;
                if (node.children === undefined) {
                    node.children = {
                        state: 'success',
                        data: [],
                    };
                }
                node.children.state = 'success';
                node.children.data = [
                    ...node.children.data,
                    ...action.payload.nodes,
                ];
                node.continuationToken = action.payload.continuationToken;
                node.continuationUri = action.payload.continuationUri;
                //be sure to set node open
                node.open = true;
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.FAILED_TO_LOAD_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                node.children = {
                    state: 'error',
                    errorCode: action.payload.errorCode,
                    errorMessage: action.payload.errorMessage,
                };
            }
            break;
        }
        case _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_0__.HierarchyTreeActionType.FAILED_TO_LOAD_MORE_CHILDREN: {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_2__.hierarchyDeepFindByPath)(action.payload.path, draft.nodes);
            if (node !== undefined) {
                node.isLoadingMore = false;
            }
            break;
        }
    }
    return draft;
});
const useHierarchyTreeReducer = () => {
    const [treeState, treeDispatch] = react__WEBPACK_IMPORTED_MODULE_3___default().useReducer(HierarchyTreeReducer, INITIAL_TREE);
    return { treeState, treeDispatch };
};


/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.render.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.render.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHierarchyTreeRender: () => (/* binding */ useHierarchyTreeRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tree/lib/components/TreeItem/TreeItem.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tree/lib/components/TreeItemLayout/TreeItemLayout.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tree/lib/components/Tree/Tree.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _EmptyContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EmptyContents */ "./src/apps/components/EmptyContents/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loading */ "./src/apps/components/Loading/index.ts");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage */ "./src/apps/components/ErrorMessage/index.ts");






const renderShowMore = (path, className, continuationToken, continuationUri, showMore) => {
    if (continuationToken &&
        continuationToken !== '' &&
        continuationUri &&
        continuationUri !== '') {
        return (
        // Put this in a tree item to get the right indention
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TreeItem, { key: `showMore_${path}`, value: path, itemType: 'leaf' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.TreeItemLayout, { className: className },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Link, { as: 'button', onClick: () => showMore(path, continuationToken, continuationUri), "data-testid": "hierarchy-show-more-button" /* TestIds.ShowMoreButton */ }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.hierarchy_tree.show_more)))));
    }
    return null;
};
const renderChildTree = (item, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, customItemLayout, onNodeClick) => {
    if (!item.children) {
        return null;
    }
    switch (item.children.state) {
        case 'success':
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tree, { "data-testid": `${"hierarchy-child-tree" /* TestIds.ChildTreePrefix */}-${item.path}`, key: `childTree_${item.path}`, "aria-label": item.displayName, onOpenChange: onOpenChange },
                    item.children.data.map((child) => {
                        return renderTreeItem(child, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, onNodeClick, customItemLayout);
                    }),
                    renderShowMore(item.path, showMoreStyle, item.continuationToken, item.continuationUri, onLoadMoreFromPath))));
        case 'error':
            return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, { message: item.children.errorMessage });
    }
    return null;
};
const renderTreeItem = (item, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, onNodeClick, customItemLayout) => {
    const itemType = item.childCount > 0 ? 'branch' : 'leaf';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TreeItem, { key: `treeItem_${item.path}`, value: item.path, itemType: itemType, "data-testId": item.path, open: item.open },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.TreeItemLayout, { className: item.twin !== undefined &&
                selectedTwinId !== undefined &&
                item.twin.twinId === selectedTwinId
                ? (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.mergeClasses)(treeItemStyle, selectedItemStyle)
                : treeItemStyle, expandIcon: item.children?.state === 'pending' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Spinner, { size: 'extra-tiny' })) : undefined }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: `treeItemLayout_${item.path}` }, customItemLayout ? (customItemLayout(item, itemType)) : onNodeClick ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.Button, { appearance: 'subtle', 
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onClick: () => onNodeClick(item.path, itemType), style: { fontWeight: 'normal' }, "data-testid": `${"hierarchy-tree-node-button" /* TestIds.TreeNodeButton */}` }, item.displayName)) : (item.displayName))),
        item.childCount > 0
            ? renderChildTree(item, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, customItemLayout, onNodeClick)
            : null));
};
const generateTree = (items, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, customItemLayout, onNodeClick) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, items.map((item) => renderTreeItem(item, selectedTwinId, selectedItemStyle, treeItemStyle, showMoreStyle, onOpenChange, onLoadMoreFromPath, onNodeClick, customItemLayout))));
};
const useHierarchyTreeRender = ({ state, styles, }) => {
    const handleOpenChange = async (_, data) => {
        if (data.open) {
            await state.onOpenChange(data.value);
        }
    };
    return state.state === 'uncalled' || state.state === 'pending' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, { "data-testid": "hierarchy-tree-loading" /* TestIds.Loading */ })) : state.state === 'success' ? (state.nodes.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_EmptyContents__WEBPACK_IMPORTED_MODULE_1__.EmptyContents, { "data-testid": "hierarchy-tree-empty" /* TestIds.Empty */, header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.hierarchy_tree.empty) })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tree, { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.mergeClasses)(styles.root, state.rootClassName), "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.hierarchy_tree.aria_label), "data-testid": state.dataTestId, onOpenChange: handleOpenChange },
            generateTree(state.nodes, state.selectedTwinId, styles.selectedItem, (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.mergeClasses)(styles.treeItem, state.treeItemClassName), (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.mergeClasses)(styles.showMore, state.showMoreClassName), handleOpenChange, state.onLoadMoreFromPath, state.customItemLayout, state.onNodeClick),
            renderShowMore('', (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.mergeClasses)(styles.showMore, state.showMoreClassName), state.continuationToken, state.continuationUri, state.onLoadMoreFromPath)),
        state.isLoadingMore ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__.Loading, { count: 1 }) : null))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, { "data-testid": "hierarchy-tree-error" /* TestIds.Error */, message: state.errorMessage ?? '' }));
};


/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.root.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.root.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyTree: () => (/* binding */ HierarchyTree)
/* harmony export */ });
/* harmony import */ var _HierarchyTree_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyTree.render */ "./src/apps/components/HierarchyTree/HierarchyTree.render.tsx");
/* harmony import */ var _HierarchyTree_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HierarchyTree.styles */ "./src/apps/components/HierarchyTree/HierarchyTree.styles.ts");
/* harmony import */ var _HierarchyTree_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTree.state */ "./src/apps/components/HierarchyTree/HierarchyTree.state.ts");



const MODULE_NAME = 'HierarchyTree';
const HierarchyTree = (props) => {
    // get state
    const state = (0,_HierarchyTree_state__WEBPACK_IMPORTED_MODULE_2__.useHierarchyTreeState)(props);
    // get styles
    const styles = (0,_HierarchyTree_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_HierarchyTree_render__WEBPACK_IMPORTED_MODULE_0__.useHierarchyTreeRender)({
        state,
        styles,
    });
};
HierarchyTree.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.state.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHierarchyTreeState: () => (/* binding */ useHierarchyTreeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyTree.types */ "./src/apps/components/HierarchyTree/HierarchyTree.types.ts");
/* harmony import */ var _HierarchyTree_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HierarchyTree.reducer */ "./src/apps/components/HierarchyTree/HierarchyTree.reducer.tsx");
/* harmony import */ var _HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HierarchyTree.utils */ "./src/apps/components/HierarchyTree/HierarchyTree.utils.ts");
/* harmony import */ var _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../explorer/models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");






const DEBUG_LOGGING = false;
const MODULE_NAME = 'HierarchyTree.state';
const useHierarchyTreeState = (props) => {
    // contexts
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useHierarchyClient)();
    // state
    const { treeState, treeDispatch } = (0,_HierarchyTree_reducer__WEBPACK_IMPORTED_MODULE_3__.useHierarchyTreeReducer)();
    // callbacks
    const onLoadMoreFromPath = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (path, continuationToken, continuationUri) => {
        if (client && treeState.state === 'success') {
            //we've loaded stuff, we can do things
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().logStandardizedCertifiedEvent({
                featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
                activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.ShowMoreClicked,
            });
            if (path === '') {
                treeDispatch({
                    type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADING_MORE_ROOTS,
                });
                //we're loading more roots
                const newRoots = await client.getRoots({
                    featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
                    activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.RootsCalled,
                }, continuationToken, continuationUri);
                if (newRoots.state === 'error') {
                    treeDispatch({
                        type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.FAILED_TO_LOAD_ROOTS,
                        payload: {
                            errorCode: newRoots.errorCode,
                            errorMessage: newRoots.errorMessage,
                        },
                    });
                }
                if (newRoots.state === 'success') {
                    treeDispatch({
                        type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADED_MORE_ROOTS,
                        payload: {
                            nodes: newRoots.data.value,
                            continuationToken: newRoots.data.continuationToken,
                            continuationUri: newRoots.data.continuationUri,
                        },
                    });
                }
            }
            else {
                //we're loading more children nodes
                treeDispatch({
                    type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADING_MORE_CHILDREN,
                    payload: { path },
                });
                const newChildren = await client.getChildren(path, {
                    featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
                    activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.ChildrenCalled,
                }, continuationToken, continuationUri);
                if (newChildren.state === 'success') {
                    treeDispatch({
                        type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADED_MORE_CHILDREN,
                        payload: {
                            path,
                            nodes: newChildren.data.value,
                            continuationToken: newChildren.data.continuationToken,
                            continuationUri: newChildren.data.continuationUri,
                        },
                    });
                }
                if (newChildren.state === 'error') {
                    treeDispatch({
                        type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.FAILED_TO_LOAD_MORE_CHILDREN,
                        payload: {
                            path,
                            errorCode: newChildren.errorCode,
                            errorMessage: newChildren.errorMessage,
                        },
                    });
                }
            }
        }
        return;
    }, [client, treeDispatch, treeState.state]);
    const processChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (hierarchyClient, path, node) => {
        // if node already has children, we're just done
        if (node.children && node.children.state === 'success') {
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADED_CHILDREN,
                payload: {
                    path: node.path,
                    nodes: undefined,
                },
            });
            return;
        }
        // go get the children
        const children = await hierarchyClient.getChildren(path, {
            featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
            activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.ChildrenCalled,
        }, node.continuationToken, node.continuationUri);
        if (children?.state === 'success') {
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADED_CHILDREN,
                payload: {
                    path,
                    nodes: children.data.value,
                    continuationToken: children.data.continuationToken,
                    continuationUri: children.data.continuationUri,
                },
            });
            return;
        }
        if (children?.state === 'error') {
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.FAILED_TO_LOAD_CHILDREN,
                payload: {
                    path,
                    errorCode: children.errorCode,
                    errorMessage: children.errorMessage,
                },
            });
            return;
        }
    }, [treeDispatch]);
    const onOpenChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (path) => {
        if (client) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().logStandardizedCertifiedEvent({
                featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
                activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.ExpandClicked,
            });
            //we've loaded stuff, we can do things
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADING_CHILDREN,
                payload: { path },
            });
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_4__.hierarchyDeepFindByPath)(path, treeState.nodes);
            if (node) {
                processChildren(client, path, { ...node });
            }
            else {
                treeDispatch({
                    type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.FAILED_TO_LOAD_CHILDREN,
                    payload: {
                        path: path,
                        errorCode: 'not found',
                        errorMessage: 'node not found',
                    },
                });
            }
        }
    }, [client, processChildren, treeDispatch, treeState.nodes]);
    const loadRoots = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client) => {
        const roots = await client.getRoots({
            featureName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.TwinVisualizationFeature.ExploreHierarchy,
            activityName: _explorer_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_5__.ExploreHierarchyActivity.RootsCalled,
        });
        if (roots && roots.state === 'success') {
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADED_ROOTS,
                payload: {
                    nodes: roots.data?.value ?? [],
                    continuationToken: roots.data?.continuationToken,
                    continuationUri: roots.data?.continuationUri,
                },
            });
        }
        if (roots && roots.state === 'error') {
            treeDispatch({
                type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.FAILED_TO_LOAD_ROOTS,
                payload: {
                    errorCode: roots.errorCode,
                    errorMessage: roots.errorMessage,
                },
            });
        }
    }, [treeDispatch]);
    const onNodeClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (path, hierarchyItemType) => {
        if (props.onHierarchyItemClick) {
            const node = (0,_HierarchyTree_utils__WEBPACK_IMPORTED_MODULE_4__.hierarchyDeepFindByPath)(path, treeState.nodes);
            if (node) {
                props.onHierarchyItemClick(node, hierarchyItemType);
            }
        }
    }, [props, treeState.nodes]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (client && treeState.state === 'uncalled') {
            treeDispatch({ type: _HierarchyTree_types__WEBPACK_IMPORTED_MODULE_2__.HierarchyTreeActionType.LOADING_ROOTS });
            loadRoots(client);
        }
    }, [client, loadRoots, treeDispatch, treeState.state]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            dataTestId: props.dataTestId || "hierarchy-tree-root" /* TestIds.TreeRoot */,
            state: treeState.state,
            nodes: treeState.nodes,
            selectedTwinId: props.selectedTwinId,
            continuationToken: treeState.continuationToken,
            continuationUri: treeState.continuationUri,
            onNodeClick: props.onHierarchyItemClick ? onNodeClick : undefined,
            customItemLayout: props.customItemLayout,
            onOpenChange,
            onLoadMoreFromPath,
            rootClassName: props.rootClassName,
            treeItemClassName: props.treeItemClassName,
            showMoreClassName: props.showMoreClassName,
        };
    }, [
        props.dataTestId,
        props.selectedTwinId,
        props.onHierarchyItemClick,
        props.customItemLayout,
        props.rootClassName,
        props.treeItemClassName,
        props.showMoreClassName,
        treeState.state,
        treeState.nodes,
        treeState.continuationToken,
        treeState.continuationUri,
        onNodeClick,
        onOpenChange,
        onLoadMoreFromPath,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.styles.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.styles.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  treeItem: {},
  showMore: {},
  selectedItem: {
    De3pzq: "f1nfm20t"
  }
}, {
  d: [".f1nfm20t{background-color:var(--colorNeutralBackground1Selected);}"]
});

/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.types.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.types.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyTreeActionType: () => (/* binding */ HierarchyTreeActionType)
/* harmony export */ });
var HierarchyTreeActionType;
(function (HierarchyTreeActionType) {
    HierarchyTreeActionType["LOADING_ROOTS"] = "LOADING_ROOTS";
    HierarchyTreeActionType["LOADED_ROOTS"] = "LOADED_ROOTS";
    HierarchyTreeActionType["LOADING_MORE_ROOTS"] = "LOADING_MORE_ROOTS";
    HierarchyTreeActionType["LOADED_MORE_ROOTS"] = "LOADED_MORE_ROOTS";
    HierarchyTreeActionType["FAILED_TO_LOAD_ROOTS"] = "FAILED_TO_LOAD_ROOTS";
    HierarchyTreeActionType["FAILED_TO_LOAD_MORE_ROOTS"] = "FAILED_TO_LOAD_MORE_ROOTS";
    HierarchyTreeActionType["LOADING_CHILDREN"] = "LOADING_CHILDREN";
    HierarchyTreeActionType["LOADED_CHILDREN"] = "LOADED_CHILDREN";
    HierarchyTreeActionType["LOADING_MORE_CHILDREN"] = "LOADING_MORE_CHILDREN";
    HierarchyTreeActionType["LOADED_MORE_CHILDREN"] = "LOADED_MORE_CHILDREN";
    HierarchyTreeActionType["FAILED_TO_LOAD_CHILDREN"] = "FAILED_TO_LOAD_CHILDREN";
    HierarchyTreeActionType["FAILED_TO_LOAD_MORE_CHILDREN"] = "FAILED_TO_LOAD_MORE_CHILDREN";
    HierarchyTreeActionType["TOGGLE_NODE"] = "TOGGLE_NODE";
})(HierarchyTreeActionType || (HierarchyTreeActionType = {}));


/***/ }),

/***/ "./src/apps/components/HierarchyTree/HierarchyTree.utils.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/HierarchyTree/HierarchyTree.utils.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hierarchyDeepFindByPath: () => (/* binding */ hierarchyDeepFindByPath)
/* harmony export */ });
const hierarchyDeepFindByPath = (path, hierarchyItems) => {
    for (const item of hierarchyItems) {
        if (item.path === path) {
            return item;
        }
        // TODO: check for hierarchies with cycles
        if (item.childCount > 0) {
            if (item.children?.state === 'success') {
                const found = hierarchyDeepFindByPath(path, item.children.data);
                if (found) {
                    return found;
                }
            }
        }
    }
    return undefined;
};


/***/ }),

/***/ "./src/apps/components/HierarchyTree/index.ts":
/*!****************************************************!*\
  !*** ./src/apps/components/HierarchyTree/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyTree: () => (/* reexport safe */ _HierarchyTree_root__WEBPACK_IMPORTED_MODULE_0__.HierarchyTree)
/* harmony export */ });
/* harmony import */ var _HierarchyTree_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyTree.root */ "./src/apps/components/HierarchyTree/HierarchyTree.root.tsx");



/***/ }),

/***/ "./src/apps/components/IconCard/IconCard.render.tsx":
/*!**********************************************************!*\
  !*** ./src/apps/components/IconCard/IconCard.render.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconCardTestIds: () => (/* binding */ IconCardTestIds),
/* harmony export */   useIconCardRender: () => (/* binding */ useIconCardRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/Card/Card.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");


var IconCardTestIds;
(function (IconCardTestIds) {
    IconCardTestIds["IconCard"] = "IconCard";
})(IconCardTestIds || (IconCardTestIds = {}));
const useIconCardRender = ({ state, styles, }) => {
    const { slots, slotProps } = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.getSlots)(state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Card, { onClick: state.onClick, "data-testid": state.testId ?? IconCardTestIds.IconCard, className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.root, state.className) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.image }, slots.image ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.image, { ...slotProps.image })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: '23', height: '29', viewBox: '0 0 23 29', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: 'M3.5 0.5C1.84315 0.5 0.5 1.84315 0.5 3.5V25.5C0.5 27.1569 1.84315 28.5 3.5 28.5H19.5C21.1569 28.5 22.5 27.1569 22.5 25.5V9.32843C22.5 8.53278 22.1839 7.76972 21.6213 7.20711L15.7929 1.37868C15.2303 0.81607 14.4672 0.5 13.6716 0.5H3.5ZM2.5 3.5C2.5 2.94772 2.94772 2.5 3.5 2.5H12.5V7.5C12.5 9.15685 13.8431 10.5 15.5 10.5H20.5V25.5C20.5 26.0523 20.0523 26.5 19.5 26.5H3.5C2.94772 26.5 2.5 26.0523 2.5 25.5V3.5ZM20.0858 8.5H15.5C14.9477 8.5 14.5 8.05228 14.5 7.5V2.91421L20.0858 8.5Z', fill: '#242424' })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.title, { ...slotProps.title, className: styles.title })));
};


/***/ }),

/***/ "./src/apps/components/IconCard/IconCard.root.tsx":
/*!********************************************************!*\
  !*** ./src/apps/components/IconCard/IconCard.root.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconCard: () => (/* binding */ IconCard)
/* harmony export */ });
/* harmony import */ var _IconCard_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconCard.render */ "./src/apps/components/IconCard/IconCard.render.tsx");
/* harmony import */ var _IconCard_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconCard.styles */ "./src/apps/components/IconCard/IconCard.styles.ts");
/* harmony import */ var _IconCard_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconCard.state */ "./src/apps/components/IconCard/IconCard.state.ts");



const MODULE_NAME = 'IconCard';
const IconCard = (props) => {
    // get state
    const state = (0,_IconCard_state__WEBPACK_IMPORTED_MODULE_2__.useIconCardState)(props);
    // get styles
    const styles = (0,_IconCard_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_IconCard_render__WEBPACK_IMPORTED_MODULE_0__.useIconCardRender)({ state, styles });
};
IconCard.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/IconCard/IconCard.state.ts":
/*!********************************************************!*\
  !*** ./src/apps/components/IconCard/IconCard.state.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIconCardState: () => (/* binding */ useIconCardState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'IconCard.state';
const useIconCardState = (props) => {
    // contexts
    // state
    const titleSlot = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.title);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            components: {
                root: 'div',
                title: props.titleAs ?? 'h3',
                image: 'div',
            },
            root: {},
            title: titleSlot,
            image: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.image),
            onClick: props.onClick,
            testId: props.testId,
        };
    }, [props.image, props.onClick, props.titleAs, titleSlot, props.testId]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/IconCard/IconCard.styles.ts":
/*!*********************************************************!*\
  !*** ./src/apps/components/IconCard/IconCard.styles.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    a9b677: "fv41rpo",
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  title: {
    z8tnut: "fqag9an",
    z189sj: ["f1gbmcue", "f1rh9g5y"],
    Byoj8tv: "fp67ikv",
    uwmqm3: ["f1rh9g5y", "f1gbmcue"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  },
  image: {
    a9b677: "fly5x3f",
    Bmliigx: "fxe27oy",
    Bt984gj: "f122n59",
    Bqenvij: "fypu0ge",
    Brf1p80: "f4d9j23",
    De3pzq: "f16xkysk",
    mc9l5x: "f22iagw",
    ha4doy: "fmrv4ls",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  }
}, {
  d: [".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".fv41rpo{width:184px;}", ".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".fqag9an{padding-top:16px;}", ".f1gbmcue{padding-right:16px;}", ".f1rh9g5y{padding-left:16px;}", ".fp67ikv{padding-bottom:16px;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".fly5x3f{width:100%;}", ".fxe27oy{align-content:center;}", ".f122n59{align-items:center;}", ".fypu0ge{height:96px;}", ".f4d9j23{justify-content:center;}", ".f16xkysk{background-color:var(--colorBrandBackground2);}", ".fmrv4ls{vertical-align:middle;}"]
});

/***/ }),

/***/ "./src/apps/components/IconCard/index.ts":
/*!***********************************************!*\
  !*** ./src/apps/components/IconCard/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconCard: () => (/* reexport safe */ _IconCard_root__WEBPACK_IMPORTED_MODULE_0__.IconCard)
/* harmony export */ });
/* harmony import */ var _IconCard_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconCard.root */ "./src/apps/components/IconCard/IconCard.root.tsx");



/***/ }),

/***/ "./src/apps/components/LabelValue/LabelValue.render.tsx":
/*!**************************************************************!*\
  !*** ./src/apps/components/LabelValue/LabelValue.render.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLabelValueRender: () => (/* binding */ useLabelValueRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");


const useLabelValueRender = ({ props, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Label, { className: styles.label },
            props.label,
            ":"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.value }, props.loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, { size: props.size }) : props.value)));
};


/***/ }),

/***/ "./src/apps/components/LabelValue/LabelValue.root.tsx":
/*!************************************************************!*\
  !*** ./src/apps/components/LabelValue/LabelValue.root.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelValue: () => (/* binding */ LabelValue)
/* harmony export */ });
/* harmony import */ var _LabelValue_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelValue.render */ "./src/apps/components/LabelValue/LabelValue.render.tsx");
/* harmony import */ var _LabelValue_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelValue.styles */ "./src/apps/components/LabelValue/LabelValue.styles.ts");


const MODULE_NAME = 'LabelValue';
const LabelValue = (props) => {
    // get styles
    const styles = { ...(0,_LabelValue_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)(), ...props.styles };
    // render the item
    return (0,_LabelValue_render__WEBPACK_IMPORTED_MODULE_0__.useLabelValueRender)({ props, styles });
};
LabelValue.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/LabelValue/LabelValue.styles.ts":
/*!*************************************************************!*\
  !*** ./src/apps/components/LabelValue/LabelValue.styles.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f1q8lukm"
  },
  label: {
    Bhrd7zp: "fl43uef"
  },
  value: {}
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1q8lukm{column-gap:4px;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"]
});

/***/ }),

/***/ "./src/apps/components/LabelValue/index.ts":
/*!*************************************************!*\
  !*** ./src/apps/components/LabelValue/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelValue: () => (/* reexport safe */ _LabelValue_root__WEBPACK_IMPORTED_MODULE_0__.LabelValue)
/* harmony export */ });
/* harmony import */ var _LabelValue_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelValue.root */ "./src/apps/components/LabelValue/LabelValue.root.tsx");



/***/ }),

/***/ "./src/apps/components/Loading/Loading.render.tsx":
/*!********************************************************!*\
  !*** ./src/apps/components/Loading/Loading.render.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useLoadingRender: () => (/* binding */ useLoadingRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/Skeleton/Skeleton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/SkeletonItem/SkeletonItem.js");


var TestIds;
(function (TestIds) {
    TestIds["Main"] = "loading-main";
})(TestIds || (TestIds = {}));
const useLoadingRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Skeleton, { "data-testid": state.testId ?? TestIds.Main, "aria-busy": 'true', className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.root, state.invert ? styles.inverted : '') }, Array.from({ length: state.count }, (_, i) => i).map((_, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.SkeletonItem, { key: i, size: state.size, shape: state.shape, className: i % 2 ? styles.altItem : styles.item })))));
};


/***/ }),

/***/ "./src/apps/components/Loading/Loading.root.tsx":
/*!******************************************************!*\
  !*** ./src/apps/components/Loading/Loading.root.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _Loading_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.render */ "./src/apps/components/Loading/Loading.render.tsx");
/* harmony import */ var _Loading_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.styles */ "./src/apps/components/Loading/Loading.styles.ts");
/* harmony import */ var _Loading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading.state */ "./src/apps/components/Loading/Loading.state.ts");



const MODULE_NAME = 'Loading';
const Loading = (props) => {
    // get state
    const state = (0,_Loading_state__WEBPACK_IMPORTED_MODULE_2__.useLoadingState)(props);
    // get styles
    const styles = (0,_Loading_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_Loading_render__WEBPACK_IMPORTED_MODULE_0__.useLoadingRender)({ state, styles });
};
Loading.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/Loading/Loading.state.ts":
/*!******************************************************!*\
  !*** ./src/apps/components/Loading/Loading.state.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadingState: () => (/* binding */ useLoadingState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'Loading.state';
const useLoadingState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            count: props.count ?? 5,
            size: props.size ?? 16,
            shape: props.shape ?? 'rectangle',
            invert: props.invert ?? false,
        };
    }, [props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/Loading/Loading.styles.ts":
/*!*******************************************************!*\
  !*** ./src/apps/components/Loading/Loading.styles.ts ***!
  \*******************************************************/
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
    Belr9w4: "f1ma2n7n",
    a9b677: "fly5x3f",
    sshi5w: "f1pzv1zu",
    Bf4jedk: "f1ewft5g",
    z8tnut: "fp9bwmr"
  },
  item: {
    a9b677: "f13q4jme"
  },
  altItem: {
    a9b677: "fr584hq"
  },
  inverted: {
    De3pzq: "f16xq7d1"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1ma2n7n{row-gap:4px;}", ".fly5x3f{width:100%;}", ".f1pzv1zu{min-height:120px;}", ".f1ewft5g{min-width:300px;}", ".fp9bwmr{padding-top:8px;}", ".f13q4jme{width:90%;}", ".fr584hq{width:50%;}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}"]
});

/***/ }),

/***/ "./src/apps/components/Loading/index.ts":
/*!**********************************************!*\
  !*** ./src/apps/components/Loading/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loading: () => (/* reexport safe */ _Loading_root__WEBPACK_IMPORTED_MODULE_0__.Loading)
/* harmony export */ });
/* harmony import */ var _Loading_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading.root */ "./src/apps/components/Loading/Loading.root.tsx");



/***/ }),

/***/ "./src/apps/components/PageFooter/PageFooter.render.tsx":
/*!**************************************************************!*\
  !*** ./src/apps/components/PageFooter/PageFooter.render.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTestIds: () => (/* binding */ getTestIds),
/* harmony export */   usePageFooterRender: () => (/* binding */ usePageFooterRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-2.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




const getTestIds = (name) => ({
    PreviousPageButton: `${name ? name : 'footer'}-previous-page-button`,
    NextPageButton: `${name ? name : 'footer'}-next-page-button`,
    PageNumberButton: `${name ? name : 'footer'}-page-number-button`,
    SkipButton: `${name ? name : 'footer'}-skip-button`,
});
const usePageFooterRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-testid": getTestIds(state.testIdPrefix).PreviousPageButton, appearance: 'transparent', className: styles.paginationButton, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CaretLeft12Regular, null), disabled: state.currentPage <= 1, onClick: () => {
                state.onPageChange(state.currentPage - 1);
            } }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.previous)),
        [...Array(state.pageCount)].map((_, index) => {
            const pageNumber = index + state.startingPage;
            let style = styles.unselectedPage;
            if (pageNumber + 1 === state.currentPage) {
                style = styles.selectedPage;
            }
            if (pageNumber < state.totalPageCount) {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-testid": `${getTestIds(state.testIdPrefix).PageNumberButton}-${pageNumber}`, key: pageNumber, as: 'a', appearance: 'transparent', className: style, onClick: () => {
                        if (state.currentPage !== pageNumber + 1) {
                            state.onPageChange(pageNumber + 1);
                        }
                    } }, pageNumber + 1));
            }
            else {
                return null;
            }
        }),
        state.totalPageCount > state.pageCount &&
            state.currentPage + 1 < state.totalPageCount ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, { as: 'a', appearance: 'transparent', className: styles.unselectedPage, "data-testid": getTestIds(state.testIdPrefix).SkipButton, onClick: () => {
                const skipTo = state.currentPage + 10 > state.totalPageCount
                    ? state.totalPageCount
                    : state.currentPage + 10;
                state.onPageChange(skipTo);
            } }, "...")) : null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Button, { "data-testid": getTestIds(state.testIdPrefix).NextPageButton, appearance: 'transparent', className: styles.paginationButton, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CaretRight12Regular, null), iconPosition: 'after', disabled: state.currentPage >= state.totalPageCount, onClick: () => {
                state.onPageChange(state.currentPage + 1);
            } }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.next))));
};


/***/ }),

/***/ "./src/apps/components/PageFooter/PageFooter.root.tsx":
/*!************************************************************!*\
  !*** ./src/apps/components/PageFooter/PageFooter.root.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageFooter: () => (/* binding */ PageFooter)
/* harmony export */ });
/* harmony import */ var _PageFooter_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFooter.render */ "./src/apps/components/PageFooter/PageFooter.render.tsx");
/* harmony import */ var _PageFooter_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageFooter.styles */ "./src/apps/components/PageFooter/PageFooter.styles.ts");
/* harmony import */ var _PageFooter_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageFooter.state */ "./src/apps/components/PageFooter/PageFooter.state.ts");



const MODULE_NAME = 'PageFooter';
const PageFooter = (props) => {
    // get state
    const state = (0,_PageFooter_state__WEBPACK_IMPORTED_MODULE_2__.usePageFooterState)(props);
    // get styles
    const styles = (0,_PageFooter_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_PageFooter_render__WEBPACK_IMPORTED_MODULE_0__.usePageFooterRender)({ state, styles });
};
PageFooter.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/PageFooter/PageFooter.state.ts":
/*!************************************************************!*\
  !*** ./src/apps/components/PageFooter/PageFooter.state.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePageFooterState: () => (/* binding */ usePageFooterState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'PageFooter.state';
const usePageFooterState = (props) => {
    // contexts
    // state
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.initialPage ? props.initialPage : 1);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onInternalOnPageChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newPage) => {
        setCurrentPage(newPage);
        props.onPageChange(newPage);
    }, [props]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const filteredPageCount = props.pageCount > 10 ? 10 : props.pageCount;
        const startingPage = Math.max(0, currentPage - 9);
        return {
            pageCount: filteredPageCount,
            totalPageCount: props.pageCount,
            startingPage,
            currentPage,
            onPageChange: onInternalOnPageChange,
            testIdPrefix: props.testIdPrefix,
        };
    }, [
        props.pageCount,
        props.testIdPrefix,
        currentPage,
        onInternalOnPageChange,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/PageFooter/PageFooter.styles.ts":
/*!*************************************************************!*\
  !*** ./src/apps/components/PageFooter/PageFooter.styles.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  paginationButton: {},
  selectedPage: {
    B2u0y6b: "f1jt17bm",
    Bf4jedk: "f17fgpbq",
    z8tnut: "f10ra9hq",
    Byoj8tv: "f1y2xyjm",
    sj55zd: "f1pl60jd"
  },
  unselectedPage: {
    B2u0y6b: "f1jt17bm",
    Bf4jedk: "f17fgpbq",
    z8tnut: "f10ra9hq",
    Byoj8tv: "f1y2xyjm"
  }
}, {
  d: [".f1jt17bm{max-width:24px;}", ".f17fgpbq{min-width:24px;}", ".f10ra9hq{padding-top:4px;}", ".f1y2xyjm{padding-bottom:4px;}", ".f1pl60jd{color:var(--colorNeutralForeground2BrandHover);}"]
});

/***/ }),

/***/ "./src/apps/components/PageFooter/index.ts":
/*!*************************************************!*\
  !*** ./src/apps/components/PageFooter/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageFooter: () => (/* reexport safe */ _PageFooter_root__WEBPACK_IMPORTED_MODULE_0__.PageFooter)
/* harmony export */ });
/* harmony import */ var _PageFooter_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageFooter.root */ "./src/apps/components/PageFooter/PageFooter.root.tsx");



/***/ }),

/***/ "./src/apps/components/Page/Page.render.tsx":
/*!**************************************************!*\
  !*** ./src/apps/components/Page/Page.render.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePageRender: () => (/* binding */ usePageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/getSlots.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/Toolbar/Toolbar.js");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorBoundary */ "./src/apps/components/ErrorBoundary/index.ts");



const usePageRender = ({ state, styles, className, children, testId, }) => {
    const { slots, slotProps } = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.getSlots)(state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slots.root, { ...slotProps.root, className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.root, className), "data-testid": testId ?? '' },
        slots.ribbon && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { className: styles.ribbon }, slotProps.ribbon.children)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.mergeClasses)(styles.main, slots.ribbon ? styles.mainWithRibbon : '') },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, null, children))));
};


/***/ }),

/***/ "./src/apps/components/Page/Page.root.tsx":
/*!************************************************!*\
  !*** ./src/apps/components/Page/Page.root.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _Page_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.render */ "./src/apps/components/Page/Page.render.tsx");
/* harmony import */ var _Page_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page.styles */ "./src/apps/components/Page/Page.styles.ts");
/* harmony import */ var _Page_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page.state */ "./src/apps/components/Page/Page.state.ts");



const MODULE_NAME = 'Page';
const Page = (props) => {
    // get state
    const state = (0,_Page_state__WEBPACK_IMPORTED_MODULE_2__.usePageState)(props);
    // get styles
    const styles = (0,_Page_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_Page_render__WEBPACK_IMPORTED_MODULE_0__.usePageRender)({
        state,
        styles,
        children: props.children,
        className: props.className,
        testId: props.testid,
    });
};
Page.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/Page/Page.state.ts":
/*!************************************************!*\
  !*** ./src/apps/components/Page/Page.state.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePageState: () => (/* binding */ usePageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/compose/deprecated/resolveShorthand.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'Page.state';
const usePageState = (props) => {
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
                root: 'div',
                ribbon: 'div',
                main: 'div',
            },
            root: {},
            ribbon: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.resolveShorthand)(props.ribbon),
        };
    }, [props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/Page/Page.styles.ts":
/*!*************************************************!*\
  !*** ./src/apps/components/Page/Page.styles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");


const footerHeight = 78;
const maxHeight = `100vh`;
const ribbonHeight = 40;
const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    sshi5w: "fqcw58m",
    Bxyxcbc: "f10ttkyu",
    De3pzq: "f16xq7d1",
    Beiy3e4: "f1vx9l62",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"],
    Belr9w4: "fn67r4l"
  },
  ribbon: {
    Bqenvij: "fbhnoac",
    De3pzq: "f16xq7d1",
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    E5pizo: "f1whvlc6",
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    Brf1p80: "f1869bpl"
  },
  main: {
    De3pzq: "fxugw4r",
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    E5pizo: "f1whvlc6",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"],
    B68tc82: "f1oy3dpc",
    Bmxbyg5: "f5zp4f",
    Bqenvij: "fm28ayq"
  },
  mainWithRibbon: {
    Bqenvij: "f9bylum"
  }
}, {
  d: [".f22iagw{display:flex;}", ".fqcw58m{min-height:calc(100vh - 78px);}", ".f10ttkyu{max-height:calc(100vh - 78px);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".f1vx9l62{flex-direction:column;}", ".fp9bwmr{padding-top:8px;}", ".f19lj068{padding-right:8px;}", ".f177v4lu{padding-left:8px;}", ".f150uoa4{padding-bottom:8px;}", ".fn67r4l{row-gap:8px;}", ".fbhnoac{height:40px;}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f1869bpl{justify-content:space-between;}", ".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1oy3dpc{overflow-x:auto;}", ".f5zp4f{overflow-y:auto;}", ".fm28ayq{height:calc(100vh - 78px);}", ".f9bylum{height:calc(100vh - 118px);}"]
});

/***/ }),

/***/ "./src/apps/components/Page/index.ts":
/*!*******************************************!*\
  !*** ./src/apps/components/Page/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* reexport safe */ _Page_root__WEBPACK_IMPORTED_MODULE_0__.Page)
/* harmony export */ });
/* harmony import */ var _Page_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page.root */ "./src/apps/components/Page/Page.root.tsx");



/***/ }),

/***/ "./src/apps/components/RequiredFieldText/RequiredFieldText.render.tsx":
/*!****************************************************************************!*\
  !*** ./src/apps/components/RequiredFieldText/RequiredFieldText.render.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRequiredFieldTextRender: () => (/* binding */ useRequiredFieldTextRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");



const useRequiredFieldTextRender = ({ styles, className }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.star }, "*"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.text }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.form.required))));
};


/***/ }),

/***/ "./src/apps/components/RequiredFieldText/RequiredFieldText.root.tsx":
/*!**************************************************************************!*\
  !*** ./src/apps/components/RequiredFieldText/RequiredFieldText.root.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequiredFieldText: () => (/* binding */ RequiredFieldText)
/* harmony export */ });
/* harmony import */ var _RequiredFieldText_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequiredFieldText.render */ "./src/apps/components/RequiredFieldText/RequiredFieldText.render.tsx");
/* harmony import */ var _RequiredFieldText_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequiredFieldText.styles */ "./src/apps/components/RequiredFieldText/RequiredFieldText.styles.ts");


const MODULE_NAME = 'RequiredFieldText';
const RequiredFieldText = (props) => {
    // get styles
    const styles = (0,_RequiredFieldText_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_RequiredFieldText_render__WEBPACK_IMPORTED_MODULE_0__.useRequiredFieldTextRender)({ ...props, styles });
};
RequiredFieldText.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/RequiredFieldText/RequiredFieldText.styles.ts":
/*!***************************************************************************!*\
  !*** ./src/apps/components/RequiredFieldText/RequiredFieldText.styles.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    B6of3ja: "f2zxqi",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "febqm8h",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    mc9l5x: "f14t3ns0"
  },
  star: {
    z8tnut: "f1g0x7ka",
    z189sj: ["f6zblan", "f2lugmd"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f2lugmd", "f6zblan"],
    sj55zd: "f1whyuy6",
    mc9l5x: "f14t3ns0"
  },
  text: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".f2zxqi{margin-top:8px;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".febqm8h{margin-bottom:8px;}", ".f14t3ns0{display:inline-block;}", ".f1g0x7ka{padding-top:0;}", ".f6zblan{padding-right:3px;}", ".f2lugmd{padding-left:3px;}", ".f1qch9an{padding-bottom:0;}", ".f1whyuy6{color:var(--colorPaletteRedForeground3);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"]
});

/***/ }),

/***/ "./src/apps/components/RequiredFieldText/index.ts":
/*!********************************************************!*\
  !*** ./src/apps/components/RequiredFieldText/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequiredFieldText: () => (/* reexport safe */ _RequiredFieldText_root__WEBPACK_IMPORTED_MODULE_0__.RequiredFieldText)
/* harmony export */ });
/* harmony import */ var _RequiredFieldText_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequiredFieldText.root */ "./src/apps/components/RequiredFieldText/RequiredFieldText.root.tsx");



/***/ }),

/***/ "./src/apps/components/SchedulingSection/SchedulingSection.render.tsx":
/*!****************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/SchedulingSection.render.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useSchedulingSectionRender: () => (/* binding */ useSchedulingSectionRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulingSection.types */ "./src/apps/components/SchedulingSection/SchedulingSection.types.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-radio/lib/components/RadioGroup/RadioGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-radio/lib/components/Radio/Radio.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-checkbox/lib/components/Checkbox/Checkbox.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdowns */ "./src/apps/components/dropdowns/index.ts");
/* harmony import */ var _DateTimeRangeInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DateTimeRangeInput */ "./src/apps/components/DateTimeRangeInput/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/apps/components/SchedulingSection/components/index.ts");







const TestIds = {
    EnableRadioButton: 'scheduling-section-enable-radio',
    DisableRadioButton: 'scheduling-section-disable-radio',
    TimeInput: 'scheduling-section-time-input',
    DayFrequencyInput: 'scheduling-section-day-frequency-input',
    WeekDayFrequencyCheckbox: 'scheduling-section-week-day-checkbox',
    FrequencyDropdown: 'scheduling-section-frequency-dropdown',
    MinuteHourFrequencyInput: 'scheduling-section-minute-hour-frequency-input',
    StartDateInput: 'scheduling-section-start-date-input',
    EndDateInput: 'scheduling-section-end-date-input',
};
const useSchedulingSectionRender = ({ className, state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.mergeClasses)(styles.root, className) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { className: styles.scheduled_run_field, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.scheduled_run_label)) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.RadioGroup, { value: state.isScheduledRunOff
                    ? "off" /* SchedulingSectionScheduledRunValue.off */
                    : "on" /* SchedulingSectionScheduledRunValue.on */, layout: 'horizontal', onChange: state.onToggleScheduledRun },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Radio, { value: 'on', label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.on), "data-testid": TestIds.EnableRadioButton }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Radio, { value: 'off', label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.off), "data-testid": TestIds.DisableRadioButton }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.frequency_fields },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { required: true, "aria-disabled": state.isScheduledRunOff, className: styles.input_field, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.unit_of_time_label)) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dropdowns__WEBPACK_IMPORTED_MODULE_3__.SimpleDropdown, { disabled: state.isScheduledRunOff, dataTestid: TestIds.FrequencyDropdown, ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.unit_of_time_dropdown_aria_label), items: state.unitOfTimeDropdownItems, setValue: state.onUnitOfTimeChange, value: state.unitOfTime })),
            (() => {
                switch (state.unitOfTime) {
                    case _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_1__.UnitOfTime.Day:
                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__.SchedulingSectionTimeField, { "data-testid": TestIds.DayFrequencyInput, ref: state.timeFieldRef, required: true, disabled: state.isScheduledRunOff, timesOfDay: state.timesOfDay, setTimesOfDay: state.onTimesOfDayChange }));
                    case _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_1__.UnitOfTime.Week:
                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { className: styles.days_of_week_field, validationMessage: state.daysOfWeekValidationMessage, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Label, { required: true, weight: 'semibold', disabled: state.isScheduledRunOff }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.every)) },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.days_of_week_container }, Object.keys(_SchedulingSection_types__WEBPACK_IMPORTED_MODULE_1__.DayOfWeek).map((day, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { key: i + day, "aria-disabled": state.isScheduledRunOff, className: styles.input_field },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.Checkbox, { disabled: state.isScheduledRunOff, "data-testid": `${TestIds.WeekDayFrequencyCheckbox}-${day}`, label: day, checked: (state.daysOfWeek ?? 0) & (1 << i) ? true : false, onChange: (_, { checked }) => state.onDaysOfWeekChange(i, Boolean(checked)) })))))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_5__.SchedulingSectionTimeField, { ref: state.timeFieldRef, disabled: state.isScheduledRunOff, timesOfDay: state.timesOfDay, setTimesOfDay: state.onTimesOfDayChange })));
                    default: {
                        const minutes = state.minutes ?? 0;
                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { required: true, "aria-disabled": state.isScheduledRunOff, className: styles.input_field, label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.every)), hint: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.every_hint, {
                                context: state.unitOfTime,
                            }) },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Input, { "data-testid": TestIds.MinuteHourFrequencyInput, disabled: state.isScheduledRunOff, onChange: state.onMinutesChange, value: String(state.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_1__.UnitOfTime.Hour && minutes > 0
                                    ? minutes / 60
                                    : minutes), type: 'number', min: 1 })));
                    }
                }
            })()),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.date_time_fields }, state.hideEndDate ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.start_date), "aria-disabled": state.isScheduledRunOff, className: styles.input_field },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Input, { ...state.dateTimeRangeProps.startDateInputProps }))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DateTimeRangeInput__WEBPACK_IMPORTED_MODULE_4__.DateTimeRangeInput, { ref: state.dateTimeRangeRef, ...state.dateTimeRangeProps }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Field, { label: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.time_zone_label)) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dropdowns__WEBPACK_IMPORTED_MODULE_3__.SimpleDropdown, { disabled: state.isScheduledRunOff, items: state.timeZoneDropdownItems, ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.time_zone_dropdown_aria_label), value: state.timeZone, setValue: state.onTimeZoneChange }))));
};


/***/ }),

/***/ "./src/apps/components/SchedulingSection/SchedulingSection.root.tsx":
/*!**************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/SchedulingSection.root.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulingSection: () => (/* binding */ SchedulingSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SchedulingSection_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulingSection.render */ "./src/apps/components/SchedulingSection/SchedulingSection.render.tsx");
/* harmony import */ var _SchedulingSection_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchedulingSection.styles */ "./src/apps/components/SchedulingSection/SchedulingSection.styles.ts");



const MODULE_NAME = 'SchedulingSection';
const SchedulingSection = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({ className, ...state }, ref) => {
    // get styles
    const styles = (0,_SchedulingSection_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    // render the item
    return (0,_SchedulingSection_render__WEBPACK_IMPORTED_MODULE_1__.useSchedulingSectionRender)({ className, state, styles }, ref);
});
SchedulingSection.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SchedulingSection/SchedulingSection.state.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/SchedulingSection.state.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeekdayShortNames: () => (/* binding */ getWeekdayShortNames),
/* harmony export */   useSchedulingSectionState: () => (/* binding */ useSchedulingSectionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchedulingSection.types */ "./src/apps/components/SchedulingSection/SchedulingSection.types.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _SchedulingSection_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SchedulingSection.render */ "./src/apps/components/SchedulingSection/SchedulingSection.render.tsx");






const DEBUG_LOGGING = false;
const MODULE_NAME = 'SchedulingSection.state';
const SCHEDULING_SECTION_INITIAL_STATE = {
    isScheduledRunOff: true,
    unitOfTime: _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Minute,
    timeZone: '',
    dateTime: {
        start: '',
        end: '',
    },
};
const useSchedulingSectionState = ({ hideEndDate, initialState, onScheduleChange, }, ref) => {
    // contexts
    const { i18n: { language }, } = (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.useLocalizationContext)();
    // state
    const timeFieldRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const dateTimeRangeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const [schedulingState, updateSchedulingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
        return {
            ...SCHEDULING_SECTION_INITIAL_STATE,
            ...initialState,
        };
    });
    const dateTimeRangeProps = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        startDateFieldProps: {
            required: true,
            'aria-disabled': schedulingState.isScheduledRunOff,
        },
        endDateFieldProps: {
            required: true,
            'aria-disabled': schedulingState.isScheduledRunOff,
        },
        startDateInputProps: {
            min: new Date().toISOString().substring(0, 16), // date without seconds
            value: schedulingState.dateTime?.start,
            disabled: schedulingState.isScheduledRunOff,
            'data-testid': _SchedulingSection_render__WEBPACK_IMPORTED_MODULE_4__.TestIds.StartDateInput,
            onChange: (_, { value }) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'dateTime',
                        value: (draft.dateTime = {
                            start: value,
                            end: draft.dateTime?.end,
                        }),
                    });
                }));
            },
        },
        endDateInputProps: {
            min: new Date().toISOString().substring(0, 16),
            value: schedulingState.dateTime?.end,
            disabled: schedulingState.isScheduledRunOff,
            'data-testid': _SchedulingSection_render__WEBPACK_IMPORTED_MODULE_4__.TestIds.EndDateInput,
            onChange: (_, { value }) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'dateTime',
                        value: (draft.dateTime = {
                            start: draft.dateTime?.start,
                            end: value,
                        }),
                    });
                }));
            },
        },
    }), [onScheduleChange, schedulingState]);
    const isWeekly = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => schedulingState.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Week, [schedulingState.unitOfTime]);
    // callbacks
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => {
        return {
            getIsValid: () => {
                const isMinutesInvalid = !schedulingState.isScheduledRunOff &&
                    (schedulingState.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Minute ||
                        schedulingState.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Hour) &&
                    !schedulingState.minutes;
                const isDateTimeRangeInvalid = !schedulingState.isScheduledRunOff &&
                    !dateTimeRangeRef.current?.getIsValid();
                const isTimesOfDayInvalid = !schedulingState.isScheduledRunOff &&
                    (schedulingState.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Day || isWeekly) &&
                    !timeFieldRef.current?.getIsValid();
                return (!state.daysOfWeekValidationMessage &&
                    !isMinutesInvalid &&
                    !isDateTimeRangeInvalid &&
                    !isTimesOfDayInvalid);
            },
        };
    });
    // result
    const state = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const daysOfWeekValidationMessage = isWeekly &&
            !schedulingState.isScheduledRunOff &&
            !schedulingState.daysOfWeek
            ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.scheduling.days_of_week_validation_message)
            : undefined;
        return {
            ...schedulingState,
            dateTimeRangeRef,
            timeFieldRef,
            dateTimeRangeProps,
            hideEndDate,
            daysOfWeekValidationMessage,
            unitOfTimeDropdownItems: Object.values(_SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime).map((unitOfTime) => ({
                key: unitOfTime,
                text: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.scheduling.unit_of_time_dropdown_option, {
                    context: unitOfTime,
                }),
            })),
            daysOfWeekDropdownItems: getWeekdayShortNames(language).map((day) => ({
                key: day,
                text: day,
            })),
            timeZoneDropdownItems: (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getTimeZones)(),
            onTimesOfDayChange: (timesOfDay) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'timesOfDay',
                        value: (draft.timesOfDay = timesOfDay),
                    });
                }));
            },
            onDaysOfWeekChange: (i, checked) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    const previousDaysOfWeek = draft.daysOfWeek ? draft.daysOfWeek : 0;
                    onScheduleChange({
                        field: 'daysOfWeek',
                        value: (draft.daysOfWeek = checked
                            ? previousDaysOfWeek | (1 << i) // set the bit at index `i` to `1`
                            : previousDaysOfWeek &
                                // create a number where the bit at index `i` is set to `0`:
                                (~(1 << i) &
                                    // and mask it to ensure its length is 7:
                                    0b1111111)),
                    });
                }));
            },
            onTimeZoneChange: (timeZone) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'timeZone',
                        value: (draft.timeZone = timeZone),
                    });
                }));
            },
            onUnitOfTimeChange: (unitOfTime) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'unitOfTime',
                        value: (draft.unitOfTime = unitOfTime),
                    });
                    // reset minutes to appropriate value based on the selected unit of time
                    if (unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Minute) {
                        onScheduleChange({
                            field: 'minutes',
                            value: (draft.minutes = 1),
                        });
                    }
                    else if (unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Hour) {
                        onScheduleChange({
                            field: 'minutes',
                            value: (draft.minutes = 60),
                        });
                    }
                }));
            },
            onMinutesChange: (_, { value }) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    const minutes = Number(value);
                    onScheduleChange({
                        field: 'minutes',
                        value: (draft.minutes =
                            draft.unitOfTime === _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime.Hour ? minutes * 60 : minutes),
                    });
                }));
            },
            onToggleScheduledRun: (_, { value }) => {
                updateSchedulingState((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(schedulingState, (draft) => {
                    onScheduleChange({
                        field: 'isScheduledRunOff',
                        value: (draft.isScheduledRunOff =
                            value === "off" /* SchedulingSectionScheduledRunValue.off */),
                    });
                }));
            },
            resetSchedulingState: () => {
                const resetState = {
                    ...SCHEDULING_SECTION_INITIAL_STATE,
                    ...initialState,
                };
                updateSchedulingState(resetState);
                return resetState;
            },
        };
    }, [
        isWeekly,
        language,
        initialState,
        schedulingState,
        hideEndDate,
        dateTimeRangeProps,
        updateSchedulingState,
        onScheduleChange,
    ]);
    (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING) &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};
function getWeekdayShortNames(language) {
    return [...Array(7).keys()].map((day) => new Intl.DateTimeFormat(language, {
        weekday: 'short',
        // we pass UTC here to ensure the days are always returned in the same order
        // regardless of the user's timezone (i.e. Sunday to Saturday)
        timeZone: 'UTC',
    }).format(new Date(Date.UTC(2024, 3, day))));
}


/***/ }),

/***/ "./src/apps/components/SchedulingSection/SchedulingSection.styles.ts":
/*!***************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/SchedulingSection.styles.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  frequency_fields: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  input_field: {
    mc9l5x: "f22iagw",
    Belr9w4: "f1ma2n7n",
    Beiy3e4: "f1vx9l62"
  },
  scheduled_run_field: {
    jrapky: "febqm8h"
  },
  date_time_fields: {
    B6of3ja: "f1uinfot"
  },
  days_of_week_container: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq"
  },
  days_of_week_field: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f1ma2n7n{row-gap:4px;}", ".febqm8h{margin-bottom:8px;}", ".f1uinfot{margin-top:16px;}", ".f1063pyq{flex-direction:row;}"]
});

/***/ }),

/***/ "./src/apps/components/SchedulingSection/SchedulingSection.types.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/SchedulingSection.types.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DayOfWeek: () => (/* binding */ DayOfWeek),
/* harmony export */   UnitOfTime: () => (/* binding */ UnitOfTime)
/* harmony export */ });
var UnitOfTime;
(function (UnitOfTime) {
    UnitOfTime["Minute"] = "minute";
    UnitOfTime["Hour"] = "hour";
    UnitOfTime["Day"] = "day";
    UnitOfTime["Week"] = "week";
})(UnitOfTime || (UnitOfTime = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Su"] = "Su";
    DayOfWeek["Mo"] = "Mo";
    DayOfWeek["Tu"] = "Tu";
    DayOfWeek["We"] = "We";
    DayOfWeek["Th"] = "Th";
    DayOfWeek["Fr"] = "Fr";
    DayOfWeek["Sa"] = "Sa";
})(DayOfWeek || (DayOfWeek = {}));


/***/ }),

/***/ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.render.tsx":
/*!***************************************************************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.render.tsx ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useSchedulingSectionTimeFieldRender: () => (/* binding */ useSchedulingSectionTimeFieldRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




const TestIds = {
    TimeInput: 'scheduling-section-time-input',
    RemoveTime: 'scheduling-section-remove-time-button',
    AddTime: 'scheduling-section-add-time-button',
};
const useSchedulingSectionTimeFieldRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Label, { required: true, weight: 'semibold', disabled: state.disabled }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.scheduling.time_of_day_label)),
        state.timesOfDay?.map((hour, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { key: i + hour, required: state.required, "aria-disabled": state.disabled, className: styles.row, validationMessage: state.disabled ? undefined : state.validationMessages[i] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Input, { "data-testid": `${TestIds.TimeInput}-${i}`, type: 'time', value: hour, disabled: state.disabled, onChange: (_, { value }) => state.onUpdateTime(i, value) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'transparent', onClick: () => state.onRemoveTime(i), disabled: i === 0 || state.disabled, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Delete24Regular, null), "data-testId": `${TestIds.RemoveTime}-${i}` })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'transparent', onClick: state.onAddTime, disabled: state.disabled, className: styles.add_a_time_btn, "data-testId": TestIds.AddTime },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Add24Regular, null),
            (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.scheduling.add_a_time_label))));
};


/***/ }),

/***/ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.root.tsx":
/*!*************************************************************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.root.tsx ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulingSectionTimeField: () => (/* binding */ SchedulingSectionTimeField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SchedulingSectionTimeField_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulingSectionTimeField.render */ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.render.tsx");
/* harmony import */ var _SchedulingSectionTimeField_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchedulingSectionTimeField.styles */ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.styles.ts");
/* harmony import */ var _SchedulingSectionTimeField_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SchedulingSectionTimeField.state */ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.state.ts");




const MODULE_NAME = 'SchedulingSectionTimeField';
const SchedulingSectionTimeField = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, ref) => {
    // get state
    const state = (0,_SchedulingSectionTimeField_state__WEBPACK_IMPORTED_MODULE_3__.useSchedulingSectionTimeFieldState)(props, ref);
    // get styles
    const styles = (0,_SchedulingSectionTimeField_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    // render the item
    return (0,_SchedulingSectionTimeField_render__WEBPACK_IMPORTED_MODULE_1__.useSchedulingSectionTimeFieldRender)({ state, styles });
});
SchedulingSectionTimeField.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.state.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.state.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSchedulingSectionTimeFieldState: () => (/* binding */ useSchedulingSectionTimeFieldState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'SchedulingSectionTimeField.state';
const useSchedulingSectionTimeFieldState = ({ required, disabled, timesOfDay, setTimesOfDay, }, ref) => {
    // state
    const times = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => timesOfDay ?? [], [timesOfDay]);
    const { isValid, validationMessages } = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        let invalid = false;
        const validationMessages = times.map((a, i) => {
            if (!a) {
                invalid = true;
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.times_of_day_validation_message_empty);
            }
            else if (times?.find((b, j) => i !== j && a === b)) {
                invalid = true;
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.scheduling.times_of_day_validation_message_duplicate);
            }
            return undefined;
        });
        return {
            validationMessages,
            isValid: !invalid,
        };
    }, [times]);
    // callbacks
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => {
        return {
            getIsValid: () => {
                return isValid;
            },
        };
    });
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // result
    const state = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        required,
        disabled,
        timesOfDay: times,
        validationMessages,
        onAddTime() {
            setTimesOfDay([...times, '']);
        },
        onRemoveTime(i) {
            const newTimesOfDay = [...times];
            newTimesOfDay.splice(i, 1);
            setTimesOfDay(newTimesOfDay);
        },
        onUpdateTime(i, time) {
            const newTimesOfDay = [...times];
            newTimesOfDay[i] = time;
            setTimesOfDay(newTimesOfDay);
        },
    }), [required, disabled, times, setTimesOfDay, validationMessages]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.styles.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.styles.ts ***!
  \**************************************************************************************************************************/
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
    Belr9w4: "f1k5ttpu"
  },
  row: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Bt984gj: "f122n59",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  add_a_time_btn: {
    qb2dma: "fjgzulp",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"]
  },
  hours_of_day_field: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Belr9w4: "fn67r4l"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1k5ttpu{row-gap:16px;}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".fjgzulp{align-self:flex-start;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}"]
});

/***/ }),

/***/ "./src/apps/components/SchedulingSection/components/index.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/components/SchedulingSection/components/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulingSectionTimeField: () => (/* reexport safe */ _SchedulingSectionTimeField_SchedulingSectionTimeField_root__WEBPACK_IMPORTED_MODULE_0__.SchedulingSectionTimeField)
/* harmony export */ });
/* harmony import */ var _SchedulingSectionTimeField_SchedulingSectionTimeField_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulingSectionTimeField/SchedulingSectionTimeField.root */ "./src/apps/components/SchedulingSection/components/SchedulingSectionTimeField/SchedulingSectionTimeField.root.tsx");



/***/ }),

/***/ "./src/apps/components/SchedulingSection/index.ts":
/*!********************************************************!*\
  !*** ./src/apps/components/SchedulingSection/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulingSection: () => (/* reexport safe */ _SchedulingSection_root__WEBPACK_IMPORTED_MODULE_0__.SchedulingSection),
/* harmony export */   UnitOfTime: () => (/* reexport safe */ _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__.UnitOfTime),
/* harmony export */   useSchedulingSectionState: () => (/* reexport safe */ _SchedulingSection_state__WEBPACK_IMPORTED_MODULE_1__.useSchedulingSectionState)
/* harmony export */ });
/* harmony import */ var _SchedulingSection_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulingSection.root */ "./src/apps/components/SchedulingSection/SchedulingSection.root.tsx");
/* harmony import */ var _SchedulingSection_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulingSection.state */ "./src/apps/components/SchedulingSection/SchedulingSection.state.ts");
/* harmony import */ var _SchedulingSection_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SchedulingSection.types */ "./src/apps/components/SchedulingSection/SchedulingSection.types.ts");





/***/ }),

/***/ "./src/apps/components/SteppedWizard/Step/Step.root.tsx":
/*!**************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Step/Step.root.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MODULE_NAME = 'Step';
const Step = (props) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, props.children);
};
Step.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SteppedWizard/Step/index.ts":
/*!*********************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Step/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* reexport safe */ _Step_root__WEBPACK_IMPORTED_MODULE_0__.Step)
/* harmony export */ });
/* harmony import */ var _Step_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step.root */ "./src/apps/components/SteppedWizard/Step/Step.root.tsx");



/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizard.render.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizard.render.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useSteppedWizardRender: () => (/* binding */ useSteppedWizardRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stepper */ "./src/apps/components/SteppedWizard/Stepper/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/Dialog/Dialog.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogSurface/DialogSurface.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogBody/DialogBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogContent/DialogContent.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogTitle/DialogTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-dialog/lib/components/DialogTrigger/DialogTrigger.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");





const TestIds = {
    DialogRoot: 'stepped-wizard-dialog-root',
    NextButton: 'stepped-wizard-next-button',
    BackButton: 'stepped-wizard-back-button',
    SubmitButton: 'stepped-wizard-submit-button',
    CloseButton: 'stepped-wizard-close-button',
};
const useSteppedWizardRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Dialog, { modalType: 'alert', open: state.open, onOpenChange: state.onOpenChange },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.DialogSurface, { className: styles.dialogSurface, "data-testid": TestIds.DialogRoot },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.DialogBody, { className: styles.dialogBody },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.DialogContent, { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.mergeClasses)(styles.dialogContent, state.className) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.stepper },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Stepper__WEBPACK_IMPORTED_MODULE_1__.Stepper, { stepIndex: state.currentStep, steps: state.steps })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.rightPane },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DialogTitle, { className: styles.dialogTitle },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DialogTrigger, { action: 'close' },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Button, { appearance: 'subtle', "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.close), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_11__.Dismiss12Regular, null), "data-testid": TestIds.CloseButton }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.content }, state.contentPanels[state.currentStep]),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.footer },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Button, { onClick: state.onPreviousStep, disabled: state.currentStep === 0, "data-testid": TestIds.BackButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.back)),
                            // if we're on the last step, show submit button, otherwise show next button
                            state.currentStep + 1 === state.steps.length ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Button, { appearance: 'primary', onClick: state.onSubmit, disabled: false === state.isValid || state.submitDisabled, "data-testid": TestIds.SubmitButton }, state.submitText ?? (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.submit))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Button, { appearance: 'primary', onClick: state.onNextStep, disabled: !state.canProceed, "data-testid": TestIds.NextButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.next))))))))));
};


/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizard.root.tsx":
/*!******************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizard.root.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SteppedWizard: () => (/* binding */ SteppedWizard)
/* harmony export */ });
/* harmony import */ var _SteppedWizard_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SteppedWizard.render */ "./src/apps/components/SteppedWizard/SteppedWizard.render.tsx");
/* harmony import */ var _SteppedWizard_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SteppedWizard.styles */ "./src/apps/components/SteppedWizard/SteppedWizard.styles.ts");
/* harmony import */ var _SteppedWizard_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteppedWizard.state */ "./src/apps/components/SteppedWizard/SteppedWizard.state.ts");



const MODULE_NAME = 'SteppedWizard';
const SteppedWizard = (props) => {
    // get state
    const state = (0,_SteppedWizard_state__WEBPACK_IMPORTED_MODULE_2__.useSteppedWizardState)(props);
    // get styles
    const styles = (0,_SteppedWizard_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_SteppedWizard_render__WEBPACK_IMPORTED_MODULE_0__.useSteppedWizardRender)({ state, styles });
};
SteppedWizard.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizard.state.ts":
/*!******************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizard.state.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSteppedWizardState: () => (/* binding */ useSteppedWizardState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-hooks */ "./node_modules/@fluentui/react-hooks/lib/usePrevious.js");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'SteppedWizard.state';
const useSteppedWizardState = ({ open, children, className, startIndex, submitText, submitDisabled, onOpenChange, onSubmit, onPreviousStep, onNextStep, onStepChange, }) => {
    // contexts
    // state
    const [stepIndex, setStepIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startIndex ?? 0);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const calculateStepStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((childIndex, onValidate) => {
        return (
        // if we haven't reached that step, undefined
        childIndex > stepIndex
            ? undefined
            : // if that step has a validation, run it for success/error
                onValidate
                    ? onValidate()
                        ? 'success'
                        : 'error'
                    : // otherwise, success
                        'success');
    }, [stepIndex]);
    // memos
    const childItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(children, (child, childIndex) => {
            if (child === null || child === undefined)
                return null; // if a step is conditionally rendered
            const stepProps = child;
            const componentDisplayName = stepProps.type.displayName;
            //Does not handle a React Fragment and children. Multiple <Step> within <></> will not work.
            if (stepProps &&
                componentDisplayName !== 'Step' &&
                componentDisplayName !== 'SteppedWizardStartStep') {
                throw new Error('SteppedWizard only accepts children of type `Step` or `SteppedWizardStartStep`.');
            }
            else {
                return {
                    step: {
                        label: stepProps.props.title,
                        status: calculateStepStatus(childIndex, stepProps.props.onValidate),
                    },
                    content: child,
                };
            }
        });
    }, [calculateStepStatus, children]);
    const isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).every((child) => {
            const stepProps = child;
            return stepProps.props.onValidate ? stepProps.props.onValidate() : true;
        });
    }, [children]);
    const canProceed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const stepProps = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children)[stepIndex];
        return stepProps?.props.onValidate?.() ?? true;
    }, [children, stepIndex]);
    // side effects
    const previousOpen = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(open);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // reset the wizard when it is opened
        if (!previousOpen && open) {
            setStepIndex(startIndex ?? 0);
        }
    }, [previousOpen, open, startIndex]);
    // notify parent of step change
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        onStepChange?.(stepIndex);
    }, [stepIndex, onStepChange]);
    const updateStepIndex = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
        return {
            onNextStep: () => {
                setStepIndex((i) => {
                    const nextStepIndex = i + 1;
                    onNextStep?.(nextStepIndex);
                    return nextStepIndex;
                });
            },
            onPreviousStep: () => {
                setStepIndex((i) => {
                    const previousStepIndex = i - 1;
                    onPreviousStep?.(previousStepIndex);
                    return previousStepIndex;
                });
            },
        };
    }, [onPreviousStep, onNextStep]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            submitText,
            submitDisabled,
            className,
            currentStep: stepIndex,
            onSubmit: () => onSubmit?.(),
            steps: childItems?.map((child) => child.step) ?? [],
            contentPanels: childItems?.map((child) => child.content) ?? [],
            onNextStep: updateStepIndex.onNextStep,
            onPreviousStep: updateStepIndex.onPreviousStep,
            isValid,
            canProceed,
            open: open,
            onOpenChange: onOpenChange,
        };
    }, [
        submitText,
        submitDisabled,
        className,
        stepIndex,
        childItems,
        updateStepIndex.onNextStep,
        updateStepIndex.onPreviousStep,
        isValid,
        canProceed,
        open,
        onOpenChange,
        onSubmit,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizard.styles.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizard.styles.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

/*
From figma so all these magic number make sense:
Screen size: 1920x1080
Modal size: 1440x864
Left panel: 227x864
Title? area: 1213x50
Upper right panel: 1213x702
Lower right panel: 1213x72
*/
const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  dialogSurface: {
    B2u0y6b: "fs5wusb",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"]
  },
  dialogBody: {
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    i8kkvl: "fqrbt79",
    Belr9w4: "fepn2xe"
  },
  dialogTitle: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: ["fgbriwd", "fc7pyfw"],
    Bqenvij: "fxldao9",
    z8tnut: "f10ra9hq",
    z189sj: ["fifp7yv", "f1asdtw4"],
    Byoj8tv: "f1y2xyjm",
    uwmqm3: ["fycuoez", "f8wuabp"]
  },
  dialogContent: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Bqenvij: "f1h237id",
    a9b677: "f12l6yso",
    Belr9w4: "fepn2xe",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"]
  },
  stepper: {
    a9b677: "fla34hg",
    B2u0y6b: "f12fowao",
    De3pzq: "f16xq7d1",
    z8tnut: "fuq56rw",
    z189sj: ["f15kemlc", "fdgang7"],
    Byoj8tv: "fl2zwns",
    uwmqm3: ["fdgang7", "f15kemlc"],
    Bekrc4i: ["f1hqa2wf", "finvdd3"],
    vrafjx: ["fcdblym", "fjik90z"],
    h3c5rm: ["f1akhkt", "f1lxtadh"],
    Btl43ni: ["fmb70yw", "f1spoy8"],
    Beyfa6y: ["f1ehz9de", "f1erghxr"],
    B4j52fo: "fre7gi1",
    B6of3ja: "f1bnrjwc",
    jrapky: "f14rdt9"
  },
  rightPane: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Belr9w4: "f1sff6ri",
    B68tc82: "f1oy3dpc",
    t21cq0: ["f8zmjen", "fjf1xye"],
    a9b677: "fly5x3f"
  },
  content: {
    Bqenvij: "frq7aia",
    Bn0qgzm: "f1f09k3d",
    oivjwe: "fg706s2",
    B9xav0g: "f1aperda",
    z8tnut: "fuq56rw",
    z189sj: ["f15kemlc", "fdgang7"],
    Byoj8tv: "fl2zwns",
    uwmqm3: ["fdgang7", "f15kemlc"],
    B68tc82: "f1oy3dpc",
    Bmxbyg5: "f5zp4f"
  },
  footer: {
    Bqenvij: "f1shusfg",
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f4px1ci",
    a9b677: "f1sg5jtm",
    Bt984gj: "f122n59",
    Byoj8tv: "f1y2xyjm",
    Brf1p80: ["fgbriwd", "fc7pyfw"]
  }
}, {
  d: [".fs5wusb{max-width:fit-content;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".fqrbt79{column-gap:0px;}", ".fepn2xe{row-gap:0px;}", ".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".fgbriwd{justify-content:right;}", ".fc7pyfw{justify-content:left;}", ".fxldao9{height:28px;}", ".f10ra9hq{padding-top:4px;}", ".fifp7yv{padding-right:0px;}", ".f1asdtw4{padding-left:0px;}", ".f1y2xyjm{padding-bottom:4px;}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}", ".f1h237id{height:80vh;}", ".f12l6yso{width:75vw;}", ".fla34hg{width:16%;}", ".f12fowao{max-width:230px;}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".fuq56rw{padding-top:24px;}", ".f15kemlc{padding-right:24px;}", ".fdgang7{padding-left:24px;}", ".fl2zwns{padding-bottom:24px;}", ".f1hqa2wf{border-right-width:1px;}", ".finvdd3{border-left-width:1px;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".fmb70yw{border-top-left-radius:8px;}", ".f1spoy8{border-top-right-radius:8px;}", ".f1ehz9de{border-bottom-left-radius:8px;}", ".f1erghxr{border-bottom-right-radius:8px;}", ".fre7gi1{border-top-width:0;}", ".f1bnrjwc{margin-top:1px;}", ".f14rdt9{margin-bottom:2px;}", ".f1vx9l62{flex-direction:column;}", ".f1sff6ri{row-gap:0;}", ".f1oy3dpc{overflow-x:auto;}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".fly5x3f{width:100%;}", ".frq7aia{height:calc(100% - 72px);}", ".f1f09k3d{border-bottom-width:1px;}", ".fg706s2{border-bottom-style:solid;}", ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}", ".f5zp4f{overflow-y:auto;}", ".f1shusfg{height:72px;}", ".f4px1ci{column-gap:8px;}", ".f1sg5jtm{width:calc(100% - 16px);}", ".f122n59{align-items:center;}"]
});

/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.render.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.render.tsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSteppedWizardStartStepRender: () => (/* binding */ useSteppedWizardStartStepRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-checkbox/lib/components/Checkbox/Checkbox.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Step */ "./src/apps/components/SteppedWizard/Step/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _ExternalLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ExternalLink */ "./src/apps/components/ExternalLink/index.ts");





const TestIds = {
    StepRoot: 'stepped-wizard-step',
};
const useSteppedWizardStartStepRender = ({ styles, title, subtitle, contentTitle, content, externalLink, externalLinkText, imageSrc, skipIntro, onSkipIntroChange, dataTestId, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Step__WEBPACK_IMPORTED_MODULE_1__.Step, { title: title },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, "data-testid": dataTestId ?? TestIds.StepRoot },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.semibold },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: styles.subtitle }, subtitle),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, title)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.paragraphContainer },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.contentContainer },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, contentTitle),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, content),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ExternalLink__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, { className: styles.semibold, akaShortLink: externalLink, text: externalLinkText })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.image },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Image, { src: imageSrc, width: '100%' }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Checkbox, { className: styles.checkbox, checked: skipIntro, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.wizard.skip_intro), onChange: onSkipIntroChange }))));
};


/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.root.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.root.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SteppedWizardStartStep: () => (/* binding */ SteppedWizardStartStep)
/* harmony export */ });
/* harmony import */ var _SteppedWizardStartStep_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SteppedWizardStartStep.render */ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.render.tsx");
/* harmony import */ var _SteppedWizardStartStep_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SteppedWizardStartStep.styles */ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.styles.ts");


const MODULE_NAME = 'SteppedWizardStartStep';
const SteppedWizardStartStep = (props) => {
    // get styles
    const styles = (0,_SteppedWizardStartStep_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_SteppedWizardStartStep_render__WEBPACK_IMPORTED_MODULE_0__.useSteppedWizardStartStepRender)({ ...props, styles });
};
SteppedWizardStartStep.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.styles.ts":
/*!***************************************************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.styles.ts ***!
  \***************************************************************************************************/
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
    Bqenvij: "f1l02sjl"
  },
  semibold: {
    Bhrd7zp: "fl43uef"
  },
  contentContainer: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Brf1p80: "f4d9j23",
    Bh6795r: "fkzrewj",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34"
  },
  paragraphContainer: {
    mc9l5x: "f22iagw",
    Brf1p80: "f4d9j23",
    Bt984gj: "f122n59",
    i8kkvl: "fm3incy",
    Belr9w4: "f1ifjkmq",
    B6of3ja: "f1hu3pq6",
    t21cq0: ["fdgr0f8", "fhoxm2u"],
    jrapky: "f19f4twv",
    Frg6f3: ["fhoxm2u", "fdgr0f8"]
  },
  image: {
    Bh6795r: "f1myqfuh",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34"
  },
  subtitle: {
    sj55zd: "f11d4kpn"
  },
  checkbox: {
    B6of3ja: "fgr6219"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1l02sjl{height:100%;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f4d9j23{justify-content:center;}", ".fkzrewj{flex-grow:0.5;}", ".f1neuvcm{flex-shrink:1;}", ".f1pztt34{flex-basis:0;}", ".f122n59{align-items:center;}", ".fm3incy{column-gap:48px;}", ".f1ifjkmq{row-gap:48px;}", ".f1hu3pq6{margin-top:0;}", ".fdgr0f8{margin-right:64px;}", ".fhoxm2u{margin-left:64px;}", ".f19f4twv{margin-bottom:0;}", ".f1myqfuh{flex-grow:0.75;}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".fgr6219{margin-top:auto;}"]
});

/***/ }),

/***/ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/index.ts":
/*!***************************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/SteppedWizardStartStep/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SteppedWizardStartStep: () => (/* reexport safe */ _SteppedWizardStartStep_root__WEBPACK_IMPORTED_MODULE_0__.SteppedWizardStartStep)
/* harmony export */ });
/* harmony import */ var _SteppedWizardStartStep_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SteppedWizardStartStep.root */ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/SteppedWizardStartStep.root.tsx");



/***/ }),

/***/ "./src/apps/components/SteppedWizard/Stepper/Stepper.render.tsx":
/*!**********************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Stepper/Stepper.render.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentIcon: () => (/* binding */ CurrentIcon),
/* harmony export */   ErrorIcon: () => (/* binding */ ErrorIcon),
/* harmony export */   IncompleteIcon: () => (/* binding */ IncompleteIcon),
/* harmony export */   PipeIcon: () => (/* binding */ PipeIcon),
/* harmony export */   SuccessIcon: () => (/* binding */ SuccessIcon),
/* harmony export */   useStepperRender: () => (/* binding */ useStepperRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/tokens/lib/tokens.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const iconAriaLabel = (status) => {
    if (status === 'error')
        return (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.wizard.steps.status.error);
    if (status === 'success')
        return (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.wizard.steps.status.success);
    return undefined;
};
const useStepperRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, role: 'list', "aria-live": 'polite' }, state.steps.map((step, index) => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: step.label, className: styles.item, role: 'listitem', "aria-current": state.stepIndex === index ? 'step' : 'false' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.icon, role: 'presentation', "aria-label": iconAriaLabel(step.status) },
                index === state.stepIndex ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentIcon, null)) : step.status === 'error' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorIcon, null)) : step.status === 'success' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SuccessIcon, null)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IncompleteIcon, null)),
                index + 1 < state.steps.length ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PipeIcon, null) : null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.label }, step.label)));
    })));
};
const BaseIcon = (fill, addIn) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "aria-hidden": 'true', role: 'presentation', width: '16', height: '16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { cx: '8', cy: '8', r: '7.5', fill: fill ?? 'transparent', strokeWidth: 1, stroke: fill ?? _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorNeutralForeground4 }),
        addIn));
};
const IncompleteIcon = () => {
    return BaseIcon();
};
const CurrentIcon = () => {
    return BaseIcon(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorBrandStroke2Contrast);
};
const ErrorIcon = () => {
    return BaseIcon(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorStatusDangerForeground3, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: 'M5.5 11L11 5.5 M5.5 5.5L11 11', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorNeutralBackground1 }));
};
const SuccessIcon = () => {
    return BaseIcon(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorBrandForeground2, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: 'M5 8.5L7 10.5 M7 10.5L11 6', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorNeutralBackground1 }));
};
const PipeIcon = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { "aria-hidden": 'true', role: 'presentation', width: '16', height: '40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: '7', y: '0', width: '2', height: '40', fill: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.tokens.colorNeutralBackground1Pressed })));
};


/***/ }),

/***/ "./src/apps/components/SteppedWizard/Stepper/Stepper.root.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Stepper/Stepper.root.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stepper: () => (/* binding */ Stepper)
/* harmony export */ });
/* harmony import */ var _Stepper_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stepper.render */ "./src/apps/components/SteppedWizard/Stepper/Stepper.render.tsx");
/* harmony import */ var _Stepper_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stepper.styles */ "./src/apps/components/SteppedWizard/Stepper/Stepper.styles.ts");


const MODULE_NAME = 'Stepper';
const Stepper = (props) => {
    // get styles
    const styles = (0,_Stepper_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_Stepper_render__WEBPACK_IMPORTED_MODULE_0__.useStepperRender)({ state: props, styles });
};
Stepper.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/SteppedWizard/Stepper/Stepper.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Stepper/Stepper.styles.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    B2u0y6b: "f1tyvs95",
    Bf4jedk: "f93ek0f",
    z8tnut: "fuq56rw",
    z189sj: ["f15kemlc", "fdgang7"],
    Byoj8tv: "fl2zwns",
    uwmqm3: ["fycuoez", "f8wuabp"]
  },
  label: {},
  item: {
    Beiy3e4: "f1063pyq",
    mc9l5x: "f22iagw",
    i8kkvl: "f4px1ci"
  },
  icon: {
    a9b677: "fq4mcun",
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Belr9w4: "f1sff6ri",
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"],
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    B68tc82: "f1p9o1ba",
    Bmxbyg5: "f1sil6mw"
  }
}, {
  d: [".f1tyvs95{max-width:20%;}", ".f93ek0f{min-width:200px;}", ".fuq56rw{padding-top:24px;}", ".f15kemlc{padding-right:24px;}", ".fdgang7{padding-left:24px;}", ".fl2zwns{padding-bottom:24px;}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}", ".f1063pyq{flex-direction:row;}", ".f22iagw{display:flex;}", ".f4px1ci{column-gap:8px;}", ".fq4mcun{width:24px;}", ".f1vx9l62{flex-direction:column;}", ".f1sff6ri{row-gap:0;}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".f1p9o1ba{overflow-x:hidden;}", ".f1sil6mw{overflow-y:hidden;}"]
});

/***/ }),

/***/ "./src/apps/components/SteppedWizard/Stepper/index.ts":
/*!************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/Stepper/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stepper: () => (/* reexport safe */ _Stepper_root__WEBPACK_IMPORTED_MODULE_0__.Stepper)
/* harmony export */ });
/* harmony import */ var _Stepper_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stepper.root */ "./src/apps/components/SteppedWizard/Stepper/Stepper.root.tsx");



/***/ }),

/***/ "./src/apps/components/SteppedWizard/hooks/index.ts":
/*!**********************************************************!*\
  !*** ./src/apps/components/SteppedWizard/hooks/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSkipSteppedWizardIntro: () => (/* reexport safe */ _useSkipSteppedWizardIntro__WEBPACK_IMPORTED_MODULE_0__.useSkipSteppedWizardIntro)
/* harmony export */ });
/* harmony import */ var _useSkipSteppedWizardIntro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSkipSteppedWizardIntro */ "./src/apps/components/SteppedWizard/hooks/useSkipSteppedWizardIntro.ts");



/***/ }),

/***/ "./src/apps/components/SteppedWizard/hooks/useSkipSteppedWizardIntro.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/components/SteppedWizard/hooks/useSkipSteppedWizardIntro.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSkipSteppedWizardIntro: () => (/* binding */ useSkipSteppedWizardIntro)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSkipSteppedWizardIntro = (localStorageKey) => {
    const [skipIntro, setSkipIntro] = react__WEBPACK_IMPORTED_MODULE_0__.useState(localStorage.getItem(localStorageKey) === 'true');
    const onSkipIntroChange = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((_, data) => {
        setSkipIntro(data.checked);
        localStorage.setItem(localStorageKey, data.checked.toString());
    }, [localStorageKey]);
    return {
        skipIntro,
        onSkipIntroChange,
    };
};


/***/ }),

/***/ "./src/apps/components/SteppedWizard/index.ts":
/*!****************************************************!*\
  !*** ./src/apps/components/SteppedWizard/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Step: () => (/* reexport safe */ _Step__WEBPACK_IMPORTED_MODULE_1__.Step),
/* harmony export */   SteppedWizard: () => (/* reexport safe */ _SteppedWizard_root__WEBPACK_IMPORTED_MODULE_0__.SteppedWizard),
/* harmony export */   SteppedWizardStartStep: () => (/* reexport safe */ _SteppedWizardStartStep__WEBPACK_IMPORTED_MODULE_2__.SteppedWizardStartStep),
/* harmony export */   useSkipSteppedWizardIntro: () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.useSkipSteppedWizardIntro)
/* harmony export */ });
/* harmony import */ var _SteppedWizard_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SteppedWizard.root */ "./src/apps/components/SteppedWizard/SteppedWizard.root.tsx");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step */ "./src/apps/components/SteppedWizard/Step/index.ts");
/* harmony import */ var _SteppedWizardStartStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteppedWizardStartStep */ "./src/apps/components/SteppedWizard/SteppedWizardStartStep/index.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./src/apps/components/SteppedWizard/hooks/index.ts");






/***/ }),

/***/ "./src/apps/components/dropdowns/DropdownTypes.ts":
/*!********************************************************!*\
  !*** ./src/apps/components/dropdowns/DropdownTypes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.render.tsx":
/*!************************************************************************************!*\
  !*** ./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.render.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIconizedDropdownRender: () => (/* binding */ useIconizedDropdownRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/OptionGroup/OptionGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");


const useIconizedDropdownRender = ({ state, styles }) => {
    const generateGroup = (group, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.OptionGroup, { label: group.label, key: `optiongroup_${index}` }, group.items.map((item) => generateOption(item))));
    const generateOption = (item) => {
        //icon exists and has a value
        if ('icon' in item && item.icon) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Option, { key: item.key, value: item.key, text: item.text },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.option },
                    item.iconPosition !== 'trailing' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, { role: 'img' }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item.text),
                    item.iconPosition === 'trailing' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, { role: 'img' }))));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Option, { key: item.key, value: item.key }, item.text));
        }
    };
    const getDropdownItemButton = () => {
        const item = state.internalSelectedItem;
        if (!item) {
            return state.value;
        }
        //icon exists and has a value
        if ('icon' in item && item.icon) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.button },
                item.iconPosition !== 'trailing' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, { role: 'img' }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, item.text),
                item.iconPosition === 'trailing' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, { role: 'img' })));
        }
        else {
            return item.text;
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Dropdown, { clearable: state.clearable, className: state.className, placeholder: state.placeholder, appearance: state.appearance, "aria-label": state.ariaLabel, selectedOptions: state.selectedValues, value: state.defaultValue, onOptionSelect: (_, value) => {
            state.setValue(value.optionValue);
        }, "data-testid": state.dataTestId, disabled: state.disabled, expandIcon: state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, { size: 'tiny' }) : undefined, button: {
            disabled: state.disabled,
            children: getDropdownItemButton(),
        } }, state.items?.map((item, index) => {
        if ('items' in item) {
            return generateGroup(item, index);
        }
        else {
            return generateOption(item);
        }
    })));
};


/***/ }),

/***/ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.root.tsx":
/*!**********************************************************************************!*\
  !*** ./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.root.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconizedDropdown: () => (/* binding */ IconizedDropdown)
/* harmony export */ });
/* harmony import */ var _IconizedDropdown_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconizedDropdown.render */ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.render.tsx");
/* harmony import */ var _IconizedDropdown_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconizedDropdown.styles */ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.styles.ts");
/* harmony import */ var _IconizedDropdown_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconizedDropdown.state */ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.state.ts");



const MODULE_NAME = 'IconizedDropdown';
const IconizedDropdown = (props) => {
    // get state
    const state = (0,_IconizedDropdown_state__WEBPACK_IMPORTED_MODULE_2__.useIconizedDropdownState)(props);
    // get styles
    const styles = (0,_IconizedDropdown_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_IconizedDropdown_render__WEBPACK_IMPORTED_MODULE_0__.useIconizedDropdownRender)({ state, styles });
};
IconizedDropdown.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.state.ts":
/*!**********************************************************************************!*\
  !*** ./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.state.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIconizedDropdownState: () => (/* binding */ useIconizedDropdownState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'IconizedDropDown.state';
const useIconizedDropdownState = (props) => {
    // contexts
    // state
    const [localValue, setLocalValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(props.value);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const setValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        setLocalValue(value);
        props.setValue(value);
    }, [props]);
    // memoized
    const item = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const value = localValue;
        for (const dropdownItem of props.items) {
            // is it a group?
            if ('items' in dropdownItem) {
                const found = dropdownItem.items.find((subItem) => subItem.key === value);
                if (found) {
                    return found;
                }
            }
            else if ('key' in dropdownItem && dropdownItem.key === value) {
                return dropdownItem;
            }
        }
        return undefined;
    }, [localValue, props.items]);
    const { selectedValues, defaultValue } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (item) {
            return {
                selectedValues: [item.key],
                defaultValue: item.text,
            };
        }
        else {
            return {
                selectedValues: [],
                defaultValue: localValue,
            };
        }
    }, [item, localValue]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            ...props,
            appearance: props.appearance || 'outline',
            value: localValue,
            setValue,
            defaultValue,
            selectedValues,
            internalSelectedItem: item,
            dataTestId: props.dataTestid || 'iconizedDropDown',
        };
    }, [props, localValue, setValue, defaultValue, selectedValues, item]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.styles.ts":
/*!***********************************************************************************!*\
  !*** ./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.styles.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  option: {
    mc9l5x: "f22iagw",
    Bt984gj: "fqfju6g",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f1q8lukm"
  },
  button: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Bt984gj: "fqfju6g",
    i8kkvl: "f1q8lukm"
  }
}, {
  d: [".f22iagw{display:flex;}", ".fqfju6g{align-items:justify;}", ".f1063pyq{flex-direction:row;}", ".f1q8lukm{column-gap:4px;}"]
});

/***/ }),

/***/ "./src/apps/components/dropdowns/IconizedDropdown/index.ts":
/*!*****************************************************************!*\
  !*** ./src/apps/components/dropdowns/IconizedDropdown/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconizedDropDown: () => (/* reexport safe */ _IconizedDropdown_root__WEBPACK_IMPORTED_MODULE_0__.IconizedDropdown)
/* harmony export */ });
/* harmony import */ var _IconizedDropdown_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconizedDropdown.root */ "./src/apps/components/dropdowns/IconizedDropdown/IconizedDropdown.root.tsx");



/***/ }),

/***/ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.render.tsx":
/*!********************************************************************************!*\
  !*** ./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.render.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSimpleDropdownRender: () => (/* binding */ useSimpleDropdownRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");


const useSimpleDropdownRender = ({ state, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { clearable: state.clearable, placeholder: state.placeholder, appearance: state.appearance, className: state.className, "aria-label": state.ariaLabel, value: state.defaultValue, selectedOptions: state.selectedValues, onOptionSelect: (_, value) => {
            state.setValue(value.optionValue);
        }, "data-testid": state.dataTestId, disabled: state.disabled, button: {
            disabled: state.disabled,
            children: state.value
                ? state.items?.find((x) => x.key === state.value)?.text
                : state.placeholder,
        }, expandIcon: state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, { size: 'tiny' }) : undefined }, state.items?.map((item) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Option, { key: item.key, value: item.key }, item.text)))));
};


/***/ }),

/***/ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.root.tsx":
/*!******************************************************************************!*\
  !*** ./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.root.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleDropdown: () => (/* binding */ SimpleDropdown)
/* harmony export */ });
/* harmony import */ var _SimpleDropdown_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleDropdown.render */ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.render.tsx");
/* harmony import */ var _SimpleDropdown_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleDropdown.state */ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.state.ts");


const MODULE_NAME = 'SimpleDropDown';
const SimpleDropdown = (props) => {
    // get state
    const state = (0,_SimpleDropdown_state__WEBPACK_IMPORTED_MODULE_1__.useSimpleDropdownState)(props);
    // render the item
    return (0,_SimpleDropdown_render__WEBPACK_IMPORTED_MODULE_0__.useSimpleDropdownRender)({ state });
};
SimpleDropdown.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.state.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.state.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSimpleDropdownState: () => (/* binding */ useSimpleDropdownState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'SimpleDropDown.state';
const useSimpleDropdownState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const itemValue = props.defaultValue || props.value;
        const item = props.items?.find((item) => item.key === itemValue);
        const selectedValues = item ? [item.key] : [];
        const defaultValue = item ? item.text : itemValue;
        return {
            ...props,
            appearance: props.appearance || 'outline',
            defaultValue,
            selectedValues,
            dataTestId: props.dataTestid || 'simpleDropDown',
        };
    }, [props]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/components/dropdowns/SimpleDropdown/index.ts":
/*!***************************************************************!*\
  !*** ./src/apps/components/dropdowns/SimpleDropdown/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleDropdown: () => (/* reexport safe */ _SimpleDropdown_root__WEBPACK_IMPORTED_MODULE_0__.SimpleDropdown)
/* harmony export */ });
/* harmony import */ var _SimpleDropdown_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleDropdown.root */ "./src/apps/components/dropdowns/SimpleDropdown/SimpleDropdown.root.tsx");



/***/ }),

/***/ "./src/apps/components/dropdowns/index.ts":
/*!************************************************!*\
  !*** ./src/apps/components/dropdowns/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconizedDropDown: () => (/* reexport safe */ _IconizedDropdown__WEBPACK_IMPORTED_MODULE_1__.IconizedDropDown),
/* harmony export */   SimpleDropdown: () => (/* reexport safe */ _SimpleDropdown__WEBPACK_IMPORTED_MODULE_0__.SimpleDropdown)
/* harmony export */ });
/* harmony import */ var _SimpleDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimpleDropdown */ "./src/apps/components/dropdowns/SimpleDropdown/index.ts");
/* harmony import */ var _IconizedDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconizedDropdown */ "./src/apps/components/dropdowns/IconizedDropdown/index.ts");
/* harmony import */ var _DropdownTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownTypes */ "./src/apps/components/dropdowns/DropdownTypes.ts");





/***/ }),

/***/ "./src/apps/components/index.ts":
/*!**************************************!*\
  !*** ./src/apps/components/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_0__.Card),
/* harmony export */   DateTimeRangeInput: () => (/* reexport safe */ _DateTimeRangeInput__WEBPACK_IMPORTED_MODULE_2__.DateTimeRangeInput),
/* harmony export */   Editor: () => (/* reexport safe */ _Editor__WEBPACK_IMPORTED_MODULE_3__.Editor),
/* harmony export */   EmptyContents: () => (/* reexport safe */ _EmptyContents__WEBPACK_IMPORTED_MODULE_4__.EmptyContents),
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__.ErrorBoundary),
/* harmony export */   ErrorMessage: () => (/* reexport safe */ _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.ErrorMessage),
/* harmony export */   ExternalLink: () => (/* reexport safe */ _ExternalLink__WEBPACK_IMPORTED_MODULE_7__.ExternalLink),
/* harmony export */   FilterCombobox: () => (/* reexport safe */ _FilterCombobox__WEBPACK_IMPORTED_MODULE_8__.FilterCombobox),
/* harmony export */   FilterRow: () => (/* reexport safe */ _Filters__WEBPACK_IMPORTED_MODULE_9__.FilterRow),
/* harmony export */   Graph: () => (/* reexport safe */ _Graph__WEBPACK_IMPORTED_MODULE_10__.Graph),
/* harmony export */   HierarchyTree: () => (/* reexport safe */ _HierarchyTree__WEBPACK_IMPORTED_MODULE_11__.HierarchyTree),
/* harmony export */   IconCard: () => (/* reexport safe */ _IconCard__WEBPACK_IMPORTED_MODULE_12__.IconCard),
/* harmony export */   IconizedDropDown: () => (/* reexport safe */ _dropdowns__WEBPACK_IMPORTED_MODULE_1__.IconizedDropDown),
/* harmony export */   LabelValue: () => (/* reexport safe */ _LabelValue__WEBPACK_IMPORTED_MODULE_13__.LabelValue),
/* harmony export */   Loading: () => (/* reexport safe */ _Loading__WEBPACK_IMPORTED_MODULE_14__.Loading),
/* harmony export */   Page: () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_15__.Page),
/* harmony export */   PageFooter: () => (/* reexport safe */ _PageFooter__WEBPACK_IMPORTED_MODULE_16__.PageFooter),
/* harmony export */   RequiredFieldText: () => (/* reexport safe */ _RequiredFieldText__WEBPACK_IMPORTED_MODULE_17__.RequiredFieldText),
/* harmony export */   SchedulingSection: () => (/* reexport safe */ _SchedulingSection__WEBPACK_IMPORTED_MODULE_18__.SchedulingSection),
/* harmony export */   SimpleDropdown: () => (/* reexport safe */ _dropdowns__WEBPACK_IMPORTED_MODULE_1__.SimpleDropdown),
/* harmony export */   SortRow: () => (/* reexport safe */ _Filters__WEBPACK_IMPORTED_MODULE_9__.SortRow),
/* harmony export */   SqlTypeFilterRowTypeMapping: () => (/* reexport safe */ _Filters__WEBPACK_IMPORTED_MODULE_9__.SqlTypeFilterRowTypeMapping),
/* harmony export */   Step: () => (/* reexport safe */ _SteppedWizard__WEBPACK_IMPORTED_MODULE_19__.Step),
/* harmony export */   SteppedWizard: () => (/* reexport safe */ _SteppedWizard__WEBPACK_IMPORTED_MODULE_19__.SteppedWizard),
/* harmony export */   SteppedWizardStartStep: () => (/* reexport safe */ _SteppedWizard__WEBPACK_IMPORTED_MODULE_19__.SteppedWizardStartStep),
/* harmony export */   UnitOfTime: () => (/* reexport safe */ _SchedulingSection__WEBPACK_IMPORTED_MODULE_18__.UnitOfTime),
/* harmony export */   useSchedulingSectionState: () => (/* reexport safe */ _SchedulingSection__WEBPACK_IMPORTED_MODULE_18__.useSchedulingSectionState),
/* harmony export */   useSkipSteppedWizardIntro: () => (/* reexport safe */ _SteppedWizard__WEBPACK_IMPORTED_MODULE_19__.useSkipSteppedWizardIntro)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/apps/components/Card/index.ts");
/* harmony import */ var _dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdowns */ "./src/apps/components/dropdowns/index.ts");
/* harmony import */ var _DateTimeRangeInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateTimeRangeInput */ "./src/apps/components/DateTimeRangeInput/index.ts");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor */ "./src/apps/components/Editor/index.ts");
/* harmony import */ var _EmptyContents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmptyContents */ "./src/apps/components/EmptyContents/index.ts");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/apps/components/ErrorBoundary/index.ts");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ErrorMessage */ "./src/apps/components/ErrorMessage/index.ts");
/* harmony import */ var _ExternalLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExternalLink */ "./src/apps/components/ExternalLink/index.ts");
/* harmony import */ var _FilterCombobox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FilterCombobox */ "./src/apps/components/FilterCombobox/index.ts");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Filters */ "./src/apps/components/Filters/index.ts");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Graph */ "./src/apps/components/Graph/index.ts");
/* harmony import */ var _HierarchyTree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HierarchyTree */ "./src/apps/components/HierarchyTree/index.ts");
/* harmony import */ var _IconCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconCard */ "./src/apps/components/IconCard/index.ts");
/* harmony import */ var _LabelValue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LabelValue */ "./src/apps/components/LabelValue/index.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Loading */ "./src/apps/components/Loading/index.ts");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Page */ "./src/apps/components/Page/index.ts");
/* harmony import */ var _PageFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PageFooter */ "./src/apps/components/PageFooter/index.ts");
/* harmony import */ var _RequiredFieldText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequiredFieldText */ "./src/apps/components/RequiredFieldText/index.ts");
/* harmony import */ var _SchedulingSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SchedulingSection */ "./src/apps/components/SchedulingSection/index.ts");
/* harmony import */ var _SteppedWizard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SteppedWizard */ "./src/apps/components/SteppedWizard/index.ts");






















/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.render.tsx":
/*!*********************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.render.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeSeriesChartRender: () => (/* binding */ useTimeSeriesChartRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LineChart_LineChart_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LineChart/LineChart.root */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.root.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarTitle/MessageBarTitle.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _components_LineChart_components_LineChartControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LineChart/components/LineChartControls */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/index.ts");






const useTimeSeriesChartRender = ({ state, styles, }) => {
    let chartContents = null;
    const { successfulDataRequests, failedDataRequests } = state;
    switch (state.componentState) {
        case 'pending':
            chartContents = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Spinner, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.loading) });
            break;
        case 'success':
            chartContents = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LineChart_LineChart_root__WEBPACK_IMPORTED_MODULE_1__.LineChart, { setChartType: state.setChartType, rawTimeSeriesData: successfulDataRequests }));
            break;
        case 'empty':
            chartContents = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.explorer.time_series.controls.errors.no_data) }));
            break;
        case 'error':
            chartContents = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.error) });
            break;
        default:
            chartContents = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.common.error) });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.chart },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.controls },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_LineChart_components_LineChartControls__WEBPACK_IMPORTED_MODULE_4__.LineChartControls, { onApplyClicked: state.onApplyClicked })),
            failedDataRequests.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.error },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MessageBar, { intent: 'error' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MessageBarBody, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MessageBarTitle, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.explorer.time_series.controls.errors.error_title)),
                        (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.explorer.time_series.controls.errors.failed_to_load, {
                            count: failedDataRequests.length,
                        }))))) : null,
            chartContents)));
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.root.tsx":
/*!*******************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.root.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesChart: () => (/* binding */ TimeSeriesChart)
/* harmony export */ });
/* harmony import */ var _TimeSeriesChart_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesChart.render */ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.render.tsx");
/* harmony import */ var _TimeSeriesChart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeSeriesChart.styles */ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.styles.ts");
/* harmony import */ var _TimeSeriesChart_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeSeriesChart.state */ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.state.ts");



const MODULE_NAME = 'TimeSeriesChart';
const TimeSeriesChart = (props) => {
    // get state
    const state = (0,_TimeSeriesChart_state__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesChartState)(props);
    // get styles
    const styles = (0,_TimeSeriesChart_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    return (0,_TimeSeriesChart_render__WEBPACK_IMPORTED_MODULE_0__.useTimeSeriesChartRender)({
        state,
        styles,
    });
};
TimeSeriesChart.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.state.ts":
/*!*******************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.state.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeSeriesChartState: () => (/* binding */ useTimeSeriesChartState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/TimeSeriesContext.types */ "./src/apps/explorer/contexts/TimeSeriesContext.types.ts");
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");
/* harmony import */ var _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/TimeSeriesUtils */ "./src/apps/explorer/components/TimeSeriesChart/utils/TimeSeriesUtils.ts");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");







const DEBUG_LOGGING = false;
const MODULE_NAME = 'TimeSeriesChart.state';
const useTimeSeriesChartState = (_props) => {
    // contexts
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTimeSeriesClient)();
    const { selectedTimeSeries, binInterval, aggregationMethod, startTime, endTime, } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__.useTimeSeriesContext)();
    // internal functions
    const getTimeSeriesUniqueId = (twinId, timeSeriesDatapointId) => `${twinId}-${timeSeriesDatapointId}`;
    // state
    const [chartType, setChartType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_contexts_TimeSeriesContext_types__WEBPACK_IMPORTED_MODULE_2__.ChartType.line);
    const [timeSeriesDataRequests, setTimeSeriesDataRequests] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        const initialTimeSeriesDataRequests = {};
        selectedTimeSeries.forEach((timeSeries) => {
            initialTimeSeriesDataRequests[getTimeSeriesUniqueId(timeSeries.twinId, timeSeries.timeSeriesDatapointId)] = {
                state: 'uncalled',
            };
        });
        return initialTimeSeriesDataRequests;
    });
    const setSingleRequestState = (uniqueId, state) => {
        setTimeSeriesDataRequests((currentRequests) => {
            const newRequests = (0,immer__WEBPACK_IMPORTED_MODULE_6__.produce)(currentRequests, (draft) => {
                draft[uniqueId] = state;
            });
            return newRequests;
        });
    };
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const previousOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        binWidth: Number(binInterval),
        aggType: aggregationMethod,
        dateTimeStart: startTime ?? '',
        dateTimeEnd: endTime ?? '',
    });
    // callbacks
    const fetchTimeSeriesData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client, twinId, timeSeriesDatapointId, isCanceled) => {
        if (isCanceled) {
            return;
        }
        // Intentionally using previous options to ensure time series are only fetched
        // using parameter values captured when the Apply button is clicked.
        const dateTimeStart = previousOptions.current.dateTimeStart;
        const dateTimeEnd = previousOptions.current.dateTimeEnd;
        const timeSeriesData = {};
        const uniqueId = getTimeSeriesUniqueId(twinId, timeSeriesDatapointId);
        if (!dateTimeStart || !dateTimeEnd) {
            setSingleRequestState(uniqueId, {
                state: 'error',
                errorCode: '400',
                errorMessage: 'Start time and end time cannot be empty',
            });
            return;
        }
        else if (new Date(dateTimeStart).getTime() >= new Date(dateTimeEnd).getTime()) {
            setSingleRequestState(uniqueId, {
                state: 'error',
                errorCode: '400',
                errorMessage: 'Start time cannot be greater than or equal to end time',
            });
            return;
        }
        // Iterate through all pages of data
        let hasRequestFailed = false;
        let continuationToken = undefined;
        let requestIndex = 0;
        let hasContinuationToken = false;
        let results;
        const logConfig = {
            featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.TwinVisualizationFeature.ExploreTimeseries,
            activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.ExploreTimeseriesActivity.GetDataPointsCalled,
            activityAttributes: {
                [_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.ExploreTimeSeriesAttribute.TimeSeriesRange]: (0,_utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_5__.getTimeSeriesRangeBucket)(dateTimeStart, dateTimeEnd),
            },
        };
        do {
            results = await client.getTimeSeriesPointData(twinId, timeSeriesDatapointId, logConfig, {
                // Fetch data won't be called if start time and end time are empty
                dateTimeStart: new Date(dateTimeStart).toISOString(),
                dateTimeEnd: new Date(dateTimeEnd).toISOString(),
                aggType: previousOptions.current.aggType,
                binWidth: Number(previousOptions.current.binWidth), // casting required from dropdown option to number
                continuationToken: hasContinuationToken
                    ? continuationToken
                    : undefined,
            });
            if (results && results.state === 'success') {
                if (results.data.continuationToken) {
                    hasContinuationToken = true;
                    continuationToken = results.data.continuationToken;
                }
                else {
                    hasContinuationToken = false;
                }
                if (requestIndex === 0) {
                    timeSeriesData[uniqueId] = results.data.data;
                }
                else {
                    timeSeriesData[uniqueId] = timeSeriesData[uniqueId].concat(results.data.data);
                }
                setSingleRequestState(uniqueId, {
                    state: 'success',
                    data: timeSeriesData[uniqueId],
                });
            }
            else {
                hasContinuationToken = false;
                setSingleRequestState(uniqueId, {
                    state: 'error',
                    errorCode: results.errorCode ?? '500',
                    errorMessage: results.errorMessage ?? 'Unknown error',
                });
                hasRequestFailed = true;
            }
            requestIndex++;
        } while (hasContinuationToken && !hasRequestFailed);
    }, []);
    const applyParameterChanges = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // If the parameters change then reset the state of all requests
        setTimeSeriesDataRequests((currentRequests) => {
            const newRequests = (0,immer__WEBPACK_IMPORTED_MODULE_6__.produce)(currentRequests, (draft) => {
                Object.keys(currentRequests).forEach((key) => {
                    draft[key] = { state: 'uncalled' };
                });
            });
            return newRequests;
        });
        previousOptions.current = {
            binWidth: Number(binInterval),
            aggType: aggregationMethod,
            dateTimeStart: startTime,
            dateTimeEnd: endTime,
        };
    }, [aggregationMethod, binInterval, endTime, startTime]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let isCanceled = false;
        if (client && selectedTimeSeries.length) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().logStandardizedCertifiedEvent({
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.TwinVisualizationFeature.ExploreTimeseries,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.ExploreTimeseriesActivity.ChartRendered,
                activityAttributes: {
                    [_models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.ExploreTimeSeriesAttribute.LinesDrawn]: selectedTimeSeries.length,
                },
            });
            selectedTimeSeries.forEach((timeSeries) => {
                const uniqueId = getTimeSeriesUniqueId(timeSeries.twinId, timeSeries.timeSeriesDatapointId);
                if (timeSeriesDataRequests[uniqueId]) {
                    if (timeSeriesDataRequests[uniqueId].state === 'success') {
                        // Don't query for data if it exists
                        return;
                    }
                }
                if (!timeSeriesDataRequests[uniqueId] || // if the request is not in the state
                    timeSeriesDataRequests[uniqueId].state === 'uncalled' // if the request is uncalled
                ) {
                    setSingleRequestState(uniqueId, {
                        state: 'pending',
                    });
                    fetchTimeSeriesData(client, timeSeries.twinId, timeSeries.timeSeriesDatapointId, isCanceled);
                }
            });
        }
        return () => {
            // cleanup, cancel all pending requests if component unmounts
            isCanceled = true;
        };
    }, [client, selectedTimeSeries, timeSeriesDataRequests, fetchTimeSeriesData]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        // Filter out the time series data requests that are not selected
        const selectedRequests = Object.fromEntries(Object.entries(timeSeriesDataRequests).filter(([key]) => selectedTimeSeries.some((ts) => key === getTimeSeriesUniqueId(ts.twinId, ts.timeSeriesDatapointId))));
        const successfulDataRequests = {};
        const failedDataRequests = [];
        let loadingDataRequests = 0;
        Object.keys(selectedRequests).forEach((key) => {
            const dataRequest = selectedRequests[key];
            switch (dataRequest.state) {
                case 'success':
                    successfulDataRequests[key] = dataRequest.data;
                    break;
                case 'error':
                    failedDataRequests.push(dataRequest);
                    break;
                // Loading or pending fall under same category
                case 'pending':
                    loadingDataRequests++;
                    break;
                case 'uncalled':
                    loadingDataRequests++;
                    break;
            }
        });
        const componentState = loadingDataRequests > 0
            ? 'pending'
            : Object.keys(successfulDataRequests).length > 0
                ? (0,_utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_5__.checkTimeSeriesHasValues)(successfulDataRequests)
                    ? 'success'
                    : 'empty'
                : 'error';
        return {
            chartType: chartType,
            setChartType: setChartType,
            successfulDataRequests,
            failedDataRequests,
            componentState,
            onApplyClicked: applyParameterChanges,
        };
    }, [
        chartType,
        selectedTimeSeries,
        timeSeriesDataRequests,
        applyParameterChanges,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.styles.ts":
/*!********************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.styles.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  header: {},
  chart: {},
  controls: {
    Frg6f3: ["fmdf13e", "f1wplq67"]
  },
  error: {
    uwmqm3: ["f9y0skx", "fdeuxjd"],
    Byoj8tv: "fpe6lb7"
  }
}, {
  d: [".fmdf13e{margin-left:44px;}", ".f1wplq67{margin-right:44px;}", ".f9y0skx{padding-left:44px;}", ".fdeuxjd{padding-right:44px;}", ".fpe6lb7{padding-bottom:12px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.render.tsx":
/*!************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.render.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLineChartRender: () => (/* binding */ useLineChartRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");


/* istanbul ignore next */
const HighchartsReact = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "node_modules_highcharts-react-official_dist_highcharts-react_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highcharts-react-official */ "./node_modules/highcharts-react-official/dist/highcharts-react.min.js", 23)).then((module) => ({
    default: module.HighchartsReact,
})));
const useLineChartRender = ({ state, styles, }) => {
    const chartComponentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const highchartsModule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // TODO: See if we can remove this useEffect in favor of lazy loading the component
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        /* istanbul ignore next */
        async function fetchHighchartsModule() {
            // lazy load highcharts module
            await __webpack_require__.e(/*! import() */ "vendors-node_modules_highcharts_highstock_js").then(__webpack_require__.t.bind(__webpack_require__, /*! highcharts/highstock */ "./node_modules/highcharts/highstock.js", 23)).then((module) => {
                highchartsModule.current = module.default;
                state.setIsHighchartsLoaded(true);
            });
        }
        if (!state.isHighchartsLoaded) {
            /* istanbul ignore next */
            fetchHighchartsModule();
        }
    }, [state]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, { className: styles.spinner }) }, state.isHighchartsLoaded ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.chartContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HighchartsReact, { highcharts: highchartsModule.current, options: state.options, ref: chartComponentRef, constructorType: 'stockChart' }))) : null)));
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.root.tsx":
/*!**********************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.root.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChart: () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var _LineChart_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChart.render */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.render.tsx");
/* harmony import */ var _LineChart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChart.styles */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.styles.ts");
/* harmony import */ var _LineChart_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineChart.state */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.state.ts");



const MODULE_NAME = 'LineChart';
const LineChart = (props) => {
    // get state
    const state = (0,_LineChart_state__WEBPACK_IMPORTED_MODULE_2__.useLineChartState)(props);
    // get styles
    const styles = (0,_LineChart_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_LineChart_render__WEBPACK_IMPORTED_MODULE_0__.useLineChartRender)({ state, styles });
};
LineChart.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.state.ts":
/*!**********************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.state.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInitialOptions: () => (/* binding */ createInitialOptions),
/* harmony export */   createSeriesOptions: () => (/* binding */ createSeriesOptions),
/* harmony export */   useLineChartState: () => (/* binding */ useLineChartState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'LineChart.state';
const getColorByIndex = (index) => {
    // TODO: See if these colors can be added to the theme
    const colors = [
        '#12239E',
        '#E044A7',
        '#744EC2',
        '#D9B300',
        '#1AAB40',
        '#D64550',
    ];
    return colors[index % colors.length];
};
const createSeriesOptions = (data) => {
    return Object.keys(data).map((key, idx) => {
        const timeSeriesData = data[key];
        return {
            name: key,
            color: getColorByIndex(idx),
            type: 'line',
            data: timeSeriesData.map((point) => [point.timestamp, point.value]),
            // Explicitly show point if there is only one point, otherwise don't show it
            marker: {
                enabled: timeSeriesData.length === 1,
            },
            tooltip: {
                valueDecimals: 2,
            },
        };
    });
};
const createInitialOptions = (data) => {
    return {
        title: undefined,
        xAxis: {
            type: 'datetime',
            labels: {
                // TODO: locale days of week
                format: '{value:%Y-%m-%d}',
            },
        },
        yAxis: {
            opposite: false,
        },
        scrollbar: {
            enabled: false,
        },
        series: createSeriesOptions(data),
        // TODO: Add configuration to be able to manipulate this
        rangeSelector: {
            enabled: false,
        },
        // TODO: Add configuration to be able to manipulate this
        navigator: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
    };
};
const useLineChartState = (props) => {
    // contexts
    // state
    const [isHighchartsLoaded, setIsHighchartsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // Options need to come from useState/useContext because they need to be extensible
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        if (Object.keys(props.rawTimeSeriesData).length > 0) {
            return createInitialOptions(props.rawTimeSeriesData);
        }
        else {
            return {};
        }
    });
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setOptions((prevOptions) => {
            return {
                ...prevOptions,
                series: createSeriesOptions(props.rawTimeSeriesData),
            };
        });
    }, [props.rawTimeSeriesData]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            options,
            isHighchartsLoaded,
            setIsHighchartsLoaded,
        };
    }, [isHighchartsLoaded, options]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.styles.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/LineChart.styles.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  spinner: {
    Bqenvij: "f1l02sjl"
  },
  chartContainer: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    B2u0y6b: "f6dzj5z"
  }
}, {
  d: [".f1l02sjl{height:100%;}", ".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f6dzj5z{max-width:100%;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.render.tsx":
/*!*************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.render.tsx ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAggregationOptions: () => (/* binding */ getAggregationOptions),
/* harmony export */   getIntervalOptions: () => (/* binding */ getIntervalOptions),
/* harmony export */   useLineChartControlsRender: () => (/* binding */ useLineChartControlsRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/TimeSeriesUtils */ "./src/apps/explorer/components/TimeSeriesChart/utils/TimeSeriesUtils.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");





const getAggregationOptions = (t) => [
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.AggregationKeys.average,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.aggregation.options.average),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.AggregationKeys.maximum,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.aggregation.options.maximum),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.AggregationKeys.minimum,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.aggregation.options.minimum),
    },
];
const getIntervalOptions = (t) => [
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.oneMinute,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options.one_minute),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.fiveMinutes,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options.five_minutes),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.fifteenMinutes,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options
            .fifteen_minutes),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.thirtyMinutes,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options
            .thirty_minutes),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.oneHour,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options.one_hour),
    },
    {
        key: _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_3__.BinIntervalKeys.oneDay,
        text: t(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.bin_intervals.options.one_day),
    },
];
const useLineChartControlsRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.dropdownContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: {
                    children: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.aggregation))),
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.SimpleDropdown, { ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.controls.aggregation.aria_label), items: getAggregationOptions(_do_localization__WEBPACK_IMPORTED_MODULE_2__.t), setValue: state.onAggregationMethodChange, value: state.selectedAggregationMethod }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.DateTimeRangeInput, { ...state.dateTimeRangeProps }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.dropdownContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: {
                    children: (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Label, { weight: 'semibold' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.time_range_controls.bin_width))),
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Dropdown, { onOptionSelect: state.onBinIntervalChange, value: state.selectedBinInterval, selectedOptions: [state.binInterval] }, getIntervalOptions(_do_localization__WEBPACK_IMPORTED_MODULE_2__.t).map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Option, { key: option.key, value: option.key }, option.text)))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Button, { appearance: 'primary', onClick: state.onApplyClicked, disabled: !state.applyEnabled }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.apply)))));
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.root.tsx":
/*!***********************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.root.tsx ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChartControls: () => (/* binding */ LineChartControls)
/* harmony export */ });
/* harmony import */ var _LineChartControls_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChartControls.render */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.render.tsx");
/* harmony import */ var _LineChartControls_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineChartControls.styles */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.styles.ts");
/* harmony import */ var _LineChartControls_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineChartControls.state */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.state.ts");



const MODULE_NAME = 'LineChartControls';
const LineChartControls = (props) => {
    // get state
    const state = (0,_LineChartControls_state__WEBPACK_IMPORTED_MODULE_2__.useLineChartControlsState)(props);
    // get styles
    const styles = (0,_LineChartControls_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_LineChartControls_render__WEBPACK_IMPORTED_MODULE_0__.useLineChartControlsRender)({ state, styles });
};
LineChartControls.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.state.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.state.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLineChartControlsState: () => (/* binding */ useLineChartControlsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");
/* harmony import */ var _contexts_TimeSeriesContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../contexts/TimeSeriesContext.types */ "./src/apps/explorer/contexts/TimeSeriesContext.types.ts");
/* harmony import */ var _utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/TimeSeriesUtils */ "./src/apps/explorer/components/TimeSeriesChart/utils/TimeSeriesUtils.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'LineChartControls.state';
const useLineChartControlsState = (props) => {
    // contexts
    const { binInterval, binSelectedOption, aggregationMethod, startTime, endTime, setAggregationMethod, setBinInterval, setStartTime, setEndTime, } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesContext)();
    // state
    const dateTimeRangeProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        startDateInputProps: {
            value: startTime,
            onChange(event) {
                if (!event.target.value) {
                    setStartTime(undefined);
                }
                else {
                    setStartTime((0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.getDateTimeFormatted)(new Date(event.target.value)));
                }
            },
        },
        endDateInputProps: {
            value: endTime,
            onChange(event) {
                if (!event.target.value) {
                    setEndTime(undefined);
                }
                else {
                    setEndTime((0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.getDateTimeFormatted)(new Date(event.target.value)));
                }
            },
        },
    }), [startTime, endTime, setStartTime, setEndTime]);
    const [applyEnabled, setApplyEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const previousOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        binWidth: Number(binInterval),
        aggType: aggregationMethod,
        dateTimeStart: startTime,
        dateTimeEnd: endTime,
    });
    // callbacks
    const onApplyClicked = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        previousOptions.current = {
            binWidth: Number(binInterval),
            aggType: aggregationMethod,
            dateTimeStart: startTime,
            dateTimeEnd: endTime,
        };
        setApplyEnabled(false);
        props.onApplyClicked();
    }, [aggregationMethod, binInterval, startTime, endTime, props]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const paramsChanged = (0,_utils_TimeSeriesUtils__WEBPACK_IMPORTED_MODULE_4__.checkParamsChange)({
            binWidth: Number(binInterval),
            aggType: aggregationMethod,
            dateTimeStart: startTime,
            dateTimeEnd: endTime,
        }, previousOptions.current);
        setApplyEnabled(paramsChanged);
    }, [binInterval, aggregationMethod, startTime, endTime]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedAggregationMethod: aggregationMethod,
            dateTimeRangeProps,
            selectedBinInterval: binSelectedOption,
            binInterval,
            onAggregationMethodChange: setAggregationMethod,
            onBinIntervalChange: setBinInterval,
            chartType: _contexts_TimeSeriesContext_types__WEBPACK_IMPORTED_MODULE_3__.ChartType.line,
            applyEnabled: applyEnabled,
            onApplyClicked: onApplyClicked,
        };
    }, [
        aggregationMethod,
        binInterval,
        binSelectedOption,
        dateTimeRangeProps,
        setAggregationMethod,
        setBinInterval,
        applyEnabled,
        onApplyClicked,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.styles.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.styles.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    i8kkvl: "f5wq1k0",
    Bt984gj: "f122n59"
  },
  dropdownContainer: {
    sshi5w: "f1n5o1gx"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f5wq1k0{column-gap:16px;}", ".f122n59{align-items:center;}", ".f1n5o1gx{min-height:80px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/index.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/index.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChartControls: () => (/* reexport safe */ _LineChartControls_root__WEBPACK_IMPORTED_MODULE_0__.LineChartControls)
/* harmony export */ });
/* harmony import */ var _LineChartControls_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineChartControls.root */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/index.ts":
/*!***************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesChart: () => (/* reexport safe */ _TimeSeriesChart_root__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesChart)
/* harmony export */ });
/* harmony import */ var _TimeSeriesChart_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesChart.root */ "./src/apps/explorer/components/TimeSeriesChart/TimeSeriesChart.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/TimeSeriesChart/utils/TimeSeriesUtils.ts":
/*!*******************************************************************************!*\
  !*** ./src/apps/explorer/components/TimeSeriesChart/utils/TimeSeriesUtils.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AggregationKeys: () => (/* binding */ AggregationKeys),
/* harmony export */   BinIntervalKeys: () => (/* binding */ BinIntervalKeys),
/* harmony export */   checkParamsChange: () => (/* binding */ checkParamsChange),
/* harmony export */   checkTimeSeriesHasValues: () => (/* binding */ checkTimeSeriesHasValues),
/* harmony export */   getTimeSeriesRangeBucket: () => (/* binding */ getTimeSeriesRangeBucket)
/* harmony export */ });
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");

var AggregationKeys;
(function (AggregationKeys) {
    AggregationKeys["average"] = "average";
    AggregationKeys["maximum"] = "maximum";
    AggregationKeys["minimum"] = "minimum";
})(AggregationKeys || (AggregationKeys = {}));
// TODO: Improve this to allow flexibility of picking the bin interval
var BinIntervalKeys;
(function (BinIntervalKeys) {
    BinIntervalKeys["oneMinute"] = "60";
    BinIntervalKeys["fiveMinutes"] = "300";
    BinIntervalKeys["fifteenMinutes"] = "900";
    BinIntervalKeys["thirtyMinutes"] = "1800";
    BinIntervalKeys["oneHour"] = "3600";
    BinIntervalKeys["oneDay"] = "86400";
})(BinIntervalKeys || (BinIntervalKeys = {}));
const checkParamsChange = (newParams, prevParams) => {
    if (!prevParams) {
        return true;
    }
    return (prevParams.dateTimeStart !== newParams.dateTimeStart ||
        prevParams.dateTimeEnd !== newParams.dateTimeEnd ||
        prevParams.binWidth !== Number(newParams.binWidth) ||
        prevParams.aggType !== newParams.aggType);
};
const checkTimeSeriesHasValues = (timeSeriesPointData) => {
    // If any point has a value, the time series is not empty
    return Object.values(timeSeriesPointData).some((timeSeriesData) => timeSeriesData.some((point) => point.value !== null));
};
function getTimeSeriesRangeBucket(startTime, endTime) {
    if (!startTime || !endTime) {
        return _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.ExploreTimeSeriesTimeRangeBuckets.TimeSeriesTimeRangeInvalid;
    }
    const durationToBucketMap = {
        [24 * 60 * 60 * 1000]: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.ExploreTimeSeriesTimeRangeBuckets.TimeSeriesUnder1d, // 1 day
        [7 * 24 * 60 * 60 * 1000]: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.ExploreTimeSeriesTimeRangeBuckets.TimeSeriesOver1d, // 1 week
        [30 * 24 * 60 * 60 * 1000]: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.ExploreTimeSeriesTimeRangeBuckets.TimeSeriesOver1wk, // 30 days
    };
    const start = new Date(startTime);
    const end = new Date(endTime);
    const duration = Math.abs(end.getTime() - start.getTime());
    const matchingDuration = Object.keys(durationToBucketMap)
        .map(Number)
        .find((key) => duration < key);
    return matchingDuration
        ? durationToBucketMap[matchingDuration]
        : _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.ExploreTimeSeriesTimeRangeBuckets.TimeSeriesOver30d;
}


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.render.tsx":
/*!***************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.render.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinDetailsPageRender: () => (/* binding */ useTwinDetailsPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-9.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../details */ "./src/apps/explorer/components/twins/details/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");








var TestIds;
(function (TestIds) {
    TestIds["Main"] = "twin-details-main";
    TestIds["Back"] = "twin-details-back";
})(TestIds || (TestIds = {}));
const useTwinDetailsPageRender = (props) => {
    const { state, styles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.Page, { testid: TestIds.Main },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.buttonRow, role: 'navigation' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'transparent', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.ArrowLeft24Regular, null), className: styles.button, onClick: state.onBackClick, "data-testid": TestIds.Back }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.back)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'transparent', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Open20Regular, null), className: styles.button, onClick: state.openInNewTab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.open_in_new_tab))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.main },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, state.twinId),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_details__WEBPACK_IMPORTED_MODULE_3__.TwinDetailsNav, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: `${state.twinDetailsPath}/timeSeries` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__.TimeSeriesContextProvider, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_details__WEBPACK_IMPORTED_MODULE_3__.TwinTimeSeriesPanel, null))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: `${state.twinDetailsPath}/events` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_details__WEBPACK_IMPORTED_MODULE_3__.TwinEventsPanel, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: `${state.twinDetailsPath}/relatedTwins` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_details__WEBPACK_IMPORTED_MODULE_3__.TwinRelatedTwinsPanel, { twinId: state.twinId })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '*' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_details__WEBPACK_IMPORTED_MODULE_3__.TwinDetailsPanel, { twinId: state.twinId })))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.root.tsx":
/*!*************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.root.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsPage: () => (/* binding */ TwinDetailsPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _TwinDetailsPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinDetailsPage.render */ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.render.tsx");
/* harmony import */ var _TwinDetailsPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinDetailsPage.styles */ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.styles.ts");
/* harmony import */ var _TwinDetailsPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinDetailsPage.state */ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.state.ts");




const MODULE_NAME = 'TwinDetailsPage';
const TwinDetailsPage = (_props) => {
    // get state
    const state = (0,_TwinDetailsPage_state__WEBPACK_IMPORTED_MODULE_3__.useTwinDetailsPageState)(_props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_TwinDetailsPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_TwinDetailsPage_render__WEBPACK_IMPORTED_MODULE_1__.useTwinDetailsPageRender)({ state, styles });
};
TwinDetailsPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.state.ts":
/*!*************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.state.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinDetailsPageState: () => (/* binding */ useTwinDetailsPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");



const useTwinDetailsPageState = (_props) => {
    // contexts
    // state
    const routeProps = (0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__.useTwinsExplorerRouteProps)();
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.useNavigation)();
    // hooks
    // callbacks
    const onBackClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        navigation?.navigate({ path: routeProps.twinsPath });
    }, [navigation, routeProps.twinsPath]);
    const openInNewTab = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        return navigation?.duplicateTab();
    }, [navigation]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedPanel: routeProps.panelName || 'details',
            twinDetailsPath: routeProps.twinDetailsPath,
            twinId: routeProps.twinId,
            onBackClick,
            openInNewTab,
        };
    }, [
        onBackClick,
        openInNewTab,
        routeProps.panelName,
        routeProps.twinDetailsPath,
        routeProps.twinId,
    ]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.styles.ts":
/*!**************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.styles.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  buttonRow: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: "f1869bpl",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"]
  },
  button: {
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    z189sj: ["fhxju0i", "f1cnd47f"],
    Bf4jedk: "fy77jfu"
  },
  main: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"],
    Belr9w4: "fn67r4l"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1869bpl{justify-content:space-between;}", ".fp9bwmr{padding-top:8px;}", ".f19lj068{padding-right:8px;}", ".f177v4lu{padding-left:8px;}", ".f150uoa4{padding-bottom:8px;}", ".f1cnd47f{padding-left:0;}", ".fhxju0i{padding-right:0;}", ".fy77jfu{min-width:0;}", ".f1vx9l62{flex-direction:column;}", ".fn67r4l{row-gap:8px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinDetailsPage/index.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinDetailsPage/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsPage: () => (/* reexport safe */ _TwinDetailsPage_root__WEBPACK_IMPORTED_MODULE_0__.TwinDetailsPage)
/* harmony export */ });
/* harmony import */ var _TwinDetailsPage_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsPage.root */ "./src/apps/explorer/components/twins/TwinDetailsPage/TwinDetailsPage.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.render.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.render.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinDetailsNavRender: () => (/* binding */ useTwinDetailsNavRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/TabList/TabList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/Tab/Tab.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



var TestIds;
(function (TestIds) {
    TestIds["NavigationRoot"] = "twin-details-nav";
    TestIds["Details"] = "twin-details-nav-details";
    TestIds["TimeSeries"] = "twin-details-nav-time-series";
    TestIds["Events"] = "twin-details-nav-events";
    TestIds["RelatedTwins"] = "twin-details-nav-related-twins";
})(TestIds || (TestIds = {}));
const useTwinDetailsNavRender = ({ state, styles, }) => {
    const onTabSelect = (_, data) => {
        state.onTabChange(data.value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.TabList, { "data-testid": TestIds.NavigationRoot, selectedValue: state.selectedPanel, onTabSelect: onTabSelect, role: 'navigation', className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Tab, { "data-testid": TestIds.Details, value: 'details', className: styles.tab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.nav.details)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Tab, { "data-testid": TestIds.TimeSeries, value: 'timeSeries', className: styles.tab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.nav.time_series)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Tab, { "data-testid": TestIds.Events, value: 'events', className: styles.tab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.nav.events)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Tab, { "data-testid": TestIds.RelatedTwins, value: 'relatedTwins', className: styles.tab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.nav.related_twins))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.root.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.root.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsNav: () => (/* binding */ TwinDetailsNav)
/* harmony export */ });
/* harmony import */ var _TwinDetailsNav_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsNav.render */ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.render.tsx");
/* harmony import */ var _TwinDetailsNav_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinDetailsNav.styles */ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.styles.ts");
/* harmony import */ var _TwinDetailsNav_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinDetailsNav.state */ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.state.ts");



const MODULE_NAME = 'TwinDetailsNav';
const TwinDetailsNav = (_props) => {
    // get state
    const state = (0,_TwinDetailsNav_state__WEBPACK_IMPORTED_MODULE_2__.useTwinDetailsNavState)(_props);
    // get styles
    const styles = (0,_TwinDetailsNav_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinDetailsNav_render__WEBPACK_IMPORTED_MODULE_0__.useTwinDetailsNavRender)({ state, styles });
};
TwinDetailsNav.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.state.ts":
/*!*******************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.state.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinDetailsNavState: () => (/* binding */ useTwinDetailsNavState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");




const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinDetailsNav.state';
const useTwinDetailsNavState = (_props) => {
    // contexts
    // state
    const routeProps = (0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__.useTwinsExplorerRouteProps)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
    // callbacks
    const onTabChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        //we almost always have a history object and Jest hates mocking it (numerous variations tried)
        /* istanbul ignore next */
        history?.replace(`${routeProps.twinDetailsPath}/${value}`);
    }, [history, routeProps.twinDetailsPath]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedPanel: routeProps.panelName || 'details',
            onTabChange,
        };
    }, [onTabChange, routeProps.panelName]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.styles.ts":
/*!********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.styles.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    jrapky: "febqm8h"
  },
  tab: {
    jrapky: "f1abmfm4",
    Byoj8tv: "f1y2xyjm"
  }
}, {
  d: [".febqm8h{margin-bottom:8px;}", ".f1abmfm4{margin-bottom:0px;}", ".f1y2xyjm{padding-bottom:4px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsNav/index.ts":
/*!****************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsNav/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsNav: () => (/* reexport safe */ _TwinDetailsNav_root__WEBPACK_IMPORTED_MODULE_0__.TwinDetailsNav)
/* harmony export */ });
/* harmony import */ var _TwinDetailsNav_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsNav.root */ "./src/apps/explorer/components/twins/details/TwinDetailsNav/TwinDetailsNav.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.reducer.tsx":
/*!**************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.reducer.tsx ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_STATE: () => (/* binding */ INITIAL_STATE),
/* harmony export */   MODULE_NAME: () => (/* binding */ MODULE_NAME),
/* harmony export */   TwinDetailsPanelReducer: () => (/* binding */ TwinDetailsPanelReducer),
/* harmony export */   debugLogging: () => (/* binding */ debugLogging),
/* harmony export */   useTwinDetailsPanelReducer: () => (/* binding */ useTwinDetailsPanelReducer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinDetailsPanel.types */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.types.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");




const debugLogging = true;
const MODULE_NAME = 'TwinDetailsReducer';
const INITIAL_STATE = {
    properties: {
        state: 'uncalled',
    },
    labels: {
        state: 'uncalled',
    },
    attributes: {
        state: 'uncalled',
    },
};
const TwinDetailsPanelReducer = (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft, action) => {
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.getLogger)().info(MODULE_NAME, `Updating TwinDetailsReducer context ${action.type} with payload: `, action.payload);
    switch (action.type) {
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADING_ALL: {
            draft.properties = { state: 'pending' };
            draft.labels = { state: 'pending' };
            draft.attributes = { state: 'pending' };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADING_PROPERTIES: {
            draft.properties = { state: 'pending' };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADED_PROPERTIES: {
            draft.properties = {
                state: 'success',
                data: { ...action.payload.data },
            };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.FAILED_TO_LOAD_PROPERTIES: {
            draft.properties = {
                state: 'error',
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage,
            };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADING_LABELS: {
            draft.labels = { state: 'pending' };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADED_LABELS: {
            draft.labels = {
                state: 'success',
                data: action.payload.data,
            };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.FAILED_TO_LOAD_LABELS: {
            draft.labels = {
                state: 'error',
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage,
            };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADING_ATTRIBUTES: {
            draft.attributes = { state: 'pending' };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.LOADED_ATTRIBUTES: {
            draft.attributes = { state: 'success', data: action.payload.data };
            break;
        }
        case _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_1__.TwinDetailsActionType.FAILED_TO_LOAD_ATTRIBUTES: {
            draft.attributes = {
                state: 'error',
                errorCode: action.payload.errorCode,
                errorMessage: action.payload.errorMessage,
            };
            break;
        }
    }
    return draft;
});
const useTwinDetailsPanelReducer = () => {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(TwinDetailsPanelReducer, INITIAL_STATE);
    return [state, dispatch];
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.render.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.render.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinDetailsPanelRender: () => (/* binding */ useTwinDetailsPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/Card/Card.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-card/lib/components/CardHeader/CardHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");





var TestIds;
(function (TestIds) {
    TestIds["Main"] = "twin-details-overview";
})(TestIds || (TestIds = {}));
const useTwinDetailsPanelRender = ({ state, styles }) => {
    if (state.properties.state === 'uncalled' ||
        state.properties.state === 'pending') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);
    }
    if (state.properties.state === 'error') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: state.properties.errorMessage });
    }
    const properties = state.properties.data;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.Main, className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Card, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.CardHeader, { header: react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.header)) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.panelBody },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.name), value: properties.name }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.id), value: properties.id }),
                    renderLabel(state.labels),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.description), value: properties.description })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.created), value: properties.created?.toISOString() ?? '' }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.updated), value: properties.updated?.toISOString() ?? '' })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, renderAttributes(state.attributes, styles))));
};
const renderLabel = (labels) => {
    if (labels.state === 'uncalled') {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.label), value: '' }));
    }
    if (labels.state === 'pending') {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.label), loading: true, size: 'extra-tiny' }));
    }
    if (labels.state === 'error') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: labels.errorMessage });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.LabelValue, { label: labels.data.length === 1
            ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.label)
            : (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.labels), value: labels.data.join(', ') }));
};
const renderAttributes = (attributes, styles) => {
    if (attributes.state === 'uncalled') {
        return null;
    }
    if (attributes.state === 'error') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: attributes.errorMessage });
    }
    if (attributes.state === 'pending') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);
    }
    if (attributes.data.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.attributes.empty) }));
    }
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'name',
            compare: (a, b) => {
                return a.name.localeCompare(b.name);
            },
            renderCell: (item) => {
                return item.name;
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.attributeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.attributes.name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'value',
            compare: (a, b) => {
                return a.value.toString().localeCompare(b.value.toString());
            },
            renderCell: (item) => {
                return item.valueType !== 'Bool' ? item.value : item.value.toString();
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.attributeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.details_panel.attributes.value)));
            },
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.DataGrid, { items: attributes.data, columns: columns, sortable: true, getRowId: (item) => item.name },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGridHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridHeaderCell, null, renderHeaderCell())))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridRow, { key: rowId }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridCell, null, renderCell(item))))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.root.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.root.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsPanel: () => (/* binding */ TwinDetailsPanel)
/* harmony export */ });
/* harmony import */ var _TwinDetailsPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsPanel.render */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.render.tsx");
/* harmony import */ var _TwinDetailsPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinDetailsPanel.styles */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.styles.ts");
/* harmony import */ var _TwinDetailsPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinDetailsPanel.state */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.state.ts");



const MODULE_NAME = 'TwinDetailsPanel';
const TwinDetailsPanel = (props) => {
    // get state
    const state = (0,_TwinDetailsPanel_state__WEBPACK_IMPORTED_MODULE_2__.useTwinDetailsPanelState)(props);
    // get styles
    const styles = (0,_TwinDetailsPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinDetailsPanel_render__WEBPACK_IMPORTED_MODULE_0__.useTwinDetailsPanelRender)({ state, styles });
};
TwinDetailsPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.state.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.state.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinDetailsPanelState: () => (/* binding */ useTwinDetailsPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinDetailsPanel.types */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.types.ts");
/* harmony import */ var _TwinDetailsPanel_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinDetailsPanel.reducer */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.reducer.tsx");
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinDetailsPanel.state';
const useTwinDetailsPanelState = (props) => {
    // contexts
    // state
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTwinDetailsClient)();
    const [state, dispatch] = (0,_TwinDetailsPanel_reducer__WEBPACK_IMPORTED_MODULE_3__.useTwinDetailsPanelReducer)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const loadProperties = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client, twinId, logConfig) => {
        if (state.properties.state !== 'pending')
            return;
        try {
            const payload = await client.getDetails(twinId, logConfig);
            if (payload?.state === 'success') {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.LOADED_PROPERTIES,
                    payload,
                });
            }
            else {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_PROPERTIES,
                    payload,
                });
            }
        }
        catch (error) {
            dispatch({
                type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_PROPERTIES,
                payload: {
                    state: 'error',
                    errorMessage: error.message,
                    errorCode: '',
                },
            });
        }
    }, [dispatch, state.properties.state]);
    const loadAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client, twinId, logConfig) => {
        if (state.attributes.state !== 'pending')
            return;
        try {
            const payload = await client.getAttributes(twinId, logConfig);
            if (payload?.state === 'success') {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.LOADED_ATTRIBUTES,
                    payload,
                });
            }
            else {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_ATTRIBUTES,
                    payload,
                });
            }
        }
        catch (error) {
            dispatch({
                type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_ATTRIBUTES,
                payload: {
                    state: 'error',
                    errorMessage: error.message,
                    errorCode: '',
                },
            });
        }
    }, [dispatch, state.attributes.state]);
    const loadLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client, twinId, logConfig) => {
        if (state.labels.state !== 'pending')
            return;
        try {
            const payload = await client.getLabels(twinId, logConfig);
            if (payload?.state === 'success') {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.LOADED_LABELS,
                    payload,
                });
            }
            else {
                dispatch({
                    type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_LABELS,
                    payload,
                });
            }
        }
        catch (error) {
            dispatch({
                type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.FAILED_TO_LOAD_LABELS,
                payload: {
                    state: 'error',
                    errorMessage: error.message,
                    errorCode: '',
                },
            });
        }
    }, [dispatch, state.labels.state]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!props.twinId) {
            return; // can't do anything without a twinId
        }
        if (props.twinId && state.properties.state === 'uncalled') {
            // when properties haven't been fetched, everything needs fetched
            dispatch({
                type: _TwinDetailsPanel_types__WEBPACK_IMPORTED_MODULE_2__.TwinDetailsActionType.LOADING_ALL,
            });
        }
        if (client && state.properties.state === 'pending') {
            //go fetch that data
            loadProperties(client, props.twinId, {
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.TwinVisualizationFeature.ExploreTwinDetails,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.ExploreTwinDetailsActivity.TwinDetailsCalled,
            });
        }
        if (client && state.attributes.state === 'pending') {
            loadAttributes(client, props.twinId, {
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.TwinVisualizationFeature.ExploreTwinDetails,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.ExploreTwinDetailsActivity.TwinAttributesCalled,
            });
        }
        if (client && state.labels.state === 'pending') {
            loadLabels(client, props.twinId, {
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.TwinVisualizationFeature.ExploreTwinDetails,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.ExploreTwinDetailsActivity.TwinLabelsCalled,
            });
        }
    }, [
        state,
        props.twinId,
        client,
        dispatch,
        loadProperties,
        loadAttributes,
        loadLabels,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.styles.ts":
/*!************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.styles.ts ***!
  \************************************************************************************************/
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
    Belr9w4: "f1k5ttpu"
  },
  panelBody: {
    mc9l5x: "f22iagw",
    i8kkvl: "f5wq1k0",
    Beiy3e4: "f1063pyq"
  },
  column: {
    Bh6795r: "fqerorx",
    Bnnss6s: "fi64zpg",
    xawz: "f1rmlqtg",
    B4j52fo: "f5ogflp",
    icvyot: "fzkkow9",
    g2u3we: "f68mrw8",
    a9b677: "fr584hq"
  },
  attributeHeader: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1k5ttpu{row-gap:16px;}", ".f5wq1k0{column-gap:16px;}", ".f1063pyq{flex-direction:row;}", ".fqerorx{flex-grow:1;}", ".fi64zpg{flex-shrink:0;}", ".f1rmlqtg{flex-basis:auto;}", ".f5ogflp{border-top-width:1px;}", ".fzkkow9{border-top-style:solid;}", ".f68mrw8{border-top-color:var(--colorNeutralStroke2);}", ".fr584hq{width:50%;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.types.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.types.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsActionType: () => (/* binding */ TwinDetailsActionType)
/* harmony export */ });
var TwinDetailsActionType;
(function (TwinDetailsActionType) {
    TwinDetailsActionType["LOADING_ALL"] = "LOADING_ALL";
    TwinDetailsActionType["LOADING_PROPERTIES"] = "LOADING_PROPERTIES";
    TwinDetailsActionType["LOADED_PROPERTIES"] = "LOADED_PROPERTIES";
    TwinDetailsActionType["FAILED_TO_LOAD_PROPERTIES"] = "FAILED_TO_LOAD_PROPERTIES";
    TwinDetailsActionType["LOADING_LABELS"] = "LOADING_LABELS";
    TwinDetailsActionType["LOADED_LABELS"] = "LOADED_LABELS";
    TwinDetailsActionType["FAILED_TO_LOAD_LABELS"] = "FAILED_TO_LOAD_LABELS";
    TwinDetailsActionType["LOADING_ATTRIBUTES"] = "LOADING_ATTRIBUTES";
    TwinDetailsActionType["LOADED_ATTRIBUTES"] = "LOADED_ATTRIBUTES";
    TwinDetailsActionType["FAILED_TO_LOAD_ATTRIBUTES"] = "FAILED_TO_LOAD_ATTRIBUTES";
})(TwinDetailsActionType || (TwinDetailsActionType = {}));


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/index.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinDetailsPanel/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsPanel: () => (/* reexport safe */ _TwinDetailsPanel_root__WEBPACK_IMPORTED_MODULE_0__.TwinDetailsPanel)
/* harmony export */ });
/* harmony import */ var _TwinDetailsPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsPanel.root */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/TwinDetailsPanel.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.render.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.render.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinEventsPanelRender: () => (/* binding */ useTwinEventsPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EventsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/EventsList */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/index.ts");


var TestIds;
(function (TestIds) {
    TestIds["Main"] = "twin-details-events-panel-main";
})(TestIds || (TestIds = {}));
const useTwinEventsPanelRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.Main, className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_EventsList__WEBPACK_IMPORTED_MODULE_1__.EventsList, { twinId: state.twinId })));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.root.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.root.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinEventsPanel: () => (/* binding */ TwinEventsPanel)
/* harmony export */ });
/* harmony import */ var _TwinEventsPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinEventsPanel.render */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.render.tsx");
/* harmony import */ var _TwinEventsPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinEventsPanel.styles */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.styles.ts");
/* harmony import */ var _TwinEventsPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinEventsPanel.state */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.state.ts");



const MODULE_NAME = 'TwinEventsPanel';
const TwinEventsPanel = (_props) => {
    // get state
    const state = (0,_TwinEventsPanel_state__WEBPACK_IMPORTED_MODULE_2__.useTwinEventsPanelState)(_props);
    // get styles
    const styles = (0,_TwinEventsPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinEventsPanel_render__WEBPACK_IMPORTED_MODULE_0__.useTwinEventsPanelRender)({ state, styles });
};
TwinEventsPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.state.ts":
/*!*********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.state.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinEventsPanelState: () => (/* binding */ useTwinEventsPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinEventsPanel.state';
const useTwinEventsPanelState = (_props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const [explorerRouteProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__.useTwinsExplorerRouteProps)());
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            twinId: explorerRouteProps.twinId,
        };
    }, [explorerRouteProps.twinId]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.styles.ts":
/*!**********************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.styles.ts ***!
  \**********************************************************************************************/
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

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.render.tsx":
/*!****************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.render.tsx ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListTestIds: () => (/* binding */ EventListTestIds),
/* harmony export */   EventTimestampCell: () => (/* binding */ EventTimestampCell),
/* harmony export */   useEventsListRender: () => (/* binding */ useEventsListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-image/lib/components/Image/Image.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _components_EventDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/EventDetails */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _assets_Error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../assets/Error.svg */ "./src/assets/Error.svg");







var EventListTestIds;
(function (EventListTestIds) {
    EventListTestIds["Row"] = "event-row";
    EventListTestIds["List"] = "event-list";
})(EventListTestIds || (EventListTestIds = {}));
const EventTimestampCell = ({ timestamp, }) => {
    const timeSince = timestamp.getTime() > 0 ? Date.now() - timestamp.getTime() : 0;
    const time = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.formatTimeInRelevantUnits)(timeSince, _do_core__WEBPACK_IMPORTED_MODULE_1__.DurationUnits.seconds);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.date.ago, {
        timeWithUnits: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(time.displayStringKey, {
            count: Math.round(time.value),
        }),
    })));
};
const useEventsListRender = ({ state, styles, }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventType',
            compare(a, b) {
                return a.eventType.localeCompare(b.eventType);
            },
            renderCell: (event) => {
                return event.eventType;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'Event type' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventType)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventId',
            compare(a, b) {
                return a.eventId.localeCompare(b.eventId);
            },
            renderCell: (event) => {
                return event.eventId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'ID' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventId)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventSource',
            compare(a, b) {
                if (!a.source)
                    return -1;
                else if (!b.source)
                    return 1;
                return a.source.localeCompare(b.source);
            },
            renderCell: (event) => {
                return event.source;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'Source' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventSource)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventMessage',
            compare(a, b) {
                if (!a.message)
                    return -1;
                else if (!b.message)
                    return 1;
                return a.message.localeCompare(b.message);
            },
            renderCell: (event) => {
                return event.message;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'Message' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventMessage)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventSeverity',
            compare(a, b) {
                if (!a.severity)
                    return -1;
                else if (!b.severity)
                    return 1;
                return a.severity.localeCompare(b.severity);
            },
            renderCell: (event) => {
                return event.severity;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'Severity' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventSeverity)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.createTableColumn)({
            columnId: 'eventTimestamp',
            compare(a, b) {
                if (!a.sourceTimestamp)
                    return -1;
                else if (!b.sourceTimestamp)
                    return 1;
                return a.sourceTimestamp.getTime() - b.sourceTimestamp.getTime();
            },
            renderCell: (event) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventTimestampCell, { timestamp: event.sourceTimestamp, "data-testid": 'TimestampAgo' })),
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": 'Timestamp' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.eventTimestamp)));
            },
        }),
    ];
    if (state.eventRequestState === 'pending' ||
        state.eventRequestState === 'uncalled') {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_4__.Loading, null)));
    }
    if (state.eventRequestState === 'success') {
        if (!state.events.length) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_4__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.twins.events.no_data_message) })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, "data-testid": EventListTestIds.List },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGrid, { items: state.events, columns: columns, sortable: true, getRowId: (event) => event.eventId, className: styles.dataGrid },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridHeader, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridHeaderCell, null, renderHeaderCell())))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridRow, { "data-testid": EventListTestIds.Row, key: rowId, onClick: () => {
                            state.setSelectedEvent(item.eventId);
                        } }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridCell, null, renderCell(item))))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.pageFooter },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_4__.PageFooter, { initialPage: 1, pageCount: state.pageCount, onPageChange: state.setCurrentPage }))),
            state.selectedEvent !== undefined ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_EventDetails__WEBPACK_IMPORTED_MODULE_3__.EventDetails, { eventId: state.selectedEvent, onClose: () => {
                    state.setSelectedEvent(undefined);
                } })) : null));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_4__.EmptyContents, { image: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.Image, { src: _assets_Error_svg__WEBPACK_IMPORTED_MODULE_5__, role: 'presentation' }), header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.error) })));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.root.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.root.tsx ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsList: () => (/* binding */ EventsList)
/* harmony export */ });
/* harmony import */ var _EventsList_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventsList.render */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.render.tsx");
/* harmony import */ var _EventsList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventsList.styles */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.styles.ts");
/* harmony import */ var _EventsList_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventsList.state */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.state.ts");



const MODULE_NAME = 'EventsList';
const EventsList = (_props) => {
    // get state
    const state = (0,_EventsList_state__WEBPACK_IMPORTED_MODULE_2__.useEventsListState)(_props);
    // get styles
    const styles = (0,_EventsList_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_EventsList_render__WEBPACK_IMPORTED_MODULE_0__.useEventsListRender)({ state, styles });
};
EventsList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.state.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.state.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventsListState: () => (/* binding */ useEventsListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'EventsList.state';
const PAGE_SIZE = 10;
const useEventsListState = (props) => {
    // contexts
    // state
    // TODO: change this page to an object with page# and cont. token based pagination defined by the endpoint
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useEventClient)(); // Don't put your hook results into state or they are never reevaluated
    const [eventsDataRequest, setEventsDataRequest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'pending', // TODO: SET TO UNCALLED
    });
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [selectedEvent, setSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const setEventsFromClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId, logConfig) => {
        const results = await client?.getEventsByTwinId(twinId, logConfig);
        if (results && results.state === 'success') {
            setEventsDataRequest({
                state: 'success',
                data: results.data ?? [],
            });
            setPageCount(results.data?.length ? Math.ceil(results.data.length / PAGE_SIZE) : 1);
            debugLogging &&
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Events loaded. {events}', MODULE_NAME, {
                    events: results,
                });
        }
        else {
            setEventsDataRequest({
                state: 'error',
                errorCode: results?.errorCode || '500',
                errorMessage: results?.errorMessage || 'Unknown message',
            });
        }
    }, [client, debugLogging]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (client && props.twinId) {
            setEventsFromClient(props.twinId, {
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_2__.TwinVisualizationFeature.ExploreTwinDetails,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_2__.ExploreTwinDetailsActivity.Event,
            });
        }
    }, [client, props.twinId, setEventsFromClient]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        let shownEvents = [];
        if (eventsDataRequest.state === 'success') {
            shownEvents = eventsDataRequest.data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
        }
        return {
            events: shownEvents,
            eventRequestState: eventsDataRequest.state,
            selectedEvent,
            setSelectedEvent,
            page: currentPage,
            setCurrentPage,
            pageCount: pageCount,
        };
    }, [currentPage, eventsDataRequest, pageCount, selectedEvent]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.styles.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.styles.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    a9b677: "fly5x3f",
    Bqenvij: "f1l02sjl",
    mc9l5x: "f13qh94s"
  },
  columnHeader: {
    Bhrd7zp: "fl43uef"
  },
  pageFooter: {
    z8tnut: "fuq56rw",
    qb2dma: "f1locze1",
    Bdqf98w: "fn9xixx"
  },
  paginationButton: {},
  selectedPage: {
    B2u0y6b: "f1jt17bm",
    Bf4jedk: "f17fgpbq",
    z8tnut: "f10ra9hq",
    Byoj8tv: "f1y2xyjm"
  },
  unselectedPage: {
    B2u0y6b: "f1jt17bm",
    Bf4jedk: "f17fgpbq",
    z8tnut: "f10ra9hq",
    Byoj8tv: "f1y2xyjm"
  },
  dataGrid: {
    a9b677: "fly5x3f"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f13qh94s{display:grid;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fuq56rw{padding-top:24px;}", ".f1locze1{align-self:end;}", ".fn9xixx{justify-self:center;}", ".f1jt17bm{max-width:24px;}", ".f17fgpbq{min-width:24px;}", ".f10ra9hq{padding-top:4px;}", ".f1y2xyjm{padding-bottom:4px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.render.tsx":
/*!******************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.render.tsx ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventPanelTestIds: () => (/* binding */ EventPanelTestIds),
/* harmony export */   useEventDetailsRender: () => (/* binding */ useEventDetailsRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/Drawer/Drawer.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeader/DrawerHeader.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeaderTitle/DrawerHeaderTitle.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerBody/DrawerBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");






var EventPanelTestIds;
(function (EventPanelTestIds) {
    EventPanelTestIds["CloseButton"] = "events-details-panel-close";
    EventPanelTestIds["CopyButton"] = "events-details-panel-copy";
    EventPanelTestIds["DownloadButton"] = "events-details-panel-download";
})(EventPanelTestIds || (EventPanelTestIds = {}));
const useEventDetailsRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_3__.Drawer, { className: styles.root, position: 'end', open: true, modalType: 'non-modal', size: 'medium', onOpenChange: state.onClose },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_4__.DrawerHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_5__.DrawerHeaderTitle, { action: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { "data-testid": EventPanelTestIds.CloseButton, appearance: 'subtle', "aria-label": 'Close', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Dismiss16Regular, null), onClick: state.onClose }) }, `${state.eventId
                ? state.eventId
                : (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.events.no_name)}`)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_8__.DrawerBody, { className: styles.content }, state.event.state === 'uncalled' || state.event.state === 'pending' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null)) : state.event.state === 'error' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: state.event.errorMessage })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.buttonContainer },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Copy16Regular, null), onClick: state.onCopyClick, "data-testid": EventPanelTestIds.CopyButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.copy)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: state.onDownloadClick, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_9__.ArrowDownload16Regular, null), "data-testid": EventPanelTestIds.DownloadButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.download))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.eventDetails },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Editor, { options: {
                        readOnly: true,
                        language: 'json',
                        value: JSON.stringify(state.event.data ?? '', null, 4),
                    } })))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.root.tsx":
/*!****************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.root.tsx ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventDetails: () => (/* binding */ EventDetails)
/* harmony export */ });
/* harmony import */ var _EventDetails_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDetails.render */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.render.tsx");
/* harmony import */ var _EventDetails_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventDetails.styles */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.styles.ts");
/* harmony import */ var _EventDetails_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDetails.state */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.state.ts");



const MODULE_NAME = 'EventDetails';
const EventDetails = (_props) => {
    // get state
    const state = (0,_EventDetails_state__WEBPACK_IMPORTED_MODULE_2__.useEventDetailsState)(_props);
    // get styles
    const styles = (0,_EventDetails_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_EventDetails_render__WEBPACK_IMPORTED_MODULE_0__.useEventDetailsRender)({ state, styles });
};
EventDetails.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.state.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.state.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventDetailsState: () => (/* binding */ useEventDetailsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'EventDetails.state';
const useEventDetailsState = (props) => {
    // contexts
    // state
    const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'uncalled',
    });
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useEventClient)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onCopyClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (event.state === 'success') {
            const eventString = JSON.stringify(event.data, null, '\t');
            navigator.clipboard.writeText(eventString);
        }
    }, [event]);
    const onDownloadClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (event.state === 'success') {
            const eventString = JSON.stringify(event.data, null, '\t');
            const blob = new Blob([eventString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            // Create a temporary anchor element and trigger the download
            const a = document.createElement('a');
            a.href = url;
            a.download = `${props.eventId}.json`;
            a.click();
            URL.revokeObjectURL(url);
            a.remove();
        }
    }, [event, props.eventId]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (client) {
            client.getEventById(props.eventId).then((event) => {
                setEvent(event);
                if (event.state === 'success') {
                    debugLogging &&
                        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Event loaded. {event}', MODULE_NAME, {
                            event: event.data,
                        });
                }
            });
        }
    }, [client, debugLogging, props.eventId]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onClose: props.onClose,
            eventId: props.eventId,
            event: event,
            onCopyClick,
            onDownloadClick,
        };
    }, [event, onCopyClick, onDownloadClick, props.eventId, props.onClose]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.styles.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.styles.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Belr9w4: "f7qsgvn",
    Bqenvij: "f1l02sjl"
  },
  buttonContainer: {
    mc9l5x: "f22iagw",
    i8kkvl: "f4px1ci"
  },
  eventDetails: {
    Bqenvij: "f1l02sjl"
  },
  spinner: {
    Bqenvij: "f1l02sjl"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f7qsgvn{row-gap:24px;}", ".f1l02sjl{height:100%;}", ".f4px1ci{column-gap:8px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/index.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/index.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventDetails: () => (/* reexport safe */ _EventDetails_root__WEBPACK_IMPORTED_MODULE_0__.EventDetails)
/* harmony export */ });
/* harmony import */ var _EventDetails_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDetails.root */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/EventDetails.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/index.ts":
/*!***************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/index.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsList: () => (/* reexport safe */ _EventsList_root__WEBPACK_IMPORTED_MODULE_0__.EventsList)
/* harmony export */ });
/* harmony import */ var _EventsList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventsList.root */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/EventsList.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinEventsPanel/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinEventsPanel/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinEventsPanel: () => (/* reexport safe */ _TwinEventsPanel_root__WEBPACK_IMPORTED_MODULE_0__.TwinEventsPanel)
/* harmony export */ });
/* harmony import */ var _TwinEventsPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinEventsPanel.root */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/TwinEventsPanel.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.render.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.render.tsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinRelatedTwinsPanelRender: () => (/* binding */ useTwinRelatedTwinsPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");




var TestIds;
(function (TestIds) {
    TestIds["Main"] = "twin-details-relatedtwins-main";
    TestIds["Empty"] = "twin-details-relatedtwins-empty";
    TestIds["Loading"] = "twin-details-relatedtwins-loading";
    TestIds["Error"] = "twin-details-relatedtwins-error";
})(TestIds || (TestIds = {}));
const useTwinRelatedTwinsPanelRender = ({ state, styles }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'twinName',
            compare: (a, b) => {
                return a.name.localeCompare(b.name);
            },
            renderCell: (item) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Link, { as: 'a', onClick: () => state.navigateToDetails(item.twinId) }, item.name));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.twin_name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'relationshipName',
            compare: (a, b) => {
                return a.relationshipName.localeCompare(b.relationshipName);
            },
            renderCell: (item) => {
                return item.relationshipName;
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.relationship_name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'relationshipId',
            compare: (a, b) => {
                return a.relationshipId.localeCompare(b.relationshipId);
            },
            renderCell: (item) => {
                return item.relationshipId;
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.relationship_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'origin',
            compare: (a, b) => {
                const ta = a.originDirection === 'source'
                    ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.source)
                    : (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.target);
                const tb = b.originDirection === 'source'
                    ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.source)
                    : (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.target);
                return ta.localeCompare(tb);
            },
            renderCell: (item) => {
                return item.originDirection === 'source'
                    ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.source)
                    : (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.origin_types.target);
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.relationship_type)));
            },
        }),
    ];
    if (state.data.state === 'error') {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { testId: TestIds.Error, message: state.data.errorMessage }));
    }
    if (state.data.state === 'uncalled' || state.data.state === 'pending') {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, { testId: TestIds.Loading });
    }
    const items = state.data.state === 'success' ? state.data.data : [];
    if (items.length === 0) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { testId: TestIds.Empty, header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twin_details.related_twins.empty) }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.DataGrid, { "data-testid": TestIds.Main, items: items, columns: columns, sortable: true, getRowId: (item) => item.id, className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.DataGridHeader, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridHeaderCell, null, renderHeaderCell())))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGridRow, { key: rowId }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridCell, null, renderCell(item)))))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.root.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.root.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinRelatedTwinsPanel: () => (/* binding */ TwinRelatedTwinsPanel)
/* harmony export */ });
/* harmony import */ var _TwinRelatedTwinsPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinRelatedTwinsPanel.render */ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.render.tsx");
/* harmony import */ var _TwinRelatedTwinsPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinRelatedTwinsPanel.styles */ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.styles.ts");
/* harmony import */ var _TwinRelatedTwinsPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinRelatedTwinsPanel.state */ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.state.ts");



const MODULE_NAME = 'TwinRelatedTwinsPanel';
const TwinRelatedTwinsPanel = (_props) => {
    // get state
    const state = (0,_TwinRelatedTwinsPanel_state__WEBPACK_IMPORTED_MODULE_2__.useTwinRelatedTwinsPanelState)(_props);
    // get styles
    const styles = (0,_TwinRelatedTwinsPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinRelatedTwinsPanel_render__WEBPACK_IMPORTED_MODULE_0__.useTwinRelatedTwinsPanelRender)({ state, styles });
};
TwinRelatedTwinsPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.state.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.state.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinRelatedTwinsPanelState: () => (/* binding */ useTwinRelatedTwinsPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinRelatedTwinsPanel.state';
const useTwinRelatedTwinsPanelState = (props) => {
    // contexts
    // state
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'uncalled',
    });
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const [explorerRouteProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__.useTwinsExplorerRouteProps)());
    const detailsUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(`${explorerRouteProps.twinsPath}/details`);
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    // callbacks
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTwinDetailsClient)();
    const navigateToDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((twinId) => {
        navigation?.navigate({ path: `${detailsUrl.current}/${twinId}` });
    }, [navigation]);
    // side effects
    const loadRelationships = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (client, twinId, logConfig) => {
        if (data.state === 'pending') {
            const relationships = await client.getRelationships(twinId, logConfig);
            setData(relationships);
        }
    }, [data.state]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (props.twinId) {
            if (client && data.state === 'uncalled') {
                setData({ state: 'pending' });
            }
            if (client && data.state === 'pending') {
                loadRelationships(client, props.twinId, {
                    featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.TwinVisualizationFeature.ExploreTwinDetails,
                    activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.ExploreTwinDetailsActivity.RelatedTwin,
                });
            }
        }
    }, [client, data.state, loadRelationships, props.twinId]);
    // result
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state: data,
        });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            data,
            navigateToDetails,
        };
    }, [navigateToDetails, data]);
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.styles.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.styles.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  header: {
    Bhrd7zp: "fl43uef"
  }
}, {
  d: [".fl43uef{font-weight:var(--fontWeightSemibold);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/index.ts":
/*!***********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinRelatedTwinsPanel: () => (/* reexport safe */ _TwinRelatedTwinsPanel_root__WEBPACK_IMPORTED_MODULE_0__.TwinRelatedTwinsPanel)
/* harmony export */ });
/* harmony import */ var _TwinRelatedTwinsPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinRelatedTwinsPanel.root */ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/TwinRelatedTwinsPanel.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.render.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.render.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinTimeSeriesPanelRender: () => (/* binding */ useTwinTimeSeriesPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TwinTimeSeriesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TwinTimeSeriesList */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/index.ts");
/* harmony import */ var _TimeSeriesChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../TimeSeriesChart */ "./src/apps/explorer/components/TimeSeriesChart/index.ts");



var TestIds;
(function (TestIds) {
    TestIds["Main"] = "twin-details-time-series-panel-main";
})(TestIds || (TestIds = {}));
const useTwinTimeSeriesPanelRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.Main, className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.list },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TwinTimeSeriesList__WEBPACK_IMPORTED_MODULE_1__.TwinTimeSeriesList, null)),
        state.selectedTimeSeries.length != 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.chartContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_2__.TimeSeriesChart, null))) : null));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.root.tsx":
/*!*****************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.root.tsx ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinTimeSeriesPanel: () => (/* binding */ TwinTimeSeriesPanel)
/* harmony export */ });
/* harmony import */ var _TwinTimeSeriesPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinTimeSeriesPanel.render */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.render.tsx");
/* harmony import */ var _TwinTimeSeriesPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinTimeSeriesPanel.styles */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.styles.ts");
/* harmony import */ var _TwinTimeSeriesPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinTimeSeriesPanel.state */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.state.tsx");



const MODULE_NAME = 'TwinTimeSeriesPanel';
const TwinTimeSeriesPanel = (_props) => {
    // get state
    const state = (0,_TwinTimeSeriesPanel_state__WEBPACK_IMPORTED_MODULE_2__.useTwinTimeSeriesPanelState)(_props);
    // get styles
    const styles = (0,_TwinTimeSeriesPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinTimeSeriesPanel_render__WEBPACK_IMPORTED_MODULE_0__.useTwinTimeSeriesPanelRender)({ styles, state });
};
TwinTimeSeriesPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.state.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.state.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinTimeSeriesPanelState: () => (/* binding */ useTwinTimeSeriesPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinTimeSeriesPanel.state';
const useTwinTimeSeriesPanelState = (_props) => {
    // contexts
    const { selectedTimeSeries } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedTimeSeries,
        };
    }, [selectedTimeSeries]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.styles.ts":
/*!******************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.styles.ts ***!
  \******************************************************************************************************/
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
    Belr9w4: "f7qsgvn"
  },
  chartContainer: {
    Bh6795r: "f95dn2i"
  },
  list: {
    Bh6795r: "fqerorx"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f7qsgvn{row-gap:24px;}", ".f95dn2i{flex-grow:4;}", ".fqerorx{flex-grow:1;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.render.tsx":
/*!************************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.render.tsx ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesListTestIds: () => (/* binding */ TimeSeriesListTestIds),
/* harmony export */   useTwinTimeSeriesListRender: () => (/* binding */ useTwinTimeSeriesListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");






var TimeSeriesListTestIds;
(function (TimeSeriesListTestIds) {
    TimeSeriesListTestIds["Row"] = "time-series-row";
    TimeSeriesListTestIds["List"] = "time-series-list";
})(TimeSeriesListTestIds || (TimeSeriesListTestIds = {}));
const useTwinTimeSeriesListRender = ({ state, styles }) => {
    // Column definitions
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'timeSeriesName',
            compare(a, b) {
                return a.displayName?.localeCompare(b.displayName) ?? -1;
            },
            renderCell: (timeSeries) => {
                return timeSeries.displayName;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'timeSeriesId',
            compare(a, b) {
                return (a.timeSeriesDataPointId?.localeCompare(b.timeSeriesDataPointId) ?? -1);
            },
            renderCell: (timeSeries) => {
                return timeSeries.timeSeriesDataPointId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'twinId',
            compare(a, b) {
                return a.twinId?.localeCompare(b.twinId) ?? -1;
            },
            renderCell: (timeSeries) => {
                return timeSeries.twinId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.twin_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'formulas',
            compare(a, b) {
                return a.source?.localeCompare(b.source) ?? -1;
            },
            renderCell: (timeSeries) => {
                return timeSeries.source === _do_core__WEBPACK_IMPORTED_MODULE_3__.TimeSeriesSourceType.Calculated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Link, { as: 'a', onClick: (event) => {
                        event.stopPropagation();
                        state.navigateToFormulaList(timeSeries.twinId);
                    } }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.formulas.list.formulas_link_placeholder))) : ('-');
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.formula)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'description',
            compare(a, b) {
                return a.description?.localeCompare(b.description) ?? -1;
            },
            renderCell: (timeSeries) => {
                return timeSeries.description;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.description)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'unitOfMeasure',
            compare(a, b) {
                return a.uom?.localeCompare(b.uom) ?? -1;
            },
            renderCell: (timeSeries) => {
                return timeSeries.uom;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.time_series.unit_of_measure)));
            },
        }),
    ];
    if (state.timeSeriesRequestState === 'pending' ||
        state.timeSeriesRequestState === 'uncalled' ||
        state.isLoadingMore) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null)));
    }
    if (state.timeSeriesRequestState === 'success') {
        if (!state.timeSeries.length) {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.time_series.time_series_list.empty_state) })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root }, state.timeSeries.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TimeSeriesListTestIds.List },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGrid, { items: state.timeSeries, columns: columns, sortable: true, selectionMode: 'multiselect', selectedItems: state.selectedItems, onSelectionChange: state.setSelectedTimeSeries, getRowId: (timeSeries) => `${timeSeries.timeSeriesDataPointId}${_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__.TIME_SERIES_DELIMETER}${timeSeries.twinId}` // Emoji delimeter to avoid other common GUID formats
                , className: styles.dataGrid },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridHeader, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridHeaderCell, null, renderHeaderCell())))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridRow, { "data-testid": TimeSeriesListTestIds.Row, key: rowId }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridCell, null, renderCell(item))))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.pageFooter },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.PageFooter, { initialPage: state.page, pageCount: state.pageCount, onPageChange: (page) => state.setCurrentPage(page) })))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.time_series.time_series_list.empty_state) }))));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, { message: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.error) })));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.root.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.root.tsx ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinTimeSeriesList: () => (/* binding */ TwinTimeSeriesList)
/* harmony export */ });
/* harmony import */ var _TwinTimeSeriesList_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinTimeSeriesList.render */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.render.tsx");
/* harmony import */ var _TwinTimeSeriesList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinTimeSeriesList.styles */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.styles.ts");
/* harmony import */ var _TwinTimeSeriesList_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinTimeSeriesList.state */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.state.ts");



const MODULE_NAME = 'TwinTimeSeriesList';
const TwinTimeSeriesList = (props) => {
    // get state
    const state = (0,_TwinTimeSeriesList_state__WEBPACK_IMPORTED_MODULE_2__.useTwinTimeSeriesListState)(props);
    // get styles
    const styles = (0,_TwinTimeSeriesList_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TwinTimeSeriesList_render__WEBPACK_IMPORTED_MODULE_0__.useTwinTimeSeriesListRender)({ state, styles });
};
TwinTimeSeriesList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.state.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.state.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinTimeSeriesListState: () => (/* binding */ useTwinTimeSeriesListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");
/* harmony import */ var _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../models/TwinVisualizationCertifiedEvents */ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinTimeSeriesList.state';
const EXPANDED_PAGE_SIZE = 10;
const COMPACT_PAGE_SIZE = 3;
const useTwinTimeSeriesListState = (_props) => {
    // contexts
    const { selectedTimeSeries, setSelectedTimeSeries } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesContext)();
    const [explorerRouteProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_3__.useTwinsExplorerRouteProps)());
    // state
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTimeSeriesClient)();
    const [timeseriesDataRequest, setTimeseriesDataRequest] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'pending',
    });
    const [isLoadingMore, setIsLoadingMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [selectedItems, setSelectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
    const [continuationToken, setContinuationToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [bufferedItems, setBufferedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedTimeSeries.length === 0 ? EXPANDED_PAGE_SIZE : COMPACT_PAGE_SIZE);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    const routeProps = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useAppRouteProps)();
    // callbacks
    const onTimeSeriesSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_e, data) => {
        setSelectedTimeSeries(data.selectedItems);
        setSelectedItems(data.selectedItems);
    }, [setSelectedTimeSeries]);
    const fetchTimeSeries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId, logConfig, continuationToken) => {
        return await client?.getTimeSeriesByTwinId(twinId, logConfig, continuationToken);
    }, [client]);
    const parseTimeSeriesResults = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((results, isCanceled) => {
        if (isCanceled) {
            return;
        }
        if (results && results.state === 'success') {
            setContinuationToken(results.data.continuationToken);
            setBufferedItems((currentBufferedItems) => currentBufferedItems + results.data.data.length);
            let existingData = timeseriesDataRequest.state === 'success'
                ? timeseriesDataRequest.data
                : [];
            setTimeseriesDataRequest((currentDataRequest) => {
                existingData =
                    currentDataRequest.state === 'success'
                        ? currentDataRequest.data
                        : [];
                return {
                    state: 'success',
                    // Type assertion is safe because we know the state is 'success'
                    data: existingData.concat(results.data.data),
                };
            });
            setPageCount(existingData.length
                ? Math.ceil((existingData.length + results.data.data.length) / pageSize)
                : 1);
            debugLogging &&
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('TimeSeries loaded. {timeSeries}', MODULE_NAME, {
                    timeSeries: results,
                });
        }
        else {
            setTimeseriesDataRequest({
                state: 'error',
                errorCode: results?.errorCode || '500',
                errorMessage: results?.errorMessage || 'Unknown message',
            });
        }
    }, [debugLogging, pageSize, timeseriesDataRequest]);
    const navigateToFormulaList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId) => {
        if (!twinId)
            return;
        const path = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getNestedPage)('insights', routeProps.artifactId);
        await navigation?.navigate({ path: `${path}/${twinId}/list` });
    }, [routeProps.artifactId, navigation]);
    // side effects
    // Fetch initial data
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let isCanceled = false;
        if (client && explorerRouteProps.twinId) {
            fetchTimeSeries(explorerRouteProps.twinId, {
                featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.TwinVisualizationFeature.ExploreTwinDetails,
                activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.ExploreTwinDetailsActivity.TimeSeriesDataPoints,
            }).then((results) => {
                if (results) {
                    parseTimeSeriesResults(results, isCanceled);
                }
                else {
                    // No results
                    setTimeseriesDataRequest({
                        state: 'error',
                        errorCode: '500',
                        errorMessage: 'Unknown message',
                    });
                }
            });
        }
        return () => {
            // cleanup
            isCanceled = true;
        };
        // This is required to avoid updates due to the fetch and parse callbacks
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client, debugLogging, explorerRouteProps.twinId]);
    // Fetch more data if needed
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let isCanceled = false;
        const nearEnd = currentPage * pageSize >= bufferedItems - pageSize;
        if (nearEnd && continuationToken) {
            if (client && explorerRouteProps.twinId) {
                setIsLoadingMore(true);
                fetchTimeSeries(explorerRouteProps.twinId, {
                    featureName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.TwinVisualizationFeature.ExploreTwinDetails,
                    activityName: _models_TwinVisualizationCertifiedEvents__WEBPACK_IMPORTED_MODULE_4__.ExploreTwinDetailsActivity.TimeSeriesDataPoints,
                }, continuationToken).then((results) => {
                    setIsLoadingMore(false);
                    if (results) {
                        parseTimeSeriesResults(results, isCanceled);
                    }
                    else {
                        // No results
                        setTimeseriesDataRequest({
                            state: 'error',
                            errorCode: '500',
                            errorMessage: 'Unknown message',
                        });
                    }
                });
            }
        }
        return () => {
            // cleanup
            isCanceled = true;
        };
        // This is required to avoid updates due to the fetch and parse callbacks
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [client, currentPage, explorerRouteProps.twinId, pageSize]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (timeseriesDataRequest.state === 'success') {
            const timeSeries = timeseriesDataRequest.data ?? [];
            if (selectedTimeSeries.length === 0) {
                setPageSize(EXPANDED_PAGE_SIZE);
                const pageCount = Math.ceil(timeSeries.length / EXPANDED_PAGE_SIZE);
                setPageCount(pageCount);
                // Since de-selecting all timeseries will reduce page #, make sure we're not on a page that no longer exists
                if (currentPage > pageCount) {
                    setCurrentPage(pageCount);
                }
            }
            else {
                if (pageSize === EXPANDED_PAGE_SIZE) {
                    setPageSize(COMPACT_PAGE_SIZE);
                    setPageCount(Math.ceil(timeSeries.length / COMPACT_PAGE_SIZE));
                }
            }
        }
    }, [currentPage, pageSize, selectedTimeSeries.length, timeseriesDataRequest]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        let shownTimeSeries = [];
        if (timeseriesDataRequest.state === 'success') {
            shownTimeSeries = timeseriesDataRequest.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        }
        return {
            timeSeries: shownTimeSeries,
            timeSeriesRequestState: timeseriesDataRequest.state,
            page: currentPage,
            setCurrentPage,
            pageCount,
            setPageCount,
            selectedItems,
            setSelectedTimeSeries: onTimeSeriesSelected,
            isLoadingMore,
            navigateToFormulaList,
        };
    }, [
        currentPage,
        isLoadingMore,
        onTimeSeriesSelected,
        pageCount,
        pageSize,
        selectedItems,
        timeseriesDataRequest,
        navigateToFormulaList,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.styles.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.styles.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    a9b677: "fly5x3f",
    Bqenvij: "f1l02sjl",
    mc9l5x: "f13qh94s"
  },
  columnHeader: {
    Bhrd7zp: "fl43uef"
  },
  pageFooter: {
    z8tnut: "fuq56rw",
    qb2dma: "f1locze1",
    Bdqf98w: "fn9xixx"
  },
  dataGrid: {
    a9b677: "fly5x3f"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f13qh94s{display:grid;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fuq56rw{padding-top:24px;}", ".f1locze1{align-self:end;}", ".fn9xixx{justify-self:center;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/index.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/index.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinTimeSeriesList: () => (/* reexport safe */ _TwinTimeSeriesList_root__WEBPACK_IMPORTED_MODULE_0__.TwinTimeSeriesList)
/* harmony export */ });
/* harmony import */ var _TwinTimeSeriesList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinTimeSeriesList.root */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/components/TwinTimeSeriesList/TwinTimeSeriesList.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinTimeSeriesPanel: () => (/* reexport safe */ _TwinTimeSeriesPanel_root__WEBPACK_IMPORTED_MODULE_0__.TwinTimeSeriesPanel)
/* harmony export */ });
/* harmony import */ var _TwinTimeSeriesPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinTimeSeriesPanel.root */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/TwinTimeSeriesPanel.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/details/index.ts":
/*!*************************************************************!*\
  !*** ./src/apps/explorer/components/twins/details/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinDetailsNav: () => (/* reexport safe */ _TwinDetailsNav__WEBPACK_IMPORTED_MODULE_4__.TwinDetailsNav),
/* harmony export */   TwinDetailsPanel: () => (/* reexport safe */ _TwinDetailsPanel__WEBPACK_IMPORTED_MODULE_0__.TwinDetailsPanel),
/* harmony export */   TwinEventsPanel: () => (/* reexport safe */ _TwinEventsPanel__WEBPACK_IMPORTED_MODULE_1__.TwinEventsPanel),
/* harmony export */   TwinRelatedTwinsPanel: () => (/* reexport safe */ _TwinRelatedTwinsPanel__WEBPACK_IMPORTED_MODULE_2__.TwinRelatedTwinsPanel),
/* harmony export */   TwinTimeSeriesPanel: () => (/* reexport safe */ _TwinTimeSeriesPanel__WEBPACK_IMPORTED_MODULE_3__.TwinTimeSeriesPanel)
/* harmony export */ });
/* harmony import */ var _TwinDetailsPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinDetailsPanel */ "./src/apps/explorer/components/twins/details/TwinDetailsPanel/index.ts");
/* harmony import */ var _TwinEventsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinEventsPanel */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/index.ts");
/* harmony import */ var _TwinRelatedTwinsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinRelatedTwinsPanel */ "./src/apps/explorer/components/twins/details/TwinRelatedTwinsPanel/index.ts");
/* harmony import */ var _TwinTimeSeriesPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinTimeSeriesPanel */ "./src/apps/explorer/components/twins/details/TwinTimeSeriesPanel/index.ts");
/* harmony import */ var _TwinDetailsNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TwinDetailsNav */ "./src/apps/explorer/components/twins/details/TwinDetailsNav/index.ts");







/***/ }),

/***/ "./src/apps/explorer/contexts/TimeSeriesContext.tsx":
/*!**********************************************************!*\
  !*** ./src/apps/explorer/contexts/TimeSeriesContext.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TIME_SERIES_DELIMETER: () => (/* binding */ TIME_SERIES_DELIMETER),
/* harmony export */   TimeSeriesContext: () => (/* binding */ TimeSeriesContext),
/* harmony export */   TimeSeriesContextProvider: () => (/* binding */ TimeSeriesContextProvider),
/* harmony export */   getDateTimeFormatted: () => (/* binding */ getDateTimeFormatted),
/* harmony export */   useTimeSeriesContext: () => (/* binding */ useTimeSeriesContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TimeSeriesChart_components_LineChart_components_LineChartControls_LineChartControls_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.render */ "./src/apps/explorer/components/TimeSeriesChart/components/LineChart/components/LineChartControls/LineChartControls.render.tsx");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const TimeSeriesContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
const useTimeSeriesContext = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimeSeriesContext);
    // istanbul ignore next
    if (!context) {
        throw new Error('useTimeSeriesContext must be used within a TimeSeriesContextProvider');
    }
    return context;
};
const getSingleDigitFormatted = (date) => {
    return date < 10 ? '0' + date : date.toString();
};
const getDateTimeFormatted = (date) => {
    // yyyy-MM-ddThh:mm
    return (date.getFullYear() +
        '-' +
        getSingleDigitFormatted(date.getMonth() + 1) +
        '-' +
        getSingleDigitFormatted(date.getDate()) +
        'T' +
        getSingleDigitFormatted(date.getHours()) +
        ':' +
        getSingleDigitFormatted(date.getMinutes()));
};
const getDateMinusDays = (days) => {
    const date = new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000);
    // yyyy-MM-ddThh:mm
    const fullDate = getDateTimeFormatted(date);
    return fullDate;
};
const TIME_SERIES_DELIMETER = '🪲';
const TimeSeriesContextProvider = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const { children, selectedTimeSeries } = props;
    // state
    const [aggregationMethod, setAggregationMethod] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('average');
    // Default to past 7 days
    const [startTime, setStartTime] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => getDateMinusDays(7));
    const [endTime, setEndTime] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => getDateMinusDays(0));
    const [binSelectedOption, setBinSelectedOption] = react__WEBPACK_IMPORTED_MODULE_0___default().useState((0,_components_TimeSeriesChart_components_LineChart_components_LineChartControls_LineChartControls_render__WEBPACK_IMPORTED_MODULE_1__.getIntervalOptions)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)[4].text);
    const [binInterval, setBinInterval] = react__WEBPACK_IMPORTED_MODULE_0___default().useState((0,_components_TimeSeriesChart_components_LineChart_components_LineChartControls_LineChartControls_render__WEBPACK_IMPORTED_MODULE_1__.getIntervalOptions)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)[4].key);
    const [stateSelectedTimeSeries, setStateSelectedTimeSeries] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(selectedTimeSeries || []);
    // callbacks
    const setIdsFromDataGridSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((timeSeriesDataGridIds) => {
        const datagridSelectedTimeSeries = [];
        timeSeriesDataGridIds.forEach((ts) => {
            const [timeSeriesId, twinId] = ts.split(TIME_SERIES_DELIMETER);
            datagridSelectedTimeSeries.push({
                timeSeriesDatapointId: timeSeriesId,
                twinId: twinId,
            });
        });
        setStateSelectedTimeSeries(datagridSelectedTimeSeries);
    }, []);
    // Dropdown function types (event: SelectionEvents, data: OptionOnSelectData) are not exposed by Fluent
    const setBinFromDropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_e, data) => {
        setBinSelectedOption(data.optionText);
        setBinInterval(data.optionValue);
    }, []);
    const providerProps = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
        return {
            selectedTimeSeries: stateSelectedTimeSeries,
            setSelectedTimeSeries: setIdsFromDataGridSelection,
            aggregationMethod,
            setAggregationMethod,
            startTime,
            endTime,
            setStartTime,
            setEndTime,
            binSelectedOption,
            binInterval,
            setBinInterval: setBinFromDropdown,
        };
    }, [
        aggregationMethod,
        binInterval,
        binSelectedOption,
        endTime,
        setBinFromDropdown,
        setIdsFromDataGridSelection,
        startTime,
        stateSelectedTimeSeries,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimeSeriesContext.Provider, { value: providerProps }, children));
});


/***/ }),

/***/ "./src/apps/explorer/contexts/TimeSeriesContext.types.ts":
/*!***************************************************************!*\
  !*** ./src/apps/explorer/contexts/TimeSeriesContext.types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartType: () => (/* binding */ ChartType)
/* harmony export */ });
var ChartType;
(function (ChartType) {
    ChartType["line"] = "line";
    ChartType["scatter"] = "scatter";
})(ChartType || (ChartType = {}));


/***/ }),

/***/ "./src/apps/explorer/hooks/routeProps/useExplorerRouteProps.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/explorer/hooks/routeProps/useExplorerRouteProps.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExplorerRouteProps: () => (/* binding */ useExplorerRouteProps)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");

const useExplorerRouteProps = () => {
    const appRouteProps = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useAppRouteProps)();
    const props = {
        ...appRouteProps,
        explorerPath: _do_core__WEBPACK_IMPORTED_MODULE_0__.ExtensionRoutes.explorer(appRouteProps.segments[1]),
        tabName: appRouteProps.segments[3] || 'twins',
    };
    return props;
};


/***/ }),

/***/ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinsExplorerRouteProps: () => (/* binding */ useTwinsExplorerRouteProps)
/* harmony export */ });
/* harmony import */ var _useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useExplorerRouteProps.ts");

const useTwinsExplorerRouteProps = () => {
    const explorerRouteProps = (0,_useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_0__.useExplorerRouteProps)();
    const routeProps = {
        ...explorerRouteProps,
        twinsPath: `${explorerRouteProps.explorerPath}/twins`,
    };
    if (!routeProps.pageName || routeProps.pageName.length === 0) {
        const pageName = routeProps.segments && routeProps.segments[4];
        routeProps.pageName = pageName || 'hierarchy';
    }
    if (routeProps.pageName === 'details') {
        return {
            ...routeProps,
            twinId: routeProps.segments[5],
            panelName: (routeProps.segments[6] || 'details'),
            twinDetailsPath: `${routeProps.twinsPath}/details/${routeProps.segments[5]}`,
        };
    }
    if (routeProps.pageName === 'list') {
        return {
            ...routeProps,
            pageNumber: parseInt(routeProps.segments[5]) || 0,
        };
    }
    return routeProps;
};


/***/ }),

/***/ "./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts":
/*!**********************************************************************!*\
  !*** ./src/apps/explorer/models/TwinVisualizationCertifiedEvents.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreHierarchyActivity: () => (/* binding */ ExploreHierarchyActivity),
/* harmony export */   ExploreTimeSeriesAttribute: () => (/* binding */ ExploreTimeSeriesAttribute),
/* harmony export */   ExploreTimeSeriesTimeRangeBuckets: () => (/* binding */ ExploreTimeSeriesTimeRangeBuckets),
/* harmony export */   ExploreTimeseriesActivity: () => (/* binding */ ExploreTimeseriesActivity),
/* harmony export */   ExploreTwinDetailsActivity: () => (/* binding */ ExploreTwinDetailsActivity),
/* harmony export */   TwinVisualizationFeature: () => (/* binding */ TwinVisualizationFeature)
/* harmony export */ });
/**
 * See README in the telemetry directory for more on how to instrument certified events
 */
var TwinVisualizationFeature;
(function (TwinVisualizationFeature) {
    TwinVisualizationFeature["ExploreHierarchy"] = "DOExploreTwinHierarchy";
    TwinVisualizationFeature["ExploreTimeseries"] = " DOExploreTimeSeries";
    TwinVisualizationFeature["ExploreTwinDetails"] = "DOExploreTwinDetails";
})(TwinVisualizationFeature || (TwinVisualizationFeature = {}));
var ExploreHierarchyActivity;
(function (ExploreHierarchyActivity) {
    ExploreHierarchyActivity["RootsCalled"] = "RootsCalled";
    ExploreHierarchyActivity["ChildrenCalled"] = "ChildrenCalled";
    ExploreHierarchyActivity["ExpandClicked"] = "ExpandClicked";
    ExploreHierarchyActivity["ShowMoreClicked"] = "ShowMoreClicked";
})(ExploreHierarchyActivity || (ExploreHierarchyActivity = {}));
var ExploreTimeseriesActivity;
(function (ExploreTimeseriesActivity) {
    ExploreTimeseriesActivity["GetDataPointsCalled"] = "GetDataPointsCalled";
    ExploreTimeseriesActivity["ChartRendered"] = "ChartRendered";
})(ExploreTimeseriesActivity || (ExploreTimeseriesActivity = {}));
var ExploreTwinDetailsActivity;
(function (ExploreTwinDetailsActivity) {
    ExploreTwinDetailsActivity["TwinLabelsCalled"] = "TwinLabelsCalled";
    ExploreTwinDetailsActivity["TwinAttributesCalled"] = "TwinAttributesCalled";
    ExploreTwinDetailsActivity["TwinDetailsCalled"] = "TwinDetailsCalled";
    ExploreTwinDetailsActivity["Event"] = "EventsCalled";
    ExploreTwinDetailsActivity["RelatedTwin"] = "RelatedTwinsCalled";
    ExploreTwinDetailsActivity["TimeSeriesDataPoints"] = "TimeSeriesDataPointsCalled";
})(ExploreTwinDetailsActivity || (ExploreTwinDetailsActivity = {}));
var ExploreTimeSeriesAttribute;
(function (ExploreTimeSeriesAttribute) {
    ExploreTimeSeriesAttribute["LinesDrawn"] = "LinesDrawn";
    ExploreTimeSeriesAttribute["TimeSeriesRange"] = "TimeSeriesRange";
})(ExploreTimeSeriesAttribute || (ExploreTimeSeriesAttribute = {}));
var ExploreTimeSeriesTimeRangeBuckets;
(function (ExploreTimeSeriesTimeRangeBuckets) {
    ExploreTimeSeriesTimeRangeBuckets["TimeSeriesUnder1d"] = "TimeSeriesUnder1d";
    ExploreTimeSeriesTimeRangeBuckets["TimeSeriesOver1d"] = "TimeSeriesOver1d";
    ExploreTimeSeriesTimeRangeBuckets["TimeSeriesOver1wk"] = "TimeSeriesOver1wk";
    ExploreTimeSeriesTimeRangeBuckets["TimeSeriesOver30d"] = "TimeSeriesOver30d";
    ExploreTimeSeriesTimeRangeBuckets["TimeSeriesTimeRangeInvalid"] = "TimeSeriesTimeRangeInvalid";
})(ExploreTimeSeriesTimeRangeBuckets || (ExploreTimeSeriesTimeRangeBuckets = {}));


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.render.tsx":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.render.tsx ***!
  \*********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExpressionEditorContextMenuRender: () => (/* binding */ useExpressionEditorContextMenuRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroup/MenuGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroupHeader/MenuGroupHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const useExpressionEditorContextMenuRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.MenuList, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroupHeader, { className: styles.groupHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.context_menu.input_properties)),
                state.inputProperties.map((property) => (
                // TODO: Add icons to menu items
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { key: property.id, onClick: (event) => state.onMenuItemSelect(property, event) }, property.displayName)))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroupHeader, { className: styles.groupHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.context_menu.functions)),
                state.functions.map((func) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { key: func.id, onClick: (event) => state.onMenuItemSelect(func, event) }, func.displayName)))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.MenuGroup, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroupHeader, { className: styles.groupHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.context_menu.expressions)),
                state.expressions.map((expression) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { key: expression.id, onClick: (event) => state.onMenuItemSelect(expression, event) }, expression.displayName)))))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.root.tsx":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.root.tsx ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionEditorContextMenu: () => (/* binding */ ExpressionEditorContextMenu)
/* harmony export */ });
/* harmony import */ var _ExpressionEditorContextMenu_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressionEditorContextMenu.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.render.tsx");
/* harmony import */ var _ExpressionEditorContextMenu_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressionEditorContextMenu.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.styles.ts");
/* harmony import */ var _ExpressionEditorContextMenu_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionEditorContextMenu.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.state.ts");



const MODULE_NAME = 'ExpressionEditorContextMenu';
const ExpressionEditorContextMenu = (props) => {
    // get state
    const state = (0,_ExpressionEditorContextMenu_state__WEBPACK_IMPORTED_MODULE_2__.useExpressionEditorContextMenuState)(props);
    // get styles
    const styles = (0,_ExpressionEditorContextMenu_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_ExpressionEditorContextMenu_render__WEBPACK_IMPORTED_MODULE_0__.useExpressionEditorContextMenuRender)({ state, styles });
};
ExpressionEditorContextMenu.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.state.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.state.ts ***!
  \*******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExpressionEditorContextMenuState: () => (/* binding */ useExpressionEditorContextMenuState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'ExpressionEditorContextMenu.state';
const getInputPropertiesFromState = (formulaElements) => {
    return formulaElements.filter((element) => element.type === 'InputProperty');
};
const getFunctionsFromState = (formulaElements) => {
    return formulaElements.filter((element) => element.type === 'Function');
};
const getExpressionsFromState = (formulaElements, excludeExpressionId) => {
    return formulaElements.filter((element) => element.type === 'Expression' && element.id !== excludeExpressionId);
};
const useExpressionEditorContextMenuState = (props) => {
    // contexts
    const { pageState } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    const formulaElements = pageState.currentFormula.elements;
    const selectedFormulaElementId = pageState.currentFormula.selectedElementId
        ? pageState.currentFormula.selectedElementId
        : undefined;
    const [inputProperties, setInputProperties] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInputPropertiesFromState(formulaElements || []));
    const [functions, setFunctions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getFunctionsFromState(formulaElements || []));
    const [expressions, setExpressions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getExpressionsFromState(formulaElements || [], selectedFormulaElementId));
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onMenuItemSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((selectedElement, event) => {
        // Check if the event is a real mouse click
        if (event?.detail === 0) {
            // This is a click triggered by a keyboard press
            // Prevent the function from executing further
            return;
        }
        if (selectedElement) {
            props.handleMenuItemSelect(selectedElement.displayName);
        }
    }, [props]);
    // side effects
    // update input properties and functions when formula elements change
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (formulaElements) {
            const inputProperties = getInputPropertiesFromState(formulaElements);
            const functions = getFunctionsFromState(formulaElements);
            const expressions = getExpressionsFromState(formulaElements, selectedFormulaElementId);
            setInputProperties(inputProperties);
            setFunctions(functions);
            setExpressions(expressions);
        }
    }, [formulaElements, selectedFormulaElementId]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            inputProperties,
            functions,
            expressions,
            onMenuItemSelect,
        };
    }, [inputProperties, functions, expressions, onMenuItemSelect]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.styles.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.styles.ts ***!
  \********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l",
    Beiy3e4: "f1vx9l62"
  },
  groupHeader: {
    uwmqm3: ["fycuoez", "f8wuabp"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f1vx9l62{flex-direction:column;}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/index.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/index.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionEditorContextMenu: () => (/* reexport safe */ _ExpressionEditorContextMenu_root__WEBPACK_IMPORTED_MODULE_0__.ExpressionEditorContextMenu)
/* harmony export */ });
/* harmony import */ var _ExpressionEditorContextMenu_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressionEditorContextMenu.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/ExpressionEditorContextMenu/ExpressionEditorContextMenu.root.tsx");



/***/ }),

/***/ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.reducer.tsx":
/*!****************************************************************************************!*\
  !*** ./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.reducer.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPageContextReducer: () => (/* binding */ InsightsPageContextReducer),
/* harmony export */   MODULE_NAME: () => (/* binding */ MODULE_NAME),
/* harmony export */   debugLogging: () => (/* binding */ debugLogging)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




const debugLogging = true;
const MODULE_NAME = 'InsightsPageContextReducer';
const InsightsPageContextReducer = (0,immer__WEBPACK_IMPORTED_MODULE_3__.produce)((draft, action) => {
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().info(MODULE_NAME, `Updating InsightsPageContextReducer context ${action.type} with payload: `, action.payload);
    const getSelectedElement = () => {
        const formula = draft.currentFormula;
        const selectedElementId = formula.selectedElementId;
        return formula.elements.find((x) => x.id === selectedElementId) ?? null;
    };
    switch (action.type) {
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.SELECTED_NODE_SET: {
            draft.currentFormula.selectedElementId = action.payload.value;
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER: {
            const { formulaId, twinId, twinDisplayName } = action.payload;
            draft.selectedTwinId = twinId;
            draft.selectedFormulaId = formulaId;
            draft.selectedTwinDisplayName = twinDisplayName;
            // should already have fetched the formula list for the selected twin
            if (draft.formulaList.state === 'success') {
                // find the formula in the collection
                const formula = draft.formulaList.data.find((formula) => formula.id === formulaId);
                // if found, set the current formula
                if (formula) {
                    draft.currentFormula = {
                        selectedElementId: null,
                        selectedElement: null,
                        ...formula,
                    };
                }
                else {
                    draft.currentFormula = {
                        displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formula_builder.default_formula_name),
                        elements: [],
                        id: '',
                        edges: [],
                        selectedElementId: null,
                        selectedElement: null,
                    };
                    if (formulaId) {
                        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().warn(MODULE_NAME, `Could not find formula with id ${formulaId}. Initializing to new formula`);
                    }
                }
                // navigate
                draft.page = 'builder';
            }
            else {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().warn(MODULE_NAME, `Formula list not loaded. Cannot navigate to builder.`);
            }
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.NAVIGATE_TO_LIST: {
            draft.page = 'list';
            draft.selectedTwinId = action.payload.twinId;
            draft.selectedTwinDisplayName = action.payload.twinDisplayName;
            draft.selectedFormulaId = undefined;
            draft.currentFormula = { ..._InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.EMPTY_FORMULA };
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.NAVIGATE_TO_EMPTY_STATE: {
            const { twinId } = action.payload;
            draft.page = 'empty';
            draft.selectedTwinId = twinId;
            draft.selectedFormulaId = undefined;
            draft.currentFormula = { ..._InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.EMPTY_FORMULA };
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_LIST_LOADING: {
            draft.formulaList = {
                state: 'pending',
            };
            draft.selectedTwinId = action.payload.twinId;
            //clear current formula
            draft.currentFormula = { ..._InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.EMPTY_FORMULA };
            draft.selectedFormulaId = undefined;
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_LIST_LOADED: {
            const { data } = action.payload;
            draft.formulaList = {
                state: 'success',
                data: data,
            };
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.CURRENT_FORMULA_SET: {
            if (action.payload.formula) {
                draft.currentFormula = {
                    ...action.payload.formula,
                    selectedElementId: null,
                    selectedElement: null,
                };
            }
            else {
                // If the payload formula is undefined, reset the current formula
                draft.currentFormula = { ..._InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.EMPTY_FORMULA };
            }
            draft.selectedFormulaId = action.payload.formula?.id;
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_ADD_ELEMENT: {
            draft.currentFormula.elements.push(action.payload.element);
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_REMOVE_ELEMENTS: {
            const formula = draft.currentFormula;
            if (action.payload.ids.length > 0) {
                formula.elements = formula.elements.filter((x) => !action.payload.ids.includes(x.id));
                formula.edges = formula.edges.filter((x) => !action.payload.ids.includes(x.source) &&
                    !action.payload.ids.includes(x.target));
            }
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_UPDATE_ELEMENT: {
            const formula = draft.currentFormula;
            const element = action.payload.element;
            const elementIndex = formula.elements.findIndex((x) => x.id === element.id);
            if (elementIndex >= 0) {
                formula.elements[elementIndex] = element;
            }
            else {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().warn(MODULE_NAME, `Cannot update element to formula. Element (id: ${element.id}) not found`);
            }
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.SELECTED_NODE_UPDATE_SOURCES: {
            const formula = draft.currentFormula;
            if (formula.selectedElementId) {
                const target = formula.selectedElementId;
                // Remove any old connections to this node
                const filteredEdges = formula.edges.filter((x) => x.target !== target);
                // Replace with the new edges
                action.payload.newSourceNodeIds.forEach((source) => {
                    filteredEdges.push({
                        source,
                        target,
                    });
                });
                formula.edges = filteredEdges;
            }
            break;
        }
        case _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.InsightsPageContextActionType.FORMULA_SET_DISPLAY_NAME: {
            draft.currentFormula.displayName = action.payload.displayName;
            break;
        }
    }
    // update selectedElement
    draft.currentFormula.selectedElement = getSelectedElement();
});


/***/ }),

/***/ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx":
/*!********************************************************************************!*\
  !*** ./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPageContext: () => (/* binding */ InsightsPageContext),
/* harmony export */   InsightsPageContextProvider: () => (/* binding */ InsightsPageContextProvider),
/* harmony export */   useInsightsPageContext: () => (/* binding */ useInsightsPageContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _InsightsPageContext_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsPageContext.reducer */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.reducer.tsx");



const DEFAULT_TRANSFORM_WIZARD_CONTEXT = {
    currentFormula: {
        ..._InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_1__.EMPTY_FORMULA,
    },
    formulaList: {
        state: 'uncalled',
    },
    page: 'empty',
    selectedTwinId: undefined,
    selectedTwinDisplayName: undefined,
    selectedFormulaId: undefined,
};
const InsightsPageContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useInsightsPageContext = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InsightsPageContext);
    // istanbul ignore next
    if (!context) {
        throw new Error('useInsightsPageContext must be used within a InsightsPageContextProvider');
    }
    return context;
};
/**
 * This context is for holding which environment the app is running in (OneBox, INT, DAILY, PROD, etc). Dogfood/EDog is TEST
 */
const InsightsPageContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ children, initialState, }) => {
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        ...DEFAULT_TRANSFORM_WIZARD_CONTEXT,
        ...initialState,
    }), [initialState]);
    const [pageState, pageDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_InsightsPageContext_reducer__WEBPACK_IMPORTED_MODULE_2__.InsightsPageContextReducer, state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InsightsPageContext.Provider, { value: { pageState, pageDispatch } }, children));
});


/***/ }),

/***/ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts":
/*!*************************************************************************************!*\
  !*** ./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_FORMULA: () => (/* binding */ EMPTY_FORMULA),
/* harmony export */   InsightsPageContextActionType: () => (/* binding */ InsightsPageContextActionType)
/* harmony export */ });
// Default empty formula to be used as currentFormula in the context
const EMPTY_FORMULA = {
    // FormulaData properties
    id: '',
    displayName: '',
    elements: [],
    edges: [],
    scheduleRuns: undefined,
    // For formula builder editing interactions
    selectedElementId: null,
    selectedElement: null,
};
/**
 * The action names the Wizard reducer can handle
 * NOTE: be sure to add the name to one of the collections of actions so they get routed to the right reducer
 */
var InsightsPageContextActionType;
(function (InsightsPageContextActionType) {
    /** selects a node from the current formula */
    InsightsPageContextActionType["SELECTED_NODE_SET"] = "SELECTED_NODE_SET";
    /** marks the data call for loading the formula list for a given twin as complete and stores the data */
    InsightsPageContextActionType["FORMULA_LIST_LOADED"] = "FORMULA_LIST_LOADED";
    /** marks the data call to fetch the list of formulas for a particular twin as in-progress */
    InsightsPageContextActionType["FORMULA_LIST_LOADING"] = "FORMULA_LIST_LOADING";
    /** marks the data call for loading a specific formula as completed and stores the data */
    InsightsPageContextActionType["CURRENT_FORMULA_SET"] = "CURRENT_FORMULA_SET";
    /** adds a new element to the graph with the provided data */
    InsightsPageContextActionType["FORMULA_ADD_ELEMENT"] = "FORMULA_ADD_ELEMENT";
    /** removes all elements from the graph with the provided ids */
    InsightsPageContextActionType["FORMULA_REMOVE_ELEMENTS"] = "FORMULA_REMOVE_ELEMENTS";
    /** updates the selected element with the provided details */
    InsightsPageContextActionType["FORMULA_UPDATE_ELEMENT"] = "FORMULA_UPDATE_ELEMENT";
    /** replaces existing relationships between the provided source nodes and the currently selected element */
    InsightsPageContextActionType["SELECTED_NODE_UPDATE_SOURCES"] = "SELECTED_NODE_UPDATE_SOURCES";
    /** will show the list page with whatever data is already stored via `FORMULA_LIST_LOADED` */
    InsightsPageContextActionType["NAVIGATE_TO_LIST"] = "NAVIGATE_TO_LIST";
    /** will show the flow editor page for the given formula id. Expects that formula to exist in the FORMULA_LIST via `FORMULA_LIST_LOADED` */
    InsightsPageContextActionType["NAVIGATE_TO_BUILDER"] = "NAVIGATE_TO_BUILDER";
    /** will show the empty state page */
    InsightsPageContextActionType["NAVIGATE_TO_EMPTY_STATE"] = "NAVIGATE_TO_EMPTY_STATE";
    /** set the currentFormula's displayName */
    InsightsPageContextActionType["FORMULA_SET_DISPLAY_NAME"] = "FORMULA_SET_DISPLAY_NAME";
})(InsightsPageContextActionType || (InsightsPageContextActionType = {}));


/***/ }),

/***/ "./src/apps/shell/components/App/App.styles.ts":
/*!*****************************************************!*\
  !*** ./src/apps/shell/components/App/App.styles.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  spinner: {
    Bqenvij: "f1l02sjl"
  },
  root: {
    sshi5w: "fadu88u",
    Bxyxcbc: "f19akamo",
    De3pzq: "f16xq7d1",
    Beiy3e4: "f1vx9l62",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"]
  }
}, {
  d: [".f1l02sjl{height:100%;}", ".fadu88u{min-height:calc(100vh - 70px);}", ".f19akamo{max-height:calc(100vh - 70px);}", ".f16xq7d1{background-color:var(--colorNeutralBackground3);}", ".f1vx9l62{flex-direction:column;}", ".fp9bwmr{padding-top:8px;}", ".f19lj068{padding-right:8px;}", ".f177v4lu{padding-left:8px;}", ".f150uoa4{padding-bottom:8px;}"]
});

/***/ }),

/***/ "./src/apps/shell/components/App/App.tsx":
/*!***********************************************!*\
  !*** ./src/apps/shell/components/App/App.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _App_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.styles */ "./src/apps/shell/components/App/App.styles.ts");
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MainNav */ "./src/apps/shell/components/MainNav/index.ts");
/* harmony import */ var _do_explorer_components_twins_TwinDetailsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @do/explorer/components/twins/TwinDetailsPage */ "./src/apps/explorer/components/twins/TwinDetailsPage/index.ts");







const ExplorerPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-accordion_lib_components_AccordionHeader_AccordionHeader_-d687c4"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-11_js-node_modules_use-debounc-c309fb"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-7_js"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-13_js"), __webpack_require__.e("src_apps_explorer_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @do/explorer */ "./src/apps/explorer/index.ts")).then((module) => ({ default: module.ExplorerPage })));
const PreparePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-accordion_lib_components_AccordionHeader_AccordionHeader_-d687c4"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-11_js-node_modules_use-debounc-c309fb"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-7_js"), __webpack_require__.e("vendors-node_modules_fluentui_react-badge_lib_components_Badge_Badge_js-node_modules_fluentui-b8eef5"), __webpack_require__.e("vendors-node_modules_dnd-kit_sortable_dist_sortable_esm_js-node_modules_fluentui_react-icons_-6dda77"), __webpack_require__.e("src_apps_prepare_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @do/prepare */ "./src/apps/prepare/index.ts")).then((module) => ({ default: module.PreparePage })));
const InsightsPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-accordion_lib_components_AccordionHeader_AccordionHeader_-d687c4"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-11_js-node_modules_use-debounc-c309fb"), __webpack_require__.e("vendors-node_modules_fluentui_react-menu_lib_components_MenuPopover_MenuPopover_js-node_modul-4df2df"), __webpack_require__.e("vendors-node_modules_fluentui_react-calendar-compat_lib_utils_dateMath_dateMath_js-node_modul-b99bb8"), __webpack_require__.e("src_apps_insights_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @do/insights */ "./src/apps/insights/index.ts")).then((module) => ({ default: module.InsightsPage })));
// I would really like to be able to combine these two lazy imports to one deconstructed return, doesn't seem possible
const CreateDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-card_lib_components_CardFooter_CardFooter_js-node_modules-7ac7a5"), __webpack_require__.e("src_apps_home_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @do/home */ "./src/apps/home/index.ts")).then((module) => ({
    default: module.CreateDialog,
})));
const HomePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-card_lib_components_CardFooter_CardFooter_js-node_modules-7ac7a5"), __webpack_require__.e("src_apps_home_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @do/home */ "./src/apps/home/index.ts")).then((module) => ({
    default: module.HomePage,
})));
const MODULE_NAME = 'App';
function App() {
    const classNames = (0,_App_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.create, exact: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { className: classNames.spinner }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CreateDialog, { isOpen: true }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.operationalInsightsRootPath)(`:${_do_core__WEBPACK_IMPORTED_MODULE_1__.SearchParams.ARTIFACT_OBJECT_ID}`) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_core__WEBPACK_IMPORTED_MODULE_1__.SharedStateContextProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: classNames.root },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArtifactEditors, { classNames: classNames }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainNav__WEBPACK_IMPORTED_MODULE_3__.MainNav, null)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '*', render: (routeProps) => {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().warn(MODULE_NAME, `Route not found. {Location}`, {
                    route: routeProps.location,
                });
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Route not found"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        "Location: ",
                        JSON.stringify(routeProps.location))));
            } })));
}
const ArtifactEditors = ({ classNames, }) => {
    const { path } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useRouteMatch)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: `${path}/${_do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.explorer}/twins/details/:twinId` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_explorer_components_twins_TwinDetailsPage__WEBPACK_IMPORTED_MODULE_4__.TwinDetailsPage, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: `${path}/${_do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.explorer}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { className: classNames.spinner }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExplorerPage, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: `${path}/${_do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.prepare}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { className: classNames.spinner }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PreparePage, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: `${path}/${_do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.insights}` },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { className: classNames.spinner }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InsightsPage, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: [`${path}/`, `${path}/${_do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.home}`] },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { className: classNames.spinner }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomePage, null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, { path: '*', render: (routeProps) => {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().warn(MODULE_NAME, `Inner Route not found. {Location}`, {
                    route: routeProps.location,
                });
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Inner Route not found"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                        "Location: ",
                        JSON.stringify(routeProps.location))));
            } })));
};


/***/ }),

/***/ "./src/apps/shell/components/MainNav/MainNav.render.tsx":
/*!**************************************************************!*\
  !*** ./src/apps/shell/components/MainNav/MainNav.render.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useMainNavRender: () => (/* binding */ useMainNavRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/utils/bundleIcon.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-8.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-9.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/TabList/TabList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/Tab/Tab.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");





var TestIds;
(function (TestIds) {
    TestIds["Root"] = "main-nav";
    TestIds["Learn"] = "main-nav-learn";
    TestIds["Prepare"] = "main-nav-prepare";
    TestIds["Explore"] = "main-nav-explore";
    TestIds["Discover"] = "main-nav-discover";
})(TestIds || (TestIds = {}));
const useMainNavRender = (props) => {
    const { state, styles } = props;
    const { selectedTab, onTabChange } = state;
    const LearnIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.Library24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.Library24Regular);
    const PrepareIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__.Cube24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__.Cube24Regular);
    const ExploreIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Organization24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Organization24Regular);
    const DiscoverIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.LightbulbFilament24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.LightbulbFilament24Regular);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.TabList, { selectedValue: selectedTab, onTabSelect: onTabChange, className: styles.root, role: 'navigation', "data-testid": TestIds.Root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tab, { value: _do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.home, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LearnIcons, null), "data-testid": TestIds.Learn }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.main_nav.learn)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tab, { value: _do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.prepare, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrepareIcons, null), "data-testid": TestIds.Prepare }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.main_nav.prepare)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tab, { value: _do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.explorer, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExploreIcons, null), "data-testid": TestIds.Explore }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.main_nav.explore)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Tab, { value: _do_core__WEBPACK_IMPORTED_MODULE_1__.AppNames.insights, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DiscoverIcons, null), "data-testid": TestIds.Discover }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.main_nav.discover))));
};


/***/ }),

/***/ "./src/apps/shell/components/MainNav/MainNav.root.tsx":
/*!************************************************************!*\
  !*** ./src/apps/shell/components/MainNav/MainNav.root.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNav: () => (/* binding */ MainNav)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _MainNav_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNav.render */ "./src/apps/shell/components/MainNav/MainNav.render.tsx");
/* harmony import */ var _MainNav_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainNav.styles */ "./src/apps/shell/components/MainNav/MainNav.styles.ts");
/* harmony import */ var _MainNav_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNav.state */ "./src/apps/shell/components/MainNav/MainNav.state.ts");




const MODULE_NAME = 'MainNav';
const MainNav = () => {
    // get state
    const state = (0,_MainNav_state__WEBPACK_IMPORTED_MODULE_3__.useMainNavState)();
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_MainNav_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_MainNav_render__WEBPACK_IMPORTED_MODULE_1__.useMainNavRender)({ state, styles });
};
MainNav.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/shell/components/MainNav/MainNav.state.ts":
/*!************************************************************!*\
  !*** ./src/apps/shell/components/MainNav/MainNav.state.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMainNavState: () => (/* binding */ useMainNavState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");



const useMainNavState = () => {
    // contexts
    // state
    const routeProps = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useAppRouteProps)();
    const [artifactId] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(routeProps.artifactId);
    // hooks
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            artifactId,
            selectedTab: routeProps.app,
            onTabChange: (_event, data) => {
                const path = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getNestedPage)(data.value, routeProps.artifactId);
                navigation?.navigate({ path });
            },
        };
    }, [artifactId, navigation, routeProps.app, routeProps.artifactId]);
    return state;
};


/***/ }),

/***/ "./src/apps/shell/components/MainNav/MainNav.styles.ts":
/*!*************************************************************!*\
  !*** ./src/apps/shell/components/MainNav/MainNav.styles.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    B6of3ja: "fgr6219"
  }
}, {
  d: [".fgr6219{margin-top:auto;}"]
});

/***/ }),

/***/ "./src/apps/shell/components/MainNav/index.ts":
/*!****************************************************!*\
  !*** ./src/apps/shell/components/MainNav/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNav: () => (/* reexport safe */ _MainNav_root__WEBPACK_IMPORTED_MODULE_0__.MainNav)
/* harmony export */ });
/* harmony import */ var _MainNav_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainNav.root */ "./src/apps/shell/components/MainNav/MainNav.root.tsx");



/***/ }),

/***/ "./src/apps/shell/index.ui.tsx":
/*!*************************************!*\
  !*** ./src/apps/shell/index.ui.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _trident_extension_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trident/extension-client */ "./node_modules/@trident/extension-client/src/index.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _components_App_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App/App */ "./src/apps/shell/components/App/App.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");





const FluentProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_fluentui_react-accordion_lib_components_AccordionHeader_AccordionHeader_-d687c4"), __webpack_require__.e("vendors-node_modules_fluentui_react-icons_lib_sizedIcons_chunk-7_js"), __webpack_require__.e("vendors-node_modules_fluentui_react-badge_lib_components_Badge_Badge_js-node_modules_fluentui-b8eef5"), __webpack_require__.e("vendors-node_modules_fluentui_react-menu_lib_components_MenuPopover_MenuPopover_js-node_modul-4df2df"), __webpack_require__.e("vendors-node_modules_fluentui_react-components_lib_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @fluentui/react-components */ "./node_modules/@fluentui/react-components/lib/index.js")).then((module) => ({
    default: module.FluentProvider,
})));
const LocalizationContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @do/localization */ "./src/localization/index.ts")).then((module) => ({
    default: module.LocalizationContextProvider,
})));
const EnvironmentContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @do/core */ "./src/apps/core/index.ts")).then((module) => ({
    default: module.EnvironmentContextProvider,
})));
const FeatureSwitchContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @do/core */ "./src/apps/core/index.ts")).then((module) => ({
    default: module.FeatureSwitchContextProvider,
})));
const TridentContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @do/core */ "./src/apps/core/index.ts")).then((module) => ({
    default: module.TridentContextProvider,
})));



const MODULE_NAME = 'ExtensionUI';
async function initialize(params) {
    const client = (0,_trident_extension_client__WEBPACK_IMPORTED_MODULE_2__.createExtensionClient)();
    const history = (0,history__WEBPACK_IMPORTED_MODULE_5__.createBrowserHistory)();
    const settings = await client.settings.get();
    (0,_do_core__WEBPACK_IMPORTED_MODULE_3__.initializeLogger)(client, params.environmentName);
    (0,_do_core__WEBPACK_IMPORTED_MODULE_3__.getLogger)().info(MODULE_NAME, `Starting extension.`, {
        environment: params.environmentName,
        extensionVersion: _do_core__WEBPACK_IMPORTED_MODULE_3__.extensionVersion,
        publishDate: _do_core__WEBPACK_IMPORTED_MODULE_3__.publishDate,
    });
    // have to initialize the logger for the lakehouse package and this is where we know the environment name
    (0,_do_core__WEBPACK_IMPORTED_MODULE_3__.initLakehouseLogger)(_do_core__WEBPACK_IMPORTED_MODULE_3__.EXTENSION_NAMES.DigitalOperations, client, params.environmentName, '1.0');
    (0,_do_core__WEBPACK_IMPORTED_MODULE_3__.getLogger)().info(MODULE_NAME, `Rendering extension.`);
    client.navigation.onNavigate((route) => history.replace(route.targetUrl));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector('#root'));
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, { style: { height: '100%' } }) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EnvironmentContextProvider, { environmentName: params.environmentName },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LocalizationContextProvider, { locale: settings.currentLanguageLocale },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FluentProvider, { theme: _do_core__WEBPACK_IMPORTED_MODULE_3__.customLightTheme },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FeatureSwitchContextProvider, { settings: settings },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TridentContextProvider, { extensionClient: client },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Router, { history: history },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_App_App__WEBPACK_IMPORTED_MODULE_4__.App, null)))))))));
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/apps/components/Graph/Graph.render.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/apps/components/Graph/Graph.render.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ovveride Cytoscape Navigator styles, selectors in styles.ts didn't work out
TODO: themify background */
.cytoscape-navigatorView {
  background: #b7e1ed;
  -moz-opacity: 0.5;
  opacity: 0.5;
  z-index: 102;
}

.cytoscape-navigatorOverlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 103;
}
`, "",{"version":3,"sources":["webpack://./src/apps/components/Graph/Graph.render.css"],"names":[],"mappings":"AAAA;0BAC0B;AAC1B;EACE,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,YAAY;AACd","sourcesContent":["/* ovveride Cytoscape Navigator styles, selectors in styles.ts didn't work out\r\nTODO: themify background */\r\n.cytoscape-navigatorView {\r\n  background: #b7e1ed;\r\n  -moz-opacity: 0.5;\r\n  opacity: 0.5;\r\n  z-index: 102;\r\n}\r\n\r\n.cytoscape-navigatorOverlay {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 103;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/apps/components/Graph/Graph.render.css":
/*!****************************************************!*\
  !*** ./src/apps/components/Graph/Graph.render.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Graph_render_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./Graph.render.css */ "./node_modules/css-loader/dist/cjs.js!./src/apps/components/Graph/Graph.render.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Graph_render_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Graph_render_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Graph_render_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Graph_render_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_apps_shell_index_ui_tsx.bundle.js.map