async function saveInfo() {
    let email = document.querySelector("#inputEmail").value;
    let password = document.querySelector("#inputPassword").value;
    let nombre = document.querySelector("#inputNombre").value;
    let apellido = document.querySelector("#inputApellido").value;
    let dni = document.querySelector("#inputDNI").value;
    let direccion = document.querySelector("#inputAddress").value;
    let telefono = document.querySelector("#inputPhone").value;
    let cobertura = document.querySelector("#inputObraSocial").value;

    let nuevoRegistro = {
        "email": email,
        "password": password,
        "nombre": nombre,
        "apellido": apellido,
        "dni": dni,
        "direccion": direccion,
        "telefono": telefono,
        "cobertura": cobertura
    }

    let response = await fetch("http://localhost:3000/registrarse", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoRegistro)
    })

    if (response.ok) {
        // let t = await response.json();
        // console.log(t);
        window.location.href= "httpo://http://localhost:3000/pagina1.html";
    }
}

function mostrarInput(){
    console.log(password,nombre,apellido,
        direccion,telefono,cobertura,dni)
}

let btnRegistro = document.getElementById("btn-registro");
btnRegistro.addEventListener("click", saveInfo, mostrarInput);
