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

function mostrarTablaEspecialidad(){
    html = '<option selected>Elegir especialidad...</option> ';
    for(let i =0; i<listEspecialidad.length; i++){
        html += `<option value="${i+1}">${listEspecialidad[i].nombreEspecialidad}</option> `
    }
    return html;
}

loadListEspecialidad();