const darkMode = () => {
  if (document.body.className === "light") {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }
};

function addOneCount() {
  let i = document.getElementById("counter");

  i.value++;
}
let counter = 0;

function updateCounter(value) {
  if (value !== 0) {
    counter += value;
  } else {
    counter = 0;
  }

  document.getElementById("multipleCounter").value = counter;
}
