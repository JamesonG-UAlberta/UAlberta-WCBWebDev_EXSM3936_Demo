const paragraph = document.querySelector("#fun-fact");
const button = document.querySelector("#fetch");

button.addEventListener("click", e => {
    e.preventDefault;

    fetch("https://api.aakhilv.me/fun/facts?num=1") // Specify your API endpoint here.
        .then(response => response.json()) // Convert the response to JSON.
        .then(data => { // In these braces, you have your JSON data.

            // Put the JSON data in the console.
            paragraph.innerText+=" "+data;

            /* 
                i++ (i = i + 1)
                i += 2 (i = i + 2)

                "Hello" += "World" ("HelloWorld")
            */
        });
    
});