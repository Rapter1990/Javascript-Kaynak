const inputField = document.getElementById("inputId");

//console.log(inputField);

// DOMContentLoaded -> Sayfa yüklemesi bittikten sonra çalışacak
document.addEventListener("DOMContentLoaded",load);

function load(event){
    console.log("Sayfa Yüklendi...");
}

// focus -> alana odaklanılınca (input alanına basılınca)
inputField.addEventListener("focus",function run(event){
    console.log(event.type);
});

// blur -> alandan çıkılınca (input alanından çıkılınca)
inputField.addEventListener("blur",function run(event){
    console.log(event.type);
});

// copy -> input alanına birşey kopyaladığımızda çıkacak
inputField.addEventListener("copy",function run(event){
    console.log(event.type);
});


// paste -> input alanına birşey yapıştırdığımızda çıkacak
inputField.addEventListener("paste",function run(event){
    console.log(event.type);
});

// cut -> input alanına birşey kestiğimizde
inputField.addEventListener("cut",function run(event){
    console.log(event.type);
});

// select -> input alanına birşey seçtiğimizde
inputField.addEventListener("select",function run(event){
    console.log(event.type);
});