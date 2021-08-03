const openButton = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

openButton.addEventListener("click", () => {
  if (nav.classList.contains("display-none")) {
    nav.classList.remove("display-none");
  } else nav.classList.add("display-none");
});
