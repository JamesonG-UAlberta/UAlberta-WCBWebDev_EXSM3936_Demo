/*
To-Do:
☑ Tag images with one or more tags (eg: #beach #summer)
☑ Search images by their tag(s)
☑ Have the gallery persist after refreshing or closing the page
☐ Dark mode
☑ Size choice (small, medium, large)
☑ Caption
☑ Upload Date
☐ Hide the Add Picture Form 
☐ Sort pictures by size to reduce gaps
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
        this.addedDate = new Date(Date.now());
    }
    renderedImage;
}

let imageList = [];
const gallery = document.querySelector("#gallery");
// Add Image Form Elements
const addBtn = document.querySelector("#add");
const clearBtn = document.querySelector("#clear");
const inputURL = document.querySelector("#url");
const inputTags = document.querySelector("#tags");
const inputCaption = document.querySelector("#caption");
const inputSize = document.querySelector("#size");
// Search Tag Elements
const tagSearchBar = document.querySelector("#search");
const tagSearchBtn = document.querySelector("#searchBtn");
const tagClearBtn = document.querySelector("#searchClearBtn");

function renderImage(imageObj)
{
    // -- Create the Image -- //
    const newElement = document.createElement("img"); // When we create this element, it is not on the page because it hasn't been appended to anything that is currently on the page. It's just kind of floating in memory.
    newElement.setAttribute("src", imageObj.url);

    // -- Create the Container -- //
    const newElementContainer = document.createElement("div");
    imageObj.renderedImage = newElementContainer;
    newElementContainer.classList.add(imageObj.size);

    const newElementClose = document.createElement("a");
    // Set the text of the link to X.
    newElementClose.innerText = "X";
    // Add an event listener to the X to remove the div containing it.
    newElementClose.addEventListener("click", e => {
        newElementContainer.remove();
        imageList.splice(imageList.indexOf(imageObj), 1);
        localStorage.setItem("wcbImageGallery", JSON.stringify(imageList));
    });

    const newElementTags = document.createElement("p");
    for (let i = 0; i < imageObj.tags.length; i++)
    {
        const tagLink = document.createElement("a");
        tagLink.addEventListener("click", e => {
            tagSearchBar.value = imageObj.tags[i];
            tagSearchBtn.click();
        });
        tagLink.innerText = "#"+imageObj.tags[i];
        newElementTags.appendChild(tagLink);
        if(i < imageObj.tags.length-1)
        {
            newElementTags.appendChild(document.createTextNode(" "));
        }
    }

    const newElementCaption = document.createElement("p");
    newElementCaption.innerText = imageObj.caption;

    const newElementDate = document.createElement("p");
    newElementDate.innerText = imageObj.addedDate.toLocaleTimeString() + ", " + imageObj.addedDate.toLocaleDateString();

    // -- Create the Hierarchy -- //
    // Add the close button and image to the div.
    newElementContainer.appendChild(newElementClose);
    newElementContainer.appendChild(newElement);
    newElementContainer.appendChild(newElementTags);
    newElementContainer.appendChild(newElementCaption);
    newElementContainer.appendChild(newElementDate);

    // -- Add to Page -- //
    // Add the div to the page.
    gallery.appendChild(newElementContainer);
}

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
    e.preventDefault();
    renderImage(imageList[imageList.push(new StoredImage(inputURL.value, inputTags.value, inputSize.value, inputCaption.value))-1])    
    localStorage.setItem("wcbImageGallery", JSON.stringify(imageList));
});
clearBtn.addEventListener("click", e => {
    e.preventDefault();

    // querySelectorAll gets an array of all matching elements.
    const imageList = document.querySelectorAll("#gallery > div");
    for (image of imageList)
    {
        // Remove everything that matched the query.
        image.remove();
    }
});
tagSearchBtn.addEventListener("click", e => {
    e.preventDefault();
    tagClearBtn.click();
    for (image of imageList)
    {
        if (!image.tags.includes(tagSearchBar.value))
        {
            image.renderedImage.classList.add("hidden");
        }
    }
});
tagClearBtn.addEventListener("click", e => {
    e.preventDefault();
    for (image of document.querySelectorAll("#gallery>div"))
    {
        image.classList.remove("hidden");
    }
});
window.addEventListener("load", e => {
    console.log("LOAD!");
    imageList = JSON.parse(localStorage.getItem("wcbImageGallery"));
    for (let i = 0; i < imageList.length; i++)
    {
        // For some reason JSON encodes dates as a string, so we have to revive the Date.
        imageList[i].addedDate = new Date(imageList[i].addedDate);
        renderImage(imageList[i]);
    }
});