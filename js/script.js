document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');

        // Toggle icons inside the button
        const openIcon = menuButton.querySelector('.open-svg');
        const closeIcon = menuButton.querySelector('.close-svg');

        if (isExpanded) {
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        } else {
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    });
});

function setCurrent(navId) {
    // Get all nav links
    const navLinks = document.getElementById('nav-div').querySelectorAll('a');
    console.log(navLinks)
    // Remove aria-current from all links
    navLinks.forEach(link => {
        link.classList.remove('bg-gray-900', 'text-white');
        link.classList.add('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
    });

    // Set aria-current to 'page' on the clicked link
    const activeLink = document.getElementById(navId);
    if (activeLink) {
        activeLink.classList.remove('text-gray-300', 'hover:bg-gray-700', 'hover:text-white');
        activeLink.classList.add('bg-gray-900', 'text-white');
    }
}
document.getElementById('nav-home').addEventListener('click', () => setCurrent('nav-home'));
document.getElementById('nav-skills').addEventListener('click', () => setCurrent('nav-skills'));
document.getElementById('nav-exp').addEventListener('click', () => setCurrent('nav-exp'));
document.getElementById('nav-proj').addEventListener('click', () => setCurrent('nav-proj'));

var textWrapper = document.getElementById('para-name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper = document.getElementById('para-about');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Anime.js timeline configuration
anime.timeline({loop: false}) // Changed to false to prevent looping
    .add({
        targets: '#para-name .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 90 * i
    });
anime.timeline({loop: false}) // Changed to false to prevent looping
    .add({
        targets: '#para-about .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 10 * i
    });
   
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('contact-btn');
        btn.addEventListener('click', function() {
            this.textContent = 'harit19961@gmail.com';
        });
    });
