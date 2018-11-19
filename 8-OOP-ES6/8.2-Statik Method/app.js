// Statik Methodlar

class Matemeatik{

    cube(x){
        console.log(x * x * x);
    }

    static cubeStatic(x){  // static methodlar objenin prototype'ne yazılmaz
        console.log(x * x * x);
    }

}

// Matematik objesinin oluşturma
const math = new Matemeatik();

console.log(math);

// Statik olmayan
math.cube(3);

// Statik
Matemeatik.cubeStatic(3);

