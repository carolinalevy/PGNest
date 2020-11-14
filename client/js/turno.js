let listEspecialidad = [];
let listaMedico = [];
let listaHorario = [];


async function loadListEspecialidad() {
    let container = document.getElementById('inputEspecialidad');
    try {
        let response = await fetch("/turno/especialidades");
        if (response.ok) {
            console.log(response);
            let t = await response.json();
            listEspecialidad = t;
            container.innerHTML = mostrarTablaEspecialidad();
        } else {
            container.innerHTML = "Error al cargar";
        }

    } catch (response) {
        container.innerHTML = 'Conection Error!'
    }
}

async function loadListMedico(especialidad) {
    let container = document.getElementById('inputMedico');
    try {
        let response = await fetch("/turno/medico/" + especialidad);
        if (response.ok) {
            console.log(response);
            let t = await response.json();
            listaMedico = t;
            container.innerHTML = mostrarTablaMedico();
        } else {
            container.innerHTML = "Error al cargar";
        }

    } catch (response) {
        container.innerHTML = 'Conection Error!'
    }
}

function mostrarTablaEspecialidad() {
    html = '<option selected>Elegir especialidad...</option> ';
    for (let i = 0; i < listEspecialidad.length; i++) {
        html += `<option value="${listEspecialidad[i].nombreEspecialidad}">${listEspecialidad[i].nombreEspecialidad}</option> `
    }
    return html;
}


function mostrarTablaMedico() {
    let especialidad = document.getElementById('inputEspecialidad').value;
    console.log(especialidad);
    console.log(listaMedico);
    let html = "";
    for (let i = 0; i < listaMedico.length; i++) {
        html += `<option value="${listaMedico[i].nombreMedico}">${listaMedico[i].nombreMedico}</option>`
    }
    return html;
}

loadListEspecialidad();
let btnEspecialidad = document.getElementById("inputEspecialidad");
btnEspecialidad.addEventListener('change', function (e) {
    loadListMedico(e.target.value);
});