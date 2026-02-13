function selectView(view) {
  const formsSlider = document.getElementById("forms-slider");
  const heroInner = document.getElementById("hero-inner");
  const activeBar = document.querySelector(".active-bar");
  const btnSignin = document.getElementById("btn-signin");
  const btnSignup = document.getElementById("btn-signup");

  btnSignin.classList.remove("active");
  btnSignup.classList.remove("active");

  if (view === "signin") {
    formsSlider.style.transform = "translateY(0)";
    heroInner.style.transform = "translateY(0)";
    activeBar.style.transform = "translateY(0)";
    btnSignin.classList.add("active");
  } else {
    formsSlider.style.transform = "translateY(-50%)";
    heroInner.style.transform = "translateY(-50%)";
    activeBar.style.transform = "translateY(100%)";
    btnSignup.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => selectView("signin"));
