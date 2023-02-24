

let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener('click', saveLead);
// localStorage.setItem("myLeads",JSON.stringify(myLeads));
// let name1 = JSON.parse(localStorage.getItem("myLeads"))
// console.log("sd",name1)
function saveLead(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("mylead",JSON.stringify(myLeads))
    renderLeads();
    console.log(localStorage.getItem("mylead"))
}

function renderLeads(){
    let listItems="";
    console.log("sdsa1", listItems)
    for(let i=0;i<myLeads.length;i++){
        listItems += "<li>" + myLeads[i] + "</li>"
        
    }
  
    document.getElementById("result").innerHTML = listItems;
}


// for(let i=0;i<myLeads.length;i++){
//     listItems += "<li>" + myLeads[i] + "</li>"
//     // const li = document.createElement("li");
//     // li.textContent = myLeads[i];
//     // document.getElementById("result").append(li)
// }

let colors = ["green","red","blue","pink"];

let btn = document.getElementById("changeColor");
let colorName = document.getElementById("color");
btn.addEventListener('click',function(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.innerText = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

let count = 0;
let countV= document.getElementById("count");
console.log(countV)
let btns =document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("dec")){
            count--;
        }else if(styles.contains("inc")){
            count++;
        }else{
            count=0;
        }
        if(count>0){
            countV.style.color="green"
        }else{
            countV.style.color="red"
        }
        countV.innerText= count;
    })
})


const myarr = [
    {
        src:"",
        title:"Pradeep",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    },
    {
        src:"",
        title:"Jaswant",
        description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, beca"

    },
    {
        src:"",
        title:"Ajay",
        description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, beca"

    },
    {
        src:"",
        title:"mayank",
        description:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, beca"

    }
]

let title = document.getElementById("title");
let description = document.getElementById("description");
title.innerText = myarr[0].title;
description.innerText = myarr[0].description;
let next = document.getElementById("next");
let count1 = 0;
next.addEventListener('click', function(e){
    //alert("sdasd")
   
   
   // alert(count1)
    if(count1<myarr.length-1){
        count1 +=1;
        
    
    }else{
        count1 = 0;
    }
    if(count1===myarr.length-1){
        next.style.opacity= "0.5"
        next.style.pointerEvents= "none"
    }
    else{
        next.style.opacity= "1"
        next.style.pointerEvents= "all"
        prev.style.opacity= "1"
        prev.style.pointerEvents= "all"
    }
    //console.log(count1)
    title.innerText = myarr[count1].title;
    description.innerText = myarr[count1].description;
})


let prev = document.getElementById("prev");
if(count1===0){
    prev.style.opacity= "0.5"
    prev.style.pointerEvents= "none"
}

prev.addEventListener('click', function(e){
    //alert("sdasd")
   
   
   // alert(count1)
    if(count1===myarr.length-1){
        count1 -=1;
        
    
    }else{
        count1 = 0;
        
    }

    if(count1===myarr.length-1){
        next.style.opacity= "0.5"
        next.style.pointerEvents= "none"
    }
    else{
        next.style.opacity= "1"
        next.style.pointerEvents= "all"
        prev.style.opacity= "1"
        prev.style.pointerEvents= "all"
    }
    if(count1===0){
        prev.style.opacity= "0.5"
        prev.style.pointerEvents= "none"
    }
    
    //console.log(count1)
    title.innerText = myarr[count1].title;
    description.innerText = myarr[count1].description;
})


// // let modalBtn = document.getElementById("modalBtn");
// // let modalDiv = document.getElementById("modalDiv");
// // let closeBtn = document.getElementById("closeBtn")
// let overlay = document.createElement('div');
// overlay.classList.add("modalOverlay")
// //console.log(overlay);
// // let modalclass = modalDiv.classList;

// let modals = document.querySelectorAll(".modalDiv");
// let modalBtn = document.querySelectorAll(".modalBtn");
// let closeBtns = document.querySelectorAll(".closeBtn")
// modalBtn.forEach(function (btn){
//     btn.addEventListener('click', function(e){
//         e.stopPropagation();
//         let btnV = btn.getAttribute("dataT")
//        // let modalId = modals.getAttribute('id');
//         //console.log(modals);
//         //console.log(modals[1].id)

//         for(let i=0; i<modals.length;i++){
//             if(btnV === modals[i].id){
//                // console.log(modals[i].id)
//                 let showElem = document.getElementById(modals[i].id)
//                 showElem.classList.add("open")
//             }
//         }
    
//         document.body.appendChild(overlay);
//         console.log(overlay.classList.length)
//     })
// })


// closeBtns.forEach(function (btn){
//     btn.addEventListener('click', function(e){
//         btn.closest('.modalDiv').classList.remove("open");
//         document.body.removeChild(overlay);
//     })
// })

// // modalBtn.addEventListener('click',function(e){
// //     e.stopPropagation();
// //     //console.log(modalclass)
// //     if(modalclass.contains("open")){
// //         modalclass.remove("open");
// //         document.body.appendChild(overlay);
// //     }else{
// //         modalclass.add("open");
// //         document.body.appendChild(overlay);
// //     }
// //     console.log("child")
// // })


// // closeBtn.addEventListener('click',function(){
// //     if(modalclass.contains("open")){
// //         modalclass.remove("open");
// //         document.body.removeChild(overlay);
// //     }
   

// // })

// // modalDiv.addEventListener('click', function(e){
// //     e.stopPropagation();
// // })
// modals.forEach(function (modal){
//     modal.addEventListener('click', function(e){
//         e.stopPropagation();
//     })
// })
// document.addEventListener('click',function(e){
//    // e.stopPropagation();
//     let dd= document.querySelectorAll(".modalDiv")
//     dd.forEach(function (ddd){
//        // console.log(ddd.classList)
//         ddd.classList.remove("open");
       
//     })
//     console.log(document.getElementsByClassName("modalOverlay").length)
//     if(document.getElementsByClassName("modalOverlay").length==1){
//         ///console.log("sd",document.overlay)
//         document.body.removeChild(overlay);
//     }
   
       
    
//     //console.log("parent")
    
// })