const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "sim!",
    "não:)",
    "mano se ferro!",
   " talvez",
    "voce pode conta com isso ",
   " certeza!",
   " sem duvidas",
    "perfunte novamente mais tarde.",
   " não é possivel prever agora",
   " pergunte novamente mais tarde ",
]
//gerar numero aletorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random()* totalRespostas) 

console.log(numeroAleatorio)

//clicar em fazer pergunta
function fazerPergunta() {
if(inputPergunta.value == ""){
    alert("difite sua pergunta")
    return
}
   //gerar numero aletorio
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random()* totalRespostas) 
const pergunta = inputPergunta.value 
 elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
}