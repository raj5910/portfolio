// ===================================
// TYPING ANIMATION
// ===================================

const words = [
    "Web Developer",
    "Frontend Developer",
    "Firebase Developer",
    "UI Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing");

function type() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

if (typingText) {
    type();
}

// ===================================
// CUSTOM CURSOR
// ===================================

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

    const hoverElements = document.querySelectorAll(
        "a, button, .skill-card, .project-card, .social-card"
    );

    hoverElements.forEach(el => {

        el.addEventListener("mouseenter", () => {

            cursor.style.width = "40px";
            cursor.style.height = "40px";
            cursor.style.background =
                "rgba(0,229,255,.15)";
        });

        el.addEventListener("mouseleave", () => {

            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.background = "transparent";
        });

    });

}

// ===================================
// COUNTER ANIMATION
// ===================================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target =
                parseInt(
                    counter.getAttribute("data-target")
                );

            let current = 0;

            const increment =
                Math.ceil(target / 100);

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = current;

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText = target + "+";
                }
            };

            updateCounter();

            counterObserver.unobserve(counter);
        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ===================================
// SCROLL REVEAL
// ===================================

const revealElements =
document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .stat-card, .social-card"
);

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition =
        "all .8s ease";

});

const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ===================================
// ACTIVE NAVBAR LINK
// ===================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

});

// ===================================
// HERO FADE EFFECT
// ===================================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    if (heroContent) {

        heroContent.style.opacity =
            1 - window.scrollY / 600;
    }

});

// ===================================
// PARALLAX GLOW SHAPES
// ===================================

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const shape1 =
        document.querySelector(".shape1");

    const shape2 =
        document.querySelector(".shape2");

    const shape3 =
        document.querySelector(".shape3");

    if (shape1) {
        shape1.style.transform =
            `translateY(${scroll * 0.15}px)`;
    }

    if (shape2) {
        shape2.style.transform =
            `translateY(${-scroll * 0.1}px)`;
    }

    if (shape3) {
        shape3.style.transform =
            `translateY(${scroll * 0.05}px)`;
    }

});

// ===================================
// SMOOTH SCROLL
// ===================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            .scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log(
    "%c< Raj Patel />",
    "color:#00e5ff;font-size:24px;font-weight:bold;"
);

console.log(
    "%cWelcome to my portfolio 🚀",
    "color:#58a6ff;font-size:14px;"
);
