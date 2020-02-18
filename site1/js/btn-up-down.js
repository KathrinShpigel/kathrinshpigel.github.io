//Нажатие кнопки вверх
const btnUp = document.getElementById("btn-up");
btnUp.onclick = showUp;

function showUp(event) {
  //alert("onclick Event detected!");
  const elems = document.querySelectorAll(".media");
  for (let i = 0; i < elems.length; i++) {
  if (elems[i].classList.contains("media-invisible")) {
    elems[i].classList.remove("media-invisible");
    } else {elems[i].classList.add("media-invisible");}
  }
};
//Нажатие кнопки вниз
const btnDown = document.getElementById("btn-down");
btnDown.onclick = showDown;

function showDown(event) {
  const elems = document.querySelectorAll(".media");
  for (let i = 0; i < elems.length; i++) {
  if (elems[i].classList.contains("media-invisible")) {
    elems[i].classList.remove("media-invisible");
    } else {elems[i].classList.add("media-invisible");}
  }
};
