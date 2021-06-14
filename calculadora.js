const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual");
const botonDelete = document.getElementsByName("data-delete");
//SE CREAN LAS VARIABLES CON EL NOMBRE DE LOS BOTONES
//PARA LUEGO CREAR LAS FUNCIONES 
var result = document.getElementById("result");

//SE RECORRE CON EACH Y SE CREA UNA FUNCION LUEGO SE ENTREGA EL PARAMETRO DEL BOTON SELECCIONADO
botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText)
       
    })
})

botonOpera.forEach(function (boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText)
        
    })
})

botonIgual.addEventListener("click",function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
})