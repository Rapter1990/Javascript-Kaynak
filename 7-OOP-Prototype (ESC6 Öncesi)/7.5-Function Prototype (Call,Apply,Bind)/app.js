// Call, Apply, Bind

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:10,
    number2:20
};

function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}

//addNumbers(100,200);

// Call -> obj ve argumanları yollamak için kullanılır. this anahtar değeri ile objedeki argumanlar eşlenir. 

addNumbers.call(obj1,100,200);  // obj1 fonksiyona yolladık 100(Number3),200(Number4)
addNumbers.call(obj1,100,200);  // obj1 fonksiyona yolladık 100(Number3),200(Number4)

// Apply -> call ile aynı işlemi yapıyor fakay argumanları liste halinde vermemiz gerekiyor.

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);

// Bind -> verilen obj göre bir fonksiyon kopyasıdır.

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunction1 = getNumbersTotal.bind(obj1);
const copyFunction2 = getNumbersTotal.bind(obj2);
console.log(copyFunction1);
console.log(copyFunction2);

console.log(copyFunction1(100,200));
console.log(copyFunction2(100,200));