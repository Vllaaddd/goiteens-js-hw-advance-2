const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const body = document.querySelector('body');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

start.addEventListener('click', () => {
    start.disabled = true;
      const interval = setInterval(() => {
            const number = randomIntegerFromInterval(0, 5);

            body.style.background = colors[number];
            console.log(number);
      }, 1000);

      stop.addEventListener('click', () => {
        clearInterval(interval);
        start.disabled = false
    });
});








const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minsEl = document.querySelector('.mins');
const secsEl = document.querySelector('.secs');

const date = new Date("Jan 1, 2024 00:00:00").getTime();

const interval = setInterval(() => {

    const now = new Date().getTime();
    const time = date - now;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minsEl.textContent = mins;
    secsEl.textContent = secs;

}, 1000);

