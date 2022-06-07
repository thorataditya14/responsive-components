const circle = document.querySelector(".progress-circle");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPercentage = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
    circle.style.strokeDashoffset =
        circumference - (fakeUploadPercentage[i] / 100) * circumference;
    loading.innerHTML = fakeUploadPercentage[i] + "%";
    i++;
    console.log(i);
    if (i == fakeUploadPercentage.length) {
        clearInterval(interval);
        loading.innerHTML = "Ok :)";
    }
}, 500);