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