function filtrar(arrayNumeros, qtdNumeros){
    return arrayNumeros.filter(numero => {
        qtdDigitos = String(numero).length
        return qtdDigitos === qtdNumeros
    })
}

console.log(filtrar([1,22,3333,4,54,633,72], 2))