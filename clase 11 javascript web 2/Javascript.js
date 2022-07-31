
// boton de agregar lista
let btn_entrale = document.getElementById("btn_entrale");
btn_entrale.addEventListener("click", crearPunto);

// boton de agregar parrafo
let btn_parrafo = document.getElementById("btn_parrafo");
btn_parrafo.addEventListener("click", crearParrafo);

// funcion de agregar elemento a la lista
    function crearPunto() {
        let inputPunto =document.getElementById("agregarPunto");
        let agregarPunto = document.querySelector("ol");
        let nuevoPunto = document.createElement("li");
        nuevoPunto.innerHTML = inputPunto.value;
        agregarPunto.appendChild(nuevoPunto);
        
    }   
// funcion de agregar elemento a la lista
    function crearParrafo() {
        let inputParrafo =document.getElementById("inputParrafo");
        let agregarParrafo = document.getElementById("divParrafo");
        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerHTML = inputParrafo.value;
        agregarParrafo.appendChild(nuevoParrafo);  
    }   