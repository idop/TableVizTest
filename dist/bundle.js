/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ido on 07/07/2017.
 */
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Layout_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(Layout_1.Layout, null), document.getElementById("main"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ido on 07/07/2017.
 */
var React = __webpack_require__(0);
var Header_1 = __webpack_require__(4);
var Dashboard_1 = __webpack_require__(5);
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(Header_1.Header, { title: 'Test Dashboard' }),
            React.createElement(Dashboard_1.Dashboard, null));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ido on 07/07/2017.
 */
var React = __webpack_require__(0);
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: "dashboard-header" },
                React.createElement("div", { className: "fa fa-dashboard" }),
                React.createElement("span", { className: "title" }, this.props.title)));
    };
    return Header;
}(React.Component));
exports.Header = Header;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChartHeader_1 = __webpack_require__(6);
var ChartTable_1 = __webpack_require__(7);
var Utils_1 = __webpack_require__(10);
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        var data = [['Aternity', '44,589', '100', '50,000'], ['Microsoft Outlook', '23,675', '75', '43,454'], ['Sap', '1,234', '50', '5,436']];
        var totalActivityColumn = new Utils_1.TableColumn('Total Activities', Utils_1.TableColumnType.BAR);
        totalActivityColumn.domain = new Utils_1.Domain(5436 - 100, 50000 + 100);
        var columns = [new Utils_1.TableColumn('Application', Utils_1.TableColumnType.TEXT),
            new Utils_1.TableColumn('Number Of Users', Utils_1.TableColumnType.TEXT),
            new Utils_1.TableColumn('Score', Utils_1.TableColumnType.CIRCLE),
            totalActivityColumn];
        return React.createElement("div", null,
            React.createElement("div", { className: "dashboard-main-container" },
                React.createElement("div", { className: "dashboard" },
                    React.createElement(ChartHeader_1.ChartHeader, { title: "Applications" }),
                    React.createElement(ChartTable_1.ChartTable, { data: new Utils_1.TableChartData(columns, data) }))));
    };
    return Dashboard;
}(React.Component));
exports.Dashboard = Dashboard;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ido on 07/07/2017.
 */
var React = __webpack_require__(0);
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var ChartHeader = (function (_super) {
    __extends(ChartHeader, _super);
    function ChartHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartHeader.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: "chart-header" },
                React.createElement("span", { className: "title" }, this.props.title)));
    };
    return ChartHeader;
}(React.Component));
exports.ChartHeader = ChartHeader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChartTableHeader_1 = __webpack_require__(8);
var ChartTableRows_1 = __webpack_require__(11);
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var ChartTable = (function (_super) {
    __extends(ChartTable, _super);
    function ChartTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartTable.prototype.render = function () {
        return React.createElement("table", { className: "chart" },
            React.createElement(ChartTableHeader_1.ChartTableHeader, { headers: this.props.data.columns }),
            React.createElement(ChartTableRows_1.ChartTableRows, { data: this.props.data }));
    };
    return ChartTable;
}(React.Component));
exports.ChartTable = ChartTable;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by ido on 08/07/2017.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ChartTableHeader = (function (_super) {
    __extends(ChartTableHeader, _super);
    function ChartTableHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartTableHeader.prototype.render = function () {
        var header = this.props.headers.map(function (val) { return React.createElement("th", { key: val.name }, val.name); });
        return React.createElement("thead", null,
            React.createElement("tr", { className: "chart-table-header" }, header));
    };
    return ChartTableHeader;
}(React.Component));
exports.ChartTableHeader = ChartTableHeader;


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ido on 08/07/2017.
 */
var Domain = (function () {
    function Domain(min, max) {
        this.min = min;
        this.max = max;
    }
    return Domain;
}());
exports.Domain = Domain;
function getScale(value, currentDomain, targetDomain) {
    var currentDomainRange = currentDomain.max - currentDomain.min;
    var targetDomainRange = targetDomain.max - targetDomain.min;
    return (((value - currentDomain.min) * targetDomainRange) / currentDomainRange) + targetDomain.min;
}
exports.getScale = getScale;
var TableColumn = (function () {
    function TableColumn(name, type) {
        this.name = name;
        this.type = type;
        this.domain = null;
    }
    return TableColumn;
}());
exports.TableColumn = TableColumn;
var TableChartData = (function () {
    function TableChartData(columns, data) {
        this.columns = columns;
        this.data = data;
    }
    return TableChartData;
}());
exports.TableChartData = TableChartData;
var TableColumnType = (function () {
    function TableColumnType() {
    }
    TableColumnType.TEXT = "TEXT";
    TableColumnType.CIRCLE = "CIRCLE";
    TableColumnType.BAR = "BAR";
    return TableColumnType;
}());
exports.TableColumnType = TableColumnType;
function getStatus(scoreStr) {
    var score = parseInt(scoreStr);
    if (!score) {
        return 'Undefined';
    }
    if (score >= 85) {
        return 'Good';
    }
    if (score >= 70) {
        return 'Fair';
    }
    if (score >= 50) {
        return 'Poor';
    }
    return 'Unacceptable';
}
exports.getStatus = getStatus;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by ido on 08/07/2017.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utils_1 = __webpack_require__(10);
var ChartTableRows = (function (_super) {
    __extends(ChartTableRows, _super);
    function ChartTableRows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartTableRows.prototype.onCellClick = function (e, index) {
        var event = e.nativeEvent;
        console.log(event.pageX);
        console.log(this.props.data.data[index]);
    };
    ChartTableRows.prototype.render = function () {
        var _this = this;
        var columns = this.props.data.columns;
        var data = this.props.data.data;
        var rows = [];
        var row = [];
        var _loop_1 = function (i) {
            for (var j = 0; j < data[i].length; ++j) {
                var key = i + "," + j;
                switch (columns[j].type) {
                    case Utils_1.TableColumnType.TEXT:
                        row.push(React.createElement("td", { key: key, onClick: function (e) { return _this.onCellClick(e, i); } }, data[i][j]));
                        break;
                    case Utils_1.TableColumnType.BAR:
                        var width = Utils_1.getScale(parseInt(data[i][j].replace(/,/g, '')), columns[j].domain, new Utils_1.Domain(10, 100));
                        var style = { fill: 'blue' };
                        row.push(React.createElement("td", { key: key, onClick: function (e) { return _this.onCellClick(e, i); } },
                            React.createElement("svg", { className: "chart-svg-bar" },
                                React.createElement("rect", { x: "0", y: "5", width: width, height: "20", style: style }),
                                React.createElement("text", { x: width + 5, y: "20" }, data[i][j]))));
                        break;
                    case Utils_1.TableColumnType.CIRCLE:
                        row.push(React.createElement("td", { key: key, onClick: function (e) { return _this.onCellClick(e, i); } },
                            React.createElement("svg", { className: "chart-svg" },
                                React.createElement("circle", { className: Utils_1.getStatus(data[i][j]), cx: "50", cy: "15", r: "10" }),
                                React.createElement("text", { x: "65", y: "20" }, data[i][j]))));
                        break;
                    default:
                        throw Error('Unknown table column type of ' + columns[i].type);
                }
            }
            rows.push(React.createElement("tr", { key: i, className: "chart-table-row" }, row));
            row = [];
        };
        for (var i = 0; i < data.length; ++i) {
            _loop_1(i);
        }
        //const rows2: JSX.Element[] = this.props.data.data.map((value, index, array) => <ChartTableRow data={value}/>);
        return React.createElement("tbody", null, rows);
    };
    return ChartTableRows;
}(React.Component));
exports.ChartTableRows = ChartTableRows;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map