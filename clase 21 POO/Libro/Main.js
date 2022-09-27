"use strict";
/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros.
(Esta clase puede estar "compuesta" por un arreglo de libros)*/
exports.__esModule = true;
var Libros_1 = require("./Libros");
var libro1 = new Libros_1.Libro("Fire and Blood", "George R R Martin", "ciencia ficcion", 8600);
var libro2 = new Libros_1.Libro("Game of Thrones", "George R R Martin", "ciencia ficcion", 8400);
var libro3 = new Libros_1.Libro("The Lord of the Rings", "J. R. R. Tolkien", "ciencia ficcion", 7300);
var libro4 = new Libros_1.Libro("El códico Da Vinci", "Dan Brown", "ciencia ficcion", 7225);
var libro5 = new Libros_1.Libro("Cien años de soledad", "Garcia Marquez", "novela", 4050);
var libro_nuevo = new Libros_1.Libro("El Libro Negro de las Horas", "Eva García Sáenz de Urturi", "misterio", 8560);
var arregloDeLibros = [libro1, libro2, libro3, libro4, libro5];
var gestorLibreria = new Libros_1.GestorLibros(arregloDeLibros);
//metodo para saber si el libro esta en stock. r1 = respuesta recibida
console.log("buscamos el libro");
var r1 = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ", r1);
// metodo para agregar un nuevo libro a la lista 
gestorLibreria.registrarNuevoLibro(libro_nuevo);
console.log("'agregamos un nuevo libro a la lista' -", libro_nuevo.nombre_libro(), "- 'RECIEN AGREGADO'");
//metodo para saber si el libro esta en stock. r2 = respuesta recibida
console.log("buscamos el libro luego de agregarlo");
var r2 = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ", r2);
console.log("Titulo: ", libro_nuevo.nombre_libro());
console.log("autor/a: ", libro_nuevo.nombre_autor());
console.log("genero: ", libro_nuevo.genero_libro());
console.log("precio: $", libro_nuevo.precio_libro());
console.log("posicion:", gestorLibreria.consultarPosicion(libro_nuevo));
// metodo para editar datos del arreglo libros
console.log("Editar atributos del libro en la posicion", gestorLibreria.consultarPosicion(libro_nuevo));
gestorLibreria.editarLibro(5, "El silencio de la ciudad blanca", "Eva García Sáenz de Urturi", "thriller", 8600);
console.log("libro editado: ", "posicion:", gestorLibreria.consultarPosicion(libro_nuevo), "-", libro_nuevo.toString());
// metodo para eliminar un libro de la lista
console.log("Eliminar libro");
gestorLibreria.eliminarLibro(libro_nuevo);
console.log("Se eliminó el libro: ", libro_nuevo.toString());
// volvemos a consultar si existe el libro para saber si se elimino correctamente.
var r3 = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ", r3);
