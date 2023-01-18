const arredondamento = nota => {
    notaInicial = nota;
    do{
        nota++;
        if(nota % 5 == 0){
            if(nota - notaInicial < 3){
                return nota;
            }else{
                return notaInicial;
            }
        }
    }while(true);
}

const classificacaoAluno = nota => {
    if(nota < 38){
        console.log('Aluno reprovado!');
    }else{
        console.log(`Aluno aprovado com nota ${arredondamento(nota)}.`)
    }
}

classificacaoAluno(13);