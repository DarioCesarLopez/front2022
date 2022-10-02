import { Entrenador } from './Entrenadores';

export class Gestor_entrenador {

    private listaCuerpoTecnico:Entrenador[];
  
    constructor(paramArregloCuerpoTecnico:Entrenador[]){
        this.listaCuerpoTecnico = paramArregloCuerpoTecnico;
    }
  
    mostrarBaseDeDatosCuerpoTecnico(){
  
        this.listaCuerpoTecnico.forEach(object =>{
            console.log(object);
        });
    }
  
    // usamos la clase como tipo
    consultarEntrenador(nombreParametro:Entrenador):boolean{
        let existe: boolean = false;
        let posicion: number = -1;
  
        for(let i:number = 0; i < this.listaCuerpoTecnico.length; i++){
            if(nombreParametro.obtener_nombre() == this.listaCuerpoTecnico[i].obtener_nombre()){
                posicion = i;
                existe = true;
            }
        }
        return existe;
    }

    consultarExperiencia(exp:number){
        let anios:number = 0;
        for(let i:number = 0; i < this.listaCuerpoTecnico.length; i++)
            if(this.listaCuerpoTecnico[i].experiencia_DT()== anios)
        return anios
      }
  
  } // fin clase gestor entrenador //