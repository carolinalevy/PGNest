
 function displayDatos() {
    let usuario = window.sessionStorage.getItem('user');
    let respuesta = fetch('/obtener-datos/' + usuario)
    console.log(respuesta);

    let nombre = document.getElementById('inputNombre');
    let apellido = document.getElementById('inputApellido');
    let dni = document.getElementById('inputDNI');
    let direccion = document.getElementById('inputDireccion');
    let telefono = document.getElementById('inputPhone');
    let cobertura = document.getElementById('inputObraSocial');
    let email = document.getElementById('inputEmail');

    console.log(respuesta);
    nombre.innerHTML = respuesta.nombre;
    apellido.innerHTML = respuesta.apellido;
    dni.innerHTML = respuesta.dni;
    direccion.innerHTML = respuesta.direccion;
    telefono.innerHTML = respuesta.celular;
    cobertura.innerHTML = respuesta.cobertura;
    email.innerHTML = respuesta.email;
}
// no toma los datos desde el objeto, da undefined

displayDatos();