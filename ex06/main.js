const valorTotalEstoque = (produtos) => {
    const total = produtos.filter(x => x.quantidade > 5).reduce((acc, x) => acc + x.preco, 0);
    
    const p = document.createElement('p');
    p.innerText = total;

    document.body.appendChild(p);
};