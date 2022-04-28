const paragraph = document.querySelector("#fun-fact");
const button = document.querySelector("#fetch");
const count = document.querySelector("#count");
const size = document.querySelector("#size");

button.addEventListener("click", e => {
    e.preventDefault;
    let endpoint = "https://www.boredapi.com/api/activity";
        fetch(endpoint) // Specify your API endpoint here.
        .then(response => {
            if (response.ok)
            {
                return response.json(); // This is async, don't try to pull out of here, do it in the second then().
            }
            else
            {
                paragraph.innerText = "Unidentified error, please try again later.";
                return false;
            }            
        }) // Convert the response to JSON.
        .then(data => { // In these braces, you have your JSON data.
            if (data)
            {
                let myOutput = {
                    type: data.type,
                    activity: data.activity,
                    participants: data.participants
                };

                paragraph.innerText = `Let's do a ${myOutput.type} activity with ${myOutput.participants} people! We're going to ${myOutput.activity}.`;
            }
        }).finally(() => {
            paragraph.innerText += " Request complete.";
        });
});

/*
8: We define our endpoint that we're querying.
9: We start the query (IE send it off).
10: then() tells the program to wait until the query comes back, 'then' do its body.
11: If the code for the response is "ok", then forward the data as JSON.
15: If the code isn't "ok", forward a false.
21: then() tells the program to wait until the json conversion is done, 'then' do its body.
22: If there is data (it's not false from line 18), then do the bulk of our processing.
32: After the bulk of our processing, close out by doing something (adding "Request complete.").
*/