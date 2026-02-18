/**
 * Page Transition Loader — Optimizado
 */

function createLoader() {
    if (document.getElementById('page-loader')) return;

    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <span class="material-symbols-outlined loader-icon">terminal</span>
        <div class="loader-text text-primary">Cargando Pagina...</div>
    `;
    document.body.prepend(loader);
}

// Ocultar al cargar
window.addEventListener('load', () => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    requestAnimationFrame(() => {
        loader.classList.add('loader-hidden');
    });
});

// Interceptar SOLO navegación interna válida
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // ❌ ignorar anchors, mail, tel, JS, descargas
    if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        link.target === '_blank' ||
        link.hasAttribute('download')
    ) return;

    // ❌ ignorar enlaces externos
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;

    // ✔ navegación interna con loader
    e.preventDefault();

    const loader = document.getElementById('page-loader');
    if (!loader) {
        window.location.href = url.href;
        return;
    }

    loader.classList.remove('loader-hidden');

    setTimeout(() => {
        window.location.href = url.href;
    }, 1000);
});

// init
createLoader();
