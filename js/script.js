document.addEventListener('DOMContentLoaded', function() {


    // плав прокрутка к секциям
    const navLinks = document.querySelectorAll('.nav__menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    //моб меню
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');

            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
            }
        });
    }

    //анимация при скроле
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .project-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)'
            }
        });
    }

    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});