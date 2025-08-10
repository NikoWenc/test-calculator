let display = document.querySelector('#display');
let numbersButton = document.querySelectorAll('.numbers button');
let operatorButton = document.querySelectorAll('.operators button');

document.addEventListener('keydown', (event) => {
    // only numbers will be inputed to display
    (Number(event.key))
        ? display.textContent += event.key
        : event.defaultPrevented;

    if (event.key === 'Backspace') display.textContent = '';

});

// for number buttons
numbersButton.forEach(element => {
    // add event to number buttons
    if (element.value == 'del'){
        element.addEventListener('click', (event) => {
            display.textContent = '';
            event.target.blur();
            event.stopPropagation();
        })
    }else {    // for del button
        element.addEventListener('click', (event) => {
        display.textContent += event.target.value;
    });
    }
});

// for operator buttons
operatorButton.forEach(element => {
    if (element.value !== '='){
        element.addEventListener('click', (event) => {
            display.textContent += ' ' + event.target.value + ' ';
            event.stopPropagation();
        })
    }else { //compute arguments when '=' is pressed
        element.addEventListener('click', () => {
            let argument = display.textContent;
            argument = argument.split(' ');
            let operandA = Number(argument[0]);
            let operator = argument[1];
            let operandB = Number(argument[2]);

            calculator(operandA, operator, operandB);
        })
    }
})

function calculator (operandA, operator, operandB) {

    let total;
    
    switch(operator){
        case '+': total = operandA + operandB
            break;
        case '-': total = operandA - operandB
            break;
        case '/': total = operandA / operandB
            break;
        case '*': total = operandA * operandB
            break;
    }
    return display.textContent = total;
}