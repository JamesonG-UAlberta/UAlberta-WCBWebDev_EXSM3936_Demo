const submitBtn = document.querySelector("#submit");
const clearBtn = document.querySelector("#clear");
// Since the inputs are object references, we can use them to build an array of inputs.
const inputIDs = ["fName", "lName", "age", "gender", "issue"];
// map() runs a method on each item in an array, and builds a new array (in the same order) based on the results of the method. Here we are returning a querySelector() based on the inputID, so we get an array of 5 elements based on our 5 strings.
const inputs = inputIDs.map(inputID => document.querySelector("#"+inputID));

/*
-- Arrow Notation --
Given a function:

function (x)
{
    return x + 1;
}

You can express that using "arrow notation" to save space, like so:

x => x+1

So, more complex:

function (x)
{
    return (Math.floor(x)*2)-1;
}

into

x => (Math.floor(x)*2)-1

THIS ONLY WORKS IF THE FUNCTION CAN BE EXPRESSED IN ONE STATEMENT. Otherwise you need to declare a code block:

x => {
    let variable = 5;
    return x+variable; 
}

*/


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