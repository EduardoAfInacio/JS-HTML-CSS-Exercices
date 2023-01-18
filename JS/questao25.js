const ehAnoBissexto = ano => {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(ehAnoBissexto(2100))
console.log(ehAnoBissexto(2020))