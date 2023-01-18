array = [1,2,3,4,5,6,7,8,9,10]

const somaArray = array => array.reduce((prev, item) => prev + item, 0);

console.log(somaArray(array))