"use strict";
exports.__esModule = true;
exports.Gestor_masajista = void 0;
var Gestor_masajista = /** @class */ (function () {
    function Gestor_masajista(paramArregloCuerpoMedico) {
        this.listaCuerpoMedico = paramArregloCuerpoMedico;
    }
    Gestor_masajista.prototype.mostrarBaseDeDatosCuerpoMedico = function () {
        this.listaCuerpoMedico.forEach(function (object) {
            console.log(object);
        });
    };
    // usamos la clase como tipo
    Gestor_masajista.prototype.consultarCuerpoMedico = function (nombreParametro) {
        var existe = false;
        var posicion = -1;
        for (var i = 0; i < this.listaCuerpoMedico.length; i++) {
            if (nombreParametro.obtener_nombre() == this.listaCuerpoMedico[i].obtener_nombre()) {
                posicion = i;
                existe = true;
            }
        }
        return existe;
    };
    Gestor_masajista.prototype.experienciaCuerpoMedico = function (exp) {
        var anios = 0;
        for (var i = 0; i < this.listaCuerpoMedico.length; i++)
            if (this.listaCuerpoMedico[i].experiencia_masajista() == anios)
                return anios;
    };
    return Gestor_masajista;
}()); // fin clase gestor masajista //
exports.Gestor_masajista = Gestor_masajista;
