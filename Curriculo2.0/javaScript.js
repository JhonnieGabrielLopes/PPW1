document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("darkModeToggle");
    const icon = modeToggle.querySelector("i");

    const isLightMode = localStorage.getItem("darkMode") === "true";

    if (isLightMode) {
        ativarModoClaro();
    }

    modeToggle.addEventListener("click", toggleDarkMode);
});

function toggleDarkMode() {
    const modeToggle = document.getElementById("darkModeToggle");
    const icon = modeToggle.querySelector("i");

    document.body.classList.toggle("light-mode");
    document.querySelector(".menu").classList.toggle("light-mode");
    document.querySelector(".menu-toggle").classList.toggle("light-mode");
    document.querySelector(".conteudo").classList.toggle("light-mode");
    document.querySelector(".menu ul").classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");
    localStorage.setItem("darkMode", isLightMode);

    modeToggle.classList.add("rotating");

    if (isLightMode) {
        icon.classList.replace("fa-sun", "fa-moon"); 
        icon.style.color = "#000"; 
    } else {
        icon.classList.replace("fa-moon", "fa-sun"); 
        icon.style.color = "#fff"; 
    }

    setTimeout(() => modeToggle.classList.remove("rotating"), 300);
}

function ativarModoClaro() {
    document.body.classList.add("light-mode");
    document.querySelector(".menu").classList.add("light-mode");
    document.querySelector(".menu-toggle").classList.add("light-mode");
    document.querySelector(".conteudo").classList.add("light-mode");
    document.querySelector(".menu ul").classList.add("light-mode");

    const icon = document.getElementById("darkModeToggle").querySelector("i");
    icon.classList.replace("fa-sun", "fa-moon");
}

const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); 
});

window.onscroll = function() {
    var backToTopButton = document.getElementById("backToTop");
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};