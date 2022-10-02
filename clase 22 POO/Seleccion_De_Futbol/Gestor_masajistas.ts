import { Masajista } from './Masajistas';

export class Gestor_masajista {

    private listaCuerpoMedico:Masajista[];
  
    constructor(paramArregloCuerpoMedico:Masajista[]){
        this.listaCuerpoMedico = paramArregloCuerpoMedico;
    }
  
    mostrarBaseDeDatosCuerpoMedico(){
  
        this.listaCuerpoMedico.forEach(object =>{
            console.log(object);
        });
    }
  
    // usamos la clase como tipo
    consultarCuerpoMedico(nombreParametro:Masajista):boolean{
        let existe: boolean = false;
        let posicion: number = -1;
  
        for(let i:number = 0; i < this.listaCuerpoMedico.length; i++){
            if(nombreParametro.obtener_nombre() == this.listaCuerpoMedico[i].obtener_nombre()){
                posicion = i;
                existe = true;
            }
        }
        return existe;
    }

    experienciaCuerpoMedico(exp:number){
        let anios:number = 0;
        for(let i:number = 0; i < this.listaCuerpoMedico.length; i++)
            if(this.listaCuerpoMedico[i].experiencia_masajista()== anios)
        return anios
      }
  
  } // fin clase gestor masajista //