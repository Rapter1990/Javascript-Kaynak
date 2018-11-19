// Kalıtım -> Inheritance
function Person(name,age){
    this.name = name;
    this.age = age;
}

// Person'a prototype oluşturup bir fonskiyon tanımladık.
Person.prototype.showInfos = function(){
    console.log("İsim :" + this.name + " Yaş : " + this.age);
} 

const person = new Person("Sercan Noyan Germiyanoğlu",28);
console.log(person);

// Employee oluşturma
function Employee(name,age,salary){
    // Bu kısım Personda oluğundan boş yere yazmaya gerek yok onun için (call) kullan
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

// Employee'nin prototype Person'ın prototypedan oluşturma (prototype'la oluşacak methodlar bunun altında olması gerekir.)
Employee.prototype = Object.create(Person.prototype);

// Employee'nin prototype'na toString
Employee.prototype.toString = function(){
    console.log("Employee");
}

// Employee showInfo methodu prototype'na ekleme (showInfos onun miras aldığı yeri (overriding) iptal etti.)
Employee.prototype.showInfos = function(){
    console.log("İsim :" + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
}

const emp = new Employee("Sercan Noyan Germiyanoğlu",28,5000);

console.log(emp);

emp.showInfos();
emp.toString();

