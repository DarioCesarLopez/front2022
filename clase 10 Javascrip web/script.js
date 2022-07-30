


let nombre =document.getElementById("ingresarNombre");
nombre.addEventListener("input",mostrarHolder);



let arregloA=[];

for (let i = 0; i < 3; i++) {
    arregloA[i] = nombre;
}

function mostrarArreglo(){
    console.log(arregloA);
}



function mostrarHolder(){
   console.log(nombre.value);
}

