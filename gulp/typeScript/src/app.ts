//Padrão de import do ES, node não suporta.
import { Carro, Vendavel } from './produto'

//Objeto v do tipo Vendavel.
function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)