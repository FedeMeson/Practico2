var palabra = prompt("Escribe una frase");
var parsePalabra = text.length;
var i;
for (i = 0; i < parsePalabra; i++) {
if (palabra.substr(i,1) === "a" || palabra.substr(i,1) === "e" || palabra.substr(i,1) === "i" || palabra.substr(i,1) === "o" || palabra.substr(i,1) === "u") {
alert(palabra.substr(i,1));
}
}