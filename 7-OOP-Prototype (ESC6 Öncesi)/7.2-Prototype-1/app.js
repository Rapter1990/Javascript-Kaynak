// Prototype 1 -> Object'in constructora yeni özellik eklemek ve Object deki özellikleri kullanma

const object = new Object();
const object2 = new Object();
object.name = "Sercan Noyan Germiyanoğlu";
console.log(object);

// Employee Objesi oluşturma
function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...")
    }

    this.toString = function(){
        console.log("Bu bir Employee Objesidir.");
    }
}

const emp1 = new Employee("Sercan Noyan Germiyanoğlu",28);
emp1.showInfos();

// Employee objesinin içine toString methodunu yazmadğımız için [object Object] olarak çıkar.Çünkü Object'inki çağırdık miras alarak.
// toString tanımladıktan sonra
console.log(emp1.toString()); 
