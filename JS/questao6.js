const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial * Math.pow((1+taxaJuros), tempoAplicacao)



