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

function finalizarPedido(){
    const prato = document.querySelector(".prato .selecionado h4").innerHTML;
    const bebida = document.querySelector(".bebida .selecionado h4").innerHTML;
    const sobremesa = document.querySelector(".sobremesa .selecionado h4").innerHTML;
    
    const valor = (converterValor(document.querySelector(".prato .selecionado strong").innerHTML)
    + converterValor(document.querySelector(".bebida .selecionado strong").innerHTML)
    + converterValor(document.querySelector(".sobremesa .selecionado strong").innerHTML)).toFixed(2);

    const msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${valor}
    `);

    window.open(`https://wa.me/5527999439806?text=${msg}`);
}