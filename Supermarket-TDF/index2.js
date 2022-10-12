const botonComprar = document.getElementById("btn_comprar");
botonComprar.addEventListener("click", comprar);

const divProductos = document.getElementById("div-productos");

let total=0;
let lista = 0;
// arrgeglo de precios
let precioArticulo = [910, 1050, 670, 665, 790, 1225, 480];
// arreglo de productos
let productos = ["vino Alma Mora malbec 750 cc","Alfajor Tatín - caja","Yerba Rosamonte 1kg","Aceite de girasol","Queso Saint Pauli 1kg","Rollo paple cocina Ultra","Dulce de Arandanos" ];
// arreglo de stock de productos
let stock = [26, 23, 19, 11, 16, 15, 22];


// funcion par ver los productos disponibles (se cargan desde los arreglos)
function agregarAlCarrito(){
    for(let i=0;i<stock.length;i++) {

    // creamos el vid contenedor para los productos / artículos
    let div_items = document.createElement("div");
    div_items.classList.add("articulo");
    div_items.id = `producto-${i}`; 

    // creamos el texto "p" nombre de los productos
    let nombreProducto = document.createElement("p");
    nombreProducto.innerHTML = productos[i];
    
    // creamos el texto "p" con los precios de los productos
    let precioProducto = document.createElement("p");
    precioProducto.innerHTML = `$${precioArticulo[i]}`;

    // creamos un imput para seleccionar la cantidas a comprar, 
    // le damos tipado numero y un length del largo del arreglo stock,
    // y un minimo de cero para que no se pueda ingresar números negativos
    let cantidad = document.createElement("input");
    cantidad.id = `cantidad-${i}`;
    cantidad.type = "number";
    cantidad.max = String(stock[i]);
    cantidad.min = "0";

    // creamos los elementos en el HTML
    div_items.appendChild(nombreProducto);
    div_items.appendChild(precioProducto);
    div_items.appendChild(cantidad);
    divProductos.appendChild(div_items)
    }
}


// creamos la funcion compar
function comprar(){

  let elementosDelCarrito=[];
  

    for (let i = 0; i < stock.length; i++) {
      let cantidad = document.getElementById(`cantidad-${i}`);
      let cantElegida = Number(cantidad.value);
      if (cantElegida > 0) {
        
        console.log(
          `Ha comprado ${cantElegida} unidades de: ${productos[i]}`
        );    
        document.querySelector("h5").innerHTML = "Ha comprado" +" "+ `${cantElegida}`+" " + "unidades de: " + `${productos[i]}` +" "+"- precio unitario:"+" $"+precioArticulo[i];
        
        total += precioArticulo[i] * cantElegida;
    
      }
    }
    if (total > 0) {
      console.log(`EL total de su compra es: $${total}`);
    } else {
      console.log(`El valor de la celda no puede ser cero`);
    }

    document.querySelector("h4").innerHTML = "Gracias por comprar con nosotros!! El total de su compra es: $ "+`${total}`;
    
    function agregarAlCarro () {
      let elementoAlCarrito = document.getElementById("div-productos").value;
      elementosDelCarrito.push(elementoAlCarrito);
    }
      
    function mostrarCarro () {
      let resultado = document.getElementById("resultado"); 

        for ( const elementoAlCarrito of elementosDelCarrito) {
          let datoParrafo = document.createElement("p");
          datoParrafo.innerText = elementoAlCarrito;

          resultado.appendChild(datoParrafo);
        }
    }

}  
  
  // aqui veremos los artículos disponibles en el html..

  window.onload = agregarAlCarrito();
 
