document.addEventListener('DOMContentLoaded', () => {

    // ========================================================================= //
    // --------------------------- HEADER MANAGEMENT --------------------------- //
    // ========================================================================= //

    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sectionsForNavHighlight = document.querySelectorAll('main section[id]'); // Sections within main to track for active nav link
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('header nav');

    /**
     * @function handleHeaderScroll
     * @description Manages header appearance (sticky/shrink) and active navigation link highlighting based on scroll position.
     */
    function handleHeaderScroll() {
        // Sticky Header: Add/remove 'scrolled' class to header for styling changes
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Navigation Link Highlighting
        let currentSectionId = 'hero'; // Default to 'hero'
        const headerOffset = header.offsetHeight + 30; // Offset to account for fixed header height and a small buffer

        sectionsForNavHighlight.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Check if the current scroll position is within the bounds of this section
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.id;
            }
        });

        // Update 'active-nav' class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-nav');
            }
        });
    }

    // Initialize header state and active link on page load
    if (header && sectionsForNavHighlight.length > 0) {
        handleHeaderScroll(); // Call once on load
        window.addEventListener('scroll', handleHeaderScroll); // Add scroll listener
    }

    /**
     * @function toggleMobileNavigation
     * @description Handles the display and accessibility attributes of the mobile navigation menu.
     * Also manages body scroll when the mobile menu is open.
     */
    function toggleMobileNavigation() {
        if (mobileNavToggle && navMenu) {
            mobileNavToggle.addEventListener('click', () => {
                const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true' || false;
                mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('is-active');
                // Prevent body scroll when mobile menu is open
                document.body.classList.toggle('no-scroll', navMenu.classList.contains('is-active'));
            });

            // Close mobile menu when a navigation link is clicked
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('is-active')) {
                        mobileNavToggle.setAttribute('aria-expanded', 'false');
                        navMenu.classList.remove('is-active');
                        document.body.classList.remove('no-scroll');
                    }
                });
            });
        }
    }

    toggleMobileNavigation(); // Initialize mobile navigation toggle

    // ========================================================================= //
    // -------------------------- HERO SECTION SLIDER -------------------------- //
    // ========================================================================= //

    const heroSlides = document.querySelectorAll('.hero-slide-text');
    const heroDotsContainer = document.querySelector('.hero-navigation-dots');
    let currentHeroSlideIndex = 0;
    let heroSlideInterval;
    const HERO_SLIDE_INTERVAL_TIME = 7000; // Time in ms for each slide

    /**
     * @function createHeroDots
     * @description Generates navigation dots for the hero slider if multiple slides exist.
     */
    function createHeroDots() {
        if (!heroDotsContainer || heroSlides.length <= 1) return; // No dots needed for 0 or 1 slide

        heroSlides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.setAttribute('aria-label', `Ir al slide ${index + 1}`);
            dot.addEventListener('click', () => {
                showHeroSlide(index);
                resetHeroInterval(); // Reset timer when a dot is clicked
            });
            heroDotsContainer.appendChild(dot);
        });
    }

    /**
     * @function updateHeroDots
     * @param {number} index - The index of the currently active slide.
     * @description Highlights the navigation dot corresponding to the active hero slide.
     */
    function updateHeroDots(index) {
        if (!heroDotsContainer || heroSlides.length <= 1) return;
        const dots = heroDotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active-dot', dotIndex === index);
        });
    }

    /**
     * @function showHeroSlide
     * @param {number} index - The index of the hero slide to display.
     * @description Displays the specified hero slide and updates navigation dots.
     * Triggers a reflow to restart CSS animations on the slide content.
     */
    function showHeroSlide(index) {
        heroSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active-slide', slideIndex === index);
            // Re-trigger animation for the active slide's inner content
            if (slideIndex === index) {
                const innerContent = slide.querySelector('.hero-slide-inner-content');
                if (innerContent) {
                    innerContent.style.animation = 'none'; // Remove current animation
                    void innerContent.offsetWidth; // Force browser reflow/repaint
                    innerContent.style.animation = ''; // Re-apply animation from CSS
                }
            }
        });
        currentHeroSlideIndex = index;
        updateHeroDots(index);
    }

    /**
     * @function nextHeroSlide
     * @description Advances the hero slider to the next slide in a loop.
     */
    function nextHeroSlide() {
        const nextIndex = (currentHeroSlideIndex + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
    }

    /**
     * @function startHeroSlider
     * @description Initializes and starts the automatic progression of the hero slider.
     */
    function startHeroSlider() {
        if (heroSlides.length > 1) { // Only start interval if there's more than one slide
            heroSlideInterval = setInterval(nextHeroSlide, HERO_SLIDE_INTERVAL_TIME);
        }
    }

    /**
     * @function resetHeroInterval
     * @description Clears the current hero slide interval and restarts it.
     * Useful when manually navigating slides to prevent quick successive auto-advances.
     */
    function resetHeroInterval() {
        clearInterval(heroSlideInterval);
        startHeroSlider();
    }

    // Initialize Hero Slider if slides exist
    if (heroSlides.length > 0) {
        createHeroDots();
        showHeroSlide(0); // Show the first slide initially
        if (heroSlides.length > 1) {
            startHeroSlider();
        }
    }

    // ========================================================================= //
    // ---------------------- TESTIMONIAL AUTO-SCROLLER ---------------------- //
    // ========================================================================= //

    const testimonialWrapper = document.querySelector('.testimonial-scroll-wrapper');
    const testimonialList = testimonialWrapper ? testimonialWrapper.querySelector('.testimonial-list') : null;

    if (testimonialWrapper && testimonialList && testimonialList.children.length > 1) {
        let testimonialScrollInterval;
        const TESTIMONIAL_SCROLL_SPEED_MS = 70; // Time in ms between scroll steps
        const TESTIMONIAL_SCROLL_AMOUNT_PX = 1; // Pixels to scroll per step

        /**
         * @function cloneTestimonialsForSeamlessScroll
         * @description Clones testimonial items to create a seamless, infinite scrolling effect.
         * The number of clones depends on the wrapper height and item height.
         */
        const cloneTestimonialsForSeamlessScroll = () => {
            // Remove any existing clones before recalculating
            const existingClones = testimonialList.querySelectorAll('.testimonial-clone');
            existingClones.forEach(clone => clone.remove());

            const originalItems = Array.from(testimonialList.children).filter(child => !child.classList.contains('testimonial-clone'));
            if (originalItems.length === 0) return;

            const wrapperHeight = testimonialWrapper.clientHeight;
            const firstItem = originalItems[0]; // Assume all items have similar height for calculation
            const itemStyle = window.getComputedStyle(firstItem);
            // Calculate total height including margin
            const itemOuterHeight = firstItem.offsetHeight + parseInt(itemStyle.marginTop) + parseInt(itemStyle.marginBottom);

            if (itemOuterHeight > 0 && wrapperHeight > 0) {
                // Determine how many items are needed to fill the wrapper plus a buffer
                let itemsToCloneCount = Math.ceil(wrapperHeight / itemOuterHeight) + 2;
                // Don't clone more items than available originals
                itemsToCloneCount = Math.min(itemsToCloneCount, originalItems.length);

                for (let i = 0; i < itemsToCloneCount; i++) {
                    const clone = originalItems[i].cloneNode(true);
                    clone.classList.add('testimonial-clone'); // Mark as clone for easy identification
                    testimonialList.appendChild(clone);
                }
            }
        };

        /**
         * @function startTestimonialScrolling
         * @description Initiates the automatic scrolling of testimonials.
         * If the scroll reaches the height of the first item, that item is moved to the end.
         */
        const startTestimonialScrolling = () => {
            // Only scroll if content overflows the wrapper
            if (testimonialList.scrollHeight <= testimonialWrapper.clientHeight) return;

            clearInterval(testimonialScrollInterval); // Clear any existing interval
            testimonialScrollInterval = setInterval(() => {
                const firstItem = testimonialList.firstElementChild;
                if (!firstItem) { // Should not happen if list has children
                    clearInterval(testimonialScrollInterval);
                    return;
                }
                const itemStyle = window.getComputedStyle(firstItem);
                const itemOuterHeight = firstItem.offsetHeight + parseInt(itemStyle.marginTop) + parseInt(itemStyle.marginBottom);

                testimonialWrapper.scrollTop += TESTIMONIAL_SCROLL_AMOUNT_PX;

                // When the first item is fully scrolled out of view, move it to the end
                if (itemOuterHeight > 0 && testimonialWrapper.scrollTop >= itemOuterHeight) {
                    testimonialList.appendChild(firstItem); // Move first item to the end
                    testimonialWrapper.scrollTop -= itemOuterHeight; // Adjust scrollTop to maintain smooth scroll
                }
            }, TESTIMONIAL_SCROLL_SPEED_MS);
        };

        /**
         * @function stopTestimonialScrolling
         * @description Pauses the automatic scrolling of testimonials.
         */
        const stopTestimonialScrolling = () => {
            clearInterval(testimonialScrollInterval);
        };

        /**
         * @function initializeTestimonialScroller
         * @description Sets up the testimonial scroller, including cloning items and event listeners.
         */
        const initializeTestimonialScroller = () => {
            cloneTestimonialsForSeamlessScroll();
            // Only start scrolling if the content actually overflows
            if (testimonialList.scrollHeight > testimonialWrapper.clientHeight) {
                startTestimonialScrolling();
            }
            // Pause scrolling on mouse enter, resume on mouse leave
            testimonialWrapper.addEventListener('mouseenter', stopTestimonialScrolling);
            testimonialWrapper.addEventListener('mouseleave', () => {
                if (testimonialList.scrollHeight > testimonialWrapper.clientHeight) {
                    startTestimonialScrolling();
                }
            });
        };

        // Initialize scroller on load and re-initialize on window resize (to adjust clones)
        window.addEventListener('load', initializeTestimonialScroller);
        window.addEventListener('resize', () => {
            stopTestimonialScrolling();
            initializeTestimonialScroller();
        });
    }


    // ========================================================================= //
    // --------------------- CONTACT FORM VALIDATION & SUBMIT ------------------ //
    // ========================================================================= //

    const contactForm = document.getElementById('contactForm');
    const formStatusDisplay = document.getElementById('formStatus');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameErrorDisplay = document.getElementById('nameError');
    const emailErrorDisplay = document.getElementById('emailError');
    const messageErrorDisplay = document.getElementById('messageError');

    /**
     * @function isValidEmail
     * @param {string} email - The email string to validate.
     * @returns {boolean} True if the email is valid, false otherwise.
     * @description Basic email validation using a regular expression.
     */
    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email).toLowerCase());

    /**
     * @function displayInlineError
     * @param {HTMLElement} inputElement - The input field with an error.
     * @param {HTMLElement} errorElement - The HTML element to display the error message in.
     * @param {string} message - The error message to display.
     * @description Shows an error message associated with a form field.
     */
    const displayInlineError = (inputElement, errorElement, message) => {
        inputElement.classList.add('error'); // Add error class for styling
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    };

    /**
     * @function clearInlineError
     * @param {HTMLElement} inputElement - The input field to clear error from.
     * @param {HTMLElement} errorElement - The HTML element displaying the error message.
     * @description Clears an error message associated with a form field.
     */
    const clearInlineError = (inputElement, errorElement) => {
        inputElement.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    };

    /**
     * @function validateContactForm
     * @returns {boolean} True if all form fields are valid, false otherwise.
     * @description Validates all fields in the contact form and displays inline errors.
     */
    const validateContactForm = () => {
        let isValid = true;
        // Clear previous errors
        clearInlineError(nameInput, nameErrorDisplay);
        clearInlineError(emailInput, emailErrorDisplay);
        clearInlineError(messageInput, messageErrorDisplay);

        // Validate Name
        if (nameInput.value.trim() === '') {
            displayInlineError(nameInput, nameErrorDisplay, 'Por favor, ingresa tu nombre.');
            isValid = false;
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            displayInlineError(emailInput, emailErrorDisplay, 'Por favor, ingresa tu correo.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayInlineError(emailInput, emailErrorDisplay, 'Correo electrónico no válido.');
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            displayInlineError(messageInput, messageErrorDisplay, 'Por favor, escribe un mensaje.');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            displayInlineError(messageInput, messageErrorDisplay, 'Tu mensaje es muy corto.');
            isValid = false;
        }
        return isValid;
    };

    // Attach submit event listener to the contact form
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Reset form status message
            formStatusDisplay.className = '';
            formStatusDisplay.style.display = 'none';
            formStatusDisplay.textContent = '';

            if (validateContactForm()) {
                // --- SIMULATED FORM SUBMISSION ---
                // In a real application, you would send data to a server here (e.g., using Fetch API)
                formStatusDisplay.textContent = 'Enviando mensaje...';
                formStatusDisplay.className = 'info'; // Style for "info" message
                formStatusDisplay.style.display = 'block';

                // Simulate a delay for server response
                setTimeout(() => {
                    formStatusDisplay.textContent = '¡Mensaje enviado! Te contactaremos pronto.';
                    formStatusDisplay.className = 'success'; // Style for "success" message
                    contactForm.reset(); // Clear the form fields
                    // Clear any lingering inline errors (though validateContactForm should do this if re-run)
                    clearInlineError(nameInput, nameErrorDisplay);
                    clearInlineError(emailInput, emailErrorDisplay);
                    clearInlineError(messageInput, messageErrorDisplay);
                    formStatusDisplay.style.display = 'block';
                }, 1500); // 1.5 second delay
            } else {
                formStatusDisplay.textContent = 'Por favor, corrige los errores en el formulario.';
                formStatusDisplay.className = 'error'; // Style for "error" message
                formStatusDisplay.style.display = 'block';
            }
        });
    }


    // ========================================================================= //
    // -------------------- ANIMATE SECTIONS ON SCROLL ----------------------- //
    // ========================================================================= //

    const animatedSections = document.querySelectorAll('.animate-on-scroll');

    /**
     * @callback revealSectionOnScrollCallback
     * @param {IntersectionObserverEntry[]} entries - Array of intersection entries.
     * @param {IntersectionObserver} observer - The IntersectionObserver instance.
     * @description Callback function for IntersectionObserver to add 'is-visible' class
     * when a target element enters the viewport.
     */
    const revealSectionOnScrollCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Add class to trigger CSS animation
                observer.unobserve(entry.target); // Stop observing once visible to prevent re-triggering
            }
        });
    };

    // Create an IntersectionObserver to watch for sections entering the viewport
    const sectionScrollObserver = new IntersectionObserver(revealSectionOnScrollCallback, {
        root: null, // Observe intersections relative to the viewport
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust bottom margin to trigger a bit earlier before fully in view
    });

    // Observe each 'animate-on-scroll' section
    animatedSections.forEach(section => {
        sectionScrollObserver.observe(section);
    });


    // ========================================================================= //
    // ------------------------ BACK TO TOP BUTTON --------------------------- //
    // ========================================================================= //

    const backToTopButton = document.getElementById("backToTopBtn");

    /**
     * @function handleBackToTopButtonVisibility
     * @description Shows or hides the "Back to Top" button based on scroll position.
     */
    function handleBackToTopButtonVisibility() {
        if (backToTopButton) { // Check if button exists
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    }

    /**
     * @function scrollToTop
     * @description Smoothly scrolls the page to the top.
     */
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add scroll event listener for button visibility
    window.addEventListener('scroll', handleBackToTopButtonVisibility);

    // Add click event listener to the button
    if (backToTopButton) {
        backToTopButton.addEventListener("click", scrollToTop);
    }
    // Initial check for button visibility on load
    handleBackToTopButtonVisibility();


    // ========================================================================= //
    // ------------------------ UPDATE FOOTER YEAR --------------------------- //
    // ========================================================================= //

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear(); // Set current year in footer
    }

}); // End of DOMContentLoaded