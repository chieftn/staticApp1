"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_insights_components_FormulaBuilder_components_FlowEditor_index_ts"],{

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.render.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.render.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlowEditorRender: () => (/* binding */ useFlowEditorRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/tokens/lib/tokens.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-popover/lib/components/Popover/Popover.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-popover/lib/components/PopoverSurface/PopoverSurface.js");
/* harmony import */ var _FlowEditor_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowEditor.types */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.types.ts");
/* harmony import */ var _components_CustomNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CustomNode */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/index.ts");
/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactflow/dist/style.css */ "./node_modules/reactflow/dist/style.css");
/* harmony import */ var _ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ElementPickers/ElementPickerRootMenu */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/index.ts");






/* istanbul ignore next */
const ReactFlow = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_reactflow_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! reactflow */ "./node_modules/reactflow/dist/esm/index.js")).then((module) => ({
    default: module.ReactFlow,
})));
/* istanbul ignore next */
const Background = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_reactflow_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! reactflow */ "./node_modules/reactflow/dist/esm/index.js")).then((module) => ({
    default: module.Background,
})));
/* istanbul ignore next */
const Controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_reactflow_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! reactflow */ "./node_modules/reactflow/dist/esm/index.js")).then((module) => ({
    default: module.Controls,
})));
/* istanbul ignore next */
const MiniMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "vendors-node_modules_reactflow_dist_esm_index_js").then(__webpack_require__.bind(__webpack_require__, /*! reactflow */ "./node_modules/reactflow/dist/esm/index.js")).then((module) => ({
    default: module.MiniMap,
})));
const gridDotColor = _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.tokens.colorNeutralForeground4;
const minimapStyle = {
    height: 120,
};
const nodeTypes = {
    [_FlowEditor_types__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_NODE_NAME]: _components_CustomNode__WEBPACK_IMPORTED_MODULE_2__.CustomNode,
};
const useFlowEditorRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ReactFlow, { nodes: state.nodes, edges: state.edges, onNodesDelete: state.onNodesDelete, onNodesChange: state.onNodesChange, fitView: true, nodeTypes: nodeTypes, onNodeClick: state.onNodeSelect, onContextMenu: state.handleContextMenuTriggered },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MiniMap, { style: minimapStyle, zoomable: true, pannable: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Controls, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Background, { color: gridDotColor, gap: 16 })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Popover, { open: state.isContextMenuOpen, onOpenChange: 
            /* istanbul ignore next */
            (e, data) => 
            // handle the popover dismissing itself when you click away
            state.onChangeContextMenuVisibility(data.open), positioning: { positioningRef: state.menuPositioningRef } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.PopoverSurface, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_4__.ElementPickerRootMenu, null)))));
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.root.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.root.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowEditor: () => (/* binding */ FlowEditor)
/* harmony export */ });
/* harmony import */ var _FlowEditor_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlowEditor.render */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.render.tsx");
/* harmony import */ var _FlowEditor_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlowEditor.styles */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.styles.ts");
/* harmony import */ var _FlowEditor_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlowEditor.state */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.state.ts");



const MODULE_NAME = 'FlowEditor';
const FlowEditor = (props) => {
    // get state
    const state = (0,_FlowEditor_state__WEBPACK_IMPORTED_MODULE_2__.useFlowEditorState)(props);
    // get styles
    const styles = (0,_FlowEditor_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_FlowEditor_render__WEBPACK_IMPORTED_MODULE_0__.useFlowEditorRender)({ state, styles });
};
FlowEditor.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.state.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.state.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlowEditorState: () => (/* binding */ useFlowEditorState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/core/dist/esm/index.js");
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-hooks */ "./node_modules/@fluentui/react-hooks/lib/useBoolean.js");
/* harmony import */ var _context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/FlowEditorContext */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.tsx");
/* harmony import */ var _context_FlowEditorContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/FlowEditorContext.types */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.types.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _FlowEditor_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FlowEditor.utils */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.utils.ts");









