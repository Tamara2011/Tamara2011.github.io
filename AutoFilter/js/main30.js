"use strict"
let autoList=[
    {
        name:"Mersedes",
        colorAuto:"red",
        yearAuto:"2015",
        img:"url(image/autoredmersedes.jpg)",
        steeringwheel:"right",
        money:"20000$",
        colorofthehall:"beige",
        engine:"gasoline",
        img2:"url(image/mersred.jpg)",
        img3:"url(image/mersred2.jpg)",
        
       
    },
    {
        name:"Lexus",
        colorAuto:"black",
        yearAuto:"2023",
        img:"url(image/autoblacklexus.jpg)",
        steeringwheel:"right",
        money:"3000000$",
        colorofthehall:"white",
        engine:" gas",
        img2:"url(image/lexblack.jpg)",
        img3:"url(image/lexblack2.jpg)",
       

    },
    {
        name:"BMW",
        colorAuto:"black",
        yearAuto:"2012",
        img:"url(image/autoblackbmw3.jpg)",
        steeringwheel:"left",
        money:"10000$",
        colorofthehall:"black",
        engine:"gasoline",
        img2:"url(image/bmwblack.jpg)",
        img3:"url(image/bmwblack2.jpg)",
    },
    {
        name:"Mersedes",
        colorAuto:"black",
        yearAuto:"2018",
        img:"url(image/autoblackmersedes.jpg",
        steeringwheel:"left",
        money:"250000$",
        colorofthehall:"black",
        engine:"gas",
        img2:"url(image/mersblack.jpg)",
        img3:"url(image/mersblack2.jpg)",
    },
    {
        name:"Range rover",
        colorAuto:"black",
        yearAuto:"2011",
        img:"url(image/autoblackrange2.jpg)",
        steeringwheel:"right",
        money:"30000$",
        engine:"gasoline",
        img2:"url(image/rangeblac.jpg)",
        img3:"url(image/rangeblac2.jpg)",
    },
    {
        name:"Lexus",
        colorAuto:"white",
        yearAuto:"2023",
        img:"url(image/autowhitelexus.jpg)",
        steeringwheel:"right",
        money:"3000000$",
        colorofthehall:"grey",
        engine:"gasoline",
        img2:"url(image/lexwhite.jpg)",
        img3:"url(image/lexwhite2.jpg)",
    },
    {
        name:"Range rover",
        colorAuto:"red",
        yearAuto:"2016",
        img:"url(image/autoredrenge.jpg)",
        steeringwheel:"right",
        money:"50000$",
        colorofthehall:"black",
        engine:"gasoline",
        img2:"url(image/rangered.jpg)",
        img3:"url(image/rangered2jpg.jpg",
    },
    {
        name:"BMW",
        colorAuto:"white",
        yearAuto:"2014",
        img:"url(image/autowhitebmw.jpg)",
        steeringwheel:"left",
        money:"60000$",
        colorofthehall:"white",
        engine:"gas",
        img2:"url(image/bmwwhite.jpg)",
        img3:"url(image/bmwwhite2.jpg",
    },
    {
        name:"Range rover",
        colorAuto:"white",
        yearAuto:"2021",
        img:"url(image/autowhiterange.jpg)",
        steeringwheel:"right",
        money:"1000000$",
        colorofthehall:"beige",
        engine:"gasoline",
        img2:"url(image/rangewhite.jpg)",
        img3:"url(image/rangewhite.jpg",
    },
];

