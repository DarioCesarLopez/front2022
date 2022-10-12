const formDetalle = document.getElementById("formDetalle");
let inputCantidad = document.getElementById("inputCantidad");
let selectDescripcion = document.getElementById("selectDescripcion");
let inputPunitario = document.getElementById("inputPunitario");
let inputPtotal = document.getElementById("inputPtotal");
let cuerpoTabla = document.getElementById("cuerpoTabla");
//const botonComprar = document.getElementById("btn_comprar");
//botonComprar.addEventListener("click", compraTotal);

let arregloDetalle = [];
let arregloProductos = [{
  id:1, nombre:"vino Alma Mora malbec 750 cc", precio:910,stock:62,},
  {id:2,nombre:"Alfajor Tatín",precio:35,stock:230,},
  {id:3,nombre:"Yerba Rosamonte 1kg",precio:670,stock:190,},
  {id:4,nombre:"Aceite de girasol",precio:965,stock:120,},
  {id:5,nombre:"Queso Saint Pauli 1kg",precio:1150,stock:80,},
  {id:6,nombre:"Rollo paple cocina Ultra",precio:1225,stock:200,},
  {id:7,nombre:"Dulce de Arandanos",precio:440,stock:222,}
];

let reduce = arregloProductos.reduce((acumulador, actual) => acumulador.precio, 0);
console.log(reduce);

const lleanarProductos =()=>{
  arregloProductos.forEach((p)=>{
    let option = document.createElement("option");
    option.value = p.id;
    option.innerText = p.nombre;
    selectDescripcion.appendChild(option);
    })
}
lleanarProductos();

// fucion para ver el nombre del producto en la tabla.
const getNombreProductoById =(id)=>{
  const objProducto = arregloProductos.find((p)=>{
      if(p.id === +id ){
        return p;
      }
  })
  return objProducto.nombre;
}
// funcion para que el precio unitario y el precio total se coloquen de manera automatica
const getPrecioProductoById =(id)=>{
  const objProducto = arregloProductos.find((p)=>{
      if(p.id === +id ){
        return p;
      }
  })
  return objProducto.precio;
}

const redibujarTabla=()=>{
  cuerpoTabla.innerHTML= "";
  arregloDetalle.forEach((detalle)=>{
    let fila=document.createElement("tr");
    fila.innerHTML=`<td>${detalle.cant}</td>
                    <td>${getNombreProductoById(detalle.descripcion)}</td>
                    <td>${detalle.pUnit}</td>
                    <td>${detalle.pTotal}</td>`;
    let tdEliminar = document.createElement("td");              
    let botonEmilinar = document.createElement("button");
    botonEmilinar.classList.add("btn_eliminar");
    botonEmilinar.innerText = "Eliminar";

    botonEmilinar.onclick=()=>{
      eliminaDetalleById(detalle.descripcion); //Eliminamos el detalle de la compra por si Id..
    }

    tdEliminar.appendChild(botonEmilinar);
    fila.appendChild(tdEliminar);
    cuerpoTabla.appendChild(fila);
  })
}

const eliminaDetalleById =(id)=>{
  arregloDetalle = arregloDetalle.filter((detalle)=>{
    if(+id !== +detalle.descripcion){
      return detalle;
    }
  });
  redibujarTabla()
}


let agregarDetalle = (objDetalle) =>{
  // buscar si el objeto detalle ya existía en el arregloDetalle,
  // de ser así, sumar las cantidades para que solo aprarezca una sola vez en la tabla y arreglo

  // estas lineas de codigo sirven para buscar si el detalle de la compra ya esta en el arreglo
  let resultado = arregloDetalle.find((detalle)=>{
    if(+objDetalle.descripcion === +detalle.descripcion){
      return detalle;
    }
  });
  
  if(resultado){ 
// si existe el producto/detalle mapea el valor de la cantidad y el precio total
  arregloDetalle = arregloDetalle.map((detalle)=>{
    if(+detalle.descripcion === +objDetalle.descripcion){
      return {
        cant: +detalle.cant + +objDetalle.cant,
        descripcion:detalle.descripcion,
        pTotal: (+detalle.cant + +objDetalle.cant) + detalle.pUnit,
        pUnit:+detalle.pUnit,
      }
    }
    return detalle;
    });
  } else {  
    arregloDetalle.push(objDetalle);
  // si NO existe el producto/detalle lo que va a hacer es agregar el 
  // nuevo producto/detalle al arreglo como una nueva fila.
  }
  
 };

formDetalle.onsubmit = (e)=>{
  e.preventDefault();
  // creamos un objeto temporal llamado objDetalle
  const objDetalle = {
    cant: inputCantidad.value,
    descripcion: selectDescripcion.value,
    pUnit: inputPunitario.value,
    pTotal: inputPtotal.value,
  }

  agregarDetalle(objDetalle); // el objDetalle se lo llama en la funcion agregarDetalle()
  
  console.log(arregloDetalle);
  redibujarTabla();
};

selectDescripcion.onchange =()=>{
  if(selectDescripcion.value == "0") {
    formDetalle.reset();
    return;
  }

  let precio = getPrecioProductoById(selectDescripcion.value);
  if(precio){
    inputPunitario.value = precio;
    calcularTotal();
  }
};

const calcularTotal=()=>{
  let cantidad = +inputCantidad.value;
  let pUnit = + inputPunitario.value;
  let total = cantidad * pUnit;
  inputPtotal.value = total.toFixed(2);
};

inputCantidad.onkeyup=()=>{
  calcularTotal();
};
inputCantidad.onchange=()=>{
  calcularTotal();
}

/* calculamos el total de la compra

const totalCompra=()=>{
  let cantidad = +arregloDetalle.cant[i];
  let pUnit = + arregloDetalle.precio[i];
  let total = cantidad[i] * pUnit[i];
  total = total.forEach();
};

// falta calcular el total de la compra.*/
