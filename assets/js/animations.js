/* ==========================================================================
   VBG Labs — Animations Module
   Scroll progress bar, counter animations, IntersectionObserver.
   ========================================================================== */

function initAnimations() {
    // --- Scroll progress bar ---
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress.style.width = (window.scrollY / winHeight) * 100 + '%';
        });
    }

    // --- Counter animation ---
    let countersAnimated = false;

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '+';
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);

            element.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    const startCounterAnimation = () => {
        if (countersAnimated) return;
        countersAnimated = true;
        document.querySelectorAll('.stat-number').forEach(el => {
            el.textContent = '0';
            animateCounter(el);
        });
    };

    // --- IntersectionObserver para stats ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.classList.contains('stats-bar')) {
                startCounterAnimation();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) {
        // Inicializar a 0
        document.querySelectorAll('.stat-number').forEach(el => {
            el.textContent = '0';
        });
        observer.observe(statsBar);
    }

    // --- Scroll-triggered fade-in animations ---
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Animate sections
    document.querySelectorAll('section .section-header, section .container > *').forEach((el, i) => {
        if (!el.classList.contains('stats-bar') && !el.closest('#hero')) {
            el.classList.add('animate-ready');
            el.style.transitionDelay = (i % 3) * 0.1 + 's';
            fadeObserver.observe(el);
        }
    });

    // Animate service cards with stagger
    document.querySelectorAll('.service-card, .service-card-link').forEach((el, i) => {
        el.classList.add('animate-ready');
        el.style.transitionDelay = i * 0.08 + 's';
        fadeObserver.observe(el);
    });
}

window.VBGAnimations = { initAnimations };
