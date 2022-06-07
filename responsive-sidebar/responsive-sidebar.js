const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".active");

dark.addEventListener("click", () => {
    sidebar.className = "sidebar";
    activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
});


const listItem = document.querySelectorAll(".list-item");

for (let i = 0; i < listItem.length; i++) {
    const element = listItem[i];
    element.addEventListener("click", () => {
        const current = document.getElementsByClassName("active")[0];
        current.className = current.className.replace(" active", "");
        element.className += " active";
    });
};