

function logOutFunction() {
    window.sessionStorage.removeItem('userLogged');
    window.sessionStorage.removeItem('user');
    window.location.href = 'http://localhost:3000/Index.html';
}

let logOut = document.getElementById("logOut");
logOut.addEventListener("click", logOutFunction);
