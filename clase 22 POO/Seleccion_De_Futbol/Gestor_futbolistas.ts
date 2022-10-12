import { Futbolista } from './Futbolistas';

export class Gestor_futbolista {

    private listaDeFutbolistas:Futbolista[];
  
    constructor(paramArregloFutbolistas:Futbolista[]){
        this.listaDeFutbolistas = paramArregloFutbolistas;
    }
  
    mostrarBaseDeDatosFubolistas(){
  
        this.listaDeFutbolistas.forEach(object =>{
            console.log(object);
        });
    }
  
    // usamos la clase Futbolista como tipo
    consultarFutbolista(nombreParametro:Futbolista):boolean{
        let existe: boolean = false;
        let posicion: number = -1;
  
        for(let i:number = 0; i < this.listaDeFutbolistas.length; i++){
            if(nombreParametro.obtener_nombre() == this.listaDeFutbolistas[i].obtener_nombre()){
                posicion = i;
                existe = true;
            }
        }
        return existe;
    }
  
    modificarDorsal(dorsal:number) {
      let pos:number =-1;
      for(let i:number = 0; i < this.listaDeFutbolistas.length; i++){
          if(this.listaDeFutbolistas[i].numeroDeCamiseta()==dorsal)
          pos = i;
      }
      this.listaDeFutbolistas[pos].editarNumCamiseta(dorsal);
    }

    public agregarFutbolista(jugador_nuevo:Futbolista): void{
        this.listaDeFutbolistas.push(jugador_nuevo);
    }
  
  
  } // fin gestor futbolistas /////////////////
  