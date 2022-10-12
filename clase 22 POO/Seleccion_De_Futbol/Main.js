"use strict";
/*Actividad Obligatoria
Crear proyecto NPM
Subir proyecto a GitHub
Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
Crear un archivo main donde creen instancias de cada clase, le den valores y le hagan consultas y muestren algun tipo de mensaje por consola
Aplicar herencia donde sea posible*/
exports.__esModule = true;
var Entrenadores_1 = require("./Entrenadores");
var Futbolistas_1 = require("./Futbolistas");
var Gestor_entrenadores_1 = require("./Gestor_entrenadores");
var Gestor_futbolistas_1 = require("./Gestor_futbolistas");
var Gestor_masajistas_1 = require("./Gestor_masajistas");
var Masajistas_1 = require("./Masajistas");
// instancias jugadores //
/*let fecha1 = new Date('06-24-1987');
let fecha2 = new Date('10-25-1996');
let fecha3 = new Date('03-15-1988');*/
var jugador1 = new Futbolistas_1.Futbolista("Lionel", "Messi", '06-24-1987', 3219161030, "Delantero", 10);
var jugador2 = new Futbolistas_1.Futbolista("Dibu", "Martinez", '10-25-1996', 2814561789, "Arquero", 12);
var jugador3 = new Futbolistas_1.Futbolista("Lautaro", "Martinez", '03-15-1988', 536895240, "Delantero", 9);
var arreglo_futbolistas = [jugador1, jugador2, jugador3];
var gestorSeleccion = new Gestor_futbolistas_1.Gestor_futbolista(arreglo_futbolistas);
var jugador_nuevo = new Futbolistas_1.Futbolista("Lautaro", "Martinez", '03-15-1988', 536895240, "Delantero", 9);
console.log("-----------");
console.log("buscamos el jugador", jugador_nuevo.toString());
console.log("/////");
var r1 = gestorSeleccion.consultarFutbolista(jugador_nuevo);
console.log("¿existe el jugador? = ", r1);
console.log("nacimiento:", jugador_nuevo.getFechaNacimiento(), "-- la edad del jugador es: ", jugador_nuevo.get_edad());
console.log("/////");
console.log("modificamos numero de camiseta"),
    jugador_nuevo.editarNumCamiseta(33);
console.log("/////");
console.log("El nuevo numero de camiseta del jugador", jugador_nuevo.obtener_nombre(), "", jugador_nuevo.obtener_apellido(), " es: ", jugador_nuevo.numeroDeCamiseta());
console.log("/////");
var jugador4 = new Futbolistas_1.Futbolista("Cuti", "Romero", '08-27-1998', 123213456, "Defensor", 2);
gestorSeleccion.agregarFutbolista(jugador4);
console.log("vemos la lista de jugadores");
console.log(gestorSeleccion.mostrarBaseDeDatosFubolistas());
console.log("-----------");
// instancias entrenadores //
/*let fecha5 = new Date('12-05-1982');
let fecha6 = new Date('10-20-1979');
let fecha7 = new Date('04-10-1978');*/
var directorTecnico = new Entrenadores_1.Entrenador("Lionel", "Scaloni", '12-05-1982', 2219777039, "Argentino", 6);
var ayudanteDeCampo = new Entrenadores_1.Entrenador("Pablo", "Aimar", '10-20-1979', 1914562489, "Argentino", 5);
var ayudanteDeCampo_2 = new Entrenadores_1.Entrenador("Walter", "Samuel", '04-10-1978', 536895240, "Argentino", 4);
var paramArregloCuerpoTecnico = [directorTecnico, ayudanteDeCampo, ayudanteDeCampo_2];
var gestorEntrenadores = new Gestor_entrenadores_1.Gestor_entrenador(paramArregloCuerpoTecnico);
var nuevoEntrenador = new Entrenadores_1.Entrenador("Walter", "Samuel", '04-10-1978', 536895240, "Argentino", 4);
console.log("-----------");
console.log("buscamos si existe el entrenador", nuevoEntrenador.toString());
console.log("/////");
var r2 = gestorEntrenadores.consultarEntrenador(nuevoEntrenador);
console.log("¿existe el entrenador? = ", r2);
console.log("/////");
console.log("Los años de experiancia del entrenador son: ", nuevoEntrenador.experiencia_DT());
console.log("vemos la lista del cuerpo técnico");
//console.log(gestorEntrenadores.mostrarBaseDeDatosCuerpoTecnico());
console.log("-----------");
// instancias masajistas //
/*let fecha8 = new Date('12-05-1972');
let fecha9 = new Date('10-20-1969');
let fecha10 = new Date('04-10-1998');
let fecha11 = new Date('01-21-1980');*/
var medico = new Masajistas_1.Masajista("Carlos", "Angelotti", '12-05-1972', 2019039357, "Italiano", 26);
var terapeuta = new Masajistas_1.Masajista("Luis", "Benitez", '10-20-1969', 1112489555, "Argentino", 25);
var masajista = new Masajistas_1.Masajista("jose", "Perez", '04-10-1998', 368952952, "Argentino", 5);
var paramArregloCuerpoMedico = [medico, terapeuta, masajista];
var gestorMasajistas = new Gestor_masajistas_1.Gestor_masajista(paramArregloCuerpoMedico);
var nuevoMasajista = new Masajistas_1.Masajista("Daniel", "Gonzalez", '01-21-1980', 240536895, "Argentino", 14);
console.log("-----------");
console.log("buscamos si existe el integrante del cuerpo médico", nuevoMasajista.toString());
console.log("/////");
var r3 = gestorMasajistas.consultarCuerpoMedico(nuevoMasajista);
console.log("¿existe le medico/masajista? = ", r3);
console.log("/////");
console.log("Los años de experiancia como cuerpo medico deportivo son: ", nuevoMasajista.experiencia_masajista());
console.log("vemos la lista del cuerpo medico");
//console.log(gestorMasajistas.mostrarBaseDeDatosCuerpoMedico());
console.log("-----------");
console.log("-----------");
