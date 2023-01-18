resolverBhaskara = (ax2, bx, c) =>{
    vetorRes = []
    delta = Math.pow(bx,2) - (4*ax2*c)
    if(delta<0){ return 'Delta é negativo.' }
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    vetorRes.push(x1)
    vetorRes.push(x2)
    return vetorRes
}