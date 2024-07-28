document.addEventListener('DOMContentLoaded', () => {
    const hex = document.querySelector('#hex');
    const simple = document.querySelector('#sim');
    const about = document.querySelector('#about');
    const colorChange = document.querySelector('#colorChange');
    const btn = document.querySelector('#btn');
    const changethis = document.querySelector('#changethisColor');
    const targetDiv = document.querySelector('#targetDiv');
    const hexColor = "0123456789ABCDEF";
    const simpleColors = ['red', 'green', 'white', 'pink'];
    let isHexMode = true;
    let simpleColorIndex = 0;

    function randomHexCol() {
        let colorinHex = "#";
        for (let i = 0; i < 6; i++) {
            colorinHex += hexColor.charAt(Math.floor(Math.random() * 16));
        }
        return colorinHex;
    }

    function changeColor() {
        if (isHexMode) {
            const color = randomHexCol();
            colorChange.textContent = color;
            changethis.style.backgroundColor = color;
        } else {
            const color = simpleColors[simpleColorIndex];
            colorChange.textContent = color;
            changethis.style.backgroundColor = color;
            simpleColorIndex = (simpleColorIndex + 1) % simpleColors.length;
        }
    }

    btn.addEventListener('click', changeColor);

    hex.addEventListener('click', () => {
        hex.style.color = "lightskyblue";
        simple.style.color = "white";
        isHexMode = true;
    });

    simple.addEventListener('click', () => {
        simple.style.color = "lightskyblue";
        hex.style.color = "white";
        isHexMode = false;
        simpleColorIndex = 0; // Reset index to start from the first color
    });

    about.addEventListener('click', () => {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });
});
