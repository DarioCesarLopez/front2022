/*Actividad Obligatoria

Re-implementar la clase que describiste el viernes 09/09/22.
Encapsularla y agregar getters y setters*/
var Lavarropas = /** @class */ (function () {
    // creamos el constructor
    function Lavarropas(marca, serieNumber, prog) {
        this.encendida = true;
        this.marcaComercial = marca;
        this.num_serie = serieNumber;
        this.programa = prog;
    }
    // armamos los getters y los setters
    Lavarropas.prototype.get_encenderApagar = function () {
        var estado_ON = this.encendida;
        var estado_OFF = this.encendida;
        if (this.encendida === true) {
            return estado_ON;
        }
        else
            return estado_OFF;
    };
    Lavarropas.prototype.set_encenderApagar = function (encendida) {
        this.encendida = encendida;
    };
    Lavarropas.prototype.get_programar = function () {
        var programa_actual = 1;
        if (this.programa !== 0 || this.programa < 0) {
            programa_actual = this.programa;
        }
        return programa_actual;
    };
    Lavarropas.prototype.set_subirPrograma = function (programa) {
        this.programa = this.programa++;
    };
    Lavarropas.prototype.set_bajarPrograma = function (programa) {
        this.programa = this.programa--;
    };
    Lavarropas.prototype.get_lavar = function () {
        if (this.encendida)
            this.encendida = false;
        else
            this.encendida = true;
    };
    Lavarropas.prototype.get_secar = function () {
        if (this.encendida)
            this.encendida = false;
        else
            this.encendida = true;
    };
    Lavarropas.prototype.get_marcaComercial = function () {
        return this.marcaComercial;
    };
    Lavarropas.prototype.get_ficha_tecnica = function () {
        return this.marcaComercial.toString();
    };
    Lavarropas.prototype.get_numeroDeSerie = function () {
        return this.num_serie;
    };
    Lavarropas.prototype.tostring = function () {
        var respuesta = "Marca y modelo: " + this.get_marcaComercial() + " Nº serie: " + this.get_numeroDeSerie();
        return respuesta;
    };
    return Lavarropas;
}()); // fin del objeto //////////////
var lavarropas = new Lavarropas("LG Direct Drive 8.5", 1380140076, 5);
console.log("Ficha técnica: ", lavarropas.tostring());
console.log("El lavarropas esta: ", lavarropas.get_encenderApagar());
console.log("El progama de lavado es: ", lavarropas.get_programar());
console.log("NOmbre comercial: ", lavarropas.get_ficha_tecnica());
