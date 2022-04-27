const paragraph = document.querySelector("#fun-fact");
const button = document.querySelector("#fetch");

button.addEventListener("click", e => {
    e.preventDefault;

    fetch("https://api.aakhilv.me/fun/facts?num=10")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
    
});