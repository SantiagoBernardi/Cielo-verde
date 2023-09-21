"use strict"

new fullpage('#fullpage', {
    //options here
    dragAndMove: true,
    autoScrolling:true,
    normalScrollElements: '.gallery, aside, section',
    scrollHorizontally: false,
    onLeave: function(origin){
        if (origin.index == 0) {
            document.querySelector(".palabraA").classList.remove("palabraInicializeReverse");
            document.querySelector(".palabraB").classList.remove("palabraInicialize");
            document.querySelector(".palabraC").classList.remove("palabraInicializeReverse");
        }
        if (origin.index == 1) {
            document.querySelector(".palabraA").classList.add("palabraInicializeReverse");
            document.querySelector(".palabraB").classList.add("palabraInicialize");
            document.querySelector(".palabraC").classList.add("palabraInicializeReverse");
        }
    }
});

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
    console.log("script.js");
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;

    // Realizamos alguna accion cuando el scroll este entre la posicion 300 y 400
    if(scroll > 300){
        document.querySelector(".arrow").classList.add("hide");
    }
        else{
            document.querySelector(".arrow").classList.remove("hide");
        }
    if(scroll > 250) {
        document.querySelector("main h1").classList.add("opacity");
    }
        else {
            document.querySelector("main h1").classList.remove("opacity");
        }
        
    if(scroll > 150){
        document.querySelector(".palabraA").classList.remove("palabraInicializeReverse");
    }
        else {
            document.querySelector(".palabraA").classList.add("palabraInicializeReverse");
        }

    if(scroll > 300){
        document.querySelector(".palabraB").classList.remove("palabraInicialize");
    }
        else {
            document.querySelector(".palabraB").classList.add("palabraInicialize");
        }

    if(scroll > 550){
        document.querySelector(".palabraC").classList.remove("palabraInicializeReverse");
    }
        else {
            document.querySelector(".palabraC").classList.add("palabraInicializeReverse");
        }
}