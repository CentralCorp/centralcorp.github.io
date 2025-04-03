document.addEventListener("DOMContentLoaded", function () {
    const userLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ["en", "fr"];
    let lang = userLang.split('-')[0];

    if (!supportedLangs.includes(lang)) lang = "fr"; // Langue par défaut

    const currentPath = window.location.pathname;
    
    // Redirige uniquement si on est à la racine
    if (currentPath === "/" || currentPath === "/index.html") {
        window.location.href = `/${lang}/`;
    }
});
