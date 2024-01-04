let video = document.querySelector("video");
let clone = video.cloneNode(true);
clone.classList.add("filter");
video.insertAdjacentElement("afterend", clone);

let open = document.getElementById("open-menu");
let menu = document.querySelector(".menu");
open.addEventListener("click", () => {
  menu.style.display = "grid";
  menu.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 500,
    iterations: 1,
    fill: "both",
    easing: "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  });
});

let close = document.querySelector(".close");
close.addEventListener("click", () => {
  menu.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 500,
    iterations: 1,
    fill: "both",
    easing: "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  });
  setTimeout(() => {
    menu.style.display = "none";
  }, 550);
});
