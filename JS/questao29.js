const qtdRepeticoes = (caractere, frase) => [...frase].filter(item => item === caractere).length

console.log(qtdRepeticoes('c','caracas'))