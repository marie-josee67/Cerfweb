function boutonDarkMode() {
    document.body.classList.toggle('dark');
    
    const isDarkMode = document.body.classList.contains('dark');

    // Changement des images du mode
    document.getElementById('mode-icon').className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    // rejouter autant que d'iamage par page a changer
    document.getElementById('image1').src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    document.getElementById('image2').src = isDarkMode ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    document.getElementById('image3').src = isDarkMode ? 'dark-image3.jpg' : 'light-image3.jpg';
}