const DEBUG_LOGGING = false;
const MODULE_NAME = 'FlowEditor.state';
const getEdgesFromState = (formulaRelationships, debugLogging) => {
    const edges = (0,_FlowEditor_utils__WEBPACK_IMPORTED_MODULE_6__.convertFormulaRelationshipsToEdges)(formulaRelationships);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Computed relationships from graph data.', {
            edges,
            formulaRelationships,
        });
    return edges;
};
const getNodesFromState = (formulaElements, debugLogging) => {
    const nodes = (0,_FlowEditor_utils__WEBPACK_IMPORTED_MODULE_6__.convertFormulaElementsToNodes)(formulaElements);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Computed nodes from graph data.', {
            nodes,
            formulaElements,
        });
    return nodes;
};
const useFlowEditorState = (_props) => {
    // contexts
    const { pageState, pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__.useInsightsPageContext)();
    const { flowEditorState, flowEditorDispatch } = (0,_context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_2__.useFlowEditorContext)();
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // state
    const formulaElements = pageState.currentFormula.elements;
    const formulaRelationships = pageState.currentFormula.edges;
    const [nodes, setNodes, onNodesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_7__.useNodesState)(getNodesFromState(formulaElements || [], debugLogging));
    const [edges, setEdges, onEdgesChange] = (0,reactflow__WEBPACK_IMPORTED_MODULE_7__.useEdgesState)(getEdgesFromState(formulaRelationships || [], debugLogging));
    const [isContextMenuOpen, { setTrue, setFalse, toggle }] = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_8__.useBoolean)(false);
    const menuPositioningRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // callbacks
    const onNodeSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_event, node) => {
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContextActionType.SELECTED_NODE_SET,
            payload: {
                value: node.data.id,
            },
        });
    }, [pageDispatch]);
    const onChangeContextMenuVisibility = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value) => {
        if (value === undefined) {
            toggle();
        }
        else {
            value ? setTrue() : setFalse();
        }
    }, [setFalse, setTrue, toggle]);
    const onContextMenuTriggered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event) => {
        // Prevent native context menu from showing
        event.preventDefault();
        onChangeContextMenuVisibility(true);
        const virtualElement = {
            getBoundingClientRect: 
            /* istanbul ignore next */
            () => {
                return {
                    width: 0,
                    height: 0,
                    x: event.clientX,
                    y: event.clientY,
                    top: event.clientY,
                    right: event.clientX,
                    left: event.clientX,
                    bottom: event.clientY,
                };
            },
        };
        /* istanbul ignore next */
        menuPositioningRef.current?.setTarget(virtualElement);
    }, [onChangeContextMenuVisibility]);
    // Delete Node on Click of backspace handling
    const onNodesDelete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodes) => {
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_5__.InsightsPageContextActionType.FORMULA_REMOVE_ELEMENTS,
            payload: {
                ids: nodes.map((node) => node.id),
            },
        });
    }, [pageDispatch]);
    // side effects
    // respond to edges in the node data
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (formulaElements) {
            const nodes = getNodesFromState(formulaElements, debugLogging);
            setNodes(nodes);
        }
    }, [debugLogging, formulaElements, setNodes]);
    // respond to changes in the edge data
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (formulaRelationships) {
            const edges = getEdgesFromState(formulaRelationships, debugLogging);
            setEdges(edges);
        }
    }, [debugLogging, formulaRelationships, setEdges]);
    // reflect changes in the page context over to the flow editor context
    // using an effect so that if anything else updates the selected element it gets propagated correctly
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (pageState.currentFormula.selectedElementId !==
            flowEditorState.selectedNodeId) {
            flowEditorDispatch({
                type: _context_FlowEditorContext_types__WEBPACK_IMPORTED_MODULE_3__.FlowEditorContextActionType.SELECTED_NODE_SET,
                payload: {
                    value: pageState.currentFormula.selectedElementId,
                },
            });
        }
    }, [
        flowEditorDispatch,
        flowEditorState.selectedNodeId,
        pageState.currentFormula,
    ]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            nodes: nodes,
            edges: edges,
            isContextMenuOpen,
            menuPositioningRef,
            onChangeContextMenuVisibility,
            handleContextMenuTriggered: onContextMenuTriggered,
            onNodesChange,
            onNodesDelete,
            onEdgesChange,
            onNodeSelect,
        };
    }, [
        nodes,
        edges,
        isContextMenuOpen,
        onChangeContextMenuVisibility,
        onContextMenuTriggered,
        onNodesChange,
        onNodesDelete,
        onEdgesChange,
        onNodeSelect,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.styles.ts":
/*!************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.styles.ts ***!
  \************************************************************************************************/
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

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.types.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.types.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CUSTOM_NODE_NAME: () => (/* binding */ CUSTOM_NODE_NAME)
/* harmony export */ });
const CUSTOM_NODE_NAME = 'CustomNode';


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.utils.ts":
/*!***********************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.utils.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFormulaElementsToNodes: () => (/* binding */ convertFormulaElementsToNodes),
/* harmony export */   convertFormulaRelationshipsToEdges: () => (/* binding */ convertFormulaRelationshipsToEdges)
/* harmony export */ });
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/core/dist/esm/index.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./src/apps/insights/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/tokens/lib/tokens.js");
/* harmony import */ var _FlowEditor_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlowEditor.types */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.types.ts");






