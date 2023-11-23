const me = {
  name: "Andrew",
  age: 27,
  location: "Bradford",
  pets: ["Ember"],
};

console.log(`Hi my name is ${me.name}`);
console.log(`I am ${me.age} years old`);
console.log(`I currently live in ${me.location}`);
console.log(`I have a pet cat called ${me.pets}`);

const liam = {
  name: "Liam",
  age: 30,
  location: "Sunderland",
  pets: ["Alice", "Louis"],
};

const anna = {
  name: "Anna",
  age: 42,
  location: "Wolverhampton",
  pets: ["Walsh", "Ambrose", "Maximus"],
};

const myGroup = [me, liam, anna];

for (let i = 0; i < myGroup.length; i++) {
  console.log(myGroup[i]);
}

for (let i = 0; i < myGroup.length; i++) {
  console.log(myGroup[i].name, myGroup[i].age);
}

console.log(
  `Unfortunately in our group, the oldest person was ${anna.name} as she is ${anna.age} years old. But she doesn't look over 21 :)`
);