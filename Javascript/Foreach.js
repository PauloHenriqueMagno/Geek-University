// Foreach

var cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógicas de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação Web com Django Framwork',
    'Programação em Javascript'
];

//console.log(cursos);
//console.log(cursos.length);

// definir uma função
function imprimir(curso, indice){
    //console.log(indice + ' - ' + curso);
}

// para cada = forEach
//cursos.forEach(imprimir);

// utilização de uma função anônoma (lambda/callback) e template string
cursos.forEach(function(curso, indice){
    //console.log(`${indice} - ${curso}`);
});

for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}