// Destructing

let number1,number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2);

// Desctructing Yapısı
[number1,number2] = arr; // [number1,number2] = [100,200,300,400] yapısında number1 0'ıncı indexe number2 1'inci indexe eşleniyor.
console.log(number1,number2);

// Tek satır ile işlemleri halletme
const [number1withDesctructingSingleLine,number2withDesctructingSingleLine] = arr;
console.log(number1withDesctructingSingleLine,number2withDesctructingSingleLine);


const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
}

const {a:number1InObject,b:number2InObject,c:number3InObject} = numbers;
console.log(number1InObject,number2InObject,number3InObject);

const {a,b,c} = numbers;
console.log(a,b,c);


// Function Destructing
const getLangs = () => ["Python","Java","C++"];
const [program1,program2,program3] = getLangs();
console.log(program1,program2,program3);


const person = {
    firstname: "Sercan Noyan",
    lastname: "Germiyanoğlu",
    birthyear: 1990,
    salary: 5000,
    showInfos: () => console.log("Bilgiler Gösteriliyor...")
}

// const {firstname:firstnameValue,lastname:lastnameValue,birthyear:birthyearValue,salary:salaryValue,showInfos:showInfosFunction} = person;
// console.log(firstnameValue,lastnameValue,birthyearValue,salaryValue,showInfosFunction);

const {firstname:firstnameValue,lastname:lastnameValue,birthyear:birthyearValue,salary:salaryValue,showInfos:showInfosFunction} = person;
console.log(firstnameValue,lastnameValue,birthyearValue,salaryValue);
showInfosFunction();


