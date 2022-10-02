/*Actividad Obligatoria
Crear proyecto NPM
Subir proyecto a GitHub
Implementar una Selección de Fútbol, conformada por Futbolistas, Entrenador y Masajista. Cada integrante posee nombre, apellido, numero de pasaporte y fecha de nacimiento.
Crear un archivo main donde creen instancias de cada clase, le den valores y le hagan consultas y muestren algun tipo de mensaje por consola
Aplicar herencia donde sea posible*/

import { Entrenador } from './Entrenadores';
import { Futbolista } from './Futbolistas';
import { Gestor_entrenador } from './Gestor_entrenadores';
import { Gestor_futbolista } from './Gestor_futbolistas';
import { Gestor_masajista } from './Gestor_masajistas';
import { Masajista } from './Masajistas';

// instancias jugadores //

let fecha1 = new Date('06-24-1987');
let fecha2 = new Date('10-25-1996');
let fecha3 = new Date('03-15-1988');
let jugador1: Futbolista = new Futbolista("Lionel","Messi",fecha1,3219161030,"Delantero",10);
let jugador2: Futbolista = new Futbolista("Dibu","Martinez",fecha2,2814561789,"Arquero",12);
let jugador3: Futbolista = new Futbolista("Lautaro","Martinez",fecha3,536895240,"Delantero",9);

let arreglo_futbolistas:Futbolista[] = [jugador1,jugador2,jugador3];

let gestorSeleccion: Gestor_futbolista = new Gestor_futbolista(arreglo_futbolistas);

let jugador_nuevo: Futbolista = new Futbolista("Lautaro","Martinez",fecha3,536895240,"Delantero",9);
console.log("-----------");
console.log("buscamos el jugador",jugador_nuevo.toString());
console.log("/////");
let r1:boolean = gestorSeleccion.consultarFutbolista(jugador_nuevo);
console.log("¿existe el jugador? = ",r1);
console.log("/////");

console.log("modificamos numero de camiseta"), 
jugador_nuevo.editarNumCamiseta(33);
console.log("/////");
console.log("El nuevo numero de camiseta del jugador",jugador_nuevo.obtener_nombre(),"",jugador_nuevo.obtener_apellido()," es: ",jugador_nuevo.numeroDeCamiseta());
console.log("/////");
console.log("vemos la lista de jugadores");
console.log(gestorSeleccion.mostrarBaseDeDatosFubolistas());
console.log("-----------");


// instancias entrenadores //

let fecha5 = new Date('12-05-1982');
let fecha6 = new Date('10-20-1979');
let fecha7 = new Date('04-10-1978');
let directorTecnico: Entrenador = new Entrenador("Lionel","Scaloni",fecha5,2219777039,"Argentino",6);
let ayudanteDeCampo: Entrenador = new Entrenador("Pablo","Aimar",fecha6,1914562489,"Argentino",5);
let ayudanteDeCampo_2: Entrenador = new Entrenador("Walter","Samuel",fecha7,536895240,"Argentino",4);
let paramArregloCuerpoTecnico:Entrenador[] = [directorTecnico,ayudanteDeCampo,ayudanteDeCampo_2];

let gestorEntrenadores: Gestor_entrenador = new Gestor_entrenador(paramArregloCuerpoTecnico);

let nuevoEntrenador: Entrenador = new Entrenador("Walter","Samuel",fecha7,536895240,"Argentino",4);
console.log("-----------");
console.log("buscamos si existe el entrenador",nuevoEntrenador.toString());
console.log("/////");
let r2:boolean = gestorEntrenadores.consultarEntrenador(nuevoEntrenador);
console.log("¿existe el entrenador? = ",r2);
console.log("/////");
console.log("Los años de experiancia del entrenador son: ",nuevoEntrenador.experiencia_DT());
console.log("vemos la lista del cuerpo técnico");
console.log(gestorEntrenadores.mostrarBaseDeDatosCuerpoTecnico());
console.log("-----------");

// instancias masajistas //

let fecha8 = new Date('12-05-1972');
let fecha9 = new Date('10-20-1969');
let fecha10 = new Date('04-10-1998');
let fecha11 = new Date('01-21-1980');
let medico: Masajista = new Masajista("Carlos","Angelotti",fecha8,2019039357,"Italiano",26);
let terapeuta: Masajista = new Masajista("Luis","Benitez",fecha9,1112489555,"Argentino",25);
let masajista: Masajista = new Masajista("jose","Perez",fecha10,368952952,"Argentino",5);
let paramArregloCuerpoMedico:Masajista[] = [medico,terapeuta,masajista];

let gestorMasajistas: Gestor_masajista = new Gestor_masajista(paramArregloCuerpoMedico);

let nuevoMasajista: Masajista = new Masajista("Daniel","Gonzalez",fecha11,240536895,"Argentino",14);
console.log("-----------");
console.log("buscamos si existe el integrante del cuerpo médico",nuevoMasajista.toString());
console.log("/////");
let r3:boolean = gestorMasajistas.consultarCuerpoMedico(nuevoMasajista);
console.log("¿existe le medico/masajista? = ",r3);
console.log("/////");
console.log("Los años de experiancia como cuerpo medico deportivo son: ",nuevoMasajista.experiencia_masajista());
console.log("vemos la lista del cuerpo medico");
console.log(gestorMasajistas.mostrarBaseDeDatosCuerpoMedico());
console.log("-----------");
console.log("-----------");