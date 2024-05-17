"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_apps_explorer_index_ts"],{

/***/ "./src/apps/core/hooks/useModelDetailsClient.ts":
/*!******************************************************!*\
  !*** ./src/apps/core/hooks/useModelDetailsClient.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModelDetailsClient: () => (/* binding */ useModelDetailsClient)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useModelDetailsClient = (apiReady = true) => {
    const { artifactId, workspaceId, capacityId } = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useSharedState)();
    const tridentContext = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useTridentContext)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        // useMockData in jest should always have a value
        if (tridentContext?.useMockData ?? !apiReady) {
            return new _do_core__WEBPACK_IMPORTED_MODULE_0__.MockModelDetailsClient();
        }
        if (tridentContext &&
            tridentContext.extensionClient &&
            workspaceId &&
            artifactId &&
            capacityId) {
            return new _do_core__WEBPACK_IMPORTED_MODULE_0__.ModelDetailsClient(tridentContext.extensionClient, workspaceId, artifactId, capacityId);
        }
        return undefined;
    }, [tridentContext, workspaceId, artifactId, capacityId, apiReady]);
};


/***/ }),

/***/ "./src/apps/core/hooks/useModelInformationClient.ts":
/*!**********************************************************!*\
  !*** ./src/apps/core/hooks/useModelInformationClient.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModelInformationClient: () => (/* binding */ useModelInformationClient)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const useModelInformationClient = (apiReady = true) => {
    const { artifactId, workspaceId, capacityId } = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useSharedState)();
    const tridentContext = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useTridentContext)();
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        // useMockData in jest should always have a value
        if (tridentContext?.useMockData ?? !apiReady) {
            return new _do_core__WEBPACK_IMPORTED_MODULE_0__.MockModelInformationClient();
        }
        if (tridentContext &&
            tridentContext.extensionClient &&
            workspaceId &&
            artifactId &&
            capacityId) {
            return new _do_core__WEBPACK_IMPORTED_MODULE_0__.ModelInformationClient(tridentContext.extensionClient, workspaceId, artifactId, capacityId);
        }
        return undefined;
    }, [tridentContext, workspaceId, artifactId, apiReady, capacityId]);
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.render.tsx":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerNav/ExplorerNav.render.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useExplorerNavRender: () => (/* binding */ useExplorerNavRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/TabList/TabList.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tabs/lib/components/Tab/Tab.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-12.js");
/* harmony import */ var _QueryPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../QueryPanel */ "./src/apps/explorer/components/QueryPanel/index.ts");





var TestIds;
(function (TestIds) {
    TestIds["NavigationRoot"] = "explorer-page-nav";
    TestIds["TwinsTab"] = "explorer-page-nav-twins";
    TestIds["TwinCount"] = "explorer-page-nav-twins-count";
    TestIds["TimeSeriesTab"] = "explorer-page-nav-time-series";
    TestIds["TimeSeriesCount"] = "explorer-page-nav-time-series-count";
    TestIds["EventsTab"] = "explorer-page-nav-events";
    TestIds["EventCount"] = "explorer-page-nav-events-count";
    TestIds["AdvancedQuery"] = "explorer-page-nav-advanced-query";
})(TestIds || (TestIds = {}));
const useExplorerNavRender = (props) => {
    const { state, styles } = props;
    const { selectedTab, onTabChange, isQueryPanelVisible, onQueryPanelToggle } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.TabList, { selectedValue: selectedTab, onTabSelect: onTabChange, role: 'navigation', "data-testid": TestIds.NavigationRoot },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Tab, { value: 'twins', "data-testid": TestIds.TwinsTab, className: styles.tab },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.tabLabel },
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.nav.twins),
                    state.twinCountDisplayString ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.TwinCount }, state.twinCountDisplayString)) : null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Tab, { value: 'timeSeries', "data-testid": TestIds.TimeSeriesTab, className: styles.tab },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.tabLabel },
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.nav.timeseries),
                    state.timeSeriesCountDisplayString ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.TimeSeriesCount }, state.timeSeriesCountDisplayString)) : null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.Tab, { value: 'events', "data-testid": TestIds.EventsTab, className: styles.tab },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.tabLabel },
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.nav.events),
                    state.eventCountDisplayString ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { "data-testid": TestIds.EventCount }, state.eventCountDisplayString)) : null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.actionButtons },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Button, { appearance: state.isAdvancedQueryActive ? 'primary' : 'secondary', icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.SlideSearch24Regular, null), onClick: onQueryPanelToggle, "data-testid": TestIds.AdvancedQuery }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.tabActions.advanced_query))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_QueryPanel__WEBPACK_IMPORTED_MODULE_2__.QueryPanel, { isVisible: isQueryPanelVisible, onClose: onQueryPanelToggle })));
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.root.tsx":
/*!***********************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerNav/ExplorerNav.root.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerNav: () => (/* binding */ ExplorerNav)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _ExplorerNav_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExplorerNav.render */ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.render.tsx");
/* harmony import */ var _ExplorerNav_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExplorerNav.styles */ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.styles.ts");
/* harmony import */ var _ExplorerNav_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExplorerNav.state */ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.state.ts");




const MODULE_NAME = 'ExplorerNav';
const ExplorerNav = () => {
    // get state
    const state = (0,_ExplorerNav_state__WEBPACK_IMPORTED_MODULE_3__.useExplorerNavState)();
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_ExplorerNav_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_ExplorerNav_render__WEBPACK_IMPORTED_MODULE_1__.useExplorerNavRender)({ state, styles });
};
ExplorerNav.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.state.ts":
/*!***********************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerNav/ExplorerNav.state.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExplorerNavState: () => (/* binding */ useExplorerNavState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_routeProps_useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/routeProps/useExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useExplorerRouteProps.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/ExplorerContext.utils */ "./src/apps/explorer/contexts/ExplorerContext.utils.ts");





const useExplorerNavState = () => {
    // contexts
    const { searchString, twinCount, timeSeriesCount, eventCount, tabbedQuery } = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useExplorerContext)();
    // state
    const [isQueryPanelVisible, setIsQueryPanelVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const routeProps = (0,_hooks_routeProps_useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__.useExplorerRouteProps)();
    // hooks
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.useNavigation)();
    // callbacks
    const onQueryPanelToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setIsQueryPanelVisible((currentState) => !currentState);
    }, []);
    const onTabChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_, data) => {
        navigation?.navigate({
            path: `${routeProps.explorerPath}/${data.value}`,
        });
    }, [navigation, routeProps.explorerPath]);
    // result
    const getCountString = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((count) => {
        if (count !== undefined && searchString.length > 0) {
            if (count > 100)
                return '(100+)';
            return `(${count})`;
        }
        return '';
    }, [searchString]);
    const isAdvancedQueryActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const tabName = routeProps.tabName;
        const filterRules = tabbedQuery[tabName].filterRules;
        const sortRules = tabbedQuery[tabName].sortRules;
        const anyFilterRuleExists = filterRules.some((f) => !(0,_contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_4__.isFilterRuleEmpty)(f));
        const anySortRuleExists = sortRules.some((s) => !(0,_contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_4__.isSortRuleEmpty)(s));
        return anyFilterRuleExists || anySortRuleExists;
    }, [routeProps.tabName, tabbedQuery]);
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            selectedTab: routeProps.tabName,
            onTabChange,
            isQueryPanelVisible,
            onQueryPanelToggle,
            isAdvancedQueryActive,
            twinCountDisplayString: getCountString(twinCount),
            eventCountDisplayString: getCountString(eventCount),
            timeSeriesCountDisplayString: getCountString(timeSeriesCount),
        };
    }, [
        routeProps.tabName,
        onTabChange,
        isQueryPanelVisible,
        onQueryPanelToggle,
        isAdvancedQueryActive,
        getCountString,
        twinCount,
        eventCount,
        timeSeriesCount,
    ]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.styles.ts":
/*!************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerNav/ExplorerNav.styles.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    jrapky: "fd1gkq",
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: "f1869bpl"
  },
  tab: {
    jrapky: "f1abmfm4",
    Byoj8tv: "f1y2xyjm"
  },
  tabLabel: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    jrapky: "f1abmfm4",
    i8kkvl: "f1q8lukm"
  },
  actionButtons: {
    mc9l5x: "f22iagw",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  }
}, {
  d: [".fd1gkq{margin-bottom:4px;}", ".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1869bpl{justify-content:space-between;}", ".f1abmfm4{margin-bottom:0px;}", ".f1y2xyjm{padding-bottom:4px;}", ".f1q8lukm{column-gap:4px;}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/ExplorerNav/index.ts":
/*!***********************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerNav/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerNav: () => (/* reexport safe */ _ExplorerNav_root__WEBPACK_IMPORTED_MODULE_0__.ExplorerNav)
/* harmony export */ });
/* harmony import */ var _ExplorerNav_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerNav.root */ "./src/apps/explorer/components/ExplorerNav/ExplorerNav.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.render.tsx":
/*!***************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerPage/ExplorerPage.render.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExplorerPageRender: () => (/* binding */ useExplorerPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _twins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twins */ "./src/apps/explorer/components/twins/index.ts");
/* harmony import */ var _timeSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeSeries */ "./src/apps/explorer/components/timeSeries/index.ts");
/* harmony import */ var _events_EventList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/EventList */ "./src/apps/explorer/components/events/EventList/index.ts");
/* harmony import */ var _ExplorerNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ExplorerNav */ "./src/apps/explorer/components/ExplorerNav/index.ts");
/* harmony import */ var _ExplorerRibbon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ExplorerRibbon */ "./src/apps/explorer/components/ExplorerRibbon/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");










const useExplorerPageRender = (props) => {
    const { state, styles } = props;
    const { explorerPath } = state;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_7__.ExplorerContextProvider, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.Page, { ribbon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ExplorerRibbon__WEBPACK_IMPORTED_MODULE_6__.ExplorerRibbon, null) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ExplorerNav__WEBPACK_IMPORTED_MODULE_5__.ExplorerNav, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.panels },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Switch, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { path: `${explorerPath}/events` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_EventList__WEBPACK_IMPORTED_MODULE_4__.EventList, null)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { path: `${explorerPath}/timeSeries` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_8__.TimeSeriesContextProvider, null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeSeries__WEBPACK_IMPORTED_MODULE_3__.TimeSeriesPage, null))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, { path: '*' },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_twins__WEBPACK_IMPORTED_MODULE_2__.TwinsPage, null)))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.state.ts":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerPage/ExplorerPage.state.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExplorerPageState: () => (/* binding */ useExplorerPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");


const useExplorerPageState = (props) => {
    // contexts
    // state
    const { artifactId } = props;
    // hooks
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const explorerPath = _do_core__WEBPACK_IMPORTED_MODULE_1__.ExtensionRoutes.explorer(artifactId);
        return {
            explorerPath,
            artifactId,
        };
    }, [artifactId]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.styles.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerPage/ExplorerPage.styles.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  header: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq"
  },
  panels: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    z8tnut: "f1kcqot9"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1vx9l62{flex-direction:column;}", ".f1kcqot9{padding-top:12px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerPage/ExplorerPage.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerPage: () => (/* binding */ ExplorerPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _ExplorerPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExplorerPage.render */ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.render.tsx");
/* harmony import */ var _ExplorerPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExplorerPage.styles */ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.styles.ts");
/* harmony import */ var _ExplorerPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExplorerPage.state */ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.state.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");





const MODULE_NAME = 'ExplorerPage';
const ExplorerPage = (_props) => {
    // get route info for state
    const path = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useRouteMatch)().path;
    const artifact = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
    // get state
    const state = (0,_ExplorerPage_state__WEBPACK_IMPORTED_MODULE_3__.useExplorerPageState)({
        path,
        artifactId: artifact.artifactObjectId,
    });
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_ExplorerPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_ExplorerPage_render__WEBPACK_IMPORTED_MODULE_1__.useExplorerPageRender)({ state, styles });
};
ExplorerPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerPage/index.ts":
/*!************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerPage/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerPage: () => (/* reexport safe */ _ExplorerPage__WEBPACK_IMPORTED_MODULE_0__.ExplorerPage)
/* harmony export */ });
/* harmony import */ var _ExplorerPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerPage */ "./src/apps/explorer/components/ExplorerPage/ExplorerPage.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.render.tsx":
/*!*******************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.render.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useExplorerRibbonRender: () => (/* binding */ useExplorerRibbonRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarGroup/ToolbarGroup.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-toolbar/lib/components/ToolbarButton/ToolbarButton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-input/lib/components/Input/Input.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-11.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");




var TestIds;
(function (TestIds) {
    TestIds["SEARCH_INPUT"] = "explorer-ribbon-search-input";
})(TestIds || (TestIds = {}));
const useExplorerRibbonRender = (props) => {
    const { state } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowClockwise24Regular, null) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.ribbon.refresh))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.Input, { contentBefore: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Search20Regular, null), placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.ribbon.search_placeholder), value: state.searchString, onChange: (_ex, data) => state.setSearchString(data.value), "data-testid": TestIds.SEARCH_INPUT }))));
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.root.tsx":
/*!*****************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.root.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerRibbon: () => (/* binding */ ExplorerRibbon)
/* harmony export */ });
/* harmony import */ var _ExplorerRibbon_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerRibbon.render */ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.render.tsx");
/* harmony import */ var _ExplorerRibbon_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExplorerRibbon.state */ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.state.ts");


