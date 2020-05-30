var num1, 
    num2,  
    ergebnis;


function click_enter() {
    document.getElementById("div_output").innerText = ergebnis;
}

function chose_operation(withbutton) {
    switch (withbutton) {
       case 0: 
            operation = "+";
            console.log(operation);
            break;
        case 1:
            operation = "-";
            console.log(operation);
            break;
        case 2:
            operation = "/"
            console.log(operation);
            break;
        case 3: 
            operation = "*"
            console.log(operation);
            break;   
    }
}
