/*
To-Do:
☐ Tag images with one or more tags (eg: #beach #summer)
☐ Search images by their tag(s)
☐ Have the gallery persist after refreshing or closing the page
☐ Dark mode
☐ Size choice (small, medium, large)
☐ Caption
☐ Upload Date
☐ Hide the Add Picture Form 
☐ Bonus: Modal popup
*/
class StoredImage {
    constructor(url, tagList, size, caption)
    {
        this.url = url;
        // Input format: "beach, summer, fun"
        // Stored format: ["beach", "summer", "fun"]
        this.tags = tagList.split(", ");
        this.size = size;
        this.caption = caption.trim();
        this.addedDate = new Date.now();
    }
}

const gallery = document.querySelector("#gallery");
const url = document.querySelector("#url");
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");

// Any time ANY key is lifted.
document.addEventListener("keyup", e => {
    // If the key is Enter...
    if (e.key == "Enter") {
        // Simulate a click on the add button.
        addBtn.click();
    }
    // If the key is Delete...
    else if (e.key == "Delete") {
        // Use CSS to pick the last div in the gallery, and delete it.
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
    // Set the text of the link to X.
    newElementClose.innerText = "X";
    // Add an event listener to the X to remove the div containing it.
    newElementClose.addEventListener("click", e => {
        newElementContainer.remove();
    });

    // -- Create the Hierarchy -- //
    // Add the close button and image to the div.
    newElementContainer.appendChild(newElementClose);
    newElementContainer.appendChild(newElement);

   // -- Add to Page -- //
   // Add the div to the page.
    gallery.appendChild(newElementContainer);
});
clearBtn.addEventListener("click", e => {
    // querySelectorAll gets an array of all matching elements.
    const imageList = document.querySelectorAll("#gallery > div");
    for (image of imageList)
    {
        // Remove everything that matched the query.
        image.remove();
    }
});