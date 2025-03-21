var totalGeral;
limpar();

function adicionar() 
{
    //1º Passo: Recuperar valores - nome do produto, quantidade e valor
    var produto = document.getElementById("produto").value; 
    var nomeProduto = produto.split("-")[0];
    var valorUnitario = produto.split("R$")[1];
    var quantidade = document.getElementById("quantidade").value;
    
    //2ª Passo: Calcular o preço, o nosso subtotal
    var preço = quantidade * valorUnitario; 
    var carrinho = document.getElementById("lista-produtos"); 

    //3º Passo: Adicionar o produto no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preço}</span>
        </section>`
    
    //5º Passo: Atualizar o valor total da compra
    totalGeral = totalGeral + preço; 
    varCampoTotal = document.getElementById("valor-total");
    campoTotal.textContent =`R$ ${totalGeral}`;
    document.getElementById("quantidade").value = 0; //Minha quantidade não está zerando automáticamente após clicar em adicionar 

}

function limpar() 
{
let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$0";
}









