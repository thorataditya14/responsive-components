const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const fakeUploadPercentage = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const interval = setInterval(() => {
    progress.style.width = fakeUploadPercentage[i] + "%";
    loading.innerHTML = fakeUploadPercentage[i] + "%";
    i++;
    console.log(i);
    if (i == fakeUploadPercentage.length) {
        clearInterval(interval);
        loading.innerHTML = "Completed";
    }
}, 500);