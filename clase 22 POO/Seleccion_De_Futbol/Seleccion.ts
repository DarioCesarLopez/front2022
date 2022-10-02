export  class Seleccion {
        private nombre: string;
        private apellido: string;
        private fecha_nacimiento: Date;
        private pasaporte: number;


        constructor(nombrePam:string,apellidoPam:string,fecha_nacimientoPam:Date,pasaportePam:number) {
            this.nombre = nombrePam;
            this.apellido = apellidoPam;
            this.pasaporte = pasaportePam;
            this.fecha_nacimiento = fecha_nacimientoPam;
        }

        public obtener_nombre(): string {
            return this.nombre;
        }
        public modificar_nombre(nombre:string) {
            this.nombre = nombre;
        }

        public obtener_apellido(): string {
            return this.apellido;
        }
        public modificar_apellido(apellido:string) {
            this.apellido = apellido;
        } 
        
        public fechaDeNacimiento():string {
            return this.fecha_nacimiento.toString();
        }
    
        public numero_pasaporte(): number {
            return this.pasaporte;
        }
    
        public edad():number {
            let hoy:Date = new Date();
            return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();  
        }

        public toString():string{
            let respuesta:string = this.obtener_nombre() + " " + this.obtener_apellido() + " Nº pasaporte: "+ this.numero_pasaporte();
            return respuesta;
        }  

} // fin clase seleccion ///



