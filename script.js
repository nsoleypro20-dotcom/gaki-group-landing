// ==================================
// GAKI GROUP – Landing Page Script PRO
// ==================================

document.addEventListener('DOMContentLoaded', () => {

    /* ==============================
       SMOOTH SCROLL (ANCHORS)
    ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ==============================
       SCROLL ANIMATIONS
    ============================== */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeUp');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => observer.observe(el));

    /* ==============================
       PARALLAX EFFECT ON HERO
    ============================== */
    const heroBg = document.querySelector('.hero-bg');
    const heroOverlay = document.querySelector('.hero-bg::before');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5; // Adjust the rate for subtlety

        if (heroBg) {
            heroBg.style.transform = `translateY(${rate * 0.3}px)`;
        }

        // Apply parallax to the overlay as well
        const overlay = heroBg.querySelector('::before');
        if (overlay) {
            overlay.style.transform = `translateY(${rate * 0.1}px)`;
        }
    });

    /* ==============================
       FORM ANIMATIONS
    ============================== */
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
            input.style.boxShadow = '0 8px 20px rgba(74, 44, 127, 0.15)';
        });

        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = '0 0 0 4px rgba(88, 51, 127, 0.15)';
        });
    });

    /* ==============================
       SUBTLE HOVER EFFECTS ON LINKS
    ============================== */
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-1px)';
            link.style.transition = 'transform 0.2s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    /* ==============================
       CONTACT FORM UX FEEDBACK
    ============================== */
    const form = document.querySelector('form');
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');

    const successMessage = document.createElement('p');
    successMessage.textContent = "✅ Merci. Votre message a bien été pris en compte.";
    successMessage.className = "text-green-600 text-center mt-4 opacity-0 transition-opacity duration-500";
    form.appendChild(successMessage);

    form.addEventListener('submit', () => {

        // UX : empêche les doubles clics
        submitButton.disabled = true;
        submitButton.classList.add('opacity-60', 'cursor-not-allowed');

        // Affiche feedback
        successMessage.classList.remove('opacity-0');
        successMessage.classList.add('opacity-100');

        // Réactivation après 5 secondes
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.classList.remove('opacity-60', 'cursor-not-allowed');
            successMessage.classList.remove('opacity-100');
            successMessage.classList.add('opacity-0');
        }, 5000);
    });

});
