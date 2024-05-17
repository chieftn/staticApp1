"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_insights_index_ts"],{

/***/ "./src/apps/insights/components/ElementPickers/ElementPicker.utils.ts":
/*!****************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/ElementPicker.utils.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMenuItemKey: () => (/* binding */ getMenuItemKey),
/* harmony export */   getUniqueElementName: () => (/* binding */ getUniqueElementName)
/* harmony export */ });
function getMenuItemKey(twinId, propertyName) {
    function encodeInput(inputString) {
        return `${inputString.replace(/{/g, '{{').replace(/}/g, '}}')}`;
    }
    return `{${encodeInput(twinId)}}-{${encodeInput(propertyName)}}`;
}
const getUniqueElementName = (propertyName, elementType, elements) => {
    const hasConflicts = elements.some((x) => x.type === elementType && x.displayName === propertyName);
    // no conflicts
    if (!hasConflicts) {
        return propertyName;
    }
    // if conflict, increment until it's not a conflict
    const matchingProperties = elements.filter((x) => x.type === elementType);
    const propertyNames = new Set(matchingProperties.map((x) => x.displayName));
    let counter = 1;
    let isUnique = false;
    let uniquePropertyName = propertyName;
    while (!isUnique) {
        const newPropertyName = `${propertyName}-${counter}`;
        if (!propertyNames.has(newPropertyName)) {
            isUnique = true;
            uniquePropertyName = newPropertyName;
        }
        counter++;
    }
    return uniquePropertyName;
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.render.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.render.tsx ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementPickerRootMenuRender: () => (/* binding */ useElementPickerRootMenuRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/Menu/Menu.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuTrigger/MenuTrigger.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuPopover/MenuPopover.js");
/* harmony import */ var _InputElementPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../InputElementPicker */ "./src/apps/insights/components/ElementPickers/InputElementPicker/index.ts");
/* harmony import */ var _FunctionElementPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FunctionElementPicker */ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/index.ts");
/* harmony import */ var _OutputElementPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OutputElementPicker */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/index.ts");






const useElementPickerRootMenuRender = ({ state }) => {
    const { onAddExpression, isOutputNodeDefined, dataType } = state;
    // data
    const isFunctionNode = dataType === 'Function';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuList, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubMenu, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.add_element_input), testId: "insights-ribbon-add-element-input-button" /* InsightsRibbonTestIds.AddElementInputButton */ },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputElementPicker__WEBPACK_IMPORTED_MODULE_2__.InputElementPicker, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MenuItem, { onClick: onAddExpression, "data-testid": "insights-ribbon-add-element-expression-button" /* InsightsRibbonTestIds.AddElementExpressionButton */ }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.add_element_expression)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubMenu, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.add_element_function), testId: "insights-ribbon-add-element-function-button" /* InsightsRibbonTestIds.AddElementFunctionButton */, disabled: isFunctionNode },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FunctionElementPicker__WEBPACK_IMPORTED_MODULE_3__.FunctionElementPicker, null)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubMenu, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.add_element_output), testId: "insights-ribbon-add-element-output-button" /* InsightsRibbonTestIds.AddElementOutputButton */, disabled: isOutputNodeDefined },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OutputElementPicker__WEBPACK_IMPORTED_MODULE_4__.OutputElementPicker, null))));
};
const SubMenu = ({ title, testId, disabled, children, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Menu, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MenuTrigger, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MenuItem, { "data-testid": testId, disabled: disabled }, title)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MenuPopover, null, children)));
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.root.tsx":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.root.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementPickerRootMenu: () => (/* binding */ ElementPickerRootMenu)
/* harmony export */ });
/* harmony import */ var _ElementPickerRootMenu_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementPickerRootMenu.render */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.render.tsx");
/* harmony import */ var _ElementPickerRootMenu_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementPickerRootMenu.state */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.state.ts");


const MODULE_NAME = 'ElementPickerRootMenu';
const ElementPickerRootMenu = (props) => {
    // get state
    const state = (0,_ElementPickerRootMenu_state__WEBPACK_IMPORTED_MODULE_1__.useElementPickerRootMenuState)(props);
    // render the item
    return (0,_ElementPickerRootMenu_render__WEBPACK_IMPORTED_MODULE_0__.useElementPickerRootMenuRender)({ state });
};
ElementPickerRootMenu.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.state.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.state.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementPickerRootMenuState: () => (/* binding */ useElementPickerRootMenuState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useElementPickerUtils */ "./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'ElementPickerRootMenu.state';
const useElementPickerRootMenuState = (props) => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const { getNewElementFromSelections } = (0,_useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__.useElementPickerUtils)();
    // callbacks
    const onAddExpression = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'onAddExpression');
        const element = getNewElementFromSelections({ elementType: 'Expression' });
        if (element) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_ADD_ELEMENT,
                payload: {
                    element: element,
                },
            });
        }
        else {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to create Expression');
        }
    }, [getNewElementFromSelections, pageDispatch]);
    const isOutputNodeDefined = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        return pageState.currentFormula.elements.some((element) => element.type === 'OutputProperty');
    }, [pageState.currentFormula]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            isOutputNodeDefined: isOutputNodeDefined(),
            onAddExpression: onAddExpression,
            dataType: props.dataType,
        };
    }, [onAddExpression, isOutputNodeDefined, props.dataType]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/index.ts":
/*!************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementPickerRootMenu: () => (/* reexport safe */ _ElementPickerRootMenu_root__WEBPACK_IMPORTED_MODULE_0__.ElementPickerRootMenu)
/* harmony export */ });
/* harmony import */ var _ElementPickerRootMenu_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementPickerRootMenu.root */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/ElementPickerRootMenu.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.render.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.render.tsx ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFunctionElementPickerRender: () => (/* binding */ useFunctionElementPickerRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabster/lib/hooks/useArrowNavigationGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroup/MenuGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroupHeader/MenuGroupHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");



const useFunctionElementPickerRender = ({ state, styles }) => {
    const navigationAttributes = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.useArrowNavigationGroup)({ axis: 'vertical' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, ...navigationAttributes },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.function_picker.title)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.MenuList, null, state.listItems.map((group) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuGroup, { key: group.category },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuGroupHeader, { className: styles.groupHeader }, group.category),
                group.items.map((property) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MenuItem, { key: `${group.category}-${property.value}`, onClick: () => state.onItemSelect(property.value) }, property.displayName));
                })));
        }))));
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.root.tsx":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.root.tsx ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionElementPicker: () => (/* binding */ FunctionElementPicker)
/* harmony export */ });
/* harmony import */ var _FunctionElementPicker_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionElementPicker.render */ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.render.tsx");
/* harmony import */ var _FunctionElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FunctionElementPicker.styles */ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.styles.ts");
/* harmony import */ var _FunctionElementPicker_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FunctionElementPicker.state */ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.state.ts");



const MODULE_NAME = 'FunctionElementPicker';
const FunctionElementPicker = () => {
    // get state
    const state = (0,_FunctionElementPicker_state__WEBPACK_IMPORTED_MODULE_2__.useFunctionElementPickerState)();
    // get styles
    const styles = (0,_FunctionElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FunctionElementPicker_render__WEBPACK_IMPORTED_MODULE_0__.useFunctionElementPickerRender)({ state, styles });
};
FunctionElementPicker.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.state.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.state.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFunctionElementPickerState: () => (/* binding */ useFunctionElementPickerState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useElementPickerUtils */ "./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts");
/* harmony import */ var _constants_CalculationElements_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/CalculationElements.constants */ "./src/apps/insights/constants/CalculationElements.constants.ts");






const DEBUG_LOGGING = false;
const MODULE_NAME = 'FunctionElementPicker.state';
const useFunctionElementPickerState = () => {
    // contexts
    const { pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const { getNewElementFromSelections } = (0,_useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__.useElementPickerUtils)();
    // callbacks
    const onItemSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((functionType) => {
        const element = getNewElementFromSelections({
            elementType: 'Function',
            dataType: functionType,
        });
        if (element) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_ADD_ELEMENT,
                payload: {
                    element: element,
                },
            });
        }
        else {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to create element from selections. {functionType}', {
                functionType,
            });
        }
    }, [getNewElementFromSelections, pageDispatch]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onItemSelect,
            listItems: (0,_constants_CalculationElements_constants__WEBPACK_IMPORTED_MODULE_5__.GetCalculationFormulaOptions)(),
        };
    }, [onItemSelect]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.styles.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.styles.ts ***!
  \***********************************************************************************************************/
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
  header: {
    Bhrd7zp: "f16wzh4i",
    sj55zd: "f11d4kpn",
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  },
  groupHeader: {
    uwmqm3: ["fycuoez", "f8wuabp"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f1vx9l62{flex-direction:column;}", ".f16wzh4i{font-weight:bold;}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/index.ts":
/*!************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/FunctionElementPicker/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionElementPicker: () => (/* reexport safe */ _FunctionElementPicker_root__WEBPACK_IMPORTED_MODULE_0__.FunctionElementPicker)
/* harmony export */ });
/* harmony import */ var _FunctionElementPicker_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionElementPicker.root */ "./src/apps/insights/components/ElementPickers/FunctionElementPicker/FunctionElementPicker.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.render.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.render.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInputElementPickerRender: () => (/* binding */ useInputElementPickerRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabster/lib/hooks/useArrowNavigationGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroup/MenuGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuGroupHeader/MenuGroupHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-11.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _ElementPicker_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ElementPicker.utils */ "./src/apps/insights/components/ElementPickers/ElementPicker.utils.ts");






const useInputElementPickerRender = ({ state, styles }) => {
    const navigationAttributes = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.useArrowNavigationGroup)({ axis: 'vertical' });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, ...navigationAttributes },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", { className: styles.header }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.input_picker.title)),
        state.listItems.state !== 'uncalled' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.common.search_placeholder), contentBefore: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Search16Regular, null), value: state.searchText, onChange: (_ev, value) => state.setSearchText(value.value), "data-testid": "insights-element-picker-search-box" /* InputElementPickerTestIds.SearchBox */ })) : null,
        state.listItems.state === 'success' ? (state.listItems.data.length === 0 ? (
        // no data
        state.searchText.trim().length > 0 ? ((0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.common.no_data_with_search)) : ((0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.common.no_data))) : (
        // has data
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MenuList, { className: styles.list }, state.listItems.data.map((twinItem) => {
            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MenuGroup, { key: twinItem.twinId },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MenuGroupHeader, { className: styles.groupHeader, title: twinItem.description }, twinItem.displayName),
                twinItem.properties.map((property) => {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.MenuItem, { key: (0,_ElementPicker_utils__WEBPACK_IMPORTED_MODULE_3__.getMenuItemKey)(twinItem.twinId, property.name), onClick: () => state.onItemSelect(twinItem.twinId, property), className: styles.listItem, title: property.name }, property.name));
                })));
        })))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null))));
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.root.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.root.tsx ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputElementPicker: () => (/* binding */ InputElementPicker)
/* harmony export */ });
/* harmony import */ var _InputElementPicker_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputElementPicker.render */ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.render.tsx");
/* harmony import */ var _InputElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputElementPicker.styles */ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.styles.ts");
/* harmony import */ var _InputElementPicker_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputElementPicker.state */ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.state.ts");



const MODULE_NAME = 'InputElementPicker';
const InputElementPicker = (props) => {
    // get state
    const state = (0,_InputElementPicker_state__WEBPACK_IMPORTED_MODULE_2__.useInputElementPickerState)(props);
    // get styles
    const styles = (0,_InputElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InputElementPicker_render__WEBPACK_IMPORTED_MODULE_0__.useInputElementPickerRender)({ state, styles });
};
InputElementPicker.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.state.ts":
/*!****************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.state.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInputElementPickerState: () => (/* binding */ useInputElementPickerState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/dist/index.module.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useElementPickerUtils */ "./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts");
/* harmony import */ var _InputElementPicker_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputElementPicker.utils */ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.utils.ts");







const DEBUG_LOGGING = false;
const MODULE_NAME = 'InputElementPicker.state';
const useInputElementPickerState = (_props) => {
    // contexts
    const { pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [debouncedSearchText] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(searchText, 500);
    const [listItems, setListItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'pending',
    });
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const twinClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTwinClient)(true);
    const { getNewElementFromSelections } = (0,_useElementPickerUtils__WEBPACK_IMPORTED_MODULE_4__.useElementPickerUtils)();
    // callbacks
    const onItemSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((twinId, selectedProperty) => {
        if (listItems.state === 'success') {
            const twin = listItems.data.find((twin) => twin.twinId === twinId);
            const property = twin?.properties.find((property) => property.name === selectedProperty.name);
            const element = getNewElementFromSelections({
                twinId: twinId,
                property,
                elementType: 'InputProperty',
            });
            if (element) {
                pageDispatch({
                    type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_ADD_ELEMENT,
                    payload: {
                        element: element,
                    },
                });
            }
            else {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to create element from selections. {twinId}, {selectedProperty}', {
                    twinId,
                    selectedProperty,
                });
            }
        }
    }, [getNewElementFromSelections, pageDispatch, listItems]);
    const fetchTwins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (searchText) => {
        setListItems({
            state: 'pending',
        });
        if (twinClient) {
            const queryObj = (0,_InputElementPicker_utils__WEBPACK_IMPORTED_MODULE_5__.queryTwinWithAttributesAndTimeSeriesDataPointsKeywordQuery)(searchText);
            const twins = await twinClient.queryTwinsWithAttributesAndTimeSeriesDataPoints(queryObj);
            if (twins.state === 'success') {
                const data = twins.data ? await (0,_InputElementPicker_utils__WEBPACK_IMPORTED_MODULE_5__.getTwinItems)(twins.data) : [];
                setListItems({
                    data: data,
                    state: 'success',
                });
            }
        }
    }, [twinClient]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchTwins(debouncedSearchText);
    }, [fetchTwins, debouncedSearchText]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onItemSelect,
            searchText,
            setSearchText,
            listItems: listItems,
        };
    }, [onItemSelect, listItems, searchText]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.styles.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.styles.ts ***!
  \*****************************************************************************************************/
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
  header: {
    Bhrd7zp: "f16wzh4i",
    sj55zd: "f11d4kpn",
    B6of3ja: "f1hu3pq6",
    t21cq0: ["f11qmguv", "f1tyq0we"],
    jrapky: "f19f4twv",
    Frg6f3: ["f1tyq0we", "f11qmguv"]
  },
  groupHeader: {
    uwmqm3: ["fycuoez", "f8wuabp"]
  },
  list: {
    Bmxbyg5: "f5zp4f",
    Bqenvij: "f1otco5v"
  },
  listItem: {
    mc9l5x: "ftgm304",
    B2u0y6b: "f6dzj5z",
    ygn44y: "f1cmbuwj",
    B68tc82: "f1p9o1ba",
    Huce71: "fz5stix"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f1vx9l62{flex-direction:column;}", ".f16wzh4i{font-weight:bold;}", ".f11d4kpn{color:var(--colorNeutralForeground3);}", ".f1hu3pq6{margin-top:0;}", ".f11qmguv{margin-right:0;}", ".f1tyq0we{margin-left:0;}", ".f19f4twv{margin-bottom:0;}", ".fycuoez{padding-left:4px;}", ".f8wuabp{padding-right:4px;}", ".f5zp4f{overflow-y:auto;}", ".f1otco5v{height:420px;}", ".ftgm304{display:block;}", ".f6dzj5z{max-width:100%;}", ".f1cmbuwj{text-overflow:ellipsis;}", ".f1p9o1ba{overflow-x:hidden;}", ".fz5stix{white-space:nowrap;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.utils.ts":
/*!****************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.utils.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTwinItems: () => (/* binding */ getTwinItems),
/* harmony export */   queryTwinWithAttributesAndTimeSeriesDataPointsKeywordQuery: () => (/* binding */ queryTwinWithAttributesAndTimeSeriesDataPointsKeywordQuery)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");

const queryTwinWithAttributesAndTimeSeriesDataPointsKeywordQuery = (searchString) => {
    const keyword = `%${searchString}%`;
    const queryObj = {
        query: {
            root: {
                type: 'logical',
                left: {
                    type: 'comparison',
                    left: {
                        type: 'variable',
                        source: 'Twin',
                        value: 'TwinId',
                    },
                    operator: 'contains',
                    right: {
                        type: 'constant',
                        value: keyword,
                    },
                },
                operator: 'or',
                right: {
                    type: 'comparison',
                    left: {
                        type: 'variable',
                        source: 'Twin',
                        value: 'DisplayName',
                    },
                    operator: 'contains',
                    right: {
                        type: 'constant',
                        value: keyword,
                    },
                },
            },
        },
    };
    return queryObj;
};
const getTwinItems = async (twins) => {
    return twins.map(({ attributes, timeseriesdatapoints, ...twin }) => {
        // extract the attributes and timeseriesdatapoints from the twin object
        const properties = [];
        if (attributes) {
            for (const attr of attributes) {
                properties.push({
                    name: attr.name,
                    propertyType: 'Attribute',
                });
            }
        }
        if (timeseriesdatapoints) {
            for (const ts of timeseriesdatapoints) {
                if (ts.state === _do_core__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesStateType.Active) {
                    properties.push({
                        name: ts.timeSeriesName || ts.timeSeriesDataPointId,
                        propertyType: 'TimeSeries',
                        referenceId: ts.timeSeriesDataPointId,
                    });
                }
            }
        }
        return { ...twin, properties }; // return the twin object with the properties array
    });
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/InputElementPicker/index.ts":
/*!*********************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/InputElementPicker/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputElementPicker: () => (/* reexport safe */ _InputElementPicker_root__WEBPACK_IMPORTED_MODULE_0__.InputElementPicker)
/* harmony export */ });
/* harmony import */ var _InputElementPicker_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputElementPicker.root */ "./src/apps/insights/components/ElementPickers/InputElementPicker/InputElementPicker.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.mock.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.mock.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMockProperties: () => (/* binding */ addMockProperties)
/* harmony export */ });
const addMockProperties = (twin) => {
    return {
        ...twin,
        properties: [
            {
                name: 'MTTF',
                propertyType: 'TimeSeries',
            },
            {
                name: 'Quality',
                propertyType: 'TimeSeries',
            },
        ],
    };
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.render.tsx":
/*!********************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.render.tsx ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutputElementPickerRender: () => (/* binding */ useOutputElementPickerRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");




const useOutputElementPickerRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: state.onCreate, "data-testid": "output-picker-create-button" /* OutputElementPickerTestIds.CreateButton */ }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_pickers.output_picker.create_button_text)),
        state.listItems.state === 'success' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuList, null, state.listItems.data.map((x) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { key: `${x.name}`, onClick: () => state.onItemSelect(x), "data-testid": "output-picker-property-item" /* OutputElementPickerTestIds.PropertyItem */ }, x.name))))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null))));
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.root.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.root.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputElementPicker: () => (/* binding */ OutputElementPicker)
/* harmony export */ });
/* harmony import */ var _OutputElementPicker_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputElementPicker.render */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.render.tsx");
/* harmony import */ var _OutputElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutputElementPicker.styles */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.styles.ts");
/* harmony import */ var _OutputElementPicker_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutputElementPicker.state */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.state.ts");



