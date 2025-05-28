document.addEventListener("DOMContentLoaded", function() {
                        let dadosOriginais = [];
                        let dadosCarregados = false;

                        function renderTabela(dados) {
                            const tabela = document.getElementById("tabelaAbastecimentosGeral");
                            tabela.innerHTML = "";

                            dados.forEach((abastecimento, index) => {
                                const litros = parseFloat(abastecimento.litros);
                                const valor = parseFloat(abastecimento.valor);
                                const valorPorLitro = (litros > 0) ? (valor / litros) : 0;

                                const row = `<tr>
                                    <td>${index + 1}</td>
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

                        function aplicarFiltros() {
                            const nomeFiltro = document.getElementById("filtroNome").value.toLowerCase();
                            const placaFiltro = document.getElementById("filtroPlaca").value.toLowerCase();
                            const valorFiltro = parseFloat(document.getElementById("filtroValor").value);

                            const filtrados = dadosOriginais.filter(item => {
                                const nomeCond = item.nome.toLowerCase().includes(nomeFiltro);
                                const placaCond = item.placa.toLowerCase().includes(placaFiltro);
                                const valorCond = isNaN(valorFiltro) || parseFloat(item.valor) === valorFiltro;

                                return nomeCond && placaCond && valorCond;
                            });

                            renderTabela(filtrados);
                        }

                        document.querySelector('[data-tab="abastecimentoGeral"]').addEventListener("click", function () {
                            if (!dadosCarregados) {
                                fetch("/abastecimentoGeralHist")
                                    .then(response => response.json())
                                    .then(data => {
                                        dadosOriginais = data;
                                        renderTabela(data);
                                        dadosCarregados = true;
                                    })
                                    .catch(error => console.error("Erro ao carregar abastecimentos:", error));
                            }
                        });

                        // Filtros
                        document.getElementById("filtroNome").addEventListener("input", aplicarFiltros);
                        document.getElementById("filtroPlaca").addEventListener("input", aplicarFiltros);
                        document.getElementById("filtroValor").addEventListener("input", aplicarFiltros);
                    });