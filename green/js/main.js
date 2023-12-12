"use strict"
AOS.init({
    duration: 600,
    once: false,
    
});

// let menuMobBtn=document.querySelector(".menu-mobile_btn");
// let faBars=document.querySelector(".fa-bars");
// let faXmark=document.querySelector(".fa-xmark");
// let respMenu=document.querySelector(".respMenu")
// menuMobBtn.addEventListener("click",function(){
//     respMenu.classList.toggle("block")
//     faXmark.classList.toggle("block")
//     faBars.classList.toggle("hidden")
// })
let hashvark=document.querySelector(".hashvark")
let meter=document.querySelector("#meter")
console.log(meter);
let term=document.querySelector("#term")
console.log(term)
let verjnakan=document.querySelector(".verjnakan")
console.log(verjnakan)
term.onchange=meter.onchange=HashVark
function HashVark(){
    let result=1000*meter.value+ +term.value
    verjnakan.innerHTML=result
}