const MODULE_NAME = 'ExplorerRibbon';
const ExplorerRibbon = (_props) => {
    // get state
    const state = (0,_ExplorerRibbon_state__WEBPACK_IMPORTED_MODULE_1__.useExplorerRibbonState)(_props);
    // render the item
    return (0,_ExplorerRibbon_render__WEBPACK_IMPORTED_MODULE_0__.useExplorerRibbonRender)({ state });
};
ExplorerRibbon.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.state.ts":
/*!*****************************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.state.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useExplorerRibbonState: () => (/* binding */ useExplorerRibbonState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/dist/index.module.js");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/QueryCertifiedEvents */ "./src/apps/explorer/models/QueryCertifiedEvents.ts");





const useExplorerRibbonState = (_props) => {
    // contexts
    const { keywordQuery, searchString: contextSearchString } = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__.useExplorerContext)();
    // state
    const [searchString, setSearchString] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(contextSearchString);
    const [debouncedSearchString] = (0,use_debounce__WEBPACK_IMPORTED_MODULE_4__.useDebounce)(searchString, 500);
    // hooks
    // callbacks
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const currentTime = new Date().toISOString();
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().logStandardizedCertifiedEvent({
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.KeywordSearch,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.KeywordSearchActivity.UserFinishedTyping,
            activityStatus: "Succeeded" /* Status.Succeeded */,
            operationStartTime: currentTime,
            operationEndTime: currentTime,
        });
        keywordQuery(debouncedSearchString);
    }, [debouncedSearchString, keywordQuery]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            searchString,
            setSearchString,
        };
    }, [searchString]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/ExplorerRibbon/index.ts":
/*!**************************************************************!*\
  !*** ./src/apps/explorer/components/ExplorerRibbon/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerRibbon: () => (/* reexport safe */ _ExplorerRibbon_root__WEBPACK_IMPORTED_MODULE_0__.ExplorerRibbon)
/* harmony export */ });
/* harmony import */ var _ExplorerRibbon_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerRibbon.root */ "./src/apps/explorer/components/ExplorerRibbon/ExplorerRibbon.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/QueryPanel.render.tsx":
/*!***********************************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/QueryPanel.render.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPanelTestIds: () => (/* binding */ QueryPanelTestIds),
/* harmony export */   useQueryPanelRender: () => (/* binding */ useQueryPanelRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/Drawer/Drawer.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeader/DrawerHeader.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerHeaderTitle/DrawerHeaderTitle.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerBody/DrawerBody.js");
/* harmony import */ var _fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fluentui/react-components/unstable */ "./node_modules/@fluentui/react-drawer/lib/components/DrawerFooter/DrawerFooter.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarTitle/MessageBarTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-field/lib/components/Field/Field.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-label/lib/components/Label/Label.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-tooltip/lib/components/Tooltip/Tooltip.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Combobox/Combobox.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-combobox/lib/components/Option/Option.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/Accordion/Accordion.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionItem/AccordionItem.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionHeader/AccordionHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-accordion/lib/components/AccordionPanel/AccordionPanel.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-4.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-7.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");






var QueryPanelTestIds;
(function (QueryPanelTestIds) {
    QueryPanelTestIds["QueryPanelRoot"] = "query-panel-root";
    QueryPanelTestIds["ModelPicker"] = "query-panel-model-picker";
    QueryPanelTestIds["ModelOption"] = "query-panel-model-option";
    QueryPanelTestIds["FilterRowPrefix"] = "query-panel-filter-row";
    QueryPanelTestIds["SortRow"] = "query-panel-sort-row";
    QueryPanelTestIds["QueryButton"] = "query-panel-query-button";
    QueryPanelTestIds["ErrorBanner"] = "query-panel-error-banner";
})(QueryPanelTestIds || (QueryPanelTestIds = {}));
const useQueryPanelRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_3__.Drawer, { position: 'end', open: state.isVisible, size: 'large', onOpenChange: state.onClose, "data-testid": QueryPanelTestIds.QueryPanelRoot },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_4__.DrawerHeader, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_5__.DrawerHeaderTitle, { action: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: 'subtle', "aria-label": (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.close), icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Dismiss16Regular, null), onClick: state.onClose }) }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.title))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_8__.DrawerBody, { className: styles.body },
            (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.subtitle),
            state.queryPanelErrorBanner && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MessageBar, { intent: 'error', "data-testid": QueryPanelTestIds.ErrorBanner },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.MessageBarBody, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.MessageBarTitle, null, state.queryPanelErrorBanner.errorCode),
                    state.queryPanelErrorBanner.errorMessage,
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.Link, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.learn_more))))),
            state.selectedTab === 'twins' && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.Field, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.tooltip },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.Label, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.group_section_title)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.Tooltip, { content: {
                            children: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.tooltip_content),
                        }, relationship: 'label' },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_16__.Info16Regular, { tabIndex: 0 }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__.Combobox, { className: styles.combobox, placeholder: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.group_picker_placeholder), value: state.modelName, onOptionSelect: (_, data) => {
                        data.optionValue && state.setModel(data.optionValue);
                    }, "data-testid": QueryPanelTestIds.ModelPicker }, state.modelOptions.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_18__.Option, { key: option.modelId, "data-testid": QueryPanelTestIds.ModelOption }, option.modelName)))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_19__.Accordion, { multiple: true, defaultOpenItems: [
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.filter_section_title),
                    (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.sort_section_title),
                ] },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_20__.AccordionItem, { value: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.filter_section_title) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_21__.AccordionHeader, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.filter_section_title)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_22__.AccordionPanel, null,
                        state.filterRules.map((rule, index) => {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.FilterRow, { key: `filter${index}`, rowIndex: index, totalRows: state.filterRules.length, propertyOptions: state.propertyOptions, propertyType: rule.type, property: rule.property, operator: rule.operator, value: rule.value, setProperty: state.setFilterProperty, setOperator: state.setFilterOperator, setValue: state.setFilterValue, deleteFilterRule: state.deleteFilterRule, allowDeleteFinalRow: false, logicalOperator: rule.logicalOperator, setLogicalOperator: state.setFilterLogicalOperator, timeSeriesStartTimeUTC: rule.timeSeriesStartTimeUTC ?? '', setTimeSeriesStartTimeUTC: state.setFilterTimeSeriesStartTimeUTC, timeSeriesEndTimeUTC: rule.timeSeriesEndTimeUTC ?? '', setTimeSeriesEndTimeUTC: state.setFilterTimeSeriesEndTimeUTC, setFilterValid: state.setFilterValid }));
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_23__.Add24Regular, null), onClick: state.addFilterRule }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.add_filter_button)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_20__.AccordionItem, { value: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.sort_section_title) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_21__.AccordionHeader, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.sort_section_title)),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_22__.AccordionPanel, null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.SortRow, { propertyOptions: state.propertyOptions, property: state.sortRules[0].property, order: state.sortRules[0].order, setProperty: state.setSortProperty, setOrder: state.setSortOrder, propertyValidationMessage: state.propertyValidationMessage, orderValidationMessage: state.orderValidationMessage }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components_unstable__WEBPACK_IMPORTED_MODULE_24__.DrawerFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { appearance: 'primary', onClick: state.onQuery, disabled: state.disableApplyQueryButton, "data-testid": QueryPanelTestIds.QueryButton }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.query_panel.primary_button_title)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: state.onClose }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.cancel)))));
};


/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/QueryPanel.root.tsx":
/*!*********************************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/QueryPanel.root.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPanel: () => (/* binding */ QueryPanel)
/* harmony export */ });
/* harmony import */ var _QueryPanel_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryPanel.render */ "./src/apps/explorer/components/QueryPanel/QueryPanel.render.tsx");
/* harmony import */ var _QueryPanel_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueryPanel.styles */ "./src/apps/explorer/components/QueryPanel/QueryPanel.styles.ts");
/* harmony import */ var _QueryPanel_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryPanel.state */ "./src/apps/explorer/components/QueryPanel/QueryPanel.state.ts");



const MODULE_NAME = 'QueryPanel';
const QueryPanel = (props) => {
    // get state
    const state = (0,_QueryPanel_state__WEBPACK_IMPORTED_MODULE_2__.useQueryPanelState)(props);
    // get styles
    const styles = (0,_QueryPanel_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_QueryPanel_render__WEBPACK_IMPORTED_MODULE_0__.useQueryPanelRender)({ state, styles });
};
QueryPanel.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/QueryPanel.state.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/QueryPanel.state.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useQueryPanelState: () => (/* binding */ useQueryPanelState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _QueryPanel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueryPanel.types */ "./src/apps/explorer/components/QueryPanel/QueryPanel.types.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _hooks_routeProps_useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/routeProps/useExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useExplorerRouteProps.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/ExplorerContext.utils */ "./src/apps/explorer/contexts/ExplorerContext.utils.ts");
/* harmony import */ var _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/QueryCertifiedEvents */ "./src/apps/explorer/models/QueryCertifiedEvents.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");









