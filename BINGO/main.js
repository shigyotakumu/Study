{
    const result = document.getElementById('result');

    const currentNumber = document.getElementById('current-number');
    const startButton = document.getElementById('start-button');

    const from = 1;
    const to = 75;
    const lotteryNumber = [];

    const resetLotteryNumber = nums => {
        for (let i = from; i <= to; i++) {
            nums.push(i);
        }
    };

    //1~75までの配列
    resetLotteryNumber(lotteryNumber); 

    const fragment = document.createDocumentFragment();
    let row;

    lotteryNumber.forEach((num, index) => {
        if (index % 15 === 0) {
            row = fragment.appendChild(document.createElement('div'));
            row.classList.add('row')
        };

        const column = document.createElement('div')
        column.textContent = num; //forEachの引数numを入れる
        column.classList.add('column');

        row.appendChild(column);

    });

    const resetBingo = () => {
        currentNumber.textContent = '?';
        startButton.textContent = 'GO!!';

        const hits = result.querySelectorAll('.hit');
        hits.forEach(hit => {
            hit.classList.remove('hit');
        });

        resetLotteryNumber(lotteryNumber);

    };

    result.appendChild(fragment);

    startButton.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * lotteryNumber.length);
        const winningNumber = lotteryNumber.splice(randomNumber, 1);

        if (lotteryNumber.length === 0) {
            startButton.textContent = 'RESET';
        };

        if (winningNumber.length === 0) {
            resetBingo();
            return;
        };

        currentNumber.textContent = winningNumber[0];

        const column = document.querySelectorAll('.column');
        column[winningNumber[0] - 1].classList.add('hit');

    });

}