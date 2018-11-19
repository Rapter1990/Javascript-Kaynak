// window objesi
//console.log(window);


// document ulaşma
//console.log(this.document);  // window.document  , document

let value;

value = document; // document gösterme
value = document.all; // documentte tanımlı olan tüm tagları gösterir. (html collection)
value = document.all.length; // index. html de kaç tane element olduğunu gösterir.

value = document.all[0]; // html
value = document.all[1]; // head
value = document.all[2]; // <meta charset="UTF-8">
value = document.all[3]; // <meta name="viewport" content="width=device-width, initial-scale=1.0">
value = document.all[4]; // <meta http-equiv="X-UA-Compatible" content="ie=edge">
value = document.all[5]; // <link rel="shortcut icon" href="">
value = document.all[6]; // <title>Document</title>
value = document.all[7]; // <body>
value = document.all[8]; // <script src="app.js"></script>
value = document.all[document.all.length-1]; // son tag gösterme

// const elements = document.all; // html collection 

// for 
// for(let i=0;i<elements.length;i++){
//     console.log(elements[i]);
// }

// For Each -> bu şekilde for each kullanılmaz
// elements.forEach(function(element){
//     console.log(element);
// });

// For Each
// const collections = Array.from(elements);
// console.log(typeof collections);
// collections.forEach(function(element){
//     console.log(element);
// });

value = document.all;
value = document.body; // body
value = document.head; // head
value = document.URL; // url adresini gösterir.
value = document.characterSet; // UTF-8


console.log(value);
