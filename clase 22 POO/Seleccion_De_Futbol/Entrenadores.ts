import { Seleccion } from './Seleccion';

export class Entrenador extends Seleccion {

    private nacionalidad: string;
    private aniosDeExperiencia: number;

    constructor(nombrePam:string,apellidoPam:string,fecha_nacimientoPam:string,pasaportePam:number,nacionalidad:string,experiencia:number){
        super(nombrePam,apellidoPam,fecha_nacimientoPam,pasaportePam);
        this.nacionalidad = nacionalidad;
        this.aniosDeExperiencia = experiencia;
    }

    public nacionalidad_DT():string{
        return this.nacionalidad;
    }
    public editar_nacionalidad_DT(nacionalidad:string){
        this.nacionalidad = nacionalidad;
    }
    public experiencia_DT():number{
        return this.aniosDeExperiencia;
    }
    public editar_experiencia_DT(aniosDeExperiencia:number){
        this.aniosDeExperiencia = aniosDeExperiencia;
    }
}// fin clase entrenador //

   