/* ==========================================================================
   VBG Labs — Navigation Module
   Nav scroll, mobile menu, smooth scroll, dropdowns (mobile + desktop touch).
   ========================================================================== */

function initNavigation() {
    const nav = document.getElementById('nav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    // --- Nav scrolled state ---
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.pageYOffset > 50);
    });

    // --- Mobile menu toggle ---
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click — but NOT on dropdown toggle
        mobileMenu.addEventListener('click', (e) => {
            const clickedLink = e.target.closest('a');
            if (clickedLink && !clickedLink.classList.contains('mobile-dropdown-toggle')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Mobile dropdown toggle (inside mobile menu overlay) ---
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.mobile-dropdown-toggle');
        if (toggle) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = toggle.closest('.mobile-dropdown');
            if (dropdown) {
                dropdown.classList.toggle('open');
            }
        }
    });

    // --- Desktop dropdown: touch support for tablets ---
    // On touch devices, the :hover CSS doesn't work reliably.
    // We add click-to-toggle and use a CSS class instead.
    if (isTouchDevice) {
        document.querySelectorAll('.nav-dropdown > a').forEach(link => {
            link.addEventListener('click', (e) => {
                // Only intercept the parent dropdown link, not sub-links
                const parent = link.closest('.nav-dropdown');
                if (!parent) return;

                const menu = parent.querySelector('.dropdown-menu');
                if (!menu) return;

                e.preventDefault();
                e.stopPropagation();

                // Close any other open dropdowns
                document.querySelectorAll('.nav-dropdown.touch-open').forEach(d => {
                    if (d !== parent) d.classList.remove('touch-open');
                });

                parent.classList.toggle('touch-open');
            });
        });

        // Close desktop dropdown on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-dropdown')) {
                document.querySelectorAll('.nav-dropdown.touch-open').forEach(d => {
                    d.classList.remove('touch-open');
                });
            }
        });
    }

    // --- Smooth scroll for internal hash links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.classList.contains('mobile-dropdown-toggle')) return;

        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = nav.offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

window.VBGNavigation = { initNavigation };
