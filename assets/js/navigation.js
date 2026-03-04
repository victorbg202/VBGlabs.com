/* ==========================================================================
   VBG Labs — Navigation Module
   Nav scroll, mobile menu, smooth scroll, mobile dropdown.
   ========================================================================== */

function initNavigation() {
    const nav = document.getElementById('nav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

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
            // Only close if they clicked an actual navigation link (not the dropdown toggle)
            if (clickedLink && !clickedLink.classList.contains('mobile-dropdown-toggle')) {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Mobile dropdown toggle ---
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

    // --- Smooth scroll for internal hash links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Skip the mobile dropdown toggle
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

    // --- Desktop dropdown: close on outside click ---
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                d.classList.remove('open');
            });
        }
    });
}

window.VBGNavigation = { initNavigation };
