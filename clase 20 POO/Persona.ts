class Persona {
    private nombre: string;
    private apellido: string;
    private fecha_nacimiento: Date;

    private nacionalidad: string;
    private segunda_nacionalidad: string;
    private contador_nacionalidad: number;

    private dni: number;

    constructor(nombre:string,apellido:string,nacionalidad:string,dni:number,fecha_nacimiento:Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.dni = dni;
        this.contador_nacionalidad = 0;
        this.fecha_nacimiento = fecha_nacimiento;

    }

    // declaro los getters y setters

    public get_nombre(): string {
        return this.nombre;
    }
    public set_nombre(nombre:string) {
        this.nombre = nombre;
    }

    public get_apellido(): string {
        return this.apellido;
    }
    public set_apellido(apellido:string) {
        this.apellido = apellido;
    } 
    

    public get_fecha_nacimiento():string {
        return this.fecha_nacimiento.toString();
    }
    public set_fecha_nacimiento(fecha_nacimiento:Date) {
        this.fecha_nacimiento = fecha_nacimiento;
    }
    
    public get_nacionalidad(): string {
        if (this.contador_nacionalidad < 1)
            return this.nacionalidad;
        else
            return this.nacionalidad + " / " + this.segunda_nacionalidad;    
    }

    public set_nacionalidad(nacionalidad:string) {
        if (this.contador_nacionalidad < 1){ 
            this.contador_nacionalidad++;
            this.segunda_nacionalidad = nacionalidad;
            console.log("nacionalidad cambiada o agregada");}
        else {
            console.log("No puede cambiar la nacionalidad");
        }    
    } 

    public get_dni(): number {
        return this.dni;
    }
    //set_dni(dni:number) { //quitamos el seteo del DNI por seguridad
    //    this.dni = dni;
    //} 

    public get_edad():number {
        let hoy:Date = new Date();
        return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();
        
    }

    public tostring():string{
        let respuesta:string = this.get_nombre() + " " + this.get_apellido() + " Nº DNI: "+ this.get_dni();
        return respuesta;
    }

} // fin clase Persona

// creamos los objetos 

let fecha = new Date('06-24-1986');

let persona01 = new Persona("Lautaro","Martinez","Argentino",36542999,fecha);
let persona02 = new Persona("Lionel","Messi","Argentino",33101010,fecha);



console.log(persona02.get_nombre());
console.log(persona02.get_apellido());
console.log(persona02.get_fecha_nacimiento());

console.log(persona02.get_dni());

console.log(persona02.get_edad());

console.log(persona02.tostring());


