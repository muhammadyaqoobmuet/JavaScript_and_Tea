document.addEventListener('DOMContentLoaded', () => {
    const allBtn = document.querySelector('#all');
    const breakfastBtn = document.querySelector('#breakfast');
    const lunchBtn = document.querySelector('#lunch');

    const allItems = document.querySelectorAll('.all');
    const breakfastItems = document.querySelectorAll('.breakfast');
    const lunchItems = document.querySelectorAll('.lunch');

    function showItems(itemsToShow) {
        allItems.forEach(item => item.classList.add('hidden'));
        itemsToShow.forEach(item => item.classList.remove('hidden'));
    }

    allBtn.addEventListener('click', () => {
        allItems.forEach(item => item.classList.remove('hidden'));
    });

    breakfastBtn.addEventListener('click', () => {
        showItems(breakfastItems);
    });

    lunchBtn.addEventListener('click', () => {
        showItems(lunchItems);
    });
});
