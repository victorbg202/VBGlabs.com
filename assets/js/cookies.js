/* ==========================================================================
   VBG Labs — Cookie Consent Manager
   Cumple LSSI-CE Art.22.2 + RGPD
   - No instala cookies analíticas sin consentimiento
   - Almacena preferencias en localStorage (no es cookie, no requiere consentimiento)
   - Integrado con i18n
   ========================================================================== */

(function () {
    'use strict';

    const CONSENT_KEY = 'vbglabs-cookie-consent';

    // Check if consent was already given
    function getConsent() {
        try {
            const raw = localStorage.getItem(CONSENT_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    }

    function saveConsent(consent) {
        localStorage.setItem(CONSENT_KEY, JSON.stringify({
            ...consent,
            timestamp: new Date().toISOString()
        }));
    }

    // Apply consent decisions
    function applyConsent(consent) {
        if (consent.analytics) {
            loadAnalytics();
        } else {
            removeAnalyticsCookies();
        }
    }

    // Placeholder: load Google Analytics (add your GA ID here when ready)
    function loadAnalytics() {
        // Uncomment and add your GA4 ID when ready:
        // if (window.gtag) return; // already loaded
        // const script = document.createElement('script');
        // script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        // script.async = true;
        // document.head.appendChild(script);
        // window.dataLayer = window.dataLayer || [];
        // window.gtag = function(){ dataLayer.push(arguments); };
        // gtag('js', new Date());
        // gtag('config', 'G-XXXXXXXXXX');
        console.log('[Cookies] Analytics consent granted (GA not configured yet)');
    }

    function removeAnalyticsCookies() {
        // Remove Google Analytics cookies if they exist
        const cookiesToRemove = ['_ga', '_gid', '_gat'];
        cookiesToRemove.forEach(name => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
        // Also remove _ga_* cookies
        document.cookie.split(';').forEach(c => {
            const name = c.trim().split('=')[0];
            if (name.startsWith('_ga_')) {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        });
    }

    // Create the banner HTML
    function createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.id = 'cookieBanner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');

        banner.innerHTML = `
            <div class="cookie-inner">
                <div class="cookie-text">
                    <p data-i18n="cookies.banner.text">
                        Utilitzem cookies pròpies per al funcionament bàsic del web i cookies analítiques per entendre com 
                        l'utilitzes i millorar-lo. Pots acceptar-les, rebutjar les no essencials o configurar les teves preferències.
                        <a href="/politica-cookies.html" data-i18n="cookies.banner.link">Més info</a>
                    </p>
                </div>
                <div class="cookie-buttons">
                    <button class="cookie-btn cookie-btn-accept" id="cookieAccept" data-i18n="cookies.banner.accept">Acceptar tot</button>
                    <button class="cookie-btn cookie-btn-reject" id="cookieReject" data-i18n="cookies.banner.reject">Només essencials</button>
                    <button class="cookie-btn cookie-btn-config" id="cookieConfigBtn" data-i18n="cookies.banner.config">Configurar</button>
                </div>
                <div class="cookie-config" id="cookieConfig">
                    <div class="cookie-option">
                        <div class="cookie-option-info">
                            <div class="cookie-option-title" data-i18n="cookies.banner.technicalTitle">Cookies tècniques (necessàries)</div>
                            <div class="cookie-option-desc" data-i18n="cookies.banner.technicalDesc">Imprescindibles per al funcionament del web. Idioma, preferències de cookies.</div>
                        </div>
                        <label class="cookie-toggle">
                            <input type="checkbox" checked disabled>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="cookie-option">
                        <div class="cookie-option-info">
                            <div class="cookie-option-title" data-i18n="cookies.banner.analyticsTitle">Cookies analítiques</div>
                            <div class="cookie-option-desc" data-i18n="cookies.banner.analyticsDesc">Ens ajuden a entendre com utilitzen la web els visitants. Google Analytics.</div>
                        </div>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookieAnalyticsToggle">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <div class="cookie-config-save">
                        <button class="cookie-btn cookie-btn-accept" id="cookieSave" data-i18n="cookies.banner.save">Guardar preferències</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        return banner;
    }

    function init() {
        const consent = getConsent();

        // If consent already given, apply it silently
        if (consent) {
            applyConsent(consent);
            return;
        }

        // No consent yet — show banner
        const banner = createBanner();

        // Small delay for animation
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                banner.classList.add('visible');
            });
        });

        // Apply i18n if available
        if (window.VBGi18n && window.VBGi18n.t) {
            // Wait for i18n to be ready, then translate the banner
            setTimeout(() => {
                // Re-apply translations to the newly created banner elements
                if (typeof applyTranslations === 'function') {
                    const lang = window.VBGi18n.getCurrentLang();
                    window.VBGi18n.setLanguage(lang);
                }
            }, 500);
        }

        // --- Event Listeners ---

        // Accept all
        document.getElementById('cookieAccept').addEventListener('click', () => {
            const consent = { technical: true, analytics: true };
            saveConsent(consent);
            applyConsent(consent);
            closeBanner(banner);
        });

        // Reject non-essential
        document.getElementById('cookieReject').addEventListener('click', () => {
            const consent = { technical: true, analytics: false };
            saveConsent(consent);
            applyConsent(consent);
            closeBanner(banner);
        });

        // Toggle config panel
        document.getElementById('cookieConfigBtn').addEventListener('click', () => {
            const config = document.getElementById('cookieConfig');
            config.classList.toggle('visible');
        });

        // Save custom config
        document.getElementById('cookieSave').addEventListener('click', () => {
            const analyticsChecked = document.getElementById('cookieAnalyticsToggle').checked;
            const consent = { technical: true, analytics: analyticsChecked };
            saveConsent(consent);
            applyConsent(consent);
            closeBanner(banner);
        });
    }

    function closeBanner(banner) {
        banner.classList.remove('visible');
        banner.classList.add('hidden');
        // Remove from DOM after transition
        setTimeout(() => {
            if (banner.parentNode) {
                banner.parentNode.removeChild(banner);
            }
        }, 600);
    }

    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
