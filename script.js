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
