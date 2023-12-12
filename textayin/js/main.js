"use strict"
let quizArr=[
    {
        question:"Ո՞ր թեգի միջոցով ենք ստեղծում աղյուսակ HTML-ում։",
        answors:["table","list","select","datalist"],
        correct:[1],
    },
    {
        question:"Ինչպե՞ս է բացվում CSS հապավումը",
        answors:["Creative Style Sheets","Computer Style Sheets","Cascading Style Sheets"],
        correct:[3],
    },
    {
        question:"Որո՞նք են input էլեմենտի տիպեր",
        answors:["legend","checkbox","textarea","select","email","text"],
        correct:[2,5,6],
    },
    {
        question:"Ինչի՞ համար է օգտագործվում HTML-ը",
        answors:["Կայքի գեղեցիկ տեսքը ապահովելու համար","Կայքի դինամիկությունն ապահովելու համար","Կայքի կառուցվածքը ստանալու համար"],
        correct:[3],
    },
    
    {
        question:"Գույների ներկայացման, որ տարբերակով (տարբերակներով) կարող ենք նշել թափանցիկությունը։",
        answors:["RGB","HEX","RGBA","HSL"],
        correct:[3,4],
    },

]
let score=0;
let answorIndex=0;
let timescore=11
let harc=document.querySelector(".questionH1")
let answer=document.querySelector(".answer")
let timeDiv=document.querySelector(".time")
let patasxan;
let Indekator;
let nextBtn=document.querySelector("#nextBtn")
showQuestion()
nextBtn.addEventListener("click",nextQuestion)
function nextQuestion(){
    checkAnswer()
    clearInterval(Indekator)
    clearQuestion()
    answorIndex++
    if(answorIndex<quizArr.length){
    showQuestion()
}else{
    nextBtn.innerHTML="RESTART"
    nextBtn.style.backgroundColor="rgb(13, 0, 120)"
    harc.innerHTML=`Դուք հավաքել եք ${score} միավոր`
    if(score>quizArr.length*50/100){
        answer.innerHTML=`Ձեր պատասխանը հրաշալի է`
    }else{
        answer.innerHTML=`Կարելի է նորից աշխատել`
    }
    nextBtn.addEventListener("click",restart)
}
}
function restart(){
    answorIndex=0
    clearQuestion()
    showQuestion()
    score=0
    nextBtn.innerHTML="Next"
    nextBtn.style.backgroundColor="rgb(13, 120, 0)"
    nextBtn.removeEventListener("click",restart)
}

function checkAnswer(){
    let scoreOne=0
    if(answorIndex<quizArr.length){
    
    patasxan=document.querySelectorAll("input:checked")
    console.log(patasxan)
    if(patasxan.length==quizArr[answorIndex].correct.length){
        for(let i=0;i<patasxan.length;i++){
            if(patasxan[i].value==quizArr[answorIndex].correct[i]){
                scoreOne++
            }
        }
        if(scoreOne==patasxan.length){
            score++
        }
    }
    
    console.log("score="+score)
    
}
}



function showQuestion(){
    timescore=11
    Indekator=setInterval(timer,1000)
harc.innerHTML=quizArr[answorIndex].question
if(quizArr[answorIndex].correct.length==1){
for(let i=0;i<quizArr[answorIndex].answors.length;i++){
    answer.innerHTML+=`<input type="radio" name="answor" id="answor${i+1}" class="answorInput" 
    value="${i+1}">
    <label for="answor${i+1}">${quizArr[answorIndex].answors[i]}</label><br>`
}
}else{
    for(let i=0;i<quizArr[answorIndex].answors.length;i++){
        answer.innerHTML+=`<input type="checkbox" name="answor${i+1}" id="answor${i+1}" class="answorInput" 
        value="${i+1}">
        <label for="answor${i+1}">${quizArr[answorIndex].answors[i]}</label><br>`
}
}
}
function clearQuestion(){
    harc.innerHTML=""
    answer.innerHTML=""
    timeDiv.innerHTML=""
}
function timer(){
    timescore--
    timeDiv.innerHTML=timescore + "վրկ"
    if(timescore==0){
        clearInterval(Indekator)
        nextQuestion()
    }
}
