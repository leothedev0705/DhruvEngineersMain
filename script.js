// Placeholder for future JavaScript, e.g., animations or interactions

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dhruv Engineers Website Loaded');

    // Smooth scroll implementation
    const navLinks = document.querySelectorAll('.main-header nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = document.querySelector('.main-header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enhanced Carousel Implementation
    const carousel = document.querySelector('.hero-carousel');
    const slides = document.querySelectorAll('.hero-slide');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    if (!carousel || !slides.length || !prevButton || !nextButton) {
        console.error('Carousel elements not found');
        return;
    }

    let currentSlide = 0;
    let isAnimating = false;
    
    function showSlide(index, direction) {
        if (isAnimating) return;
        isAnimating = true;

        // Normalize the index
        index = (index + slides.length) % slides.length;
        
        const currentSlideElement = slides[currentSlide];
        const nextSlideElement = slides[index];
        
        // Remove any existing animation classes
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next', 'slide-left', 'slide-right', 'slide-left-out', 'slide-right-out');
        });
        
        if (direction === 'next') {
            currentSlideElement.classList.add('slide-left-out');
            nextSlideElement.classList.add('slide-left');
        } else {
            currentSlideElement.classList.add('slide-right-out');
            nextSlideElement.classList.add('slide-right');
        }
        
        nextSlideElement.classList.add('active');
        
        // Update current slide index
        currentSlide = index;
        
        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 2000); // Match with CSS animation duration (2 seconds)
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1, 'next');
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1, 'prev');
    }
    
    // Event Listeners
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        resetAutoSlide();
    });
    
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        resetAutoSlide();
    });
    
    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoSlide();
        }
    });
    
    // Auto-advance slides with longer interval to account for animation
    let autoSlideInterval = setInterval(nextSlide, 7000); // 7 seconds (2s animation + 5s display)
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 7000);
    }
    
    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 7000);
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoSlideInterval);
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        resetAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeDistance = touchStartX - touchEndX;
        const threshold = 50;
        
        if (Math.abs(swipeDistance) > threshold) {
            if (swipeDistance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }

    // Initialize first slide
    slides[0].classList.add('active');

    // Scroll animation observer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => observer.observe(element));

    // Note: Client logo scroll animation is handled purely by CSS.

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-header nav');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navLinks = document.querySelectorAll('.main-header nav a');

    function toggleMenu() {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize (if open)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 