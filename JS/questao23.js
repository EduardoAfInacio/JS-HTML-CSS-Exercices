const obj = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}

const objParaArray = obj => Object.keys(obj).map(key => [key, obj[key]]);

console.log(objParaArray(obj))