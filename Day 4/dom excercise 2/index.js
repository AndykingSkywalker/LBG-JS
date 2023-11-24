document.getElementById("redP").style.color = "red";

const newDiv = document.getElementById("myDiv");

const newPara = document.createElement("p");

newPara.textContent = "Hello there!";

newDiv.appendChild(newPara);

const firstPara = document.querySelector("#firstParagraph h2+p");

firstPara.style.color = "red";
