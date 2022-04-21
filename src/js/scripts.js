const paragraph = document.querySelector("p");
const showBtn = document.querySelector("#show");
const hideBtn = document.querySelector("#hide");

showBtn.addEventListener("click", e => {
    paragraph.classList.remove("hidden");
    hideBtn.classList.remove("hidden");
    showBtn.classList.add("hidden");
});
hideBtn.addEventListener("click", e => {
    paragraph.classList.add("hidden");
    hideBtn.classList.add("hidden");
    showBtn.classList.remove("hidden");
});