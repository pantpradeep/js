// let modalBtn = document.getElementById("modalBtn");
// let modalDiv = document.getElementById("modalDiv");
// let closeBtn = document.getElementById("closeBtn")
let overlay = document.createElement('div');
overlay.classList.add("modalOverlay")
//console.log(overlay);
// let modalclass = modalDiv.classList;

let modals = document.querySelectorAll(".modalDiv");
let modalBtn = document.querySelectorAll(".modalBtn");
let closeBtns = document.querySelectorAll(".closeBtn")
modalBtn.forEach(function (btn){
    btn.addEventListener('click', function(e){
        e.stopPropagation();
        let btnV = btn.getAttribute("dataT")
       // let modalId = modals.getAttribute('id');
        //console.log(modals);
        //console.log(modals[1].id)

        for(let i=0; i<modals.length;i++){
            if(btnV === modals[i].id){
               // console.log(modals[i].id)
                let showElem = document.getElementById(modals[i].id)
                showElem.classList.add("open")
            }
        }
    
        document.body.appendChild(overlay);
        console.log(overlay.classList.length)
    })
})


closeBtns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        btn.closest('.modalDiv').classList.remove("open");
        document.body.removeChild(overlay);
    })
})

// modalBtn.addEventListener('click',function(e){
//     e.stopPropagation();
//     //console.log(modalclass)
//     if(modalclass.contains("open")){
//         modalclass.remove("open");
//         document.body.appendChild(overlay);
//     }else{
//         modalclass.add("open");
//         document.body.appendChild(overlay);
//     }
//     console.log("child")
// })


// closeBtn.addEventListener('click',function(){
//     if(modalclass.contains("open")){
//         modalclass.remove("open");
//         document.body.removeChild(overlay);
//     }
   

// })

// modalDiv.addEventListener('click', function(e){
//     e.stopPropagation();
// })
modals.forEach(function (modal){
    modal.addEventListener('click', function(e){
        e.stopPropagation();
    })
})
document.addEventListener('click',function(e){
   // e.stopPropagation();
    let dd= document.querySelectorAll(".modalDiv")
    dd.forEach(function (ddd){
       // console.log(ddd.classList)
        ddd.classList.remove("open");
       
    })
    console.log(document.getElementsByClassName("modalOverlay").length)
    if(document.getElementsByClassName("modalOverlay").length==1){
        ///console.log("sd",document.overlay)
        document.body.removeChild(overlay);
    }
   
       
    
    //console.log("parent")
    
})