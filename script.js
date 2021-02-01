const QuizData=[
    {
        Question:'How old is Amit ?',
        a:'12',
        b:'23',
        c:'45',
        d:'222',
        correct:'b'
    },
    {
        Question:'Who is the president of India ?',
        a:'Naredra Modi',
        b:'SH. Ram nath Kovind',
        c:'Rahul Gandhi',
        d:'Aditya Nath Yogi',
        correct:'b'
    },
    {
        Question:'Who is the PM of India ?',
        a:'Naredra Modi',
        b:'SH. Ram nath Kovind',
        c:'Rahul Gandhi',
        d:'Aditya Nath Yogi',
        correct:'a'
    },
    {
        Question:'Most Used Programming language in 2019 ?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    },
    {
        Question:'Who is CM of Delhi ?',
        a:'Arvind kejriwal',
        b:'Naredra Modi',
        c:'Aditya Nath Yogi',
        d:'JavaScript',
        correct:'a'
    },

];
const quiz = document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitbtn=document.getElementById("btn");
// a_text.style.cursor = 'none';
let currentQuestion=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();

    const currentQuizData=QuizData[currentQuestion];

    questionEl.innerText=currentQuizData.Question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

    
}
function getSelected() {
    // console.log("hio");
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
            // console.log(answer);
            // return answer;
        }
    });  

    return answer;
}

function deselectAnswer() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitbtn.addEventListener("click", () => {
//    check to see the answer
    const answer = getSelected();
    // console.log(answer);

    if(answer) {

        if(answer === QuizData[currentQuestion].correct) {
            score++;
            // comsole.log(score);
        }

        currentQuestion++;

        if(currentQuestion < QuizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${QuizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
            // alert
        }
    }
    
});
