const result = document.getElementById("result");
const button = document.getElementById("button");
const restartButton = document.getElementById("restart-button");
const unsei = ["大吉", "吉", "凶", "中吉", "末吉", "小吉"];

restartButton.disabled = true;

button.addEventListener("click", () => {
    const randomValue = Math.floor(Math.random() * unsei.length);
    result.textContent = unsei[randomValue];
    button.disabled = true;
    restartButton.disabled = false;
});

restartButton.addEventListener("click", () => {
    result.textContent = "";
    button.disabled = false;
    restartButton.disabled = true;
});
