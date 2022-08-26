const botonComprar = document.getElementById("btn_comprar");
botonComprar.addEventListener("click", comprar);

const divProductos = document.getElementById("div-productos");

let total=0;
// arrgeglo de precios
let precioArticulo = [910, 1050, 670, 665, 790, 1225, 480];
// arreglo de productos
let productos = ["vino Alma Mora malbec 750 cc","Alfajor Tatín - caja","Yerba Rosamonte 1kg","Aceite de girasol","Queso Saint Pauli 1kg","Rollo paple cocina Ultra","Dulce de Arandanos" ];
// arreglo de stock de productos
let stock = [26, 23, 19, 11, 16, 15, 22];


// let botonAgregar = document.getElementById("btn_agregar");
// botonAgregar?.addEventListener("click", agregar);


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
    divProductos?.appendChild(div_items)
    }
}

function comprar(){
    for (let i = 0; i < stock.length; i++) {
      let cantidad = document.getElementById(`cantidad-${i}`);
      let cantElegidda = Number(cantidad.value);
      if (cantElegidda > 0) {
        console.log(
          `Ha comprado ${cantElegidda} unidades de: ${productos[i]}`
        );
        total += precioArticulo[i] * cantElegidda;
      }
    }
    if (total > 0) {
      console.log(`EL total de su compra es: $${total}`);
    } else {
      console.log(`El valor de la celda no puede ser cero`);
    }

    document.querySelector("h4").innerHTML = "EL total de su compra es: $ "+`${total}`;

    //et totalDeCompra = document.createElement("h3");
    //totalDeCompra.innerHTML =  
    //totalDeCompra.appendChild(`${total}`);
    //document.querySelector("h1").innerHTML
   

  };
  
  // aqui veremos los artículos disponibles en el html..
  // window.addEventListener("load", agregarAlCarrito);
  window.onload = agregarAlCarrito();
 





