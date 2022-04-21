const paragraph = document.querySelector("p");
const toggleBtn = document.querySelector("#hide-toggle");

toggleBtn.addEventListener("click", e => {
    if (paragraph.classList.contains("hidden")) { // Paragraph is hidden?
        paragraph.classList.remove("hidden");
        toggleBtn.innerText = "Hide";
    }
    else {
        paragraph.classList.add("hidden");
        toggleBtn.innerText = "Show";
    }
});
