const concatDivs = () => Array.from(document.querySelectorAll('div')).map((x) => x.innerText).reduce((x, y) => x + y);


window.onload = () => {
    const button = document.querySelector('button');
    if (button) button.addEventListener('click', () => {
        const conteudo = concatDivs();
        document.querySelector('span').innerText = conteudo;
    });
}