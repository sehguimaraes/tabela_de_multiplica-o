let tabela = [];
function tabelaMultiplicacao(quantidade) {
  for (let linha = 0; linha <= quantidade; linha++) {
    tabela[linha] = [];
    for (let coluna = 0; coluna <= quantidade; coluna++) {
      tabela[linha][coluna] = linha * coluna;
    }
  }
  console.table(tabela);
}
tabelaMultiplicacao();