const MODULE_NAME = 'OutputElementPicker';
const OutputElementPicker = () => {
    // get state
    const state = (0,_OutputElementPicker_state__WEBPACK_IMPORTED_MODULE_2__.useOutputElementPickerState)();
    // get styles
    const styles = (0,_OutputElementPicker_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_OutputElementPicker_render__WEBPACK_IMPORTED_MODULE_0__.useOutputElementPickerRender)({ state, styles });
};
OutputElementPicker.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.state.ts":
/*!******************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.state.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutputElementPickerState: () => (/* binding */ useOutputElementPickerState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _useElementPickerUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useElementPickerUtils */ "./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _OutputElementPicker_mock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OutputElementPicker.mock */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.mock.ts");






const DEBUG_LOGGING = false;
const MODULE_NAME = 'OutputElementPicker.state';
const useOutputElementPickerState = () => {
    // contexts
    const { pageDispatch, pageState: { selectedTwinId }, } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__.useInsightsPageContext)();
    // state
    const [propertyData, setPropertyItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        state: 'uncalled',
    });
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const { getNewElementFromSelections } = (0,_useElementPickerUtils__WEBPACK_IMPORTED_MODULE_2__.useElementPickerUtils)();
    // Note: Remove boolean parameter when we are API ready
    const twinClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTwinClient)(false);
    // callbacks
    const createElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((property) => {
        const twinId = selectedTwinId;
        const element = getNewElementFromSelections({
            elementType: 'OutputProperty',
            property: property,
            twinId: `${twinId}`,
        });
        if (element && twinId) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_ADD_ELEMENT,
                payload: {
                    element: element,
                },
            });
        }
        else {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to create element from selections.', {
                property,
                twinId,
            });
        }
    }, [getNewElementFromSelections, pageDispatch, selectedTwinId]);
    const onItemSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((property) => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'onItemSelect. {item}', {
            property,
        });
        createElement(property);
    }, [createElement]);
    const onCreate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'onCreate. {}');
        createElement({
            name: '',
            propertyType: 'TimeSeries', // set this here, but we will have to update this when the user selects a source, the output node will have whatever type it's source has
        });
    }, [createElement]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let isCancelled = false;
        const fetchTwinDetails = async () => {
            if (selectedTwinId && twinClient) {
                const twinDetails = await twinClient.getTwinById(selectedTwinId);
                debugLogging &&
                    (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'fetched twin details. ', {
                        twinDetails,
                    });
                if (!isCancelled) {
                    if (twinDetails.state === 'success') {
                        // success
                        if (twinDetails.data) {
                            // TODO: remove this once the twin returns back the property data
                            const data = (0,_OutputElementPicker_mock__WEBPACK_IMPORTED_MODULE_5__.addMockProperties)(twinDetails.data);
                            setPropertyItems({
                                state: 'success',
                                data: data.properties || [],
                            });
                        }
                        else {
                            setPropertyItems({ state: 'success', data: [] });
                        }
                    }
                    else {
                        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to get twin details.', twinDetails);
                        // error case
                        setPropertyItems(twinDetails);
                    }
                }
            }
        };
        fetchTwinDetails();
        return () => {
            isCancelled = true;
        };
    }, [debugLogging, selectedTwinId, twinClient]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            listItems: propertyData,
            onItemSelect,
            onCreate,
        };
    }, [propertyData, onCreate, onItemSelect]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.styles.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.styles.ts ***!
  \*******************************************************************************************************/
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
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/OutputElementPicker/index.ts":
/*!**********************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/OutputElementPicker/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputElementPicker: () => (/* reexport safe */ _OutputElementPicker_root__WEBPACK_IMPORTED_MODULE_0__.OutputElementPicker)
/* harmony export */ });
/* harmony import */ var _OutputElementPicker_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputElementPicker.root */ "./src/apps/insights/components/ElementPickers/OutputElementPicker/OutputElementPicker.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/insights/components/ElementPickers/useElementPickerUtils.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementPickerUtils: () => (/* binding */ useElementPickerUtils)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./src/apps/insights/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _ElementPicker_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementPicker.utils */ "./src/apps/insights/components/ElementPickers/ElementPicker.utils.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");





const useElementPickerUtils = () => {
    // contexts
    const { pageState: { currentFormula }, } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_1__.useInsightsPageContext)();
    // callbacks
    const getName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, elementType) => {
        const elements = currentFormula.elements;
        return (0,_ElementPicker_utils__WEBPACK_IMPORTED_MODULE_2__.getUniqueElementName)(name, elementType, elements);
    }, [currentFormula]);
    const getNewElementFromSelections = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((args) => {
        const { elementType } = args;
        switch (elementType) {
            case 'InputProperty':
                if (!args.twinId || !args.property)
                    return undefined;
                return {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
                    type: 'InputProperty',
                    displayName: getName(args.property.name, elementType),
                    propertySelector: {
                        propertyType: args.property.propertyType,
                        referenceId: args.property.referenceId ?? args.property.name,
                    },
                    twinSelector: {
                        referenceId: args.twinId,
                        twinSelectorType: 'Twin',
                    },
                };
            case 'Expression':
                return {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
                    type: 'Expression',
                    displayName: getName((0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.insights.element_pickers.default_names.expression), elementType),
                    expression: '',
                };
            case 'Function':
                return {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
                    type: 'Function',
                    displayName: getName((0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.insights.element_pickers.default_names.function), elementType),
                    dataType: args.dataType,
                };
            case 'OutputProperty':
                if (!args.twinId || !args.property)
                    return undefined;
                return {
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])(),
                    type: 'OutputProperty',
                    displayName: getName(args.property.name ||
                        (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.insights.element_pickers.default_names.output), elementType),
                    propertySelector: {
                        propertyType: args.property.propertyType,
                        referenceId: args.property.name ||
                            (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.insights.element_pickers.default_names.output),
                    },
                    twinSelector: {
                        referenceId: args.twinId,
                        twinSelectorType: 'Twin',
                    },
                };
            default:
                return undefined;
        }
    }, [getName]);
    return {
        getNewElementFromSelections: getNewElementFromSelections,
    };
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.render.tsx":
/*!*******************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/FormulaBuilder.render.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormulaBuilderRender: () => (/* binding */ useFormulaBuilderRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FlowEditor_context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FlowEditor/context/FlowEditorContext */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.tsx");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");



/* istanbul ignore next */
const FlowEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_reactflow_core_dist_esm_index_js-node_modules_reactflow_dist_style_css"), __webpack_require__.e("src_apps_insights_components_FormulaBuilder_components_FlowEditor_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/FlowEditor */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/index.ts")).then((module) => ({
    default: module.FlowEditor,
})));
const useFormulaBuilderRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FlowEditor_context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_1__.FlowEditorContextProvider, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, state.formulaName),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, { fallback: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, { className: styles.loading }) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FlowEditor, null)))));
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.root.tsx":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/FormulaBuilder.root.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaBuilder: () => (/* binding */ FormulaBuilder)
/* harmony export */ });
/* harmony import */ var _FormulaBuilder_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormulaBuilder.render */ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.render.tsx");
/* harmony import */ var _FormulaBuilder_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormulaBuilder.styles */ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.styles.ts");
/* harmony import */ var _FormulaBuilder_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormulaBuilder.state */ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.state.ts");



const MODULE_NAME = 'FormulaBuilder';
const FormulaBuilder = () => {
    // get state
    const state = (0,_FormulaBuilder_state__WEBPACK_IMPORTED_MODULE_2__.useFormulaBuilderState)();
    // get styles
    const styles = (0,_FormulaBuilder_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FormulaBuilder_render__WEBPACK_IMPORTED_MODULE_0__.useFormulaBuilderRender)({ state, styles });
};
FormulaBuilder.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.state.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/FormulaBuilder.state.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormulaBuilderState: () => (/* binding */ useFormulaBuilderState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'FormulaBuilder.state';
const useFormulaBuilderState = () => {
    // contexts
    const { pageState } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            formulaName: pageState.currentFormula.displayName,
        };
    }, [pageState.currentFormula.displayName]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.styles.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/FormulaBuilder.styles.ts ***!
  \******************************************************************************/
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
    mc9l5x: "f22iagw",
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34",
    Beiy3e4: "f1vx9l62"
  },
  loading: {
    B6of3ja: "fgr6219",
    t21cq0: ["f1ujusj6", "fcgxt0o"],
    jrapky: "f10jk5vf",
    Frg6f3: ["fcgxt0o", "f1ujusj6"]
  },
  tray: {
    Bqenvij: "fqyl9y0"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f22iagw{display:flex;}", ".fqerorx{flex-grow:1;}", ".f1neuvcm{flex-shrink:1;}", ".f1pztt34{flex-basis:0;}", ".f1vx9l62{flex-direction:column;}", ".fgr6219{margin-top:auto;}", ".f1ujusj6{margin-right:auto;}", ".fcgxt0o{margin-left:auto;}", ".f10jk5vf{margin-bottom:auto;}", ".fqyl9y0{height:400px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.reducer.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.reducer.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowEditorContextReducer: () => (/* binding */ FlowEditorContextReducer),
/* harmony export */   MODULE_NAME: () => (/* binding */ MODULE_NAME),
/* harmony export */   debugLogging: () => (/* binding */ debugLogging)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _FlowEditorContext_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowEditorContext.types */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.types.ts");



const debugLogging = true;
const MODULE_NAME = 'FlowEditorContextReducer';
const FlowEditorContextReducer = (0,immer__WEBPACK_IMPORTED_MODULE_2__.produce)((draft, action) => {
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().info(MODULE_NAME, `Updating FlowEditorContextReducer context ${action.type} with payload: `, action.payload);
    switch (action.type) {
        case _FlowEditorContext_types__WEBPACK_IMPORTED_MODULE_1__.FlowEditorContextActionType.SELECTED_NODE_SET: {
            draft.selectedNodeId = action.payload.value;
            break;
        }
    }
});


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowEditorContext: () => (/* binding */ FlowEditorContext),
/* harmony export */   FlowEditorContextProvider: () => (/* binding */ FlowEditorContextProvider),
/* harmony export */   useFlowEditorContext: () => (/* binding */ useFlowEditorContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FlowEditorContext_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowEditorContext.reducer */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.reducer.tsx");


const DEFAULT_TRANSFORM_WIZARD_CONTEXT = {
    selectedNodeId: null,
};
const FlowEditorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const useFlowEditorContext = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FlowEditorContext);
    // istanbul ignore next
    if (!context) {
        throw new Error('useFlowEditorContext must be used within a FlowEditorContextProvider');
    }
    return context;
};
/**
 * This context is for holding which environment the app is running in (OneBox, INT, DAILY, PROD, etc). Dogfood/EDog is TEST
 */
const FlowEditorContextProvider = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ children, initialState, }) => {
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
        ...DEFAULT_TRANSFORM_WIZARD_CONTEXT,
        ...initialState,
    }), [initialState]);
    const [flowEditorState, flowEditorDispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_FlowEditorContext_reducer__WEBPACK_IMPORTED_MODULE_1__.FlowEditorContextReducer, state);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FlowEditorContext.Provider, { value: { flowEditorState, flowEditorDispatch } }, children));
});


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.types.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.types.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowEditorContextActionType: () => (/* binding */ FlowEditorContextActionType)
/* harmony export */ });
/**
 * The action names the Wizard reducer can handle
 * NOTE: be sure to add the name to one of the collections of actions so they get routed to the right reducer
 */
var FlowEditorContextActionType;
(function (FlowEditorContextActionType) {
    FlowEditorContextActionType["SELECTED_NODE_SET"] = "SELECTED_NODE_SET";
})(FlowEditorContextActionType || (FlowEditorContextActionType = {}));


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/index.ts":
/*!**************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaBuilder: () => (/* reexport safe */ _FormulaBuilder_root__WEBPACK_IMPORTED_MODULE_0__.FormulaBuilder)
/* harmony export */ });
/* harmony import */ var _FormulaBuilder_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormulaBuilder.root */ "./src/apps/insights/components/FormulaBuilder/FormulaBuilder.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/FormulaList/FormulaList.render.tsx":
/*!*************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/FormulaList.render.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaListTestIds: () => (/* binding */ FormulaListTestIds),
/* harmony export */   useFormulaListRender: () => (/* binding */ useFormulaListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormulaList_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormulaList.utils */ "./src/apps/insights/components/FormulaList/FormulaList.utils.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/TableCellLayout/TableCellLayout.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




var FormulaListTestIds;
(function (FormulaListTestIds) {
    FormulaListTestIds["Row"] = "formulas-row";
    FormulaListTestIds["Column"] = "formulas-column";
    FormulaListTestIds["Name"] = "formulas-name";
    FormulaListTestIds["ModelId"] = "formulas-model-id";
    FormulaListTestIds["OutputProperty"] = "formulas-output-property";
    FormulaListTestIds["Status"] = "formulas-status";
    FormulaListTestIds["LastRun"] = "formulas-last-run";
    FormulaListTestIds["CreatedOn"] = "formulas-created-on";
})(FormulaListTestIds || (FormulaListTestIds = {}));
const useFormulaListRender = ({ state, styles, }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'name',
            renderCell: (formula) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Link, { className: styles.formulaName, onClick: () => {
                        state.navigateToBuilder(formula.id);
                    } }, formula.displayName));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.Name }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.formula_name)));
            },
            compare: (a, b) => {
                return a.displayName?.localeCompare(b.displayName) ?? -1;
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'modelId',
            renderCell: () => {
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TableCellLayout, null, '-');
                {
                    /* TODO: Update with ModelID*/
                }
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.ModelId }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.group_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'outputProperty',
            renderCell: (formula) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TableCellLayout, null, (0,_FormulaList_utils__WEBPACK_IMPORTED_MODULE_1__.getOutputPropertyReferenceId)(formula)));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.OutputProperty }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.output_property)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'status',
            renderCell: (formula) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TableCellLayout, null, formula.scheduleRuns?.calculationJobStatus || '-'));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.Status }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.status)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'lastRun',
            renderCell: (formula) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TableCellLayout, null, formula.scheduleRuns?.lastCalculationRunUtc?.toString() || '-'));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.LastRun }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.last_run)));
            },
            // compare: (a, b) => {
            //   return a.lastRun?.localeCompare(b.lastRun as string) ?? -1;
            // },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.createTableColumn)({
            columnId: 'createdOn',
            renderCell: (formula) => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.TableCellLayout, null, formula.scheduleRuns?.startTimeUtc?.toString() || '-'));
            },
            renderHeaderCell: () => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": FormulaListTestIds.CreatedOn }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.created_on)));
            },
            // compare: (a, b) => {
            //   return a.createdOn?.localeCompare(b.createdOn as string) ?? -1;
            // },
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: styles.listTitle }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.header, { twinName: state.twinName })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.DataGrid, { items: state.formulas, columns: columns, sortable: true, 
            // resizableColumns TODO: Fix resizing functionality
            // columnSizingOptions={columnSizingOptions}
            selectionMode: 'single', getRowId: (formula) => formula.id, onSelectionChange: (_e, data) => {
                const selectedItem = data.selectedItems.values().next().value; // Should be single select
                if (selectedItem)
                    state.onFormulaSelect(selectedItem);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DataGridHeader, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridRow, { selectionCell: {
                        checkboxIndicator: {
                            'aria-label': `${(0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.select_all_rows)}`,
                        },
                    } }, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGridHeaderCell, { sortIcon: {
                        as: 'span',
                        className: styles.sortIcon,
                    } }, renderHeaderCell())))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DataGridRow, { "data-testid": FormulaListTestIds.Row, key: rowId, selectionCell: {
                    checkboxIndicator: { 'aria-label': 'Select formula' },
                    radioIndicator: { 'aria-label': 'Select formula' },
                } }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridCell, null, renderCell(item)))))))));
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaList/FormulaList.root.tsx":
/*!***********************************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/FormulaList.root.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaList: () => (/* binding */ FormulaList)
/* harmony export */ });
/* harmony import */ var _FormulaList_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormulaList.render */ "./src/apps/insights/components/FormulaList/FormulaList.render.tsx");
/* harmony import */ var _FormulaList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormulaList.styles */ "./src/apps/insights/components/FormulaList/FormulaList.styles.ts");
/* harmony import */ var _FormulaList_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormulaList.state */ "./src/apps/insights/components/FormulaList/FormulaList.state.ts");



