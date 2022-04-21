const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
// Since the inputs are object references, we can use them to build an array of inputs.
const inputs = [document.querySelector("#fName"), document.querySelector("#lName"), document.querySelector("#age"), document.querySelector("#gender"), document.querySelector("#issue")];

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Because our button is in a form, it automatically tries to submit the form when clicked. Note that you need to have "e" (or whatever identifier) specified as a parameter of the function in line 11.
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