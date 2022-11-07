const display = document.querySelector('.forca-display');
const input = document.querySelector('.forca-input');

const palavras = ['candidato', 'partido', 'votar', 'presidente', 'eleitor']
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const aviso = document.querySelector('.aviso-repetido');

const wrongKeys = [];
const rightKeys = [];

input.addEventListener('keyup', (e) => onInput(e, e.target));
const btnJogar = document.querySelector('#jogar')

btnJogar.addEventListener('click', restart)

function restart(){
    window.location.reload()
}

showRightKeys();

function onInput(event, element){
    element.value = '';
    if(isKey(event.keyCode)){
        const key = event.key;
        if(wrongKeys.includes(key) || rightKeys.includes(key)){
            showWarning();
        }else{
            if(palavraSecreta.includes(key)){
                rightKeys.push(key);
            }else{
                wrongKeys.push(key);
            }
        }

        updateGame();
    }
}

function updateGame(){
    showWrongKeys();
    showRightKeys();
    drawForca();
    checaEstado();
}

function showWrongKeys(){
    const div = document.querySelector('.letras-erradas');
    div.innerHTML = "<h3>Letras erradas</h3>"
    wrongKeys.forEach(key => {
        div.innerHTML += `<span>${key}</span>`
    })
}

function showRightKeys(){
    display.innerHTML = '';
    palavraSecreta.split('').forEach(key => {
        if(rightKeys.includes(key)){
            display.innerHTML += `<span>${key}</span>`
        }else{
            display.innerHTML += `<span>_</span>`
        }
    })
}

function showWarning(){
    aviso.classList.add("show");
    setTimeout(()=>{
        aviso.classList.remove("show");
    }, 1000);
}

function isKey(code){
    return (code >= 65 && code <= 90);
}

function drawForca(){
    const parte = document.querySelectorAll('.forca-parte');
    for(let i = 0; i < wrongKeys.length; i++){
        parte[i].style.display = 'block';
    }
}

function checaEstado(){
    const partes = document.querySelectorAll('.forca-parte');
    let msg = "";
    if(wrongKeys.length == partes.length){
        msg = 'Você perdeu!'
        console.log('teste')
    }

    if(palavraSecreta === display.innerText){
        msg = "Você ganhou!"
    }

    if(msg.length > 0){
        console.log('perdeu')
        document.querySelector("#mensagem").innerText = msg;
        document.querySelector(".popup-container").style.display = 'flex'
    }
}