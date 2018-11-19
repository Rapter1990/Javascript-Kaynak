// Prototype 2

// Employee Objesi oluşturma
function Employee(name,age){
    this.name = name;
    this.age = age;
    // this.showInfos = function(){
    //     console.log("İsim : " + this.name + "Yaş : " + this.age);
    // }
}


// Methodlarımızı prototypelara yazarken object prototype'lara bağlı onlarda bizim oluşturduğumuz objelere bağlı
// Prototype'lara yazma nedenimiz obje oluşurken iki tane aynı methodu oluşturdu bellek açısından sorun.
// Prototype lara eklemek daha avantajlı
// Bellekte sadece 1 tane olup ona bağlı objeler kullanacak
Employee.prototype.showInfos = function(){
         console.log("İsim : " + this.name + "Yaş : " + this.age);
}

const emp1 = new Employee("Sercan Noyan Germiyanoğlu",28);
const emp2 = new Employee("Oğuz Yılmaz",28);

console.log(emp1);
console.log(emp2);

emp1.showInfos();
emp2.showInfos();



