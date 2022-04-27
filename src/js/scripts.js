const paragraph = document.querySelector("#fun-fact");
const button = document.querySelector("#fetch");
const count = document.querySelector("#count");
const size = document.querySelector("#size");

button.addEventListener("click", e => {
    e.preventDefault;
    let endpoint = "https://api.aakhilv.me/fun/facts?";
    if (count.value !== "") {
        endpoint += "count="+count.value+"&";
    }
    if (size.value !== "") {
        endpoint += "size="+size.value+"&";
    }
    if (endpoint[endpoint.length-1] == "&")
    {
        endpoint = endpoint.slice(0,endpoint.length-1);
    }
    console.log(endpoint);
    /*
        fetch(endpoint) // Specify your API endpoint here.
        .then(response => {
            if (response.ok)
            {
                return response.json();
            }
            else
            {
                paragraph.innerText = "You entered a bad. Please try again.";
                return false;
            }            
        }) // Convert the response to JSON.
        .then(data => { // In these braces, you have your JSON data.
            if (data)
            {
                console.log(String(data));
                paragraph.innerHTML="-"+String(data).replaceAll(".,",".<br />-");
            }
            // Put the JSON data in the console.
            //paragraph.innerText+=" "+data;
            

            /* 
                i++ (i = i + 1)
                i += 2 (i = i + 2)

                "Hello" += "World" ("HelloWorld")
    
        }).finally(() => {
            paragraph.innerText += " Request complete.";
        });/*.catch(exception => { // Promise style catch, to be used after .then() statements.
            paragraph.innerText = exception;
        }).finally(() => { // Promise style finally, to be used after .then() and .catch() statements, will run regardless of if the catch fires.
            paragraph.innerText += " Request complete.";
        });
        */




        
});