const DEBUG_LOGGING = false;
const MODULE_NAME = 'QueryPanel.state';
const useQueryPanelState = (props) => {
    const { twinsAdvancedQuery, timeSeriesAdvancedQuery, eventsAdvancedQuery, tabbedQuery, setQuery, attributeSuggestions, timeSeriesDataPointSuggestions, models, selectedModel, getAndSetModel, } = (0,_contexts__WEBPACK_IMPORTED_MODULE_5__.useExplorerContext)();
    const routeProps = (0,_hooks_routeProps_useExplorerRouteProps__WEBPACK_IMPORTED_MODULE_4__.useExplorerRouteProps)();
    // state
    const [modelName, setModelName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [filterRules, setFilterRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabbedQuery[routeProps.tabName].filterRules);
    const [sortRules, setSortRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tabbedQuery[routeProps.tabName].sortRules);
    const [sortPropertyValidationMessage, setSortPropertyValidationMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [sortOrderValidationMessage, setSortOrderValidationMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [queryPanelErrorBanner, setQueryPanelErrorBanner] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const [disableApplyQueryButton, setDisableApplyQueryButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const propertyOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (routeProps.tabName === 'twins') {
            let options = _QueryPanel_types__WEBPACK_IMPORTED_MODULE_2__.twinPropertyOptions;
            // If no model is selected, show all attributes and timeseries data points
            if (!modelName) {
                if (attributeSuggestions.state === 'success') {
                    options = options.concat(attributeSuggestions.data.map((attributeSuggestion) => ({
                        name: attributeSuggestion.identifier,
                        type: _do_components__WEBPACK_IMPORTED_MODULE_8__.SqlTypeFilterRowTypeMapping[attributeSuggestion.valueType],
                        valueType: attributeSuggestion.valueType,
                        source: 'Attribute',
                    })));
                }
                if (timeSeriesDataPointSuggestions.state === 'success') {
                    options = options.concat(timeSeriesDataPointSuggestions.data.map((timeSeriesDataPointSuggestion) => ({
                        name: timeSeriesDataPointSuggestion.identifier,
                        type: 'timeSeries',
                        valueType: timeSeriesDataPointSuggestion.valueType,
                        source: 'TimeSeries',
                    })));
                }
            }
            if (selectedModel?.state === 'success') {
                options = options.concat(selectedModel.data.attributes.map((attribute) => ({
                    name: attribute.name,
                    type: _do_components__WEBPACK_IMPORTED_MODULE_8__.SqlTypeFilterRowTypeMapping[attribute.valueType],
                    valueType: attribute.valueType,
                    source: 'Attribute',
                })));
                options = options.concat(selectedModel.data.timeseriesDataPoints.map((timeSeriesDataPoint) => ({
                    name: timeSeriesDataPoint.timeSeriesDataPointId,
                    type: 'timeSeries',
                    valueType: timeSeriesDataPoint.valueType,
                    source: 'TimeSeries',
                })));
            }
            return options;
        }
        else if (routeProps.tabName === 'events') {
            return _QueryPanel_types__WEBPACK_IMPORTED_MODULE_2__.eventPropertyOptions;
        }
        return _QueryPanel_types__WEBPACK_IMPORTED_MODULE_2__.timeSeriesPropertyOptions;
    }, [
        modelName,
        attributeSuggestions,
        timeSeriesDataPointSuggestions,
        selectedModel,
        routeProps.tabName,
    ]);
    const modelOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (models?.state === 'success') {
            return models.data.data;
        }
        return [];
    }, [models]);
    const setModel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((modelName) => {
        setModelName(modelName);
        const modelInfo = modelOptions.find((model) => model.modelName === modelName);
        modelInfo && getAndSetModel(modelInfo.modelId);
    }, [getAndSetModel, modelOptions]);
    // TODO: Remove hardcoded 0-index when supporting multiple sort rules
    const sortPropertyValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // Only validate if order is not empty
        let validationMessage = undefined;
        if (sortRules[0].property.length === 0 && sortRules[0].order.length > 0) {
            validationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.explorer.query_panel.empty_property_validation_message);
        }
        setSortPropertyValidationMessage(validationMessage);
        return validationMessage;
    }, [sortRules]);
    // TODO: Remove hardcoded 0-index when supporting multiple sort rules
    const sortOrderValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // Only validate if property is not empty
        let validationMessage = undefined;
        if (sortRules[0].order.length === 0 && sortRules[0].property.length > 0) {
            validationMessage = (0,_do_localization__WEBPACK_IMPORTED_MODULE_3__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_3__.strings.explorer.query_panel.empty_order_validation_message);
        }
        setSortOrderValidationMessage(validationMessage);
        return validationMessage;
    }, [sortRules]);
    const onQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        const propertyError = sortPropertyValidation();
        const orderError = sortOrderValidation();
        if (!propertyError && !orderError) {
            const currentTime = new Date().toISOString();
            (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().logStandardizedCertifiedEvent({
                featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_7__.QueryFeature.AdvancedQuery,
                activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_7__.AdvancedQueryActivity.ApplyQueryClicked,
                activityStatus: "Succeeded" /* Status.Succeeded */,
                operationStartTime: currentTime,
                operationEndTime: currentTime,
            });
            const modelInfo = modelOptions.find((model) => model.modelName === modelName);
            const model = modelInfo ? [modelInfo.modelId] : undefined;
            setQuery(routeProps.tabName, filterRules, sortRules, [modelName]);
            const queryObject = (0,_contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_6__.getAdvancedSearchQuery)(routeProps.tabName, filterRules, sortRules, model);
            switch (routeProps.tabName) {
                case 'twins':
                    twinsAdvancedQuery(queryObject);
                    break;
                case 'timeSeries':
                    timeSeriesAdvancedQuery(queryObject);
                    break;
                case 'events':
                    eventsAdvancedQuery(queryObject);
                    break;
            }
            props.onClose();
        }
    }, [
        eventsAdvancedQuery,
        filterRules,
        modelName,
        modelOptions,
        props,
        routeProps.tabName,
        setQuery,
        sortOrderValidation,
        sortPropertyValidation,
        sortRules,
        timeSeriesAdvancedQuery,
        twinsAdvancedQuery,
    ]);
    const setFilterLogicalOperator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, logicalOperator) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].logicalOperator = logicalOperator;
            return newFilterRules;
        });
    }, []);
    const setFilterProperty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, property, valueType) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            const propertyOption = propertyOptions.find((prop) => prop.name === property && prop.valueType === valueType);
            // Reset the operator and value if the property type changes
            const resetOperatorAndValue = propertyOption && propertyOption.type !== newFilterRules[index].type;
            if (resetOperatorAndValue) {
                newFilterRules[index].operator = '';
                newFilterRules[index].value = '';
            }
            if (propertyOption !== undefined) {
                newFilterRules[index].property = propertyOption.name;
                newFilterRules[index].type = propertyOption.type;
                newFilterRules[index].valueType = propertyOption.valueType;
                newFilterRules[index].source = propertyOption.source ?? undefined;
            }
            return newFilterRules;
        });
    }, [propertyOptions]);
    const setFilterOperator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, operator) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].operator = operator;
            return newFilterRules;
        });
    }, []);
    const setFilterValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, value) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].value = value;
            return newFilterRules;
        });
    }, []);
    const setFilterTimeSeriesStartTimeUTC = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, value) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].timeSeriesStartTimeUTC = value;
            return newFilterRules;
        });
    }, []);
    const setFilterTimeSeriesEndTimeUTC = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, value) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].timeSeriesEndTimeUTC = value;
            return newFilterRules;
        });
    }, []);
    const setFilterValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, value) => {
        setFilterRules((currentFilterRules) => {
            const newFilterRules = [...currentFilterRules];
            newFilterRules[index].valid = value;
            return newFilterRules;
        });
    }, []);
    const addFilterRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        setFilterRules((currentFilterRules) => {
            const modifiedFilterRules = [...currentFilterRules];
            modifiedFilterRules.push({
                type: 'string',
                property: '',
                operator: '',
                value: '',
                logicalOperator: 'and',
            });
            return modifiedFilterRules;
        });
    }, []);
    const deleteFilterRule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index) => {
        setFilterRules((currentFilterRules) => {
            const modifiedFilterRules = [...currentFilterRules];
            modifiedFilterRules.splice(index, 1);
            return modifiedFilterRules;
        });
    }, []);
    // TODO: Remove hardcoded 0-index when supporting multiple sort rules
    const setSortProperty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((property) => {
        const newSortRules = [...sortRules];
        newSortRules[0].property = property;
        setSortRules(newSortRules);
        sortPropertyValidation();
    }, [sortPropertyValidation, sortRules]);
    // TODO: Remove hardcoded 0-index when supporting multiple sort rules
    const setSortOrder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((order) => {
        const newSortRules = [...sortRules];
        newSortRules[0].order = order;
        setSortRules(newSortRules);
        sortOrderValidation();
    }, [sortOrderValidation, sortRules]);
    // side effects
    // Query panel error banner displays errors internal server errors from API
    // calls used to populate the query panel dropdown selections
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (attributeSuggestions.state === 'error') {
            setQueryPanelErrorBanner({
                errorMessage: attributeSuggestions.errorMessage,
                errorCode: attributeSuggestions.errorCode,
            });
        }
        else if (timeSeriesDataPointSuggestions.state === 'error') {
            setQueryPanelErrorBanner({
                errorMessage: timeSeriesDataPointSuggestions.errorMessage,
                errorCode: timeSeriesDataPointSuggestions.errorCode,
            });
        }
        else if (selectedModel?.state === 'error') {
            setQueryPanelErrorBanner({
                errorMessage: selectedModel.errorMessage,
                errorCode: selectedModel.errorCode,
            });
        }
        else {
            setQueryPanelErrorBanner(undefined);
        }
    }, [attributeSuggestions, timeSeriesDataPointSuggestions, selectedModel]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Reset the filters and sorts when the tab changes
        setFilterRules(tabbedQuery[routeProps.tabName].filterRules);
        setSortRules(tabbedQuery[routeProps.tabName].sortRules);
        if (routeProps.tabName === 'twins') {
            // Currently only support filtering by one model
            const modelName = tabbedQuery[routeProps.tabName].models?.[0];
            modelName && setModel(modelName);
        }
    }, [routeProps.tabName, setModel, tabbedQuery]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let disableApplyQueryButton = false;
        filterRules.forEach((filterRule, _index) => {
            if (!(0,_contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_6__.isFilterRuleEmpty)(filterRule) &&
                (!filterRule.value ||
                    !filterRule.property ||
                    !filterRule.operator ||
                    !filterRule.valid)) {
                disableApplyQueryButton = true;
                return;
            }
            if (filterRule.type === 'timeSeries') {
                if (!filterRule.timeSeriesStartTimeUTC ||
                    !filterRule.timeSeriesEndTimeUTC) {
                    disableApplyQueryButton = true;
                    return;
                }
            }
        });
        sortRules.forEach((sortRule) => {
            if (!(0,_contexts_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_6__.isSortRuleEmpty)(sortRule) &&
                (!sortRule.property || !sortRule.order)) {
                disableApplyQueryButton = true;
                return;
            }
        });
        setDisableApplyQueryButton(disableApplyQueryButton);
    }, [
        filterRules,
        sortOrderValidationMessage,
        sortPropertyValidationMessage,
        sortRules,
    ]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            isVisible: props.isVisible,
            onClose: props.onClose,
            propertyOptions,
            filterRules,
            setFilterLogicalOperator,
            setFilterProperty,
            setFilterOperator,
            setFilterValue,
            setFilterTimeSeriesStartTimeUTC,
            setFilterTimeSeriesEndTimeUTC,
            addFilterRule,
            deleteFilterRule,
            sortRules,
            setSortProperty,
            setSortOrder,
            propertyValidationMessage: sortPropertyValidationMessage,
            setPropertyValidationMessage: setSortPropertyValidationMessage,
            orderValidationMessage: sortOrderValidationMessage,
            setOrderValidationMessage: setSortOrderValidationMessage,
            onQuery,
            queryPanelErrorBanner,
            setQueryPanelErrorBanner,
            selectedTab: routeProps.tabName,
            modelName: modelName,
            modelOptions,
            setModel,
            disableApplyQueryButton,
            setFilterValid,
        };
    }, [
        props.isVisible,
        props.onClose,
        propertyOptions,
        filterRules,
        setFilterLogicalOperator,
        setFilterProperty,
        setFilterOperator,
        setFilterValue,
        setFilterTimeSeriesStartTimeUTC,
        setFilterTimeSeriesEndTimeUTC,
        addFilterRule,
        deleteFilterRule,
        sortRules,
        setSortProperty,
        setSortOrder,
        sortPropertyValidationMessage,
        sortOrderValidationMessage,
        onQuery,
        queryPanelErrorBanner,
        routeProps.tabName,
        modelName,
        modelOptions,
        setModel,
        disableApplyQueryButton,
        setFilterValid,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/QueryPanel.styles.ts":
/*!**********************************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/QueryPanel.styles.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  body: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62",
    Bhrd7zp: "fl43uef",
    i8kkvl: "f4px1ci",
    Belr9w4: "fn67r4l"
  },
  tooltip: {
    mc9l5x: "f22iagw",
    Brf1p80: ["fc7pyfw", "fgbriwd"],
    Bt984gj: "f122n59",
    B6of3ja: "f1xdg43u",
    jrapky: "fd1gkq",
    Bhrd7zp: "fl43uef",
    i8kkvl: "f1q8lukm",
    Belr9w4: "f1ma2n7n"
  },
  combobox: {
    a9b677: "f1xluj9x"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".f4px1ci{column-gap:8px;}", ".fn67r4l{row-gap:8px;}", ".fc7pyfw{justify-content:left;}", ".fgbriwd{justify-content:right;}", ".f122n59{align-items:center;}", ".f1xdg43u{margin-top:12px;}", ".fd1gkq{margin-bottom:4px;}", ".f1q8lukm{column-gap:4px;}", ".f1ma2n7n{row-gap:4px;}", ".f1xluj9x{width:25%;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/QueryPanel.types.ts":
/*!*********************************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/QueryPanel.types.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventPropertyOptions: () => (/* binding */ eventPropertyOptions),
/* harmony export */   timeSeriesPropertyOptions: () => (/* binding */ timeSeriesPropertyOptions),
/* harmony export */   twinPropertyOptions: () => (/* binding */ twinPropertyOptions)
/* harmony export */ });
// Constant properties from Twin, Event, and TimeSeriesDataPoint schema
const twinPropertyOptions = [
    {
        name: 'DisplayName',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'TwinId',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'Description',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'CreatedTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
    {
        name: 'UpdatedTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
    {
        name: 'ModelId',
        type: 'string',
        valueType: 'String',
    },
    // { name: 'state', type: 'string' }, // There is no state column in this table. Is this supposed to be isDeleted?
    // { name: 'IsDeleted', type: 'boolean' }, // Should we allow filtering by isDeleted?
];
const eventPropertyOptions = [
    {
        name: 'TwinId',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'EventId',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'EventType',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'SourceTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
    {
        name: 'CreatedTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
    {
        name: 'Source',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'Message',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'Severity',
        type: 'string',
        valueType: 'String',
    },
];
const timeSeriesPropertyOptions = [
    {
        name: 'TimeSeriesDataPointId',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'DataPointSource',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'ValueType',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'DisplayName',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'ValueUOM',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'Description',
        type: 'string',
        valueType: 'String',
    },
    {
        name: 'TwinId',
        type: 'string',
        valueType: 'String',
    },
    // { name: 'IsDeleted', type: 'boolean' }, // Should we allow filtering by isDeleted?
    {
        name: 'CreatedTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
    {
        name: 'UpdatedTimeUTC',
        type: 'date',
        valueType: 'DateTime',
    },
];


/***/ }),

/***/ "./src/apps/explorer/components/QueryPanel/index.ts":
/*!**********************************************************!*\
  !*** ./src/apps/explorer/components/QueryPanel/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryPanel: () => (/* reexport safe */ _QueryPanel_root__WEBPACK_IMPORTED_MODULE_0__.QueryPanel)
/* harmony export */ });
/* harmony import */ var _QueryPanel_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueryPanel.root */ "./src/apps/explorer/components/QueryPanel/QueryPanel.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/events/EventList/EventList.render.tsx":
/*!****************************************************************************!*\
  !*** ./src/apps/explorer/components/events/EventList/EventList.render.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListTestIds: () => (/* binding */ EventListTestIds),
/* harmony export */   useEventListRender: () => (/* binding */ useEventListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarTitle/MessageBarTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/Skeleton/Skeleton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/SkeletonItem/SkeletonItem.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _twins_details_TwinEventsPanel_components_EventsList_components_EventDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../twins/details/TwinEventsPanel/components/EventsList/components/EventDetails */ "./src/apps/explorer/components/twins/details/TwinEventsPanel/components/EventsList/components/EventDetails/index.ts");
/* harmony import */ var _twins_TwinList_TwinList_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../twins/TwinList/TwinList.state */ "./src/apps/explorer/components/twins/TwinList/TwinList.state.ts");






