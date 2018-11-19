let value;

const firstName = "Sercan Noyan";
const lastName = "Germiyanoğlu";

const langs = "Java,Python,C++";

value = firstName + " " + lastName;

value = "Sercan Noyan ";
value += "Germiyanoğlu";

value = firstName.length; // Karakter uzunluğunu verme

value = firstName.concat(" " + lastName);  // String birleştirme

value = firstName.concat(" ",lastName," ","Jazz"); // String birleştirme

value = firstName.toLowerCase(); // Tüm harfleri küçük yapar.

value = firstName.toUpperCase(); // Tüm harfleri büyük yapar.


value = firstName[0]; // 0'in karakteri gösterir.
value = firstName[3]; // 3'uncu karakteri gösterir.
value = firstName[10]; // 10'uncu karakteri gösterir.
value = firstName[firstName.length-1]; // Son karakteri gösterir.

// indexOf

value = firstName.indexOf("a"); // ilk "a" harfi nerede
value = firstName.indexOf("S"); // ilk "S" harfi nerede


// charAt

value = firstName.charAt(0); // 0'inci indexteki karakteri verir.
value = firstName.charAt(firstName.length-1); // Son karakteri gösterir.


// Split

value = langs.split(","), // "," ile ayırma

// Replace

value = langs.replace("Java","PHP"); // Yer Değiştirme

// Includes

value = langs.includes("Java"); // "Java" içeriyormu doğru ise "true" değilse "false"
value = langs.includes("asdadsadsa");

console.log(value);