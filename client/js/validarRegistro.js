let correo = document.getElementById('inputEmail');


function validarCorreo(e){
    if(correo.value == '' ||correo.value == null){
        correo.style.borderColor="red";
        e.preventDefault();
    }
}

validarNombre(e);

let btnRegistro = document.getElementById('btn-registro');
btnRegistro.addEventListener('click',validarCorreo);