//JS para comprobación de datos del formulario de entrada




//Inicialización de variables y objetos
const botonJugar = document.getElementById ("jugar");
const nickInput = document.getElementById ("nick");
const tamanoInput = document.getElementById ("tamano");
const formEntrada = document.getElementById ("formEntrada");
const error = document.getElementById ("error");


//Funciones de evento

function comprobarForm (event){
    //Comprobar cambios
    if (nickInput.value.length==0){
        console.log("No hay nick");
        nickInput.focus();
        event.preventDefault();
        error.innerText= "El campo de nick no puede estar vacío";
        return false;
    }
    else if(tamanoInput.value == "0"){
        console.log('No se ha seleccionado tamaño del panel')
        event.preventDefault();
        tamanoInput.focus();
        error.innerText= "Se debe seleccionar un tamaño de panel";
        return false;
    }
    return true;

}

// Inicio de carga de eventos
formEntrada.addEventListener('submit', comprobarForm);