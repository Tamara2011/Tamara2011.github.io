"use strict";
function countdown(){
   let d=new Date()   //ստանում ենք այսօրվա օրը ժամը տարին․․․․
console.log(d.getTime());// 
let dmil=d.getTime() //ստանում ենք տարվա սկզբից մինչև այսօր անցած ժամանակը միլիվայրկյաններով
 let nor=new Date(2023,0,1,0,0,0)// սահմանում ենք այն օրը, ժամը րոպեն, վայրկյանը, որի համար հետհաշվարկ ենք անելու
console.log(nor);
let nord=nor.getTime(); //ստանում ենք տարվա սկզբից մինչև մեր ընտրած օրը եղած միլիվայրկյանները
    let tarberutyun=nord-dmil;  //ստանում ենք մեր ընտրած օրվա և այսօրվա մեջ եղած միլիվայրկյանների տարբերությունը։
//ստանում ենք օրերը քանակը միլիվայրկյաններիքանակը / 1000 ստանում ենք վայրկյան  / 60 ստանում ենք պոպեն /60 ստանում ենք ժամը /24 ստանում ենք օրը
let days=Math.floor(tarberutyun/(1000*60*60*24));//ստանում ենք օրը
//ստանում ենք ժամը միլիվայրկ քանկը /1000 / 60 /60 ստանում ենք ժամը, բայց քնաի որ այդ ժամերի մեջ հնարավոր է լինեն օրեր /24 վերցնում մնացորդը
let hours=Math.floor(tarberutyun/(1000*60*60))%24;
let minutes=Math.floor(tarberutyun/(1000*60))%60;
let seconds=Math.floor(tarberutyun/(1000))%60;
console.log(days,"   ", hours, " ", minutes, " ",seconds)

if(days<10){
    document.querySelector("#or").innerHTML="0" + days;
          }else{
    document.querySelector("#or").innerHTML=days;
     }
if(hours<10){
    document.querySelector("#jam").innerHTML="0" + hours;
    }else{
        document.querySelector("#jam").innerHTML=hours;
    }
if(minutes<10){
        document.querySelector("#rope").innerHTML="0" + minutes;
        }else{
            document.querySelector("#rope").innerHTML=minutes;
        }
if(seconds<10){
        document.querySelector("#vayrkyan").innerHTML="0" + seconds;
            }else{
                document.querySelector("#vayrkyan").innerHTML=seconds;
            }

        }
        setInterval(countdown, 1000) //ավելացնում ենք որպեսզի 1վայրկյանը մեկ կրկնի գործողությունը