var EventListTestIds;
(function (EventListTestIds) {
    EventListTestIds["Row"] = "event-row";
    EventListTestIds["Skeleton"] = "events-skeleton";
})(EventListTestIds || (EventListTestIds = {}));
(function (EventListTestIds) {
    EventListTestIds["EventType"] = "Event type";
    EventListTestIds["EventId"] = "Event ID";
    EventListTestIds["TwinId"] = "TwinId";
    EventListTestIds["Source"] = "Source";
    EventListTestIds["Message"] = "Message";
    EventListTestIds["Severity"] = "Severity";
    EventListTestIds["Timestamp"] = "Timestamp";
    EventListTestIds["CreatedTimestamp"] = "CreatedTimestamp";
    EventListTestIds["ErrorBanner"] = "Error banner";
})(EventListTestIds || (EventListTestIds = {}));
const useEventListRender = ({ state, styles, }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'EventName',
            renderCell: (event) => {
                return event.eventType;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.EventType }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.event_type)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'EventId',
            renderCell: (event) => {
                return event.eventId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.EventId }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.event_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'TwinId',
            renderCell: (event) => {
                return event.twinId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.TwinId }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.twin_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'source',
            renderCell: (event) => {
                return event.source;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.Source }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.source)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'message',
            renderCell: (event) => {
                return event.message;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.Message }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.message)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'severity',
            renderCell: (event) => {
                return event.severity;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.Severity }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.severity)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'created_timestamp',
            renderCell: (event) => {
                return event.createdTimestamp?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.CreatedTimestamp }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.created_timestamp)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'timestamp',
            renderCell: (event) => {
                return event.sourceTimestamp?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": EventListTestIds.Timestamp }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.timestamp)));
            },
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        state.errorMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MessageBar, { className: styles.errorBanner, intent: 'error', "data-testid": EventListTestIds.ErrorBanner },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MessageBarBody, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MessageBarTitle, null, state.errorMessage),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.Link, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.learn_more))))),
        !state.isLoading && !state.events.length ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.events.event_list.no_data_message) })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGrid, { items: !state.isLoading ? state.events : Array(_twins_TwinList_TwinList_state__WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE).fill({}), columns: columns, getRowId: (event) => event.eventId },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridHeader, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.DataGridHeaderCell, null, renderHeaderCell())))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridRow, { "data-testid": EventListTestIds.Row, key: rowId, onClick: state.isLoading
                        ? undefined
                        : () => {
                            state.setSelectedEvent(item.eventId);
                        } }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.DataGridCell, null, !state.isLoading ? (renderCell(item)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__.Skeleton, { "data-testid": EventListTestIds.Skeleton, className: styles.skeleton },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__.SkeletonItem, null))))))))),
            !state.isLoading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.pageFooter },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.PageFooter, { initialPage: 1, pageCount: state.pageCount, onPageChange: state.setCurrentPage }))),
            state.selectedEvent !== undefined && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_twins_details_TwinEventsPanel_components_EventsList_components_EventDetails__WEBPACK_IMPORTED_MODULE_3__.EventDetails, { eventId: state.selectedEvent, onClose: () => {
                    state.setSelectedEvent(undefined);
                } }))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/events/EventList/EventList.root.tsx":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/events/EventList/EventList.root.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventList: () => (/* binding */ EventList)
/* harmony export */ });
/* harmony import */ var _EventList_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventList.render */ "./src/apps/explorer/components/events/EventList/EventList.render.tsx");
/* harmony import */ var _EventList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventList.styles */ "./src/apps/explorer/components/events/EventList/EventList.styles.ts");
/* harmony import */ var _EventList_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventList.state */ "./src/apps/explorer/components/events/EventList/EventList.state.ts");



const MODULE_NAME = 'EventList';
const EventList = (props) => {
    // get state
    const state = (0,_EventList_state__WEBPACK_IMPORTED_MODULE_2__.useEventListState)(props);
    // get styles
    const styles = (0,_EventList_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_EventList_render__WEBPACK_IMPORTED_MODULE_0__.useEventListRender)({ state, styles });
};
EventList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/events/EventList/EventList.state.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/events/EventList/EventList.state.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListState: () => (/* binding */ useEventListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts */ "./src/apps/explorer/contexts/index.ts");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'EventList.state';
const PAGE_SIZE = 10;
const useEventListState = (_props) => {
    // contexts
    const { events } = (0,_contexts__WEBPACK_IMPORTED_MODULE_2__.useExplorerContext)();
    // state
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [selectedEvent, setSelectedEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    // hooks
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (events.state === 'success') {
            setPageCount(Math.ceil(events.data.length / PAGE_SIZE));
        }
    }, [events]);
    const shownEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (events.state === 'success') {
            return events.data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
        }
        return [];
    }, [events, currentPage]);
    const errorMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (events.state === 'error') {
            return `${events.errorCode}: ${events.errorMessage}`;
        }
        return undefined;
    }, [events]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            events: shownEvents,
            selectedEvent,
            setSelectedEvent,
            currentPage: currentPage,
            setCurrentPage,
            pageCount,
            isLoading: events.state === 'uncalled' || events.state === 'pending',
            errorMessage,
        };
    }, [
        shownEvents,
        selectedEvent,
        currentPage,
        pageCount,
        events.state,
        errorMessage,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/events/EventList/EventList.styles.ts":
/*!***************************************************************************!*\
  !*** ./src/apps/explorer/components/events/EventList/EventList.styles.ts ***!
  \***************************************************************************/
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
  skeleton: {
    a9b677: "fly5x3f"
  },
  errorBanner: {
    B6of3ja: "fww94b8",
    jrapky: "f8l5zjj"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f13qh94s{display:grid;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fuq56rw{padding-top:24px;}", ".f1locze1{align-self:end;}", ".fn9xixx{justify-self:center;}", ".fww94b8{margin-top:var(--spacingVerticalXS);}", ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/events/EventList/index.ts":
/*!****************************************************************!*\
  !*** ./src/apps/explorer/components/events/EventList/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventList: () => (/* reexport safe */ _EventList_root__WEBPACK_IMPORTED_MODULE_0__.EventList)
/* harmony export */ });
/* harmony import */ var _EventList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventList.root */ "./src/apps/explorer/components/events/EventList/EventList.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/index.ts":
/*!***********************************************!*\
  !*** ./src/apps/explorer/components/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerPage: () => (/* reexport safe */ _ExplorerPage__WEBPACK_IMPORTED_MODULE_0__.ExplorerPage)
/* harmony export */ });
/* harmony import */ var _ExplorerPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerPage */ "./src/apps/explorer/components/ExplorerPage/index.ts");



/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.render.tsx":
/*!******************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.render.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesListTestIds: () => (/* binding */ TimeSeriesListTestIds),
/* harmony export */   useTimeSeriesListRender: () => (/* binding */ useTimeSeriesListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarTitle/MessageBarTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/Skeleton/Skeleton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/SkeletonItem/SkeletonItem.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");






var TimeSeriesListTestIds;
(function (TimeSeriesListTestIds) {
    TimeSeriesListTestIds["Row"] = "time-series-row";
    TimeSeriesListTestIds["TimeSeriesNameHeader"] = "time-series-name-header";
    TimeSeriesListTestIds["TimeSeriesIdHeader"] = "time-series-id-header";
    TimeSeriesListTestIds["TwinIdHeader"] = "twin-id-header";
    TimeSeriesListTestIds["FormulasHeader"] = "formulas-header";
    TimeSeriesListTestIds["DescriptionHeader"] = "description-header";
    TimeSeriesListTestIds["UomHeader"] = "uom-header";
    TimeSeriesListTestIds["CreatedTimeHeader"] = "created-time-header";
    TimeSeriesListTestIds["UpdatedTimeHeader"] = "updated-time-header";
    TimeSeriesListTestIds["Skeleton"] = "time-series-skeleton";
    TimeSeriesListTestIds["ErrorBanner"] = "time-series-error-banner";
})(TimeSeriesListTestIds || (TimeSeriesListTestIds = {}));
const useTimeSeriesListRender = ({ state, styles, }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'timeSeriesName',
            renderCell: (timeSeries) => {
                return timeSeries.timeSeriesName;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.TimeSeriesNameHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.time_series_name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'timeSeriesId',
            renderCell: (timeSeries) => {
                return timeSeries.timeSeriesDataPointId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.TimeSeriesIdHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.time_series_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'twinId',
            renderCell: (timeSeries) => {
                return timeSeries.twinId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.TwinIdHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.asset_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'formulas',
            renderCell: (timeSeries) => {
                return timeSeries.source === _do_core__WEBPACK_IMPORTED_MODULE_3__.TimeSeriesSourceType.Calculated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Link, { as: 'a', onClick: (event) => {
                        event.stopPropagation();
                        state.navigateToFormulaList(timeSeries.twinId);
                    } }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.insights.formulas.list.formulas_link_placeholder))) : ('-');
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.FormulasHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.formulas)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'description',
            renderCell: (timeSeries) => {
                return timeSeries.description;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.DescriptionHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.description)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'uom',
            renderCell: (timeSeries) => {
                return timeSeries.uom;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.UomHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.uom)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'created_timestamp',
            renderCell: (timeSeries) => {
                return timeSeries.createdTime?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.CreatedTimeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.created_time)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.createTableColumn)({
            columnId: 'updated_timestamp',
            renderCell: (timeSeries) => {
                return timeSeries.updatedTime?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TimeSeriesListTestIds.UpdatedTimeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.updated_time)));
            },
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        state.errorMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MessageBar, { className: styles.errorBanner, intent: 'error', "data-testid": TimeSeriesListTestIds.ErrorBanner },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.MessageBarBody, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.MessageBarTitle, null, state.errorMessage),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.Link, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.common.learn_more))))),
        !state.isLoading && !state.timeSeries.length ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_2__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_2__.strings.explorer.time_series.time_series_list.empty_state) })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGrid, { items: !state.isLoading ? state.timeSeries : Array(10).fill({}), columns: columns, getRowId: (timeSeries) => {
                    if (state.isLoading) {
                        return Math.random().toString() + '-skeleton';
                    }
                    else {
                        return `${timeSeries.timeSeriesDataPointId}${_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__.TIME_SERIES_DELIMETER}${timeSeries.twinId}`; // Emoji delimeter to avoid other common GUID formats
                    }
                }, selectionMode: 'multiselect', selectedItems: state.selectedItems, onSelectionChange: state.isLoading ? undefined : state.setSelectedTimeSeries, className: styles.dataGrid },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridHeader, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.DataGridHeaderCell, null, renderHeaderCell())))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridRow, { "data-testid": TimeSeriesListTestIds.Row, key: rowId }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.DataGridCell, null, state.isLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__.Skeleton, { "data-testid": TimeSeriesListTestIds.Skeleton, className: styles.skeleton },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_17__.SkeletonItem, null))) : (renderCell(item)))))))),
            !state.isLoading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.pageFooter },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_1__.PageFooter, { initialPage: 1, pageCount: state.pageCount, onPageChange: state.setCurrentPage })))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.root.tsx":
/*!****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.root.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesList: () => (/* binding */ TimeSeriesList)
/* harmony export */ });
/* harmony import */ var _TimeSeriesList_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesList.render */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.render.tsx");
/* harmony import */ var _TimeSeriesList_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeSeriesList.styles */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.styles.ts");
/* harmony import */ var _TimeSeriesList_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeSeriesList.state */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.state.ts");



const MODULE_NAME = 'TimeSeriesList';
const TimeSeriesList = (props) => {
    // get state
    const state = (0,_TimeSeriesList_state__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesListState)(props);
    // get styles
    const styles = (0,_TimeSeriesList_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TimeSeriesList_render__WEBPACK_IMPORTED_MODULE_0__.useTimeSeriesListRender)({ state, styles });
};
TimeSeriesList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.state.ts":
/*!****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.state.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeSeriesListState: () => (/* binding */ useTimeSeriesListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core/hooks */ "./src/apps/core/hooks/index.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'TimeSeriesList.state';
const EXPANDED_PAGE_SIZE = 10;
const COMPACT_PAGE_SIZE = 4;
const useTimeSeriesListState = (_props) => {
    // contexts
    const { timeSeries } = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useExplorerContext)();
    const { selectedTimeSeries, setSelectedTimeSeries } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_4__.useTimeSeriesContext)();
    // state
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageSize, setPageSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedTimeSeries.length === 0 ? EXPANDED_PAGE_SIZE : COMPACT_PAGE_SIZE);
    const [selectedItems, setSelectedItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Set());
    // hooks
    const debugLogging = (0,_do_core_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugLogging)(DEBUG_LOGGING);
    const navigation = (0,_do_core_hooks__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    const routeProps = (0,_do_core_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppRouteProps)();
    // callbacks
    const onTimeSeriesSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_e, data) => {
        setSelectedTimeSeries(data.selectedItems);
        setSelectedItems(data.selectedItems);
    }, [setSelectedTimeSeries]);
    const navigateToFormulaList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId) => {
        if (!twinId)
            return;
        const path = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.getNestedPage)('insights', routeProps.artifactId);
        await navigation?.navigate({ path: `${path}/${twinId}/list` });
    }, [routeProps.artifactId, navigation]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (timeSeries.state === 'success') {
            const timeSeriesData = timeSeries.data ?? [];
            if (selectedTimeSeries.length === 0) {
                setPageSize(EXPANDED_PAGE_SIZE);
                const pageCount = Math.ceil(timeSeriesData.length / EXPANDED_PAGE_SIZE);
                setPageCount(pageCount);
                // Since de-selecting all timeseries will reduce page #, make sure we're not on a page that no longer exists
                if (currentPage > pageCount) {
                    setCurrentPage(pageCount);
                }
            }
            else {
                if (pageSize === EXPANDED_PAGE_SIZE) {
                    setPageSize(COMPACT_PAGE_SIZE);
                    setPageCount(Math.ceil(timeSeriesData.length / COMPACT_PAGE_SIZE));
                }
            }
        }
    }, [currentPage, pageSize, selectedTimeSeries.length, timeSeries]);
    const shownTimeSeries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (timeSeries.state === 'success') {
            return timeSeries.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        }
        return [];
    }, [timeSeries, currentPage, pageSize]);
    const errorMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (timeSeries.state === 'error') {
            return `${timeSeries.errorCode}: ${timeSeries.errorMessage}`;
        }
        return undefined;
    }, [timeSeries]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            timeSeries: shownTimeSeries,
            selectedItems,
            setSelectedTimeSeries: onTimeSeriesSelected,
            currentPage: currentPage,
            setCurrentPage,
            pageCount: pageCount,
            isLoading: timeSeries.state === 'uncalled' || timeSeries.state === 'pending',
            errorMessage,
            navigateToFormulaList,
        };
    }, [
        shownTimeSeries,
        selectedItems,
        onTimeSeriesSelected,
        currentPage,
        pageCount,
        timeSeries.state,
        errorMessage,
        navigateToFormulaList,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.styles.ts":
/*!*****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.styles.ts ***!
  \*****************************************************************************************/
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
  },
  skeleton: {
    a9b677: "fly5x3f"
  },
  errorBanner: {
    B6of3ja: "fww94b8",
    jrapky: "f8l5zjj"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f13qh94s{display:grid;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fuq56rw{padding-top:24px;}", ".f1locze1{align-self:end;}", ".fn9xixx{justify-self:center;}", ".fww94b8{margin-top:var(--spacingVerticalXS);}", ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesList/index.ts":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesList/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesList: () => (/* reexport safe */ _TimeSeriesList_root__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesList)
/* harmony export */ });
/* harmony import */ var _TimeSeriesList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesList.root */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/TimeSeriesList.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.render.tsx":
/*!******************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.render.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeSeriesPageRender: () => (/* binding */ useTimeSeriesPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TimeSeriesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TimeSeriesList */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/index.ts");
/* harmony import */ var _TimeSeriesChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../TimeSeriesChart */ "./src/apps/explorer/components/TimeSeriesChart/index.ts");



