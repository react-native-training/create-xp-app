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
var reactxp_video_1 = require("reactxp-video");
var ProgressIndicator_1 = require("./ProgressIndicator");
var ToggleSwitch_1 = require("./ToggleSwitch");
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
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
    }),
    videoTitleText: RX.Styles.createTextStyle({
        marginBottom: 8
    }),
    progressMargin: RX.Styles.createViewStyle({
        margin: 8
    }),
    video: RX.Styles.createViewStyle({
        height: 176,
        width: 320
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
var SecondPanel = (function (_super) {
    __extends(SecondPanel, _super);
    function SecondPanel() {
        var _this = _super.call(this) || this;
        _this._onPressBack = function () {
            _this.props.onNavigateBack();
        };
        _this._playVideo = function () {
            var video = _this.refs['video'];
            if (video) {
                video.mute(true);
                video.play();
            }
        };
        // Note that we define this as a variable rather than a normal method. Using this
        // method, we prebind the method to this component instance. This prebinding ensures
        // that each time we pass the variable as a prop in the render function, it will
        // not change. We want to avoid unnecessary prop changes because this will trigger
        // extra work within React's virtual DOM diffing mechanism.
        _this._onChangeToggle = function (newValue) {
            _this.setState({ toggleValue: newValue });
        };
        _this.state = {
            toggleValue: true,
            progressValue: 0
        };
        return _this;
    }
    SecondPanel.prototype.componentDidMount = function () {
        this._startProgressIndicator();
    };
    SecondPanel.prototype.componentWillUnmount = function () {
        this._stopProgressIndicator();
    };
    SecondPanel.prototype.render = function () {
        return (RX.createElement(RX.ScrollView, { style: styles.scroll },
            RX.createElement(RX.View, { style: styles.container },
                RX.createElement(RX.Button, { style: styles.roundButton, onPress: this._onPressBack },
                    RX.createElement(RX.Text, { style: styles.buttonText }, "Go Back")),
                RX.createElement(RX.Text, { style: styles.titleText }, "Here is a simple control built using ReactXP"),
                RX.createElement(ToggleSwitch_1.default, { value: this.state.toggleValue, onChange: this._onChangeToggle }),
                RX.createElement(RX.Text, { style: styles.titleText }, "Here is an SVG image using the ImageSvg extension"),
                RX.createElement(ProgressIndicator_1.default, { style: styles.progressMargin, progress: this.state.progressValue, fillColor: '#ddd', size: 32 }),
                RX.createElement(RX.Text, { style: [styles.titleText, styles.videoTitleText] }, "Here is a video using the Video extension"),
                RX.createElement(reactxp_video_1.default, { ref: 'video', style: styles.video, source: 'https://www.w3schools.com/html/mov_bbb.mp4', loop: true, onCanPlay: this._playVideo }))));
    };
    SecondPanel.prototype._startProgressIndicator = function () {
        var _this = this;
        this._progressTimerToken = window.setInterval(function () {
            var newProgressValue = (_this.state.progressValue + 0.02) % 1;
            _this.setState({ progressValue: newProgressValue });
        }, 1000 / 15);
    };
    SecondPanel.prototype._stopProgressIndicator = function () {
        if (this._progressTimerToken) {
            window.clearInterval(this._progressTimerToken);
            this._progressTimerToken = undefined;
        }
    };
    return SecondPanel;
}(RX.Component));
module.exports = SecondPanel;
//# sourceMappingURL=SecondPanel.js.map