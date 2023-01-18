const filtrar = (array, type) => {
    return array.filter(item => typeof item === type)
}

console.log(filtrar(va1,'object'))