// Sélection des éléments
const menuButton = document.getElementById('menu-btn'); // Bouton pour afficher la sidebar
const button = document.getElementById('button');  // Bouton stylisé pour fermer la sidebar
const sidebar = document.querySelector('.sidebar');     // Élément de la sidebar

// Afficher la sidebar et cacher le bouton menu
menuButton.addEventListener('click', () => {
    sidebar.style.left = '0'; // Glisse la sidebar à l'écran
    menuButton.style.display = 'none'; // Cache le bouton menu
});

// Cacher la sidebar et réafficher le bouton menu
button.addEventListener('click', () => {
    sidebar.style.left = '-300px'; // Cache la sidebar hors de l'écran
    menuButton.style.display = 'block'; // Affiche à nouveau le bouton menu
});

