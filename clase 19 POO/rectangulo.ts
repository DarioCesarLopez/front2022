class Rectangulo { // inicio del objeto rectangulo

    base: number;
    altura: number;

    constructor(valor_base:number, valor_altura:number ){
        this.base = valor_base;
        this.altura = valor_altura;
    }

    // armamos los getters y los setters

    public getBase():number {
        return this.base;
    }

    public setBase(vBase:number):number{
        this.base = vBase;
    }

    public getAltura():number {
        return this.altura;
    }

    public setAltura(vAltura:number):number{
        this.altura = vAltura;
    }
        //  Calcular el area
    public getArea():number {
        let area = Number(this.base) * Number(this.altura);
        return area  // area del rectangulo = base por altura
    }

    // Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
    public compararAreas() {
        
        let devolver: number;
            
        if (rectangulo1_1.getArea() == rectanguloAcomparar.getArea()) {
          devolver = 0;
        }
      
        if (rectangulo1_1.getArea() < rectanguloAcomparar.getArea()) {
            return -1;
          }

        if (rectangulo1_1.getArea() > rectanguloAcomparar.getArea()) {
            return 1;
          }
        }    
    
    // Determinar si es un cuadrado (si base y altura son iguales).    
    public esUnCuadrado():boolean {
        
        let esCuadrado = Number(this.base) == Number(this.altura);
        return esCuadrado
    }  

    //Determinar si esta acostado o parado(si el alto es mas que el ancho)
    
    public estaVertical(): boolean {

        let vertical = Number(this.base) < Number(this.altura);
        return vertical
    } 
      

} // fin del objeto rectangulo
  
let rectangulo1_1 = new Rectangulo(8,14);
let rectanguloAcomparar = new Rectangulo(14, 26);


console.log("El area del su figura es", rectangulo1_1.getArea(), "m²");
console.log("El area del rectangulo comparativo es", rectanguloAcomparar.getArea(), "m²");
console.log("La comparacion de las areas es: ", rectangulo1_1.compararAreas());
console.log("¿Su figura es un cuandrado?", rectangulo1_1.esUnCuadrado());
console.log("¿Su figura esta en forma vertical?", rectangulo1_1.estaVertical());





