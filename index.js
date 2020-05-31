
function chose(val) {
    document.getElementById("in_output").value+=val;
}

function enter() {
    let zahl1 = document.getElementById("in_output").value;
    let ergebnis = eval(zahl1);
    document.getElementById("in_output").value = ergebnis;
}

function clear() {
    document.getElementById("in_output").value = "000";
    console.log("Hallo");
}
