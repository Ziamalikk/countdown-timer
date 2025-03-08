let interval; // Declare globally

function StartCountdown() {
    const dates = document.getElementById("date").value;
    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    const heading2 = document.getElementById("heading2");

    if (!dates) {
        clearInterval(interval);
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
        heading2.style.display = "none"; // Hide message
        return;
    }

    const inputDate = new Date(dates).getTime();
    const currentDate = new Date().getTime();
    const remainingTime = inputDate - currentDate;

    if (remainingTime <= 0) {
        clearInterval(interval);
        document.getElementById("alarm-sound").play(); // Play alarm sound

        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";

        heading2.style.display = "block"; // Show message
        return;
    }

    const totalSeconds = Math.floor(remainingTime / 1000);
    day.innerHTML = String(Math.floor(totalSeconds / (24 * 60 * 60))).padStart(2, "0");
    hour.innerHTML = String(Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60))).padStart(2, "0");
    minute.innerHTML = String(Math.floor((totalSeconds % (60 * 60)) / 60)).padStart(2, "0");
    second.innerHTML = String(totalSeconds % 60).padStart(2, "0");

    heading2.style.display = "none"; // Hide message while counting
}

document.getElementById("start").addEventListener("click", () => {
    clearInterval(interval); // Prevent multiple intervals
    StartCountdown();
    interval = setInterval(StartCountdown, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    document.getElementById("heading2").style.display = "none"; // Hide message when stopped
});
