let input = document.querySelector("#input");
let output = document.querySelector("#output");
let update = document.querySelector("#update");

update.addEventListener("click", function() {
    output.innerText = input.value;
});