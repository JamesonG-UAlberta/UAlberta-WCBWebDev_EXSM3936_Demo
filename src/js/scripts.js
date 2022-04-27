const paragraph = document.querySelector("#fun-fact");
const button = document.querySelector("#fetch");
const input = document.querySelector("#count");

button.addEventListener("click", e => {
    e.preventDefault;


        fetch(`https://api.aakhilv.me/fun/facts?num=${count.value}`) // Specify your API endpoint here.
        .then(response => {
            if (response.ok)
            {
                return response.json();
            }
            else
            {
                throw "Invalid value!";
            }            
        }) // Convert the response to JSON.
        .then(data => { // In these braces, you have your JSON data.

            // Put the JSON data in the console.
            //paragraph.innerText+=" "+data;
            console.log(String(data));
            paragraph.innerHTML="-"+String(data).replaceAll(".,",".<br />-");

            /* 
                i++ (i = i + 1)
                i += 2 (i = i + 2)

                "Hello" += "World" ("HelloWorld")
            */
        }).catch(exception => { // Promise style catch, to be used after .then() statements.
            paragraph.innerText = exception;
        }).finally(() => { // Promise style finally, to be used after .then() and .catch() statements, will run regardless of if the catch fires.
            paragraph.innerText += " Request complete.";
        });


    
});