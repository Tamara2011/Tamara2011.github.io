"use strict"
let scrollBtn=document.querySelector(".scrollBtn")
scrollBtn.addEventListener("click",scrollUpPage)
window.addEventListener("scroll",scrollUpBtnBlock)
function scrollUpBtnBlock(){

    if(window.pageYOffset>document.documentElement.clientHeight/2){
        scrollBtn.style.display="block"

    }else{
        scrollBtn.style.display="none"

    }
}
function scrollUpPage(){ 

    window.scrollTo(0,0)    

    
}
let mobileBtn=document.querySelector(".menu-mobile_btn")
let bars=document.querySelector(".fa-bars")
let Xmark=document.querySelector(".fa-xmark")
let respMenu=document.querySelector(".respMenu")
mobileBtn.addEventListener("click",function(){
    bars.classList.toggle("hidden")
    respMenu.classList.toggle("block")
    Xmark.classList.toggle("block")
})
let container=document.querySelector("#container");
let sliderItems=container.querySelectorAll("img")
console.log(sliderItems)
let btnPrev=document.querySelector("#btn_prev")
let btnNext=document.querySelector("#btn_next")
let balls=document.querySelectorAll(".ball")
let slideNextIndex;
let currentSlideIndex;
let currentSlide;
sliderItems.forEach(function(slide,index){
    if(index!=0){
        slide.classList.add("hidden")
    }
    sliderItems[0].setAttribute("data-active","")
    slide.dataset.index=index
    balls[0].classList.add("darkBall")
    slide.addEventListener("click",nextImg)
    function nextImg(){
        removeDataAciveSlide(slide)
        balls[index].classList.remove("darkBall")
        nextSlideIndexFind(index)
        nextSlideBlock(slideNextIndex)
    }
})
btnNext.onclick=function(){
    findActiveSlide()
    nextSlideIndexFind(currentSlideIndex)
    nextSlideBlock(slideNextIndex)
}
btnPrev.onclick=function(){
    findActiveSlide()
    prevSlideIndexFind()
    nextSlideBlock(slideNextIndex)
}

setInterval(function(){
    findActiveSlide()
    nextSlideIndexFind(currentSlideIndex)
    nextSlideBlock(slideNextIndex)
},10000)


function nextSlideBlock(NextIndex){
    let nextSlide=container.querySelector(`[data-index="${NextIndex}"]`)
        console.log(nextSlide)
        nextSlide.classList.remove("hidden")
        nextSlide.setAttribute("data-active","")
        balls[NextIndex].classList.add("darkBall")
}
function findActiveSlide(){
    currentSlide=container.querySelector("[data-active]")
    currentSlideIndex= +currentSlide.dataset.index;
    removeDataAciveSlide(currentSlide)
    balls[currentSlideIndex].classList.remove("darkBall")
}
function removeDataAciveSlide(activeSlide){
    activeSlide.classList.add("hidden")
    activeSlide.removeAttribute("data-active")
}
function nextSlideIndexFind(regularIndex){
    if(regularIndex==sliderItems.length-1){
        slideNextIndex=0
    }
    else{
        slideNextIndex=regularIndex+1
    }
}
function prevSlideIndexFind(){
    if(currentSlideIndex==0){
        slideNextIndex=sliderItems.length-1
    }
    else{
        slideNextIndex=currentSlideIndex-1
    }
}
balls.forEach(function(ball,index){
    ball.addEventListener("click",function(){
        findActiveSlide()
        nextSlideBlock(index)
    })
})
let leftBnt=document.querySelector(".fa-angle-left")
console.log(leftBnt);
let rightBtn=document.querySelector(".fa-angle-right")
console.log(rightBtn);
let product=document.querySelectorAll(".product")
let productBody=document.querySelector(".product-body")
let i=0
let left=0
rightBtn.addEventListener("click",function(){
    console.log("okey")
    if(i<product.length-3){
    i++
    left=left+product[i].getBoundingClientRect().left-20
    productBody.style.transform=`translate(${-left}px)`
}
})
leftBnt.addEventListener("click",function(){
    if(i>0){
    i--
    left=left-product[i].offsetWidth-40
    productBody.style.transform=`translate(${-left}px)`
}
})
let quizArr=[
    {
        quiz:["Ով է գրել Դոն Կիխոտ-ը"],
        answer:["Դեֆո","Սերվանտես","Սվիֆթ","Ջեկ Լոնդոն"],
        currectAnswer:2,
    },
    {
        quiz:["Որքան է 7-ի քառակուսին"],
        answer:["14","28","49","7"],
        currectAnswer:3,
    },
    {
        quiz:["Որքան է 5-ի եռանկյունին"],
        answer:["15","25","5","125"],
        currectAnswer:4,
    },
];
let score=0
let answorIndex=0
let patasxan;
let harc=document.querySelector(".quizH1")
let answer=document.querySelector(".answer")
console.log(answer)
let nextBtn=document.querySelector("#nextBtn")
showQuestion()
nextBtn.addEventListener("click",nextQuestion)
function nextQuestion(){
    checkAnswer()
    clearQuestion()
    answorIndex++
    if(answorIndex<quizArr.length){
    showQuestion()
}
}
function checkAnswer(){
    patasxan=document.querySelector("input:checked")
    if(patasxan){
    let patasxanValue=patasxan.value
    console.log(patasxan)
    if(patasxanValue==quizArr[answorIndex].currectAnswer){
        score++
    }
    console.log("score="+score)
}
}
function showQuestion(){
    harc.innerHTML=quizArr[answorIndex].quiz

for(let i=0;i<quizArr[answorIndex].answer.length;i++){
    answer.innerHTML+=`<input type="radio" name="answor" id="answor${i+1}" class="answorInput" 
    value="${i+1}">
    <label for="answor${i+1}">${quizArr[answorIndex].answer[i]}</label><br>`
}
}

function clearQuestion(){
    harc.innerHTML=""
    answer.innerHTML=""
}
function result(){
    harc.innerHTML="score="+score
    if(score>quizArr.length*50/100){
        answer.innerHTML="Շնորհավորում եմ քեզ"
        nextBtn.innerHTML="Լավ էր"
    }else{
        answer.innerHTML="Ցավում եմ"
        nextBtn.innerHTML="Վատ էր դու կարող ես"
    }
}