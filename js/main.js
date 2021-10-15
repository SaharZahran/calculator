const btns = document.querySelectorAll(".small-btn");

const screen = document.querySelector(".input");
let number_one = 0;
let number_two = 0;
let operation = "";
let content = '';

//Show numbers on screen
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText !== "=") {
            if (number_one === 0 && btn.classList.contains('num-btn')) {
                screen.innerText += btn.innerText;
            } else if (btn.classList.contains('operation')) {
                number_one = screen.innerText;
                screen.innerText += btn.innerText;
                operation = btn.innerText;
            } else if (operation !== '' && btn.classList.contains('num-btn')) {
                screen.innerText = '';
                content += btn.innerText;
                screen.innerText = content;
                number_two = content;
            }
        } else {
            show();
            resetNum();
        }
    });
});
//Empty Screen
const clear_btn = document.querySelector(".clear");
clear_btn.addEventListener("click", () => {
    screen.innerText = "";
});

// reset numbers
function resetNum() {
    number_one = 0;
    number_two = 0;
    operation = "";
    content = '';
}
// do mathematics operations
function calculation() {
    if (operation === "+") {
        return parseInt(number_one) + parseInt(number_two);
    } else if (operation === "-") {
        return parseInt(number_one) - parseInt(number_two);
    } else if (operation === "*") {
        return parseInt(number_one) * parseInt(number_two);
    } else if (operation === "/") {
        return parseInt(number_one) / parseInt(number_two);
    }
}
//show the result
function show() {
    screen.innerText = calculation();
}