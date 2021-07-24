function selecionar(card, secao) {
    const selecionado = document.querySelector(`.${secao} .selecionado`);

    if(selecionado !== null)
        selecionado.classList.remove("selecionado");
    card.classList.add("selecionado");

    if(document.querySelectorAll(".selecionado").length === 3){
        const botaoConcluir = document.querySelector(".botao-concluir");
        botaoConcluir.innerHTML = "Fechar pedido";
        botaoConcluir.classList.add("fechar-pedido-botao");
    }
}