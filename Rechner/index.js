'use strict';

window.onload = (event) => {
    document.getElementById("slc_style").value = sessionStorage.getItem("style_switch_status");
    style_switch();
}
function chose(val) {
    document.getElementById("in_output").value+=val;
    let sound = new Audio("../Rechner/sounds/click_sound.mp3");
    sound.play();
}

function enter() {
    let zahl1 = document.getElementById("in_output").value; 
    let ergebnis = eval(zahl1);
    document.getElementById("in_output").value = ergebnis;
    let sound = new Audio("../Rechner/sounds/click_sound.mp3");
    sound.play();
}

function reset_output() {
    document.getElementById("in_output").value = "";
    console.log("Hallo");
    let sound = new Audio("../Rechner/sounds/click_sound.mp3");
    sound.play();
}

function style_switch(){
    let sound = new Audio("../Rechner/sounds/click_sound.mp3");
    sound.play();

    if (document.getElementById("slc_style").value === "classic") {
        style_classic();
    }
    else if (document.getElementById("slc_style").value === "rainbow") {
        style_rainbow();
    }
    sessionStorage.setItem("style_switch_status", document.getElementById("slc_style").value);
    document.getElementById("slc_style").value = sessionStorage.getItem("style_switch_status");
}

