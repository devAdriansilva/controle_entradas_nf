
let fornecedor = document.querySelector('#fornecedor')
let valor_nota = document.getElementById('valor')
const botao = document.getElementById('botao_adicionar')

function enviar() {
      // CAPTURA DOS DADOS
       /*Capturamos o que o usuário digitou e guardamos em constantes.*/
    const txtfornecedor = fornecedor.value 
    const valorNota = valor_nota.value

    /** CRIAÇÃO DOS ELEMENTOS HTML */
    const novaLinha = document.createElement('tr') //Linha da tabela

    const celulaFornecedor = document.createElement('td') // célula fornecedor.
    celulaFornecedor.textContent = txtfornecedor //  A propriedade textcontente da constante celulafornecedor recebe o valor da constante textfornecedor.

    const celulaValor =document.createElement('td') // célula valor


     //*CRIAÇÀO DOS BOTÕES DE AÇÃO */
    const btEdit = document.createElement('button')
    btEdit.textContent = 'Editar'
    const btExc = document.createElement('button')
    btExc.textContent = 'Excluir'
    const celulaAcoes = document.createElement('td')
   
    //PREENCHIMENTO DO FORMULÁRIO

    
     novaLinha.appendChild(celulaFornecedor) // O elemento novaLinha Adota o elemento novoDado.
   
     celulaValor.textContent = valorNota
     celulaAcoes.appendChild(btEdit)
     celulaAcoes.appendChild(btExc) 

     novaLinha.appendChild(celulaValor)
     novaLinha.appendChild(celulaAcoes)

    


}
botao.addEventListener('click',enviar)