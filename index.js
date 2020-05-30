var num1, 
    num2,  
    ergebnis, 
    operation;

function click_enter() {
    document.getElementById("div_output").innerText = ergebnis;
}

function chose_operation() {
    switch (operation) {
       case 0: 
            operation = "+";
            break;
        case 1:
            operation = "-";
            break;
        case 2:
            operation = "/"
            break;
        case 3: 
            operation = "*"
            break;   
    }
}