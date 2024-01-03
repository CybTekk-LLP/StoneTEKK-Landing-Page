let video = document.querySelector("video");
let clone = video.cloneNode(true);
clone.classList.add("filter");
video.insertAdjacentElement("afterend", clone);
