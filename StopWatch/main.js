const stopWatch = document.getElementById('stopwatch')
const start = document.getElementById('start')
const reset = document.getElementById('reset');

function timeToString(millis) {
    const ms = millis % 1000;
    const s = Math.floor(millis / 1000) % 60;
    const m = Math.floor(millis / 1000 / 60) % 60;

    const formattedms = ms.toString().padStart(3, '0');
    const formatteds = s.toString().padStart(2, '0');
    const formattedm = m.toString().padStart(2, '0')

    return `${formattedm}:${formatteds}.${formattedms}`;
};

let state = 'start';
let timerID;
let elapsedMs = 0;

start.addEventListener('click', () => {

    if (state === 'start') {
        state = 'stop';
        start.textContent = 'ストップ';
        start.classList.add('stop');

        let startMs = Date.now();

        startMs = startMs - elapsedMs;

        timerID = setInterval(() => {
            const nowMs = Date.now();
            elapsedMs = nowMs - startMs;

            stopWatch.textContent = timeToString(elapsedMs);
        }, 10);
    } else {
        state = 'start';
        clearInterval(timerID);
        start.textContent = 'リスタート';
        start.classList.remove('stop');
    }
});

reset.addEventListener('click', () => {
    clearInterval(timerID);
    start.textContent = 'スタート';
    start.classList.remove('stop');
    elapsedMs = 0;
    stopWatch.textContent = '00:00.000';
});
