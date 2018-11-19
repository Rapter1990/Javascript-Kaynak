// Object.create -> bir objeyi prototype'ni oluşturuken var olan objeden oluşturmak
const obj = {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}

console.log(obj);

// Object.create

const emp = Object.create(obj);
emp.name = "Sercan Noyan Germiyanoğlu";
emp.age = 28; 
console.log(emp);


function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

Person.prototype.test2 = function(){
    console.log("Test 2");
}

// const person = new Person();
// console.log(person);

function Employee(name,age){
    this.name = name;
    this.age = age;
}

// Employee Persondan oluşturmak için Person prototype'den Employee Prototype oluşturmak gerekir.
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.mytest = function(){
    console.log("myTest");
}

const empPrototypeFromPersonPrototype = new Employee("Sercan Noyan Germiyanoğlu",28);
console.log(empPrototypeFromPersonPrototype);
empPrototypeFromPersonPrototype.test1();