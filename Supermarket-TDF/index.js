
// tomamos los elementos del formulario de contactos.html

const saludo = document.getElementById("saludo");

let boton = document.getElementById("btn_enviar");
boton.addEventListener("click",enviarConsulta);

function enviarConsulta() {
    let nombre_user = document.getElementById("nombre");
    let agregarSaludo = document.querySelector("div");
    let saludo_form_completo = document.createElement("h4");
    saludo_form_completo.innerHTML = nombre_user.value;
    agregarSaludo.appendChild(saludo_form_completo);

    document.querySelector("h4").innerHTML ="saludo";

    console.log(saludo);

}

/*function enviarConsulta() {
    let nombre_user;
    let email_user;
   
    let inputNombre = document.getElementById("nombre");
    nombre_user.innerHTML = inputNombre.value;
}
*/

//NO FDUNCIONA EL SALUDO -- VER DESPUES /



//document.getElementById("saludo").innerHTML = nombre_user + "cant de vev";
