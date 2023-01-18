const notas = {
    rodolfo: [6, 6, 0],
    joao: [3, 4.5, 10],
    maria: [5, 5, 9]
}

const soma = array => array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
const media = array => soma(array) / array.length

function objetoMediaAlunos(notas){
    arrayNotas = Object.entries(notas)
    return Object.fromEntries(arrayNotas.map(nota => [nota[0], media(nota[1])]))
}