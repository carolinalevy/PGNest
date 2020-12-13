async function saveTurno() {
    let dia = document.getElementById('inputFecha').value;
    let horarioId = document.getElementById('inputHorario').value;
    let medicoId = document.getElementById('inputMedico').value;
    let especialidad = document.getElementById('inputEspecialidad').value;
    let userMail = window.sessionStorage.getItem('user');


    let nuevoTurno = {
        "dia": dia,
        "horarioId": horarioId,
        "medicoId": medicoId,
        "especialidad": especialidad,
        "userEmail": userMail
    } 
    let stringTurno = JSON.stringify(nuevoTurno);

    let response = await fetch("/guardar-turno/turno-nuevo", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: stringTurno
    }
    );
    console.log(response);
    if (response.ok) {
        let respuesta =await response.json();
        console.log(respuesta);
        window.sessionStorage.setItem('turnoNuevo', respuesta.idConsulta);
        window.location.href= "http://localhost:3000/paginaTurnoAsignado.html";
    };
}

let btnConfirmarTurno = document.getElementById('btn-confirmarTurno');
btnConfirmarTurno.addEventListener("click", saveTurno);