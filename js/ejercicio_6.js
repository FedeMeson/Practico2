'use strict'
var numero_1 = prompt("Coloque un numero", "Escribe Aqui");
var numero_2 = prompt("Coloque otro numero", "Escribe Aqui");
var numero_1parse = parseInt(numero_1);
var numero_2parse = parseInt(numero_2);
if (numero_1parse > numero_2parse ) {
    alert("El numero mayor es:" + " " + numero_1parse);
} else {
    alert("El numero mayor es:" + " " + numero_2parse);
}
