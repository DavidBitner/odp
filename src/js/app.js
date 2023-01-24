const overlay = document.querySelector(`.overlay`);

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

function handlers(event) {
  const modalClass = event.target.parentElement.id;

  if (event.target.parentElement.className == "card") {
    showOverlay();
    showModal(modalClass);
  }

  if (event.target.className == "overlay") {
    closeOverlay();
    closeModal();
  }
}

window.addEventListener("click", handlers);
