// while dongusu

let i = 0;

while(i<10){
    console.log(i);
    i++; // i+=1; i = i+1;
}


let j = 10;

while(j>0){
    console.log(j);
    j--;
}

// Break ve Continue;
let z = 0;

while(z<10){
    console.log(z);
    if(z==5){
        break;
    }
    z++;
}

let k = 0;

while(k<10){
    
    if(k == 3 || k == 5){
        k++; // 3 te takılacağı için k++ yaptık
        continue;
    }
    console.log(k);
    k++;
}


// Do while
let y = 0;

do{
    console.log(y);
    y++;
}while(y<10);


const langs = ["Javascript","Python","CSS","Java"];

let index = 0;

while(index < langs.length){
    console.log(langs[index]);
    index++;
}

for(let index = 0;index<langs.length;index++){
    console.log(langs[index]);
}

// For each

langs.forEach(function(lang,index){
    console.log(lang,index);
});

// Map

const users = [
    {name:"Sercan Noyan",age:28},
    {name:"Tuğba",age:28},
    {name:"Melis",age:28}
];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){
    return user.age;
});

console.log(names);
console.log(ages);

const user = {
    name : "Sercan Noyan",
    age : 28
};

for(let key in user){
    console.log(key,user[key]);
}
