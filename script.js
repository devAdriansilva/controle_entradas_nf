
const formatadorMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
let fornecedor = document.querySelector('#fornecedor')
let valor_nota = document.getElementById('valor')
const botao = document.getElementById('botao_adicionar')
const tabela  = document.getElementById('lista-notas')
let somaTotal = 0;
let linhaEmEdicao = null;



function adicionarNota(event) {
      event.preventDefault() // evitar que os dados sumam ao executar  a função.
      // CAPTURA DOS DADOS
       /*Capturamos o que o usuário digitou e guardamos em constantes.*/
    const txtfornecedor = fornecedor.value 
    const valorNota = Number(valor_nota.value)
    somaTotal += valorNota
    elementoSoma = document.getElementById('soma-total')

    /** CRIAÇÃO DOS ELEMENTOS HTML */
    const novaLinha = document.createElement('tr') //Linha da tabela

    const celulaFornecedor = document.createElement('td') // célula fornecedor.
    celulaFornecedor.textContent = txtfornecedor //  A propriedade textcontente da constante celulafornecedor recebe o valor da constante txtfornecedor.

    const celulaValor =document.createElement('td') // célula valor
    celulaValor.textContent = valorNota


     //*CRIAÇÀO DOS BOTÕES DE AÇÃO */
    const btEdit = document.createElement('button')
    btEdit.textContent = 'Editar'
    const btExc = document.createElement('button')
    btExc.textContent = 'Excluir'
    const celulaAcoes = document.createElement('td')
   
    //PREENCHIMENTO DO FORMULÁRIO
    // ## o elemento celulaAcoes adota os botões ##
     celulaAcoes.appendChild(btEdit)
     celulaAcoes.appendChild(btExc) 

 // ## O elemento novaLinha adota as células ##
     novaLinha.appendChild(celulaFornecedor) 
     novaLinha.appendChild(celulaValor)
     novaLinha.appendChild(celulaAcoes)
     
     //EXIBINDO OS DADOS INSERIDOS//
      
      tabela.appendChild(novaLinha)
      elementoSoma.textContent = formatadorMoeda.format(somaTotal);
      // Limpza dos inputs
     fornecedor.value = '';
     valor_nota.value = '';
     fornecedor.focus()
}

function gerenciarTabela(event) {
    //Verifica se o botão Excluir foi clicado
    if (event.target.textContent == 'Excluir') { 
       excluirNota(event.target); // chamada da função excluirNota
    //Verifica se o botão Editar foi clicado   
    } else if (event.target.textContent == 'Editar') {
      iniciarEdicao(event.target) // chamada da função iniciarEdicao 
    }
}

function excluirNota(botaoClicado) {
  let linhaParaExcluir = botaoClicado.closest('tr');// localiza a linha a ser exluida
  let valorRemovido = Number(linhaParaExcluir.children[1].textContent)// localiza a celula da linha que possui o valor 
  somaTotal -= valorRemovido // atualiza o total fora da tabela 
  elementoSoma.textContent = formatadorMoeda.format(somaTotal); // exibe o valor atualizado fora da table
  linhaParaExcluir.remove() // remove a linha completa
}

function iniciarEdicao(botaoClicado) {
 let linhaParaEditar = botaoClicado.closest('tr');

 let nomeFornecedor = linhaParaEditar.children[0].textContent
 let valorNota = Number (linhaParaEditar.children[1].textContent)
 fornecedor.value = nomeFornecedor
 valor_nota.value = valorNota

 linhaEmEdicao = linhaParaEditar

  console.log("Modo de edição ativado!!")
  console.log(botaoClicado)
}
// ouvintes de Eventos
botao.addEventListener('click',adicionarNota)
tabela.addEventListener('click',gerenciarTabela)