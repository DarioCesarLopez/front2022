
let total=0;

let productos = [];
let precioUnitario =[];
let cantidadDeProducto=[];

let botonAgregar = document.getElementById("agregarProducto");
botonAgregar.addEventListener("click", agregarAlCarrito);

let botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", calcularCompra);

let miLista = document.querySelector(".miLista");


function agregarAlCarrito(){

    let producto = document.querySelector(".productoUnico").value;
    productos.push(producto);

    let precio = parseInt(document.querySelector(".precioUnitario").value);
    precioUnitario.push(precio);

    let cantidad = parseInt(document.querySelector(".cantidad").value);
    cantidadDeProducto.push(cantidad);

    let laLista = document.createElement("li");
    laLista.innerHTML = producto +" - "+ precio+" - "+ cantidad;

    miLista.appendChild(laLista);
}

function calcularCompra(){

    for(let i=0; i<productos.length; i++){
        total = total + parseInt((precioUnitario[i] * cantidadDeProducto[i]));
        }
    document.querySelector("h1").innerHTML = "EL total de su compra es: "+ total+ " pesos";     
}

let botonToggle=document.getElementById("toggleButton");
botonToggle=document.addEventListener("click",toggleButton);

let parrafo=document.getElementById("miParrafo");
parrafo.classList.add("colorAzul");

function toggleButton() {
    document.querySelector("div").classList.toggle("ocultar");

}