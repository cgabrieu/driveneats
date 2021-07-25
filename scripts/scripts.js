let botaoFecharPedido = false;

function selecionar(card, secao) {
    const selecionado = document.querySelector(`.${secao} .selecionado`);

    if(selecionado !== null)
        selecionado.classList.remove("selecionado");
    card.classList.add("selecionado");

    if(document.querySelectorAll(".selecionado").length === 3){
        const botaoConcluir = document.querySelector(".botao-concluir");
        botaoConcluir.innerHTML = "Fechar pedido";
        botaoConcluir.classList.add("fechar-pedido-botao");
        botaoFecharPedido = true;
    }
}

function converterValor(valor){
    return Number(valor.replace(",","."));
}

function popup(a){
    if (botaoFecharPedido && a)
        document.querySelector(".fundo-confirme-pedido").classList.add("flex-center");
        document.querySelector(".nome-prato").innerHTML = obterItem("prato");
        document.querySelector(".valor-prato").innerHTML = obterItem("valorPrato");
        document.querySelector(".nome-bebida").innerHTML = obterItem("bebida");
        document.querySelector(".valor-bebida").innerHTML = obterItem("valorBebida");
        document.querySelector(".nome-sobremesa").innerHTML = obterItem("sobremesa");
        document.querySelector(".valor-sobremesa").innerHTML = obterItem("valorSobremesa");
        document.querySelector(".total-itens strong").innerHTML = obterItem("total");
    if (!a) document.querySelector(".fundo-confirme-pedido").classList.remove("flex-center");
}

function finalizarPedido(){
    const msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - *Prato*: ${obterItem("prato")}
    - *Bebida*: ${obterItem("bebida")}
    - *Sobremesa*: ${obterItem("sobremesa")}
    *Total: R$ ${obterItem("total")}*

    *Nome*: ${prompt("Infome seu nome:")}
    *Endereço*: ${prompt("Infome seu endereço:")}
    `);
    const numFone = "5527999439806";
    window.open(`https://wa.me/${numFone}?text=${msg}`);
}

function obterItem(e){
    const valorPrato = document.querySelector(".prato .selecionado strong").innerHTML;
    const valorBebida = document.querySelector(".bebida .selecionado strong").innerHTML;
    const valorSobremesa = document.querySelector(".sobremesa .selecionado strong").innerHTML;

    if (e == "prato") return document.querySelector(".prato .selecionado h4").innerHTML;
    else if (e == "bebida") return document.querySelector(".bebida .selecionado h4").innerHTML;
    else if (e == "sobremesa") return document.querySelector(".sobremesa .selecionado h4").innerHTML;   
    else if (e == "valorPrato") return valorPrato; 
    else if (e == "valorBebida") return valorBebida; 
    else if (e == "valorSobremesa") return valorSobremesa; 
    else if (e == "total")
        return (converterValor(valorPrato)+converterValor(valorBebida)+converterValor(valorSobremesa)).toFixed(2).replace(".",",");
    return("Error");
}