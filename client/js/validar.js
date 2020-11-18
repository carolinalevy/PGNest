let form = document.getElementById('form')

let especialidad = document.getElementById('inputEspecialidad');


function validarNombre(e){
    if(especialidad.value == '' || especialidad.value == null){
        especialidad.style.borderColor="red";
        e.preventDefault();
    }
}

validarNombre(e);
