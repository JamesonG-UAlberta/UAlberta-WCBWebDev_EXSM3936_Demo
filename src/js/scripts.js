let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
// Since the inputs are object references, we can use them to build an array of inputs.
let inputs = [input1, input2, input3];

let flashing;
startBtn.addEventListener("click", function () {
    if(flashing != 1)
    {
        flashing = setInterval(function () {
            for (input of inputs) {
                if (input.value == "" && !input.classList.contains("alert")) {
                    input.classList.add("alert");
                }
                else {
                    input.classList.remove("alert");
                }
            }
        }, 500);
    }
});
stopBtn.addEventListener("click", function () {
    clearInterval(flashing);
    flashing = 0;
    for (input of inputs) {
        input.classList.remove("alert");
    }
});