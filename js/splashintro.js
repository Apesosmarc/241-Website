const splash = document.querySelector(".splash");

if (!document.cookie) {
  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
      splash.classList.add("hide");
    }, 2000);
  });

  document.cookie = "visited";
} else {
  splash.remove();
}
