document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.faq-block h3');

    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            answer.classList.toggle('show-answer');

            const icon = this.querySelector('.toggle-icon');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });
});