const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataAtual = document.getElementById('data-atual');

function atualizarRelogio() {
  const agora = new Date();
  let hr = agora.getHours();
  let min = agora.getMinutes();
  let s = agora.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;

  // Data formatada
  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
  const ano = agora.getFullYear();

  dataAtual.textContent = `${diaSemana}, ${dia}/${mes}/${ano}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
