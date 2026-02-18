document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz7dPthNkI8JcO78Ilu_VznpOy27WTH1apak9eqiLeuxuPf62MvLzBL270qJs_yu0agaA/exec'; // Reemplaza esto

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Bloqueo de UI
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'Procesando...';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                body: JSON.stringify(data)
            });

            // Feedback elegante
            form.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <span class="material-symbols-outlined" style="font-size: 4rem; color: var(--primary); margin-bottom: 1rem;">check_circle</span>
                    <h2 class="gradient-text" style="font-size: 2rem; margin-bottom: 1rem;">¡Recibido!</h2>
                    <p style="color: var(--text-dim);">Tu mensaje ha sido enviado correctamente. Revisaremos tu solicitud en breve.</p>
                    <a href="index.html" class="btn-primary-sm" style="margin-top: 2rem; text-decoration: none;">Volver al inicio</a>
                </div>
            `;
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor.');
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }
    });
});