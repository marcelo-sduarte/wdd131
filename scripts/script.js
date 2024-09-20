
const myTitle = "WDD 131 - Dynamic Web Fundamentals - Marcelo Duarte";
document.addEventListener("DOMContentLoaded", function () {
    document.title = myTitle;
    });






/*
1. Get references to all the buttons on the page in an array format.
2. Loop through all the buttons and add a click event listener to each one.

When any button is pressed, the createParagraph() function will be run.
*/

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}