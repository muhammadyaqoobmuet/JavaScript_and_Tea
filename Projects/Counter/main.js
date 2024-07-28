document.addEventListener('DOMContentLoaded', () => {
    const inc = document.querySelector('#inc');
    const dec = document.querySelector('#dec');
    const reset = document.querySelector('#reset');
    const count = document.querySelector('#count');

    inc.addEventListener('click', () => {
        count.textContent = `${parseInt(count.textContent) + 1}`;
        
    });

    dec.addEventListener('click', () => {
        count.textContent = `${parseInt(count.textContent) - 1}`;
    });

    reset.addEventListener('click', () => {
        count.textContent = '0';
    });

    
    
});
