// paket1 

// node index.js

console.log("paket1");

// simple-is dahil ettik = > npm install simple-is

const is = require("simple-is");

console.log(is);

console.log(is.number);

console.log(is.number(28));

// Paket 2 de yerel olarak bulunmadığın ve global olarak tanımladığımız için paket1 o paketi görecek