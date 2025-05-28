document.addEventListener("DOMContentLoaded", function () {
    let dadosCarregadosComunicacao = false;

    function renderTabelaComunicacao(dados) {
        const tabela = document.getElementById("tabelaAbastecimentosComunicacao");
        tabela.innerHTML = "";

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

    document.querySelector('[data-tab="comunicacaoHist"]').addEventListener("click", function () {
        if (!dadosCarregadosComunicacao) {
            fetch("/abastecimentoComunHist")
                .then(response => response.json())
                .then(data => {
                    renderTabelaComunicacao(data);
                    dadosCarregadosComunicacao = true;
                })
                .catch(error => console.error("Erro ao carregar abastecimentos:", error));
        }
    });
});
