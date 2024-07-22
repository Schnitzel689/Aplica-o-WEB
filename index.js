function armazenarValor() {
    
    /* Essa parte pra baixo é sobre o peso da carreta */
    var inputElement = document.getElementById('tonelada');
    var tonelada = inputElement.value;

    /* Essa parte pra baixo é sobre, placa e motorista */

    var inputElementPlaca = document.getElementById('placa');
    var placa = inputElementPlaca.value;

    var inputElementNomeMotorista = document.getElementById('nomeMotorista');
    var nomeMotorista = inputElementNomeMotorista.value;

    var inputElementcpfCondutor = document.getElementById('cpfCondutor');
    var cpfCondutor = inputElementcpfCondutor.value;
    const cpfForm = formatCPF(cpfCondutor); /* esse é o cpf depois de tratado, coma função "formatCPF(cpf)' */

    var selectElement = document.getElementById('destino'); /* estou coletando aqui o valor do destino da seleção */
    var destinoSelecionado = selectElement.value

    /* Começando a tratar os dados coletados */

    const imposto1 = 31.03;  /* Esse é o valor do primeiro imposto */
    const imposto2 =0.3; /*esse é o valor do segundo imposto tranformado de porcentagem para decimal */

    var calculoUm = tonelada * imposto1; /* Esse é o primeiro calculo pelo tonelada*/
    var calculoDois = calculoUm * imposto2; /* Esse é o segundo calculo pelo tonelada*/

    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    let calculoUmFormatado = formatador.format(calculoUm)

    let calculoDoisFormatado = formatador.format(calculoDois)

    var cpfFormatado = cpfCondutor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    
    const mensagem = `4 - A PRAZO -RECOLHIM.ANTECIP. IMPOSTO - DECRETO 44.772/2017, TERMOS ESTABEL.
    ANTECIP. IMPOSTO - DECRETO 44.772/2017, TERMOS ESTABEL. CONVENIO ICMS N 190/2017. RECOLHIMENTO ANTECIPADO 
    DO IMPOSTO-DECRETO N-45.574/2018- B. CALCULO ${calculoUmFormatado} - PERC.(ICMS 30%) ${calculoDoisFormatado} PLACA: ${placa} MOTORISTA: ${nomeMotorista} CPF: ${cpfForm} ETC. DESTINO: ${destinoSelecionado}`;

    let elementoP = document.getElementById('resultado');
    elementoP.textContent = mensagem;

}

function formatCPF(cpf) {
    /* Remove tudo que não sejam números */
    cpf = cpf.replace(/\D/g, '');

    /* vai adicionando os pontos e o hifem */
    if (cpf.length <= 3) {
        return cpf;
    } else if (cpf.length <= 6) {
        return cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    } else if (cpf.length <= 9) {
        return cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    }
}

function copiarTexto() {
    // Seleciona o elemento que contém o texto a ser copiado
    var elemento = document.getElementById('resultado');

    // Cria um elemento input (pode ser fora do viewport)
    var input = document.createElement('input');
    input.setAttribute('value', elemento.textContent);

    // Anexa o elemento input ao body
    document.body.appendChild(input);

    // Seleciona o conteúdo do input
    input.select();

    // Copia o conteúdo selecionado
    document.execCommand('copy');

    // Remove o input do DOM
    document.body.removeChild(input);

    // Feedback opcional para o usuário
    alert('Texto copiado para a área de transferência!');
}

document.addEventListener('contextmenu', function(e) {
    // bloquear o botão direito na página
    e.preventDefault();
});