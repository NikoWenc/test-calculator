let display = document.querySelector('#display');
let numbersButton = document.querySelectorAll('.numbers button');
let operatorButton = document.querySelectorAll('.operators button');

// for number buttons
numbersButton.forEach(element => {
    // add event to number buttons
    element.addEventListener('click', (event) => {
        if(event.target.value !== 'del') {
            display.textContent += event.target.value;
        }
    });
});




let operandA;
let operator;
let operandB;

function calculator (operandA, operator, operandB) {

    let total;
    
    switch(operator){
        case '+': 
            total = operandA + operandB
            break;
        case '-':
            total = operandA - operandB
            break;
        case '/':
            total = operandA / operandB
            break;
        case '*':
            total = operandA * operandB
            break;
    }
    return total;
}