// =========================
// TYPING ANIMATION
// =========================

const words = [
    "Web Developer",
    "Web Designer",
    "Frontend Developer",
    "Firebase Developer",
    "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 120
    );
}

typeEffect();

// =========================
// CUSTOM CURSOR
// =========================

const cursor =
document.querySelector(".cursor");

document.addEventListener(
    "mousemove",
    (e) => {

        cursor.style.left =
            e.clientX + "px";

        cursor.style.top =
            e.clientY + "px";
    }
);

// =========================
// CURSOR ENLARGE ON HOVER
// =========================

const hoverItems =
document.querySelectorAll(
    "a, button, .skill-card, .project-card"
);

hoverItems.forEach(item => {

    item.addEventListener(
        "mouseenter",
        () => {

            cursor.style.width = "40px";
            cursor.style.height = "40px";

            cursor.style.background =
                "rgba(0,229,255,.15)";
        }
    );

    item.addEventListener(
        "mouseleave",
        () => {

            cursor.style.width = "20px";
            cursor.style.height = "20px";

            cursor.style.background =
                "transparent";
        }
    );
});

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter =
            entry.target;

            const target =
            Number(
                counter.getAttribute(
                    "data-target"
                )
            );

            let count = 0;

            const speed =
            target / 100;

            const updateCounter =
            () => {

                count += speed;

                if (count < target) {

                    counter.innerText =
                    Math.floor(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                    target + "+";
                }
            };

            updateCounter();

            counterObserver.unobserve(
                counter
            );
        }
    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .stat-card, .social-card"
);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(60px)";

    element.style.transition =
        "all 0.8s ease";
});

const revealObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";
        }
    });

},{
    threshold:0.2
});

revealElements.forEach(element => {

    revealObserver.observe(element);
});

// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
            section.offsetTop - 150;

            const sectionHeight =
            section.clientHeight;

            if (
                pageYOffset >= sectionTop
            ) {

                current =
                section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);

// =========================
// PARALLAX EFFECT
// =========================

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
        window.scrollY;

        const shape1 =
        document.querySelector(
            ".shape1"
        );

        const shape2 =
        document.querySelector(
            ".shape2"
        );

        const shape3 =
        document.querySelector(
            ".shape3"
        );

        if(shape1){

            shape1.style.transform =
            `translateY(${scrollY * 0.15}px)`;
        }

        if(shape2){

            shape2.style.transform =
            `translateY(${-scrollY * 0.12}px)`;
        }

        if(shape3){

            shape3.style.transform =
            `translateY(${scrollY * 0.08}px)`;
        }
    }
);

// =========================
// HERO FADE EFFECT
// =========================

window.addEventListener(
    "scroll",
    () => {

        const hero =
        document.querySelector(
            ".hero-content"
        );

        if(hero){

            hero.style.opacity =
            1 - window.scrollY / 700;
        }
    }
);

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"%cWelcome to Raj Patel's Portfolio",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);
