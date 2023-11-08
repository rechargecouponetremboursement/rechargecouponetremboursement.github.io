// ----------------------Header Burger btn ==========================
const burgerButton = document.querySelector(".burger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  navListItem = document.querySelectorAll(".nav-menu .list-item"),
  main = document.querySelector(".main");
//Event Listener
burgerButton.addEventListener("click", menuActive);

//on ferme la nav-menu à chaque fois qu'om clique sur un nav-item
navListItem.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    burgerButton.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

//on fer la navMenu au clique sur le bloque main

main.addEventListener("click", () => {
  burgerButton.classList.remove("active");
  navMenu.classList.remove("active");
});

//funtions
function menuActive() {
  if (burgerButton.classList.contains("active")) {
    burgerButton.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    burgerButton.classList.add("active");
    navMenu.classList.add("active");
  }
}

// Form Tab management
const formNavItem = document.querySelectorAll('.form-nav-item');
const formNavContent = document.querySelectorAll('.form-block-item');

formNavItem.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        formNavItem.forEach((navItem) => {
            navItem.classList.remove('active');
        });
        navItem.classList.add('active');

        formNavContent.forEach((navContent) => {
            navContent.classList.remove('active');
        });
        formNavContent[index].classList.add('active');
    });
});




// Sélectionne la case à cocher et le champ de code de recharge
const codeRechargeToggle = document.getElementById("code-recharge-toggle");
const codeRechargeField = document.getElementById("code1");

// Ajoute un événement de changement à la case à cocher
codeRechargeToggle.addEventListener("change", function () {
  if (codeRechargeToggle.checked) {
    codeRechargeField.type = "password";
  } else {
    codeRechargeField.type = "text";
  }
});
