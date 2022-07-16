const container = document.getElementById("container");
const colorPicker = document.querySelector("#colorpicker");
let colorPicked = '#000000';

makeRows(16, 16);

const gridItems = document.querySelectorAll('#container > div');

colorPicker.addEventListener('change', (event) => {
  colorPicked = event.target.value;
});

gridItems.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = colorPicked;
  })
});

function makeRows(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};