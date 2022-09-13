
class Lavarropas {
    //atributos
    encendida : boolean;
    programa: number;
    marcaComercial: string;
    num_serie: number;


    constructor(marca:string,serieNumber:number,prog:number){
        this.encendida = true;
        this.marcaComercial =  marca;
        this.num_serie = serieNumber;
        this.programa = prog;
    }


   encender_apagar(): boolean {
    if (this.encendida === false) {
        console.log("Oprima el boton de encendido");
    }
    else (this.encendida === true);{
        console.log("Elija un programa");
     }  
    }

    seleccionar_programa(): number {
        console.log('lavar en programa Nº: ','',this.programa);
       }
    

    lavar() {
        if (this.encendida === false) {
            console.log("Oprima el boton Start");
        }
        else (this.encendida === true);{
            console.log("Elija programa de lavado");
         }  
            console.log('Lavando');   
    }

    secar() {
        if (this.encendida === false) {
            console.log("Oprima el boton Secado");
        }
        else (this.encendida === true);{
            console.log("Elija programa de secado");
         }  
            console.log('Secando');   
    }
   
    ficha_tecnica(){
        console.log('Marca y modelo ',this.marcaComercial, 'Número de serie ',this.num_serie);
    }

    funcioando(){
        console.log('En funcionamiento'); 
    }
}

let lavarropas = new Lavarropas("LG Direct Drive 8.5",13801400, 5);
lavarropas.seleccionar_programa();
lavarropas.lavar();
lavarropas.secar();
lavarropas.funcioando();
lavarropas.ficha_tecnica();

console.log(lavarropas.marcaComercial);
console.log(lavarropas.num_serie);
