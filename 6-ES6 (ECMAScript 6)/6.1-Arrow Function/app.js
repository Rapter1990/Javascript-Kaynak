// Arrow Function

const merhaba = function(){
    console.log("Merhaba");
}

merhaba();


const merhabaArrowFunction = () => {
    console.log("Merhaba Arrow Function");
}

merhabaArrowFunction();

const merhabaArrowFunctionwithParameter = (firstname) =>{
    console.log("Merhaba",firstname);
}

merhabaArrowFunctionwithParameter("Noyan");

const merhabaArrowFunctionwithOneParameter = firstname =>{
    console.log("Merhaba",firstname);
}

merhabaArrowFunctionwithOneParameter("Noyan");

const merhabaArrowFunctionwithTwoParameter = (firstname,lastname) =>{
    console.log("Merhaba",firstname,lastname);
}

merhabaArrowFunctionwithTwoParameter("Sercan Noyan","Germiyanoğlu");

const merhabaArrowFunctionwithOneParameterSingleLine = firstname => console.log("Merhaba",firstname);

merhabaArrowFunctionwithOneParameterSingleLine("Noyan");

merhabaArrowFunctionwithTwoParameterSingleLine = (firstname,lastname) => console.log("Merhaba",firstname,lastname);

merhabaArrowFunctionwithTwoParameterSingleLine("Sercan Noyan","Germiyanoğlu");


// 

const cube = function(x){
    return Math.pow(x,3);
}

console.log(cube(4));

const cubeArrowFunction = x => {
    return Math.pow(x,3);
}

console.log(cubeArrowFunction(4));

const cubecubeArrowFunctionSingleLine = x => Math.pow(x,3);  // bu kısmı return olarak görüyor.

console.log(cubecubeArrowFunctionSingleLine(4));


