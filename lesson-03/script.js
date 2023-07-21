document.addEventListener("DOMContentLoaded", function () {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const dropdownElement = document.querySelector(".dropdown");
    const navElement = document.querySelector(".hide-on-small-screen ul");

    if (screenWidth <= 760) {
        const menuImgSrc = "../images/menu.png"; // Replace with the actual menu image source
        const crossImgSrc = "../images/cross.png"; // Replace with the actual cross image source

        const imgElement = document.createElement("img");
        imgElement.src = menuImgSrc;
        imgElement.alt = "Menu";
        imgElement.style.height = "60px";
        imgElement.style.width = "60px";

        dropdownElement.appendChild(imgElement);

        dropdownElement.addEventListener("click", function () {
            navElement.classList.toggle("nav-hidden");
            navElement.classList.toggle("nav-visible");
            imgElement.src = navElement.classList.contains("nav-visible") ? crossImgSrc : menuImgSrc;
            imgElement.alt = navElement.classList.contains("nav-visible") ? "Cross" : "Menu";
        });
    }
});

// Initialize Prism.js
Prism.highlightAll();

function copyCode() {
    const codeBlock = document.getElementById("code-block");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode1() {
    const codeBlock = document.getElementById("code-block1");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode2() {
    const codeBlock = document.getElementById("code-block2");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode3() {
    const codeBlock = document.getElementById("code-block3");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode4() {
    const codeBlock = document.getElementById("code-block4");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode5() {
    const codeBlock = document.getElementById("code-block5");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode6() {
    const codeBlock = document.getElementById("code-block6");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function copyCode7() {
    const codeBlock = document.getElementById("code-block7");
    navigator.clipboard.writeText(codeBlock.innerText)
        .then(() => {
            showNotification("Code Copied !!", "success");
        })
        .catch((error) => {
            showNotification("Failed To Copy: " + error, "error");
        });
}

function showNotification(message, type) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add(type, "show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}