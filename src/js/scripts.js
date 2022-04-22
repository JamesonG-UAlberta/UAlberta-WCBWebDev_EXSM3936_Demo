const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
const showHideBtn = document.querySelector("#showHide");
// Since the inputs are object references, we can use them to build an array of inputs.
const inputIDs = ["fName", "lName", "age", "gender", "issue", "weight", "height", "smoker"];
// map() runs a method on each item in an array, and builds a new array (in the same order) based on the results of the method. Here we are returning a querySelector() based on the inputID, so we get an array of 5 elements based on our 5 strings.
const inputs = inputIDs.map(inputID => document.querySelector("#"+inputID));

const optionalFields = document.querySelector("#optional");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Because our button is in a form, it automatically tries to submit the form when clicked. Note that you need to have "e" (or whatever identifier) specified as a parameter of the function in line 11.

    /*
    for (let i = 0; i < inputs.length; i++)
    {
        let input = inputs[i];
        // Rest of the loop here.
    }
    */
    for (input of inputs) {
        if (input.value == "" && !input.classList.contains("alert")) { // If it's empty and not red 
            input.classList.add("alert"); // Add red.
        }
    }
});
clearBtn.addEventListener("click", function (e) {
    e.preventDefault(); // See line 12.
    for (input of inputs) {
        input.classList.remove("alert"); // Remove red.
        input.value = ""; // Remove text.
    }
});
showHideBtn.addEventListener("click", function (e) {
    e.preventDefault(); // See line 12.
    if (optionalFields.classList.contains("hidden")) { // If fields are hidden.
        showHideBtn.innerText = "Hide Optional Fields";
        showHideBtn.classList.remove("show");
        optionalFields.classList.remove("hidden");
    }
    else
    {
        showHideBtn.innerText = "Show Optional Fields";
        showHideBtn.classList.add("show");
        optionalFields.classList.add("hidden");
    }
});