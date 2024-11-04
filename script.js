// bouton dark /light mode navbarre
function boutonDarkMode() {
    document.body.classList.toggle('dark');
    
    const ISDARKMODE = document.body.classList.contains('dark');

    // Changement des images du mode
    document.getElementById('mode-icon').className = ISDARKMODE ? 'fa-solid fa-sun' : 'fa-solid fa-moon';

    // rejouter autant que d'image par page a changer
    document.getElementById('logoNavBarre').src = ISDARKMODE ? './img/logo/Fichier 8.png' : './img/logo/Fichier 9.png';
    document.getElementById('image2').src = ISDARKMODE ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    document.getElementById('service').src = ISDARKMODE ? './img/logo/fichier 2.png' : './img/logo/Fichier 3.png';
    document.getElementById('image3').src = ISDARKMODE ? 'dark-image3.jpg' : 'light-image3.jpg';

}

// bouton numéro page contact
function magieNumero() {
    // Remplacer le texte du bouton par le numéro de téléphone
    document.getElementById("telephoneBoutton").innerText = "+33 1 23 45 67 89";
}