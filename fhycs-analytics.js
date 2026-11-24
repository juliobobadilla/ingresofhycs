/* Google Analytics 4 (GA4)
 * ID de medición del flujo web de Ingreso FHyCS.
 */
(function () {
    'use strict';

    var measurementId = 'G-9MQNG4ZPN3';

    if (!/^G-[A-Z0-9]+$/.test(measurementId)) return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
})();