const useTimeSeriesPageRender = ({ state, styles, }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.listContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeSeriesList__WEBPACK_IMPORTED_MODULE_1__.TimeSeriesList, null)),
        state.selectedTimeSeries.length != 0 ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.chartContainer },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TimeSeriesChart__WEBPACK_IMPORTED_MODULE_2__.TimeSeriesChart, null))) : null));
};


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.root.tsx":
/*!****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.root.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesPage: () => (/* binding */ TimeSeriesPage)
/* harmony export */ });
/* harmony import */ var _TimeSeriesPage_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesPage.render */ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.render.tsx");
/* harmony import */ var _TimeSeriesPage_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeSeriesPage.styles */ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.styles.ts");
/* harmony import */ var _TimeSeriesPage_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeSeriesPage.state */ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.state.ts");



const MODULE_NAME = 'TimeSeriesPage';
const TimeSeriesPage = () => {
    // get state
    const state = (0,_TimeSeriesPage_state__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesPageState)();
    // get styles
    const styles = (0,_TimeSeriesPage_styles__WEBPACK_IMPORTED_MODULE_1__.useClassNames)();
    // render the item
    return (0,_TimeSeriesPage_render__WEBPACK_IMPORTED_MODULE_0__.useTimeSeriesPageRender)({ state, styles });
};
TimeSeriesPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.state.ts":
/*!****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.state.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTimeSeriesPageState: () => (/* binding */ useTimeSeriesPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/TimeSeriesContext */ "./src/apps/explorer/contexts/TimeSeriesContext.tsx");



const DEBUG_LOGGING = false;
const MODULE_NAME = 'TimeSeriesPage.state';
const useTimeSeriesPageState = () => {
    // contexts
    // state
    const { selectedTimeSeries } = (0,_contexts_TimeSeriesContext__WEBPACK_IMPORTED_MODULE_2__.useTimeSeriesContext)();
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
        (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.getLogger)().debug(MODULE_NAME, 'Render. {state}', {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.styles.ts":
/*!*****************************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.styles.ts ***!
  \*****************************************************************************************/
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
  listContainer: {
    Bh6795r: "f95dn2i"
  },
  chartContainer: {
    Bh6795r: "fqerorx"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f7qsgvn{row-gap:24px;}", ".f95dn2i{flex-grow:4;}", ".fqerorx{flex-grow:1;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/index.ts":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/TimeSeriesPage/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesPage: () => (/* reexport safe */ _TimeSeriesPage_root__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesPage)
/* harmony export */ });
/* harmony import */ var _TimeSeriesPage_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesPage.root */ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/TimeSeriesPage.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/timeSeries/index.ts":
/*!**********************************************************!*\
  !*** ./src/apps/explorer/components/timeSeries/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeSeriesList: () => (/* reexport safe */ _TimeSeriesList__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesList),
/* harmony export */   TimeSeriesPage: () => (/* reexport safe */ _TimeSeriesPage__WEBPACK_IMPORTED_MODULE_1__.TimeSeriesPage)
/* harmony export */ });
/* harmony import */ var _TimeSeriesList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeSeriesList */ "./src/apps/explorer/components/timeSeries/TimeSeriesList/index.ts");
/* harmony import */ var _TimeSeriesPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeSeriesPage */ "./src/apps/explorer/components/timeSeries/TimeSeriesPage/index.ts");




/***/ }),

/***/ "./src/apps/explorer/components/twins/GraphPage/GraphPage.render.tsx":
/*!***************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/GraphPage.render.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGraphPageRender: () => (/* binding */ useGraphPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_components_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/components/Graph */ "./src/apps/components/Graph/index.ts");


const useGraphPageRender = (props) => {
    const { state, styles } = props;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components_Graph__WEBPACK_IMPORTED_MODULE_1__.Graph, { data: state.graphData })));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/GraphPage/GraphPage.state.ts":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/GraphPage.state.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGraphPageState: () => (/* binding */ useGraphPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useGraphPageState = (props) => {
    // contexts
    // state
    // hooks
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            graphData: props.data || { nodes: [], edges: [] },
        };
    }, [props.data]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/GraphPage/GraphPage.styles.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/GraphPage.styles.ts ***!
  \**************************************************************************/
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

/***/ "./src/apps/explorer/components/twins/GraphPage/GraphPage.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/GraphPage.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphPage: () => (/* binding */ GraphPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _GraphPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphPage.render */ "./src/apps/explorer/components/twins/GraphPage/GraphPage.render.tsx");
/* harmony import */ var _GraphPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphPage.styles */ "./src/apps/explorer/components/twins/GraphPage/GraphPage.styles.ts");
/* harmony import */ var _GraphPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphPage.state */ "./src/apps/explorer/components/twins/GraphPage/GraphPage.state.ts");




const MODULE_NAME = 'GraphPage';
const GraphPage = (_props) => {
    // get state
    const state = (0,_GraphPage_state__WEBPACK_IMPORTED_MODULE_3__.useGraphPageState)(_props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_GraphPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_GraphPage_render__WEBPACK_IMPORTED_MODULE_1__.useGraphPageRender)({ state, styles });
};
GraphPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/GraphPage/index.ts":
/*!***************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphPage: () => (/* reexport safe */ _GraphPage__WEBPACK_IMPORTED_MODULE_0__.GraphPage)
/* harmony export */ });
/* harmony import */ var _GraphPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphPage */ "./src/apps/explorer/components/twins/GraphPage/GraphPage.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.render.tsx":
/*!***********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.render.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemLayout: () => (/* binding */ itemLayout),
/* harmony export */   renderItemLink: () => (/* binding */ renderItemLink),
/* harmony export */   useHierarchyPageRender: () => (/* binding */ useHierarchyPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/core/mergeClasses.esm.js");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");




const renderItemLink = (item, navigateToDetails) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Link // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    , { "data-testid": `${"twin-link-" /* TestIds.TwinLinkPrefix */}${item.twin.twinId}`, as: 'a' // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        , onClick: () => navigateToDetails(item.twin.twinId) }, item.childCount > 0
        ? (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.hierarchy_tree.display_with_child_count_format, {
            display_name: item.displayName,
            child_count: item.childCount,
        })
        : item.displayName));
};
const itemLayout = (item, navigateToDetails, styles) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: `treeItem_${item.path}`, className: styles.item },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, item.twin ? renderItemLink(item, navigateToDetails) : item.displayName),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, item.twin ? item.twin.twinId : ''),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, item.twin ? item.twin.description : '')));
};
const useHierarchyPageRender = (props) => {
    const { state, styles } = props;
    const customItemLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, _) => {
        return itemLayout(item, state.navigateToDetails, styles);
    }, [state, styles]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root, "data-testid": "hierarchy-page" /* TestIds.HierarchyPage */ },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.mergeClasses)(styles.header, styles.item) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.hierarchy.displayName)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.hierarchy.twinId)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.column }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.hierarchy.description))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.HierarchyTree, { customItemLayout: customItemLayout, treeItemClassName: styles.rowBorder, showMoreClassName: styles.rowBorder })));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.root.tsx":
/*!*********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.root.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyPage: () => (/* binding */ HierarchyPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _HierarchyPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HierarchyPage.render */ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.render.tsx");
/* harmony import */ var _HierarchyPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HierarchyPage.styles */ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.styles.ts");
/* harmony import */ var _HierarchyPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HierarchyPage.state */ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.state.ts");




const MODULE_NAME = 'HierarchyPage';
const HierarchyPage = () => {
    // get state
    const state = (0,_HierarchyPage_state__WEBPACK_IMPORTED_MODULE_3__.useHierarchyPageState)();
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_HierarchyPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_HierarchyPage_render__WEBPACK_IMPORTED_MODULE_1__.useHierarchyPageRender)({ state, styles });
};
HierarchyPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.state.ts":
/*!*********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.state.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useHierarchyPageState: () => (/* binding */ useHierarchyPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");



const useHierarchyPageState = () => {
    // contexts
    // state
    // hooks
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    const [explorerRouteProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_2__.useTwinsExplorerRouteProps)());
    const detailsUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(`${explorerRouteProps.twinsPath}/details`);
    // callbacks
    const navigateToDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId) => {
        await navigation?.navigate({ path: `${detailsUrl.current}/${twinId}` });
    }, [navigation]);
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            navigateToDetails,
        };
    }, [navigateToDetails]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.styles.ts":
/*!**********************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.styles.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClassNames: () => (/* binding */ useClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@griffel/react/__styles.esm.js");

const useClassNames = (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_0__.__styles)({
  root: {
    a9b677: "fly5x3f"
  },
  header: {
    Frg6f3: ["f1qqvntb", "f1o3aigz"],
    Be2twd7: "fses1vf",
    fsow6f: ["f1o700av", "fes3tcz"],
    Bhrd7zp: "fl43uef",
    jrapky: "febqm8h"
  },
  item: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    Brf1p80: "f1869bpl",
    Bh6795r: "fqerorx",
    a9b677: "fvdxvxa"
  },
  column: {
    Bh6795r: "fqerorx",
    Bnnss6s: "f1neuvcm",
    xawz: "f1pztt34"
  },
  rowBorder: {
    Bn0qgzm: "f1f09k3d",
    oivjwe: "fg706s2",
    g2u3we: "f68mrw8",
    h3c5rm: ["f7pw515", "fw35ms5"],
    B9xav0g: "frpde29",
    zhjwy3: ["fw35ms5", "f7pw515"]
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1qqvntb{margin-left:24px;}", ".f1o3aigz{margin-right:24px;}", ".fses1vf{font-size:14px;}", ".f1o700av{text-align:left;}", ".fes3tcz{text-align:right;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".febqm8h{margin-bottom:8px;}", ".f22iagw{display:flex;}", ".f1063pyq{flex-direction:row;}", ".f1869bpl{justify-content:space-between;}", ".fqerorx{flex-grow:1;}", ".fvdxvxa{width:calc(100vw - 160px);}", ".f1neuvcm{flex-shrink:1;}", ".f1pztt34{flex-basis:0;}", ".f1f09k3d{border-bottom-width:1px;}", ".fg706s2{border-bottom-style:solid;}", ".f68mrw8{border-top-color:var(--colorNeutralStroke2);}", ".f7pw515{border-right-color:var(--colorNeutralStroke2);}", ".fw35ms5{border-left-color:var(--colorNeutralStroke2);}", ".frpde29{border-bottom-color:var(--colorNeutralStroke2);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/HierarchyPage/index.ts":
/*!*******************************************************************!*\
  !*** ./src/apps/explorer/components/twins/HierarchyPage/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HierarchyPage: () => (/* reexport safe */ _HierarchyPage_root__WEBPACK_IMPORTED_MODULE_0__.HierarchyPage)
/* harmony export */ });
/* harmony import */ var _HierarchyPage_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyPage.root */ "./src/apps/explorer/components/twins/HierarchyPage/HierarchyPage.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinList/TwinList.render.tsx":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinList/TwinList.render.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinListTestIds: () => (/* binding */ TwinListTestIds),
/* harmony export */   useTwinListRender: () => (/* binding */ useTwinListRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/hooks/createColumn.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBar/MessageBar.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarBody/MessageBarBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-message-bar/lib/components/MessageBarTitle/MessageBarTitle.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-link/lib/components/Link/Link.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGrid/DataGrid.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeader/DataGridHeader.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridRow/DataGridRow.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridHeaderCell/DataGridHeaderCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridBody/DataGridBody.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-table/lib/components/DataGridCell/DataGridCell.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/Skeleton/Skeleton.js");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-skeleton/lib/components/SkeletonItem/SkeletonItem.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _do_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/components */ "./src/apps/components/index.ts");
/* harmony import */ var _TwinList_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinList.state */ "./src/apps/explorer/components/twins/TwinList/TwinList.state.ts");





