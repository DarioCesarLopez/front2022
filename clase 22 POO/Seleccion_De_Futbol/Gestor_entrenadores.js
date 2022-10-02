"use strict";
exports.__esModule = true;
exports.Gestor_entrenador = void 0;
var Gestor_entrenador = /** @class */ (function () {
    function Gestor_entrenador(paramArregloCuerpoTecnico) {
        this.listaCuerpoTecnico = paramArregloCuerpoTecnico;
    }
    Gestor_entrenador.prototype.mostrarBaseDeDatosCuerpoTecnico = function () {
        this.listaCuerpoTecnico.forEach(function (object) {
            console.log(object);
        });
    };
    // usamos la clase como tipo
    Gestor_entrenador.prototype.consultarEntrenador = function (nombreParametro) {
        var existe = false;
        var posicion = -1;
        for (var i = 0; i < this.listaCuerpoTecnico.length; i++) {
            if (nombreParametro.obtener_nombre() == this.listaCuerpoTecnico[i].obtener_nombre()) {
                posicion = i;
                existe = true;
            }
        }
        return existe;
    };
    Gestor_entrenador.prototype.consultarExperiencia = function (exp) {
        var anios = 0;
        for (var i = 0; i < this.listaCuerpoTecnico.length; i++)
            if (this.listaCuerpoTecnico[i].experiencia_DT() == anios)
                return anios;
    };
    return Gestor_entrenador;
}()); // fin clase gestor entrenador //
exports.Gestor_entrenador = Gestor_entrenador;
