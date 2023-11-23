const addition = (num1, num2) => {
  return num1 + num2;
};

const subtraction = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const additionNew = (num1, num2) => num1 + num2;

const subtractionNew = (num1, num2) => num1 - num2;

const multiplyNew = (num1, num2) => num1 * num2;

const divideNew = (num1, num2) => num1 / num2;

const fizzBuzz = num => {
  if (num % 2 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 2 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log(multiply((3, 6), (2, 4)));
