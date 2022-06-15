var seleccion=document.querySelectorAll(".preguntas");
var flechas=document.querySelectorAll(".boton");
var seccionRespuestas=document.querySelectorAll(".respuesta");


seleccion.forEach(function(item,indice){

item.addEventListener('click', function(){  
item.classList.toggle("bold");
flechas[indice].classList.toggle("flechaArriba");
seccionRespuestas[indice].classList.toggle("on");

});
});

