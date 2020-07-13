const prevBtn = document.querySelectorAll("i")[0];
const nextBtn = document.querySelectorAll("i")[1];

const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");

prevBtn.addEventListener("click", () => {
  firstSlide.style.display = "block";
  secondSlide.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  secondSlide.style.display = "block";
  firstSlide.style.display = "none";
});
