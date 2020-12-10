async function validar() {
    let dni = document.getElementById("inputDNI").value;
    let email = document.getElementById("inputEmail").value;
    let contraseña = document.getElementById("inputPassword").value;
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let direccion = document.getElementById("inputAddress").value;
    let telefono = document.getElementById("inputPhone").value;
    let cobertura = document.getElementById("inputObraSocial").value;

    // e.preventDefault();
    // let check = false;
    // if (email == "" || email == null) {
    //     document.getElementById('inputEmail').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (dni == "" || dni == null) {
    //     document.getElementById('inputEmail').style.borderColor = "black";
    //     document.getElementById('inputDNI').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (password == "" || password == null) {
    //     document.getElementById('inputPassword').style.borderColor = "#ff0000";
    //     check = true;
    // }


    // if (nombre == "" || nombre == null) {
    //     document.getElementById('inputNombre').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (apellido == "" || apellido == null) {
    //     document.getElementById('inputApellido').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (telefono == "" || telefono == null) {
    //     document.getElementById('inputPhone').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (direccion == "" || direccion == null) {
    //     document.getElementById('inputAddress').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (cobertura == "" || cobertura == null) {
    //     document.getElementById('inputObraSocial').style.borderColor = "#ff0000";
    //     check = true;
    // }

    // if (check == false) {
        let nuevoRegistro = {
            "DNI": dni,
            "email": email,
            "nombre": nombre,
            "apellido": apellido,
            "telefono": telefono,
            "cobertura": cobertura,
            "contraseña": contraseña
        }    
        let stringDatos = JSON.stringify(nuevoRegistro);
    
        let response = await fetch("/registrarse/crear-registro", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: stringDatos,
        });
         stringUser
        if (response.ok) 
            window.sessionStorage.setItem('userLogged', true);
            window.sessionStorage.setItem('user', stringDatos.email);
            window.sessionStorage.setItem('datosNuevos', stringDatos);
            window.location.href = "http://localhost:3000/pagina1.html";
    }


let btnRegistro = document.getElementById("btn-registro");
btnRegistro.addEventListener("click", validar);