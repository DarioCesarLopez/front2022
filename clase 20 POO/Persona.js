var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, nacionalidad, dni, fecha_nacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.contador_nacionalidad = 0;
        this.fecha_nacimiento = fecha_nacimiento;
    }
    // declaro los getters y setters
    Persona.prototype.get_nombre = function () {
        return this.nombre;
    };
    Persona.prototype.set_nombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.get_apellido = function () {
        return this.apellido;
    };
    Persona.prototype.set_apellido = function (apellido) {
        this.apellido = apellido;
    };
    Persona.prototype.get_fecha_nacimiento = function () {
        return this.fecha_nacimiento.toString();
    };
    Persona.prototype.set_fecha_nacimiento = function (fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    };
    Persona.prototype.get_nacionalidad = function () {
        if (this, this.contador_nacionalidad < 1)
            return this.nacionalidad;
        else
            return this.nacionalidad + " / " + this.segunda_nacionalidad;
    };
    Persona.prototype.set_nacionalidad = function (nacionalidad) {
        if (this, this.contador_nacionalidad < 1) {
            this.contador_nacionalidad++;
            this.segunda_nacionalidad = nacionalidad;
            console.log("nacionalidad cambiada o agregada");
        }
        else {
            console.log("No puede cambiar la nacionalidad");
        }
    };
    Persona.prototype.get_dni = function () {
        return this.dni;
    };
    //set_dni(dni:number) { //quitamos el seteo del DNI por seguridad
    //    this.dni = dni;
    //} 
    Persona.prototype.get_edad = function () {
        var hoy = new Date();
        return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
    };
    Persona.prototype.tostring = function () {
        var respuesta = this.get_nombre() + " " + this.get_apellido() + " Nº DNI: " + this.get_dni();
        return respuesta;
    };
    return Persona;
}()); // fin clase Persona
// creamos los objetos 
var fecha = new Date('06-24-1986');
var persona01 = new Persona("Lautaro", "Martinez", "Argentino", 36542999, fecha);
var persona02 = new Persona("Lionel", "Messi", "Argentino", 33101010, fecha);
console.log(persona02.get_nombre());
console.log(persona02.get_apellido());
console.log(persona02.get_fecha_nacimiento());
console.log(persona02.get_dni());
console.log(persona02.get_edad());
console.log(persona02.tostring());
