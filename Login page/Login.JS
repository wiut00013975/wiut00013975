let signup = document.querySelector(".signup_btn");
let login = document.querySelector(".login_btn");
let slider = document.querySelector(".main_slider");
let formSection = document.querySelector("section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});