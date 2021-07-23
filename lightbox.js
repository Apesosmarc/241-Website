const lightbox = document.createElement("div");
const portInfos = [...document.querySelectorAll(".port-info")];
const exitMarks = [...document.querySelectorAll(".x")];

lightbox.id = "lightbox";
document.body.appendChild(lightbox);

//Adds click events to each picture
const portItem = [...document.querySelectorAll(".port-img-container")];
portItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    const portInfo = document.querySelector(`#${e.target.id}-content`);
    lightbox.classList.add("active");
    portInfo.classList.remove("display-none");
    lightbox.appendChild(portInfo);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target != lightbox && !exitMarks.includes(e.target)) return;

  //loops through all port items and closes them
  portInfos.forEach((item) => {
    item.classList.add("display-none");
  });

  lightbox.classList.remove("active");
});
