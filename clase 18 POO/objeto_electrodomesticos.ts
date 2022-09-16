class Electrodomestico {
    //atributos
    private nombre : string;
    private precioBase: number;
    private color: string;
    private consumoElectrico: boolean;
    private peso: number;


    constructor(parNombre:string, parPrecioBase:number, parColor:string, parConsumiElec:boolean, parPeso:number){
        this.nombre = parNombre;
        this.precioBase = parPrecioBase;
        this.color = parColor;
        this.consumoElectrico = parConsumiElec;
        this.peso = parPeso;
    }

    // porgramar getters y setters

    public verNombre():string {
        return this.nombre;
    }

    public verPrecio():number {
        return this.precioBase;
    }

    public verColor():string {
        return this.color
    }

    public getConsumoElectrico():boolean {
        if (this.consumoElectrico < 10000) //valor indicativo / comparativo
        return true;  //retornos
        else
        return false; //retornos
        } 
   
    public getPeso(peso:number):void { //con esta formula tomamos el valor peso y lo añadimos a la funcion
        this.peso = peso; 
        }
    
    public verBalance(): number {
        let balance = Number(this.precioBase) / Number(this.peso);
        return balance  // balance = precio / peso del producto
    }

    public getGamaPruducto(): string {   
        let gamaDelProducto: string =""; // buscamos un retorno el string

        if(this.verBalance() >=3)  // funcion con valor comparativo ">03"
            gamaDelProducto = "Gama Alta"; // retorno buscado en string

            return gamaDelProducto;  //retorno
    
    }             
}

let electrodomesticos = new Electrodomestico("Lavaropas LG",35600,"Gris onix",9000,165)

console.log(electrodomesticos.verNombre());
console.log(electrodomesticos.verColor());
console.log(electrodomesticos.verPrecio());
console.log(electrodomesticos.getConsumoElectrico());
console.log(electrodomesticos.verBalance()); // no hace falta que le cliente vea el balance
console.log(electrodomesticos.getGamaPruducto());
