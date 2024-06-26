//The code for creating the modal was taken/inspired from 'https://www.youtube.com/watch?v=MBaw_6cPmAw'
// calls a variable which selects all data-close-button. This will be used when adding a close function to the button.
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

/**
 * This creates the functionanlity for the close button.
 */
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

/**
 * This function will remove the modal from the screen once the user clicks the close button.
 */
function closeModal(modal) {
    if (modal == null ) return;
   modal.classList.remove('active');
   overlay.classList.remove('active');
}

//These are const to tell the computer that these variables can not be changed and that they are constant.
const userInput = document.getElementById("user-input");
const input = document.getElementById("goal-input");

/**
 * This will check the users input
 * to ensure that their input is valid.
 * Preventing the user from entering empty
 * tasks onto their to-do list
 */

function isAlpha(input) {
    // This will check if the input is a string, and checks for whitespaces.
    if (typeof input !== 'string' || input.trim() === '') {
        return false;
    }

    // 
    // This code was inspired by w3schools / stackoverflow / developer.mozilla.
    const letters = /^[A-Za-z\s]+$/;

     // This tests the input against that of what is held inside the letters variable.
     return letters.test(input);

}

/**
 * This will take the users input and display the text to the webapp
 * in form of a ul list. If the input is invalid. i.e. whitespace or
 * numbers. This will activate the modal informing them that something
 * went wrong and for them to input a valid goal.
 */
function goalInput() {
    if (isAlpha(userInput.value)) {
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        li.classList.add("user-goals");
        input.appendChild(li);
        let btn = document.createElement("button");
        btn.innerHTML = "&times;";
        btn.classList.add("complete");
        li.appendChild(btn);
        inputTally();
    } else {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    removeTask();   
}

/**
 * This function will remove the users list item
 * once they have completed a task. This code was 
 * used from w3schools
 */
function removeTask() {
    let close = document.getElementsByClassName("complete");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        completeTasks();
        completeScore(); 
      };
    } 
}    

/**
 * This function will tally up the users inputs 
 * and show the results on the webapp (This was taken from "Love Maths" walkthrough on CI.)
 */
function inputTally() {
    let outstanding = parseInt(document.getElementById("outstanding").innerHTML);
    document.getElementById("outstanding").innerHTML = ++outstanding;
}

/**
 * This function will take the inputTally() function
 * and show the users completed tasks (This was taken from "Love Maths" walkthrough on CI.)
 */
function completeTasks() {
    let complete = parseInt(document.getElementById("completed").innerHTML);
    document.getElementById("completed").innerHTML = ++complete;
}

/**
 * This function will decrease the number of outstanding goals
 * once a goal has been complated by the user. (This was inspired 
 * by the code from "Love Maths" walkthrough on CI.)
 */
function completeScore() {
    let score = parseInt(document.getElementById("outstanding").innerHTML);
    document.getElementById("outstanding").innerHTML = --score;
}
