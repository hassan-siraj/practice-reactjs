
// Add function
function add(a, b){
    let sum = a + b;
    return sum;
}
// Subtract function
function sub(a, b){
    let sub = a - b;
    return sub;
}
// Multiply function
function mult(a, b){
    let mult = a * b;
    return mult;
}

// Divide function
function div(a, b){
    let div = a / b
    div = div.toFixed(2);
    return div;
}

export { add, sub, mult, div };
