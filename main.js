const form = document.getElementById('formulario');
let formEValido = false;

const botaoReset = document.getElementById('reset');
botaoReset.addEventListener('click', function(){
    location.reload()
})

    const numA = document.getElementById('campoA');
    const numB = document.getElementById('campoB');

    function comparacao(numA, numB) {
        return numA < numB
    }

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const sucesso = `Muito bem, o valor do campo B: <b>${campoB.value}</b> é maior que o valor do campo A: <b>1${campoA.value}</b>.`
    const erro = `Refaçao processo, o valor do campo B: ${campoB.value} não é maior que o valor do campo A: ${campoA.value}.`

    formEValido = comparacao(numA.value,numB.value)

    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.resultadoCerto');
        containerMensagemSucesso.innerHTML = sucesso;
        containerMensagemSucesso.style.display = 'block';

        numA.value = ''
        numB.value = ''
    }

    else {
        alert(erro)
        
    }
})
console.log(form)

