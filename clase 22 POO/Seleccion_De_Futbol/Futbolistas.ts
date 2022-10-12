import { Seleccion } from './Seleccion';

export class Futbolista extends Seleccion {

    private posicion: string;
    private dorsal: number; //numero de camiseta

    constructor(nombrePam:string,apellidoPam:string,fecha_nacimientoPam:string,pasaportePam:number,posicion:string,dorsal:number){
        super(nombrePam,apellidoPam,fecha_nacimientoPam,pasaportePam);
        this.posicion = posicion;
        this.dorsal = dorsal;
    }

    

    public numeroDeCamiseta(): number{
        return this.dorsal;
    }
    public editarNumCamiseta(dorsal:number){
        this.dorsal = dorsal;
    }

    public mostrarPosicion():string{
        return this.posicion;
    }

    public editarPosicion(posicion:string){
        this.posicion = posicion;
    }

    public toString():string{
        let respuesta:string = this.obtener_nombre() + " " + this.obtener_apellido() + " Nº camista: "+ this.numeroDeCamiseta();
        return respuesta;
    }

    

} // fin clase futbolista //