const BASE_HORIZONTAL_OFFSET = -200;
const BASE_VERTICAL_OFFSET = -200;
const NODE_VERTICAL_OFFSET = 100;
const NODE_HORIZONTAL_OFFSET = 300;
const getXPositionByElementType = (element) => {
    let multiplier = 0;
    switch (element.type) {
        case 'Expression':
        case 'Function':
            multiplier = 2;
            break;
        case 'OutputProperty':
            multiplier = 3;
            break;
        default:
            multiplier = 1;
    }
    return BASE_HORIZONTAL_OFFSET + multiplier * NODE_HORIZONTAL_OFFSET;
};
const getDisplayType = (element) => {
    switch (element.type) {
        case 'Expression':
            return (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.formula_builder.flow_editor.expression);
        case 'Function':
            return (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.formula_builder.flow_editor.function);
        case 'InputProperty':
            return (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.formula_builder.flow_editor.input_property);
        case 'OutputProperty':
            return (0,_do_localization__WEBPACK_IMPORTED_MODULE_0__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_0__.strings.insights.formula_builder.flow_editor.output_property);
        default:
            return '';
    }
};
const convertFormulaElementsToNodes = (elements) => {
    const nodes = [];
    // group all elements by type
    const elementsByType = new Map();
    elements?.forEach((x) => {
        // group expressions and function for now since we use this for offsets in the layout and they are in the same column
        const type = x.type === 'Expression' || x.type === 'Function' ? 'Expression' : x.type;
        const collection = elementsByType.get(type) || [];
        collection.push(x);
        elementsByType.set(type, collection);
    });
    // loop each group (necessaryt to be able to compute vertical offset amongst those nodes since we have a very primitive layout algo right now)
    elementsByType.forEach((currentElements) => {
        currentElements.forEach((element, index) => {
            const currentNode = {
                id: element.id,
                position: {
                    x: getXPositionByElementType(element),
                    y: index * NODE_VERTICAL_OFFSET + BASE_VERTICAL_OFFSET, // TODO: handle cases of expressions pointing to expressions
                },
                type: _FlowEditor_types__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_NODE_NAME,
                data: {
                    ...element,
                    displayType: getDisplayType(element),
                },
            };
            nodes.push(currentNode);
        });
    });
    return nodes;
};
const convertFormulaRelationshipsToEdges = (relationships) => {
    return relationships.map((x) => ({
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        source: x.source,
        target: x.target,
        style: {
            stroke: _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.tokens.colorBrandBackground,
        },
        markerEnd: {
            type: reactflow__WEBPACK_IMPORTED_MODULE_5__.MarkerType.ArrowClosed,
            color: _do_core__WEBPACK_IMPORTED_MODULE_1__.NonThemedColors.BrandColor,
        },
    }));
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.render.tsx":
/*!***********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.render.tsx ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCustomNodeRender: () => (/* binding */ useCustomNodeRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/core/dist/esm/index.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/Menu/Menu.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuTrigger/MenuTrigger.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-menu/lib/components/MenuPopover/MenuPopover.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ElementPickers/ElementPickerRootMenu */ "./src/apps/insights/components/ElementPickers/ElementPickerRootMenu/index.ts");





