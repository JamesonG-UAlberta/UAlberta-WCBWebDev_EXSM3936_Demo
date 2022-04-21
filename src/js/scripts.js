const gallery = document.querySelector("#gallery");
const url = document.querySelector("#url");
const goBtn = document.querySelector("#add");


// e => {} is the same as function (e) {}
goBtn.addEventListener("click", e => {
   let imageURL = url.value;
   const newElement = document.createElement("img"); // When we create this element, it is not on the page because it hasn't been appended to anything that is currently on the page. It's just kind of floating in memory.
   newElement.setAttribute("src", url.value);
    gallery.appendChild(newElement);
});