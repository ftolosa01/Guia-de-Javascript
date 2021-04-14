var btn = document.getElementById("btnEnviar");
var GenerarNumero = document.getElementById("GenerarNumero");
var inputNumero1 = document.getElementById("inputNumber1");
var inputNumero2 = document.getElementById("inputNumber2");

btn.addEventListener("click",function(){

    var min = inputNumero1.value;
    var max = inputNumero2.value;
    GenerarNumero.innerHTML = generarnumero(min , max);
   
});

function generarnumero(min, max){    
    var nuemro = Math.round((Math.random() * (max - min)) + min);
     return nuemro;

}