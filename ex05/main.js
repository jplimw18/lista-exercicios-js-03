const gerarLista = (alunos) => {
    const aprovados = alunos.filter(x => x.nota >= 7);
    
    const ul = document.createElement('ul');

    aprovados.map(x => {
        const li = document.createElement('li');
        li.innerText = x.nome;

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};