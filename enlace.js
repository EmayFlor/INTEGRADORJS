const est=20, jun=85, tra=50, tik=200;


var opcion, numero, precio;


var opcion = document.getElementById("opcion");
var numero = document.getElementById("numero");
var resultado = document.getElementById("resultado");
/*
opcion.addEventListener("change", calcular);
numero.addEventListener("input",calcular);
*/


function calcular(){
  var valorOpcion = parseInt(opcion.value);
  var valorNumero = parseInt(numero.value);
  console.log(opcion.value);
  console.log(numero.value);
  
  if (opcion.value == 1){
    precio = numero.value*tik*est/100;
     } else
    {
     if (opcion.value == 2){
       precio = numero.value*tik*tra/100;
     }
     else
     {
       precio = numero.value*tik*jun/100;
     }
     }
  resultado.innerText = precio;
  console.log(precio);
}