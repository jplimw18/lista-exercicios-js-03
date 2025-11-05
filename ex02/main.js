const gerador = (n) => n > 1024 ? null : [n, n * 2]; 

const unfold = (f, seed) => (r => r ? [r[0], ...unfold(f, r[1])] : [])(f(seed)); 

const criarUl = (n) => {
    const nums = unfold(gerador, n);

    const ul = document.createElement('ul');

    nums.map((num) => {
        const li = document.createElement('li');
        li.textContent = num;

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};

window.onload = () => {
    const btnGerar = document.querySelector('button');
    const iptNum = document.querySelector('input[type="number"]')
    if (btnGerar) btnGerar.addEventListener('click', () => {
            iptNum 
                ? criarUl(iptNum.value)
                : console.error('semente não encontrada.');
    });
};