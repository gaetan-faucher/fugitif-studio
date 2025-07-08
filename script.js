document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('img:not([loading]), iframe:not([loading])').forEach(el => {
    el.setAttribute('loading', 'lazy');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

const links = document.querySelectorAll('a');


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".projets-container");
  const projets = container.querySelectorAll(".projet");

  projets.forEach(projet => {
    projet.addEventListener("mouseenter", () => {
      container.classList.add("hovering");
    });
    projet.addEventListener("mouseleave", () => {
      container.classList.remove("hovering");
    });
  });
});


links.forEach(link => {
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
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_logotype-couleurs.jpg').src = "IMAGES/Projets/habit/HABIT_logotype-couleurs-mobile.jpg"
    } else {
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_font-specimen-mobile.jpg"]').src = "IMAGES/Projets/habit/HABIT_font-specimen.jpg";
        document.querySelector('.parallax-bg').style.backgroundImage = "url('IMAGES/Projets/habit/HABIT_COUV-double-affiche.jpg')";
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_signaletique-magasin-mobile.jpg').src = "IMAGES/Projets/habit/HABIT_signaletique-magasin.jpg"
        document.querySelector('.big-visual[src="IMAGES/Projets/habit/HABIT_logotype-couleurs-mobile.jpg').src = "IMAGES/Projets/habit/HABIT_logotype-couleurs.jpg"
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



document.addEventListener('selectionchange', () => {
    const selection = document.getSelection();
    if (!selection.rangeCount) return;

    // Obtenir la plage et l'élément sélectionné
    const range = selection.getRangeAt(0);
    const selectedText = range.cloneContents();
    const span = document.createElement('span');
    span.appendChild(selectedText);

    // Appliquer le span temporaire pour obtenir les styles de l'élément sélectionné
    document.body.appendChild(span);
    const computedStyles = window.getComputedStyle(span);
    const textSize = parseFloat(computedStyles.fontSize);
    const textColor = computedStyles.color;
    span.remove();

    // Convertir la couleur du texte en composants rgba
    const rgbaTextColor = textColor.replace(/[^\d,]/g, '').split(',');
    const intensity = Math.sqrt(
        0.299 * rgbaTextColor[0] ** 2 +
        0.587 * rgbaTextColor[1] ** 2 +
        0.114 * rgbaTextColor[2] ** 2
    );

    // Définir la couleur de l'ombre en fonction de l'intensité
    let shadowColor;
    if (intensity > 1) {
        // Texte clair (ex. : blanc) : appliquer une ombre légère
        shadowColor = 'rgba(255, 255, 255, 0.5)';
    } 
    else {
        // Texte sombre : garder l'ombre sombre
        shadowColor = 'rgba(0, 0, 0)';
    }

    // Conserver le flou proportionnel à la taille du texte
    const blurSize = textSize / 2;

    // Appliquer dynamiquement les styles de sélection
    document.documentElement.style.setProperty('--selection-shadow', `${blurSize}px ${shadowColor}`);
});

document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll('figure');

  let numero = 1;

  figures.forEach(fig => {
    // Crée dynamiquement le <h4> avec le bon format
    const h4 = document.createElement('h4');
    h4.textContent = `${numero.toString().padStart(3, '0')}.`;

    // L’insère avant l’image
    const img = fig.querySelector('img');
    fig.insertBefore(h4, img);

    numero++;
  });
});