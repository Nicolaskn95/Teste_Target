// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
type FaturamentoPorEstado = { estado: string; faturamento: number };

const faturamentoMensal: FaturamentoPorEstado[] = [
  { estado: 'SP', faturamento: 67836.43 },
  { estado: 'RJ', faturamento: 36678.66 },
  { estado: 'MG', faturamento: 29229.88 },
  { estado: 'ES', faturamento: 27165.48 },
  { estado: 'Outros', faturamento: 19849.53 },
];

function porcentagem(faturamento: FaturamentoPorEstado[]) {
  const totalFaturamento = faturamento.reduce(
    (acc, valor) => acc + valor.faturamento,
    0
  );
  console.log(totalFaturamento);
  faturamento.forEach(item => {
    const percentual = (item.faturamento / totalFaturamento) * 100;
    console.log(`${item.estado}: ${percentual.toFixed(2)}`);
  });
}

porcentagem(faturamentoMensal);
