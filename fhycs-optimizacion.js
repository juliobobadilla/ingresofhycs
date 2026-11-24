/* Videos livianos: YouTube se conecta únicamente cuando la persona elige reproducir. */
(function () {
    'use strict';

    function reproducirVideo(enlace) {
        var id = enlace.getAttribute('data-video-id') || '';
        var titulo = enlace.getAttribute('data-video-title') || 'Video de la FHyCS';
        if (!/^[A-Za-z0-9_-]{6,20}$/.test(id) || enlace.dataset.videoLoaded === 'true') return;

        enlace.dataset.videoLoaded = 'true';
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + encodeURIComponent(id) +
            '?autoplay=1&rel=0&playsinline=1';
        iframe.title = titulo;
        iframe.loading = 'eager';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.setAttribute('allowfullscreen', '');
        enlace.replaceWith(iframe);
    }

    document.addEventListener('click', function (evento) {
        var enlace = evento.target.closest && evento.target.closest('.fhycs-video-facade');
        if (!enlace) return;
        evento.preventDefault();
        reproducirVideo(enlace);
    });

    document.addEventListener('keydown', function (evento) {
        if (evento.key !== 'Enter' && evento.key !== ' ') return;
        var enlace = evento.target.closest && evento.target.closest('.fhycs-video-facade');
        if (!enlace || evento.key === 'Enter') return;
        evento.preventDefault();
        reproducirVideo(enlace);
    });
}());
