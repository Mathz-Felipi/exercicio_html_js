const form = document.getElementById('formulario');
let formEValido = false;

const botaoReset = document.getElementById('reset');
botaoReset.addEventListener('click', function() {
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
    document.querySelector('.resultadoCerto').classList.remove('show');
    document.querySelector('.resultadoErro').classList.remove('show');
});

    const numA = document.getElementById('campoA');
    const numB = document.getElementById('campoB');

    function comparacao(numA, numB) {
        return numA < numB
    }

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const sucesso = `Muito bem, o valor do campo B: <b>${campoB.value}</b> é maior que o valor do campo A: <b>${campoA.value}</b>.`
    const erro = `Refaçao processo, o valor do campo B: <b>${campoB.value}</b> não é maior que o valor do campo A: <b>${campoA.value}</b>.`

    formEValido = comparacao(numA.value,numB.value)

    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.resultadoCerto');
        containerMensagemSucesso.innerHTML = sucesso;
        containerMensagemSucesso.classList.add('show');

        numA.value = ''
        numB.value = ''
    }

    else {
        const containerMensagemErro = document.querySelector('.resultadoErro');
    containerMensagemErro.innerHTML = erro;
    containerMensagemErro.classList.add('show');
        
    }
})
console.log(form)

