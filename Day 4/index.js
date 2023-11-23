const addition = (num1, num2) => {

    return num1 + num2;

}

const subtraction = (num1, num2) => {

    return num1 - num2;

}

const multiply = (num1, num2) => {

    return num1 * num2;

}

const divide = (num1, num2) => {

    return num1 / num2;

}


function fizzBuzz(num) {

    if(num % 2 === 0 && num % 5 === 0) {
        return "FizzBuzz"
    } else if (num % 2 === 0) {
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else {
        return num
    }
}