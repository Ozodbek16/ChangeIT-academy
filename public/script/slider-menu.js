window.addEventListener("load", function (e) {
  const slider = document.querySelector(".reviews_slider_inners");
  const sliderBtnPrev = document.querySelector(".slider-btn-prev");
  const sliderBtnNext = document.querySelector(".slider-btn-next");
  const sliderItems = document.querySelectorAll(".slider-item");

  const navbarToggle = document.querySelector(".navbar .navbar-toggle");
  const navbarRow = document.querySelector(".navbar .row");

  navbarToggle.addEventListener("click", () => {
    navbarRow.classList.toggle("collapsed");
    navbarToggle.classList.toggle("collapsed");
  });

  if (slider) {
    sliderBtnNext.addEventListener("click", () => {
      const left = sliderItems[0].clientWidth;
      let currentLeft = slider.scrollLeft + 220;
      sliderBtnNext.disabled = true;

      setTimeout(() => {
        sliderBtnNext.disabled = false;
      }, 2000);

      slider.scrollTo({
        left: currentLeft + left,
        behavior: "smooth",
      });
    });

    sliderBtnPrev.addEventListener("click", () => {
      const left = sliderItems[0].clientWidth;
      let currentLeft = slider.scrollLeft - 220;

      sliderBtnPrev.disabled = true;

      setTimeout(() => {
        sliderBtnPrev.disabled = false;
      }, 2000);

      slider.scrollTo({
        left: currentLeft - left,
        behavior: "smooth",
      });
    });
  }
});

const modalTwo = document.querySelector(".modal_sign");
const btnM = document.querySelector(".navbar_actions_register button");
const modalFo = document.querySelector("form.modal_form");
const hideIn = document.querySelectorAll(".cart_inp_hide");

btnM.addEventListener("click", (e) => {
  modalTwo.style.display = "block";
  modalFo.action = "/contact/user-contact";
});

document.querySelector(".close_btn").addEventListener("click", (e) => {
  modalTwo.style.display = "none";
});

document.querySelector(".close").addEventListener("click", (e) => {
  modalTwo.style.display = "none";
});

document.querySelector("body").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 123) {
    e.preventDefault();
  } else if (e.keyCode == 18) {
    e.preventDefault();
  } else {
    return;
  }
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
