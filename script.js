function mostrarResultados() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    const t3 = parseFloat(document.getElementById('t3').value);

    const tempos = [
        { nadador: 1, tempo: t1 },
        { nadador: 2, tempo: t2 },
        { nadador: 3, tempo: t3 }
    ];

    // Ordenar pelo menor tempo
    tempos.sort((a, b) => a.tempo - b.tempo);

    let posicao = 1;
    let resultado = [];
    let posicaoAtual = 1;

    for (let i = 0; i < tempos.length; i++) {

        if (i > 0 && tempos[i].tempo === tempos[i - 1].tempo) {
            // empate > mesma posição
            posicaoAtual = resultado[i - 1].posicao;
        } else {
            posicaoAtual = posicao;
        }

        resultado.push({
            nadador: tempos[i].nadador,
            tempo: tempos[i].tempo,
            posicao: posicaoAtual
        });

        posicao++;
    }

    // Monta saída na tela
    let texto = "";
    resultado.forEach(item => {
        texto += `Nadador ${item.nadador}  ${item.posicao}º lugar (Tempo: ${item.tempo})\n`;
    });

    document.getElementById('resultado').textContent = texto;
}
