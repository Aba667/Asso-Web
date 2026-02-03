document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gestion du Header au scroll (Cache/Montre) ---
    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // On descend : cacher le header
            header.classList.add('hidden');
        } else {
            // On monte : montrer le header
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    // --- 2. Menu Mobile (Burger) ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Formulaire de Contact ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            
            // Simulation d'envoi
            const originalText = btn.textContent;
            btn.textContent = 'Envoi en cours...';
            btn.disabled = true;

            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.style.marginTop = '15px';
                formMessage.style.padding = '10px';
                formMessage.style.borderRadius = '5px';
                
                // Succès
                formMessage.style.backgroundColor = '#d4edda';
                formMessage.style.color = '#155724';
                formMessage.textContent = 'Merci ! Votre message a bien été envoyé.';
                
                contactForm.reset();
                btn.textContent = originalText;
                btn.disabled = false;

                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
});