const MODULE_NAME = 'FormulaList';
const FormulaList = (props) => {
    // get state
    const state = (0,_FormulaList_state__WEBPACK_IMPORTED_MODULE_2__.useFormulaListState)(props);
    // get styles
    const styles = (0,_FormulaList_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FormulaList_render__WEBPACK_IMPORTED_MODULE_0__.useFormulaListRender)({ state, styles });
};
FormulaList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/FormulaList/FormulaList.state.ts":
/*!***********************************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/FormulaList.state.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormulaListState: () => (/* binding */ useFormulaListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InsightsHierarchy/InsightsHierarchy.utils */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'FormulaList.state';
const useFormulaListState = (_props) => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const client = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useCalculationClient)();
    // callbacks
    const navigateToBuilder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((formulaId) => {
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER,
            payload: {
                formulaId: formulaId,
                twinId: pageState.selectedTwinId || '',
                twinDisplayName: pageState.selectedTwinDisplayName || pageState.selectedTwinId,
            },
        });
    }, [pageDispatch, pageState.selectedTwinDisplayName, pageState.selectedTwinId]);
    const onFormulaSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((formulaId) => {
        // search for the formula in the list
        if (pageState.formulaList.state === 'success') {
            const formula = pageState.formulaList.data.find((formula) => formula.id === formulaId);
            // Set current formula data
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.CURRENT_FORMULA_SET,
                payload: {
                    formula, // Will be undefined if no formula is found
                },
            });
        }
    }, [pageDispatch, pageState]);
    // side effects
    const shownFormulas = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (pageState.formulaList.state === 'success') {
            return pageState.formulaList.data;
        }
        return [];
    }, [pageState.formulaList]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const loadFormulas = async () => {
            if (pageState.selectedTwinId &&
                pageState.formulaList.state === 'uncalled') {
                pageDispatch({
                    type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADING,
                    payload: {
                        twinId: pageState.selectedTwinId,
                    },
                });
                const response = await (0,_InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_4__.getAllFormulas)(client, pageState.selectedTwinId);
                if ('errorCode' in response) {
                    (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, response.errorMessage);
                }
                else {
                    pageDispatch({
                        type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
                        payload: { data: response },
                    });
                }
            }
        };
        loadFormulas();
    }, [
        client,
        pageDispatch,
        pageState.formulaList.state,
        pageState.selectedTwinId,
    ]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            formulas: shownFormulas,
            twinId: pageState.selectedTwinId || '',
            navigateToBuilder,
            onFormulaSelect,
            twinName: pageState.selectedTwinDisplayName || '',
            isLoading: pageState.formulaList.state === 'pending',
        };
    }, [
        shownFormulas,
        pageState.selectedTwinId,
        pageState.selectedTwinDisplayName,
        pageState.formulaList.state,
        navigateToBuilder,
        onFormulaSelect,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaList/FormulaList.styles.ts":
/*!************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/FormulaList.styles.ts ***!
  \************************************************************************/
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
    uwmqm3: ["fdgang7", "f15kemlc"],
    z189sj: ["f15kemlc", "fdgang7"]
  },
  columnHeader: {
    Bhrd7zp: "fl43uef"
  },
  formulaName: {
    sj55zd: "f1817uup",
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "f1i3iumi"
  },
  sortIcon: {
    sj55zd: "f1817uup"
  },
  listTitle: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f1x0m3f5",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "fb86gi6"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".fdgang7{padding-left:24px;}", ".f15kemlc{padding-right:24px;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f1817uup{color:var(--colorBrandBackground);}", ".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f1x0m3f5{font-size:var(--fontSizeBase600);}", ".fb86gi6{line-height:var(--lineHeightBase600);}"]
});

/***/ }),

/***/ "./src/apps/insights/components/FormulaList/FormulaList.utils.ts":
/*!***********************************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/FormulaList.utils.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOutputPropertyReferenceId: () => (/* binding */ getOutputPropertyReferenceId)
/* harmony export */ });
const getOutputPropertyReferenceId = (formula) => {
    const outputPropertyElement = formula.elements.find((element) => element.type === 'OutputProperty');
    if (outputPropertyElement) {
        return outputPropertyElement.propertySelector.referenceId;
    }
    return undefined;
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaList/index.ts":
/*!***********************************************************!*\
  !*** ./src/apps/insights/components/FormulaList/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaList: () => (/* reexport safe */ _FormulaList_root__WEBPACK_IMPORTED_MODULE_0__.FormulaList)
/* harmony export */ });
/* harmony import */ var _FormulaList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormulaList.root */ "./src/apps/insights/components/FormulaList/FormulaList.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.render.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.render.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsDetailsPanelRender: () => (/* binding */ useInsightsDetailsPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ExpressionEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ExpressionEditor */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/Drawer/Drawer.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeader/DrawerHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeaderTitle/DrawerHeaderTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerBody/DrawerBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerFooter/DrawerFooter.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _components_ElementBaseEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ElementBaseEditor */ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/index.ts");
/* harmony import */ var _components_FunctionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FunctionEditor */ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/index.ts");
/* harmony import */ var _components_OutputEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/OutputEditor */ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/index.ts");
/* harmony import */ var _components_InputEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/InputEditor */ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/index.ts");









const useInsightsDetailsPanelRender = ({ state, styles }) => {
    const { isPanelOpen, elementType, onSave, onCancel } = state;
    const getTitle = () => {
        switch (elementType) {
            case 'Expression':
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.editor.title_expression);
            case 'Function':
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.editor.title_function);
            case 'InputProperty':
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.editor.title_input);
            case 'OutputProperty':
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.editor.title_output);
            default:
                return '';
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Drawer, { className: styles.root, position: 'end', open: isPanelOpen, modalType: 'non-modal', size: 'medium', type: 'inline', "aria-label": getTitle() },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.DrawerHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DrawerHeaderTitle, null, getTitle())),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DrawerBody, { className: styles.drawerBody },
            elementType ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ElementBaseEditor__WEBPACK_IMPORTED_MODULE_3__.ElementBaseEditor, { element: state.element, onUpdateElement: state.onUpdateElement })) : null,
            elementType === 'Expression' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ExpressionEditor__WEBPACK_IMPORTED_MODULE_1__.ExpressionEditor, { element: state.element, ref: state.expressionRef })) : null,
            elementType === 'Function' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FunctionEditor__WEBPACK_IMPORTED_MODULE_4__.FunctionEditor, { element: state.element, onUpdateElement: state.onUpdateElement, source: state.source, onUpdateSource: state.onUpdateSources })) : null,
            elementType === 'InputProperty' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InputEditor__WEBPACK_IMPORTED_MODULE_6__.InputEditor, { element: state.element, onUpdateElement: state.onUpdateElement })) : null,
            elementType === 'OutputProperty' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OutputEditor__WEBPACK_IMPORTED_MODULE_5__.OutputEditor, { element: state.element, onUpdateElement: state.onUpdateElement, source: state.source, onUpdateSource: state.onUpdateSources })) : null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DrawerFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Button, { appearance: 'primary', onClick: onSave }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.apply)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Button, { onClick: onCancel }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.cancel)))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.root.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.root.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsDetailsPanel: () => (/* binding */ InsightsDetailsPanel)
/* harmony export */ });
/* harmony import */ var _InsightsDetailsPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsDetailsPanel.render */ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.render.tsx");
/* harmony import */ var _InsightsDetailsPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsDetailsPanel.styles */ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.styles.ts");
/* harmony import */ var _InsightsDetailsPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsDetailsPanel.state */ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.state.ts");



const MODULE_NAME = 'InsightsDetailsPanel';
const InsightsDetailsPanel = () => {
    // get state
    const state = (0,_InsightsDetailsPanel_state__WEBPACK_IMPORTED_MODULE_2__.useInsightsDetailsPanelState)();
    // get styles
    const styles = (0,_InsightsDetailsPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InsightsDetailsPanel_render__WEBPACK_IMPORTED_MODULE_0__.useInsightsDetailsPanelRender)({ state, styles });
};
InsightsDetailsPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.state.ts":
/*!*****************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.state.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsDetailsPanelState: () => (/* binding */ useInsightsDetailsPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/digital-operations.calculation-validator */ "./node_modules/@microsoft/digital-operations.calculation-validator/dist/index.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'InsightsDetailsPanel.state';
const useInsightsDetailsPanelState = () => {
    // contexts
    const { pageState: { currentFormula }, pageDispatch, } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__.useInsightsPageContext)();
    // state
    const [selectedElement, setSelectedElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getSelectedElement(currentFormula));
    const [elementSources, setElementSources] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const expressionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const isPanelOpen = !!selectedElement;
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setSelectedElement(undefined);
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.SELECTED_NODE_SET,
            payload: {
                value: '',
            },
        });
    }, [pageDispatch]);
    const onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // push changes to the context
        if (selectedElement) {
            let element = selectedElement;
            if (element.type === 'Expression') {
                // fetch value
                element = {
                    ...element, // copy to unlink from state object
                    expression: expressionRef.current?.getExpressionValue() ?? '',
                };
            }
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.FORMULA_UPDATE_ELEMENT,
                payload: {
                    element: element,
                },
            });
            if (element.type === 'Function' ||
                element.type === 'Expression' ||
                element.type === 'OutputProperty') {
                let sourceIds = elementSources;
                // This logic will move to the expression editor once we remove the apply button pattern
                if (element.type === 'Expression') {
                    const sourceNames = (0,_microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_1__.getIdentifierValues)(expressionRef.current?.getExpressionValue() ?? '');
                    // get node ids from node names
                    const expressionSourceIds = [];
                    sourceNames.forEach((sourceName) => {
                        const sourceNode = currentFormula.elements.find((node) => node.displayName === sourceName);
                        if (sourceNode !== undefined) {
                            expressionSourceIds.push(sourceNode.id);
                        }
                    });
                    sourceIds = expressionSourceIds;
                }
                // Filter out current element and output element from sources
                const outputElement = currentFormula.elements.find((element) => element.type === 'OutputProperty');
                sourceIds = sourceIds.filter((sourceId) => sourceId !== element.id && sourceId !== outputElement?.id);
                pageDispatch({
                    type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.SELECTED_NODE_UPDATE_SOURCES,
                    payload: {
                        newSourceNodeIds: sourceIds,
                    },
                });
            }
            onCancel();
        }
    }, [currentFormula, elementSources, onCancel, pageDispatch, selectedElement]);
    // side effects
    // Update the selected element when the selection changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const element = getSelectedElement(currentFormula);
        setSelectedElement(element);
        if (element?.type === 'Expression') {
            expressionRef.current?.setExpressionValue(element?.expression ?? '');
        }
    }, [currentFormula, pageDispatch]);
    // Update the element sources when the selection changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let sources = [];
        if (selectedElement?.type === 'OutputProperty' ||
            selectedElement?.type === 'Function' ||
            selectedElement?.type === 'Expression') {
            const relationships = currentFormula.edges.filter((edge) => edge.target === selectedElement.id);
            if (relationships) {
                sources = relationships.map((edge) => edge.source);
                setElementSources(sources);
            }
        }
        else {
            setElementSources(sources);
        }
    }, [currentFormula, selectedElement?.id, selectedElement?.type]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const base = {
            isPanelOpen,
            onSave,
            onCancel,
        };
        let result;
        switch (selectedElement?.type) {
            case 'Function':
                result = {
                    ...base,
                    elementType: 'Function',
                    element: selectedElement,
                    onUpdateElement: setSelectedElement,
                    source: elementSources.length > 0 ? elementSources[0] : '',
                    onUpdateSources: setElementSources,
                };
                break;
            case 'Expression':
                result = {
                    ...base,
                    elementType: 'Expression',
                    element: selectedElement,
                    expressionRef: expressionRef,
                    onUpdateElement: setSelectedElement,
                    onUpdateSources: setElementSources,
                };
                break;
            case 'InputProperty':
                result = {
                    ...base,
                    elementType: 'InputProperty',
                    element: selectedElement,
                    onUpdateElement: setSelectedElement,
                };
                break;
            case 'OutputProperty':
                result = {
                    ...base,
                    elementType: 'OutputProperty',
                    element: selectedElement,
                    onUpdateElement: setSelectedElement,
                    source: elementSources.length > 0 ? elementSources[0] : '',
                    onUpdateSources: setElementSources,
                };
                break;
            // happens when panel is closing when item is unselected
            default:
                result = {
                    ...base,
                    elementType: '',
                };
        }
        return result;
    }, [elementSources, isPanelOpen, onCancel, onSave, selectedElement]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};
function getSelectedElement(currentFormula) {
    return currentFormula.selectedElement ?? undefined;
}


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.styles.ts":
/*!******************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.styles.ts ***!
  \******************************************************************************************/
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
    a9b677: "f13l734f",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  drawerBody: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4akndk",
    Belr9w4: "fe5j3v",
    z189sj: ["f11qrl6u", "fjlbh76"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f13l734f{width:400px;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".f4akndk{column-gap:12px;}", ".fe5j3v{row-gap:12px;}", ".f11qrl6u{padding-right:12px;}", ".fjlbh76{padding-left:12px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.render.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.render.tsx ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementBaseEditorRender: () => (/* binding */ useElementBaseEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");



const useElementBaseEditorRender = (props) => {
    const { state, styles } = props;
    const inputId = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.useId)('input');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { className: styles.row, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.element_label.name), required: true, validationMessage: state.nameValidationMessage },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Input, { appearance: 'outline', value: `${state.element.displayName}`, onChange: (_ex, data) => state.onElementNameSet(data.value), id: inputId, "data-testid": "details-tray-name-input" /* ElementBaseEditorTabTestIds.NameInput */, placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.placeholder.name_placeholder) })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { className: styles.row, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.element_label.description) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Input, { appearance: 'outline', value: state.element.description ?? '', onChange: (_ex, data) => state.onElementDescriptionSet(data.value), id: inputId, "data-testid": "details-tray-description-input" /* ElementBaseEditorTabTestIds.DescriptionInput */, placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.placeholder
                    .description_placeholder) }))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.root.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.root.tsx ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementBaseEditor: () => (/* binding */ ElementBaseEditor)
/* harmony export */ });
/* harmony import */ var _ElementBaseEditor_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementBaseEditor.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.render.tsx");
/* harmony import */ var _ElementBaseEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementBaseEditor.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.styles.ts");
/* harmony import */ var _ElementBaseEditor_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementBaseEditor.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.state.ts");



const MODULE_NAME = 'ElementBaseEditor';
const ElementBaseEditor = (props) => {
    // get state
    const state = (0,_ElementBaseEditor_state__WEBPACK_IMPORTED_MODULE_2__.useElementBaseEditorState)(props);
    // get styles
    const styles = (0,_ElementBaseEditor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_ElementBaseEditor_render__WEBPACK_IMPORTED_MODULE_0__.useElementBaseEditorRender)({ state, styles });
};
ElementBaseEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.state.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.state.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useElementBaseEditorState: () => (/* binding */ useElementBaseEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/digital-operations.calculation-validator */ "./node_modules/@microsoft/digital-operations.calculation-validator/dist/index.js");





