var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(parNombre, parPrecioBase, parColor, parConsumiElec, parPeso) {
        this.nombre = parNombre;
        this.precioBase = parPrecioBase;
        this.color = parColor;
        this.consumoElectrico = parConsumiElec;
        this.peso = parPeso;
    }
    // porgramar getters y setters
    Electrodomestico.prototype.verNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.verPrecio = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.verColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getConsumoElectrico = function () {
        if (this.consumoElectrico < 10000)
            return true;
        else
            return false;
    };
    Electrodomestico.prototype.getPeso = function (peso) {
        this.peso = peso;
    };
    Electrodomestico.prototype.verBalance = function () {
        var balance = Number(this.precioBase) / Number(this.peso);
        return balance;
    };
    Electrodomestico.prototype.getGamaPruducto = function () {
        var gamaDelProducto = "";
        if (this.verBalance() >= 3)
            gamaDelProducto = "Gama Alta";
        return gamaDelProducto;
    };
    return Electrodomestico;
}());
var electrodomesticos = new Electrodomestico("Lavaropas LG", 35600, "Gris onix", 9000, 165);
console.log(electrodomesticos.verNombre());
console.log(electrodomesticos.verColor());
console.log(electrodomesticos.verPrecio());
console.log(electrodomesticos.getConsumoElectrico());
console.log(electrodomesticos.verBalance());
console.log(electrodomesticos.getGamaPruducto());
