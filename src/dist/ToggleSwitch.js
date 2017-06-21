/**
* ToggleSwitch.tsx
* Copyright: Microsoft 2017
*
* A simple toggle control built in ReactXP that allows users to
* pick between two values.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var _knobLeftOff = 2; // In pixels
var _knobLeftOn = 22; // In pixels
var _animationDuration = 250; // In milliseconds
var _styles = {
    container: RX.Styles.createButtonStyle({
        flexDirection: 'row',
        alignItems: 'center'
    }),
    toggleSwitch: RX.Styles.createViewStyle({
        flexDirection: 'row',
        borderRadius: 15,
        marginVertical: 8,
        height: 30,
        width: 50,
        backgroundColor: '#ddd'
    }),
    toggleSwitchBackground: RX.Styles.createViewStyle({
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 15
    }),
    toggleKnob: RX.Styles.createViewStyle({
        top: 2,
        height: 26,
        width: 26,
        borderRadius: 13,
        backgroundColor: 'white'
    })
};
var ToggleSwitch = (function (_super) {
    __extends(ToggleSwitch, _super);
    function ToggleSwitch(props) {
        var _this = _super.call(this, props) || this;
        _this._handleClick = function (e) {
            e.stopPropagation();
            if (_this.props.onChange) {
                _this.props.onChange(!_this.props.value);
            }
        };
        // This value controls the left offset of the knob, which we will
        // animate when the user toggles the control.
        _this._knobLeftAnimationValue = new RX.Animated.Value(_this.props.value ? _knobLeftOn : _knobLeftOff);
        _this._knobLeftAnimationStyle = RX.Styles.createAnimatedViewStyle({
            left: _this._knobLeftAnimationValue
        });
        // This value controls the background color of the control. Here we make
        // use of the interpolate method to smoothly transition between two colors.
        _this._toggleColorAnimationValue = new RX.Animated.Value(_this.props.value ? 1 : 0);
        _this._toggleColorAnimationStyle = RX.Styles.createAnimatedTextInputStyle({
            backgroundColor: _this._toggleColorAnimationValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['#66f', '#ddd']
            })
        });
        return _this;
    }
    ToggleSwitch.prototype.componentWillUpdate = function (newProps) {
        // If the value of the toggle changes, animate the toggle sliding
        // from one side to the other. In parallel, animate the opacity change.
        if (this.props.value !== newProps.value) {
            RX.Animated.parallel([
                RX.Animated.timing(this._knobLeftAnimationValue, {
                    toValue: newProps.value ? _knobLeftOn : _knobLeftOff,
                    duration: _animationDuration,
                    easing: RX.Animated.Easing.InOut()
                }),
                RX.Animated.timing(this._toggleColorAnimationValue, {
                    toValue: newProps.value ? 1 : 0,
                    duration: _animationDuration,
                    easing: RX.Animated.Easing.InOut()
                })
            ])
                .start();
        }
    };
    ToggleSwitch.prototype.render = function () {
        var knobStyles = [_styles.toggleKnob, this._knobLeftAnimationStyle];
        var backgroundStyle = [_styles.toggleSwitchBackground, this._toggleColorAnimationStyle];
        return (RX.createElement(RX.Button, { style: _styles.container, onPress: this._handleClick },
            RX.createElement(RX.View, { style: _styles.toggleSwitch },
                RX.createElement(RX.Animated.View, { style: backgroundStyle }),
                RX.createElement(RX.Animated.View, { style: knobStyles }))));
    };
    return ToggleSwitch;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToggleSwitch;
//# sourceMappingURL=ToggleSwitch.js.map