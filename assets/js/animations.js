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
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);

            if (target === 70) {
                element.textContent = current + '%';
            } else if (target === 10) {
                element.textContent = current + 'x';
            } else {
                element.textContent = current + '+';
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                if (target === 70) element.textContent = target + '%';
                else if (target === 10) element.textContent = target + 'x';
                else element.textContent = target + '+';
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
}

window.VBGAnimations = { initAnimations };
