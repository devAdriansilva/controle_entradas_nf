const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
let fornecedor = document.querySelector('#fornecedor');
let valor_nota = document.getElementById('valor');
const botao = document.getElementById('botao_adicionar');
const tabela  = document.getElementById('lista-notas');
const elementoSoma = document.getElementById('soma-total'); // Já definimos aqui!

//variáveis de estado
let somaTotal = 0;
let linhaEmEdicao = null;

function adicionarNota(event) {
    event.preventDefault();

    // 1. Lemos os dados do formulário (comum a ambos os modos)
    const txtfornecedor = fornecedor.value;
    const valorNota = Number(valor_nota.value);

    // 2. Decidimos o que fazer com base na variável de estado
    if (linhaEmEdicao === null) { // MODO ADIÇÃO
        // --- 2a. ATUALIZAR O ESTADO (OS DADOS) ---
        somaTotal += valorNota;

        // --- 2b. ATUALIZAR A INTERFACE (O QUE O UTILIZADOR VÊ) ---
        // Atualiza o placar do total
        elementoSoma.textContent = formatadorMoeda.format(somaTotal);

        // Cria os elementos da nova linha
        const novaLinha = document.createElement('tr');
        const celulaFornecedor = document.createElement('td');
        celulaFornecedor.textContent = txtfornecedor;
        const celulaValor = document.createElement('td');
        celulaValor.textContent = valorNota;
        const celulaAcoes = document.createElement('td');
        const btEdit = document.createElement('button');
        btEdit.textContent = 'Editar';
        const btExc = document.createElement('button');
        btExc.textContent = 'Excluir';
        celulaAcoes.appendChild(btEdit);
        celulaAcoes.appendChild(btExc);
        
        // Monta a linha e adiciona à tabela
        novaLinha.appendChild(celulaFornecedor);
        novaLinha.appendChild(celulaValor);
        novaLinha.appendChild(celulaAcoes);
        tabela.appendChild(novaLinha);
      
    } else { // MODO EDIÇÃO
        let valor_antigo =Number(linhaEmEdicao.children[1].textContent);
        //let valor_novo = Number() ;
       // somaTotal = ;
    }     
    
    // 3. Limpa os inputs no final de qualquer operação
    fornecedor.value = '';
    valor_nota.value = '';
    fornecedor.focus();
}

function gerenciarTabela(event) {
    if (event.target.textContent == 'Excluir') { 
        excluirNota(event.target);
    } else if (event.target.textContent == 'Editar') {
        iniciarEdicao(event.target);
    }
}

function excluirNota(botaoClicado) {
    let linhaParaExcluir = botaoClicado.closest('tr');
    let valorRemovido = Number(linhaParaExcluir.children[1].textContent);
    
    // 1. Atualiza o estado
    somaTotal -= valorRemovido;
    // 2. Atualiza a interface
    elementoSoma.textContent = formatadorMoeda.format(somaTotal);
    linhaParaExcluir.remove();
}

/*function iniciarEdicao(botaoClicado) {
    let linhaParaEditar = botaoClicado.closest('tr');
    let nomeFornecedor = linhaParaEditar.children[0].textContent;
    let valorNota = Number (linhaParaEditar.children[1].textContent);
    
    fornecedor.value = nomeFornecedor;
    valor_nota.value = valorNota;
    
    linhaEmEdicao = linhaParaEditar; // Define o estado para "Modo Edição"
}*/

function iniciarEdicao(botaoClicado) {
    // Vamos investigar a cadeia passo a passo:
    console.log("1. O Ponto de Partida (O botão que cliquei):", botaoClicado);

    const linha = botaoClicado.closest('tr');
    console.log("2. O 'Avô' (A linha 'tr' que encontrámos):", linha);

    const filhosDaLinha = linha.children;
    console.log("3. Os 'Filhos' (A coleção de 'tds' dentro da linha):", filhosDaLinha);

    const celulaDoValor = filhosDaLinha[1];
    console.log("4. O Segundo Filho (A 'td' específica do valor):", celulaDoValor);

    const textoDoValor = celulaDoValor.textContent;
    console.log("5. O Destino Final (O texto dentro da célula):", textoDoValor);

    // O resto da sua função continuaria aqui...
    let linhaParaEditar = botaoClicado.closest('tr');
    let nomeFornecedor = linhaParaEditar.children[0].textContent;
    let valorNota = Number (linhaParaEditar.children[1].textContent);
    
    fornecedor.value = nomeFornecedor;
    valor_nota.value = valorNota;
    
    linhaEmEdicao = linhaParaEditar;
}

// ouvintes de Eventos
botao.addEventListener('click', adicionarNota);
tabela.addEventListener('click', gerenciarTabela);