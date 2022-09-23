var Auto = /** @class */ (function () {
    function Auto(marcaParam, modeloParam, patenteParam, yearParam) {
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
        this.year = yearParam;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (pPatente) {
        this.patente = pPatente;
    };
    Auto.prototype.setYear = function (yearParam) {
        this.year = yearParam;
    };
    Auto.prototype.getYear = function () {
        return this.year;
    };
    return Auto;
}()); // fin clase objeto auto
var RegistroAutomor = /** @class */ (function () {
    function RegistroAutomor(parametroArregloDeAutos) {
        this.listadoDeAutos = parametroArregloDeAutos;
    }
    // usamos la clase auto como tipo
    RegistroAutomor.prototype.buscarAuto = function (autoParam) {
        var existe = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (autoParam.getPatente() === this.listadoDeAutos[i].getPatente()) {
                posicion = i;
                existe = true;
            }
        }
        console.log(posicion);
        return existe;
    };
    RegistroAutomor.prototype.registrar_Nuevo_Vehiculo = function (autoParam) {
        this.listadoDeAutos.push(autoParam);
    };
    RegistroAutomor.prototype.eliminarVehiculo = function (autoParam) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (autoParam.getPatente() === this.listadoDeAutos[i].getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomor.prototype.editarVehiculo = function (posicion, marcaParametro, modeloParametro, patenteParametro, yearParametro) {
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
        this.listadoDeAutos[posicion].setModelo(modeloParametro);
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this.listadoDeAutos[posicion].setYear(yearParametro);
    };
    return RegistroAutomor;
}()); // fin clase objeto registro automotor
var autoDeMarcos = new Auto("ford", "fiesta", "AB123CD", 2019);
var autoDeMelina = new Auto("vw", "gol", "AB001FS", 2018);
var autoDeJose = new Auto("chevrolet", "astra", "AA951WE", 2017);
var autoNuevo = new Auto("AUDI", "A3", "AF181FR", 2021);
var arregloDeAutosParaRegistrarEnTDF = [autoDeJose, autoDeMarcos, autoDeMelina];
var registroAutomotorTierraDelFuego = new RegistroAutomor(arregloDeAutosParaRegistrarEnTDF);
//metodo para saber si el auto esta registrado. (No lo encuentra porque no esta registrado)
console.log("primera busqueda del vehículo");
var respuesta = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta);
// metodo para registrarlo
registroAutomotorTierraDelFuego.registrar_Nuevo_Vehiculo(autoNuevo);
// uso otro metodo para saber si el auto esta registrado (lo busco nuevamente)
console.log("segunda busqueda");
var respuesta_2 = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta_2);
// metodo para EDITAR datos del vehículo
console.log("edito el auto nuevo porque lo registre erroneamente");
registroAutomotorTierraDelFuego.editarVehiculo(3, "AUDI", "A1", "AF181AF", 2022);
// metodo para ELIMINAR un vehículo del registro
registroAutomotorTierraDelFuego.eliminarVehiculo(autoNuevo);
// volvemos a consultar si existe el vehículo para saber si se elimino correctamente.
var respuesta_3 = registroAutomotorTierraDelFuego.buscarAuto(autoNuevo);
console.log(respuesta_3);
