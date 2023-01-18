let stringPontuacoes = "30, 25, 40, 20, 30, 51, 2, 42, 38, 56, 4";

const pontuacao = (string) => {
    vetorPontuacao = string.split(', ');
    maiorPontuacao = vetorPontuacao[0];
    menorPontuacao = vetorPontuacao[0];
    recordeQuebrado = 0;
    numPiorJogo = 0;
    pos = 0;
    vetorPontuacao.forEach(item => {
        if(item>maiorPontuacao){
            maiorPontuacao = item;
            recordeQuebrado++;
        }else if(item<menorPontuacao){
            menorPontuacao = item;
            diaPiorJogo = pos+1;
        }
        pos++;
    });
    return [recordeQuebrado, diaPiorJogo]
}

