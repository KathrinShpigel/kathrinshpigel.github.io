
const groupAll = document.getElementById("all");
groupAll.onclick = showGroupAll;

function showGroupAll(event) {
  const elems = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains("portfolio-invisible")) {
      elems[i].classList.remove("portfolio-invisible");
    };
  };
  const groups = document.querySelectorAll(".portfolio-group");
  const group = document.querySelector(".portfolio-group__all");
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].classList.contains("portfolio-group_aktiv")) {
      groups[i].classList.remove("portfolio-group_aktiv");
    };
  };
  group.classList.add("portfolio-group_aktiv");
};

const groupIllustration = document.getElementById("illustration");
groupIllustration.onclick = showGroupIllustration;

function showGroupIllustration(event) {
  const elems = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains("portfolio-item__illustration")) {
      elems[i].classList.remove("portfolio-invisible");
    } else {
      elems[i].classList.add("portfolio-invisible");
    };
  };
  const groups = document.querySelectorAll(".portfolio-group");
  const group = document.querySelector(".portfolio-group__illustration");
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].classList.contains("portfolio-group_aktiv")) {
      groups[i].classList.remove("portfolio-group_aktiv");
    };
  };
  group.classList.add("portfolio-group_aktiv");
};

const groupDigitalArt = document.getElementById("digital-art");
groupDigitalArt.onclick = showGroupDigitalArt;

function showGroupDigitalArt(event) {
  const elems = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains("portfolio-item__digital-art")) {
      elems[i].classList.remove("portfolio-invisible");
    } else {
      elems[i].classList.add("portfolio-invisible");
    };
  };
  const groups = document.querySelectorAll(".portfolio-group");
  const group = document.querySelector(".portfolio-group__digital-art");
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].classList.contains("portfolio-group_aktiv")) {
      groups[i].classList.remove("portfolio-group_aktiv");
    };
  };
  group.classList.add("portfolio-group_aktiv");
};

const groupWebDesign = document.getElementById("web-design");
groupWebDesign.onclick = showGroupWebDesign;

function showGroupWebDesign(event) {
  const elems = document.querySelectorAll(".portfolio-item");
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains("portfolio-item__web-design")) {
      elems[i].classList.remove("portfolio-invisible");
    } else {
      elems[i].classList.add("portfolio-invisible");
    };
  };
  const groups = document.querySelectorAll(".portfolio-group");
  const group = document.querySelector(".portfolio-group__web-design");
  for (let i = 0; i < groups.length; i++) {
    if (groups[i].classList.contains("portfolio-group_aktiv")) {
      groups[i].classList.remove("portfolio-group_aktiv");
    };
  };
  group.classList.add("portfolio-group_aktiv");
};
