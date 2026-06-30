document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Navbar & Box Shadow Handler
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 2. Mobile Menu (Hamburger Animation and Overlay Slide)
    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        hamburger.classList.toggle("active");
        navLinksContainer.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);

    // Close menu when clicking links on mobile
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinksContainer.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 3. Active Navigation Links Highlighter on Scroll (Scroll Spy)
    const sections = document.querySelectorAll("section");
    
    const scrollSpy = () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 150; // offset for nav execution accuracy

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", scrollSpy);

    // 4. Smooth On-Scroll Reveal Animation (Fade In / Slide Up)
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85; // triggers when 85% element enters viewport

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    // Call once initially to display elements already inside viewport on first load
    revealOnScroll();

    // 5. Button Click Interaction (Ripple Effect Simulation)
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple-effect");
            this.appendChild(ripple);
            
            // Remove ripple after finish animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});