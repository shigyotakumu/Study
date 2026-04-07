const button = document.getElementById('button');
let count = 0;

button.addEventListener('click', () => {
    count++;

    if (count === 11){
        count = 0;
    }
     button.textContent = count;
});