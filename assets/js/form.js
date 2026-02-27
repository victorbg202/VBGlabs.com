/* ==========================================================================
   VBG Labs — Form Module
   Lógica del formulario de contacto: submit, validación, feedback.
   ========================================================================== */

function initForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formMessage.classList.remove('show', 'success', 'error');

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formMessage.classList.add('show', 'success');
                formMessage.querySelector('.message-icon').textContent = '✓';
                formMessage.querySelector('.message-text').textContent =
                    window.VBGi18n ? window.VBGi18n.t('contact.form.success') : 'Message sent!';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formMessage.classList.add('show', 'error');
            formMessage.querySelector('.message-icon').textContent = '✕';
            formMessage.querySelector('.message-text').textContent =
                window.VBGi18n ? window.VBGi18n.t('contact.form.error') : 'An error occurred.';
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

window.VBGForm = { initForm };
