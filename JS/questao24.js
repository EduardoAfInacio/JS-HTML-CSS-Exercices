vetor = [10, 70, 22, 43];


const pares = vetorEindicePares => vetor.filter(item => item % 2 === 0 && vetor.indexOf(item) % 2 === 0)

console.log(pares(vetor));