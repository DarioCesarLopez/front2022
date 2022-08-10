
let cantidadDeVeces7 =0;

let btnlanzar = document.getElementById("botonlanzar");
btnlanzar.addEventListener("click", lanzar);

function lanzar(){
    let dado1=0;
    let dado2=0;

    for (let i=0; i<1000; i++){
        dado1= Math.floor((Math.random()*(6 - 1 +1))+1);
        dado2= Math.floor((Math.random()*(6 - 1 +1))+1);

        if(dado1 + dado2 === 7){
            cantidadDeVeces7++
        }
    }
    document.getElementById("resultados").innerHTML = "La cant de veces que salio 7 es: "+ cantidadDeVeces7;
    cantidadDeVeces7=0;
}