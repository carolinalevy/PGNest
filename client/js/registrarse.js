async function saveInfo() {
    let dni = document.querySelector("#inputDNI").value;
    let email = document.querySelector("#inputEmail").value;
    let password = document.querySelector("#inputPassword").value;
    let nombre = document.querySelector("#inputNombre").value;
    let apellido = document.querySelector("#inputApellido").value;
    let direccion = document.querySelector("#inputAddress").value;
    let telefono = document.querySelector("#inputPhone").value;
    let cobertura = document.querySelector("#inputObraSocial").value;

    let nuevoRegistro = {
        "dni": dni,
        "email": email,
        "password": password,
        "nombre": nombre,
        "apellido": apellido,
        "direccion": direccion,
        "celular": telefono,
        "cobertura": cobertura
    }

    let stringDatos = JSON.stringify(nuevoRegistro);

    let response = await fetch("/registrarse", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: stringDatos
    }
    );
    if (response.ok) {
        window.sessionStorage.setItem('userLogged', true);
        window.sessionStorage.setItem('user', stringDatos.email);
        window.sessionStorage.setItem('datosNuevos', stringDatos);
        window.location.href= "http://localhost:3000/pagina1.html";
    }
}

let btnRegistro = document.getElementById("btn-registro");
btnRegistro.addEventListener("click", saveInfo);
