var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Televisor = /** @class */ (function () {
    function Televisor(paramCanal, paramVolumen, paramPrendido) {
        this.canalActual = 0;
        this.volumenActual = 0;
        this.estaPrendido = false;
    }
    Televisor.prototype.getCanal = function () {
        return this.canalActual;
    };
    Televisor.prototype.setCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.getVolumen = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    Televisor.prototype.getPrenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
    };
    return Televisor;
}()); // fin clase televisor ////
var SmartTV = /** @class */ (function (_super) {
    __extends(SmartTV, _super);
    function SmartTV(paramCanal, paramVolumen, paramPrendido) {
        var _this = _super.call(this, paramCanal, paramVolumen, paramPrendido) || this;
        _this.navegarPorInternet = false;
        _this.cantApps = 7;
        return _this;
    }
    SmartTV.prototype.navegar = function () {
        if (this.navegarPorInternet === false) {
            this.navegarPorInternet = true;
        }
        else {
            this.navegarPorInternet = false;
        }
    };
    return SmartTV;
}(Televisor)); // fin clase SmartTV ////
var smart1 = new SmartTV(25, 10, true);
var teleComun = new Televisor(12, 12, true);
console.log(smart1.navegar());