var TwinListTestIds;
(function (TwinListTestIds) {
    TwinListTestIds["Row"] = "twins-row";
    TwinListTestIds["Skeleton"] = "twins-skeleton";
    TwinListTestIds["TwinNameHeader"] = "twin-name-header";
    TwinListTestIds["TwinIdHeader"] = "twin-id-header";
    TwinListTestIds["DescriptionHeader"] = "description-header";
    TwinListTestIds["createdTimeHeader"] = "created-time-header";
    TwinListTestIds["updatedTimeHeader"] = "updated-time-header";
    TwinListTestIds["modelIdHeader"] = "model-id-header";
    TwinListTestIds["stateHeader"] = "state-header";
    TwinListTestIds["ErrorBanner"] = "error-banner";
    TwinListTestIds["AttributeColumns"] = "attribute-columns";
})(TwinListTestIds || (TwinListTestIds = {}));
const useTwinListRender = ({ state, styles, }) => {
    const columns = [
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'displayName',
            renderCell: (twin) => {
                return twin.displayName;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.TwinNameHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.twin_name)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'twinId',
            renderCell: (twin) => {
                return twin.twinId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.TwinIdHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.twin_id)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'description',
            renderCell: (twin) => {
                return twin.description;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.DescriptionHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.description)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'createdTime',
            renderCell: (twin) => {
                return twin.createdTime?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.createdTimeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.createdTime)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'updatedTime',
            renderCell: (twin) => {
                return twin.updatedTime?.toUTCString();
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.updatedTimeHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.updatedTime)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'modelId',
            renderCell: (twin) => {
                return twin.modelId;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.modelIdHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.groupId)));
            },
        }),
        (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
            columnId: 'state',
            renderCell: (twin) => {
                return twin.state;
            },
            renderHeaderCell() {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.stateHeader }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.state)));
            },
        }),
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        state.errorMessage && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.MessageBar, { className: styles.errorBanner, intent: 'error', "data-testid": TwinListTestIds.ErrorBanner },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.MessageBarBody, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__.MessageBarTitle, null, state.errorMessage),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.Link, null, (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.common.learn_more))))),
        !state.isLoading && (!state.twins || state.twins.length === 0) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.EmptyContents, { header: (0,_do_localization__WEBPACK_IMPORTED_MODULE_1__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_1__.strings.explorer.twins.list.no_data_message) })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.DataGrid, { items: !state.isLoading ? state.twins : Array(_TwinList_state__WEBPACK_IMPORTED_MODULE_3__.PAGE_SIZE).fill({}), columns: state.attributeColumns
                    ? columns.concat(state.attributeColumns.map((attributeColumn) => (0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.createTableColumn)({
                        columnId: attributeColumn,
                        renderCell: (twin) => {
                            return (twin.attributes
                                ?.find((value, _index, _obj) => {
                                return value.name === attributeColumn;
                            })
                                ?.value.toString() || '');
                        },
                        renderHeaderCell() {
                            return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: styles.columnHeader, "data-testid": TwinListTestIds.AttributeColumns }, attributeColumn));
                        },
                    })))
                    : columns, getRowId: (twin) => twin.twinId },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_10__.DataGridHeader, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridRow, null, ({ renderHeaderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_12__.DataGridHeaderCell, null, renderHeaderCell())))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_13__.DataGridBody, null, ({ item, rowId }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_11__.DataGridRow, { "data-testid": TwinListTestIds.Row, key: rowId, onClick: state.isLoading
                        ? undefined
                        : () => {
                            state.navigateToDetails(item.twinId);
                        } }, ({ renderCell }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_14__.DataGridCell, null, state.isLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_15__.Skeleton, { "data-testid": TwinListTestIds.Skeleton, className: styles.skeleton },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_16__.SkeletonItem, null))) : (renderCell(item)))))))),
            !state.isLoading && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.pageFooter },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_do_components__WEBPACK_IMPORTED_MODULE_2__.PageFooter, { initialPage: 1, pageCount: state.pageCount, onPageChange: state.setCurrentPage })))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinList/TwinList.root.tsx":
/*!***********************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinList/TwinList.root.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinList: () => (/* binding */ TwinList)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _TwinList_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinList.render */ "./src/apps/explorer/components/twins/TwinList/TwinList.render.tsx");
/* harmony import */ var _TwinList_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinList.styles */ "./src/apps/explorer/components/twins/TwinList/TwinList.styles.ts");
/* harmony import */ var _TwinList_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinList.state */ "./src/apps/explorer/components/twins/TwinList/TwinList.state.ts");




const MODULE_NAME = 'TwinList';
const TwinList = (_props) => {
    // get state
    const state = (0,_TwinList_state__WEBPACK_IMPORTED_MODULE_3__.useTwinListState)(_props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_TwinList_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_TwinList_render__WEBPACK_IMPORTED_MODULE_1__.useTwinListRender)({ state, styles });
};
TwinList.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinList/TwinList.state.ts":
/*!***********************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinList/TwinList.state.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGE_SIZE: () => (/* binding */ PAGE_SIZE),
/* harmony export */   useTwinListState: () => (/* binding */ useTwinListState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core/hooks */ "./src/apps/core/hooks/index.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts */ "./src/apps/explorer/contexts/index.ts");
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");





const DEBUG_LOGGING = false;
const MODULE_NAME = 'TwinList.state';
const PAGE_SIZE = 10;
const useTwinListState = (_props) => {
    // contexts
    const { twins, attributeColumns } = (0,_contexts__WEBPACK_IMPORTED_MODULE_3__.useExplorerContext)();
    // state
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
    // hooks
    const navigation = (0,_do_core_hooks__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
    const [explorerRouteProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_4__.useTwinsExplorerRouteProps)());
    const detailsUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return `${explorerRouteProps.twinsPath}/details`;
    }, [explorerRouteProps.twinsPath]);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.useDebugLogging)(DEBUG_LOGGING);
    // callbacks
    const navigateToDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (twinId) => {
        await navigation?.navigate({ path: `${detailsUrl}/${twinId}` });
    }, [navigation, detailsUrl]);
    // side effects
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (twins.state === 'success') {
            setPageCount(Math.ceil(twins.data.length / PAGE_SIZE));
        }
    }, [twins]);
    const shownTwins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (twins.state === 'success') {
            return twins.data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
        }
        return [];
    }, [twins, currentPage]);
    const errorMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        if (twins.state === 'error') {
            return `${twins.errorCode}: ${twins.errorMessage}`;
        }
        return undefined;
    }, [twins]);
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            twins: shownTwins,
            currentPage,
            setCurrentPage,
            pageCount,
            navigateToDetails,
            isLoading: twins.state === 'uncalled' || twins.state === 'pending',
            errorMessage,
            attributeColumns,
        };
    }, [
        shownTwins,
        currentPage,
        pageCount,
        navigateToDetails,
        twins.state,
        errorMessage,
        attributeColumns,
    ]);
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.getLogger)().debug('Render. {state}', MODULE_NAME, {
            state,
        });
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinList/TwinList.styles.ts":
/*!************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinList/TwinList.styles.ts ***!
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
  skeleton: {
    a9b677: "fly5x3f"
  },
  errorBanner: {
    B6of3ja: "fww94b8",
    jrapky: "f8l5zjj"
  }
}, {
  d: [".fly5x3f{width:100%;}", ".f1l02sjl{height:100%;}", ".f13qh94s{display:grid;}", ".fl43uef{font-weight:var(--fontWeightSemibold);}", ".fuq56rw{padding-top:24px;}", ".f1locze1{align-self:end;}", ".fn9xixx{justify-self:center;}", ".fww94b8{margin-top:var(--spacingVerticalXS);}", ".f8l5zjj{margin-bottom:var(--spacingVerticalXS);}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinList/index.ts":
/*!**************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinList/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinList: () => (/* reexport safe */ _TwinList_root__WEBPACK_IMPORTED_MODULE_0__.TwinList)
/* harmony export */ });
/* harmony import */ var _TwinList_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinList.root */ "./src/apps/explorer/components/twins/TwinList/TwinList.root.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.render.tsx":
/*!***************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinsPage/TwinsPage.render.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestIds: () => (/* binding */ TestIds),
/* harmony export */   useTwinsPageRender: () => (/* binding */ useTwinsPageRender)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _GraphPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GraphPage */ "./src/apps/explorer/components/twins/GraphPage/index.ts");
/* harmony import */ var _HierarchyPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HierarchyPage */ "./src/apps/explorer/components/twins/HierarchyPage/index.ts");
/* harmony import */ var _TwinList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TwinList */ "./src/apps/explorer/components/twins/TwinList/index.ts");
/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/react-components */ "./node_modules/@fluentui/react-button/lib/components/Button/Button.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/utils/bundleIcon.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-13.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _do_localization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @do/localization */ "./src/localization/index.ts");
/* harmony import */ var _GraphPage_GraphPage_mock_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GraphPage/GraphPage.mock.json */ "./src/apps/explorer/components/twins/GraphPage/GraphPage.mock.json");









var TestIds;
(function (TestIds) {
    TestIds["HierarchyTab"] = "explorer-twin-hierarchy-tab";
    TestIds["GraphTab"] = "explorer-twin-graph-tab";
    TestIds["ListTab"] = "explorer-twin-list-tab";
})(TestIds || (TestIds = {}));
const useTwinsPageRender = (props) => {
    const { state, styles } = props;
    const { routeProps, setPageName } = state;
    const { twinsPath, pageName } = routeProps;
    const HierarchyIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.TextBulletListTree24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_7__.TextBulletListTree24Regular);
    // TODO: Temporarily remove graph tab until it's ready
    // const GraphIcons = bundleIcon(Branch24Filled, Branch24Regular);
    const ListIcons = (0,_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__["default"])(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.AppsList24Filled, _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.AppsList24Regular);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.root },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.nav },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.Button, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HierarchyIcons, null), disabled: pageName == 'hierarchy', onClick: () => setPageName('hierarchy'), "data-testid": TestIds.HierarchyTab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_4__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_4__.strings.explorer.twins.nav.hierarchy)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.Button, { icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ListIcons, null), disabled: pageName == 'list', onClick: () => setPageName('list'), "data-testid": TestIds.ListTab }, (0,_do_localization__WEBPACK_IMPORTED_MODULE_4__.t)(_do_localization__WEBPACK_IMPORTED_MODULE_4__.strings.explorer.twins.nav.list))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: styles.content },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Switch, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, { path: `${twinsPath}/graph` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GraphPage__WEBPACK_IMPORTED_MODULE_1__.GraphPage, { data: _GraphPage_GraphPage_mock_json__WEBPACK_IMPORTED_MODULE_5__ }),
                    ' '),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, { path: `${twinsPath}/list` },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TwinList__WEBPACK_IMPORTED_MODULE_3__.TwinList, null)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, { path: '*' },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HierarchyPage__WEBPACK_IMPORTED_MODULE_2__.HierarchyPage, null))))));
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.state.ts":
/*!*************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinsPage/TwinsPage.state.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTwinsPageState: () => (/* binding */ useTwinsPageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/routeProps/useTwinsExplorerRouteProps */ "./src/apps/explorer/hooks/routeProps/useTwinsExplorerRouteProps.ts");
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");



const useTwinsPageState = (_props) => {
    // contexts
    // state
    // hooks
    const routeProps = (0,_hooks_routeProps_useTwinsExplorerRouteProps__WEBPACK_IMPORTED_MODULE_1__.useTwinsExplorerRouteProps)();
    const navigation = (0,_do_core__WEBPACK_IMPORTED_MODULE_2__.useNavigation)();
    // callbacks
    // side effects
    // result
    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const results = {
            routeProps,
            setPageName: (pageName) => {
                // we almost always have a history object and Jest hates mocking it (numerous variations tried)
                navigation?.navigate({
                    path: `${routeProps.explorerPath}/${routeProps.tabName}/${pageName}`,
                });
            },
        };
        return results;
    }, [navigation, routeProps]);
    return state;
};


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.styles.ts":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinsPage/TwinsPage.styles.ts ***!
  \**************************************************************************/
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
    Belr9w4: "f1ma2n7n"
  },
  nav: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1063pyq",
    i8kkvl: "f1q8lukm"
  },
  content: {
    mc9l5x: "f22iagw",
    Beiy3e4: "f1vx9l62"
  }
}, {
  d: [".f22iagw{display:flex;}", ".f1vx9l62{flex-direction:column;}", ".f1ma2n7n{row-gap:4px;}", ".f1063pyq{flex-direction:row;}", ".f1q8lukm{column-gap:4px;}"]
});

/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.tsx":
/*!********************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinsPage/TwinsPage.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinsPage: () => (/* binding */ TwinsPage)
/* harmony export */ });
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _TwinsPage_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TwinsPage.render */ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.render.tsx");
/* harmony import */ var _TwinsPage_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinsPage.styles */ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.styles.ts");
/* harmony import */ var _TwinsPage_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinsPage.state */ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.state.ts");




