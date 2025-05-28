document.addEventListener("DOMContentLoaded", function() {
    let dadosCarregadosVigilancia = false;

    function renderTabelaVigilancia(dados) {
        const tabela = document.getElementById("tabelaVigilancia");
        tabela.innerHTML = ""; // limpa antes

        dados.forEach(abastecimento => {
            const litros = parseFloat(abastecimento.litros);
            const valor = parseFloat(abastecimento.valor);
            const valorPorLitro = (litros > 0) ? (valor / litros) : 0;

            const row = `<tr>
                <td>${abastecimento.id}</td>
                <td>${abastecimento.nome}</td>
                <td>${abastecimento.rgf}</td>
                <td>${abastecimento.km}</td>
                <td>${abastecimento.placa}</td>
                <td>${abastecimento.data}</td>
                <td>${abastecimento.posto}</td>
                <td>${litros.toFixed(2)} L</td>
                <td>R$ ${valor.toFixed(2)}</td>
                <td>R$ ${valorPorLitro.toFixed(2)}</td>
                <td><a href="${abastecimento.comprovante}" target="_blank">Ver Comprovante</a></td>
            </tr>`;
            tabela.innerHTML += row;
        });
    }

    // Escuta clique no botão/aba que ativa a aba "vigilanciaHist"
    document.querySelector('[data-tab="vigilanciaHist"]').addEventListener("click", function() {
        if (!dadosCarregadosVigilancia) {
            fetch("/abastecimentoVigilanciaHist")
                .then(response => response.json())
                .then(data => {
                    renderTabelaVigilancia(data);
                    dadosCarregadosVigilancia = true;
                })
                .catch(error => console.error("Erro ao carregar abastecimentos:", error));
        }
    });
});
