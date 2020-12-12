async function  displayTurno() {
    let idConsulta = JSON.parse(window.sessionStorage.getItem('turnoNuevo'));
    let respuestaTurno = await fetch("/guardar-turno/turno/" + idConsulta );
    console.log(idConsulta, respuestaTurno);
    let medico = document.getElementById('nombreMedico');
    let fecha = document.getElementById('nombreFecha');
    let horario = document.getElementById('nombreHorario');
    let cobertura = document.getElementById('nombreCobertura');

if (respuestaTurno.ok){
    let respuesta = await respuestaTurno.json();
   
    medico.innerHTML = respuesta.nombreMedico
    fecha.innerHTML = (respuesta.fecha).substring(0,10)
    horario.innerHTML = respuesta.horario

} 
}


displayTurno();