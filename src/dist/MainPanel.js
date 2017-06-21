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
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    })
};
var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel() {
        var _this = _super.call(this) || this;
        _this._onPressNavigate = function () {
            _this.props.onPressNavigate();
        };
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
    MainPanel.prototype.componentDidMount = function () {
        var animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        });
        animation.start();
    };
    MainPanel.prototype.render = function () {
        return (RX.createElement(RX.ScrollView, { style: styles.scroll },
            RX.createElement(RX.View, { style: styles.container },
                RX.createElement(RX.Animated.Text, { style: [styles.helloWorld, this._animatedStyle] }, "Hello World"),
                RX.createElement(RX.Text, { style: styles.welcome }, "Welcome to ReactXP"),
                RX.createElement(RX.Text, { style: styles.instructions }, "Edit App.tsx to get started"),
                RX.createElement(RX.Link, { style: styles.docLink, url: 'https://microsoft.github.io/reactxp/docs' }, "View ReactXP documentation"),
                RX.createElement(RX.Button, { style: styles.roundButton, onPress: this._onPressNavigate },
                    RX.createElement(RX.Text, { style: styles.buttonText }, "See More Examples")))));
    };
    return MainPanel;
}(RX.Component));
module.exports = MainPanel;
//# sourceMappingURL=MainPanel.js.map