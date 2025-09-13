
let fornecedor = document.querySelector('#fornecedor')
let valor_nota = document.getElementById('valor')
const botao = document.getElementById('botao_adicionar')
const tabela  = document.getElementById('lista-notas')
let somaTotal = 0 

function enviar(event) {
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
      elementoSoma.textContent(somaTotal)
      // Limpza dos inputs
     fornecedor.value = '';
     valor_nota.value = '';
}
botao.addEventListener('click',enviar)