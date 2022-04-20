let paragraph = document.querySelector("#paragraph");
let input = document.querySelector("#input");
/*
paragraph.innerText = "I'm going to magic this text into the page!";
paragraph.innerHTML = "Test<br/>Test";
paragraph.innerText = input.value;
*/

let button = document.querySelector("#button");

let flashing = setInterval(function() {
    if(paragraph.classList.contains("alert"))
    {
        paragraph.classList.remove("alert");
    }
    else
    {
        paragraph.classList.add("alert");
    }
}, 1000);
button.addEventListener("click", function() {
    clearInterval(flashing);
});


/*
button.addEventListener("click", function() {
    console.log("Test!");
    if(paragraph.classList.contains("alert"))
    {
        paragraph.classList.remove("alert");
    }
    else
    {
        paragraph.classList.add("alert");
    }
});
*/