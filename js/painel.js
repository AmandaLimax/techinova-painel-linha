const TABELA = document.querySelector('#sensores tbody');

async function carregarSensores() {
  const resposta = await fetch('dados/sensores.json');
  const sensores = await resposta.json();
  sensores.forEach(desenharLinha);
}

function desenharLinha(sensor) {
  const tr = document.createElement('tr');
  tr.innerHTML =
    '<td>' + sensor.codigo + '</td>' +
    '<td>' + sensor.descricao + '</td>' +
    '<td>' + sensor.valor + '</td>' +
    '<td>ok</td>';
  TABELA.appendChild(tr);
}

carregarSensores();
