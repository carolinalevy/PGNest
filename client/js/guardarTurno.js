async function saveTurno() {
    let dia = document.getElementById('inputFecha').value;
    let horario = document.getElementById('inputHorario').value;
    let medico = document.getElementById('inputMedico').value;
    let especialidad = document.getElementById('inputEspecialidad').value;

    let nuevoTurno = {
        "dia": dia,
        "horario": horario,
        "medico": medico,
        "especialidad": especialidad
    }

    let response = await fetch("/guardar-turno", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(nuevoTurno)
    }
    );
    if (response.ok) {
        window.location.href= "http://localhost:3000/paginaTurnoAsignado.html";
    };
}

let btnConfirmarTurno = document.getElementById('btn-confirmarTurno');
btnConfirmarTurno.addEventListener("click", saveTurno);