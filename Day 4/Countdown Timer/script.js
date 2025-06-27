let mStr, sStr, input, intervalID, isPaused = false, remainingTime;

document.getElementById("inputPannel").addEventListener("submit", (e) => {
    e.preventDefault();
    input = document.getElementById("timeInput").value.trim();
    if (!/^\d+$/.test(input)) {
        alert("Invalid Input");
        document.getElementById("timeInput").value = "";
        return
    } else if (input == "0") {
        alert("Please enter the input greater then zero!");
        document.getElementById("timeInput").value = "";
        return;
    }
    displayOnPannel(input);
    isPaused = false;
    document.getElementById("pauseBtn").textContent = "Pause";
    document.getElementById("timeInput").value = "";
})

function displayOnPannel(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let minBox = document.querySelectorAll(".min");
    let secBox = document.querySelectorAll(".sec");

    mStr = minutes.toString().padStart(2, "0");
    sStr = seconds.toString().padStart(2, "0");

    minBox[0].innerText = mStr[0];
    minBox[1].innerText = mStr[1];
    secBox[0].innerText = sStr[0];
    secBox[1].innerText = sStr[1];

    minBox.forEach((ele) => {
        ele.classList.add("animate");
        setTimeout(() => { ele.classList.remove("animate") }, 500);
    })
    secBox.forEach((ele) => {
        ele.classList.add("animate");
        setTimeout(() => { ele.classList.remove("animate") }, 500);
    })
}

function timerStart(time) {
    let count = 0;
    intervalID = setInterval(() => {
        count++;
        let displayTime = time - count;
        remainingTime = displayTime;
        displayOnPannel(displayTime);
        if (count == time) {
            displayOnPannel(0);
            playSound();
            setTimeout(() => alert("Time is over"), 1000);
            clearInterval(intervalID);
        }
    }, 1000);
}

function playSound() {
    document.getElementById("alarmSound").play();
}

document.getElementById("timerStartBtn").addEventListener("click", () => {
    if (input != undefined) {
        if (intervalID) {
            clearInterval(intervalID);
        }
        timerStart(input);
    } else {
        alert("Please enter time");
    }
    isPaused = false;
    document.getElementById("pauseBtn").textContent = "Pause";
}
);

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(intervalID);
    displayOnPannel(0);
    input = undefined;
    alert("Timer Reset");
    remainingTime = 0;
    isPaused = false;
    document.getElementById("pauseBtn").textContent = "Pause";
})

document.getElementById("pauseBtn").addEventListener("click", () => {
    if (!isPaused) {
        document.getElementById("pauseBtn").textContent = "Resume";
        clearInterval(intervalID);
    } else {
        document.getElementById("pauseBtn").textContent = "Pause";
        if (remainingTime > 0) {
            timerStart(remainingTime);
        }
    }
    isPaused = !isPaused;
})