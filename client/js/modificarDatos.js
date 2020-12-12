
async function modifyDatos(){
    let usuario = window.sessionStorage.getItem('user');
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let dni = document.getElementById('inputDNI').value;
    let telefono = document.getElementById('inputPhone').value;
    let cobertura = document.getElementById('inputObraSocial').value;
    let email = document.getElementById('inputEmail').value;
    let contraseña = document.getElementById('inputPassword').value;

    let datosModificados = {
        "nombre": nombre, 
        "apellido": apellido,
        "DNI": dni,
        "telefono": telefono,
        "cobertura": cobertura,
        "email": email,
        "contraseña": contraseña
    }

    let stringDatos = JSON.stringify(datosModificados);

    let response = await fetch('/registrarse/' + usuario, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: stringDatos
    }
    );
    console.log(response);
    if (response.ok) {
        let t = await response.json();
        nombre.innerHTML = t.nombre;
        apellido.innerHTML = t.apellido;
        dni.innerHTML = t.DNI;
        telefono.innerHTML = t.telefono;
        cobertura.innerHTML = t.cobertura;
        email.innerHTML = t.email;
    }
}


let btnModificarDatos = document.getElementById("btn-ModifyDatos");
btnModificarDatos.addEventListener("click", modifyDatos);