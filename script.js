document.addEventListener('DOMContentLoaded', () => {

    // ========================================================================= //
    // ---------------------- DYNAMIC CONTENT INJECTION ------------------------ //
    // ========================================================================= //

    function populateContent() {
        if (typeof siteContent === 'undefined') {
            console.error("siteContent object not found. Make sure content.js is loaded.");
            return;
        }

        // 1. Navigation Menu
        const desktopNavUl = document.createElement('ul');
        siteContent.navLinks.forEach(link => {
            desktopNavUl.innerHTML += `<li><a href="${link.href}" class="nav-link">${link.text}</a></li>`;
        });
        document.querySelector('.desktop-nav').appendChild(desktopNavUl);

        // 2. Hero Section Slider
        const heroWrapper = document.getElementById('hero-slider-wrapper');
        siteContent.heroSlides.forEach(slide => {
            heroWrapper.innerHTML += `
                <div class="hero-slide-text">
                    <div class="hero-slide-inner-content">
                        <h1>
                            <span class="line1">${slide.line1}</span>
                            <span class="line2">${slide.line2}</span>
                        </h1>
                        <p>${slide.paragraph}</p>
                        <div class="hero-buttons">
                            <a href="${slide.button1_link}" class="btn btn-primary nav-link">${slide.button1_text}</a>
                            <a href="${slide.button2_link}" class="btn btn-tertiary nav-link">${slide.button2_text}</a>
                        </div>
                    </div>
                </div>
            `;
        });

        // 3. Philosophy Section
        document.getElementById('philosophy-title').innerHTML += siteContent.philosophy.title;
        document.getElementById('philosophy-subtitle').textContent = siteContent.philosophy.subtitle;
        document.getElementById('philosophy-p1').innerHTML = siteContent.philosophy.p1;
        document.getElementById('philosophy-p2').textContent = siteContent.philosophy.p2;
        document.getElementById('philosophy-p3').textContent = siteContent.philosophy.p3;
        const pillarsGrid = document.getElementById('pillars-grid');
        siteContent.philosophy.pillars.forEach(pilar => {
            pillarsGrid.innerHTML += `
                <div class="pilar-card">
                    <h4>${pilar.title}</h4>
                    <p>${pilar.description}</p>
                </div>
            `;
        });

        // 4. Benefits Section
        document.getElementById('benefits-title').textContent = siteContent.benefits.title;
        document.getElementById('benefits-subtitle').textContent = siteContent.benefits.subtitle;
        const benefitsGrid = document.getElementById('benefits-grid');
        siteContent.benefits.items.forEach(item => {
            benefitsGrid.innerHTML += `
                <div class="benefit-item">
                    <div class="benefit-icon"><img src="${item.icon}" alt="Icono de ${item.title}" loading="lazy"></div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        });
        
        // 5. Video Section
        document.getElementById('video-title').textContent = siteContent.video.title;
        document.getElementById('video-subtitle').textContent = siteContent.video.subtitle;
        document.getElementById('video-cta-btn').textContent = siteContent.video.cta_button_text;

        // 6. Programs Section
        document.getElementById('programs-title').textContent = siteContent.programs.title;
        document.getElementById('programs-subtitle').textContent = siteContent.programs.subtitle;
        const programsContainer = document.getElementById('program-cards-container');
        siteContent.programs.cards.forEach(card => {
            programsContainer.innerHTML += `
                <div class="program-card">
                    <img src="${card.image}" alt="Imagen de ${card.title}" loading="lazy">
                    <div class="program-card-content">
                        <h3>${card.title}</h3>
                        <p>${card.description}</p>
                        <a href="${card.button_link}" class="btn btn-secondary nav-link">${card.button_text}</a>
                    </div>
                </div>
            `;
        });

        // 7. Schedule Section - UPDATED SCHEDULE
        document.getElementById('schedule-title').textContent = siteContent.schedule.title;
        document.getElementById('schedule-subtitle').textContent = siteContent.schedule.subtitle;
        document.getElementById('schedule-cta-title').textContent = siteContent.schedule.cta_title;
        document.getElementById('schedule-cta-p1').textContent = siteContent.schedule.cta_p1;
        document.getElementById('schedule-cta-btn').textContent = siteContent.schedule.cta_button_text;
        document.getElementById('schedule-table-container').innerHTML = `
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Hora</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="time-slot">10:00 - 11:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="class-kids">BJJ Niños<small>(7-12 años)</small></td>
                </tr>
                <tr>
                    <td class="time-slot">11:00 - 12:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="class-kids">BJJ Niños<small>(4-6 años)</small></td>
                </tr>
                <tr>
                    <td class="time-slot">11:30 - 12:30</td>
                    <td class="class-beginner">BJJ Básico<small>(Gi)</small></td>
                    <td class="class-beginner">BJJ Básico<small>(No-Gi)</small></td>
                    <td class="class-beginner">BJJ Básico<small>(Gi)</small></td>
                    <td class="class-beginner">BJJ Básico<small>(No-Gi)</small></td>
                    <td class="class-beginner">BJJ Básico<small>(Gi)</small></td>
                    <td></td>
                </tr>
                 <tr>
                    <td class="time-slot">17:00 - 18:00</td>
                    <td class="class-juvenil">BJJ Juvenil</td>
                    <td class="class-juvenil">BJJ Juvenil</td>
                    <td class="class-juvenil">BJJ Juvenil</td>
                    <td class="class-juvenil">BJJ Juvenil</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="time-slot">20:15 - 22:30</td>
                    <td class="class-bjj">BJJ<small>(Gi)</small></td>
                    <td class="class-nogi">BJJ<small>(No-Gi)</small></td>
                    <td class="class-bjj">BJJ<small>(Gi)</small></td>
                    <td class="class-nogi">BJJ<small>(No-Gi)</small></td>
                    <td class="class-bjj">BJJ<small>(Gi)</small></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        `;

        // 8. Instructor Section
        document.getElementById('instructor-title').textContent = siteContent.instructor.title;
        document.getElementById('instructor-subtitle').textContent = siteContent.instructor.subtitle;
        document.getElementById('instructor-name').textContent = siteContent.instructor.name;
        document.getElementById('instructor-belt').textContent = siteContent.instructor.belt;
        document.getElementById('instructor-bio-p1').textContent = siteContent.instructor.bio1;
        document.getElementById('instructor-bio-p2').textContent = siteContent.instructor.bio2;
        document.getElementById('instructor-bio-p3-label').textContent = siteContent.instructor.bio3_label;
        document.getElementById('instructor-bio-p3-text').textContent = siteContent.instructor.bio3_text;

        // 9. Testimonials Section
        document.getElementById('testimonials-title').textContent = siteContent.testimonials.title;
        document.getElementById('testimonials-subtitle').textContent = siteContent.testimonials.subtitle;
        const testimonialList = document.getElementById('testimonial-list');
        siteContent.testimonials.reviews.forEach(review => {
            testimonialList.innerHTML += `
                <div class="testimonial-item">
                    <p>"${review.quote}"</p>
                    <cite>${review.author}</cite>
                </div>
            `;
        });

        // 10. Blog Section
        document.getElementById('blog-title').textContent = siteContent.blog.title;
        document.getElementById('blog-subtitle').textContent = siteContent.blog.subtitle;
        const blogContainer = document.getElementById('blog-posts-container');
        siteContent.blog.posts.forEach(post => {
            blogContainer.innerHTML += `
                <div class="program-card blog-post">
                    <img src="${post.image}" alt="Imagen de ${post.title}" loading="lazy">
                    <div class="program-card-content">
                        <h3>${post.title}</h3>
                        <p>${post.summary}</p>
                        <button class="btn btn-secondary read-more-btn">Leer Más</button>
                        <div class="full-article-content" style="display: none;">${post.full_content}</div>
                    </div>
                </div>
            `;
        });
        
        // 11. Contact Section
        document.getElementById('contact-subtitle').textContent = siteContent.contact.subtitle;
        document.getElementById('contact-phone').textContent = siteContent.contact.phone;
        document.getElementById('contact-email').textContent = siteContent.contact.email;
        
        console.log("Website content populated successfully!");
    }
    
    // ========================================================================= //
    // ---------------------- INITIALIZATION & EVENT LISTENERS ----------------- //
    // ========================================================================= //

    // 1. Populate the page with content from content.js
    populateContent();

    // 2. Now that content exists, initialize all interactive components
    
    // ---- HEADER MANAGEMENT ----
    const header = document.querySelector('header');
    const sectionsForNavHighlight = document.querySelectorAll('main section[id]');

    function handleHeaderScroll() {
        if (!header) return;
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        let currentSectionId = 'hero';
        const headerOffset = header.offsetHeight + 30;

        sectionsForNavHighlight.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.id;
            }
        });
        
        document.querySelectorAll('.desktop-nav ul li a').forEach(link => {
            link.classList.remove('active-nav');
            if(link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active-nav');
            }
        });
    }
    
    if (header && sectionsForNavHighlight.length > 0) {
        handleHeaderScroll();
        window.addEventListener('scroll', handleHeaderScroll);
    }
    
    // ---- MOBILE NAVIGATION ----
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    function setupMobileNavigation() {
        if (!mobileNavToggle || !mobileMenu || !desktopNav) return;
        
        const mobileNavContainer = mobileMenu.querySelector('nav');
        if (mobileNavContainer) {
            mobileNavContainer.innerHTML = desktopNav.innerHTML;
        }

        const closeMobileMenu = () => {
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
        };

        mobileNavToggle.addEventListener('click', () => {
            const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
            mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('is-active');
            document.body.classList.toggle('no-scroll', !isExpanded);
        });

        const mobileNavLinks = mobileMenu.querySelectorAll('nav ul li a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    setupMobileNavigation();

    // ---- HERO SECTION SLIDER ----
    const heroSlides = document.querySelectorAll('.hero-slide-text');
    const heroDotsContainer = document.querySelector('.hero-navigation-dots');
    let currentHeroSlideIndex = 0;
    let heroSlideInterval;
    const HERO_SLIDE_INTERVAL_TIME = 7000;

    function createHeroDots() {
        if (!heroDotsContainer || heroSlides.length <= 1) return;
        heroSlides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            dot.setAttribute('aria-label', `Ir al slide ${index + 1}`);
            dot.addEventListener('click', () => {
                showHeroSlide(index);
                resetHeroInterval();
            });
            heroDotsContainer.appendChild(dot);
        });
    }

    function updateHeroDots(index) {
        if (!heroDotsContainer || heroSlides.length <= 1) return;
        const dots = heroDotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('active-dot', dotIndex === index);
        });
    }

    function showHeroSlide(index) {
        heroSlides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active-slide', slideIndex === index);
            if (slideIndex === index) {
                const innerContent = slide.querySelector('.hero-slide-inner-content');
                if (innerContent) {
                    innerContent.style.animation = 'none';
                    void innerContent.offsetWidth;
                    innerContent.style.animation = '';
                }
            }
        });
        currentHeroSlideIndex = index;
        updateHeroDots(index);
    }

    function nextHeroSlide() {
        const nextIndex = (currentHeroSlideIndex + 1) % heroSlides.length;
        showHeroSlide(nextIndex);
    }

    function startHeroSlider() {
        if (heroSlides.length > 1) {
            heroSlideInterval = setInterval(nextHeroSlide, HERO_SLIDE_INTERVAL_TIME);
        }
    }

    function resetHeroInterval() {
        clearInterval(heroSlideInterval);
        startHeroSlider();
    }

    if (heroSlides.length > 0) {
        createHeroDots();
        showHeroSlide(0);
        if (heroSlides.length > 1) {
            startHeroSlider();
        }
    }
    
    // ---- TESTIMONIAL AUTO-SCROLLER ----
    const testimonialWrapper = document.querySelector('.testimonial-scroll-wrapper');
    const testimonialList = testimonialWrapper ? testimonialWrapper.querySelector('.testimonial-list') : null;

    if (testimonialWrapper && testimonialList && testimonialList.children.length > 1) {
        let testimonialScrollInterval;
        const TESTIMONIAL_SCROLL_SPEED_MS = 70;
        const TESTIMONIAL_SCROLL_AMOUNT_PX = 1;

        const cloneTestimonialsForSeamlessScroll = () => {
            const originalItems = Array.from(testimonialList.children);
            if (originalItems.length === 0) return;

            const wrapperHeight = testimonialWrapper.clientHeight;
            const contentHeight = testimonialList.scrollHeight;

            if (contentHeight > wrapperHeight) {
                 originalItems.forEach(item => {
                    const clone = item.cloneNode(true);
                    clone.classList.add('testimonial-clone');
                    testimonialList.appendChild(clone);
                });
            }
        };

        const startTestimonialScrolling = () => {
            if (testimonialList.scrollHeight <= testimonialWrapper.clientHeight) return;
            
            testimonialWrapper.scrollTop = 0;
            let scrollAmount = 0;

            clearInterval(testimonialScrollInterval);
            testimonialScrollInterval = setInterval(() => {
                testimonialWrapper.scrollTop += TESTIMONIAL_SCROLL_AMOUNT_PX;
                const originalContentHeight = testimonialList.scrollHeight / 2;
                if (testimonialWrapper.scrollTop >= originalContentHeight) {
                    testimonialWrapper.scrollTop -= originalContentHeight;
                }
            }, TESTIMONIAL_SCROLL_SPEED_MS);
        };

        const stopTestimonialScrolling = () => {
            clearInterval(testimonialScrollInterval);
        };
        
        const initializeTestimonialScroller = () => {
            cloneTestimonialsForSeamlessScroll();
             if (testimonialList.scrollHeight > testimonialWrapper.clientHeight) {
                startTestimonialScrolling();
                testimonialWrapper.addEventListener('mouseenter', stopTestimonialScrolling);
                testimonialWrapper.addEventListener('mouseleave', startTestimonialScrolling);
            }
        };

        window.addEventListener('load', initializeTestimonialScroller);
        window.addEventListener('resize', () => {
            stopTestimonialScrolling();
            testimonialList.querySelectorAll('.testimonial-clone').forEach(clone => clone.remove());
            initializeTestimonialScroller();
        });
    }

    // ---- BLOG MODAL LOGIC ----
    const blogModal = document.getElementById("blogModal");
    const modalTitle = document.getElementById("modal-blog-title");
    const modalBody = document.getElementById("modal-blog-body");
    const closeModalBtn = document.getElementById("closeBlogModal");
    const readMoreButtons = document.querySelectorAll(".read-more-btn"); 

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const postCard = e.target.closest('.blog-post');
            const title = postCard.querySelector('h3').textContent;
            const fullContent = postCard.querySelector('.full-article-content').innerHTML;
            
            modalTitle.textContent = title;
            modalBody.innerHTML = fullContent;
            blogModal.style.display = "block";
            document.body.classList.add('no-scroll');
        });
    });

    const closeModal = () => {
        if(blogModal) {
            blogModal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    };

    if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target == blogModal) {
            closeModal();
        }
    });

    // ---- CONTACT FORM VALIDATION & SUBMIT ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formStatusDisplay = document.getElementById('formStatus');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameErrorDisplay = document.getElementById('nameError');
        const emailErrorDisplay = document.getElementById('emailError');
        const WEB3FORMS_ACCESS_KEY = "45db189e-90a3-4940-a0d8-069b16773931";
        const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(email).toLowerCase());

        const displayInlineError = (inputElement, errorElement, message) => {
            if(inputElement && errorElement){
                inputElement.classList.add('error');
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        };

        const clearInlineError = (inputElement, errorElement) => {
            if(inputElement && errorElement){
                inputElement.classList.remove('error');
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        };

        const validateContactForm = () => {
            let isValid = true;
            clearInlineError(nameInput, nameErrorDisplay);
            clearInlineError(emailInput, emailErrorDisplay);

            if (!nameInput || nameInput.value.trim() === '') {
                displayInlineError(nameInput, nameErrorDisplay, 'Por favor, ingresa tu nombre.');
                isValid = false;
            }

            if (!emailInput || emailInput.value.trim() === '') {
                displayInlineError(emailInput, emailErrorDisplay, 'Por favor, ingresa tu correo.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                displayInlineError(emailInput, emailErrorDisplay, 'Correo electrónico no válido.');
                isValid = false;
            }
            
            return isValid;
        };

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!validateContactForm()) {
                formStatusDisplay.textContent = 'Por favor, corrige los errores en el formulario.';
                formStatusDisplay.className = 'error';
                formStatusDisplay.style.display = 'block';
                return;
            }

            formStatusDisplay.textContent = 'Enviando mensaje...';
            formStatusDisplay.className = 'info';
            formStatusDisplay.style.display = 'block';

            const formData = new FormData(contactForm);
            formData.append("access_key", WEB3FORMS_ACCESS_KEY);
            formData.append("subject", "Nuevo Mensaje de Contacto desde RaionBJJ.cl");
            formData.append("from_name", "Sitio Web Raion BJJ");

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formStatusDisplay.textContent = '¡Mensaje enviado! Te contactaremos pronto.';
                    formStatusDisplay.className = 'success';
                    contactForm.reset();
                    clearInlineError(nameInput, nameErrorDisplay);
                    clearInlineError(emailInput, emailErrorDisplay);
                } else {
                    console.error("Error from Web3Forms:", data);
                    formStatusDisplay.textContent = 'Error al enviar el mensaje. Inténtalo de nuevo.';
                    formStatusDisplay.className = 'error';
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                formStatusDisplay.textContent = 'Error de red. Por favor, revisa tu conexión.';
                formStatusDisplay.className = 'error';
            });
        });
    }

    // ---- ANIMATE SECTIONS ON SCROLL ----
    const animatedSections = document.querySelectorAll('.animate-on-scroll');
    const revealSectionOnScrollCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };
    const sectionScrollObserver = new IntersectionObserver(revealSectionOnScrollCallback, {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    animatedSections.forEach(section => sectionScrollObserver.observe(section));

    // ---- BACK TO TOP BUTTON ----
    const backToTopButton = document.getElementById("backToTopBtn");
    function handleBackToTopButtonVisibility() {
        if (backToTopButton) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    }
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    window.addEventListener('scroll', handleBackToTopButtonVisibility);
    if (backToTopButton) backToTopButton.addEventListener("click", scrollToTop);
    handleBackToTopButtonVisibility();

    // ---- UPDATE FOOTER YEAR ----
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    
    // ========================================================================= //
    // ---------------------------- PARTICLE BACKGROUND ------------------------ //
    // ========================================================================= //
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#cccccc"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.8,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false,
                },
                "move": {
                    "enable": true,
                    "speed": 0.8,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }
});