import { Seleccion } from './Seleccion';

export class Masajista extends Seleccion {

    private nacionalidad: string;
    private aniosDeExperiencia: number;

    constructor(nombrePam:string,apellidoPam:string,fecha_nacimientoPam:string,pasaportePam:number,nacionalidad:string,experiencia:number){
        super(nombrePam,apellidoPam,fecha_nacimientoPam,pasaportePam);
        this.nacionalidad = nacionalidad;
        this.aniosDeExperiencia = experiencia;
    }

    public nacionalidad_masajista():string{
        return this.nacionalidad;
    }
    public editar_nacionalidad_masajista(nacionalidad:string){
        this.nacionalidad = nacionalidad;
    }
    public experiencia_masajista():number{
        return this.aniosDeExperiencia;
    }
    public editar_experiencia_masajista(aniosDeExperiencia:number){
        this.aniosDeExperiencia = aniosDeExperiencia;
    }

} // fin clase masajista//