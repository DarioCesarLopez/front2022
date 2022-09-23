class Auto{
    private marca:string;
    private modelo:string;
    private patente:string;
    private year: number;

    constructor(marcaParam:string,modeloParam:string,patenteParam:string, yearParam:number) {
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
        this.year = yearParam;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(pMarca:string):void{
        this.marca = pMarca;
    }
    public getModelo():string{
        return this.modelo;
    }
    public setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }
    public getPatente():string{
        return this.patente;
    }
    public setPatente(pPatente:string):void{
        this.patente = pPatente;
    }

    public setYear(yearParam:number):void{
        this.year = yearParam;
    }
    public getYear():number{
        return this.year;
    }    

} // fin clase objeto auto

class RegistroAutomor{

    private listadoDeAutos: Auto[]; 

    constructor(parametroArregloDeAutos:Auto[]){
        this.listadoDeAutos = parametroArregloDeAutos;
    }
            // usamos la clase auto como tipo
    public buscarAuto(autoParam:Auto):boolean {
        let existe: boolean = false 
        
        let posicion:number = -1;
        
        for(let i:number = 0; i<this.listadoDeAutos.length;i++){
            if(autoParam.getPatente() === this.listadoDeAutos[i].getPatente()){
                posicion = i;
                existe = true
            }
        }
            console.log(posicion);
            return existe;
        }

    public registrar_Nuevo_Vehiculo(autoParam:Auto):void{
           this.listadoDeAutos.push(autoParam); 
    }


    public eliminarVehiculo(autoParam:Auto):void{
        for(let i:number = 0; i<this.listadoDeAutos.length;i++){
            if(autoParam.getPatente() === this.listadoDeAutos[i].getPatente()){
                this.listadoDeAutos.splice(i,1);
            }
        }
    }

    editarVehiculo(posicion:number,marcaParametro:string, modeloParametro:string, patenteParametro:string, yearParametro:number):void{
        
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
        this.listadoDeAutos[posicion].setModelo(modeloParametro);
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this.listadoDeAutos[posicion].setYear(yearParametro);
    }

} // fin clase objeto registro automotor

let autoDeMarcos: Auto = new Auto("ford","fiesta","AB123CD",2019);
let autoDeMelina: Auto = new Auto("vw","gol","AB001FS", 2018);
let autoDeJose: Auto = new Auto("chevrolet","astra","AA951WE", 2017);

let autoNuevo: Auto = new Auto("AUDI","A3","AF181FR",2021);

let arregloDeAutosParaRegistrarEnTDF:Auto[] = [autoDeJose,autoDeMarcos,autoDeMelina];

let registroAutomotorTierraDelFuego: RegistroAutomor = new RegistroAutomor(arregloDeAutosParaRegistrarEnTDF);

//metodo para saber si el auto esta registrado. (No lo encuentra porque no esta registrado)
console.log("primera busqueda del vehículo");
let respuesta:boolean = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta);

// metodo para registrarlo
registroAutomotorTierraDelFuego.registrar_Nuevo_Vehiculo(autoNuevo);

// uso otro metodo para saber si el auto esta registrado (lo busco nuevamente)
console.log("segunda busqueda");
let respuesta_2: boolean = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta_2);

// metodo para EDITAR datos del vehículo
console.log("edito el auto nuevo porque lo registre erroneamente");
registroAutomotorTierraDelFuego.editarVehiculo(3,"AUDI", "A1", "AF181AF",2022);

// metodo para ELIMINAR un vehículo del registro
registroAutomotorTierraDelFuego.eliminarVehiculo(autoNuevo);

// volvemos a consultar si existe el vehículo para saber si se elimino correctamente.
let respuesta_3: boolean = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta_3);