const useElementBaseEditorState = (props) => {
    // contexts
    const { pageState } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    const nameValidationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.name_validation_message);
    const noEmptyNameMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.element_base_editor.no_empty_name_message);
    const getNameValidationMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name) => {
        // Note: Need this separate case for now because evaluateIdentifier throws an error if name is empty
        if (name == '') {
            return noEmptyNameMessage;
        }
        try {
            // Wrap this in a try catch in case evaluateIdentifier throws an unexpected error
            const isValidName = (0,_microsoft_digital_operations_calculation_validator__WEBPACK_IMPORTED_MODULE_3__.evaluateIdentifier)(name);
            if (!isValidName) {
                return nameValidationMessage;
            }
        }
        catch (e) {
            return nameValidationMessage;
        }
        return undefined;
    }, [nameValidationMessage, noEmptyNameMessage]);
    // dispatch action
    const onElementNameSet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name) => {
        props.onUpdateElement((0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)((current) => {
            if (current) {
                current.displayName = name;
                // Handle validation message
                const message = getNameValidationMessage(name);
                if (message) {
                    if (current.errorMessages === undefined) {
                        current.errorMessages = { name: message };
                    }
                    else {
                        current.errorMessages['name'] = message;
                    }
                }
                else {
                    // Clear name validation
                    if (current.errorMessages !== undefined) {
                        delete current.errorMessages['name'];
                    }
                }
                if (current.type === 'OutputProperty' &&
                    !pageState.selectedFormulaId)
                    current.propertySelector.referenceId = name; // TODO: Need better way of knowing whether customer is in the process of creating or updating a formula (create some type of action state)
            }
            return current;
        }));
    }, [getNameValidationMessage, pageState.selectedFormulaId, props]);
    const onElementDescriptionSet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((description) => {
        props.onUpdateElement((0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)((current) => {
            if (current) {
                current.description = description;
            }
            return current;
        }));
    }, [props]);
    // hooks
    // callbacks
    // side effects
    // state
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            element: props.element,
            onElementNameSet,
            onElementDescriptionSet,
            nameValidationMessage: props.element.errorMessages?.name,
        };
    }, [props.element, onElementNameSet, onElementDescriptionSet]);
    // result
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.styles.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.styles.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  row: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  root: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f9vy7p0",
    Belr9w4: "f1r0guvd"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f9vy7p0{column-gap:20px;}", ".f1r0guvd{row-gap:20px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/index.ts":
/*!*************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/index.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementBaseEditor: () => (/* reexport safe */ _ElementBaseEditor_root__WEBPACK_IMPORTED_MODULE_0__.ElementBaseEditor)
/* harmony export */ });
/* harmony import */ var _ElementBaseEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementBaseEditor.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/ElementBaseEditor/ElementBaseEditor.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.render.tsx":
/*!*******************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.render.tsx ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExpressionEditorRender: () => (/* binding */ useExpressionEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _components_OperationsTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/OperationsTab */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");





const editorOptions = {
    language: 'CalcEngineExpression',
    value: 'Enter your expression here',
    lineNumbers: 'off', // turn off line numbers
    glyphMargin: false, // turn off glyph margin (line border)
    renderLineHighlight: 'none', // turn off line highlight
    scrollbar: {
        vertical: 'auto', // hide vertical scrollbar
        horizontal: 'hidden', // hide horizontal scrollbar
    },
    minimap: {
        enabled: false, // hide minimap
    },
    overviewRulerLanes: 0, // hide overview ruler
    wordWrap: 'on', // wrap lines
    quickSuggestions: false, // Disable autocomplete
    contextmenu: false, // Disable context menu
};
const useExpressionEditorRender = ({ state, styles }) => {
    const { element, editorRef } = state;
    editorOptions.value =
        element.expression || (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.expression_editor.placeholder);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.editorContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.expression_editor.label), required: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.editor },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.Editor, { options: editorOptions, isExpressionEditor: true, language: 'CalcEngineExpression', ref: editorRef })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OperationsTab__WEBPACK_IMPORTED_MODULE_3__.OperationsTab, { onAddOperationClick: state.editorRef.current?.insertValueAtCursor })));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.root.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.root.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionEditor: () => (/* binding */ ExpressionEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExpressionEditor_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpressionEditor.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.render.tsx");
/* harmony import */ var _ExpressionEditor_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionEditor.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.styles.ts");
/* harmony import */ var _ExpressionEditor_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpressionEditor.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.state.ts");




const MODULE_NAME = 'ExpressionEditor';
const ExpressionEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
    // get state
    const state = (0,_ExpressionEditor_state__WEBPACK_IMPORTED_MODULE_3__.useExpressionEditorState)(props, ref);
    // get styles
    const styles = (0,_ExpressionEditor_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    // render the item
    return (0,_ExpressionEditor_render__WEBPACK_IMPORTED_MODULE_1__.useExpressionEditorRender)({ state, styles });
});
ExpressionEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.state.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.state.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExpressionEditorState: () => (/* binding */ useExpressionEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'ExpressionEditor.state';
const useExpressionEditorState = (props, ref) => {
    // contexts
    // state
    const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => {
        return {
            setExpressionValue: (value) => {
                editorRef.current?.setValue(value);
            },
            getExpressionValue: () => {
                return editorRef.current?.getValue() || '';
            },
            insertValueAtCursor: (value) => {
                editorRef.current?.insertValueAtCursor(value);
            },
        };
    });
    // Callback to insert value at cursor
    const onAddOperationClick = (value) => {
        editorRef.current?.insertValueAtCursor(value);
    };
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            editorRef: editorRef,
            element: props.element,
            onAddOperationClick,
        };
    }, [props.element]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.styles.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.styles.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  title: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "f1pp30po",
    Bhrd7zp: "fl43uef",
    Bg96gwp: "f106mvju"
  },
  instructions: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  inputTypes: {
    sj55zd: "f1817uup"
  },
  editor: {
    Bqenvij: "fecqxwr",
    a9b677: "fly5x3f",
    B4j52fo: "f18zi460",
    Bekrc4i: ["f1wpluaz", "fsfsuhs"],
    Bn0qgzm: "fmklw6v",
    ibv6hh: ["fsfsuhs", "f1wpluaz"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fk9qgl1",
    h3c5rm: ["f1vfbj5f", "f1qpacp7"],
    B9xav0g: "fdf0ba2",
    zhjwy3: ["f1qpacp7", "f1vfbj5f"],
    Bbmb7ep: ["fnivh3a", "fc7yr5o"],
    Beyfa6y: ["fc7yr5o", "fnivh3a"],
    B7oj6ja: ["f1el4m67", "f8yange"],
    Btl43ni: ["f8yange", "f1el4m67"]
  },
  editorContainer: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".f1pp30po{font-size:var(--fontSizeBase500);}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f106mvju{line-height:var(--lineHeightBase500);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".f1817uup{color:var(--colorBrandBackground);}", ".fecqxwr{height:200px;}", ".fly5x3f{width:100%;}", ".f18zi460{border-top-width:var(--strokeWidthThick);}", ".f1wpluaz{border-right-width:var(--strokeWidthThick);}", ".fsfsuhs{border-left-width:var(--strokeWidthThick);}", ".fmklw6v{border-bottom-width:var(--strokeWidthThick);}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".fk9qgl1{border-top-color:var(--colorBrandStroke1);}", ".f1vfbj5f{border-right-color:var(--colorBrandStroke1);}", ".f1qpacp7{border-left-color:var(--colorBrandStroke1);}", ".fdf0ba2{border-bottom-color:var(--colorBrandStroke1);}", ".fnivh3a{border-bottom-right-radius:var(--borderRadiusXLarge);}", ".fc7yr5o{border-bottom-left-radius:var(--borderRadiusXLarge);}", ".f1el4m67{border-top-right-radius:var(--borderRadiusXLarge);}", ".f8yange{border-top-left-radius:var(--borderRadiusXLarge);}", ".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.render.tsx":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.render.tsx ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOperationsTabRender: () => (/* binding */ useOperationsTabRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _components_OperationsButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/OperationsButtonGroup */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/index.ts");



const useOperationsTabRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OperationsButtonGroup__WEBPACK_IMPORTED_MODULE_2__.OperationsButtonGroup, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.mathematical.title), subtitle: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.mathematical.subtitle), operations: ['+', '-', '*', '/', '=', '(', ')', '%'], onAddOperationClick: state.onAddOperationClick }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OperationsButtonGroup__WEBPACK_IMPORTED_MODULE_2__.OperationsButtonGroup, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.computing.title), subtitle: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.computing.subtitle), operations: ['pi', 'e', 'exp', 'sqrt', 'abs'], onAddOperationClick: state.onAddOperationClick }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OperationsButtonGroup__WEBPACK_IMPORTED_MODULE_2__.OperationsButtonGroup, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.trigonometric.title), subtitle: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.trigonometric.subtitle), operations: ['cos', 'sin', 'tan', 'acos', 'asin', 'atan', 'atan2'], onAddOperationClick: state.onAddOperationClick }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_OperationsButtonGroup__WEBPACK_IMPORTED_MODULE_2__.OperationsButtonGroup, { title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.logarithmic.title), subtitle: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.expression_editor.expression_editor_tabs
                .operations_button_groups.logarithmic.subtitle), operations: ['log', 'log2', 'log10'], onAddOperationClick: state.onAddOperationClick })));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.root.tsx":
/*!***************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.root.tsx ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationsTab: () => (/* binding */ OperationsTab)
/* harmony export */ });
/* harmony import */ var _OperationsTab_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationsTab.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.render.tsx");
/* harmony import */ var _OperationsTab_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperationsTab.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.styles.ts");
/* harmony import */ var _OperationsTab_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationsTab.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.state.ts");



const MODULE_NAME = 'OperationsTab';
const OperationsTab = (props) => {
    // get state
    const state = (0,_OperationsTab_state__WEBPACK_IMPORTED_MODULE_2__.useOperationsTabState)(props);
    // get styles
    const styles = (0,_OperationsTab_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_OperationsTab_render__WEBPACK_IMPORTED_MODULE_0__.useOperationsTabRender)({ state, styles });
};
OperationsTab.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.state.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.state.ts ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOperationsTabState: () => (/* binding */ useOperationsTabState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'OperationsTab.state';
const useOperationsTabState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            onAddOperationClick: props.onAddOperationClick,
        };
    }, [props.onAddOperationClick]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.styles.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.styles.ts ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  searchString: {
    B6of3ja: "fvjh0tl",
    Byoj8tv: "f1y2xyjm",
    a9b677: "fly5x3f"
  }
}, {
  d: [".fvjh0tl{margin-top:4px;}", ".f1y2xyjm{padding-bottom:4px;}", ".fly5x3f{width:100%;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.render.tsx":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.render.tsx ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOperationsButtonGroupTestIds: () => (/* binding */ getOperationsButtonGroupTestIds),
/* harmony export */   useOperationsButtonGroupRender: () => (/* binding */ useOperationsButtonGroupRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/Accordion/Accordion.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionItem/AccordionItem.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionHeader/AccordionHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionPanel/AccordionPanel.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/Toolbar/Toolbar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarGroup/ToolbarGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/ToolbarButton.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");



const getOperationsButtonGroupTestIds = (operator) => ({
    OperatorButton: `insert-${operator}-button`,
});
const useOperationsButtonGroupRender = ({ state, styles }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Accordion, { collapsible: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.AccordionItem, { value: state.title },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.AccordionHeader, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.DatabaseMultiple20Filled, null), expandIconPosition: 'end' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.dropdownPanel },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.title }, state.title),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.subtitle }, state.subtitle))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.AccordionPanel, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Toolbar, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarGroup, null, state.operations.map((operation) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.ToolbarButton, { key: operation, name: state.title, value: operation, className: styles.operationButton, onClick: () => state.onAddOperationClick?.(operation), disabled: !state.onAddOperationClick, "data-testid": getOperationsButtonGroupTestIds(operation).OperatorButton }, operation))))))))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.root.tsx":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.root.tsx ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationsButtonGroup: () => (/* binding */ OperationsButtonGroup)
/* harmony export */ });
/* harmony import */ var _OperationsButtonGroup_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationsButtonGroup.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.render.tsx");
/* harmony import */ var _OperationsButtonGroup_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperationsButtonGroup.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.styles.ts");
/* harmony import */ var _OperationsButtonGroup_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationsButtonGroup.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.state.ts");



const MODULE_NAME = 'OperationsButtonGroup';
const OperationsButtonGroup = (props) => {
    // get state
    const state = (0,_OperationsButtonGroup_state__WEBPACK_IMPORTED_MODULE_2__.useOperationsButtonGroupState)(props);
    // get styles
    const styles = (0,_OperationsButtonGroup_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_OperationsButtonGroup_render__WEBPACK_IMPORTED_MODULE_0__.useOperationsButtonGroupRender)({ state, styles });
};
OperationsButtonGroup.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.state.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.state.ts ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOperationsButtonGroupState: () => (/* binding */ useOperationsButtonGroupState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'OperationsButtonGroup.state';
const useOperationsButtonGroupState = (props) => {
    // contexts
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            title: props.title,
            subtitle: props.subtitle,
            operations: props.operations,
            onAddOperationClick: props.onAddOperationClick,
        };
    }, [
        props.title,
        props.subtitle,
        props.operations,
        props.onAddOperationClick,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.styles.ts":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.styles.ts ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  title: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fkhj508",
    Bhrd7zp: "figsok6",
    Bg96gwp: "f1i3iumi"
  },
  subtitle: {
    Bahqtrf: "fk6fouc",
    Be2twd7: "fy9rknc",
    Bhrd7zp: "figsok6",
    Bg96gwp: "fwrc4pm"
  },
  dropdownPanel: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  },
  operationButton: {
    B6of3ja: "f2zxqi",
    t21cq0: ["f1phki43", "ff9s3yw"],
    jrapky: "febqm8h",
    Frg6f3: ["ff9s3yw", "f1phki43"],
    B4j52fo: "f192inf7",
    Bekrc4i: ["f5tn483", "f1ojsxk5"],
    Bn0qgzm: "f1vxd6vx",
    ibv6hh: ["f1ojsxk5", "f5tn483"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "fj3muxo",
    h3c5rm: ["f1akhkt", "f1lxtadh"],
    B9xav0g: "f1aperda",
    zhjwy3: ["f1lxtadh", "f1akhkt"],
    Bf4jedk: "fwbmr0d"
  }
}, {
  d: [".fk6fouc{font-family:var(--fontFamilyBase);}", ".fkhj508{font-size:var(--fontSizeBase300);}", ".figsok6{font-weight:var(--fontWeightRegular);}", ".f1i3iumi{line-height:var(--lineHeightBase300);}", ".fy9rknc{font-size:var(--fontSizeBase200);}", ".fwrc4pm{line-height:var(--lineHeightBase200);}", ".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f2zxqi{margin-top:8px;}", ".f1phki43{margin-right:8px;}", ".ff9s3yw{margin-left:8px;}", ".febqm8h{margin-bottom:8px;}", ".f192inf7{border-top-width:var(--strokeWidthThin);}", ".f5tn483{border-right-width:var(--strokeWidthThin);}", ".f1ojsxk5{border-left-width:var(--strokeWidthThin);}", ".f1vxd6vx{border-bottom-width:var(--strokeWidthThin);}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".fj3muxo{border-top-color:var(--colorNeutralStroke1);}", ".f1akhkt{border-right-color:var(--colorNeutralStroke1);}", ".f1lxtadh{border-left-color:var(--colorNeutralStroke1);}", ".f1aperda{border-bottom-color:var(--colorNeutralStroke1);}", ".fwbmr0d{min-width:32px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/index.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/index.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationsButtonGroup: () => (/* reexport safe */ _OperationsButtonGroup_root__WEBPACK_IMPORTED_MODULE_0__.OperationsButtonGroup)
/* harmony export */ });
/* harmony import */ var _OperationsButtonGroup_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationsButtonGroup.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/components/OperationsButtonGroup/OperationsButtonGroup.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/index.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/index.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationsTab: () => (/* reexport safe */ _OperationsTab_root__WEBPACK_IMPORTED_MODULE_0__.OperationsTab)
/* harmony export */ });
/* harmony import */ var _OperationsTab_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OperationsTab.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/components/OperationsTab/OperationsTab.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/index.ts":
/*!************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/index.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpressionEditor: () => (/* reexport safe */ _ExpressionEditor_root__WEBPACK_IMPORTED_MODULE_0__.ExpressionEditor)
/* harmony export */ });
/* harmony import */ var _ExpressionEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpressionEditor.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/ExpressionEditor/ExpressionEditor.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.render.tsx":
/*!***************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.render.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFunctionEditorRender: () => (/* binding */ useFunctionEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");




