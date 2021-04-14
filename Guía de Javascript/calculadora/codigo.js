var btn = document.getElementById("btn");
var btnrestar = document.getElementById("btnrestar");
var btnmultiplicar = document.getElementById("btnmultiplicar");
var btndividir = document.getElementById("btndividir");
var resultado = document.getElementById("resultado")
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btn.addEventListener("click",function(){

var n1 = inputUno.value;
var n2 = inputDos.value;

resultado.innerHTML = suma(n1,n2);
});
btnrestar.addEventListener("click",function(){

    var n1 = inputUno.value;
    var n2 = inputDos.value;

    resultado.innerHTML = restar(n1,n2);
});
btnmultiplicar.addEventListener("click",function(){

        var n1 = inputUno.value;
        var n2 = inputDos.value;

        resultado.innerHTML = multiplicar(n1,n2);
});
btndividir.addEventListener("click",function(){

    var n1 = inputUno.value;
    var n2 = inputDos.value;

    resultado.innerHTML = dividir(n1,n2);
});   
function suma(n1, n2){

return parseInt(n1) + parseInt(n2);
}
function restar(n1, n2){
    
    return parseInt(n1) - parseInt(n2);
}
function multiplicar(n1, n2){
    return parseInt(n1) * parseInt(n2);
}
function dividir(n1, n2){
        if(n1 == 0|| n2 == 0){
            return alert(" Error divicion por 0");
        }else
        return parseInt(n1) / parseInt(n2);
}

    