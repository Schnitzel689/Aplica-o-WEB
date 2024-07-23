function armazenarValor() {
    
    /* Essa parte pra baixo é sobre o peso da carreta */
    var inputElement = document.getElementById('tonelada');
    var tonelada = inputElement.value;
    
    var selectElement = document.getElementById('destino'); /* estou coletando aqui o valor do destino da seleção */
    var destinoSelecionado = selectElement.value

    var frete = tonelada * destinoSelecionado
    
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let freteFormat = formatador.format(frete)

    const mensagem = `_ Dispensa emissão CTRe, nos termos do convênio 17/2015. Valor do frete: ${freteFormat},Tomador do serviço: MINERADORA SÃO JORGE S/A CNPJ: 10.612.190/0001-51`
    console.log(mensagem)

    const elementoP = document.getElementById('resultado');
    elementoP.textContent = mensagem;
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

function copiarTextorpa() {
    var elemento = document.getElementById('resultadoRPA');

    var input = document.createElement('input');
    input.setAttribute('value', elemento.textContent);

    document.body.appendChild(input);

    input.select();

    document.execCommand('copy');

    document.body.removeChild(input);

    alert('Texto copiado para a área de transferência!');
}




document.addEventListener('contextmenu', function(e) {
    // bloquear o botão direito na página
    e.preventDefault();
});


function Rpa(){
    var inputElementPlaca = document.getElementById('placa');
    var placa = inputElementPlaca.value;

    var inputElementNf = document.getElementById('nf');
    var notaFiscal = inputElementNf.value;

    const mensagemRpa = `REF PAGAMENTO FRETE AUTÔNOMO EMBARQUE NF-es Nº ${notaFiscal} EMITIDAS EM ${dataFormatada} ATRAVÉS DE BOLETO BANCARIO DO BANCO BRADESCO. PLACA DO VEICULO: ${placa}`

    const elementoP = document.getElementById('resultadoRPA');
    elementoP.textContent = mensagemRpa;
    

}


function formatarDataBrasileira(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

const dataAtual = new Date();

// Formata a data no formato brasileiro
const dataFormatada = formatarDataBrasileira(dataAtual);
