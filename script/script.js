const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click' , selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } 
    else
     {
         startButton.innerText = 'Restart'
         startButton.classList.remove('hide')
     }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add('correct')
    } else
     {
         element.classList.add('wrong')
     }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'The most widely used code that represents each character as a unique 8-bit code is' ,
        answers: [
            { text: 'EBCDIC' , correct: false },
            { text: 'ESC' , correct: false },
            { text: 'ASCII' , correct: true },
            { text: 'Uniccode' , correct: false }
        ]        
    },


    {
        question: 'Which of the following is an example of non-volatile memory?' ,
        answers: [
            { text: 'Cache Memory' , correct: false},
            { text: 'RAM' , correct: false },
            { text: 'ROM' , correct: true },
            { text: 'SSd' , correct: false }
        ]        
    },


    {
        question: 'Which is the part of the computer system that one can physically touch?' ,
        answers: [
            { text: 'Data' , correct: false},
            { text: 'Operating Systems' , correct: false },
            { text: 'Hardware' , correct: true },
            { text: 'Software' , correct: false }
        ]        
    },


    {
        question: 'What type of process creates a smaller file that is faster to transfer over the internet?' ,
        answers: [
            { text: 'Compression' , correct: true },
            { text: 'Fragmentation' , correct: false },
            { text: 'Encapsulation' , correct: false },
            { text: 'None of the above' , correct: false }
        ]        
    },

    {
        question: 'Which of the following is the 1s complement of 10?' ,
        answers: [
            { text: '01' , correct: true },
            { text: '110' , correct: false },
            { text: '11' , correct: false },
            { text: '10' , correct: false }
        ]        
    },

]