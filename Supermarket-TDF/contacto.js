let boton_enviar = document.getElementById("btn_enviar");
boton_enviar.addEventListener("click", enviarFormulario);

let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let consulta = document.getElementById("consulta");



function enviarFormulario() {
    //let nombre = "anonimo";
    let inputNombre =document.getElementById("nombre");
    nombre = inputNombre.value;

    if(nombre.value === null || nombre.value === "" ){
        mensajeError.push("por favor ingresa tu nombre");
    }
    if(email.value === null || email.value === "" ){
        mensajeError.push("por favor ingresa un correo válido");
    }
    if(consulta.value === null || consulta.value === "" ){
        mensajeError.push("por favor ingresa tu consulta o comentario");
    }
   
    alert(nombre + "   " + "muchas gracias por enviar su consulta"+"   "+"pronto nos comunicaremos con usted");
}