/* ==========================================================================
   VBG Labs — i18n Module
   Carga traducciones desde archivos JSON y aplica al DOM.
   Exporta: setLanguage, getCurrentLang
   ========================================================================== */

const translationsCache = {};
let currentLang = localStorage.getItem('vbglabs-lang') || 'ca';

/**
 * Obtiene un valor anidado de un objeto usando una clave con puntos.
 * Ej: getNestedValue(obj, 'nav.services') → obj.nav.services
 */
function getNestedValue(obj, key) {
    const keys = key.split('.');
    let value = obj;
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            return null;
        }
    }
    return value;
}

/**
 * Carga las traducciones de un idioma desde JSON.
 * Usa caché para evitar re-fetches.
 */
async function loadTranslations(lang) {
    if (translationsCache[lang]) {
        return translationsCache[lang];
    }

    try {
        const response = await fetch(`assets/i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
        const data = await response.json();
        translationsCache[lang] = data;
        return data;
    } catch (error) {
        console.error(`[i18n] Error loading translations for "${lang}":`, error);
        return null;
    }
}

/**
 * Aplica las traducciones al DOM.
 */
function applyTranslations(translations) {
    // Traducir elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        try {
            const key = element.getAttribute('data-i18n');
            const value = getNestedValue(translations, key);

            if (value) {
                if (element.tagName === 'OPTION') {
                    element.textContent = value;
                } else if (key.includes('locationValue') || key.includes('hoursValue')) {
                    element.innerHTML = value;
                } else {
                    element.textContent = value;
                }
            }
        } catch (e) {
            console.warn('[i18n] Translation error for key:', element.getAttribute('data-i18n'));
        }
    });

    // Traducir placeholders
    document.querySelectorAll('[data-placeholder-i18n]').forEach(element => {
        try {
            const key = element.getAttribute('data-placeholder-i18n');
            const value = getNestedValue(translations, key);
            if (value) {
                element.placeholder = value;
            }
        } catch (e) {
            console.warn('[i18n] Placeholder translation error');
        }
    });

    // Actualizar título y meta description
    if (translations.meta) {
        document.title = translations.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations.meta.description);
        }
    }
}

/**
 * Cambia el idioma activo y aplica las traducciones.
 */
async function setLanguage(lang) {
    const translations = await loadTranslations(lang);
    if (!translations) return;

    currentLang = lang;
    localStorage.setItem('vbglabs-lang', lang);
    document.documentElement.lang = lang;

    applyTranslations(translations);

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

/**
 * Devuelve el idioma actual.
 */
function getCurrentLang() {
    return currentLang;
}

/**
 * Devuelve un valor de traducción del idioma actual (desde caché).
 */
function t(key) {
    const translations = translationsCache[currentLang];
    if (!translations) return key;
    return getNestedValue(translations, key) || key;
}

/**
 * Inicializa los event listeners de los botones de idioma.
 */
function initI18n() {
    // Aplicar idioma guardado
    setLanguage(currentLang);

    // Event handlers para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang) setLanguage(lang);
        });
    });

    // Delegación de eventos en el selector (backup)
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', function (e) {
            if (e.target.classList.contains('lang-btn')) {
                e.preventDefault();
                const lang = e.target.getAttribute('data-lang');
                if (lang) setLanguage(lang);
            }
        });
    }
}

// Exponer para uso desde otros módulos
window.VBGi18n = { initI18n, setLanguage, getCurrentLang, t };
