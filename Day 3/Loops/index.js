/*
    Given a cost and an amount, work out the change given in specific coinage. For example; the cost is £4.58 and the customer pays with a £20 note so as change they receive: 1 £10 note, 1 £5 note, 2 20p's, 1 2p
*/

const calculateChange = (cost, amountPaid) => {
  // Calculate the total change
  let change = Math.floor((amountPaid - cost) * 100);
  // Define coin and note values
  const notes = [1000, 500];
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  // Creates an object to store the count of each demonination
  let changeCount = {};

  // Calculate the count of each note
  notes.forEach((note) => {
    const noteCount = Math.floor(change / note);
    if (noteCount > 0) {
      changeCount[`£${note / 100}`] = noteCount;
      change -= noteCount * note;
    }
  });
  // Calculate the count of each coin
  coins.forEach((coin) => {
    const coinCount = Math.floor(change / coin);

    if (coinCount > 0) {
      changeCount[`${coin.toFixed(2) / 100}p`] = coinCount;
      change -= coinCount * coin;
    }
  });

  return changeCount;
};
//Example usage
const cost = 4.57;
const amountPaid = 120.00;
const changeResult = calculateChange(cost, amountPaid);
console.log(changeResult);



let myName = "Andrew";

console.log(`Hello my name is ${myName}`);