const useFunctionEditorRender = (props) => {
    const { state } = props;
    const inputId = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.useId)('input');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.type_dropdown_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.IconizedDropDown, { ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.type_dropdown_label), placeholder: `${(0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.type_dropdown_placeholder)}`, setValue: (value) => state.setSelectedTypeOption(value), value: state.selectedTypeOption, items: state.typeOptions.map((option) => ({
                    key: `${option.category}`,
                    items: option.items.map((item) => ({
                        key: item.value,
                        text: item.displayName,
                    })),
                    text: option.category,
                })), dataTestid: "function-editor-type-dropdown" /* FunctionEditorTestIds.FunctionEditorTypeDropdown */ })),
        state.selectedTypeOption === 'Duration' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.arguments_field_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { appearance: 'outline', id: inputId, "data-testid": "arguments-duration-input" /* FunctionEditorTestIds.ArgumentInputForTypeDuration */, placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.arguments_field_placeholder) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.source_dropdown_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.SimpleDropdown, { placeholder: `${(0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.source_dropdown_placeholder)}`, value: state.selectedSourceOption, setValue: state.setSelectedSourceOption, items: state.sourceOptions.map((x) => ({
                    key: x.key,
                    text: x.value,
                })), ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.function_editor.source_dropdown_label) }))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.root.tsx":
/*!*************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.root.tsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionEditor: () => (/* binding */ FunctionEditor)
/* harmony export */ });
/* harmony import */ var _FunctionEditor_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionEditor.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.render.tsx");
/* harmony import */ var _FunctionEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FunctionEditor.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.styles.ts");
/* harmony import */ var _FunctionEditor_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FunctionEditor.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.state.ts");



const MODULE_NAME = 'FunctionEditor';
const FunctionEditor = (props) => {
    // get state
    const state = (0,_FunctionEditor_state__WEBPACK_IMPORTED_MODULE_2__.useFunctionEditorState)(props);
    // get styles
    const styles = (0,_FunctionEditor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FunctionEditor_render__WEBPACK_IMPORTED_MODULE_0__.useFunctionEditorRender)({ state, styles });
};
FunctionEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.state.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.state.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFunctionEditorState: () => (/* binding */ useFunctionEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _constants_CalculationElements_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants/CalculationElements.constants */ "./src/apps/insights/constants/CalculationElements.constants.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'FunctionEditor.state';
const useFunctionEditorState = (props) => {
    // contexts
    const { pageState: { currentFormula }, } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__.useInsightsPageContext)();
    // state
    const sourceOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return (currentFormula.elements
            // any element in the graph that isn't an output property or the current element.
            // TODO eventually we need to deal with cycles in the graph
            .filter((element) => element.type !== 'OutputProperty' &&
            element.id !== props.element.id)
            .map((element) => {
            return {
                key: element.id,
                value: element.displayName,
            };
        }));
    }, [currentFormula, props.element.id]);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onChangeType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((option) => {
        props.onUpdateElement((0,immer__WEBPACK_IMPORTED_MODULE_4__.produce)((current) => {
            // should always be a function but the callback has a broader signature
            if (current && current.type === 'Function') {
                current.dataType = option;
            }
            return current;
        }));
    }, [props]);
    const setSelectedSourceOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodeId) => {
        props.onUpdateSource([nodeId]);
    }, [props]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedSourceOption: props.source,
            setSelectedSourceOption,
            selectedTypeOption: props.element.dataType,
            setSelectedTypeOption: onChangeType,
            typeOptions: (0,_constants_CalculationElements_constants__WEBPACK_IMPORTED_MODULE_2__.GetCalculationFormulaOptions)(),
            sourceOptions: sourceOptions,
        };
    }, [
        props.source,
        props.element.dataType,
        setSelectedSourceOption,
        onChangeType,
        sourceOptions,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.styles.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.styles.ts ***!
  \**************************************************************************************************************/
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

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/index.ts":
/*!**********************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/index.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FunctionEditor: () => (/* reexport safe */ _FunctionEditor_root__WEBPACK_IMPORTED_MODULE_0__.FunctionEditor)
/* harmony export */ });
/* harmony import */ var _FunctionEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionEditor.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/FunctionEditor/FunctionEditor.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.render.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.render.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInputEditorRender: () => (/* binding */ useInputEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-utilities/lib/hooks/useId.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");




const useInputEditorRender = (props) => {
    const { state, styles } = props;
    const inputId = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.useId)('input');
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { className: styles.root, label: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.input_editor.twin_picker_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { disabled: true, id: inputId, value: `${state.element.twinSelector.referenceId}`, onChange: (_ex, data) => state.twinElement(data.value), "data-testid": "input-editor-twinName-input" /* InputEditorTabTestIds.TwinIdInput */, appearance: 'outline' })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Field, { className: styles.root, label: (0,i18next__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.input_editor.property_picker_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { disabled: true, id: inputId, value: `${state.element.propertySelector.referenceId}`, onChange: (_ex, data) => state.propertyElement(data.value), "data-testid": "input-editor-propertyName-input" /* InputEditorTabTestIds.PropertyIdInput */, appearance: 'outline' }))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.root.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.root.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputEditor: () => (/* binding */ InputEditor)
/* harmony export */ });
/* harmony import */ var _InputEditor_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputEditor.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.render.tsx");
/* harmony import */ var _InputEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputEditor.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.styles.ts");
/* harmony import */ var _InputEditor_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputEditor.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.state.ts");



const MODULE_NAME = 'InputEditor';
const InputEditor = (props) => {
    // get state
    const state = (0,_InputEditor_state__WEBPACK_IMPORTED_MODULE_2__.useInputEditorState)(props);
    // get styles
    const styles = (0,_InputEditor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InputEditor_render__WEBPACK_IMPORTED_MODULE_0__.useInputEditorRender)({ state, styles });
};
InputEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.state.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.state.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInputEditorState: () => (/* binding */ useInputEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const DEBUG_LOGGING = false;
const MODULE_NAME = 'InputEditor.state';
const useInputEditorState = (props) => {
    // contexts
    // state
    const twinElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const twinReferenceId = props.element?.twinSelector?.referenceId;
        return twinReferenceId;
    }, [props]);
    const propertyElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const propertyReferenceId = props.element?.propertySelector?.referenceId;
        return propertyReferenceId;
    }, [props]);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            element: props.element,
            twinElement,
            propertyElement,
        };
    }, [props.element, twinElement, propertyElement]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.styles.ts":
/*!********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.styles.ts ***!
  \********************************************************************************************************/
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

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/index.ts":
/*!*******************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/index.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputEditor: () => (/* reexport safe */ _InputEditor_root__WEBPACK_IMPORTED_MODULE_0__.InputEditor)
/* harmony export */ });
/* harmony import */ var _InputEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputEditor.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/InputEditor/InputEditor.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.render.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.render.tsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutputEditorRender: () => (/* binding */ useOutputEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");




const useOutputEditorRender = (props) => {
    const { state } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.function_editor.source_dropdown_label) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.SimpleDropdown, { placeholder: `${(0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.function_editor.source_dropdown_placeholder)}`, value: state.selectedSourceOption, setValue: state.setSelectedSourceOption, items: state.sourceOptions, ariaLabel: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.function_editor.source_dropdown_label) }))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.root.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.root.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputEditor: () => (/* binding */ OutputEditor)
/* harmony export */ });
/* harmony import */ var _OutputEditor_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputEditor.render */ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.render.tsx");
/* harmony import */ var _OutputEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutputEditor.styles */ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.styles.ts");
/* harmony import */ var _OutputEditor_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutputEditor.state */ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.state.ts");



const MODULE_NAME = 'OutputEditor';
const OutputEditor = (props) => {
    // get state
    const state = (0,_OutputEditor_state__WEBPACK_IMPORTED_MODULE_2__.useOutputEditorState)(props);
    // get styles
    const styles = (0,_OutputEditor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_OutputEditor_render__WEBPACK_IMPORTED_MODULE_0__.useOutputEditorRender)({ state, styles });
};
OutputEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.state.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.state.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutputEditorState: () => (/* binding */ useOutputEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'OutputEditor.state';
const useOutputEditorState = (props) => {
    // contexts
    const { pageState: { currentFormula }, } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    const sourceOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const outputIds = currentFormula.elements
            .filter((element) => element.type === 'OutputProperty')
            .map((element) => element.id);
        return (currentFormula.elements
            // Filter out any element in the graph that isn't an output property or doesn't have an edge pointing at another node.
            // TODO eventually we need to deal with cycles in the graph
            .filter((element) => {
            const hasOutgoingEdgeNotTargetingAnOutput = currentFormula.edges.some((edge) => 
            // Includes the current element if it has an outgoing edge and its not pointing at an output node
            edge.source === props.element.id &&
                !outputIds.includes(edge.target));
            return (
            // Filter out any input property that is not a time series or any element that is not an input or output property
            ((element.type === 'InputProperty' &&
                element.propertySelector.propertyType === 'TimeSeries') ||
                // Filter out any element that is not an input or output property (i.e functions and expressions)
                (element.type !== 'InputProperty' &&
                    element.type !== 'OutputProperty')) &&
                // Filtering out the output properties and any element that doesn't have an outgoing edge
                !hasOutgoingEdgeNotTargetingAnOutput);
        })
            .map((element) => {
            return {
                key: element.id,
                text: element.displayName,
            };
        }));
    }, [currentFormula, props.element.id]);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const setSelectedSourceOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodeId) => {
        props.onUpdateSource([nodeId]);
    }, [props]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedSourceOption: props.source,
            setSelectedSourceOption,
            sourceOptions: sourceOptions,
        };
    }, [props.source, setSelectedSourceOption, sourceOptions]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.styles.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.styles.ts ***!
  \**********************************************************************************************************/
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

/***/ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/index.ts":
/*!********************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/index.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputEditor: () => (/* reexport safe */ _OutputEditor_root__WEBPACK_IMPORTED_MODULE_0__.OutputEditor)
/* harmony export */ });
/* harmony import */ var _OutputEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputEditor.root */ "./src/apps/insights/components/InsightsDetailsPanel/components/OutputEditor/OutputEditor.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsDetailsPanel/index.ts":
/*!********************************************************************!*\
  !*** ./src/apps/insights/components/InsightsDetailsPanel/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsDetailsPanel: () => (/* reexport safe */ _InsightsDetailsPanel_root__WEBPACK_IMPORTED_MODULE_0__.InsightsDetailsPanel)
/* harmony export */ });
/* harmony import */ var _InsightsDetailsPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsDetailsPanel.root */ "./src/apps/insights/components/InsightsDetailsPanel/InsightsDetailsPanel.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.render.tsx":
/*!*************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.render.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useInsightsHierarchyRender: () => (/* binding */ useInsightsHierarchyRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/Menu/Menu.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuTrigger/MenuTrigger.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuPopover/MenuPopover.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuList/MenuList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuItem/MenuItem.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-8.js");





var TestIds;
(function (TestIds) {
    TestIds["BuildNewFormulaForThisTwin"] = "insights-ribbon-build-new-formula-for-this-twin";
    TestIds["BuildNewFormulaForTwinModel"] = "insights-ribbon-build-new-formula-for-twin-model";
})(TestIds || (TestIds = {}));
const useInsightsHierarchyRender = ({ state, styles }) => {
    const customItemLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, itemType) => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.buttonRow },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.leafLabel, onClick: () => state.onNodeSelect(item, itemType) }, item.displayName || item.path),
            itemType !== 'leaf' ? null : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Menu, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.MenuTrigger, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'transparent', iconPosition: 'after', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.MoreHorizontal24Filled, null) })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MenuPopover, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MenuList, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MenuItem, { onClick: () => state.onNewFormula(item), "data-testid": TestIds.BuildNewFormulaForThisTwin }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.ribbon.button_titles
                            .build_new_formula_for_this_twin))))))));
    }, [state, styles]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.hierarchyLabel }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.left_panel_tray.twins_tab_title)),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.HierarchyTree, { onHierarchyItemClick: state.onNodeSelect, customItemLayout: customItemLayout, selectedTwinId: state.selectedTwinId, treeItemClassName: styles.treeItem })));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.root.tsx":
/*!***********************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.root.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsHierarchy: () => (/* binding */ InsightsHierarchy)
/* harmony export */ });
/* harmony import */ var _InsightsHierarchy_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsHierarchy.render */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.render.tsx");
/* harmony import */ var _InsightsHierarchy_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsHierarchy.styles */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.styles.ts");
/* harmony import */ var _InsightsHierarchy_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsHierarchy.state */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.state.ts");



const MODULE_NAME = 'InsightsHierarchy';
const InsightsHierarchy = () => {
    // get state
    const state = (0,_InsightsHierarchy_state__WEBPACK_IMPORTED_MODULE_2__.useInsightsHierarchyState)();
    // get styles
    const styles = (0,_InsightsHierarchy_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InsightsHierarchy_render__WEBPACK_IMPORTED_MODULE_0__.useInsightsHierarchyRender)({ state, styles });
};
InsightsHierarchy.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.state.ts":
/*!***********************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.state.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsHierarchyState: () => (/* binding */ useInsightsHierarchyState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _do_core_hooks_useCalculationClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @do/core/hooks/useCalculationClient */ "./src/apps/core/hooks/useCalculationClient.ts");
/* harmony import */ var _InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InsightsHierarchy.utils */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts");






const DEBUG_LOGGING = false;
const MODULE_NAME = 'InsightsHierarchy.state';
const useInsightsHierarchyState = () => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    const client = (0,_do_core_hooks_useCalculationClient__WEBPACK_IMPORTED_MODULE_4__.useCalculationClient)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onNodeSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (node, hierarchyItemType) => {
        debugLogging && (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'onTwinSelect. {twinId}');
        // only leaf nodes will have formula lists
        if (hierarchyItemType !== 'leaf' || !node.twin) {
            return;
        }
        const twin = node.twin;
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADING,
            payload: {
                twinId: twin.twinId,
            },
        });
        const response = await (0,_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_5__.getAllFormulas)(client, twin.twinId);
        if ('errorCode' in response) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, response.errorMessage);
        }
        else {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
                payload: { data: response },
            });
            if (response.length === 0) {
                pageDispatch({
                    type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_EMPTY_STATE,
                    payload: {
                        twinId: twin.twinId,
                    },
                });
            }
            else {
                pageDispatch({
                    type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_LIST,
                    payload: {
                        twinId: twin.twinId,
                        twinDisplayName: twin.displayName ?? twin.twinId,
                    },
                });
            }
        }
    }, [debugLogging, pageDispatch, client]);
    const onNewFormula = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (node) => {
        const twinId = node.twin?.twinId;
        if (!twinId)
            return;
        // if the twinId is the same as the selectedTwinId, then the formula list is already loaded
        if (twinId === pageState.selectedTwinId) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER,
                payload: {
                    formulaId: undefined,
                    twinId: twinId,
                    twinDisplayName: node.displayName,
                },
            });
            return;
        }
        const selectedTwinId = twinId;
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADING,
            payload: {
                twinId: selectedTwinId,
            },
        });
        const response = await (0,_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_5__.getAllFormulas)(client, selectedTwinId);
        if ('errorCode' in response) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, response.errorMessage);
        }
        else {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
                payload: { data: response },
            });
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER,
                payload: {
                    formulaId: undefined,
                    twinId: selectedTwinId,
                    twinDisplayName: node.displayName,
                },
            });
        }
    }, [client, pageDispatch, pageState.selectedTwinId]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedTwinId: pageState.selectedTwinId,
            onNodeSelect,
            onNewFormula,
        };
    }, [pageState.selectedTwinId, onNodeSelect, onNewFormula]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.styles.ts":
/*!************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.styles.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    t21cq0: ["f1phki43", "ff9s3yw"]
  },
  hierarchyLabel: {
    B6of3ja: "fbhzkq9",
    t21cq0: ["f1ho5h65", "f1hrww17"],
    jrapky: "f1eyf5x8",
    Frg6f3: ["f1hrww17", "f1ho5h65"],
    Bhrd7zp: "fl43uef",
    Be2twd7: "fod5ikn"
  },
  treeItem: {
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"]
  },
  buttonRow: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: "f1869bpl",
    Bt984gj: "f122n59",
    a9b677: "fhuxote"
  },
  leafLabel: {
    Bh6795r: "fqerorx"
  }
}, {
  d: [".f1phki43{margin-right:8px;}", ".ff9s3yw{margin-left:8px;}", ".fbhzkq9{margin-top:8;}", ".f1ho5h65{margin-right:8;}", ".f1hrww17{margin-left:8;}", ".f1eyf5x8{margin-bottom:8;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fod5ikn{font-size:var(--fontSizeBase400);}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1869bpl{justify-content:space-between;}", ".f122n59{align-items:center;}", ".fhuxote{width:175px;}", ".fqerorx{flex-grow:1;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts":
/*!***********************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllFormulas: () => (/* binding */ getAllFormulas)
/* harmony export */ });
/* harmony import */ var _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/CalculationCertifiedEvents */ "./src/apps/insights/models/CalculationCertifiedEvents.ts");

async function getAllFormulas(client, twinId) {
    let continuationToken = undefined;
    let allFormulas = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (client) {
            const calculationJobListTelemetry = {
                featureName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.CalculationFeature.JobCreate,
                activityName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_0__.FormulaManagementActivity.CalculatedPropertiesListed,
            };
            const response = await client.getFormulasByTwinId(calculationJobListTelemetry, twinId, continuationToken);
            if (response.state === 'error') {
                return {
                    state: 'error',
                    errorCode: response.errorCode,
                    errorMessage: `Failed to get formulas: ${response.errorMessage}`,
                };
            }
            allFormulas = allFormulas.concat(response.data.data);
            if (!response.data.continuationToken) {
                break;
            }
            continuationToken = response.data.continuationToken;
        }
    }
    return allFormulas;
}


