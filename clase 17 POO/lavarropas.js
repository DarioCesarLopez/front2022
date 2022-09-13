var Lavarropas = /** @class */ (function () {
    function Lavarropas(marca, serieNumber, prog) {
        this.encendida = true;
        this.marcaComercial = marca;
        this.num_serie = serieNumber;
        this.programa = prog;
    }
    Lavarropas.prototype.encender_apagar = function () {
        if (this.encendida === false) {
            console.log("Oprima el boton de encendido");
        }
        else
            (this.encendida === true);
        {
            console.log("Elija un programa");
        }
    };
    Lavarropas.prototype.seleccionar_programa = function () {
        console.log('lavar en programa Nº: ', '', this.programa);
    };
    Lavarropas.prototype.lavar = function () {
        if (this.encendida === false) {
            console.log("Oprima el boton Start");
        }
        else
            (this.encendida === true);
        {
            console.log("Elija programa de lavado");
        }
        console.log('Lavando');
    };
    Lavarropas.prototype.secar = function () {
        if (this.encendida === false) {
            console.log("Oprima el boton Secado");
        }
        else
            (this.encendida === true);
        {
            console.log("Elija programa de secado");
        }
        console.log('Secando');
    };
    Lavarropas.prototype.ficha_tecnica = function () {
        console.log('Marca y modelo ', this.marcaComercial, 'Número de serie ', this.num_serie);
    };
    Lavarropas.prototype.funcioando = function () {
        console.log('En funcionamiento');
    };
    return Lavarropas;
}());
var lavarropas = new Lavarropas("LG Direct Drive 8.5", 13801400, 5);
lavarropas.seleccionar_programa();
lavarropas.lavar();
lavarropas.secar();
lavarropas.funcioando();
lavarropas.ficha_tecnica();
console.log(lavarropas.marcaComercial);
console.log(lavarropas.num_serie);
