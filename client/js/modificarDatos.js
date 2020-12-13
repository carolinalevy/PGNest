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

async function displayDatos() {

    let usuario = window.sessionStorage.getItem('user');
    let nombre = document.getElementById('inputNombre');
    let apellido = document.getElementById('inputApellido');
    let dni = document.getElementById('inputDNI');
    let telefono = document.getElementById('inputPhone');
    let cobertura = document.getElementById('inputObraSocial');
    let email = document.getElementById('inputEmail');
    let contraseña = document.getElementById('inputPassword');
  
try {
    let response = await fetch("/registrarse/" + usuario);
 
    if (response.ok) {
        
        let t = await response.json();
        nombre.value = t.nombre;
        apellido.value  = t.apellido;
        dni.value  = t.DNI;
        telefono.value  = t.telefono;
        cobertura.value  = t.cobertura;
        email.value  = t.email;
        contraseña.value = t.contraseña;
    
    } else {
        
        nombre.value  = "Error al cargar";
    }

} catch (response) {
    nombre.value  = 'Conection Error!'
}}
   
displayDatos();



let btnModificarDatos = document.getElementById("btn-ModifyDatos");
btnModificarDatos.addEventListener("click", modifyDatos);