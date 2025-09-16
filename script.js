function atualizarRelogio() {
    // Cria um novo objeto de data
    const agora = new Date();

    // Obtém as horas, minutos e segundos
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Formata a string de tempo
    const tempo = `${horas}:${minutos}:${segundos}`;

    // Atualiza o conteúdo do elemento HTML com o ID 'display'
    document.getElementById('display').innerText = tempo;
}

// Chama a função `atualizarRelogio` a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez no início para evitar atraso de 1 segundo
atualizarRelogio();