/***/ }),

/***/ "./src/apps/insights/components/InsightsHierarchy/index.ts":
/*!*****************************************************************!*\
  !*** ./src/apps/insights/components/InsightsHierarchy/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsHierarchy: () => (/* reexport safe */ _InsightsHierarchy_root__WEBPACK_IMPORTED_MODULE_0__.InsightsHierarchy)
/* harmony export */ });
/* harmony import */ var _InsightsHierarchy_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsHierarchy.root */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.render.tsx":
/*!*******************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.render.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsRibbonRender: () => (/* binding */ useInsightsRibbonRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/ToolbarButton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarGroup/ToolbarGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/Menu/Menu.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuTrigger/MenuTrigger.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuPopover/MenuPopover.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/utils/bundleIcon.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-11.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-2.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-3.js");
/* harmony import */ var _ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ElementPickers/ElementPickerRootMenu */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/index.ts");
/* harmony import */ var _components_ScheduleDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ScheduleDrawer */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/index.ts");
/* harmony import */ var _components_SaveFormulaPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SaveFormulaPanel */ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/index.ts");







const useInsightsRibbonRender = (props) => {
    const { state, styles } = props;
    const AddElementIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Cube24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Cube24Regular);
    // Define the booleans based on the current page
    const isListPage = state.page === 'list';
    const isBuilderPage = state.page === 'builder';
    const saveButton = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarButton, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.Save24Regular, null), disabled: state.saveDisabled, "data-testid": "insights-ribbon-save-formula-button" /* InsightsRibbonTestIds.SaveFormulaButton */, onClick: () => state.setSaveFormulaPanelOpen(true) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.save_formula)));
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.ToolbarGroup, { "data-testid": "insights-ribbon-root" /* InsightsRibbonTestIds.Root */, className: styles.buttonGroup },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarButton, { "data-testid": "insights-ribbon-create-formula-button" /* InsightsRibbonTestIds.CreateFormulaButton */, disabled: state.isNewFormulaDisabled, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_10__.Calculator24Regular, null), onClick: state.onNewFormula }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles
                .build_new_formula_for_this_twin)),
            isBuilderPage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.Menu, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.MenuTrigger, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarButton, { className: styles.button, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AddElementIcons, null), "data-testid": "insights-ribbon-add-element-menu-root" /* InsightsRibbonTestIds.AddElementMenuRoot */ },
                        (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.add_element),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_13__.ChevronDown16Regular, null))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.MenuPopover, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_2__.ElementPickerRootMenu, null)))),
            isBuilderPage &&
                (state.saveButtonTooltipMessage ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.Tooltip, { content: state.saveButtonTooltipMessage, relationship: 'description', withArrow: true, positioning: 'below' }, saveButton)) : (saveButton)),
            isListPage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarButton, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Delete24Regular, null), disabled: state.deleteDisabled, "data-testid": "insights-ribbon-delete-formula-button" /* InsightsRibbonTestIds.DeleteFormulaButton */, onClick: state.onDelete }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.delete))),
            isListPage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.ToolbarButton, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.ShiftsActivity24Filled, null), disabled: state.editScheduleDisabled, "data-testid": "insights-ribbon-edit-schedule-button" /* InsightsRibbonTestIds.EditScheduleButton */, onClick: () => state.setSchedulePanelOpen(true) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.ribbon.button_titles.edit_schedule)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ScheduleDrawer__WEBPACK_IMPORTED_MODULE_3__.ScheduleDrawer, { open: state.schedulePanelOpen, setOpen: state.setSchedulePanelOpen }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SaveFormulaPanel__WEBPACK_IMPORTED_MODULE_4__.SaveFormulaPanel, { open: state.saveFormulaPanelOpen, setOpen: state.setSaveFormulaPanelOpen })));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.root.tsx":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.root.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsRibbon: () => (/* binding */ InsightsRibbon)
/* harmony export */ });
/* harmony import */ var _InsightsRibbon_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsRibbon.render */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.render.tsx");
/* harmony import */ var _InsightsRibbon_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsRibbon.styles */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.styles.ts");
/* harmony import */ var _InsightsRibbon_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsRibbon.state */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.state.ts");



const MODULE_NAME = 'InsightsRibbon';
const InsightsRibbon = (props) => {
    // get state
    const state = (0,_InsightsRibbon_state__WEBPACK_IMPORTED_MODULE_2__.useInsightsRibbonState)(props);
    // get styles
    const styles = (0,_InsightsRibbon_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InsightsRibbon_render__WEBPACK_IMPORTED_MODULE_0__.useInsightsRibbonRender)({ state, styles });
};
InsightsRibbon.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.state.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.state.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsRibbonState: () => (/* binding */ useInsightsRibbonState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsightsRibbon.types */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.types.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InsightsHierarchy/InsightsHierarchy.utils */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts");
/* harmony import */ var _InsightsRibbon_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InsightsRibbon.utils */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.utils.ts");
/* harmony import */ var _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/CalculationCertifiedEvents */ "./src/apps/insights/models/CalculationCertifiedEvents.ts");









const DEBUG_LOGGING = false;
const MODULE_NAME = 'InsightsRibbon.state';
const useInsightsRibbonState = (_props) => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__.useInsightsPageContext)();
    // state
    const [schedulePanelOpen, setSchedulePanelOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [saveFormulaPanelOpen, setSaveFormulaPanelOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const calculationClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useCalculationClient)();
    // callbacks
    const onNewFormula = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, 'New formula');
        if (pageState.selectedTwinId) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER,
                payload: {
                    formulaId: undefined,
                    twinId: pageState.selectedTwinId,
                    twinDisplayName: pageState.selectedTwinDisplayName || pageState.selectedTwinId || '',
                },
            });
        }
    }, [
        pageDispatch,
        pageState.selectedTwinDisplayName,
        pageState.selectedTwinId,
    ]);
    const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, 'Deleting formula');
        if (!calculationClient) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Calculation client not initialized');
            return;
        }
        if (pageState.selectedTwinId &&
            pageState.selectedFormulaId &&
            pageState.currentFormula) {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContextActionType.FORMULA_LIST_LOADING,
                payload: {
                    twinId: pageState.selectedTwinId,
                },
            });
            const jobDeleteTelemetry = {
                featureName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_8__.CalculationFeature.JobCreate,
                activityName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_8__.FormulaManagementActivity.FormulaDeleteCalled,
            };
            const result = await calculationClient.deleteFormula(
            //TODO: Await will trigger a delay, need to disable interactions until the delete is complete; MAY NOT BE NEEDED IF LOADING SCREEN IS IMPLEMENTED
            jobDeleteTelemetry, pageState.selectedTwinId, pageState.currentFormula.id);
            if (result && result.state === 'error') {
                (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, result.errorMessage);
            }
            else if (result && result.state === 'success') {
                //TODO: Remove formula from formula list in context instead of fetching all formulas again
                const response = await (0,_InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_6__.getAllFormulas)(calculationClient, pageState.selectedTwinId);
                if ('errorCode' in response) {
                    (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, response.errorMessage);
                }
                else {
                    pageDispatch({
                        type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
                        payload: { data: response },
                    });
                }
            }
        }
    }, [
        pageState.currentFormula,
        pageState.selectedFormulaId,
        pageState.selectedTwinId,
        calculationClient,
        pageDispatch,
    ]);
    const localizedFormulaValidationMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (!pageState.currentFormula) {
            return undefined;
        }
        const formulaValidationType = (0,_InsightsRibbon_utils__WEBPACK_IMPORTED_MODULE_7__.validateFormula)(pageState.currentFormula.elements, pageState.currentFormula.edges);
        switch (formulaValidationType) {
            case _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_3__.FormulaBuilderError.EmptyFormula:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.ribbon.validation_messages.empty_formula);
            case _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_3__.FormulaBuilderError.DanglingElements:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.ribbon.validation_messages.dangling_elements);
            case _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_3__.FormulaBuilderError.OutputElementMissing:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.ribbon.validation_messages.output_element_missing);
            case _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_3__.FormulaBuilderError.InvalidElements:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.ribbon.validation_messages.invalid_elements);
            default:
                return undefined;
        }
    }, [pageState.currentFormula]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            page: pageState.page,
            saveDisabled: localizedFormulaValidationMessage !== undefined,
            saveButtonTooltipMessage: localizedFormulaValidationMessage,
            deleteDisabled: !(pageState.selectedTwinId &&
                pageState.selectedFormulaId &&
                pageState.currentFormula),
            editScheduleDisabled: !pageState.selectedFormulaId,
            schedulePanelOpen,
            setSchedulePanelOpen,
            isNewFormulaDisabled: !pageState.selectedTwinId,
            onNewFormula: onNewFormula,
            saveFormulaPanelOpen,
            setSaveFormulaPanelOpen,
            onDelete,
        };
    }, [
        pageState.page,
        pageState.selectedTwinId,
        pageState.selectedFormulaId,
        pageState.currentFormula,
        localizedFormulaValidationMessage,
        schedulePanelOpen,
        onNewFormula,
        saveFormulaPanelOpen,
        onDelete,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.styles.ts":
/*!******************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.styles.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    De3pzq: "fxugw4r",
    Bbmb7ep: ["fnivh3a", "fc7yr5o"],
    Beyfa6y: ["fc7yr5o", "fnivh3a"],
    B7oj6ja: ["f1el4m67", "f8yange"],
    Btl43ni: ["f8yange", "f1el4m67"],
    E5pizo: "f1whvlc6",
    B6of3ja: "f2zxqi",
    t21cq0: ["f1phki43", "ff9s3yw"],
    jrapky: "febqm8h",
    Frg6f3: ["ff9s3yw", "f1phki43"],
    a9b677: "fly5x3f"
  },
  button: {
    mc9l5x: "f22iagw",
    i8kkvl: "f1q8lukm",
    Belr9w4: "f1ma2n7n"
  },
  buttonGroup: {
    mc9l5x: "f22iagw"
  },
  listIcons: {
    mc9l5x: "f22iagw"
  }
}, {
  d: [".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".fnivh3a{border-bottom-right-radius:var(--borderRadiusXLarge);}", ".fc7yr5o{border-bottom-left-radius:var(--borderRadiusXLarge);}", ".f1el4m67{border-top-right-radius:var(--borderRadiusXLarge);}", ".f8yange{border-top-left-radius:var(--borderRadiusXLarge);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f2zxqi{margin-top:8px;}", ".f1phki43{margin-right:8px;}", ".ff9s3yw{margin-left:8px;}", ".febqm8h{margin-bottom:8px;}", ".fly5x3f{width:100%;}", ".f22iagw{display:flex;}", ".f1q8lukm{column-gap:4px;}", ".f1ma2n7n{row-gap:4px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.types.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.types.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormulaBuilderError: () => (/* binding */ FormulaBuilderError)
/* harmony export */ });
/** input parameters to InsightsRibbon */
var FormulaBuilderError;
(function (FormulaBuilderError) {
    FormulaBuilderError["EmptyFormula"] = "Empty formula";
    FormulaBuilderError["DanglingElements"] = "Dangling elements";
    FormulaBuilderError["OutputElementMissing"] = "Output element missing";
    FormulaBuilderError["InvalidElements"] = "Invalid elements";
})(FormulaBuilderError || (FormulaBuilderError = {}));


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.utils.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/InsightsRibbon.utils.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allElementsAreValid: () => (/* binding */ allElementsAreValid),
/* harmony export */   doesOutputElementExist: () => (/* binding */ doesOutputElementExist),
/* harmony export */   findDanglingElements: () => (/* binding */ findDanglingElements),
/* harmony export */   isEmptyFormula: () => (/* binding */ isEmptyFormula),
/* harmony export */   validateFormula: () => (/* binding */ validateFormula)
/* harmony export */ });
/* harmony import */ var _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsRibbon.types */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.types.ts");

/**
 * Runs all validation checks on the formula
 * @param elements
 * @param edges
 * @returns FormulaBuilderError if a validation error is found, otherwise undefined
 */
function validateFormula(elements, edges) {
    if (isEmptyFormula(elements)) {
        return _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_0__.FormulaBuilderError.EmptyFormula;
    }
    if (findDanglingElements(elements, edges).length > 0) {
        return _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_0__.FormulaBuilderError.DanglingElements;
    }
    if (!doesOutputElementExist(elements)) {
        return _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_0__.FormulaBuilderError.OutputElementMissing;
    }
    if (!allElementsAreValid(elements)) {
        return _InsightsRibbon_types__WEBPACK_IMPORTED_MODULE_0__.FormulaBuilderError.InvalidElements;
    }
    return undefined;
}
/**
 * Find elements that are not connected to any edge
 * @param elements
 * @param edges
 * @returns Array of elements that are not connected to any edge
 */
function findDanglingElements(elements, edges) {
    const allIds = new Set();
    // Collect all unique IDs from source and target in edges
    edges.forEach((edge) => {
        allIds.add(edge.source);
        allIds.add(edge.target);
    });
    // Filter elements that are not in the collected IDs
    const danglingElements = elements.filter((element) => !allIds.has(element.id));
    return danglingElements;
}
/**
 * Check if output element exists in the formula
 * @param elements
 * @returns True if output element exists, otherwise false
 */
function doesOutputElementExist(elements) {
    return elements.some((element) => element.type === 'OutputProperty');
}
/**
 * Check if formula is empty
 * @param elements
 * @returns True if formula is empty, otherwise false
 */
function isEmptyFormula(elements) {
    return elements.length === 0;
}
/**
 * Check if all elements are free of errorMessages
 * @param elements
 * @returns True if all elements have no errorMessages, otherwise false
 */
function allElementsAreValid(elements) {
    return elements.every((element) => !element.errorMessages || Object.keys(element.errorMessages).length === 0);
}


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.render.tsx":
/*!*************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.render.tsx ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSaveFormulaPanelRender: () => (/* binding */ useSaveFormulaPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/Drawer/Drawer.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeader/DrawerHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeaderTitle/DrawerHeaderTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerBody/DrawerBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerFooter/DrawerFooter.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");




const useSaveFormulaPanelRender = (props) => {
    const { state, styles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Drawer, { position: 'end', open: state.open, size: 'small', modalType: 'alert', className: styles.drawerBody },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.DrawerHeaderTitle, { action: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'subtle', "aria-label": 'Close', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Dismiss24Regular, null), onClick: () => state.onCancel() }) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.save_formula_panel.title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.DrawerBody, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.messageBarGroup }, state.saveFormulaPanelErrorBanner && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MessageBar, { intent: 'error', "data-testid": "save-formula-panel-error-banner" /* SaveFormulaPanelTestIds.ErrorBanner */ },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MessageBarBody, null,
                    state.saveFormulaPanelErrorBanner.errorMessage,
                    ' ')))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Field, { className: styles.text, required: true, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.name), validationMessage: state.nameValidationMessage },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.Input, { placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.insights.save_formula_panel.formula_name_placeholder), value: state.formulaName, onChange: (_ev, value) => state.setFormulaName(value.value), onBlur: (_e) => {
                        state.validateNameInput();
                    }, "data-testid": "save-formula-panel-name-box" /* SaveFormulaPanelTestIds.NameBox */ }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DrawerFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: 'primary', onClick: state.onSave, "aria-label": 'Save', disabled: state.isSaveDisabled }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.save)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: state.onCancel, "aria-label": 'Cancel' }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.cancel)))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.root.tsx":
/*!***********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.root.tsx ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveFormulaPanel: () => (/* binding */ SaveFormulaPanel)
/* harmony export */ });
/* harmony import */ var _SaveFormulaPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveFormulaPanel.render */ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.render.tsx");
/* harmony import */ var _SaveFormulaPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaveFormulaPanel.styles */ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.styles.ts");
/* harmony import */ var _SaveFormulaPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaveFormulaPanel.state */ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.state.ts");