const useCustomNodeRender = ({ state, styles, }) => {
    const { data, isSelected, hasError } = state;
    // data
    const showLeftHandle = data.type !== 'InputProperty';
    const showRightHandle = data.type !== 'OutputProperty';
    const isFunctionNode = data.type === 'Function';
    const isOutputNode = data.type === 'OutputProperty';
    // Set styles based on selected and error state
    let rootClass = styles.root;
    let leftHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.handleBase, styles.handleLeft);
    let rightHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(styles.handleBase, styles.handleRight);
    let nameClass = styles.nameBase;
    let statusBarClass = styles.statusBarBase;
    let contextMenuButtonClass = styles.contextMenuButton;
    if (isSelected && hasError) {
        rootClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(rootClass, styles.rootSelectedError);
        leftHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(leftHandleClass, styles.handleLeftSelected);
        rightHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(rightHandleClass, styles.handleRightSelected);
        statusBarClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(statusBarClass, styles.statusBarSelectedBorderRadius, styles.statusBarErrorColor);
        contextMenuButtonClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(contextMenuButtonClass, styles.contextMenuButtonError);
    }
    else if (isSelected && !hasError) {
        nameClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(nameClass, styles.nameNoError);
        rootClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(rootClass, styles.rootSelected);
        leftHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(leftHandleClass, styles.handleLeftSelected);
        rightHandleClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(rightHandleClass, styles.handleRightSelected);
        statusBarClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(statusBarClass, styles.statusBarSelectedBorderRadius, styles.statusBarSelectedColor);
    }
    else if (!isSelected && hasError) {
        statusBarClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(statusBarClass, styles.statusBarUnselectedBorderRadius, styles.statusBarErrorColor);
        contextMenuButtonClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(contextMenuButtonClass, styles.contextMenuButtonError, styles.contextMenuButton);
    }
    else if (!isSelected && !hasError) {
        nameClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(nameClass, styles.nameNoError);
        statusBarClass = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)(statusBarClass, styles.statusBarUnselectedBorderRadius, styles.statusBarUnselectedColor);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: rootClass },
        showLeftHandle && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_3__.Handle, { type: 'target', position: reactflow__WEBPACK_IMPORTED_MODULE_3__.Position.Left, className: leftHandleClass, isConnectable: false })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: statusBarClass }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.content },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.nodeType }, data.displayType),
            isFunctionNode && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.label }, "Type:"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, data.dataType))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.contentNameContainer },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: nameClass }, data.displayName),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Button, { onClick: state.onDeleteNode, size: 'small', appearance: 'transparent', "data-testid": "delete-node-button" /* CustomNodeTestIds.DeleteNodeButton */, icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__.Delete16Regular, null) })))),
        showRightHandle && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactflow__WEBPACK_IMPORTED_MODULE_3__.Handle, { type: 'source', position: reactflow__WEBPACK_IMPORTED_MODULE_3__.Position.Right, id: 'a', className: rightHandleClass, isConnectable: false })),
        !isOutputNode && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Menu, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MenuTrigger, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Button, { size: 'small', appearance: 'primary', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.Add16Regular, null), className: contextMenuButtonClass })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MenuPopover, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ElementPickers_ElementPickerRootMenu__WEBPACK_IMPORTED_MODULE_1__.ElementPickerRootMenu, { dataType: data.type }))))));
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.root.tsx":
/*!*********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.root.tsx ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomNode: () => (/* binding */ CustomNode)
/* harmony export */ });
/* harmony import */ var _CustomNode_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomNode.render */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.render.tsx");
/* harmony import */ var _CustomNode_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomNode.styles */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.styles.ts");
/* harmony import */ var _CustomNode_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomNode.state */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.state.ts");



