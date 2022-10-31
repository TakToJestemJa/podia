const questions = document.querySelectorAll('.questions')


questions.forEach(question => {
    const questionTitle = question.querySelector('.question-title')
    questionTitle.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active')
            }
        })

        question.classList.toggle('active')
    })
})