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
exports.Entrenador = void 0;
var Seleccion_1 = require("./Seleccion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombrePam, apellidoPam, fecha_nacimientoPam, pasaportePam, nacionalidad, experiencia) {
        var _this = _super.call(this, nombrePam, apellidoPam, fecha_nacimientoPam, pasaportePam) || this;
        _this.nacionalidad = nacionalidad;
        _this.aniosDeExperiencia = experiencia;
        return _this;
    }
    Entrenador.prototype.nacionalidad_DT = function () {
        return this.nacionalidad;
    };
    Entrenador.prototype.editar_nacionalidad_DT = function (nacionalidad) {
        this.nacionalidad = nacionalidad;
    };
    Entrenador.prototype.experiencia_DT = function () {
        return this.aniosDeExperiencia;
    };
    Entrenador.prototype.editar_experiencia_DT = function (aniosDeExperiencia) {
        this.aniosDeExperiencia = aniosDeExperiencia;
    };
    return Entrenador;
}(Seleccion_1.Seleccion)); // fin clase entrenador //
exports.Entrenador = Entrenador;