const MODULE_NAME = 'SaveFormulaPanel';
const SaveFormulaPanel = (props) => {
    // get state
    const state = (0,_SaveFormulaPanel_state__WEBPACK_IMPORTED_MODULE_2__.useSaveFormulaPanelState)(props);
    // get styles
    const styles = (0,_SaveFormulaPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_SaveFormulaPanel_render__WEBPACK_IMPORTED_MODULE_0__.useSaveFormulaPanelRender)({ state, styles });
};
SaveFormulaPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.state.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.state.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSaveFormulaPanelState: () => (/* binding */ useSaveFormulaPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../InsightsHierarchy/InsightsHierarchy.utils */ "./src/apps/insights/components/InsightsHierarchy/InsightsHierarchy.utils.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/CalculationCertifiedEvents */ "./src/apps/insights/models/CalculationCertifiedEvents.ts");








const DEBUG_LOGGING = false;
const MODULE_NAME = 'SaveFormulaPanel.state';
const useSaveFormulaPanelState = (props) => {
    const existingFormulaNameMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_5__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_5__.strings.insights.save_formula_panel.existing_formula_name_error);
    const noEmptyNameMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_5__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_5__.strings.insights.save_formula_panel.formula_name_empty_error);
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__.useInsightsPageContext)();
    // state
    const [formulaName, setFormulaName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [nameValidationMessage, setNameValidationMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [saveFormulaPanelErrorBanner, setSaveFormulaPanelErrorBanner] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [isSaveDisabled, setIsSaveDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const calculationClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useCalculationClient)();
    const extensionClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useExtensionClient)();
    // callbacks
    const validateNameInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // Check if the name input is the same as the current formula name
        if (pageState.currentFormula.displayName === formulaName) {
            setNameValidationMessage(undefined);
        }
        // Check if the name input is empty
        else if (formulaName === '') {
            setNameValidationMessage(noEmptyNameMessage);
        }
        // Check if the name input is the same as an existing formula name
        else if (pageState.formulaList.state === 'success' &&
            pageState.formulaList.data.some((f) => f.displayName === formulaName)) {
            setNameValidationMessage(existingFormulaNameMessage);
        }
        else {
            setNameValidationMessage(undefined);
        }
    }, [
        existingFormulaNameMessage,
        formulaName,
        noEmptyNameMessage,
        pageState.currentFormula,
        pageState.formulaList,
    ]);
    const handleSuccess = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId) => {
        if (!twinId)
            return;
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.FORMULA_LIST_LOADING,
            payload: {
                twinId: twinId,
            },
        });
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.NAVIGATE_TO_LIST,
            payload: {
                twinId: twinId,
                twinDisplayName: pageState.selectedTwinDisplayName || twinId,
            },
        });
        const response = await (0,_InsightsHierarchy_InsightsHierarchy_utils__WEBPACK_IMPORTED_MODULE_2__.getAllFormulas)(calculationClient, twinId);
        if ('errorCode' in response) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, response.errorMessage);
        }
        else {
            pageDispatch({
                type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
                payload: { data: response },
            });
        }
    }, [pageDispatch, pageState.selectedTwinDisplayName, calculationClient]);
    const onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, 'Saving formula');
        // Don't save if the name is invalid
        if (nameValidationMessage) {
            return;
        }
        // disable save button while saving
        setIsSaveDisabled(true);
        // Update formula name in current
        const newFormula = (0,immer__WEBPACK_IMPORTED_MODULE_7__.produce)(pageState.currentFormula, (draft) => {
            draft.displayName = formulaName;
        });
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextActionType.FORMULA_SET_DISPLAY_NAME,
            payload: {
                displayName: formulaName,
            },
        });
        if (!calculationClient) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Calculation client not initialized');
            setIsSaveDisabled(false); // re-enable save button
            return;
        }
        let result;
        if (pageState.selectedFormulaId && pageState.selectedTwinId) {
            result = await calculationClient.updateFormula(pageState.selectedTwinId, newFormula);
        }
        else if (pageState.selectedTwinId) {
            const jobCreateTelemetry = {
                featureName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_6__.CalculationFeature.JobCreate,
                activityName: _models_CalculationCertifiedEvents__WEBPACK_IMPORTED_MODULE_6__.JobCreateActivity.FormulaSavedCalled,
            };
            result = await calculationClient.createFormula(jobCreateTelemetry, pageState.selectedTwinId, newFormula);
        }
        if (result && result.state === 'success') {
            await handleSuccess(pageState.selectedTwinId);
            props.setOpen(false); // close the panel on Success
            if (extensionClient) {
                extensionClient.notification.open({
                    title: (0,_do_localization__WEBPACK_IMPORTED_MODULE_5__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_5__.strings.insights.save_formula_panel.formula_success_message, {
                        formulaName: formulaName,
                    }),
                    notificationType: _do_core__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Success,
                    itemType: 'DigitalOperationsOperationalInsight',
                });
            }
        }
        else {
            setSaveFormulaPanelErrorBanner({
                errorMessage: result?.errorMessage ||
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_5__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_5__.strings.insights.save_formula_panel.formula_error_message),
            });
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to save or update formula', result);
        }
        // re-enable save button
        setIsSaveDisabled(false);
    }, [
        nameValidationMessage,
        pageState.currentFormula,
        pageState.selectedFormulaId,
        pageState.selectedTwinId,
        pageDispatch,
        formulaName,
        calculationClient,
        props,
        handleSuccess,
        extensionClient,
    ]);
    const onCancel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setNameValidationMessage(undefined); // clear validation message
        props.setOpen(false); // close the panel
        setSaveFormulaPanelErrorBanner(undefined); // clear error banner
    }, [props]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // shows the formula name in the input field
        setFormulaName(pageState.currentFormula.displayName);
    }, [pageState.currentFormula]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            open: props.open,
            setOpen: props.setOpen,
            onSave,
            formulaName,
            setFormulaName,
            handleSuccess,
            nameValidationMessage,
            setNameValidationMessage,
            validateNameInput,
            onCancel,
            saveFormulaPanelErrorBanner,
            isSaveDisabled,
        };
    }, [
        props.open,
        props.setOpen,
        onSave,
        formulaName,
        handleSuccess,
        nameValidationMessage,
        validateNameInput,
        onCancel,
        saveFormulaPanelErrorBanner,
        isSaveDisabled,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.styles.ts":
/*!************************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.styles.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  drawerBody: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4akndk",
    Belr9w4: "fe5j3v",
    z189sj: ["f11qrl6u", "fjlbh76"]
  },
  text: {
    B6of3ja: "f2zxqi",
    t21cq0: ["f8zmjen", "fjf1xye"],
    Bhrd7zp: "fdj6btp"
  },
  messageBarGroup: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4akndk",
    Belr9w4: "fe5j3v",
    B6of3ja: "f2zxqi",
    z189sj: ["f11qrl6u", "fjlbh76"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f4akndk{column-gap:12px;}", ".fe5j3v{row-gap:12px;}", ".f11qrl6u{padding-right:12px;}", ".fjlbh76{padding-left:12px;}", ".f2zxqi{margin-top:8px;}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".fdj6btp{font-weight:var(--fontWeightMedium);}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/index.ts":
/*!******************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/index.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveFormulaPanel: () => (/* reexport safe */ _SaveFormulaPanel_root__WEBPACK_IMPORTED_MODULE_0__.SaveFormulaPanel)
/* harmony export */ });
/* harmony import */ var _SaveFormulaPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaveFormulaPanel.root */ "./src/apps/insights/components/InsightsRibbon/components/SaveFormulaPanel/SaveFormulaPanel.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.render.tsx":
/*!*********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.render.tsx ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useScheduleDrawerRender: () => (/* binding */ useScheduleDrawerRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleDrawer.types */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.types.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/Drawer/Drawer.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeader/DrawerHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeaderTitle/DrawerHeaderTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerBody/DrawerBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-radio/lib/components/RadioGroup/RadioGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-radio/lib/components/Radio/Radio.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Dropdown/Dropdown.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerFooter/DrawerFooter.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-spinner/lib/components/Spinner/Spinner.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_calendar_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-calendar-compat */ "./node_modules/@fluentui/react-calendar-compat/lib/utils/dateMath/dateMath.js");






var TestIds;
(function (TestIds) {
    TestIds["CloseButton"] = "schedule-drawer-close-button";
    TestIds["ScheduleOnButton"] = "schedule-drawer-schedule-on-button";
    TestIds["ScheduleOffButton"] = "schedule-drawer-schedule-off-button";
    TestIds["RepeatUnitOfTimeDropdown"] = "schedule-drawer-repeat-unit-of-time-dropdown";
    TestIds["FrequencyInput"] = "schedule-drawer-frequency-input";
    TestIds["StartDateTimeInput"] = "schedule-drawer-start-date-time-input";
    TestIds["SaveButton"] = "schedule-drawer-save-button";
    TestIds["CancelButton"] = "schedule-drawer-cancel-button";
})(TestIds || (TestIds = {}));
const useScheduleDrawerRender = (props) => {
    const { state, styles } = props;
    const { scheduledRun, setScheduledRun, unitOfTimeEncoding, setUnitOfTimeEncoding, frequencyValue, setFrequencyValue, startDateTime, setStartDateTime, isLoading, onSave, open, setOpen, } = state;
    // Restrictions for the date picker to not allow past dates
    const minDate = (0,_fluentui_react_calendar_compat__WEBPACK_IMPORTED_MODULE_3__.addDays)(new Date(), -1);
    const getHintByRepeatType = () => {
        switch (unitOfTimeEncoding) {
            case _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_MINUTE:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.scheduling_by_minute_hint);
            case _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_HOUR:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.scheduling_by_hour_hint);
            default:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.scheduling_by_day_hint);
        }
    };
    const getPlaceholderByRepeatType = () => {
        switch (unitOfTimeEncoding) {
            case _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_MINUTE:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray
                    .frequency_by_minutes_placeholder);
            case _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_HOUR:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray
                    .frequency_by_hours_placeholder);
            default:
                return (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray
                    .frequency_by_days_placeholder);
        }
    };
    const unitOfTimeOptions = [
        {
            name: _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_MINUTE,
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.repeat_frequency_options
                .by_minute),
        },
        {
            name: _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_HOUR,
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.repeat_frequency_options
                .by_hour),
        },
        {
            name: _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.RepeatByDropdownEncoding.BY_THE_DAY,
            localizedString: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.repeat_frequency_options
                .by_day),
        },
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Drawer, { position: 'end', modalType: 'alert', open: open, className: styles.drawerBody, size: 'medium' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.DrawerHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.DrawerHeaderTitle, { action: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Button, { appearance: 'subtle', "aria-label": 'Close', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.Dismiss24Regular, null), onClick: () => setOpen(false), "data-testid": TestIds.CloseButton }) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.edit_schedule_title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DrawerBody, { className: styles.drawerBody },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.scheduled_run_radio_labels) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.RadioGroup, { layout: 'horizontal', value: scheduledRun, onChange: (_, data) => setScheduledRun(data.value), disabled: isLoading },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Radio, { value: _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.ScheduledRunType.ON, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.radio_button_labels
                            .schedule_on), "data-testid": TestIds.ScheduleOnButton }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Radio, { value: _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.ScheduledRunType.OFF, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.radio_button_labels
                            .schedule_off), "data-testid": TestIds.ScheduleOffButton }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.Label, { className: styles.text }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.scheduling_interval_label)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Field, { className: styles.text, required: true, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray
                    .scheduling_repeat_interval_dropdown_label) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.Dropdown, { value: unitOfTimeOptions.find((x) => x.name === unitOfTimeEncoding)
                        ?.localizedString, onOptionSelect: (_ev, selection) => setUnitOfTimeEncoding(`${selection.optionValue}`), disabled: scheduledRun === _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.ScheduledRunType.OFF || isLoading, "data-testid": TestIds.RepeatUnitOfTimeDropdown }, unitOfTimeOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.Option, { key: option.name, value: option.name }, option.localizedString))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray
                    .scheduling_repeat_interval_label), required: true, className: styles.text, hint: getHintByRepeatType() },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__.Input, { type: 'number', id: 'frequency-input-id', placeholder: getPlaceholderByRepeatType(), disabled: scheduledRun === _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.ScheduledRunType.OFF || isLoading, value: frequencyValue, onChange: (_ev, { value }) => setFrequencyValue(+value), min: 0, "data-testid": TestIds.FrequencyInput })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.Field, { required: true, className: styles.text, label: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.start_date_and_time_label), hint: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.scheduling_editing_tray.start_date_and_time_hint) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__.Input, { value: startDateTime, disabled: scheduledRun === _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_1__.ScheduledRunType.OFF || isLoading, type: 'datetime-local', id: 'datetime-local-input-id', name: 'datetime-local-input-name', min: minDate.toISOString().slice(0, 16), onChange: (_ev, { value }) => setStartDateTime(value), "data-testid": TestIds.StartDateTimeInput }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__.DrawerFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Button, { appearance: 'primary', onClick: onSave, disabled: isLoading, icon: isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__.Spinner, { size: 'tiny' }) : undefined, "data-testid": TestIds.SaveButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.apply)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: () => setOpen(false), "data-testid": TestIds.CancelButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.cancel)))));
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.root.tsx":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.root.tsx ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleDrawer: () => (/* binding */ ScheduleDrawer)
/* harmony export */ });
/* harmony import */ var _ScheduleDrawer_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleDrawer.render */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.render.tsx");
/* harmony import */ var _ScheduleDrawer_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleDrawer.styles */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.styles.ts");
/* harmony import */ var _ScheduleDrawer_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleDrawer.state */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.state.ts");



const MODULE_NAME = 'ScheduleDrawer';
const ScheduleDrawer = (props) => {
    // get state
    const state = (0,_ScheduleDrawer_state__WEBPACK_IMPORTED_MODULE_2__.useScheduleDrawerState)(props);
    // get styles
    const styles = (0,_ScheduleDrawer_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_ScheduleDrawer_render__WEBPACK_IMPORTED_MODULE_0__.useScheduleDrawerRender)({ state, styles });
};
ScheduleDrawer.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.state.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.state.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScheduleDrawerState: () => (/* binding */ useScheduleDrawerState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleDrawer.types */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.types.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");




const DEBUG_LOGGING = false;
const MODULE_NAME = 'ScheduleDrawer.state';
const useScheduleDrawerState = (props) => {
    const { open, setOpen } = props;
    // contexts
    const { pageState } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_3__.useInsightsPageContext)();
    // state
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scheduledRun, setScheduledRun] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_2__.ScheduledRunType.OFF);
    const [unitOfTimeEncoding, setUnitOfTimeEncoding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_ScheduleDrawer_types__WEBPACK_IMPORTED_MODULE_2__.RepeatByDropdownEncoding.BY_THE_MINUTE);
    const [frequencyValue, setFrequencyValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    // State will always hold a STRING representing ISO format date time in local time
    const [startDateTime, setStartDateTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const calculationClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useCalculationClient)();
    // callbacks
    const onSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().info(MODULE_NAME, 'Saving schedule');
        if (!calculationClient) {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Calculation client [in ScheduleDrawer.state] not initialized');
            return;
        }
        const computeLookback = unitOfTimeEncoding.replace('_', `${2 * frequencyValue}`);
        const formulaWithUpdatedSchedule = {
            id: pageState.currentFormula.id,
            displayName: pageState.currentFormula.displayName,
            elements: pageState.currentFormula.elements,
            edges: pageState.currentFormula.edges,
            scheduleRuns: {
                scheduleCalculation: scheduledRun,
                lookbackWindow: computeLookback,
                startTimeUtc: new Date(startDateTime), // Creates a DATE in local time
                executionFrequency: unitOfTimeEncoding.replace('_', `${frequencyValue}`),
                executionDelay: 'PT5M', // Intentionally hardcoded for now
            },
        };
        let response;
        if (pageState.selectedTwinId) {
            setIsLoading(true);
            response = await calculationClient.updateFormula(pageState.selectedTwinId, formulaWithUpdatedSchedule);
        }
        else {
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Selected twin ID not found [in ScheduleDrawer.state]');
        }
        if (response && response.state === 'success') {
            setOpen(false);
        }
        else {
            // TODO: Add banner message in panel to surface error
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().error(MODULE_NAME, 'Failed to update formula schedule', response);
        }
        setIsLoading(false);
    }, [
        calculationClient,
        unitOfTimeEncoding,
        frequencyValue,
        pageState.currentFormula.id,
        pageState.currentFormula.displayName,
        pageState.currentFormula.elements,
        pageState.currentFormula.edges,
        pageState.selectedTwinId,
        scheduledRun,
        startDateTime,
        setOpen,
    ]);
    // Update the state values when selected formula changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const scheduledRun = pageState.currentFormula.scheduleRuns;
        if (scheduledRun) {
            // Extract unit of time and frequency from the execution frequency string
            const unitOfTime = scheduledRun.executionFrequency.replace(/[0-9]+/g, '_');
            const frequency = scheduledRun.executionFrequency.replace(/[^0-9]/g, '');
            const timeZoneOffset = scheduledRun.startTimeUtc.getTimezoneOffset();
            const localDateTime = new Date(scheduledRun.startTimeUtc.getTime() - timeZoneOffset * 60000); // localDateTime is now a DATE object in local time
            // Set state values from existing formula schedule
            setScheduledRun(scheduledRun.scheduleCalculation);
            setUnitOfTimeEncoding(unitOfTime);
            setFrequencyValue(parseInt(frequency));
            setStartDateTime(localDateTime.toISOString().slice(0, 16)); // Now a STRING in ISO format in local time
        }
    }, [pageState.currentFormula]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            open,
            setOpen,
            onSave,
            frequencyValue: frequencyValue.toString(),
            setFrequencyValue,
            startDateTime,
            setStartDateTime,
            scheduledRun,
            setScheduledRun,
            unitOfTimeEncoding,
            setUnitOfTimeEncoding,
            isLoading,
        };
    }, [
        open,
        setOpen,
        onSave,
        frequencyValue,
        startDateTime,
        scheduledRun,
        unitOfTimeEncoding,
        isLoading,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.styles.ts":
/*!********************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.styles.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {},
  drawerBody: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    i8kkvl: "f4akndk",
    Belr9w4: "fe5j3v",
    z189sj: ["f11qrl6u", "fjlbh76"]
  },
  text: {
    B6of3ja: "f2zxqi",
    t21cq0: ["f8zmjen", "fjf1xye"],
    Bhrd7zp: "fdj6btp"
  },
  control: {
    B2u0y6b: "f1kaai3v"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f4akndk{column-gap:12px;}", ".fe5j3v{row-gap:12px;}", ".f11qrl6u{padding-right:12px;}", ".fjlbh76{padding-left:12px;}", ".f2zxqi{margin-top:8px;}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".fdj6btp{font-weight:var(--fontWeightMedium);}", ".f1kaai3v{max-width:300px;}"]
});

/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.types.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.types.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepeatByDropdownEncoding: () => (/* binding */ RepeatByDropdownEncoding),
/* harmony export */   ScheduledRunType: () => (/* binding */ ScheduledRunType)
/* harmony export */ });
var ScheduledRunType;
(function (ScheduledRunType) {
    ScheduledRunType["ON"] = "On";
    ScheduledRunType["OFF"] = "Off";
})(ScheduledRunType || (ScheduledRunType = {}));
var RepeatByDropdownEncoding;
(function (RepeatByDropdownEncoding) {
    RepeatByDropdownEncoding["BY_THE_MINUTE"] = "PT_M";
    RepeatByDropdownEncoding["BY_THE_HOUR"] = "PT_H";
    RepeatByDropdownEncoding["BY_THE_DAY"] = "P_D";
})(RepeatByDropdownEncoding || (RepeatByDropdownEncoding = {}));


