const gallery = document.querySelector("#gallery");
const url = document.querySelector("#url");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");

document.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        addBtn.click();
    }
    else if (e.key == "Delete") {
        document.querySelector("#gallery > div:last-child").remove();
    }
});

// e => {} is the same as function (e) {}
addBtn.addEventListener("click", e => {
   let imageURL = url.value;

   // -- Create the Image -- //
   const newElement = document.createElement("img"); // When we create this element, it is not on the page because it hasn't been appended to anything that is currently on the page. It's just kind of floating in memory.
   newElement.setAttribute("src", url.value);

   // -- Create the Container -- //
    const newElementContainer = document.createElement("div");
    const newElementClose = document.createElement("a");
    newElementClose.innerText = "X";
    newElementClose.addEventListener("click", e => {
        newElementContainer.remove();
    });

    // -- Create the Hierarchy -- //
    newElementContainer.appendChild(newElementClose);
    newElementContainer.appendChild(newElement);

   // -- Add to Page -- //
    gallery.appendChild(newElementContainer);
});
clearBtn.addEventListener("click", e => {
    const imageList = document.querySelectorAll("#gallery > div");
    for (image of imageList)
    {
        image.remove();
    }
});