"use strict"

document.querySelector("#menu-bar").addEventListener("click", show);
document.querySelector("#close").addEventListener("click", show);

function show() {
    document.querySelector("nav").classList.toggle("show");
}

document.querySelector("main").addEventListener("scroll", function() {
    console.log("scroll");
    document.querySelector(".arrow").classList.toggle("hide");
});


// Detectamos cuando el usuario desplace la pantalla
window.onscroll = function (){
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if(scroll > 300){
        console.log("Pasaste la posicion 300 del scroll");
        document.querySelector(".arrow").classList.add("hide");
    }
        else{
            document.querySelector(".arrow").classList.remove("hide");
        }

    if(scroll > 200) {
        document.querySelector("main h1").classList.add("opacity");
    }
        else {
            document.querySelector("main h1").classList.remove("opacity");
        }
        
    if(scroll > 250){
        document.querySelector(".palabraA").classList.remove("palabraInicialize");
    }
        else {
            document.querySelector(".palabraA").classList.add("palabraInicialize");
        }

    if(scroll > 500){
        document.querySelector(".palabraB").classList.remove("palabraInicialize");
    }
        else {
            document.querySelector(".palabraB").classList.add("palabraInicialize");
        }
}