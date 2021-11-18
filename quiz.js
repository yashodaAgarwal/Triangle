const quizForm=document.querySelector(".quiz-form");
const submitAnsBtn=document.querySelector("#submit-answer-btn");
const outputElement=document.querySelector("#output");

const correctAnswers=["90*","Right Angled","Yes","Isoceles","Equilateral"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score++;
        }
        index++;    
    }
    // console.log(score);
    outputElement.innerText="Your score is " + score;

}

submitAnsBtn.addEventListener("click",calculateScore);