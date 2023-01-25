const overlay = document.querySelector(`.overlay`);
const btnBack = document.querySelector(`#btn-back`);

function showOverlay() {
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
}

function closeOverlay() {
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
}

function showModal(modalClass) {
  const modal = document.querySelector(`.${modalClass}`);
  modal.style.transform = "scale(1)";
}

function closeModal() {
  const modal = document.querySelector(`.modal`);
  modal.style.transform = "scale(0)";
}

function showBtn() {
  btnBack.style.visibility = "visible";
  btnBack.style.opacity = "1";
}

function closeBtn() {
  btnBack.style.opacity = "0";
  btnBack.style.visibility = "hidden";
}

function handlers(event) {
  const modalClass = event.target.parentElement.id;

  if (event.target.parentElement.className == "card") {
    showOverlay();
    showModal(modalClass);
    showBtn();
  }

  if (event.target.className == "overlay" || event.target.id == "btn-back") {
    closeOverlay();
    closeModal();
    closeBtn();
  }
}

window.addEventListener("click", handlers);
