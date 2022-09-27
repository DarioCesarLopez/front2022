"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.get_x = function () {
        return this.x;
    };
    Punto.prototype.set_x = function (x) {
        this.x = x;
    };
    Punto.prototype.get_y = function () {
        return this.y;
    };
    Punto.prototype.set_y = function (y) {
        this.y = y;
    };
    Punto.prototype.toString = function () {
        return '(' + this.x + ',' + this.y + ')';
    };
    return Punto;
}()); // FIN clase Punto
exports.Punto = Punto;
