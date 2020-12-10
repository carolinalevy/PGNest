async function saveTurno() {
    let dia = document.getElementById('inputFecha').value;
    let horarioId = document.getElementById('inputHorario').value;
    let medicoId = document.getElementById('inputMedico').value;
    let especialidad = document.getElementById('inputEspecialidad').value;
    let cobertura = document.getElementById('inputCoberturaMedica').value;
    let userMail = window.sessionStorage.getItem('user');


    let nuevoTurno = {
        "dia": dia,
        "horarioId": horarioId,
        "medicoId": medicoId,
        "especialidad": especialidad,
        "cobertura": cobertura,
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
        window.sessionStorage.setItem('turnoNuevo', stringTurno);
        window.location.href= "http://localhost:3000/paginaTurnoAsignado.html";
    };
}

let btnConfirmarTurno = document.getElementById('btn-confirmarTurno');
btnConfirmarTurno.addEventListener("click", saveTurno);