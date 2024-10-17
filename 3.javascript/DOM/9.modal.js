const open = document.getElementById("open");
const close = document.getElementById("close");

const modal = document.querySelector(".modal-container");

// open.onclick = function () {
//   modal.style.display = "block";
// };

open.onclick = () => {
  modal.style.display = "flex";
};

// close.onclick = function () {
//   modal.style.display = "none";
// };
close.onclick = () => {
  modal.style.display = "none";
};
