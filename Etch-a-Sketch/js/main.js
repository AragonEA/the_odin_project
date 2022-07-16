const container = document.getElementById("container");
const colorPicker = document.querySelector("#colorpicker");

colorPicker.addEventListener('change', (event) => {
  colorPicked = event.target.value;
});
});

function makeRows(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', columns);
  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);