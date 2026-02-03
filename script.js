document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Mobile ---
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Fermer le menu au clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // --- Formulaire de Contact ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Envoi...';
            btn.disabled = true;

            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.style.color = 'green';
                formMessage.textContent = 'Message envoyé avec succès !';
                
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 4000);
            }, 1500);
        });
    }
});