/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/index.ts":
/*!****************************************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleDrawer: () => (/* reexport safe */ _ScheduleDrawer_root__WEBPACK_IMPORTED_MODULE_0__.ScheduleDrawer)
/* harmony export */ });
/* harmony import */ var _ScheduleDrawer_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleDrawer.root */ "./src/apps/insights/components/InsightsRibbon/components/ScheduleDrawer/ScheduleDrawer.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/InsightsRibbon/index.ts":
/*!**************************************************************!*\
  !*** ./src/apps/insights/components/InsightsRibbon/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsRibbon: () => (/* reexport safe */ _InsightsRibbon_root__WEBPACK_IMPORTED_MODULE_0__.InsightsRibbon)
/* harmony export */ });
/* harmony import */ var _InsightsRibbon_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsRibbon.root */ "./src/apps/insights/components/InsightsRibbon/InsightsRibbon.root.tsx");



/***/ }),

/***/ "./src/apps/insights/constants/CalculationElements.constants.ts":
/*!**********************************************************************!*\
  !*** ./src/apps/insights/constants/CalculationElements.constants.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCalculationFormulaOptions: () => (/* binding */ GetCalculationFormulaOptions)
/* harmony export */ });
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");

const GetCalculationFormulaOptions = () => [
    {
        category: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.aggregation_category),
        items: [
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.function_name_avg),
                value: 'Average',
            },
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.function_name_sum),
                value: 'Sum',
            },
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.function_name_count),
                value: 'Count',
            },
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.function_name_min),
                value: 'Min',
            },
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.function_name_max),
                value: 'Max',
            },
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker
                    .function_name_standard_deviation),
                value: 'StandardDeviation',
            },
        ],
    },
    {
        category: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker.built_in_category),
        items: [
            {
                displayName: (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.element_pickers.function_picker
                    .function_name_duration),
                value: 'Duration',
            },
        ],
    },
];


/***/ }),

/***/ "./src/apps/insights/index.ts":
/*!************************************!*\
  !*** ./src/apps/insights/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPage: () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_0__.InsightsPage)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./src/apps/insights/pages/index.ts");

// export * from './components';


/***/ }),

/***/ "./src/apps/insights/models/CalculationCertifiedEvents.ts":
/*!****************************************************************!*\
  !*** ./src/apps/insights/models/CalculationCertifiedEvents.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalculationFeature: () => (/* binding */ CalculationFeature),
/* harmony export */   CanvasNodeActivity: () => (/* binding */ CanvasNodeActivity),
/* harmony export */   EditorIntellisenseActivity: () => (/* binding */ EditorIntellisenseActivity),
/* harmony export */   FormulaHierarchyActivity: () => (/* binding */ FormulaHierarchyActivity),
/* harmony export */   FormulaManagementActivity: () => (/* binding */ FormulaManagementActivity),
/* harmony export */   JobCreateActivity: () => (/* binding */ JobCreateActivity),
/* harmony export */   JobScheduleActivity: () => (/* binding */ JobScheduleActivity)
/* harmony export */ });
/**
 * See README in the telemetry directory for more on how to instrument certified events
 */
var CalculationFeature;
(function (CalculationFeature) {
    CalculationFeature["GetTwinHierarchy"] = "DOFormulaTwinsList";
    CalculationFeature["JobCreate"] = "DOFormulaEditor";
})(CalculationFeature || (CalculationFeature = {}));
var FormulaHierarchyActivity;
(function (FormulaHierarchyActivity) {
    FormulaHierarchyActivity["VisualizeHierarchyList"] = "VisualizeHierarchyList";
    FormulaHierarchyActivity["SearchTwins"] = "SearchTwins";
    FormulaHierarchyActivity["TwinSelected"] = "TwinSelected";
})(FormulaHierarchyActivity || (FormulaHierarchyActivity = {}));
var JobCreateActivity;
(function (JobCreateActivity) {
    JobCreateActivity["EditorOpened"] = "EditorOpened";
    JobCreateActivity["FormulaSavedCalled"] = "FormulaSavedCalled";
})(JobCreateActivity || (JobCreateActivity = {}));
var CanvasNodeActivity;
(function (CanvasNodeActivity) {
    CanvasNodeActivity["NodeAdded"] = "NodeAdded";
    CanvasNodeActivity["NodeEdited"] = "NodeEdited";
    CanvasNodeActivity["NodeRemoved"] = "NodeRemoved";
})(CanvasNodeActivity || (CanvasNodeActivity = {}));
var EditorIntellisenseActivity;
(function (EditorIntellisenseActivity) {
    EditorIntellisenseActivity["KeywordAdded"] = "KeywordAdded";
})(EditorIntellisenseActivity || (EditorIntellisenseActivity = {}));
var FormulaManagementActivity;
(function (FormulaManagementActivity) {
    FormulaManagementActivity["EditorOpenedExisting"] = "EditorOpenedExisting";
    FormulaManagementActivity["CalculatedPropertiesListed"] = "CalculatedPropertiesListed";
    FormulaManagementActivity["FormulaDeleteCalled"] = "FormulaDeleteCalled";
})(FormulaManagementActivity || (FormulaManagementActivity = {}));
var JobScheduleActivity;
(function (JobScheduleActivity) {
    JobScheduleActivity["FormulaScheduleAdded"] = "FormulaScheduleAdded";
    JobScheduleActivity["FormulaScheduleEdited"] = "FormulaScheduleEdited";
    JobScheduleActivity["FormulaPauseStartToggled"] = "FormulaPauseStartToggled";
})(JobScheduleActivity || (JobScheduleActivity = {}));


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/InsightsPage.render.tsx":
/*!**********************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/InsightsPage.render.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsPageRender: () => (/* binding */ useInsightsPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _components_InsightsHierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/InsightsHierarchy */ "./src/apps/insights/components/InsightsHierarchy/index.ts");
/* harmony import */ var _components_InsightsRibbon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/InsightsRibbon */ "./src/apps/insights/components/InsightsRibbon/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _components_InsightsPageContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/InsightsPageContents */ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/index.ts");






const useInsightsPageRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__.InsightsPageContextProvider, { initialState: state },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.Page, { ribbon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InsightsRibbon__WEBPACK_IMPORTED_MODULE_3__.InsightsRibbon, null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InsightsHierarchy__WEBPACK_IMPORTED_MODULE_2__.InsightsHierarchy, null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InsightsPageContents__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContents, null)))));
};


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/InsightsPage.state.ts":
/*!********************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/InsightsPage.state.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsPageState: () => (/* binding */ useInsightsPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const useInsightsPageState = () => {
    const routeProps = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useAppRouteProps)();
    const selectedTwinId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return routeProps.segments?.length >= 3
            ? routeProps.segments[3]
            : undefined;
    }, [routeProps.segments]);
    const page = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return routeProps.segments?.length >= 4
            ? routeProps.segments[4]
            : 'empty';
    }, [routeProps.segments]);
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedTwinId,
            selectedTwinDisplayName: selectedTwinId,
            page,
        };
    }, [selectedTwinId, page]);
    return state;
};


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/InsightsPage.styles.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/InsightsPage.styles.ts ***!
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
    Budl1dq: "ftpzwb3",
    z8tnut: "f1g0x7ka",
    z189sj: ["fhxju0i", "f1cnd47f"],
    Byoj8tv: "f1qch9an",
    uwmqm3: ["f1cnd47f", "fhxju0i"],
    Bqenvij: "f1l02sjl"
  }
}, {
  d: [".f13qh94s{display:grid;}", ".ftpzwb3{grid-template-columns:300px auto;}", ".f1g0x7ka{padding-top:0;}", ".fhxju0i{padding-right:0;}", ".f1cnd47f{padding-left:0;}", ".f1qch9an{padding-bottom:0;}", ".f1l02sjl{height:100%;}"]
});

/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/InsightsPage.tsx":
/*!***************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/InsightsPage.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPage: () => (/* binding */ InsightsPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _InsightsPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsPage.render */ "./src/apps/insights/pages/InsightsPage/InsightsPage.render.tsx");
/* harmony import */ var _InsightsPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsPage.styles */ "./src/apps/insights/pages/InsightsPage/InsightsPage.styles.ts");
/* harmony import */ var _InsightsPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsightsPage.state */ "./src/apps/insights/pages/InsightsPage/InsightsPage.state.ts");




const MODULE_NAME = 'InsightsPage';
const InsightsPage = () => {
    // get state
    const state = (0,_InsightsPage_state__WEBPACK_IMPORTED_MODULE_3__.useInsightsPageState)();
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_InsightsPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging && (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {});
    // render the item
    return (0,_InsightsPage_render__WEBPACK_IMPORTED_MODULE_1__.useInsightsPageRender)({ state, styles });
};
InsightsPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.render.tsx":
/*!**************************************************************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.render.tsx ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsPageContentsRender: () => (/* binding */ useInsightsPageContentsRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components/Loading */ "./src/apps/components/Loading/index.ts");
/* harmony import */ var _components_FormulaBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/FormulaBuilder */ "./src/apps/insights/components/FormulaBuilder/index.ts");
/* harmony import */ var _components_FormulaList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/FormulaList */ "./src/apps/insights/components/FormulaList/index.ts");
/* harmony import */ var _components_InsightsDetailsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/InsightsDetailsPanel */ "./src/apps/insights/components/InsightsDetailsPanel/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");







const useInsightsPageContentsRender = ({ state, styles }) => {
    const { isFormulaListLoading } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root }, isFormulaListLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.loading },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components_Loading__WEBPACK_IMPORTED_MODULE_1__.Loading, null))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        state.page === 'builder' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormulaBuilder__WEBPACK_IMPORTED_MODULE_2__.FormulaBuilder, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_InsightsDetailsPanel__WEBPACK_IMPORTED_MODULE_4__.InsightsDetailsPanel, null))),
        state.page === 'list' && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormulaList__WEBPACK_IMPORTED_MODULE_3__.FormulaList, null),
        state.page === 'empty' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_5__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_6__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_6__.strings.insights.formula_builder.empty_contents.header), subtitle: (0,_do_localization__WEBPACK_IMPORTED_MODULE_6__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_6__.strings.insights.formula_builder.empty_contents.subtitle), button: {
                children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_6__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_6__.strings.insights.formula_builder.empty_contents.button_title),
                disabled: state.selectedTwinId === undefined, // disable button if no twin is selected
                onClick: state.openNewBuilder,
            } }))))));
};


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.root.tsx":
/*!************************************************************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.root.tsx ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPageContents: () => (/* binding */ InsightsPageContents)
/* harmony export */ });
/* harmony import */ var _InsightsPageContents_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsPageContents.render */ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.render.tsx");
/* harmony import */ var _InsightsPageContents_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightsPageContents.styles */ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.styles.ts");
/* harmony import */ var _InsightsPageContents_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsightsPageContents.state */ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.state.ts");



const MODULE_NAME = 'InsightsPageContents';
const InsightsPageContents = () => {
    // get state
    const state = (0,_InsightsPageContents_state__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContentsState)();
    // get styles
    const styles = (0,_InsightsPageContents_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_InsightsPageContents_render__WEBPACK_IMPORTED_MODULE_0__.useInsightsPageContentsRender)({ state, styles });
};
InsightsPageContents.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.state.ts":
/*!************************************************************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.state.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsightsPageContentsState: () => (/* binding */ useInsightsPageContentsState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");




const DEBUG_LOGGING = false;
const MODULE_NAME = 'InsightsPageContents.state';
const useInsightsPageContentsState = () => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_2__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const openNewBuilder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_LIST_LOADED,
            payload: { data: [] },
        });
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.NAVIGATE_TO_BUILDER,
            payload: {
                formulaId: undefined,
                twinId: pageState.selectedTwinId,
                twinDisplayName: pageState.selectedTwinDisplayName || pageState.selectedTwinId,
            },
        });
    }, [
        pageDispatch,
        pageState.selectedTwinDisplayName,
        pageState.selectedTwinId,
    ]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            page: pageState.page,
            isFormulaListLoading: pageState.formulaList.state === 'pending',
            openNewBuilder,
            selectedTwinId: pageState.selectedTwinId,
        };
    }, [
        pageState.page,
        pageState.formulaList.state,
        pageState.selectedTwinId,
        openNewBuilder,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.styles.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.styles.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    mc9l5x: "f22iagw",
    a9b677: "fly5x3f",
    B4j52fo: "f5ogflp",
    Bekrc4i: ["f1hqa2wf", "finvdd3"],
    Bn0qgzm: "f1f09k3d",
    ibv6hh: ["finvdd3", "f1hqa2wf"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f4h5rce",
    h3c5rm: ["fsv6td2", "fwgbj5z"],
    B9xav0g: "fopr46z",
    zhjwy3: ["fwgbj5z", "fsv6td2"]
  },
  loading: {
    mc9l5x: "f22iagw",
    Brf1p80: "f4d9j23",
    Bt984gj: "f122n59",
    Bqenvij: "f1l02sjl",
    uwmqm3: ["f177v4lu", "f19lj068"]
  }
}, {
  d: [".f22iagw{display:flex;}", ".fly5x3f{width:100%;}", ".f5ogflp{border-top-width:1px;}", ".f1hqa2wf{border-right-width:1px;}", ".finvdd3{border-left-width:1px;}", ".f1f09k3d{border-bottom-width:1px;}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f4h5rce{border-top-color:var(--colorNeutralBackground1Selected);}", ".fsv6td2{border-right-color:var(--colorNeutralBackground1Selected);}", ".fwgbj5z{border-left-color:var(--colorNeutralBackground1Selected);}", ".fopr46z{border-bottom-color:var(--colorNeutralBackground1Selected);}", ".f4d9j23{justify-content:center;}", ".f122n59{align-items:center;}", ".f1l02sjl{height:100%;}", ".f177v4lu{padding-left:8px;}", ".f19lj068{padding-right:8px;}"]
});

/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPageContents: () => (/* reexport safe */ _InsightsPageContents_root__WEBPACK_IMPORTED_MODULE_0__.InsightsPageContents)
/* harmony export */ });
/* harmony import */ var _InsightsPageContents_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsPageContents.root */ "./src/apps/insights/pages/InsightsPage/components/InsightsPageContents/InsightsPageContents.root.tsx");



/***/ }),

/***/ "./src/apps/insights/pages/InsightsPage/index.ts":
/*!*******************************************************!*\
  !*** ./src/apps/insights/pages/InsightsPage/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPage: () => (/* reexport safe */ _InsightsPage__WEBPACK_IMPORTED_MODULE_0__.InsightsPage)
/* harmony export */ });
/* harmony import */ var _InsightsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsPage */ "./src/apps/insights/pages/InsightsPage/InsightsPage.tsx");



/***/ }),

/***/ "./src/apps/insights/pages/index.ts":
/*!******************************************!*\
  !*** ./src/apps/insights/pages/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InsightsPage: () => (/* reexport safe */ _InsightsPage__WEBPACK_IMPORTED_MODULE_0__.InsightsPage)
/* harmony export */ });
/* harmony import */ var _InsightsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InsightsPage */ "./src/apps/insights/pages/InsightsPage/index.ts");



/***/ })

}]);
//# sourceMappingURL=src_apps_insights_index_ts.bundle.js.map