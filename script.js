// active hamburgar menu
let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
});

// rotate text js code here
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`)
  .join("");

// switch between about me experience button
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // remove previous content and active style for present clicked button
    // then add active style and content to the present button
    contents.forEach((content) => (content.style.display = "none"));
    buttons.forEach((btn) => btn.classList.remove("active"));
    contents[index].style.display = "block";
    button.classList.add("active");
  });
});

// mixitup filter
var mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".portfolio-box",
  },
  animation: {
    duration: 500,
  },
});


// swiper js object 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});