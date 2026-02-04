// ==================================
// GAKI GROUP – Landing Page Script PRO
// ==================================

document.addEventListener('DOMContentLoaded', () => {

    // ===== Scroll Smooth pour les ancres =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== Animation des sections au scroll =====
    const sections = document.querySelectorAll('section > div');
    const observerOptions = { threshold: 0.2 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.animation = 'fadeUp 0.8s ease-out forwards';
                observer.unobserve(entry.target); // pour �viter la r�p�tition
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // ===== Formulaire avec feedback =====
    const form = document.querySelector('form');
    if (form) {
        const successMessage = document.createElement('p');
        successMessage.textContent = "✅ Merci. Votre message a bien été pris en compte.";
        successMessage.className = "text-green-600 text-center mt-4 opacity-0 transition-opacity duration-500";
        form.appendChild(successMessage);

        form.addEventListener('submit', (e) => {
            // Empêche l'envoi multiple
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;

            // Affiche le message
            successMessage.classList.remove('opacity-0');
            successMessage.classList.add('opacity-100');

            // Timeout pour masquer le message après 5 secondes et réactiver le bouton
            setTimeout(() => {
                successMessage.classList.remove('opacity-100');
                successMessage.classList.add('opacity-0');
                submitButton.disabled = false;
            }, 5000);
        });
    }

    // ===== Hover filiales (optionnel) =====
    const filiales = document.querySelectorAll('ul.grid li');
    filiales.forEach(filiale => {
        filiale.addEventListener('mouseenter', () => {
            filiale.querySelector('.overlay')?.classList.add('opacity-100');
        });
        filiale.addEventListener('mouseleave', () => {
            filiale.querySelector('.overlay')?.classList.remove('opacity-100');
        });
    });
});


