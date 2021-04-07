// this function adds two numbers
function add(x, y) {
    let res = x + y;
    return res;
}

// this function multiplies two numbers
function multiply(x, y) {
    let res = x * y;
    return res;
}

// this function subtracts two numbers
function subtract(x, y) {
    if (y > x){
        throw Error;
    }
    let res = x - y;
    return res;
}