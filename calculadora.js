const botonNumeros = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual");
const botonDelete = document.getElementsByName("data-delete");
//SE CREAN LAS VARIABLES CON EL NOMBRE DE LOS BOTONES
//PARA LUEGO CREAR LAS FUNCIONES 
var result = document.getElementById("result");
//ESTAS 3 VARIABLES NOS AYUDARAN CON LA LOGICA DEL PROGRAMA
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;

//SE RECORRE CON EACH Y SE CREA UNA FUNCION LUEGO SE ENTREGA EL PARAMETRO DEL BOTON SELECCIONADO
botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
       
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
        
    }) //ACA SE DEFINIERON LOS EVENETOS
});

botonIgual.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener("click", function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(opeActual === "") return;
    if(opeAnterior !== ""){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = "";
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = "";
}



function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
//SE AGREGA LOS NUMEROS AMEDIDA QUE SE VAN ESCRIBIENDO
}

function clear(){
    opeActual = "";
    opeAnterior = "";
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}
clear();