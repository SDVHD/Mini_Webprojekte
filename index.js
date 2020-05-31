
function chose(val) {
    document.getElementById("div_output").value+=val;
}

function enter() {
    let zahl1 = document.getElementById("div_output").value;
    let ergebnis = eval(zahl1);
    document.getElementById("div_output").value = ergebnis;
}

function clear() {
    document.getElementById("div_output").value = "00";
}
