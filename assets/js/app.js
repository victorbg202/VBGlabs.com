/* ==========================================================================
   VBG Labs — App Entry Point
   Orquestador: inicializa todos los módulos cuando el DOM está listo.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Internacionalización (primero, para que el contenido se traduzca ASAP)
    if (window.VBGi18n) {
        window.VBGi18n.initI18n();
    }

    // 2. Navegación (scroll, mobile menu, smooth scroll)
    if (window.VBGNavigation) {
        window.VBGNavigation.initNavigation();
    }

    // 3. Animaciones (scroll progress, counters)
    if (window.VBGAnimations) {
        window.VBGAnimations.initAnimations();
    }

    // 4. Formulario de contacto
    if (window.VBGForm) {
        window.VBGForm.initForm();
    }
});
