document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', function() {
        // Vérifie la position actuelle de la sidebar
        const sidebarLeft = window.getComputedStyle(sidebar).left;

        if (sidebarLeft === '0px') {
            sidebar.style.left = '-250px'; // Cache la sidebar
        } else {
            sidebar.style.left = '0px'; // Affiche la sidebar
        }
    });

    // Fonction pour fermer la sidebar
    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px'; // Cache la sidebar
    });
});
