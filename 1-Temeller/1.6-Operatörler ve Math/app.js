let value;

const value1 = 10;
const value2 = 20;

// Aritmatik Operatörler

value = value1 + value2;
value = value1 - value2;
value = value1 * value2;
value = value1 / value2;
value = value1 % value2;

// Math

value = Math.PI;
value = Math.E;
value = Math.round(3.8);
value = Math.round(3.4);

value = Math.ceil(3.4); // -> bir üste yuvarlama
value = Math.ceil(3.8); // -> bir üste yuvarlama

value = Math.floor(3.4); // -> bir aşağıya yuvarlama
value = Math.floor(3.8); // -> bir aşağıya yuvarlama

value = Math.sqrt(16); // -> karekökü
value = Math.sqrt(31); // -> karekökü

value = Math.abs(-31); // -> mutlak

value = Math.pow(-3,5); // -> üst alma
value = Math.pow(2,3); // -> üst alma
value = Math.pow(7,-2); // -> üst alma

value = Math.max(7,-2,100,1000,2); // -> max
value = Math.min(7,-2,100,1000,2); // -> min

value = Math.random(); // -> 0-1 arasında rastgele sayı üretir.

value = Math.random()*20; // -> 0-20 arasında rastgele sayı üretir.

value = Math.random()*20+1; // -> 1-21 arasında rastgele sayı üretir.

value = Math.floor(Math.random()*20+1); // -> 1-20 kadar sayıyı tam sayıya çevirir.

console.log(value);