document.addEventListener("DOMContentLoaded", function() {
    let dadosCarregadosSupervisao = false;

    function renderTabelaSupervisao(dados) {
        const tabela = document.getElementById("tabelaSupervisao");
        tabela.innerHTML = ""; // Limpa antes de preencher

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

    // Seleciona o botão/link que ativa a aba supervisaoHist
    document.querySelector('[data-tab="supervisaoHist"]').addEventListener("click", function () {
        if (!dadosCarregadosSupervisao) {
            fetch("/abastecimentoSupervisaoHist")
                .then(response => response.json())
                .then(data => {
                    renderTabelaSupervisao(data);
                    dadosCarregadosSupervisao = true;
                })
                .catch(error => console.error("Erro ao carregar abastecimentos:", error));
        }
    });
});