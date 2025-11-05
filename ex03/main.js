const pares = (n) => n === 51 ? null : [n, n + 1];

const unfold = (f, seed) => (r => r ? [r[0], ...unfold(f, r[1])] : [])(f(seed));

const criarUl = () => {
    let nums = unfold(pares, 1);
 
    const ul = document.createElement('ul');

    nums.filter(x => x % 2 === 0).forEach(n => {
        const li = document.createElement('li');
        li.innerText = n;

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};


window.onload = () => {
    const button  = document.querySelector('button');
    if (button) button.addEventListener('click', () => criarUl());
};