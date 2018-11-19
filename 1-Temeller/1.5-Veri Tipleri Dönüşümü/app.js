let value;

// Veritiplerini  String Çevirme
value = String(123);
value = String(1.23);
value = String(true);
value = String(false);
value = String(function(){console.log()});
value = String([1,2,3]);

value = (10).toString();

// Veritiplerini  Sayı'ya Çevirme
value = Number("123");
value = Number(null); // -> 0
value = Number(undefined); // -> NaN : not a number
value = Number("Hello World");
value = Number(function(){console.log()});
value = Number([1,2,3]);

value = Number("3.14");
value = parseFloat("3.14");
value = parseInt("3");

const a = "Hello" + 34;
console.log(a);
console.log(typeof a);

const b = "11" + 34;
console.log(b);
console.log(typeof b);

const c = Number("35") + 34;
console.log(c);
console.log(typeof c);


console.log(value);
console.log(typeof value);