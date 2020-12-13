
 async function displayDatos() {

    let usuario = window.sessionStorage.getItem('user');
    let nombre = document.getElementById('inputNombre');
    let apellido = document.getElementById('inputApellido');
    let dni = document.getElementById('inputDNI');
    let telefono = document.getElementById('inputPhone');
    let cobertura = document.getElementById('inputObraSocial');
    let email = document.getElementById('inputEmail');
  
try {
    let response = await fetch("/registrarse/" + usuario);
 
    if (response.ok) {
        
        let t = await response.json();
        nombre.innerHTML = t.nombre;
        apellido.innerHTML = t.apellido;
        dni.innerHTML = t.DNI;
        telefono.innerHTML = t.telefono;
        cobertura.innerHTML = t.cobertura;
        email.innerHTML = t.email;
    
    } else {
        nombre.innerHTML = "Error al cargar";
    }

} catch (response) {
    nombre.innerHTML = 'Conection Error!'
}}
   

displayDatos();