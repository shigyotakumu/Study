const result = document.getElementById("result");
const button = document.getElementById("button");
const unsei = ["大吉", "吉", "凶", "中吉", "末吉", "小吉"]

button.addEventListener("click", () => {
    const randomVlue = Math.floor(Math.random() * unsei.length);
    result.textContent = unsei[randomVlue];
});