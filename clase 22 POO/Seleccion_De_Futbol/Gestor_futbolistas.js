"use strict";
exports.__esModule = true;
exports.Gestor_futbolista = void 0;
var Gestor_futbolista = /** @class */ (function () {
    function Gestor_futbolista(paramArregloFutbolistas) {
        this.listaDeFutbolistas = paramArregloFutbolistas;
    }
    Gestor_futbolista.prototype.mostrarBaseDeDatosFubolistas = function () {
        this.listaDeFutbolistas.forEach(function (object) {
            console.log(object);
        });
    };
    // usamos la clase Futbolista como tipo
    Gestor_futbolista.prototype.consultarFutbolista = function (nombreParametro) {
        var existe = false;
        var posicion = -1;
        for (var i = 0; i < this.listaDeFutbolistas.length; i++) {
            if (nombreParametro.obtener_nombre() == this.listaDeFutbolistas[i].obtener_nombre()) {
                posicion = i;
                existe = true;
            }
        }
        return existe;
    };
    Gestor_futbolista.prototype.modificarDorsal = function (dorsal) {
        var pos = -1;
        for (var i = 0; i < this.listaDeFutbolistas.length; i++) {
            if (this.listaDeFutbolistas[i].numeroDeCamiseta() == dorsal)
                pos = i;
        }
        this.listaDeFutbolistas[pos].editarNumCamiseta(dorsal);
    };
    Gestor_futbolista.prototype.agregarFutbolista = function (jugador_nuevo) {
        this.listaDeFutbolistas.push(jugador_nuevo);
    };
    return Gestor_futbolista;
}()); // fin gestor futbolistas /////////////////
exports.Gestor_futbolista = Gestor_futbolista;
