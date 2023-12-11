/* //this is a js file

let condicao1 = true;
let condicao2 = false;

if(condicao1){
    //como o valor da condição é TRUE,
    //o código desse bloco é executado.
    console.log('entrei no if 1!');
}
    //como o valor da condição é false,
    //o código desse bloco NÃO é executado.
if(condicao2){
    console.log('entrei no if 2!');
}

var num1 = 5;
var num2 = 4;

if(num1 === num2){
    console.log('São iguais!')
} else{
    if(num1 > num2){
        console.log('são diferentes e num1 é maior.')
    }else{
        console.log('são diferentes e num2 é maior.')  
    }  
}

var paisDeOrigem = "Brasil";

switch (paisDeOrigem) {
    case "Brasil":
        console.log('brasileiro')
        break;
    case "EUA":
    console.log('americano');
    break;
 default:
    console.log('desconhecido');
        break;
}


var pokemon = "charmander";

if(pokemon === "bulbasauro"){
    console.log("Planta e veneno.")
}else{
    if(pokemon === "charmander"){
        console.log("Fogo.")
    }else{
        if(pokemon === "squirtle")
        console.log("água")
    }
}

switch (pokemon) {
    case "bulbasauro":
        console.log("planta e veneno")
        break;
    case "charmander":
        console.log("fogo")
        break;
    case "squirtle":
        console.log("água")
    default:
        console.log("desconhecido")
        break;
}
*/

/* var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

lista.forEach(element => {
    console.log(element)
});

for (const element of lista) {
    console.log(element)
}

for (let index = 0; index < array.length; index++) {
    const element = lista[index];
    console.log(element);
    
} */
/* 
var i = 0;
while(1 < 10){
    console.log(i);
    i = i +1;
} */

/* var numero = Number(prompt("digite um número."));
console.log(numero); */



/* function calcularArea(altura = 10, largura = 20) {
    var area = altura * largura;
    return (area);
}

function somaArea(largura1, largura2, altura1, altura2) {
    var area1 = calcularArea(largura1, altura1);
    var area2 = calcularArea(largura2, altura2);
    return (area1 + area2);
} 

console.log(somaArea(10,20,30,40));*/


function imprimeNomes(nome){
    console.log(nome);
}
imprimeNomes("nome1");
imprimeNomes("nome2");
imprimeNomes("nome3");


function imprimeNomesComReturn(nome) {
    return nome
}

console.log(imprimeNomesComReturn("nome1"));
console.log(imprimeNomesComReturn("nome2"));
console.log(imprimeNomesComReturn("nome3"));



var lista = [1,2,3,4,5];

function recebeArray(lista = []){
    var arrayFinal = [];
    arrayFinal[0] = lista[lista.lenght];
    arrayFinal[1] = lista[0];
    console.log(arrayFinal);
}

var lista = [1,2,3,4,5,6,7,8,9];
recebeArray(lista);




