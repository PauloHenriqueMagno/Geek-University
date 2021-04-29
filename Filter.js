var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n % 2 === 0;
}

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtrar_pares);
console.log(ret)

ret = numeros.filter(filtrar_impares);
console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
console.log(ret);

var alunos = [
    {nomes: 'Pedro', nota: 8.5},
    {nomes: 'Maria', nota: 10},
    {nomes: 'Fernanda', nota: 9.2},
    {nomes: 'Ricardo', nota: 7.3}
]
console.log(alunos);

function filtrar_notas_maiores_que_8(aluno){
    return aluno.nota > 8;
}

function filtrar_notas_maiores_que_7(aluno){
    return aluno.nota > 7;
}

var filtrados = alunos.filter(filtrar_notas_maiores_que_8);
//console.log(filtrados);
console.log(filtrados.length);

filtrados = alunos.filter(filtrar_notas_maiores_que_7);
console.log(alunos.length);
console.log(filtrados.length);