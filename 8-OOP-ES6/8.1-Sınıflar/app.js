// Syntactic Sugar (ECMAScript 6 (ES6))

// ES6 ÖNCESİ
function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
}

const emp = new Employee("Sercan Noyan Germiyanoğlu",28,5000);

console.log(emp);
emp.showInfos();

// ES6
class EmployeeES6 {

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
    }
}

const empES6 = new EmployeeES6("Sercan Noyan Germiyanoğlu",28,5000);

console.log(empES6);
empES6.showInfos();