'use strict';



const slider            = document.querySelector('.slider__wrapper'),
      sliderItem        = document.querySelector('.slider__item'),
      slidesWidth       = sliderItem.offsetWidth,
      lengthListSlides  = document.getElementsByClassName('slider__item').length;
let   count             = 1,
      length            = lengthListSlides,
      startX            = 0,
      endX              = 0;



const moveRight = () => {
  if (length > 4) {
    slider.style.transform = 'translateX(' + -1*slidesWidth*count + 'px)';
    length--;
    count++;
  } else {
    slider.style.transform = '';
    length = lengthListSlides;
    count = 1;
  };
}

const moveLeft = () => {
  if (length <= 4) {
    slider.style.transform = 'translateX(' + -1*slidesWidth*count+slidesWidth + 'px)';
    length++;
    count--;
  } else {
    slider.style.transform = '';
    length = lengthListSlides;
    count = 1;
  };
}
     
const autoPlay = setInterval(() => {
  moveRight();
}, 4000);

const pull = () => {
  if ((startX - endX) > 0) {
    count++;
    length--;
    moveRight();
  } else {
    count--;
    length++;
    moveLeft();
  }
  startX = 0;
  endX = 0;
  autoPlay;
}



//информирует о положении курсора относительно блока со слайдером
const getStartCoordinats = () => {
  slider.onmousedown= function (event) {
    event = event || window.event;
    startX = event.clientX;
    return startX;
  }
}

const getEndCoordinats = () => {
  slider.onmouseup= function (event) {
    event = event || window.event;
    endX = event.clientX;
    return pull();
  }
}


function init () {
  pull();
  getStartCoordinats();
  getEndCoordinats();
}

init();