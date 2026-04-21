document.addEventListener("DOMContentLoaded", function () {
    const navShell = document.querySelector("[data-nav-shell]");
    const navToggle = document.querySelector("[data-nav-toggle]");

    if (navShell && navToggle) {
        navToggle.addEventListener("click", function () {
            navShell.classList.toggle("is-open");
        });
    }

    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === path) {
            link.classList.add("is-active");
        }
    });

    document.querySelectorAll("[data-slideshow]").forEach(function (slideshow) {
        const slides = Array.from(slideshow.querySelectorAll("[data-slide]"));
        const dots = Array.from(slideshow.querySelectorAll("[data-slide-dot]"));

        if (slides.length < 2) {
            return;
        }

        let current = 0;

        function renderSlide(index) {
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });

            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        renderSlide(current);

        window.setInterval(function () {
            current = (current + 1) % slides.length;
            renderSlide(current);
        }, 3000);
    });
});
