const article = document.querySelector('.parent');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

article.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
        // Remove active class from all buttons
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });

        // Add active class to the clicked button
        e.target.classList.add('active');

        // Hide all content sections
        contents.forEach((content) => {
            content.classList.remove('active');
        });

        // Show the content section corresponding to the clicked button
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
