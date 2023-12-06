"use strict";
/*document.addEventListener("DOMContentLoaded", function () {
  const carritoIcon = document.querySelector(".carrito");
  const carritoPopup = document.getElementById("carrito-popup");
  let isPopupVisible = false;
  carritoIcon.addEventListener("click", function () {
    if (isPopupVisible) {
      carritoPopup.style.opacity = 0;
      setTimeout(function () {
        carritoPopup.style.display = "none";
      }, 300);
    } else {
      carritoPopup.style.display = "block";
      setTimeout(function () {
        carritoPopup.style.opacity = 1;
      }, 0);
    }
    isPopupVisible = !isPopupVisible;
  });
});*/
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".hamburger");
  const movilMenu = document.querySelector(".movil-nav");
  let isMenuActive = false;
  menuBtn.addEventListener("click", function () {
    isMenuActive = !isMenuActive;
    if (isMenuActive) {
      movilMenu.style.display = "block";
      setTimeout(function () {
        movilMenu.style.opacity = 1;
      }, 0);
    } else {
      movilMenu.style.opacity = 0;
      setTimeout(function () {
        movilMenu.style.display = "none";
      }, 300);
    }
    menuBtn.classList.toggle("is-active");
    movilMenu.classList.toggle("is-active");
  });
});
function redireccionar() {
  window.location.href = "paginaBusqueda.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const passwordRecoveryDiv = document.getElementById("password-recovery");
  const verificationCodeDiv = document.getElementById("verification-code");
  const verifyCodeButton = document.querySelector("btn.verify-code");
  verificationCodeDiv.style.display = "none";
  verifyCodeButton.addEventListener("click", function () {
    passwordRecoveryDiv.style.display = "none";
    verificationCodeDiv.style.display = "block";
  });
});

/* funciones para botones de reservas, tarjetas, y perfil de cliente */

