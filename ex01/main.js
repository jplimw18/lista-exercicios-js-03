const hexNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


/**
 * 
 * @param {[]} cores 
 */
const colorirLis = (cores) => cores.map((cor, idx) => document.querySelectorAll('li')[idx].style.background = cor);


const gerarCores = (n) => {
    const cores = [];

    for (let i = 0; i < n; ++i) {
        let corArr = '#';

        for (let j = 0; j < 8; ++j) {
            corArr += hexNums[Math.floor(Math.random() * (16 + 1))];
        }

        cores.push(corArr);
    }

    return cores;
};

window.onload = () => {
    let btnColorir = document.querySelector('button');
    let nLi = document.querySelectorAll('li').length;

    if (btnColorir) btnColorir.addEventListener('click', () => colorirLis(gerarCores(nLi))); 
};