const MODULE_NAME = 'CustomNode';
const CustomNode = (props) => {
    // get state
    const state = (0,_CustomNode_state__WEBPACK_IMPORTED_MODULE_2__.useCustomNodeState)(props);
    // get styles
    const styles = (0,_CustomNode_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_CustomNode_render__WEBPACK_IMPORTED_MODULE_0__.useCustomNodeRender)({ state, styles });
};
CustomNode.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.state.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.state.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCustomNodeState: () => (/* binding */ useCustomNodeState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/FlowEditorContext */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/context/FlowEditorContext.tsx");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../contexts/InsightsPageContext/InsightsPageContext.types */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.types.ts");
/* harmony import */ var _contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../contexts/InsightsPageContext/InsightsPageContext */ "./src/apps/insights/contexts/InsightsPageContext/InsightsPageContext.tsx");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'CustomNode.state';
const useCustomNodeState = (props) => {
    // context
    const { flowEditorState: { selectedNodeId }, } = (0,_context_FlowEditorContext__WEBPACK_IMPORTED_MODULE_2__.useFlowEditorContext)();
    const { pageDispatch } = (0,_contexts_InsightsPageContext_InsightsPageContext__WEBPACK_IMPORTED_MODULE_4__.useInsightsPageContext)();
    // state
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const onDeleteNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const nodeId = props.data.id;
        // remove the element from the formula on clicking the delete button in custom Node
        pageDispatch({
            type: _contexts_InsightsPageContext_InsightsPageContext_types__WEBPACK_IMPORTED_MODULE_3__.InsightsPageContextActionType.FORMULA_REMOVE_ELEMENTS,
            payload: {
                ids: [nodeId],
            },
        });
    }, [props.data.id, pageDispatch]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            data: props.data,
            onDeleteNode,
            isSelected: props.data.id === selectedNodeId,
            hasError: !!props.data.errorMessages &&
                Object.keys(props.data.errorMessages).length > 0,
        };
    }, [props.data, onDeleteNode, selectedNodeId]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.styles.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.styles.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/tokens/lib/tokens.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const BRAND_COLOR = _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.tokens.colorBrandBackground;
