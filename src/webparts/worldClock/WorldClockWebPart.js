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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("WorldClockWebPartStrings");
var WorldClock_1 = require("./components/WorldClock");
var timeZones = require("./components/Timezones");
var WorldClockWebPart = (function (_super) {
    __extends(WorldClockWebPart, _super);
    function WorldClockWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldClockWebPart.prototype.getTimeZones = function () {
        var result = new Array();
        timeZones.TimeZones.zones.map(function (zone) {
            result.push({ key: zone.id, text: zone.displayName });
        });
        return (result);
    };
    WorldClockWebPart.prototype.render = function () {
        var _this = this;
        var element = React.createElement(WorldClock_1.default, {
            description: this.properties.description,
            timeZoneOffset: this.properties.timeZoneOffset,
            errorHandler: function (errorMessage) {
                _this.context.statusRenderer.renderError(_this.domElement, errorMessage);
            }
        });
        ReactDom.render(element, this.domElement);
    };
    WorldClockWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(WorldClockWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WorldClockWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                sp_webpart_base_1.PropertyPaneDropdown('timeZoneOffset', {
                                    label: strings.TimeZoneOffsetFieldLabel,
                                    options: this.getTimeZones()
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return WorldClockWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = WorldClockWebPart;
//# sourceMappingURL=WorldClockWebPart.js.map