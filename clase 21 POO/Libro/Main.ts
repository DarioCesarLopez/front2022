/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros. 
(Esta clase puede estar "compuesta" por un arreglo de libros)*/

import {
  GestorLibros,
  Libro,
} from './Libros';

let libro1: Libro = new Libro("Fire and Blood","George R R Martin","ciencia ficcion",8600);
let libro2: Libro = new Libro("Game of Thrones","George R R Martin","ciencia ficcion",8400);
let libro3: Libro = new Libro("The Lord of the Rings","J. R. R. Tolkien","ciencia ficcion",7300);
let libro4: Libro = new Libro("El códico Da Vinci","Dan Brown","ciencia ficcion",7225);
let libro5: Libro = new Libro("Cien años de soledad","Garcia Marquez","novela",4050);

let libro_nuevo: Libro = new Libro("El Libro Negro de las Horas","Eva García Sáenz de Urturi","misterio",8560);

let arregloDeLibros:Libro[] = [libro1,libro2,libro3,libro4,libro5];

let gestorLibreria: GestorLibros = new GestorLibros (arregloDeLibros);

//metodo para saber si el libro esta en stock. r1 = respuesta recibida
console.log("buscamos el libro");
let r1:boolean = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ",r1);

// metodo para agregar un nuevo libro a la lista 
gestorLibreria.registrarNuevoLibro(libro_nuevo);
console.log("'agregamos un nuevo libro a la lista' -", libro_nuevo.nombre_libro(),"- 'RECIEN AGREGADO'")

//metodo para saber si el libro esta en stock. r2 = respuesta recibida
console.log("buscamos el libro luego de agregarlo");
let r2:boolean = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ",r2);
console.log("Titulo: ",libro_nuevo.nombre_libro());
console.log("autor/a: ",libro_nuevo.nombre_autor());
console.log("genero: ",libro_nuevo.genero_libro());
console.log("precio: $",libro_nuevo.precio_libro());
console.log("posicion:",gestorLibreria.consultarPosicion(libro_nuevo));


// metodo para editar datos del arreglo libros
console.log("Editar atributos del libro en la posicion",gestorLibreria.consultarPosicion(libro_nuevo));
gestorLibreria.editarLibro(5,"El silencio de la ciudad blanca","Eva García Sáenz de Urturi","thriller",8600)
console.log("libro editado: ", "posicion:",gestorLibreria.consultarPosicion(libro_nuevo),"-", libro_nuevo.toString());

// metodo para eliminar un libro de la lista
console.log("Eliminar libro");
gestorLibreria.eliminarLibro(libro_nuevo);
console.log("Se eliminó el libro: ",libro_nuevo.toString());

// volvemos a consultar si existe el libro para saber si se elimino correctamente.
let r3: boolean = gestorLibreria.consultarLibro(libro_nuevo);
console.log("¿existe el libro? = ",r3);

