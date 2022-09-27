"use strict";
/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros.
(Esta clase puede estar "compuesta" por un arreglo de libros)*/
exports.__esModule = true;
exports.GestorLibros = exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(nombreLibro, autorLibro, generoLibro, precioLibro) {
        this.nombre = nombreLibro;
        this.autor = autorLibro;
        this.genero = generoLibro;
        this.precio = precioLibro;
    }
    Libro.prototype.nombre_libro = function () {
        return this.nombre;
    };
    Libro.prototype.cambiar_nombre_libro = function (libroNombre) {
        this.nombre = libroNombre;
    };
    Libro.prototype.nombre_autor = function () {
        return this.autor;
    };
    Libro.prototype.cambiar_autor_libro = function (autorNuevo) {
        this.autor = autorNuevo;
    };
    Libro.prototype.genero_libro = function () {
        return this.genero;
    };
    Libro.prototype.cambiar_genero_libro = function (nuevoGenero) {
        this.genero = nuevoGenero;
    };
    Libro.prototype.precio_libro = function () {
        return this.precio;
    };
    Libro.prototype.cambiar_precio_libro = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
    };
    Libro.prototype.toString = function () {
        return '(' + this.nombre + ' , ' + this.genero + ' , ' + this.autor + ' , ' + this.precio + ')';
    };
    return Libro;
}()); // Fin de la clase libro /////////////////
exports.Libro = Libro;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(parametroArregloLibros) {
        this.listadoDeLibros = parametroArregloLibros;
    }
    // usamos la clase libro como tipo
    GestorLibros.prototype.consultarLibro = function (libroParametro) {
        var existe = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()) {
                posicion = i;
                existe = true;
            }
        }
        return existe;
    };
    GestorLibros.prototype.consultarPosicion = function (libroParametro) {
        var posicion = -1;
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()) {
                posicion = i;
            }
        }
        return posicion;
    };
    GestorLibros.prototype.registrarNuevoLibro = function (libroParametro) {
        this.listadoDeLibros.push(libroParametro);
    };
    GestorLibros.prototype.editarLibro = function (posicion, nombreParam, autorParam, generoParam, precioParam) {
        this.listadoDeLibros[posicion].cambiar_nombre_libro(nombreParam);
        this.listadoDeLibros[posicion].cambiar_autor_libro(autorParam);
        this.listadoDeLibros[posicion].cambiar_genero_libro(generoParam);
        this.listadoDeLibros[posicion].cambiar_precio_libro(precioParam);
    };
    GestorLibros.prototype.eliminarLibro = function (libroParametro) {
        for (var i = 0; i < this.listadoDeLibros.length; i++) {
            if (libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()) {
                this.listadoDeLibros.splice(i, 1);
            }
        }
    };
    return GestorLibros;
}()); // Fin de la clase gestor libros ////////////////////
exports.GestorLibros = GestorLibros;
