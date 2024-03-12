const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML = `<p class='fonte-2-l' style='grid-column: 1/-1;padding: 1rem;border-radius: 4px;background: #f7f7f7;text-align: center;'>Mensagem foi enviada com sucesso, ${data.get(
      'nome',
    )}</p>`;
  } else {
    formulario.innerHTML =
      "<p class='fonte-2-l' style='grid-column: 1/-1;padding: 1rem;border-radius: 4px;background: #f7f7f7;text-align: center;'>Erro ao enviar</p>";
  }
}

function enviarFormulario(evento) {
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.style.cursor = 'default';
  botao.setAttribute('title', 'O formulário está sendo validado');

  const data = new FormData(formulario);
  botao.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block; height: 24px; width: auto; shape-rendering: auto;" width="24px" height="24px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <g transform="rotate(0 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
      </rect>
      </g><g transform="rotate(60 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
      </rect>
      </g><g transform="rotate(120 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
      </rect>
      </g><g transform="rotate(180 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
      </rect>
      </g><g transform="rotate(240 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
      </rect>
      </g><g transform="rotate(300 50 50)">
      <rect x="38.5" y="12.5" rx="0" ry="0" width="23" height="7" fill="#5f4002">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
      </g>
      </svg>`;

  fetch('./enviar.php', {
    method: 'POST',
    body: data,
  }).then(formularioEnviado);
}
formulario.addEventListener('submit', enviarFormulario);
