let guessCount = 1;
const maxCount = 7;
let randomNumber = Math.floor(Math.random() * 100) + 1;

const container = document.getElementById("container");
const inputNumber = document.getElementById("number-input");
const submitButton = document.getElementById("submit-button");
const resultList = document.getElementById("result");
const message = document.getElementById("message");
let restartButton;

submitButton.addEventListener("click", () => {
    const guessNumber = Number(inputNumber.value.trim());

    if (Number.isNaN(guessNumber)) {
        return;
    }

    const li = document.createElement("li");

    if (guessNumber === randomNumber) {
        li.textContent = `${guessNumber}は正解です`;
        message.textContent = `congrats!! ${guessNumber}は正解です！！`
        message.classList.add("correct");
        finishGuess();
    } else if (guessNumber < randomNumber) {
        li.textContent = `${guessNumber}より大きいです`;
    } else {
        li.textContent = `${guessNumber}より小さいです`;
    }
    if (guessCount === maxCount && guessNumber !== randomNumber) {
        message.textContent = `Game Over 正解は${randomNumber}です！！`
        message.classList.add("incorrect");
        finishGuess();
    }

    resultList.appendChild(li);
    inputNumber.value = "";
    inputNumber.focus();
    guessCount++;

});

inputNumber.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") {
        return;
    };
    submitButton.click();
    e.preventDefault();
})

function finishGuess() {
    inputNumber.disabled = true;
    submitButton.disabled = true;
    restartButton = document.createElement("button");
    restartButton.textContent = "リスタート";
    restartButton.addEventListener("click", restartGame);
    container.appendChild(restartButton);
}

function restartGame() {
    inputNumber.disabled = false;
    submitButton.disabled = false;

    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }

    restartButton.parentNode.removeChild(restartButton);
    message.removeAttribute("class");
    message.textContent = "";
    guessCount = 1;
    randomNumber = Math.floor(Math.random() * 100) + 1;
}