
let sum = 0;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let char of numbers) {
    console.log("Char: ", char);
}



const myFunction = (item) => {

    sum += item
}

numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;




for(let i of numbers) {

        sum = sum + i;
    };

document.getElementById("demo").innerHTML = sum

// generates a random # from 1 -> 100

let rand;

do {
    rand = Math.floor(Math.random() * 100);
} while (rand % 7 !== 0);

console.log(rand);