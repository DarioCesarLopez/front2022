/*Armar una base de datos de libros:
Implementar la clase Libro
Implementar la clase GestorLibros → debe soportar insertar/consultar libros. 
(Esta clase puede estar "compuesta" por un arreglo de libros)*/

export class Libro {
    private nombre: string;
    private autor: string;
    private genero: string;
    private precio: number;

    constructor (nombreLibro:string,autorLibro:string,generoLibro:string,precioLibro:number){
        this.nombre = nombreLibro;
        this.autor = autorLibro;
        this.genero = generoLibro;
        this.precio = precioLibro;    
    }

    nombre_libro():string{
        return this.nombre;
    }
    cambiar_nombre_libro(libroNombre:string){
        this.nombre = libroNombre;
    }
    nombre_autor():string{
        return this.autor;
    }
    cambiar_autor_libro(autorNuevo:string){
        this.autor = autorNuevo;
    }
    genero_libro():string{
        return this.genero;
    }
    cambiar_genero_libro(nuevoGenero:string){
        this.genero = nuevoGenero;
    }
    precio_libro():number{
        return this.precio;
    }
    cambiar_precio_libro(nuevoPrecio:number){
        this.precio = nuevoPrecio;
    }
    toString():string {
        return '(' + this.nombre + ' , ' + this.genero + ' , ' + this.autor + ' , ' + this.precio + ')';
    }

} // Fin de la clase libro /////////////////

export class GestorLibros {

    private listadoDeLibros: Libro[];

    constructor(parametroArregloLibros:Libro[]){
        this.listadoDeLibros = parametroArregloLibros;
    }
// usamos la clase libro como tipo
    consultarLibro(libroParametro:Libro):boolean{
        let existe: boolean = false;
        let posicion: number = -1;

        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                posicion = i;
                existe = true;
            }
        }
        return existe;
    }
    consultarPosicion(libroParametro:Libro): number {
        let posicion: number = -1;

        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                posicion = i;
            }
        }
        return posicion;
    }
    registrarNuevoLibro(libroParametro:Libro):void {
        this.listadoDeLibros.push(libroParametro);
    }
    editarLibro(posicion:number,nombreParam:string,autorParam:string,generoParam:string,precioParam:number){
        this.listadoDeLibros[posicion].cambiar_nombre_libro(nombreParam);
        this.listadoDeLibros[posicion].cambiar_autor_libro(autorParam);
        this.listadoDeLibros[posicion].cambiar_genero_libro(generoParam);
        this.listadoDeLibros[posicion].cambiar_precio_libro(precioParam);
    }

    eliminarLibro(libroParametro:Libro):void{
        for(let i:number = 0; i < this.listadoDeLibros.length; i++){
            if(libroParametro.nombre_libro() == this.listadoDeLibros[i].nombre_libro()){
                this.listadoDeLibros.splice(i,1);
            }
        }
    }
    

} // Fin de la clase gestor libros ////////////////////