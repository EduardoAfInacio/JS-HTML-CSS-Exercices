obj = [{despesa: 90}, {despesa: 30}, {despesa: 40}]
const despesasTotal = objeto => objeto.reduce((acumulador, valorAtual) => acumulador + valorAtual.despesa,0);

console.log(despesasTotal(obj))