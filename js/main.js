var lista = ["maça", "pera", "laranja"];
console.log(lista);

lista.push("banana");
console.log(lista);

lista.pop();
console.log(lista);

console.log(lista.length);

console.log(lista.reverse());

var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);

var frutas = [{nome:"banana", cor:"amarela"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);

console.log("bruno" + "costa" + 142+"-"+123);

function agradecer(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado</b>";
}

