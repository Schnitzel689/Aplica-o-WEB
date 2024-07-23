function armazenarValor() {
    var inputElement = document.getElementById('valorNF');
    var valorNF = inputElement.value;
    console.log(valorNF)

    var selectElement = document.getElementById('estado'); /* estou coletando aqui o valor do destino da seleção */
    var estado = selectElement.value
    console.log(estado)

    var valorImposto = 0;
    var valorImpostoUfOrigem = valorImposto * 0

    if (estado === 'MA') {
        valorImposto = valorNF * 0.10; // Diferença da alicota de 10%
    } else if (estado === 'GO') {
        valorImposto = valorNF * 0.07; // Diferença da alicota de 7%

    } else if (estado === 'BA') {
        valorImposto = valorNF * 0.085; // Diferença da alicota de 8,5%

    } else if (estado === 'PR') {
        valorImposto = valorNF * 0.075; // Diferença da alicota de 7,5%

    } else if (estado === 'SC') {
        valorImposto = valorNF * 0.00; // Diferença da alicota de 0%

    } else if (estado === 'RN') {
        valorImposto = valorNF * 0.06; // Diferença da alicota de 6%

    } else if (estado === 'AP, MG e SP') {
        valorImposto = valorNF * 0.06; // Diferença da alicota de 6%

    } else if (estado === 'RO') {
        valorImposto = valorNF * 0.075; // Diferença da alicota de 7,5%

    } else if (estado === 'AC, AL, PA e SE') {
        valorImposto = valorNF * 0.07; // Diferença da alicota de 7%

    } else if (estado === 'AM, CE, TO, DF, PB, RJ e RR') {
        valorImposto = valorNF * 0.08; // Diferença da alicota de 8%

    } else if (estado === 'PI') {
        valorImposto = valorNF * 0.09; // Diferença da alicota de 9%

    } else if (estado === 'ES, MT, MS e RS') {
        valorImposto = valorNF * 0.05; // Diferença da alicota de 5% 

    } else {
        alert('Selecione um estado válido!');
        return; // Encerra a função se o estado não for válido
    }

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    var impostoFormat = formatador.format(valorImposto); // Imposto da GNRE já formado em reais
    var valorImpostoUfOrigemFormat = formatador.format(valorImpostoUfOrigem)

    const mensagem = `Valores totais do ICMS Interestadual: DIFAL da UF destino ${impostoFormat}, DIFAL da UF origem ${valorImpostoUfOrigemFormat}`
    console.log(mensagem)

    let elementoP = document.getElementById('resultado');
    elementoP.textContent = mensagem.toUpperCase();

    let elementoP1 = document.getElementById('imposto');
    elementoP1.textContent = impostoFormat.toUpperCase();

}

function copiarTexto() {
    var elemento = document.getElementById('resultado');

    var input = document.createElement('input');
    input.setAttribute('value', elemento.textContent);

    document.body.appendChild(input);

    input.select();

    document.execCommand('copy');

    document.body.removeChild(input);

    alert('Texto copiado para a área de transferência!');
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});