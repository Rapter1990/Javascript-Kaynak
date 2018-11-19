// Kalıtım Inheritance ES6

class Person { // SuperClass, BaseClass

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age);
    }

}

class Employee extends Person{  // SubClass, DerivedClass , ChildClass

    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;

        super(name,age);
        this.salary = salary;
    }

    showInfos(){ // Overrriding 
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
    }


    toString(){ // Overrriding 
        console.log("Employee");
    }

    raiseAmountOfSalary(amount){
        this.salary += amount;
    }
}

const emp = new Employee("Sercan Noyan Germiyanoğlu",28,5000);
emp.raiseAmountOfSalary(1000);
console.log(emp);

emp.showInfos();
emp.toString();