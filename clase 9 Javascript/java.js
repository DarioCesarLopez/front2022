
let btn_entrale = document.getElementById("btn_entrale");
btn_entrale.addEventListener("click", mostrar);


    function mostrar() {
        let nombre = "anonimo";
        let inputNombre =document.getElementById("inputNombre");
        nombre = inputNombre.value;
        let apellido = "anonimo";
        let inputApellido =document.getElementById("inputApellido");
        apellido = inputApellido.value;
        let edad = "anonimo";
        let inputEdad =document.getElementById("inputEdad");
        edad = inputEdad.value;

        alert("datos del usuario:  "+"  Nombre: "+ nombre+" /  Apellido: "+apellido+" /  Edad " +edad+" años");
    }