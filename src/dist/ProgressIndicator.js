/**
* ProgressIndicator.tsx
* Copyright: Microsoft 2017
*
* Circular progress indicator that shows off the use of ImageSVG
* ReactXP extension.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var reactxp_imagesvg_1 = require("reactxp-imagesvg");
var ProgressIndicator = (function (_super) {
    __extends(ProgressIndicator, _super);
    function ProgressIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressIndicator.prototype.render = function () {
        var size = this.props.size;
        var progress = this.props.progress;
        var radius = size / 2;
        var deg = progress * 360;
        var radians = Math.PI * (deg - 90) / 180;
        var endX = radius + radius * Math.cos(radians);
        var endY = radius + radius * Math.sin(radians);
        var path = 'M' + radius + ',' + radius +
            ' L' + radius + ',0' +
            ' A' + radius + ',' + radius + ' 0 ' + (deg > 180 ? 1 : 0) + ',1 ' + endX + ',' + endY +
            'z';
        return (RX.createElement(reactxp_imagesvg_1.default, { viewBox: '0 0 ' + size + ' ' + size, style: this.props.style, width: size, height: size },
            RX.createElement(reactxp_imagesvg_1.SvgPath, { fillColor: this.props.fillColor, d: path })));
    };
    return ProgressIndicator;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressIndicator;
//# sourceMappingURL=ProgressIndicator.js.map