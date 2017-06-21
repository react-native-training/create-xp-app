/*
* This file demonstrates a basic ReactXP app.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var MainPanel = require("./MainPanel");
var SecondPanel = require("./SecondPanel");
var NavigationRouteId;
(function (NavigationRouteId) {
    NavigationRouteId[NavigationRouteId["MainPanel"] = 0] = "MainPanel";
    NavigationRouteId[NavigationRouteId["SecondPanel"] = 1] = "SecondPanel";
})(NavigationRouteId || (NavigationRouteId = {}));
var styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    })
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNavigatorRef = function (navigator) {
            _this._navigator = navigator;
        };
        _this._renderScene = function (navigatorRoute) {
            switch (navigatorRoute.routeId) {
                case NavigationRouteId.MainPanel:
                    return RX.createElement(MainPanel, { onPressNavigate: _this._onPressNavigate });
                case NavigationRouteId.SecondPanel:
                    return RX.createElement(SecondPanel, { onNavigateBack: _this._onPressBack });
            }
            return null;
        };
        _this._onPressNavigate = function () {
            _this._navigator.push({
                routeId: NavigationRouteId.SecondPanel,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
                customSceneConfig: {
                    hideShadow: true
                }
            });
        };
        _this._onPressBack = function () {
            _this._navigator.pop();
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this._navigator.immediatelyResetRouteStack([{
                routeId: NavigationRouteId.MainPanel,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
            }]);
    };
    App.prototype.render = function () {
        return (RX.createElement(RX.Navigator, { ref: this._onNavigatorRef, renderScene: this._renderScene, cardStyle: styles.navCardStyle }));
    };
    return App;
}(RX.Component));
module.exports = App;
//# sourceMappingURL=App.js.map