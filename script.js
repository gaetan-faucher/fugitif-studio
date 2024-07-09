document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hover-link'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hover-link'));
    });
});

// Début effet parallax

document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    // Vérifiez si des éléments sont trouvés
    if (parallaxElements.length === 0) {
        console.error('No parallax elements found');
        return;
    }
    
    // Parcourir tous les éléments parallax
    parallaxElements.forEach(parallaxBg => {
    
        window.addEventListener('scroll', function() {
            let offset = window.pageYOffset;
            requestAnimationFrame(() => {
                parallaxBg.style.transform = `translateY(${offset * 0.3}px)`;
            });
        });
    });
});

    // fin effet parallax

document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour mettre à jour l'heure
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
            
        document.getElementById('current-time').innerText = timeString;
    }
        
    // Mise à jour de l'heure toutes les secondes
    setInterval(updateTime, 1000);
        
    // Mettre à jour l'heure immédiatement
    updateTime();
 });