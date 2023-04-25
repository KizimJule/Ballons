


const checkbox = document.querySelector(".navigation__toggle");

const button = document.querySelector(".navigation__list");

button.addEventListener("click", () => {
    if (checkbox.checked == true) {
      checkbox.checked = false;
  }
});