const MODULE_NAME = 'TwinsPage';
const TwinsPage = (_props) => {
    // get state
    const state = (0,_TwinsPage_state__WEBPACK_IMPORTED_MODULE_3__.useTwinsPageState)(_props);
    const debugLogging = (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.useDebugLogging)();
    // get styles
    const styles = (0,_TwinsPage_styles__WEBPACK_IMPORTED_MODULE_2__.useClassNames)();
    debugLogging &&
        (0,_do_core__WEBPACK_IMPORTED_MODULE_0__.getLogger)().debug('Render. {state, styles}', MODULE_NAME, {
            state,
            styles,
        });
    // render the component
    return (0,_TwinsPage_render__WEBPACK_IMPORTED_MODULE_1__.useTwinsPageRender)({ state, styles });
};
TwinsPage.displayName = MODULE_NAME;


/***/ }),

/***/ "./src/apps/explorer/components/twins/TwinsPage/index.ts":
/*!***************************************************************!*\
  !*** ./src/apps/explorer/components/twins/TwinsPage/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwinsPage: () => (/* reexport safe */ _TwinsPage__WEBPACK_IMPORTED_MODULE_0__.TwinsPage)
/* harmony export */ });
/* harmony import */ var _TwinsPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwinsPage */ "./src/apps/explorer/components/twins/TwinsPage/TwinsPage.tsx");



/***/ }),

/***/ "./src/apps/explorer/components/twins/index.ts":
/*!*****************************************************!*\
  !*** ./src/apps/explorer/components/twins/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphPage: () => (/* reexport safe */ _GraphPage__WEBPACK_IMPORTED_MODULE_1__.GraphPage),
/* harmony export */   HierarchyPage: () => (/* reexport safe */ _HierarchyPage__WEBPACK_IMPORTED_MODULE_0__.HierarchyPage),
/* harmony export */   TwinList: () => (/* reexport safe */ _TwinList__WEBPACK_IMPORTED_MODULE_2__.TwinList),
/* harmony export */   TwinsPage: () => (/* reexport safe */ _TwinsPage__WEBPACK_IMPORTED_MODULE_3__.TwinsPage)
/* harmony export */ });
/* harmony import */ var _HierarchyPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HierarchyPage */ "./src/apps/explorer/components/twins/HierarchyPage/index.ts");
/* harmony import */ var _GraphPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphPage */ "./src/apps/explorer/components/twins/GraphPage/index.ts");
/* harmony import */ var _TwinList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TwinList */ "./src/apps/explorer/components/twins/TwinList/index.ts");
/* harmony import */ var _TwinsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TwinsPage */ "./src/apps/explorer/components/twins/TwinsPage/index.ts");






/***/ }),

/***/ "./src/apps/explorer/contexts/ExplorerContext.tsx":
/*!********************************************************!*\
  !*** ./src/apps/explorer/contexts/ExplorerContext.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerContext: () => (/* binding */ ExplorerContext),
/* harmony export */   ExplorerContextProvider: () => (/* binding */ ExplorerContextProvider),
/* harmony export */   useExplorerContext: () => (/* binding */ useExplorerContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _do_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @do/core */ "./src/apps/core/index.ts");
/* harmony import */ var _ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExplorerContext.utils */ "./src/apps/explorer/contexts/ExplorerContext.utils.ts");
/* harmony import */ var _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/QueryCertifiedEvents */ "./src/apps/explorer/models/QueryCertifiedEvents.ts");
/* harmony import */ var _do_core_hooks_useModelInformationClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @do/core/hooks/useModelInformationClient */ "./src/apps/core/hooks/useModelInformationClient.ts");
/* harmony import */ var _do_core_hooks_useModelDetailsClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @do/core/hooks/useModelDetailsClient */ "./src/apps/core/hooks/useModelDetailsClient.ts");
/**
 * This context is to store the shared state for the various asset explorer sub pages (twins, time series, events)
 */






const ExplorerContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
const useExplorerContext = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ExplorerContext);
    if (!context) {
        throw new Error('useExplorerContext must be used within an ExplorerContextProvider');
    }
    return context;
};
const ExplorerContextProvider = react__WEBPACK_IMPORTED_MODULE_0___default().memo((props) => {
    const { children } = props;
    const twinClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTwinClient)();
    const eventClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useEventClient)();
    const timeSeriesClient = (0,_do_core__WEBPACK_IMPORTED_MODULE_1__.useTimeSeriesClient)();
    const modelInformationClient = (0,_do_core_hooks_useModelInformationClient__WEBPACK_IMPORTED_MODULE_4__.useModelInformationClient)();
    const modelDetailClient = (0,_do_core_hooks_useModelDetailsClient__WEBPACK_IMPORTED_MODULE_5__.useModelDetailsClient)();
    // state - query parameters
    const [searchString, setSearchString] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');
    const [tabbedQuery, setTabbedQuery] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        twins: {
            filterRules: [
                {
                    type: 'string',
                    property: '',
                    operator: '',
                    value: '',
                    valueType: 'String',
                },
            ],
            sortRules: [
                {
                    property: '',
                    order: '',
                },
            ],
            models: [],
        },
        events: {
            filterRules: [
                {
                    type: 'string',
                    property: '',
                    operator: '',
                    value: '',
                    valueType: 'String',
                },
            ],
            sortRules: [
                {
                    property: '',
                    order: '',
                },
            ],
        },
        timeSeries: {
            filterRules: [
                {
                    type: 'string',
                    property: '',
                    operator: '',
                    value: '',
                    valueType: 'String',
                },
            ],
            sortRules: [
                {
                    property: '',
                    order: '',
                },
            ],
        },
    });
    // state - results
    const [twins, setTwins] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        state: 'uncalled',
    });
    const [events, setEvents] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        state: 'uncalled',
    });
    const [timeSeries, setTimeSeries] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        state: 'uncalled',
    });
    const [attributeSuggestions, setAttributeSuggestions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({ state: 'uncalled' });
    const [timeSeriesDataPointSuggestions, setTimeSeriesDataPointSuggestions] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
        state: 'uncalled',
    });
    const [attributeColumns, setAttributeColumns] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
    const [models, setModels] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
    const [selectedModel, setSelectedModel] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
    // Callbacks
    const setQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((tab, filterRules, sortRules, models) => {
        setTabbedQuery((prev) => {
            return {
                ...prev,
                [tab]: {
                    filterRules,
                    sortRules,
                    models,
                },
            };
        });
        // Updates the attribute columns based on the filter rules
        const attributeColumns = [];
        for (const filterRule of filterRules) {
            // Validates a filter rule is an attribute and that it doesn't already exist in the list
            if (filterRule.source === 'Attribute' &&
                attributeColumns.find((col) => col === filterRule.property) ===
                    undefined) {
                attributeColumns.push(filterRule.property);
            }
        }
        setAttributeColumns(attributeColumns);
    }, []);
    const queryTwins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj, logConfig) => {
        setTwins({ state: 'pending' });
        let results = await twinClient?.queryTwins(queryObj, ['attributes'], // TODO: modify this when we integrate with attributes/tsdp
        logConfig);
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setTwins(results);
    }, [twinClient]);
    const queryAttributeSuggestions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        setAttributeSuggestions({ state: 'pending' });
        let results = await twinClient?.queryAttributeSuggestions();
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setAttributeSuggestions(results);
    }, [twinClient]);
    const queryTimeSeriesDataPointSuggestions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        setTimeSeriesDataPointSuggestions({ state: 'pending' });
        let results = await twinClient?.queryTimeSeriesDataPointSuggestions();
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setTimeSeriesDataPointSuggestions(results);
    }, [twinClient]);
    const queryModels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        setModels({ state: 'pending' });
        let results = await modelInformationClient?.getModels({
            featureName: _do_core__WEBPACK_IMPORTED_MODULE_1__.ModelingFeatures.ViewModelsListPage,
            activityName: _do_core__WEBPACK_IMPORTED_MODULE_1__.ViewModelsListPageActivities.ModelsListFetch,
        });
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setModels(results);
    }, [modelInformationClient]);
    const queryEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj, logConfig) => {
        setEvents({ state: 'pending' });
        let results = await eventClient?.queryEvents(queryObj, logConfig);
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setEvents(results);
    }, [eventClient]);
    const queryTimeSeries = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj, logConfig) => {
        setTimeSeries({ state: 'pending' });
        let results = await timeSeriesClient?.queryTimeSeries(queryObj, logConfig);
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setTimeSeries(results);
    }, [timeSeriesClient]);
    const getAndSetModel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (modelId) => {
        setSelectedModel({ state: 'pending' });
        let results = (await modelDetailClient?.getModelDetails(modelId, {
            featureName: _do_core__WEBPACK_IMPORTED_MODULE_1__.ModelingFeatures.ViewModelDetailsPanel,
            activityName: _do_core__WEBPACK_IMPORTED_MODULE_1__.ViewModelDetailsPanelActivities.ModelDetailsUpdated,
        }));
        if (!results) {
            results = {
                state: 'error',
                errorCode: 'Unknown error',
                errorMessage: 'Unknown error',
            };
        }
        setSelectedModel(results);
    }, [modelDetailClient]);
    const keywordQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (searchString) => {
        setSearchString(searchString ?? '');
        const twinQueryObj = (0,_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_2__.getTwinKeywordQuery)(searchString);
        queryTwins(twinQueryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.KeywordSearch,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.KeywordSearchActivity.QueryTwinsCalled,
        });
        const eventQueryObj = (0,_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_2__.getEventKeywordQuery)(searchString);
        queryEvents(eventQueryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.KeywordSearch,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.KeywordSearchActivity.QueryEventsCalled,
        });
        const timeSeriesQueryObj = (0,_ExplorerContext_utils__WEBPACK_IMPORTED_MODULE_2__.getTimeSeriesDataPointKeywordQuery)(searchString);
        queryTimeSeries(timeSeriesQueryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.KeywordSearch,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.KeywordSearchActivity.QueryTimeSeriesCalled,
        });
    }, [queryTwins, queryEvents, queryTimeSeries]);
    const twinsAdvancedQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj) => {
        setSearchString('');
        queryTwins(queryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.AdvancedQuery,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.AdvancedQueryActivity.QueryTwinsCalled,
        });
    }, [queryTwins]);
    const timeSeriesAdvancedQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj) => {
        setSearchString('');
        queryTimeSeries(queryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.AdvancedQuery,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.AdvancedQueryActivity.QueryTimeSeriesCalled,
        });
    }, [queryTimeSeries]);
    const eventsAdvancedQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (queryObj) => {
        setSearchString('');
        queryEvents(queryObj, {
            featureName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.QueryFeature.AdvancedQuery,
            activityName: _models_QueryCertifiedEvents__WEBPACK_IMPORTED_MODULE_3__.AdvancedQueryActivity.QueryEventsCalled,
        });
    }, [queryEvents]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        queryAttributeSuggestions();
        queryTimeSeriesDataPointSuggestions();
        queryModels();
    }, [
        queryAttributeSuggestions,
        queryTimeSeriesDataPointSuggestions,
        queryModels,
    ]);
    const providerProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return {
            // Query parameters
            searchString,
            setSearchString,
            tabbedQuery,
            setQuery,
            // Results
            twins,
            setTwins,
            twinCount: searchString && twins.state === 'success'
                ? twins.data.length
                : undefined,
            events,
            setEvents,
            eventCount: searchString && events.state === 'success'
                ? events.data.length
                : undefined,
            timeSeries,
            setTimeSeries,
            timeSeriesCount: searchString && timeSeries.state === 'success'
                ? timeSeries.data.length
                : undefined,
            attributeSuggestions,
            queryAttributeSuggestions,
            timeSeriesDataPointSuggestions,
            keywordQuery,
            twinsAdvancedQuery,
            timeSeriesAdvancedQuery,
            eventsAdvancedQuery,
            attributeColumns,
            models,
            setModels,
            selectedModel,
            getAndSetModel,
        };
    }, [
        searchString,
        tabbedQuery,
        setQuery,
        twins,
        events,
        timeSeries,
        attributeSuggestions,
        queryAttributeSuggestions,
        timeSeriesDataPointSuggestions,
        keywordQuery,
        twinsAdvancedQuery,
        timeSeriesAdvancedQuery,
        eventsAdvancedQuery,
        attributeColumns,
        models,
        setModels,
        selectedModel,
        getAndSetModel,
    ]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExplorerContext.Provider, { value: providerProps }, children));
});


/***/ }),

/***/ "./src/apps/explorer/contexts/ExplorerContext.utils.ts":
/*!*************************************************************!*\
  !*** ./src/apps/explorer/contexts/ExplorerContext.utils.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvancedSearchQuery: () => (/* binding */ getAdvancedSearchQuery),
