// Fonction pour basculer entre le mode sombre et clair
function boutonDarkMode() {
    // Basculer la classe 'dark' sur le body
    const isDarkMode = document.body.classList.toggle('dark');
    
    // Vérification de l'état du mode
    console.log("Mode actuel après bascule :", isDarkMode ? 'dark' : 'light');
    
    // Changer l'icône du mode (passer de la lune au soleil et inversement)
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon) {
        modeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    } else {
        console.warn("Élément 'mode-icon' non trouvé !");
    }

    // Changer les images en fonction du mode
    const logoNavBarre = document.getElementById('logoNavBarre');
    const image2 = document.getElementById('image2');
    const service = document.getElementById('service');
    const image3 = document.getElementById('image3');

    if (logoNavBarre) logoNavBarre.src = isDarkMode ? './img/logo/Fichier_8.png' : './img/logo/Fichier_9.png';
    if (image2) image2.src = isDarkMode ? './img/logo/fichier_2.png' : './img/logo/Fichier_3.png';
    if (service) service.src = isDarkMode ? './img/logo/fichier_2.png' : './img/logo/Fichier_3.png';
    if (image3) image3.src = isDarkMode ? './img/logo/fichier_4.png' : './img/logo/fichier_6.png';

    // Enregistrer l'état du mode dans localStorage pour qu'il soit persistant
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log("Thème enregistré dans localStorage :", localStorage.getItem('theme'));
}

// Fonction pour appliquer le mode sauvegardé au chargement
