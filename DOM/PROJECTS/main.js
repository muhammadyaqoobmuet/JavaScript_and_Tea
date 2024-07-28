// get all buttons and body
const body = document.body;
const buttons = document.querySelectorAll('button');
const allHeadings = document.querySelectorAll('h3, h1');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Check if the clicked button's id matches any of the specified ids
        if (['bg-red-950', 'bg-red-100', 'bg-red-400', 'bg-red-300'].includes(e.target.id)) {
            // If the button id is 'bg-red-100', change all headings to black
            if (e.target.id === 'bg-red-100') {
                allHeadings.forEach((heading) => {
                    heading.style.color = "black";
                });
            } else {
                // For all other buttons, change all headings to white
                allHeadings.forEach((heading) => {
                    heading.style.color = "white";
                });
            }

            // Set the body's class to the clicked button's id
            body.setAttribute('class', e.target.id);
        }
    });
});
