document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
            
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const menuIcon = document.querySelector('.menu-icon i');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    });

    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuIcon.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    let slideIndex = 0;
    const slides = document.querySelectorAll('.carrossel-slide'); // 
    const dotsContainer = document.querySelector('.dots-container'); // 
    const prevButton = document.querySelector('.carrossel-container .prev'); // 
    const nextButton = document.querySelector('.carrossel-container .next'); // 

    function createDots() {
        if (!slides.length || !dotsContainer) return;
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => currentSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function showSlides(n) {
        if (!slides.length) return;
        slideIndex = (n + slides.length) % slides.length;

        slides.forEach(slide => slide.style.display = 'none');
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
        dots.forEach(dot => dot.classList.remove('active'));

        if(slides[slideIndex]) slides[slideIndex].style.display = 'block';
        if (dots[slideIndex]) {
            dots[slideIndex].classList.add('active');
        }
    }

    if (slides.length > 0) {
        createDots();
        showSlides(slideIndex);
        if (prevButton) prevButton.addEventListener('click', () => showSlides(slideIndex -= 1));
        if (nextButton) nextButton.addEventListener('click', () => showSlides(slideIndex += 1));
    }
});

