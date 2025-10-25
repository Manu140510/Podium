function mostrarResultados() {
    const t1 = parseInt(document.getElementById('t1').value);
    const t2 = parseInt(document.getElementById('t2').value);
    const t3 = parseInt(document.getElementById('t3').value);

    // Associação entre nadador e tempo
    const tempos = [
        { nadador: 1, tempo: t1 },
        { nadador: 2, tempo: t2 },
        { nadador: 3, tempo: t3 }
    ];

    // Ordena pelo menor tempo
    tempos.sort((a, b) => a.tempo - b.tempo);

    // Exibe resultado conforme o enunciado
    let saida = tempos[0].nadador + "\n" + tempos[1].nadador + "\n" + tempos[2].nadador;
    document.getElementById('resultado').textContent = saida;
}
