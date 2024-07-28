
const navLinksContainer  = document.querySelector('.links-container');
const navToggle  = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('hidden');
});

const navLinks = document.querySelector('.links');

