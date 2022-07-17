const $container = document.getElementById("container");
const $colorPicker = document.querySelector("#colorpicker");
const $clearBtn = document.getElementById("clearBtn");
const $newGridBtn = document.getElementById("newGridBtn");
let $colorPicked = '#000000';
makeRows(16,16);


function newGrid() {
  const gridSize = prompt("Enter new grid size (min: 10, max: 100)");
  gridSize !== null && gridSize >= 10 && gridSize <= 100 ? makeRows(gridSize, gridSize) : alert("Invalid grid size.");
}

function deletePreviousGrid() {
  const $gridItems = document.querySelectorAll('#container > div');
  for (let i = 0; i < $gridItems.length; i++) {
    $gridItems[i].remove();
  }
}

function clearGrid(){
  const $gridItems = document.querySelectorAll('#container > div');
  $gridItems.forEach((item) => {
    item.style.backgroundColor = '#ffffff';
  })
}

function makeRows(rows, columns) {

  deletePreviousGrid();
  $container.style.setProperty('--grid-rows', rows);
  $container.style.setProperty('--grid-cols', columns);

  for (i = 0; i < (rows * columns); i++) {
    let cell = document.createElement("div");
    $container.appendChild(cell).className = "grid-item";
  };

  const $gridItems = document.querySelectorAll('#container > div');
  $gridItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = $colorPicked;
    })
  });
  
};

$colorPicker.addEventListener('change', (event) => {
  $colorPicked = event.target.value;
});
