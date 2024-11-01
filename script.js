function boutonDarkMode() {
    document.body.classList.toggle('dark');
    
    const isDarkMode = document.body.classList.contains('dark');

    // Changement des images du mode
    document.getElementById('mode-icon').className = isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

    // rejouter autant que d'iamage par page a changer
    document.getElementById('image1').src = isDarkMode ? 'dark-image1.jpg' : 'light-image1.jpg';
    document.getElementById('image2').src = isDarkMode ? 'dark-image2.jpg' : 'light-image2.jpg';
    document.getElementById('image3').src = isDarkMode ? 'dark-image3.jpg' : 'light-image3.jpg';
}
