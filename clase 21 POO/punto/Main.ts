import { Punto } from './Punto';
import { Recta } from './Recta';

let p1 = new Punto(3,2);
let p2 = new Punto(1,2);

let r1 = new Recta(p1,p2);

console.log(r1.toString());
console.log("largo 1 = ", r1.largo(), " cm");

r1.get_puntoFinal().set_y(9);

console.log(r1.toString());

console.log("largo 2 = ", r1.largo(), " cm");