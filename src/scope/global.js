// variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb";   // re-asignación
var a = "aa"; // re-declaración

//global Scope
var fruit = "Apple"; //global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();


// Variable globar creada por accidente
function countries() {
    country = "Colombia";
    console.log(country);
}
countries();
console.log(countries); // Aqui se ve que la variable se salio de la funcion