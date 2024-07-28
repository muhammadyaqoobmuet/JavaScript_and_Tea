const toggle = document.querySelector('.toggle');
const linksContainer = document.querySelector('.links-container');

toggle.addEventListener('click', () => {
    linksContainer.classList.toggle('open');
});
