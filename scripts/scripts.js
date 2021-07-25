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
    if(typeof(valor) === "number")
        return valor.toString().replace(".",",");
    return Number(valor.replace(",","."));
}

function popup(a){
    if (a === false) document.querySelector(".fundo-confirme-pedido").classList.remove("flex-center");
    else {
        document.querySelector(".fundo-confirme-pedido").classList.add("flex-center")
        
    }
}

function finalizarPedido(){
    const msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - *Prato*: ${prato}
    - *Bebida*: ${bebida}
    - *Sobremesa*: ${sobremesa}
    *Total: R$ ${valor}*
    `);
    const numFone = "5527999439806";
    window.open(`https://wa.me/${numFone}?text=${msg}`);
}

function obterItem(e){
    if (e == "prato") return document.querySelector(".prato .selecionado h4").innerHTML;
    if (e == "bebida") return document.querySelector(".bebida .selecionado h4").innerHTML;
    if (e == "sobremesa") return document.querySelector(".sobremesa .selecionado h4").innerHTML;
    if (e == "valorPrato") return converterValor(document.querySelector(".prato .selecionado strong").innerHTML);
    if (e == "valorBebida") return converterValor(document.querySelector(".bebida .selecionado strong").innerHTML);
    if (e == "valorSobremesa") return converterValor(document.querySelector(".sobremesa .selecionado strong").innerHTML)
    if (e == "total") return (valorPrato+valorBebida+valorSobremesa).toFixed(2);
    return("Error");
}