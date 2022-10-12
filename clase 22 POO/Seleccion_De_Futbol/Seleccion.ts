 
export  class Seleccion {
        private nombre: string;
        private apellido: string;
        private fecha_nacimiento:Date;
        private pasaporte: number;


        constructor(nombrePam:string,apellidoPam:string,fecha_nacimientoPam:string,pasaportePam:number) {
            this.nombre = nombrePam;
            this.apellido = apellidoPam;
            this.pasaporte = pasaportePam;
            this.fecha_nacimiento = new Date (fecha_nacimientoPam)
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
        
        public getFechaDeNacimiento():Date {  // FECHA DE NACIMIENTO 1
            return this.fecha_nacimiento;
        }

        public getFechaNacimiento(): string{    // FECHA DE NACIMIENTO 2    this.fecha_nacimiento
            let fecha = new Date();
            return fecha.toLocaleDateString();
        }
  
        public numero_pasaporte(): number {
            return this.pasaporte;
        }
    
        public get_edad(){
            let hoy:Date = new Date();
            return hoy.getFullYear() - this.fecha_nacimiento.getFullYear();  
        }

        public toString():string{
            let respuesta:string = this.obtener_nombre() + " " + this.obtener_apellido() + " Nº pasaporte: "+ this.numero_pasaporte();
            return respuesta;
        }  

} // fin clase seleccion ///



