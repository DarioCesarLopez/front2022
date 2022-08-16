let resultado =0;

let botonSumar = document.getElementById("btn_sumar");
botonSumar.addEventListener("click", sumarNumeros);

let botonRestar = document.getElementById("btn_restar");
botonRestar.addEventListener("click", restarNumeros);

let num1=document.getElementById("numero1");

let num2=document.getElementById("numero2");

function sumarNumeros(){
    
    suma = parseInt(num1.value) + parseInt(num2.value); 
   
    document.getElementById("resultado").innerHTML = "La suma es ="+ suma;
    document.querySelector("h1").classList.add("colorMarron");
}

function restarNumeros(){
   
    resta = parseInt(num1.value) - parseInt(num2.value); 
   
    document.getElementById("resultado").innerHTML = "La resta es ="+ resta;
    document.querySelector("h1").classList.add("colorAzul");

}
