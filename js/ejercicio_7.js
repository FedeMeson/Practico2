function mayor(lista){
    var mayor = lista[0];
  for(i=1;i<lista.length;i++){
      if(lista[i] > mayor)
          mayor=lista[i];
  }
return mayor;
}

var numero_1 = prompt("Coloque un numero", "Escribe Aqui");
var numero_2 = prompt("Coloque un segundo numero", "Escribe Aqui");
var numero_3 = prompt("Coloque un tercer numero", "Escribe Aqui");
var numero_1parse = parseInt(numero_1);
var numero_2parse = parseInt(numero_2);
var numero_3parse = parseInt(numero_3);
var miLista = [numero_1parse,numero_2parse,numero_3parse];
alert("El numero mayor es:" + " " + mayor(miLista));