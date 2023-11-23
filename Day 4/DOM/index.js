const newHeading = document.createElement("h1");

newHeading.textContent = "Hello World!";

document.body.appendChild(newHeading);

newHeading.style.color = "red";

let newParagraph;

const addTenParagraphs = () => {
  for (let i = 0; i <= 10; i++) {
    // let newParagraph = document.createElement("p");
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a paragraph:" + " " + i;

    document.body.appendChild(newParagraph);

    newParagraph.style.color = "#DE5848";

  }
};