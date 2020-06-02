'use strict';

function enter() {
    //parseInt wandelt den String (Text) der Inputs in Interger (Zahl) um 
    let zahl_1 = parseInt(document.getElementById("num_1").value);
    let zahl_2 = parseInt(document.getElementById("num_2").value);
    console.log("Zahl1: "+zahl_1+" Zahl2: "+zahl_2)
    if (zahl_1 < zahl_2) {
        document.getElementById("div_statusbar").innerHTML = "2. Zahl ist grösser"
        document.getElementById("num_1").style.border = "solid 2px green";
    }
    else if (zahl_1 === zahl_2) {
        document.getElementById("div_statusbar").innerHTML = "Die Zahlen sind gleichgross"
    }
    else if (zahl_1 > zahl_2) {
        document.getElementById("div_statusbar").innerHTML = "1. Zahl ist grösser"
        document.getElementById("num_2").style.border = "solid 2px green";
    }
    else{
        document.getElementById("div_statusbar").innerHTML = "Ungültige Eingabe"
    }
}
function reset() {
    document.getElementById("num_2").value = "";
    document.getElementById("num_1").value = "";
    document.getElementById("div_statusbar").innerHTML = "";
    document.getElementById("num_1").style.border = "solid 1px black";
    document.getElementById("num_2").style.border = "solid 1px black";
}