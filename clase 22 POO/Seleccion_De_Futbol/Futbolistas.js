"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Futbolista = void 0;
var Seleccion_1 = require("./Seleccion");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(nombrePam, apellidoPam, fecha_nacimientoPam, pasaportePam, posicion, dorsal) {
        var _this = _super.call(this, nombrePam, apellidoPam, fecha_nacimientoPam, pasaportePam) || this;
        _this.posicion = posicion;
        _this.dorsal = dorsal;
        return _this;
    }
    Futbolista.prototype.numeroDeCamiseta = function () {
        return this.dorsal;
    };
    Futbolista.prototype.editarNumCamiseta = function (dorsal) {
        this.dorsal = dorsal;
    };
    Futbolista.prototype.mostrarPosicion = function () {
        return this.posicion;
    };
    Futbolista.prototype.editarPosicion = function (posicion) {
        this.posicion = posicion;
    };
    Futbolista.prototype.toString = function () {
        var respuesta = this.obtener_nombre() + " " + this.obtener_apellido() + " Nº camista: " + this.numeroDeCamiseta();
        return respuesta;
    };
    return Futbolista;
}(Seleccion_1.Seleccion)); // fin clase futbolista //
exports.Futbolista = Futbolista;
