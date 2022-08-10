let listaTareas = document.getElementById("listaTareas");


// boton de agregar elemento a la lista
let btnGuardar = document.getElementById("btn_guardar");
btnGuardar.addEventListener("click", crearTarea);

// boton de borrar lista
let btnBorrar = document.getElementById("btn_borrar");
btnBorrar.addEventListener("click", borrarLista);

// funcion de agregar elemento a la lista
function crearTarea(){
    let inputTarea = document.getElementById("agregarTarea");
    let agregarTarea = document.querySelector("ol");
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = inputTarea.value;
    agregarTarea.appendChild(nuevaTarea);
    document.querySelector("ol").classList.add("azul_negrita")
}

// funcion de borra la lista
function borrarLista(){
    listaTareas.innerHTML = " ";

    //document.querySelector("ol").classList.toggle("ocultar");
}