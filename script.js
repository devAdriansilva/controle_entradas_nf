
let fornecedor = document.querySelector('#fornecedor')
let valor_nota = document.getElementById('valor')
const botao = document.getElementById('botao_adicionar')

function enviar() {
    //criação dos elementos HTML
    const txtfornecedor = fornecedor.value // obtemos o valor do input fornecedor
    const valorNota = valor_nota.value // obtemos o valor do input valorNota
    const novaLinha = document.createElement('tr') //criamos a nova linha
    const novoDado = document.createElement('td') //criamos o campo de dados
   
    //Prenchimento do formulário

     novoDado.textContent = txtfornecedor
     novaLinha.appendChild(novoDado)
   
}
botao.addEventListener('click',enviar)