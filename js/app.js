let nombre = document.getElementById('nombre').value;
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

// funcion calculo de masa corporal

function calculoIMC(){

    nombre;
    peso;
    altura;

    let imc = peso / (altura * altura).toFixed(2);

    if(imc < 18.5){
        alert(`hola ${nombre} su IMC es ${imc} usted tiene Bajo Peso`);
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert(`hola ${nombre} su IMC es ${imc} usted se encuentra normal`);
    }
    else if(imc >= 25 && imc <= 29.9){
        alert(`hola ${nombre} su IMC es ${imc} usted tiene SobrePeso`);
    }

}

let boton = document.getElementById('boton');

boton.onclick = calculoIMC;