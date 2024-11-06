// Fonction pour basculer entre le mode sombre et clair
function boutonDarkMode() {
    // Basculer la classe 'dark' sur le body
    document.body.classList.toggle('dark');
    
    // Déterminer si le mode sombre est actif
    const isDarkMode = document.body.classList.contains('dark');
    console.log("Mode actuel après bascule :", isDarkMode ? 'dark' : 'light'); // Vérification

    // Changer l'icône du mode
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

    if (logoNavBarre) logoNavBarre.src = isDarkMode ? './img/logo/Fichier 8.png' : './img/logo/Fichier 9.png';
    if (image2) image2.src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    if (service) service.src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    if (image3) image3.src = isDarkMode ? 'dark-image3.jpg' : 'light-image3.jpg';

    // Enregistrer le mode dans le localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    console.log("Thème enregistré dans localStorage :", localStorage.getItem('theme'));
}

// Fonction pour appliquer le mode sauvegardé au chargement de la page
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    console.log("Thème chargé depuis localStorage :", savedTheme); // Vérification

    // Appliquer le mode sauvegardé ou utiliser le mode par défaut (clair)
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    // Mettre à jour l'icône et les images
    const isDarkMode = document.body.classList.contains('dark');
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon) {
        modeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    } else {
        console.warn("Élément 'mode-icon' non trouvé !");
    }

    const logoNavBarre = document.getElementById('logoNavBarre');
    const image2 = document.getElementById('image2');
    const service = document.getElementById('service');
    const image3 = document.getElementById('image3');

    if (logoNavBarre) logoNavBarre.src = isDarkMode ? './img/logo/Fichier 8.png' : './img/logo/Fichier 9.png';
    if (image2) image2.src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    if (service) service.src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    if (image3) image3.src = isDarkMode ? 'dark-image3.jpg' : 'light-image3.jpg';
}

// Appliquer le thème sauvegardé au chargement
document.addEventListener('DOMContentLoaded', applySavedTheme);

// Vérifiez si le bouton de bascule existe dans le DOM et ajouter l'événement
const toggleButton = document.getElementById('toggle-theme-btn');
if (toggleButton) {
    toggleButton.addEventListener('click', boutonDarkMode);
    console.log("Bouton de bascule de thème ajouté avec succès.");
} else {
    console.warn("Bouton de bascule de thème (ID 'toggle-theme-btn') non trouvé !");
}


// bouton numéro page contact
function magieNumero() {
    // Remplacer le texte du bouton par le numéro de téléphone
    document.getElementById("telephoneBoutton").innerText = "+33 1 23 45 67 89";
}