/* harmony export */   getEventKeywordQuery: () => (/* binding */ getEventKeywordQuery),
/* harmony export */   getTimeSeriesDataPointKeywordQuery: () => (/* binding */ getTimeSeriesDataPointKeywordQuery),
/* harmony export */   getTwinKeywordQuery: () => (/* binding */ getTwinKeywordQuery),
/* harmony export */   isFilterRuleEmpty: () => (/* binding */ isFilterRuleEmpty),
/* harmony export */   isSortRuleEmpty: () => (/* binding */ isSortRuleEmpty)
/* harmony export */ });
// Hardcoded queries for keyword search since these specifically only search about two fields per entity
function getTwinKeywordQuery(searchString) {
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
                        valueType: 'String',
                        value: keyword,
                    },
                },
                operator: 'or',
                right: {
                    type: 'logical',
                    left: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Twin',
                            value: 'DisplayName',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                    operator: 'or',
                    right: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Twin',
                            value: 'Description',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                },
            },
        },
    };
    return queryObj;
}
function getEventKeywordQuery(searchString) {
    const keyword = `%${searchString}%`;
    const queryObj = {
        query: {
            root: {
                type: 'logical',
                left: {
                    type: 'logical',
                    left: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Event',
                            value: 'TwinId',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                    operator: 'or',
                    right: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Event',
                            value: 'EventId',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                },
                operator: 'or',
                right: {
                    type: 'logical',
                    left: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Event',
                            value: 'EventType',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                    operator: 'or',
                    right: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'Event',
                            value: 'Message',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                },
            },
        },
    };
    return queryObj;
}
function getTimeSeriesDataPointKeywordQuery(searchString) {
    const keyword = `%${searchString}%`;
    const queryObj = {
        query: {
            root: {
                type: 'logical',
                left: {
                    type: 'logical',
                    left: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'DataPoint',
                            value: 'TimeSeriesDataPointId',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                    operator: 'or',
                    right: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'DataPoint',
                            value: 'DisplayName',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                },
                operator: 'or',
                right: {
                    type: 'logical',
                    left: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'DataPoint',
                            value: 'Description',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                    operator: 'or',
                    right: {
                        type: 'comparison',
                        left: {
                            type: 'variable',
                            source: 'DataPoint',
                            value: 'TwinId',
                        },
                        operator: 'contains',
                        right: {
                            type: 'constant',
                            valueType: 'String',
                            value: keyword,
                        },
                    },
                },
            },
        },
    };
    return queryObj;
}
// Generated queries based on advanced search filters
function getAdvancedSearchQuery(source, filterRules, sortRules, models) {
    let iqrSource;
    switch (source) {
        case 'twins':
            iqrSource = 'Twin';
            break;
        case 'timeSeries':
            iqrSource = 'DataPoint';
            break;
        case 'events':
            iqrSource = 'Event';
            break;
    }
    const queryObj = { query: {} };
    // For each filter rule, create the appropriate query object
    filterRules?.forEach((filterRule) => {
        if (!isFilterRuleEmpty(filterRule)) {
            addFilterObject(filterRule, iqrSource, queryObj.query);
        }
    });
    if (iqrSource == 'Twin' && models && models.length) {
        addModelObject(queryObj.query, models);
    }
    // For each sort rule, create the appropriate query object
    if (sortRules && sortRules.length > 0) {
        // Note: Only supporting one sort rule for now
        if (!isSortRuleEmpty(sortRules[0])) {
            addSortObject(sortRules[0], iqrSource, queryObj.query);
        }
    }
    return queryObj;
}
function addFilterObject(filterRule, iqrSource, queryObj) {
    let value = filterRule.value;
    // Only add the % for contains operator
    if (filterRule.operator === 'contains') {
        value = `%${value}%`;
    }
    if (filterRule.type === 'date') {
        value = new Date(value + 'Z'); // Add Z so it gets treated as UTC time
    }
    else if (filterRule.type === 'boolean') {
        value = value === 'true';
    }
    else if (filterRule.type === 'number' || filterRule.type === 'timeSeries') {
        value = Number(value);
    }
    const filterObj = {
        type: 'comparison',
        left: {
            type: 'variable',
            // If the filter rule has a source, use that, else use the sourceType
            // which is based on the tab
            source: filterRule.source ? filterRule.source : iqrSource,
            value: filterRule.property,
        },
        operator: filterRule.operator,
        right: {
            type: 'constant',
            value: value,
            valueType: filterRule.valueType,
        },
    };
    if (filterRule.source === 'TimeSeries') {
        if (filterRule.timeSeriesStartTimeUTC && filterRule.timeSeriesEndTimeUTC) {
            filterObj.left.startTimeUTC = new Date(filterRule.timeSeriesStartTimeUTC + 'Z');
            filterObj.left.endTimeUTC = new Date(filterRule.timeSeriesEndTimeUTC + 'Z');
            filterObj.left.aggregate = 'Any';
        }
    }
    // If there is just one filter, it's just a comparison filter object,
    // else when there are multiple filters, we need to add a logical object
    if (!queryObj.root || Object.keys(queryObj.root).length === 0) {
        queryObj.root = filterObj;
    }
    else {
        queryObj.root = {
            type: 'logical',
            left: queryObj.root,
            operator: filterRule.logicalOperator,
            right: filterObj,
        };
    }
}
function addSortObject(sortRule, iqrSource, queryObj) {
    queryObj.sortRules = [
        {
            source: iqrSource,
            column: sortRule.property,
            order: sortRule.order,
        },
    ];
}
function addModelObject(queryObj, models) {
    queryObj.models = models;
}
function isFilterRuleEmpty(filterRule) {
    return !filterRule.property && !filterRule.operator && !filterRule.value;
}
function isSortRuleEmpty(sortRule) {
    return !sortRule.property && !sortRule.order;
}


/***/ }),

/***/ "./src/apps/explorer/contexts/index.ts":
/*!*********************************************!*\
  !*** ./src/apps/explorer/contexts/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerContext: () => (/* reexport safe */ _ExplorerContext__WEBPACK_IMPORTED_MODULE_0__.ExplorerContext),
/* harmony export */   ExplorerContextProvider: () => (/* reexport safe */ _ExplorerContext__WEBPACK_IMPORTED_MODULE_0__.ExplorerContextProvider),
/* harmony export */   useExplorerContext: () => (/* reexport safe */ _ExplorerContext__WEBPACK_IMPORTED_MODULE_0__.useExplorerContext)
/* harmony export */ });
/* harmony import */ var _ExplorerContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExplorerContext */ "./src/apps/explorer/contexts/ExplorerContext.tsx");



/***/ }),

/***/ "./src/apps/explorer/index.ts":
/*!************************************!*\
  !*** ./src/apps/explorer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExplorerPage: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ExplorerPage)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/apps/explorer/components/index.ts");



/***/ }),

/***/ "./src/apps/explorer/models/QueryCertifiedEvents.ts":
/*!**********************************************************!*\
  !*** ./src/apps/explorer/models/QueryCertifiedEvents.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedQueryActivity: () => (/* binding */ AdvancedQueryActivity),
/* harmony export */   ExplorerListViewActivity: () => (/* binding */ ExplorerListViewActivity),
/* harmony export */   KeywordSearchActivity: () => (/* binding */ KeywordSearchActivity),
/* harmony export */   QueryFeature: () => (/* binding */ QueryFeature),
/* harmony export */   QueryPanelInteractionsActivity: () => (/* binding */ QueryPanelInteractionsActivity)
/* harmony export */ });
/**
 * See README in the telemetry directory for more on how to instrument certified events
 */
var QueryFeature;
(function (QueryFeature) {
    QueryFeature["AdvancedQuery"] = "DOExploreAdvancedQuery";
    QueryFeature["KeywordSearch"] = "DOExploreKeywordSearch";
    QueryFeature["QueryPanelInteractions"] = "DOQueryPanelInteractions";
    QueryFeature["ExplorerListView"] = "DOExplorerListView";
})(QueryFeature || (QueryFeature = {}));
var AdvancedQueryActivity;
(function (AdvancedQueryActivity) {
    AdvancedQueryActivity["ApplyQueryClicked"] = "ApplyQueryClicked";
    AdvancedQueryActivity["QueryTwinsCalled"] = "QueryTwinsCalled";
    AdvancedQueryActivity["QueryTimeSeriesCalled"] = "QueryTimeSeriesCalled";
    AdvancedQueryActivity["QueryEventsCalled"] = "QueryEventsCalled";
    AdvancedQueryActivity["ResultsRendered"] = "ResultsRendered";
})(AdvancedQueryActivity || (AdvancedQueryActivity = {}));
var KeywordSearchActivity;
(function (KeywordSearchActivity) {
    KeywordSearchActivity["UserFinishedTyping"] = "UserFinishedTyping";
    KeywordSearchActivity["QueryTwinsCalled"] = "QueryTwinsCalled";
    KeywordSearchActivity["QueryTimeSeriesCalled"] = "QueryTimeSeriesCalled";
    KeywordSearchActivity["QueryEventsCalled"] = "QueryEventsCalled";
    KeywordSearchActivity["ResultsRendered"] = "ResultsRendered";
})(KeywordSearchActivity || (KeywordSearchActivity = {}));
var QueryPanelInteractionsActivity;
(function (QueryPanelInteractionsActivity) {
    QueryPanelInteractionsActivity["UserOpenedQueryPanel"] = "UserOpenedQueryPanel";
    QueryPanelInteractionsActivity["GetModelsCalled"] = "GetModelsCalled";
    QueryPanelInteractionsActivity["GetPropertiesCalled"] = "GetPropertiesCalled";
    // How granular do we get with CE tracking of filter/sort interactions?
    QueryPanelInteractionsActivity["UserClosedQueryPanel"] = "UserClosedQueryPanel";
})(QueryPanelInteractionsActivity || (QueryPanelInteractionsActivity = {}));
// TODO: Fill this in
var ExplorerListViewActivity;
(function (ExplorerListViewActivity) {
})(ExplorerListViewActivity || (ExplorerListViewActivity = {}));


/***/ }),

/***/ "./src/apps/explorer/components/twins/GraphPage/GraphPage.mock.json":
/*!**************************************************************************!*\
  !*** ./src/apps/explorer/components/twins/GraphPage/GraphPage.mock.json ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"nodes":[{"id":"Contoso Bakeries","label":"Contoso Bakeries (10)","color":"blue"},{"id":"Bakery 1.1","label":"Bakery 1.1","color":"purple"},{"id":"Bakery 1.2","label":"Bakery 1.2 (3)","color":"purple"},{"id":"Bakery 1.3","label":"Bakery 1.3","color":"purple"},{"id":"Bakery 1.4","label":"Bakery 1.4","color":"purple"},{"id":"Bakery 1.5","label":"Bakery 1.5","color":"purple"},{"id":"Bakery 1.6","label":"Bakery 1.6","color":"purple"},{"id":"Bakery 1.7","label":"Bakery 1.7","color":"purple"},{"id":"Bakery 1.8","label":"Bakery 1.8","color":"purple"},{"id":"Bakery 1.9","label":"Bakery 1.9","color":"purple"},{"id":"Bakery 1.10","label":"Bakery 1.10 (5)","color":"purple"},{"id":"Bread line 1.1","label":"Bread line 1.1","color":"orange"},{"id":"Bread line 1.2","label":"Bread line 1.2","color":"orange"},{"id":"Bread line 1.3","label":"Bread line 1.3","color":"orange"},{"id":"Bread line 1.4","label":"Bread line 1.4 (2)","color":"orange"},{"id":"Bread line 1.5","label":"Bread line 1.5","color":"orange"},{"id":"Oven 1.1","label":"Oven 1.1","color":"green"},{"id":"Oven 1.2","label":"Oven 1.2","color":"green"},{"id":"Oven 1.3","label":"Oven 1.3","color":"green"},{"id":"Mixer 1.1","label":"Mixer 1.1","color":"red"},{"id":"Mixer 1.2","label":"Mixer 1.2","color":"red"}],"edges":[{"id":"Contoso Bakeries-Bakery 1.1","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.1"},{"id":"Contoso Bakeries-Bakery 1.2","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.2"},{"id":"Contoso Bakeries-Bakery 1.3","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.3"},{"id":"Contoso Bakeries-Bakery 1.4","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.4"},{"id":"Contoso Bakeries-Bakery 1.5","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.5"},{"id":"Contoso Bakeries-Bakery 1.6","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.6"},{"id":"Contoso Bakeries-Bakery 1.7","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.7"},{"id":"Contoso Bakeries-Bakery 1.8","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.8"},{"id":"Contoso Bakeries-Bakery 1.9","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.9"},{"id":"Contoso Bakeries-Bakery 1.10","label":"owns","source":"Contoso Bakeries","target":"Bakery 1.10"},{"id":"Bakery 1.10-Bread line 1.1","label":"operates","source":"Bakery 1.10","target":"Bread line 1.1"},{"id":"Bakery 1.10-Bread line 1.2","label":"operates","source":"Bakery 1.10","target":"Bread line 1.2"},{"id":"Bakery 1.10-Bread line 1.3","label":"operates","source":"Bakery 1.10","target":"Bread line 1.3"},{"id":"Bakery 1.10-Bread line 1.4","label":"operates","source":"Bakery 1.10","target":"Bread line 1.4"},{"id":"Bakery 1.10-Bread line 1.5","label":"operates","source":"Bakery 1.10","target":"Bread line 1.5"},{"id":"Bakery 1.2-Oven 1.1","label":"maintains","source":"Bakery 1.2","target":"Oven 1.1"},{"id":"Bakery 1.2-Oven 1.2","label":"maintains","source":"Bakery 1.2","target":"Oven 1.2"},{"id":"Bakery 1.2-Mixer 1.1","label":"maintains","source":"Bakery 1.2","target":"Mixer 1.1"},{"id":"Bread line 1.4-Oven 1.3","label":"performs","source":"Bread line 1.4","target":"Oven 1.3"},{"id":"Bread line 1.4-Mixer 1.2","label":"performs","source":"Bread line 1.4","target":"Mixer 1.2"}]}');

/***/ })

}]);
//# sourceMappingURL=src_apps_explorer_index_ts.bundle.js.map