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

listItem.forEach((item) => {
    item.addEventListener("click", () => {
        listItem.forEach((element) => {
            element.classList.remove("active");
        });
        item.classList.add("active");
    });
});