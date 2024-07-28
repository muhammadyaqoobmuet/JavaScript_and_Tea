const showAnswerBtns = Array.from(document.getElementsByClassName('show-answer-btn'));
const hideAnswerBtns = Array.from(document.getElementsByClassName('hide-answer-btn'));
const answerSections = Array.from(document.getElementsByClassName('answer'));

showAnswerBtns.forEach((btn, index) => {
   
    btn.addEventListener('click', () => {
        // Hide all answer sections and reset button visibility
        answerSections.forEach((ansSection, idx) => {
            ansSection.classList.add("hidden");
            showAnswerBtns[idx].style.display = "block";
            hideAnswerBtns[idx].style.display = "none";
        });
        
        // Show the corresponding answer section
        answerSections[index].classList.remove("hidden");
        btn.style.display = "none";
        hideAnswerBtns[index].style.display = "block";
    });
});

hideAnswerBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Hide the corresponding answer section
        answerSections[index].classList.add("hidden");
        showAnswerBtns[index].style.display = "block";
        btn.style.display = "none";
    });
});
