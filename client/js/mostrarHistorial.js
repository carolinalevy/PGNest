
async function loadListaTurnos() {
    let usuario = window.sessionStorage.getItem('user');
    
    let response = await fetch("/get-turno/turnos/" + usuario );
    let turnos = await response.json();
    mostrarListaTurnos(turnos);
}

function mostrarListaTurnos(turnos){
    let container = document.getElementById("tblHistorial");    
    let html = "";
    console.log(turnos);
    let fechaActual = Date.now();
    for (let t of turnos) {
        const miFecha = new Date(t.fecha);
        let estado = "Activo";
        if(miFecha < fechaActual) {
            estado = "Expiró";
        }
        html += `
            <tr>
            <td>${estado}</td>
            <td>${miFecha.toLocaleDateString("es-AR")}</td>
            <td>${t.turno}</td>
            <td>${t.especialidad}</td>
            <td>${t.nombreMedico} ${t.apellidoMedico} </td>
            </tr>
            `;
    }

    container.innerHTML = html;
}

loadListaTurnos();