obj = {a: 1, b: 2, c: 3}

function inverter(objeto){
    entries = Object.entries(objeto).map(item => item.reverse())
    return Object.fromEntries(entries)
}

console.log(inverter(obj))