function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    
    if (de >= ate) {
        alert ('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    } else if (quantidade > (ate - de + 1)) {
        alert ('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(", ")}.</label>`;
    alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

function alterarStatusBotao(habilitar) {
    let botao = document.getElementById('btn-reiniciar');
    if (habilitar) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.disabled = true;
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao(false);
}