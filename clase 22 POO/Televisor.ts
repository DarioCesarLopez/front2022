class Televisor {

    private canalActual: number;
    private volumenActual: number;
    private estaPrendido: boolean;

    public constructor(paramCanal:number,paramVolumen:number,paramPrendido:boolean){
        this.canalActual = 0;
        this.volumenActual = 0;
        this.estaPrendido = false;
    }

    public getCanal(){
       return this.canalActual
    }
    public setCanal(canal:number){
        this.canalActual = canal;
    }
    public getVolumen(){
        return this.volumenActual;
    }
    public setVolumen(volumen:number){
        this.volumenActual = volumen;
    }
    public getPrenderApagar():void {
        if (this.estaPrendido === true) {
            this.estaPrendido = true;
        } else {
            this.estaPrendido = false;
        }
    }

} // fin clase televisor ////


class SmartTV extends Televisor {

    private navegarPorInternet: boolean;
    private cantApps: number;

    constructor(paramCanal:number,paramVolumen:number,paramPrendido:boolean){
        super(paramCanal,paramVolumen,paramPrendido);
        this.navegarPorInternet = false;
        this.cantApps = 7;
    }

    public navegar(): void{
        if(this.navegarPorInternet === false){
            this.navegarPorInternet = true;
        }else {
            this.navegarPorInternet = false;
         }
    } 
}// fin clase SmartTV ////

let smart1: SmartTV = new SmartTV(25,10,true);
let teleComun: Televisor = new Televisor(12,12,true);


console.log(smart1.navegar());