const ERROR_COLOR = _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.tokens.colorPaletteRedForeground1;
const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.__styles)({
  root: {
    De3pzq: "fxugw4r",
    Bbmb7ep: ["f1aa9q02", "f16jpd5f"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f1jar5jt", "fyu767a"],
    Btl43ni: ["fyu767a", "f1jar5jt"],
    E5pizo: "f1whvlc6",
    mc9l5x: "f22iagw",
    a9b677: "f45u8dm"
  },
  rootSelected: {
    B4j52fo: "ftac7j7",
    Bekrc4i: ["f1w0yd9v", "f1h0xgbp"],
    Bn0qgzm: "fdwcyh7",
    ibv6hh: ["f1h0xgbp", "f1w0yd9v"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1vp46cd",
    h3c5rm: ["f1lxz1cr", "ff8nh0i"],
    B9xav0g: "fe9j8it",
    zhjwy3: ["ff8nh0i", "f1lxz1cr"]
  },
  rootSelectedError: {
    B4j52fo: "ftac7j7",
    Bekrc4i: ["f1w0yd9v", "f1h0xgbp"],
    Bn0qgzm: "fdwcyh7",
    ibv6hh: ["f1h0xgbp", "f1w0yd9v"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f8scegn",
    h3c5rm: ["f14c50la", "f909gkl"],
    B9xav0g: "f171s0d9",
    zhjwy3: ["f909gkl", "f14c50la"]
  },
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    a9b677: "fly5x3f",
    i8kkvl: "f1q8lukm",
    Belr9w4: "f1ma2n7n",
    z8tnut: "fp9bwmr",
    z189sj: ["f19lj068", "f177v4lu"],
    Byoj8tv: "f150uoa4",
    uwmqm3: ["f177v4lu", "f19lj068"]
  },
  contentNameContainer: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Bt984gj: "f122n59",
    Brf1p80: "f1869bpl"
  },
  contextMenuButton: {
    Bbmb7ep: ["fqgqgel", "fchfifz"],
    Beyfa6y: ["fchfifz", "fqgqgel"],
    B7oj6ja: ["fc7b1hi", "f1dpx5h9"],
    Btl43ni: ["f1dpx5h9", "fc7b1hi"],
    Bqenvij: "fd461yt",
    sshi5w: "fjv2561",
    Bf4jedk: "fq2vo04",
    qhf8xq: "f1euv43f",
    j35jbq: ["f1unq02s", "f7cb2vj"],
    Bhzewxz: "fo4jp1l",
    a9b677: "fjw5fx7",
    B5pe6w7: "f17klwcu"
  },
  contextMenuButtonError: {
    De3pzq: "f1w1hjie"
  },
  handleBase: {
    De3pzq: "ffp7eso",
    a9b677: "faro0ui",
    Bqenvij: "f6ywr7j",
    Bf4jedk: "f3rzszl",
    sshi5w: "f4i8o5q",
    B4j52fo: "ftac7j7",
    Bekrc4i: ["f1w0yd9v", "f1h0xgbp"],
    Bn0qgzm: "fdwcyh7",
    ibv6hh: ["f1h0xgbp", "f1w0yd9v"],
    icvyot: "fzkkow9",
    vrafjx: ["fcdblym", "fjik90z"],
    oivjwe: "fg706s2",
    wvpqe5: ["fjik90z", "fcdblym"],
    g2u3we: "f1vp46cd",
    h3c5rm: ["f1lxz1cr", "ff8nh0i"],
    B9xav0g: "fe9j8it",
    zhjwy3: ["ff8nh0i", "f1lxz1cr"],
    Bpd4iqm: "f2znb4n",
    oeaueh: "f1yog68k",
    Bw0xxkn: "fcvzvvt"
  },
  handleLeft: {
    oyh7mz: ["f1fqbd23", "fi2lt33"]
  },
  handleRight: {
    j35jbq: ["fi2lt33", "f1fqbd23"]
  },
  handleLeftSelected: {
    oyh7mz: ["fclvdme", "fvq7pei"]
  },
  handleRightSelected: {
    j35jbq: ["fvq7pei", "fclvdme"]
  },
  label: {
    Bhrd7zp: "fl43uef",
    t21cq0: ["f8zmjen", "fjf1xye"]
  },
  nameBase: {
    Bhrd7zp: "flh3ekv",
    Biipf1f: "f9ijwd5"
  },
  nameNoError: {
    sj55zd: "f1817uup"
  },
  nameError: {
    sj55zd: "f1hcrxcs"
  },
  nodeType: {
    Bhrd7zp: "fl43uef"
  },
  statusBarBase: {
    a9b677: "f16dn6v3"
  },
  statusBarUnselectedBorderRadius: {
    Bbmb7ep: ["f1krrbdw", "f1deotkl"],
    Beyfa6y: ["f16jpd5f", "f1aa9q02"],
    B7oj6ja: ["f10ostut", "f1ozlkrg"],
    Btl43ni: ["fyu767a", "f1jar5jt"]
  },
  statusBarSelectedBorderRadius: {
    Bbmb7ep: ["f1krrbdw", "f1deotkl"],
    Beyfa6y: ["fi2rrw2", "f1g3puop"],
    B7oj6ja: ["f10ostut", "f1ozlkrg"],
    Btl43ni: ["f1s4nn1u", "f1rstyi9"]
  },
  statusBarUnselectedColor: {
    De3pzq: "f18f03hv"
  },
  statusBarSelectedColor: {
    De3pzq: "ffp7eso"
  },
  statusBarErrorColor: {
    De3pzq: "f1w1hjie"
  }
}, {
  d: [".fxugw4r{background-color:var(--colorNeutralBackground1);}", ".f1aa9q02{border-bottom-right-radius:var(--borderRadiusMedium);}", ".f16jpd5f{border-bottom-left-radius:var(--borderRadiusMedium);}", ".f1jar5jt{border-top-right-radius:var(--borderRadiusMedium);}", ".fyu767a{border-top-left-radius:var(--borderRadiusMedium);}", ".f1whvlc6{box-shadow:var(--shadow4);}", ".f22iagw{display:flex;}", ".f45u8dm{width:200px;}", ".ftac7j7{border-top-width:2px;}", ".f1w0yd9v{border-right-width:2px;}", ".f1h0xgbp{border-left-width:2px;}", ".fdwcyh7{border-bottom-width:2px;}", ".fzkkow9{border-top-style:solid;}", ".fcdblym{border-right-style:solid;}", ".fjik90z{border-left-style:solid;}", ".fg706s2{border-bottom-style:solid;}", ".f1vp46cd{border-top-color:var(--colorBrandBackground);}", ".f1lxz1cr{border-right-color:var(--colorBrandBackground);}", ".ff8nh0i{border-left-color:var(--colorBrandBackground);}", ".fe9j8it{border-bottom-color:var(--colorBrandBackground);}", ".f8scegn{border-top-color:var(--colorPaletteRedForeground1);}", ".f14c50la{border-right-color:var(--colorPaletteRedForeground1);}", ".f909gkl{border-left-color:var(--colorPaletteRedForeground1);}", ".f171s0d9{border-bottom-color:var(--colorPaletteRedForeground1);}", ".f1vx9l62{flex-direction:column;}", ".fly5x3f{width:100%;}", ".f1q8lukm{column-gap:4px;}", ".f1ma2n7n{row-gap:4px;}", ".fp9bwmr{padding-top:8px;}", ".f19lj068{padding-right:8px;}", ".f177v4lu{padding-left:8px;}", ".f150uoa4{padding-bottom:8px;}", ".f1063pyq{flex-direction:row;}", ".f122n59{align-items:center;}", ".f1869bpl{justify-content:space-between;}", ".fqgqgel{border-bottom-right-radius:50%;}", ".fchfifz{border-bottom-left-radius:50%;}", ".fc7b1hi{border-top-right-radius:50%;}", ".f1dpx5h9{border-top-left-radius:50%;}", ".fd461yt{height:16px;}", ".fjv2561{min-height:16px;}", ".fq2vo04{min-width:16px;}", ".f1euv43f{position:absolute;}", ".f1unq02s{right:-24px;}", ".f7cb2vj{left:-24px;}", ".fo4jp1l{top:calc(50% - 8px);}", ".fjw5fx7{width:16px;}", ".f17klwcu svg{width:100%;}", ".f1w1hjie{background-color:var(--colorPaletteRedForeground1);}", ".ffp7eso{background-color:var(--colorBrandBackground);}", ".faro0ui{width:4px;}", ".f6ywr7j{height:4px;}", ".f3rzszl{min-width:4px;}", ".f4i8o5q{min-height:4px;}", ".f2znb4n{outline-width:2px;}", ".f1yog68k{outline-style:solid;}", ".fcvzvvt{outline-color:var(--colorNeutralBackground1);}", ".f1fqbd23{left:-4px;}", ".fi2lt33{right:-4px;}", ".fclvdme{left:-3px;}", ".fvq7pei{right:-3px;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f8zmjen{margin-right:4px;}", ".fjf1xye{margin-left:4px;}", ".flh3ekv{font-weight:var(--fontWeightBold);}", ".f9ijwd5{word-break:break-word;}", ".f1817uup{color:var(--colorBrandBackground);}", ".f1hcrxcs{color:var(--colorPaletteRedForeground1);}", ".f16dn6v3{width:6px;}", ".f1krrbdw{border-bottom-right-radius:0;}", ".f1deotkl{border-bottom-left-radius:0;}", ".f10ostut{border-top-right-radius:0;}", ".f1ozlkrg{border-top-left-radius:0;}", ".fi2rrw2{border-bottom-left-radius:var(--borderRadiusSmall);}", ".f1g3puop{border-bottom-right-radius:var(--borderRadiusSmall);}", ".f1s4nn1u{border-top-left-radius:var(--borderRadiusSmall);}", ".f1rstyi9{border-top-right-radius:var(--borderRadiusSmall);}", ".f18f03hv{background-color:var(--colorNeutralBackground6);}"]
});

/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/index.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/index.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomNode: () => (/* reexport safe */ _CustomNode_root__WEBPACK_IMPORTED_MODULE_0__.CustomNode)
/* harmony export */ });
/* harmony import */ var _CustomNode_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomNode.root */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/components/CustomNode/CustomNode.root.tsx");



/***/ }),

/***/ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/index.ts":
/*!************************************************************************************!*\
  !*** ./src/apps/insights/components/FormulaBuilder/components/FlowEditor/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlowEditor: () => (/* reexport safe */ _FlowEditor_root__WEBPACK_IMPORTED_MODULE_0__.FlowEditor)
/* harmony export */ });
/* harmony import */ var _FlowEditor_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlowEditor.root */ "./src/apps/insights/components/FormulaBuilder/components/FlowEditor/FlowEditor.root.tsx");



/***/ })

}]);
//# sourceMappingURL=src_apps_insights_components_FormulaBuilder_components_FlowEditor_index_ts.bundle.js.map