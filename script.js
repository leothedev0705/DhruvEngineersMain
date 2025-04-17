// Placeholder for future JavaScript, e.g., animations or interactions

document.addEventListener('DOMContentLoaded', function() {
    console.log('Dhruv Engineers Website Loaded');

    // Simple smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.main-header nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Ensure it's an internal link
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Calculate position considering the fixed header height
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

    // Scroll Triggered Animations
    const animationTargets = document.querySelectorAll('.animate-on-scroll');

    if (animationTargets.length > 0) {
        const observerOptions = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the element is visible
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                // If the element is intersecting (visible)
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: Stop observing the element once it's visible
                    observer.unobserve(entry.target);
                } 
                 // Optional: If you want animations to reverse when scrolling up
                 // else {
                 //    entry.target.classList.remove('visible');
                 // }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe each target element
        animationTargets.forEach(target => {
            observer.observe(target);
        });
    }

    // --- Hero Carousel --- //
    const carousel = document.querySelector('.hero-carousel');
    const slides = document.querySelectorAll('.hero-carousel .hero-slide');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let currentSlide = 0;
    let autoSlideInterval = null; // Variable to hold the interval timer
    const slideIntervalTime = 5000; // Time in ms between slides
    const resumeDelay = 8000; // Delay in ms before resuming auto-slide after interaction
    let resumeTimer = null; // Timer for resuming

    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Add active class to the target slide
        slides[index].classList.add('active');
        clearInterval(autoSlideInterval);
        autoSlideInterval = null; // Explicitly nullify
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        // Clear any existing interval
        stopAutoSlide(); 
        // Start a new interval
        autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetResumeTimer() {
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(startAutoSlide, resumeDelay);
    }

    if (slides.length > 1) {
        // Arrow button listeners
        prevButton.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            resetResumeTimer(); // Reset the resume timer
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide(); 
            resetResumeTimer(); // Reset the resume timer
        });

        // --- Touch Swipe Detection ---
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Minimum pixels to count as a swipe

        carousel.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].screenX;
            stopAutoSlide(); // Stop auto-sliding on touch interaction
            clearTimeout(resumeTimer); // Clear resume timer during touch
        }, { passive: true }); // Use passive listener for better scroll performance

        carousel.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
            // Don't immediately reset timer here, handleSwipe does it if needed
        });

        function handleSwipe() {
            const swipeDistance = touchStartX - touchEndX;
            if (Math.abs(swipeDistance) >= swipeThreshold) { // Check if swipe is significant
                if (swipeDistance > 0) {
                    // Swiped Left (Next)
                    nextSlide();
                } else {
                    // Swiped Right (Previous)
                    prevSlide();
                }
                resetResumeTimer(); // Reset resume timer ONLY if a swipe occurred
            } else {
                // If it wasn't a significant swipe, restart auto slide immediately
                // or after a short delay if preferred, but restarting is simpler.
                 startAutoSlide(); 
            }
        }
        // --- End Touch Swipe Detection ---

        // Start automatic sliding initially
        startAutoSlide();
        
        // Optional: Pause auto-slide on hover over the carousel
        // carousel.addEventListener('mouseenter', stopAutoSlide);
        // carousel.addEventListener('mouseleave', startAutoSlide);

    } else {
        // Hide controls if only one slide
        if(prevButton) prevButton.style.display = 'none';
        if(nextButton) nextButton.style.display = 'none';
    }

    // Note: Client logo scroll animation is handled purely by CSS.
}); 