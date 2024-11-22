function zero(operator) {
    return !operator ? 0 : operate({operand_left: 0, ...operator})
}

function one(operator) {
    return !operator ? 1 : operate({operand_left: 1, ...operator})
}

function two(operator) {
    return !operator ? 2 : operate({operand_left: 2, ...operator})
}

function three(operator) {
    return !operator ? 3 : operate({operand_left: 3, ...operator})
}

function four(operator) {
    return !operator ? 4 : operate({operand_left: 4, ...operator})
}

function five(operator) {
    return !operator ? 5 : operate({operand_left: 5, ...operator})
}

function six(operator) {
    return !operator ? 6 : operate({operand_left: 6, ...operator})
}

function seven(operator) {
    return !operator ? 7 : operate({operand_left: 7, ...operator})
}

function eight(operator) {
    return !operator ? 8 : operate({operand_left: 8, ...operator})
}

function nine(operator) {
    return !operator ? 9 : operate({operand_left: 9, ...operator})
}

function operate(operation) {
    if (typeof operation == "object") {
        switch (operation.op) {
            case "+":
                return operation.operand_left + operation.operand_right;
            case "-":
                return operation.operand_left - operation.operand_right;
            case "*":
                return operation.operand_left * operation.operand_right;
            case "/":
                return Math.trunc(operation.operand_left / operation.operand_right);
        }
    }
}

function plus(operand) {
    return {op: "+", operand_right: operand}
}

function minus(operand) {
    return {op: "-", operand_right: operand}
}

function times(operand) {
    return {op: "*", operand_right: operand}
}

function dividedBy(operand) {
    return {op: "/", operand_right: operand}
}
console.log(seven(times(five())))