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

    // Add event listeners to .aperçu img elements for fade effect
    document.querySelectorAll('.aperçu img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.remove('fade-in');
            img.classList.add('fade-out');
        });
        img.addEventListener('mouseleave', () => {
            img.classList.remove('fade-out');
            img.classList.add('fade-in');
        });
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

    // Menu Burger

document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    
    burgerMenu.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});


function updateImagesForMobile() {
    if (window.innerWidth <= 768) {
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_font-specimen.jpg"]').src = "IMAGES/Projets/habit/HABIT_font-specimen-mobile.jpg";
        document.querySelector('.parallax-bg').style.backgroundImage = "url('IMAGES/Projets/habit/HABIT_COUV-double-affiche-mobile.jpg')";
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_signaletique-magasin.jpg').src = "IMAGES/Projets/habit/HABIT_signaletique-magasin-mobile.jpg"
    } else {
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_font-specimen-mobile.jpg"]').src = "IMAGES/Projets/habit/HABIT_font-specimen.jpg";
        document.querySelector('.parallax-bg').style.backgroundImage = "url('IMAGES/Projets/habit/HABIT_COUV-double-affiche.jpg')";
                document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_signaletique-magasin-mobile.jpg').src = "IMAGES/Projets/habit/HABIT_signaletique-magasin.jpg"
    }
}

    // Update on initial load
    window.addEventListener('load', updateImagesForMobile);

    // Update on resize
    window.addEventListener('resize', updateImagesForMobile);


function setVhUnit() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVhUnit);
window.addEventListener('orientationchange', setVhUnit);
document.addEventListener('DOMContentLoaded', setVhUnit);

setVhUnit();