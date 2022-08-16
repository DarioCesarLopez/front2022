
let cantidadDeVeces18 =0;
let cantidadDeVeces3 =0; 

let btnLanzar = document.getElementById("lanzar");
btnLanzar.addEventListener("click", lanzarDados);

function lanzarDados(){
    let dadoA=0;
    let dadoB=0;
    let dadoC=0;

    for( let i=0; i<3000; i++){
        dadoA= Math.floor((Math.random()*(6 - 1 + 1))+1);
        dadoB= Math.floor((Math.random()*(6 - 1 + 1))+1);
        dadoC= Math.floor((Math.random()*(6 - 1 + 1))+1);

        if(dadoA + dadoB + dadoC === 18){
            cantidadDeVeces18++
        }

        if(dadoA + dadoB + dadoC === 3){
            cantidadDeVeces3++
        }

    }
    document.getElementById("resultado1").innerHTML = "cant de veves 18 = "+ cantidadDeVeces18;
    cantidadDeVeces18=0;

    document.getElementById("resultado2").innerHTML = "cant de veves 3 = "+ cantidadDeVeces3;
    cantidadDeVeces3=0;
}

