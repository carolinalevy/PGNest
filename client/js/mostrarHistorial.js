
async function loadListaTurnos() {
    let usuario = window.sessionStorage.getItem('user');
    
    let response = await fetch("/get-turno/turnos/" + usuario );
    let turnos = await response.json();
    mostrarListaTurnos(turnos);
}

function mostrarListaTurnos(turnos){
    let container = document.getElementById("tblHistorial");    
    let html = "";
    let fechaActual = Date.now();
    for (let i = 0; i < turnos.length; i++) {
        let estado = "Activo";
        let t = turnos[i];
        let btnBorrar = `<button class="btn btn-outline-secondary" idConsulta="${t.iDConsulta}">Cancelar</button>`;
        const miFecha = new Date(t.fecha);
        if(miFecha < fechaActual) {
            estado = "Expiró";
            btnBorrar = "";
        }
        html += `
            <tr>
            <td>${estado}</td>
            <td>${miFecha.toLocaleDateString("es-AR")}</td>
            <td>${t.turno}</td>
            <td>${t.especialidad}</td>
            <td>${t.nombreMedico} ${t.apellidoMedico} </td>
            <td>${btnBorrar}</td>
            </tr>
            `;
    }

    container.innerHTML = html;
    let btnCancelar = document.querySelectorAll(".btn-delete-turno");
    btnCancelar.forEach(e => {
        e.addEventListener("click", btnDeletearTurnos);
    });
}

async function btnDeletearTurnos(){
    let idConsulta = this.getAttribute("idConsulta");
    let response = await fetch(`/guardar-turno/delete/${idConsulta}`, {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json"
    }
    })
    loadListaTurnos();
}


loadListaTurnos();