'use strict';

function chose(val) {
    document.getElementById("in_output").value+=val;
}

function enter() {
    let zahl1 = document.getElementById("in_output").value;
    let ergebnis = eval(zahl1);
    document.getElementById("in_output").value = ergebnis;
}

function reset_output() {
    document.getElementById("in_output").value = "";
    console.log("Hallo");
}

function style_switch(){
    if (document.getElementById("slc_style").value === "classic") {
        style_classic();
    }
    else if (document.getElementById("slc_style").value === "rainbow") {
        style_rainbow();
    }
}
