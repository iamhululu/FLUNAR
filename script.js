const countDownDate = new Date("2025-04-15T21:00:00+06:00").getTime(); // Bangladesh Time (GMT+6)

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const statusElement = document.getElementById("status");

function updateTimer() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        statusElement.textContent = "Liquidity Unlocked!";
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
}

// Initial call
updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// Add animation to numbers
const timeNumbers = document.querySelectorAll('.time-box span:first-child');
timeNumbers.forEach((num, index) => {
    num.style.animation = `numScale 0.5s ease ${index * 0.1}s both`;
});

document.styleSheets[0].insertRule(`
    @keyframes numScale {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
`, 0);
