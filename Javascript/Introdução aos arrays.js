/*
array contendo 5 elementos -> n = 5

// indices -> posição do elemento no array
[0][1][2][3][4]

//valores em um array
[12]['Geek'][true][48][52]

// Detalhes sobre arrays
-Possuem tamanho infinito*
-Podemos colocar qualquer tipo de dado
*/

// Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
//console.log(alunos);

var salas = new Array('Sala 1', 'Sala 2', 'Sala 3');
//console.log(salas);

// Forma 2 (recomendada)
var notas  = [1, 3 , 5 , 7, 9];
//console.log(notas);

// Criando um array vazio
var nada = [];
//console.log(nada);

// Fazendo acesso ao valor de um indice
//console.log(notas[4]);

// Alterando o array a partir do indice
notas[2] = 12;
//console.log(notas);

// Atenção ao acessar o valor com um indice que não existe
notas[9] = 10;
//console.log(notas);

// Inserindo elementos no final do array
var nomes = ['Paula', 'Bruna', 'Vanessa'];
//console.log(nomes);

nomes.push('Péricles');
//console.log(nomes);

// Tamanho do array
//console.log(alunos.length);

// Ordenas os dados de um array
nomes.sort();
//console.log(nomes);

var num = [9, 3, 7, 1, 22, 0];
//console.log(num);

//num.sort(); //ATENÇÂO
//console.log(num);

num.sort(function( a, b){ return a - b;}); //The correct to numbers!!!
//console.log(num);

// Deletando dados de um array
//delete num[2];
//console.log(num);

//num[2] = 3;
//console.log(num);

//num.splice(3, 1); //A partir do indice 3, delete 1 elemento
//console.log(num);

//num.splice(3, 0, 56, 89); // A partir do indice 3, não delete nada, mas adicione 56, 89
//console.log(num);

//num.splice(3, 1, 23);
//console.log(num);
//num[3] = 23;

// Iterar em um array
for(var i = 0; i < num.length; i++){
    //console.log(num[i]);
}

// Removendo elementos da última posição do array
//num.pop(); //remove e retorna o último elemento de um array
//console.log(num);

//var ret = num.pop();
//console.log(ret);
//console.log(num);

// Removendo o primeiro elemento de um array
//num.shift(); //remove e retorna o primeiro elemento de um array
//console.log(num);

// Inserindo elemetos no inicion de um array
//num.unshift(99);
//console.log(num);

// Retorna um novo array a partir do indice informado
//var novo = num.slice(3);
//console.log(novo);

//var novo = num.slice(1, 2); // a partir do indice 1, pegue até o indice 2 sem incluí-lo
//console.log(novo);

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest);

//rest.sort(function(a, b){return a - b;});
//console.log(rest);


// 4 x 4
var tabuleiro = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(tabuleiro);