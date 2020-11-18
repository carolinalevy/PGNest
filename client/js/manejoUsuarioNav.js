function getNombreUsuarioLoggeado() {
    let userName = window.sessionStorage.getItem('user');
    
    let nameToDisplay = userName.substring(0, userName.indexOf("@"));
    return nameToDisplay;
}
// how to get only one value from a json object

document.getElementById("userNameNavLink").innerHTML = getNombreUsuarioLoggeado();
// document.getElementById("welcomeName").innerHTML = `Bienvenid@ ${getNombreUsuarioLoggeado()}`;