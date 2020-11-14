function getNombreUsuarioLoggeado() {
    let userName = window.sessionStorage.getItem('user');
    return userName;
}
// how to get only one value from a json object

document.getElementById("userNameNavLink").innerHTML = getNombreUsuarioLoggeado();
document.getElementById("welcomeName").innerHTML = `Bienvenid@ ${getNombreUsuarioLoggeado()}`;