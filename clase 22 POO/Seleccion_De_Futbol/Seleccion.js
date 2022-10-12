"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(nombrePam, apellidoPam, fecha_nacimientoPam, pasaportePam) {
        this.nombre = nombrePam;
        this.apellido = apellidoPam;
        this.pasaporte = pasaportePam;
        this.fecha_nacimiento = new Date(fecha_nacimientoPam);
    }
    Seleccion.prototype.obtener_nombre = function () {
        return this.nombre;
    };
    Seleccion.prototype.modificar_nombre = function (nombre) {
        this.nombre = nombre;
    };
    Seleccion.prototype.obtener_apellido = function () {
        return this.apellido;
    };
    Seleccion.prototype.modificar_apellido = function (apellido) {
        this.apellido = apellido;
    };
    Seleccion.prototype.getFechaDeNacimiento = function () {
        return this.fecha_nacimiento;
    };
    Seleccion.prototype.getFechaNacimiento = function () {
        var fecha = new Date();
        return fecha.toLocaleDateString();
    };
    Seleccion.prototype.numero_pasaporte = function () {
        return this.pasaporte;
    };
    Seleccion.prototype.get_edad = function () {
        var hoy = new Date();
        return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    };
    Seleccion.prototype.toString = function () {
        var respuesta = this.obtener_nombre() + " " + this.obtener_apellido() + " Nº pasaporte: " + this.numero_pasaporte();
        return respuesta;
    };
    return Seleccion;
}()); // fin clase seleccion ///
exports.Seleccion = Seleccion;
