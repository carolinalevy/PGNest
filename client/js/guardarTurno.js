async function saveTurno() {
    let dia = document.getElementById('inputFecha').value;
    let horario = document.getElementById('inputHorario').value;
    let medico = document.getElementById('inputMedico').value;
    let especialidad = document.getElementById('inputEspecialidad').value;
    let cobertura = document.getElementById('inputCoberturaMedica').value;

    let nuevoTurno = {
        "dia": dia,
        "horario": horario,
        "medico": medico,
        "especialidad": especialidad,
        "cobertura": cobertura
    }
    let stringTurno = JSON.stringify(nuevoTurno);

    let response = await fetch("/guardar-turno", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: stringTurno
    }
    );
    if (response.ok) {
        window.sessionStorage.setItem('turnoNuevo', stringTurno);
        window.location.href= "http://localhost:3000/paginaTurnoAsignado.html";
    };
}

let btnConfirmarTurno = document.getElementById('btn-confirmarTurno');
btnConfirmarTurno.addEventListener("click", saveTurno);