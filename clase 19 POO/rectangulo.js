var Rectangulo = /** @class */ (function () {
    function Rectangulo(valor_base, valor_altura) {
        this.base = valor_base;
        this.altura = valor_altura;
    }
    // armamos los getters y los setters
    Rectangulo.prototype.getBase = function () {
        return this.base;
    };
    Rectangulo.prototype.setBase = function (vBase) {
        this.base = vBase;
    };
    Rectangulo.prototype.getAltura = function () {
        return this.altura;
    };
    Rectangulo.prototype.setAltura = function (vAltura) {
        this.altura = vAltura;
    };
    //  Calcular el area
    Rectangulo.prototype.getArea = function () {
        var area = Number(this.base) * Number(this.altura);
        return area; // area del rectangulo = base por altura
    };
    // Compararlo con otro rectangulo. Devolver 1 si es mayor, 0 son iguales y -1 si es menor.
    Rectangulo.prototype.compararAreas = function () {
        var devolver;
        if (rectangulo1_1.getArea() == rectanguloAcomparar.getArea()) {
            devolver = 0;
        }
        if (rectangulo1_1.getArea() < rectanguloAcomparar.getArea()) {
            return -1;
        }
        if (rectangulo1_1.getArea() > rectanguloAcomparar.getArea()) {
            return 1;
        }
    };
    // Determinar si es un cuadrado (si base y altura son iguales).    
    Rectangulo.prototype.esUnCuadrado = function () {
        var esCuadrado = Number(this.base) == Number(this.altura);
        return esCuadrado;
    };
    //Determinar si esta acostado o parado(si el alto es mas que el ancho)
    Rectangulo.prototype.estaVertical = function () {
        var vertical = Number(this.base) < Number(this.altura);
        return vertical;
    };
    return Rectangulo;
}()); // fin del objeto rectangulo
var rectangulo1_1 = new Rectangulo(8, 14);
var rectanguloAcomparar = new Rectangulo(14, 26);
console.log("El area del su figura es", rectangulo1_1.getArea(), "m²");
console.log("El area del rectangulo comparativo es", rectanguloAcomparar.getArea(), "m²");
console.log("La comparacion de las areas es: ", rectangulo1_1.compararAreas());
console.log("¿Su figura es un cuandrado?", rectangulo1_1.esUnCuadrado());
console.log("¿Su figura esta en forma vertical?", rectangulo1_1.estaVertical());
