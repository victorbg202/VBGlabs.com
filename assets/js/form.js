/* ==========================================================================
   VBG Labs — Form Module
   Lógica del formulario de contacto: submit via Formsubmit.co, feedback UI.
   Soporta: #contactForm (index.html) y #contactFormPage (contacte/index.html)
   ========================================================================== */

function initForm() {
    setupForm(document.getElementById('contactForm'));
    setupForm(document.getElementById('contactFormPage'));
}

function setupForm(form) {
    if (!form) return;

    const submitBtn = form.querySelector('[type="submit"]');
    let formMessage = form.querySelector('.form-message');

    // Create feedback container if missing (contacte page)
    if (!formMessage) {
        formMessage = document.createElement('div');
        formMessage.className = 'form-message';
        formMessage.innerHTML = '<span class="message-icon"></span><span class="message-text"></span>';
        submitBtn.parentNode.insertBefore(formMessage, submitBtn);
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formMessage.classList.remove('show', 'success', 'error');

        // Collect form data as JSON (exclude privacy checkbox)
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            if (key !== 'privacy') data[key] = value;
        });

        // Formsubmit.co config
        data._subject = 'Nova sol·licitud de contacte — ' + (data.name || 'Web');
        data._template = 'table';
        data._captcha = 'false';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (result.success) {
                formMessage.classList.add('show', 'success');
                formMessage.querySelector('.message-icon').textContent = '✓';
                formMessage.querySelector('.message-text').textContent =
                    window.VBGi18n ? window.VBGi18n.t('contact.form.success') : 'Sol·licitud enviada correctament!';
                form.reset();
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            formMessage.classList.add('show', 'error');
            formMessage.querySelector('.message-icon').textContent = '✕';
            formMessage.querySelector('.message-text').textContent =
                window.VBGi18n ? window.VBGi18n.t('contact.form.error') : 'Hi ha hagut un error. Si us plau, torna a intentar-ho.';
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

window.VBGForm = { initForm };
