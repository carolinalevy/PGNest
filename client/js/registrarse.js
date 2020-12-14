async function validar(e) {
    let dni = document.getElementById("inputDNI");
    let email = document.getElementById("inputEmail");
    let contraseña = document.getElementById("inputPassword");
    let nombre = document.getElementById("inputNombre");
    let apellido = document.getElementById("inputApellido");
    let telefono = document.getElementById("inputPhone");
    let cobertura = document.getElementById("inputObraSocial");

    e.preventDefault();
    let check = false;
    if (cobertura.value == "" || cobertura.value == null) {
        cobertura.focus();
        check = true;
    }

    check;
    
    if (telefono.value == "" || telefono.value == null) {
        telefono.focus();
        check = true;
    }

    check;

    if (dni.value == "" || dni.value == null) {
        dni.focus();
        check = true;
    }

    check;

    if (apellido.value == "" || apellido.value == null) {
        apellido.focus();
        check = true;
    }

    check;
    
    if (nombre.value == "" || nombre.value == null) {
        nombre.focus();
        check = true;
    }

    check;

    if (contraseña.value == "" || contraseña.value == null) {
        contraseña.focus();
        check = true;
    }
    
    check;

    if (email.value == "" || email.value == null) {
        email.focus();
        check = true;
    }

    check;

 
    if (check == false) {
        let nuevoRegistro = {
            "DNI": dni.value,
            "email": email.value,
            "nombre": nombre.value,
            "apellido": apellido.value,
            "telefono": telefono.value,
            "cobertura": cobertura.value,
            "contraseña": contraseña.value
        }    
        let stringDatos = JSON.stringify(nuevoRegistro);
    
        let response = await fetch("/registrarse/crear-registro", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringDatos,
        });
    
        if (response.ok) 
            window.sessionStorage.setItem('userLogged', true);
            window.sessionStorage.setItem('user', stringDatos.email);
            window.sessionStorage.setItem('datosNuevos', stringDatos);
            window.location.href = "http://localhost:3000/pagina1.html";
    }

}
let btnRegistro = document.getElementById("btn-registro");
btnRegistro.addEventListener("click", validar);