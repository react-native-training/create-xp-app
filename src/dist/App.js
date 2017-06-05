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
var styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue'
    })
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this._translationValue = new RX.Animated.Value(-100);
        _this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: _this._translationValue
                }
            ]
        });
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        });
        animation.start();
    };
    App.prototype.render = function () {
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(RX.Animated.Text, { style: [styles.helloWorld, this._animatedStyle] }, "Hello World"),
            RX.createElement(RX.Text, { style: styles.welcome }, "Welcome to ReactXP"),
            RX.createElement(RX.Text, { style: styles.instructions }, "Edit App.tsx to get started"),
            RX.createElement(RX.Link, { style: styles.docLink, url: 'https://microsoft.github.io/reactxp/docs' }, "View ReactXP documentation")));
    };
    return App;
}(RX.Component));
module.exports = App;
//# sourceMappingURL=App.js.map