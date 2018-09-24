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
var React = require("react");
var WorldClock_module_scss_1 = require("./WorldClock.module.scss");
var Clock_1 = require("./Clock");
var timeZones = require("./Timezones");
var strings = require("WorldClockWebPartStrings");
var WorldClock = (function (_super) {
    __extends(WorldClock, _super);
    function WorldClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldClock.prototype.render = function () {
        return (React.createElement("div", { className: WorldClock_module_scss_1.default.worldClock },
            React.createElement("div", { className: WorldClock_module_scss_1.default.container },
                React.createElement("div", { className: WorldClock_module_scss_1.default.description }, (this.props.description) ? this.props.description : strings.LocalTimeDescription),
                React.createElement(Clock_1.Clock, { timeZoneOffset: this.convertTimeZoneIdToOffset(this.props.timeZoneOffset) }))));
    };
    /**
     * this method determines the minutes offset of the selected time zone
     */
    WorldClock.prototype.convertTimeZoneIdToOffset = function (id) {
        var result = 0;
        var matchingItems = timeZones.TimeZones.zones.filter(function (e, i) {
            return (e.id === id);
        });
        if (matchingItems && matchingItems.length > 0) {
            result = matchingItems[0].offsetMinutes;
        }
        return (result);
    };
    return WorldClock;
}(React.Component));
exports.default = WorldClock;
//# sourceMappingURL=WorldClock.js.map