let autoDiv=document.querySelector("#auto_div")
console.log(autoDiv)
for(let autoItem of autoList){
    let autoElement=document.createElement("div")
    autoElement.className="AutoItem"
    autoElement.innerHTML=`<h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkar";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    autoNkar.addEventListener("click",function(){
        autoDiv.innerHTML=""
        let autoElement=document.createElement("div")
        autoElement.className="AutoItemBig"
        autoElement.innerHTML=`
        <h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    <p>steering wheel ${autoItem.steeringwheel}</p>
    <p>money: ${autoItem.money}</p>
    <p>engine: ${autoItem.engine}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkarBig";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    let btn2=document.createElement("button");
    btn2.className="btnbig2"
    btn2.innerHTML=`<i class="fa-solid fa-ban"> Բողոքել</i>`
    autoNkar.after(btn2)
    let btn=document.createElement("button");
    btn.className="bntBig"
    btn.innerHTML=`<i class="fa-solid fa-thumbs-up"> Արագ վաճառք</i>`
    autoNkar.after(btn)
    autoDiv.append(autoElement)

    })
    autoElement.prepend(autoNkar)
    autoDiv.append(autoElement) // poqr divy texadrum enq mec divi mej
}
    let serchButton=document.querySelector("#search_button")
    let searchText=document.querySelector("#input_text")
    console.log(searchText)
    console.log(serchButton)
    serchButton.addEventListener("click",function(){
        let filterAuto=autoList.filter(function(item){
            return item.name.toLowerCase().includes(searchText.value.toLowerCase())
        })
        autoDiv.innerHTML="";
        for(let autoItem of filterAuto){
            let autoElement=document.createElement("div")
    autoElement.className="AutoItem"
    autoElement.innerHTML=`<h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkar";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    autoNkar.addEventListener("click",function(){
        autoDiv.innerHTML=""
        let autoElement=document.createElement("div")
        autoElement.className="AutoItemBig"
        autoElement.innerHTML=`
        <h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    <p>steering wheel ${autoItem.steeringwheel}</p>
    <p>money: ${autoItem.money}</p>
    
    <p>engine: ${autoItem.engine}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkarBig";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    let btn2=document.createElement("button");
    btn2.className="btnbig2"
    btn2.innerHTML=`<i class="fa-solid fa-ban"> Բողոքել</i>` 
    autoNkar.after(btn2)
    let btn=document.createElement("button");
    btn.className="bntBig"
    btn.innerHTML=`<i class="fa-solid fa-thumbs-up"> Արագ վաճառք</i>`
    autoNkar.after(btn)
    autoDiv.append(autoElement)

    })
    autoDiv.append(autoElement) // poqr divy texadrum enq mec divi mej
        }
    
    let filterAutoByYear=autoList.filter(function(item){
        return item.yearAuto==searchText.value;
    })
    for(let autoItem of filterAutoByYear){
        let autoElement=document.createElement("div")
    autoElement.className="AutoItem"
    autoElement.innerHTML=`<h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkar";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    autoNkar.addEventListener("click",function(){
        autoDiv.innerHTML=""
        let autoElement=document.createElement("div")
        autoElement.className="AutoItemBig"
        autoElement.innerHTML=`
        <h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    <p>steering wheel ${autoItem.steeringwheel}</p>
    <p>money: ${autoItem.money}</p>
    <p>engine: ${autoItem.engine}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkarBig";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    let btn2=document.createElement("button");
    btn2.className="btnbig2"
    btn2.innerHTML=`<i class="fa-solid fa-ban"> Բողոքել</i>`
    autoNkar.after(btn2)
    let btn=document.createElement("button");
    btn.className="bntBig"
    btn.innerHTML=`<i class="fa-solid fa-thumbs-up"> Արագ վաճառք</i>`
    autoNkar.after(btn)
    autoDiv.append(autoElement)

    })
    autoDiv.append(autoElement) // poqr divy texadrum enq mec divi mej
    }
    let filterAutoByColor=autoList.filter(function(item){
        return item.colorAuto.toLowerCase()==searchText.value.toLowerCase()
    })
    for(let autoItem of filterAutoByColor){
        let autoElement=document.createElement("div")
    autoElement.className="AutoItem"
    autoElement.innerHTML=`<h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkar";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    autoNkar.addEventListener("click",function(){
        autoDiv.innerHTML=""
        let autoElement=document.createElement("div")
        autoElement.className="AutoItemBig"
        autoElement.innerHTML=`
        <h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    <p>steering wheel ${autoItem.steeringwheel}</p>
    <p>money: ${autoItem.money}</p>

    <p>engine: ${autoItem.engine}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkarBig";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    let btn2=document.createElement("button");
    btn2.className="btnbig2"
    btn2.innerHTML=`<i class="fa-solid fa-ban"> Բողոքել</i>`
    autoNkar.after(btn2)
    let btn=document.createElement("button");
    btn.className="bntBig"
    btn.innerHTML=`<i class="fa-solid fa-thumbs-up"> Արագ վաճառք</i>`
    autoNkar.after(btn)
    autoDiv.append(autoElement)

    })
    autoDiv.append(autoElement) // poqr divy texadrum enq mec divi mej
    }
})
let filterButton=document.querySelector("#filter_button");
console.log(filterButton)
filterButton.addEventListener("click",function(){
    let nameSelect=document.querySelector("#nameSelect").value.toLowerCase();
    let colorSelect=document.querySelector("#colorSelect").value.toLowerCase();
    let tivStart=document.querySelector("#tivStart").value.toLowerCase();
    let tivEnd=document.querySelector("#tivEnd").value.toLowerCase();
    let filterAutoByFilter=autoList.filter(function(item){
        return item.name.toLowerCase().includes(nameSelect)&& item.colorAuto.toLowerCase().
        includes(colorSelect) && (item.yearAuto.includes(tivStart)|| item.yearAuto.includes(tivEnd)|| item.yearAuto>=tivStart && item.yearAuto<=tivEnd)
    })
    autoDiv.innerHTML="";
    for(let autoItem of filterAutoByFilter){
        let autoElement=document.createElement("div")
    autoElement.className="AutoItem"
    autoElement.innerHTML=`<h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkar";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    autoNkar.addEventListener("click",function(){
        autoDiv.innerHTML=""
        let autoElement=document.createElement("div")
        autoElement.className="AutoItemBig"
        autoElement.innerHTML=`
        <h2>name: ${autoItem.name}</h2>
    <p>color: ${autoItem.colorAuto}</p>
    <p>year: ${autoItem.yearAuto}</p>
    <p>steering wheel ${autoItem.steeringwheel}</p>
    <p>money: ${autoItem.money}</p>
   
    <p>engine: ${autoItem.engine}</p>
    `  // mejy grumenq text
    let autoNkar=document.createElement("div");
    autoNkar.className="autoNkarBig";
    autoNkar.style.backgroundImage=autoItem.img
    autoElement.prepend(autoNkar)
    let btn2=document.createElement("button");
    btn2.className="btnbig2"
    btn2.innerHTML=`<i class="fa-solid fa-ban"> Բողոքել</i>`
    autoNkar.after(btn2)
    let btn=document.createElement("button");
    btn.className="bntBig"
    btn.innerHTML=`<i class="fa-solid fa-thumbs-up"> Արագ վաճառք</i>`
    autoNkar.after(btn)
    autoDiv.append(autoElement)

    })
    autoDiv.append(autoElement) // poqr divy texadrum enq mec divi mej
    }

    
        
    console.log(filterAutoByFilter)
})
