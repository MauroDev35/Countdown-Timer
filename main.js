const $threeMinutes = document.getElementById('threeMinutes')
const $fiveMinutes = document.getElementById('fiveMinutes')
const $sevenMinutes = document.getElementById('sevenMinutes')
const $nineMinutes = document.getElementById('nineMinutes')

let threeMinutes = 180000;
let fiveMinutes = 300000;
let sevenMinutes = 420000;
let nineMinutes = 540000;
let interval;

function threeMinutesTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        let minutes = Math.floor((threeMinutes % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((threeMinutes % (1000 * 60)) / (1000));

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        $threeMinutes.textContent = `${minutes}:${seconds}`;

        if(threeMinutes < 0) {
            clearInterval(interval);
        }
        else {
            threeMinutes = threeMinutes - 1000;
        }

    }, 1000)
}

function fiveMinutesTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        let minutes = Math.floor((fiveMinutes % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((fiveMinutes % (1000 * 60)) / (1000));

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        $fiveMinutes.textContent = `${minutes}:${seconds}`;

        if(fiveMinutes < 0) {
            clearInterval(interval);
        }
        else {
            fiveMinutes = fiveMinutes - 1000;
        }

    }, 1000)
}

function sevenMinutesTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        let minutes = Math.floor((sevenMinutes % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((sevenMinutes % (1000 * 60)) / (1000));

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        $sevenMinutes.textContent = `${minutes}:${seconds}`;

        if(sevenMinutes < 0) {
            clearInterval(interval);
        }
        else {
            sevenMinutes = sevenMinutes - 1000;
        }

    }, 1000)
}

function nineMinutesTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        let minutes = Math.floor((nineMinutes % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((nineMinutes % (1000 * 60)) / (1000));

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        $nineMinutes.textContent = `${minutes}:${seconds}`;

        if(nineMinutes < 0) {
            clearInterval(interval);
        }
        else {
            nineMinutes = nineMinutes - 1000;
        }

    }, 1000)
}