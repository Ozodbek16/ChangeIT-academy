const card = document.querySelectorAll(".card");
const cardHvr = document.querySelectorAll(".card_hover");
const modalOne = document.querySelector(".modal_sign");
const btnModal = document.querySelectorAll(".card_hover button");
const modalForm = document.querySelector("form.modal_form");
const hideInp = document.querySelectorAll(".cart_inp_hide");
const body = document.querySelector("body");

for (let i = 0; i < card.length; i++) {
  let total = card[i].querySelectorAll(".total");
  if (total.length != 0) {
    if (body.clientWidth > 1380) {
      cardHvr[i].remove();
    }
  } else if (total.length == 0) {
    btnModal[i].addEventListener("click", (e) => {
      modalOne.style.display = "block";
      modalForm.action = hideInp[i].value;
    });
  }
}

document.querySelector(".close_btn").addEventListener("click", (e) => {
  modalOne.style.display = "none";
});

document.querySelector(".close").addEventListener("click", (e) => {
  modalOne.style.display = "none";
});