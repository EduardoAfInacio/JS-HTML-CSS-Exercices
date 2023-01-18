const parOuImpar = (vetor) => {
    qtdPares = 0;
    qtdImpares = 0;
    vetor.forEach(item => {
        item % 2 == 0 ? qtdPares++ : qtdImpares++;
    });
    console.log(`Pares:${qtdPares}, Impares:${qtdImpares}`)
}

parOuImpar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])