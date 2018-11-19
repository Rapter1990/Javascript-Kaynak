// Spread Operator

const langs = ["Python","Java","Hibernate","Javascript"];
console.log(langs);
console.log(langs[0],langs[1],langs[2],langs[3]);

// Spread Operator kullanımı (... işareti)
console.log(...langs); // = console.log(langs[0],langs[1],langs[2],langs[3]);

//const langs2 = ["Spring","Css",langs[0],langs[1],langs[2],langs[3]];
const langs2 = ["Spring","Css",...langs];
console.log(langs2);
console.log(...langs2);


const numbers = [1,2,3,4,5,6,7,8,9];
const [a,b,...numbers2] = numbers;
console.log(a,b);
console.log(numbers2);

const addNumbers = (a,b,c) => console.log(a+b+c);
const numbersSpeadOperator = [100,200,300];

addNumbers(numbersSpeadOperator[0],numbersSpeadOperator[1],numbersSpeadOperator[2]);
addNumbers(...numbersSpeadOperator);