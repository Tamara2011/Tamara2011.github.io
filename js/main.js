"use strict"
document.body.onload=function(){
    setTimeout(function(){
        let preloader=document.querySelector(".preloader")
    preloader.classList.add("hiddenLoader")
    },1000)
}
let respMenu=document.querySelector(".respMenu")
function myFunction(x) {
    x.classList.toggle("change");
    respMenu.classList.toggle("block")

}

let langArr={
    "homeli":{
        "hy":"Գլխավոր",
        "en":"Home",
        "ru":"врыово"
    },
    "aboutli":{
        "hy":"մեր մասին",
        "en":"about",
        "ru":"о нас"
    },
    "qualityli":{
        "hy":"որակ",
        "en":"quality",
        "ru":"качество"
    },
    "skillsli":{
        "hy":"հմտություններ",
        "en":"skills",
        "ru":"навыки",
    },
    "portfolioli":{
        "hy":"պորտֆոլիո",
        "en":"porfolio",
        "ru":"портфолио"
    },
    "contactli":{
        "hy":"Կապ",
        "en":"contact",
        "ru":"контакт"
    },
    "firstli":{
        "hy":"Թամարա Սուքիասյան",
        "en":"Tamara Suqiasyan",
        "ru":"Тамара Сукиасян"
    },
    "helloli":{
        "hy":"Բարև,ես",
        "en":"Hello,I am",
        "ru":"Здравствуйте, я"
    }
}
let allLang=["hy","en","ru"]
// console.log(window.location)
// console.log(window.location.href)
// console.log(window.location.protocol)
// console.log(window.location.pathname)
let select=document.querySelector(".leng-site")
console.log(select)
select.addEventListener("change",function(){
    console.log("OK")
    let lang=select.value
    console.log(lang)
    location.href=window.location.pathname+"#"+lang
})
// select.addEventListener("change",function(){
//     console.log("select")
//     let lang=select.value
//     console.log(lang)
//     location.href=window.location.pathname+"#"+lang
//     // location.reload()
// })
function changeLang(){
    console.log("Tamara")
    let hash=window.location.hash
    // window.location.href.onchange=function(){
    //     location.reload()
    // }
    hash=hash.substr(1)
    console.log(hash) 
    if(!allLang.includes(hash)){
        console.log("text")
        location.href=window.location.pathname+"#en"
        // location.reload()
    }
    window.onhashchange=function(){
        location.reload()
    }
    select.value=hash
    for(let key in langArr){
        console.log(key)
        let elem=document.querySelector(`[data-leng=${key}]`)
        if(elem){
            elem.innerHTML=langArr[key][hash]
        }
    }
}
changeLang()

let menu=document.querySelector("nav")
function menuFixed(){
    if(window.pageYOffset>window.innerHeight/2 || window.innerWidth<992){
        menu.style.opacity="1"
        menu.style.top="0"
    }else{
        menu.style.opacity="0"
        menu.style.top="-100px"
    }
}
// let mobileBtn=document.querySelector(".contanier")
// let bars=document.querySelector(".fa-bars")
// let Xmark=document.querySelector(".fa-xmark")
// mobileBtn.addEventListener("click",function(){
//     bars.classList.toggle("hidden")
//     Xmark.classList.toggle("block")
// })
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

window.addEventListener("scroll",menuFixed)
let textDiv=document.querySelector(".secondH1")
let i=0
let text="web developer"
setInterval(function(){
    if(i<text.length){
        textDiv.innerHTML+=text.charAt(i)
        i++
    }

},200)
let themeBtn=document.querySelector(".theme")
if(!localStorage.theme){
    localStorage.setItem("theme","light")
}

document.body.className=localStorage.theme
if(localStorage.theme=="dark"){
    themeBtn.innerHTML=`<i class="fa-solid fa-sun"></i>`
}else{
    themeBtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
}
themeBtn.addEventListener("click",function(){
    if(localStorage.getItem("theme")=="light"){
        themeBtn.innerHTML=`<i class="fa-solid fa-sun"></i>`
        document.body.className="dark"
    }
    else{
        themeBtn.innerHTML=`<i class="fa-solid fa-moon"></i>`
        document.body.className="light"
    }
    localStorage.theme=document.body.className
})

let progressNumberHtml=document.querySelector(".progressNumberHtml")
let progressHtml=document.querySelector(".progressHtml")
let progressCountHtml=0
let AllContaniers=document.querySelector(".AllContaniers")
let progressIndekatorHtml=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    // console.log(topProgress)
    // console.log(window.innerHeight)
    // console.log(AllContaniers.offsetHeight)
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
    progressCountHtml++
    progressNumberHtml.innerHTML=progressCountHtml+"%"
    progressHtml.style.width=progressCountHtml+"%"
    if(progressCountHtml>94){
        clearInterval(progressIndekatorHtml)
    }
}
},20)
let progressNumberCss=document.querySelector(".progressNumberCss")
let progressCss=document.querySelector(".progressCss")
let progressCountCss=0
// let AllContaniers=document.querySelector(".AllContaniers")
let progressIndekatorCss=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    // console.log(topProgress)
    // console.log(window.innerHeight)
    // console.log(AllContaniers.offsetHeight)
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
    progressCountCss++
    progressNumberCss.innerHTML=progressCountCss+"%"
    progressCss.style.width=progressCountCss+"%"
    if(progressCountCss>94){
        clearInterval(progressIndekatorCss)
    }
}
},20)
let progressNumberBoostrap=document.querySelector(".progressNumberBoostrap")
let progressBoostrap=document.querySelector(".progressBoostrap")
let progressCoutBoostrap=0
let progressIndekatorboostrap=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
        progressCoutBoostrap++
        progressNumberBoostrap.innerHTML=progressCoutBoostrap+"%"
        progressBoostrap.style.width=progressCoutBoostrap+"%"
        if(progressCoutBoostrap>89){
            clearInterval(progressIndekatorboostrap)
        }
    }
},20)
let progressNumberJs=document.querySelector(".progressNumberJs")
let progressJs=document.querySelector(".progressJs")
let progressCoutJs=0
let progressIndekatorJs=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
        progressCoutJs++
        progressNumberJs.innerHTML=progressCoutJs+"%"
        progressJs.style.width=progressCoutJs+"%"
        if(progressCoutJs>84){
            clearInterval(progressIndekatorJs)
        }
    }
},20)
let progressNumberJson=document.querySelector(".progressNumberJson")
let progressJson=document.querySelector(".progressJson")
let progressCoutJson=0
let progressIndekatorJson=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
        progressCoutJson++
        progressNumberJson.innerHTML=progressCoutJson+"%"
        progressJson.style.width=progressCoutJson+"%"
        if(progressCoutJson>54){
            clearInterval(progressIndekatorJson)
        }
    }
},20)
let progressNumberAPI=document.querySelector(".progressNumberAPI")
let progressAPI=document.querySelector(".progressAPI")
let progressCoutAPI=0
let progressIndekatorAPI=setInterval(function(){
    let topProgress=progressHtml.getBoundingClientRect().top
    if(topProgress<window.innerHeight-AllContaniers.offsetHeight){
        progressCoutAPI++
        progressNumberAPI.innerHTML=progressCoutAPI+"%"
        progressAPI.style.width=progressCoutAPI+"%"
        if(progressCoutAPI>59){
            clearInterval(progressIndekatorAPI)
        }
    }
},20)