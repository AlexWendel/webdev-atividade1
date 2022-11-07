let questionNumber = 6;
let questionsList = []; 
let questionLock =false;
let totalQuestions;
let score = 0.0;
let current = 0;


const inputs = document.querySelectorAll(".inputGroup");
const scoreDisplay = document.querySelector(".score");


function animate(){
    const speed = 30;
    const time = score/speed;
    let data = current

    if(data < score){
        scoreDisplay.textContent = "Score: " + Math.ceil(data + time)+ '%';
        current = Math.ceil(data + time);
        setTimeout(animate, speed);
    }
    
}

function responder(e){
    if(e.target.getAttribute('value')==null) return
    const pai = e.target.parentNode
    const respondido = e.target.getAttribute('value')
    const questao = pai.getAttribute('question');
    console.log(respondido)

    
    if(respostas[questao] == "false"){
        pai.innerHTML = "<p>Fakenews</p>"
    }else{
        pai.innerHTML = "<p>Verdadeiro</p>"
    }
    if(respostas[questao] == respondido){
        pai.classList.add("verdade")
        score += 16.66;
    }else{
        pai.classList.add("fake")
    }

    questionNumber--;

    if(questionNumber == 0){
        animate();
    }

}

inputs.forEach(element => {
    element.addEventListener('click', (e) => responder(e));
});


const respostas = {
    "1": "false",
    "2": "false",
    "3": "true",
    "4": "false",
    "5": "true",
    "6": "false"
}