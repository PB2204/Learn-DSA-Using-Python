document.addEventListener("DOMContentLoaded", function () {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 760) {
        const imgSrc = "images/menu.png"; // Replace with the actual image source

        const imgElement = document.createElement("img");
        imgElement.src = imgSrc;
        imgElement.alt = "Image description";
        imgElement.style.height = "60px";
        imgElement.style.width = "60px";

        const dropdownElement = document.querySelector(".dropdown");
        dropdownElement.appendChild(imgElement);
    }
});