function getNombreUsuarioLoggeado() {
    let userName = window.sessionStorage.getItem('user');
    if(userName) {
        let nameToDisplay = userName.substring(0, userName.indexOf("@"));
        return nameToDisplay;
    }
    return null;
}

function mostrarNav(usuario) {
    if(usuario == null){
        return 
    }
    let navBarLogged = document.getElementById("navBarLogged");
    let navBarNotLogged = document.getElementById("navBarNotLogged");

    navBarNotLogged.classList.add("d-none");
    navBarLogged.classList.remove("d-none");

    document.getElementById("userNameNavLink").innerHTML = usuario;

}

let usuario = getNombreUsuarioLoggeado();
mostrarNav(usuario);