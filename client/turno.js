let listEspecialidad = [];
let listaMedico = [];
let listaHorario = [];


async function loadListEspecialidad() {
    let container = document.getElementById('#inputEspecialidad');
    try {
        let response = await fetch("./turno");
        if (response.ok) {
            let t = await response.json();
            listEspecialidad = t;
            mostrarTablaEspecialidad();
        } else {
            container.innerHTML = "Error al cargar";
        }

    } catch (response) {
        container.innerHTML = 'Conection Error!'
    }
}

function mostrarTablaEspecialidad(){
    html = '';

    for(let i =0; i<listEspecialidad; i++){
        html += `
        <option selected>Elegir especialidad...</option>
                          <option value="1">${listEspecialidad[0]}</option>
                          <option value="2">${listEspecialidad[1]}</option>
                          <option value="3">${listEspecialidad[2]}</option>
                          <option value="4">${listEspecialidad[3]}</option>
                          <option value="5">${listEspecialidad[4]}</option>
                          <option value="6">${listEspecialidad[5]}</option>
                          <option value="7">${listEspecialidad[6]}</option>
                          <option value="8">${listEspecialidad[7]}</option>
                          <option value="9">${listEspecialidad[8]}</option>`
    }
}

loadListEspecialidad();