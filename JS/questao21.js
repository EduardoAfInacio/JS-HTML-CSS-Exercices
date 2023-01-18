const obj = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

const objAlterado1 = (objeto, atributo) => {
    const copia = Object.assign({}, objeto);
    delete copia[atributo];
    return copia;
}

const objAlterado2 = (objeto, atributo) => {
    const copia = {...objeto}
    delete copia[atributo];
    return copia;
}

console.log(Object.is(objAlterado1(obj,'descricao'), objAlterado2(obj,'descricao')))