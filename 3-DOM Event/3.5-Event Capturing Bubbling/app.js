// Event Bubbling

// mainDiv' deki click olayı
// document.querySelector(".mainDiv").addEventListener("click",function(){
//     console.log("Main Div");
// });

// divId'deki click olayı
// document.querySelector("#divId").addEventListener("click",function(){
//     console.log("Div Id");
// });

// Event Capturing veya Delegation
const divId = document.querySelectorAll("#divId")[0];

//console.log(divId);

divId.addEventListener("click",run);

function run(event){
    //console.log("Naber");
    //console.log(event.target);
    if(event.target.className === "pClass"){
        console.log("pClass...");
    }else if(event.target.id === "aId"){
        console.log("aId...");
    }else{
        console.log("divId'deki herhangi bir yer...");
    }
}