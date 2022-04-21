let input1 = document.querySelector("#fName");
let input2 = document.querySelector("#lName");
let input3 = document.querySelector("#age");
let input4 = document.querySelector("#gender");
let input5 = document.querySelector("#issue");
let startBtn = document.querySelector("#submit");
let stopBtn = document.querySelector("#clear");
// Since the inputs are object references, we can use them to build an array of inputs.
let inputs = [input1, input2, input3, input4, input5];

startBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Because our button is in a form, it automatically tries to submit the form when clicked. Note that you need to have "e" (or whatever identifier) specified as a parameter of the function in line 11.
    for (input of inputs) {
        if (input.value == "" && !input.classList.contains("alert")) { // If it's empty and not red 
            input.classList.add("alert"); // Add red.
        }
    }
});
stopBtn.addEventListener("click", function (e) {
    e.preventDefault(); // See line 12.
    for (input of inputs) {
        input.classList.remove("alert"); // Remove red.
        input.value = ""; // Remove text.
    }
});