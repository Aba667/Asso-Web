document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const mobileBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Formulaire Contact
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Envoi en cours...';
            btn.disabled = true;

            setTimeout(() => {
                formMessage.style.display = 'block';
                formMessage.style.color = '#155724';
                formMessage.style.backgroundColor = '#d4edda';
                formMessage.style.padding = '10px';
                formMessage.textContent = 'Votre message a été envoyé avec succès !';
                
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
