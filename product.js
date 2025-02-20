// script.js

// Scroll-to-top button functionality
window.onscroll = function() {toggleScrollToTopButton()};

function toggleScrollToTopButton() {
    let button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
