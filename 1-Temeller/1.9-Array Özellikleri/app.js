let value;

const numbers1 = [1,2,3,4,5,67,8,9,10];

const numbers2 = new Array(1,2,3,4,5,6,7,8,9,10);

const langs = ["Java","Hibernate","Spring","RESTful API","CSS","JQUERY"];

const a = ["Merhaba",22,null,undefined,3.14];

// Uzunluk
value = numbers1.length;

// Indexleme
value = numbers1[0];
value = numbers1[3];
value = numbers1[numbers1.length-1];

// Herhangi bir indexdeki değeri değiştirme
numbers1[7] = 1000;

value = numbers1.indexOf(1000);

// Arrayin Sonuna Değer Ekleme - Push
numbers1.push(78);
value = numbers1;

// Arrayin başına ekleme
numbers1.unshift(11);
value = numbers1;

// Sondan değer çıkarma
numbers1.pop();
value = numbers1;

// Sondan baştan değer atma çıkarma
numbers1.shift();
value = numbers1;

// Belirli aralıklarda değer alma atma
numbers1.splice(0,5);
value = numbers1;


// ters çevirme
numbers1.reverse();
value = numbers1;

// sıralama
numbers1.sort(); // rakamların ilk sayısına göre sıralama yapar
value = numbers1;

// Küçükten büyüğe sıralama
numbers1.sort(function(x,y){
    return x-y;
});

// Büyüken küçüğe sıralama
numbers1.sort(function(x,y){
    return y-x;
});

console.log(value);