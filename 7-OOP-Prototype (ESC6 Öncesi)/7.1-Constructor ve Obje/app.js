// Constructor ve Obje

// window objesini getirme (Global Scope)
console.log(window); // console.log(this);

// Object Literal
const emp1 = { 
    name: "Sercan Noyan Germiyanoğlu",
    age: 28,
    showInfos: function(){console.log("Bilgileri Göster");}
}

const emp2 = {
    name: "Gizem Ak",
    age: 28
}

emp1.salary = 5000;
console.log(emp1);


// Bir sürü employee(çalışan) olacağından Employee fonksiyonu oluşturmak 
function EmployeeObject(){  // Yapıcı Fonksiyon (Constructor)
    this.name = "Sercan Noyan Germiyanoğlu";
}

const employeeObject = new EmployeeObject();
console.log(employeeObject);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;

    console.log(this);

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const employeeObject1withParameter = new Employee("Sercan Noyan Germiyanoğlu",28,5000);
const employeeObject2withParameter = new Employee("Gizem Ak",28,5000);

// Bunlar yerine function'a console.log(this) yazmak daha mantıklı
// console.log(employeeObject1withParameter);
// console.log(employeeObject2withParameter);

employeeObject1withParameter.showInfos();
employeeObject2withParameter.showInfos();