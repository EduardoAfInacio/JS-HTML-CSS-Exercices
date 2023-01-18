const diaUtil = dia => {
    switch(dia){
        case 1: console.log('Domingo. Hoje não é dia útil!');
        break
        case 2: console.log('Segunda. Hoje é dia útil!');
        break
        case 3: console.log('Terça. Hoje é dia útil!');
        break
        case 4: console.log('Quarta. Hoje é dia útil!');
        break
        case 5: console.log('Quinta. Hoje é dia útil!');
        break
        case 6: console.log('Sexta. Hoje é dia útil!');
        break
        case 7: console.log('Sábado. Hoje não é dia útil!');
        break
        default: console.log('Dia inválido!');
        break
    }
}

diaUtil(7)