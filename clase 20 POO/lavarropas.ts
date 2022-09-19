/*Actividad Obligatoria

Re-implementar la clase que describiste el viernes 09/09/22.
Encapsularla y agregar getters y setters*/


class Lavarropas { // inicio del objeto
    //atributos
    private encendida : boolean;
    private programa: number;
    private marcaComercial: string;
    private num_serie: number;

// creamos el constructor
    constructor(marca:string,serieNumber:number,prog:number){
        this.encendida = true;
        this.marcaComercial =  marca;
        this.num_serie = serieNumber;
        this.programa = prog;
    }

// armamos los getters y los setters

   public get_encenderApagar(): boolean {
    
    let estado_ON = this.encendida;
    let estado_OFF =this.encendida;
    if (this.encendida === true) {
        return estado_ON;
    } else
        return estado_OFF;
    }

    public set_encenderApagar(encendida:boolean) {
        this.encendida = encendida;
    }

    public get_programar(): number {

        let programa_actual: number = 1;

        if(this.programa !== 0 || this.programa < 0) {
            programa_actual = this.programa
        }
        return programa_actual;
       }

    public set_subirPrograma(programa:number): void {
       this.programa = this.programa ++;
    }

    public set_bajarPrograma(programa:number): void {
        this.programa = this.programa --;
     }
    
    public get_lavar():void {

        if (this.encendida)
            this.encendida = false
        else
             this.encendida = true
    }

    public get_secar() {
        if (this.encendida)
        this.encendida = false
    else
        this.encendida = true
    }

    public get_marcaComercial():string {
        return this.marcaComercial;
    }
   
    public get_ficha_tecnica():string {
        return this.marcaComercial.toString();
    }

    public get_numeroDeSerie(): number {
        return this.num_serie
    }

    public tostring():string{
        let respuesta:string = "Marca y modelo: " + this.get_marcaComercial() + " Nº serie: "+ this.get_numeroDeSerie();
        return respuesta;    
    }

} // fin del objeto //////////////

let lavarropas = new Lavarropas("LG Direct Drive 8.5",1380140076, 5);

console.log("Ficha técnica: ",lavarropas.tostring());
console.log("El lavarropas esta: ",lavarropas.get_encenderApagar());
console.log("El progama de lavado es: ",lavarropas.get_programar());
console.log("NOmbre comercial: ",lavarropas.get_ficha_tecnica());







