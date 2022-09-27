"use strict";
exports.__esModule = true;
exports.Recta = void 0;
var Recta = /** @class */ (function () {
    function Recta(puntoInicial, puntoFinal) {
        this.puntoInicial = puntoInicial;
        this.puntoFinal = puntoFinal;
    }
    Recta.prototype.get_puntoInicial = function () {
        return this.puntoInicial;
    };
    Recta.prototype.set_puntoInicial = function (punto) {
        return this.puntoInicial;
    };
    Recta.prototype.get_puntoFinal = function () {
        return this.puntoFinal;
    };
    Recta.prototype.set_puntoFinal = function (punto) {
        return this.puntoFinal;
    };
    Recta.prototype.largo = function () {
        var x1 = this.puntoInicial.get_x();
        var y1 = this.puntoInicial.get_y();
        var x2 = this.puntoFinal.get_x();
        var y2 = this.puntoFinal.get_y();
        var aux1 = x2 - x1;
        aux1 = aux1 * aux1;
        var aux2 = y2 - y1;
        aux2 = aux2 * aux2;
        return Math.sqrt(aux1 + aux2);
    };
    Recta.prototype.sentido = function () {
        return "algun cuadrante";
    };
    Recta.prototype.toString = function () {
        return this.puntoInicial.toString() + ' , ' + this.puntoFinal.toString();
    };
    return Recta;
}()); // FIN clase Recta
exports.Recta = Recta;
