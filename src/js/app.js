const overlay = document.querySelector(`.overlay`);
const btnBack = document.querySelector(`#btn-back`);
let modalClass = "";

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

function closeModal(modalClass) {
  const modal = document.querySelector(`.${modalClass}`);
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
  if (event.target.parentElement.className == "card") {
    modalClass = event.target.parentElement.id;
    showOverlay();
    showModal(modalClass);
    showBtn();
  }

  if (event.target.className == "overlay" || event.target.id == "btn-back") {
    closeOverlay();
    closeModal(modalClass);
    closeBtn();
  }
}

function cookiePreferenceActivate() {
  const inputs = document.querySelectorAll(
    ".cookie-preferences__option__checkbox"
  );

  inputs.forEach((input) => {
    input.checked = true;
  });
}

function cookiePreferenceDeactivate() {
  const inputs = document.querySelectorAll(
    ".cookie-preferences__option__checkbox"
  );

  inputs.forEach((input) => {
    input.checked = false;
  });
}

window.addEventListener("click", handlers);

document
  .querySelector(`#cookie-preferences-reject-all`)
  .addEventListener("click", cookiePreferenceDeactivate);
document
  .querySelector(`#cookie-preferences-accept-all`)
  .addEventListener("click", cookiePreferenceActivate);
