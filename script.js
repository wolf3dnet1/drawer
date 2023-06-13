let DEFAULT_ROW_COUNT = 25;

const container = document.getElementById("container");
const button = document.getElementById("button");

button.addEventListener("click", click);

function click() {

  let rowCount = prompt(
    "choose row/column size less than 100",
    DEFAULT_ROW_COUNT
  );

  if (rowCount > 100) {
    alert("please write less than 100");
    return click();
  }

  let innerHtml = "";
  const totalCount = Math.pow(rowCount, 2);

  for (let i = 0; i < totalCount; i++) {
    innerHtml += `<div id='square'></div>`;
  }

  container.innerHTML = innerHtml;
  const squares = document.querySelectorAll("#square");

  squares.forEach((square) => {
    square.style.width = `${500 / rowCount}px`;
    square.style.height = `${500 / rowCount}px`;

    square.addEventListener("mouseenter", () => {
      square.style.background = "red";
    });
  });
}