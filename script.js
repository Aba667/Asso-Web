document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling pour les ancres
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            document.querySelectorAll('nav a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            formMessage.style.display = 'block';

            if (name && email && message && email.includes('@')) {
                formMessage.classList.remove('error');
                formMessage.classList.add('success');
                formMessage.textContent = 'Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.';
                contactForm.reset();
            } else {
                formMessage.classList.remove('success');
                formMessage.classList.add('error');
                formMessage.textContent = 'Veuillez remplir tous les champs obligatoires (Nom, Email, Message) et vérifier votre adresse email.';
            }

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Observer les sections pour mettre à jour la navigation active
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-50% 0px -50% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // SCRIPT POUR ÉVITER LE DOUBLE-CLIC
    const actionElements = document.querySelectorAll('.button');

    actionElements.forEach(element => {
        element.addEventListener('click', function(event) {
            if (this.classList.contains('disabled')) {
                event.preventDefault();
                return;
            }

            this.classList.add('disabled');
            this.style.pointerEvents = 'none';

            setTimeout(() => {
                this.classList.remove('disabled');
                this.style.pointerEvents = 'auto';
            }, 2000);
        });
    });

    
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const scrollThreshold = 100; // Distance de défilement avant que le header ne se cache

    window.addEventListener('scroll', () => {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        // Si on défile vers le bas ET qu'on a dépassé le seuil de défilement initial
        if (currentScrollTop > lastScrollTop && currentScrollTop > scrollThreshold) {
            header.classList.add('header-hidden-completely'); // Cache le header
        }
        // Si on défile vers le haut OU qu'on est remonté au-dessus du seuil
        else if (currentScrollTop < lastScrollTop || currentScrollTop <= scrollThreshold) {
            header.classList.remove('header-hidden-completely'); // Affiche le header
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
});