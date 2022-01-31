const produtos = [
    { produto: 'café', preco: 7 },
    { produto: 'açucar', preco: 23 },
    { produto: 'feijão', preco: 9},
    { produto: 'feijão', preco: 9}

]
const infoArray = (index, produto, array) => {
    console.log(index, produto, array);
};
produtos.forEach(infoArray);



const n = 8;
for(let i = 1; i <= 10; i ++) {
    console.log (`${i} x ${n} = ${i*n}`);
}


