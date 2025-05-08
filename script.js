const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const envelope = document.getElementById('envelope');
const resposta = document.getElementById('resposta');

botaoSim.addEventListener('click', () => {
  // Garante que o envelope vai "abrir"
  envelope.style.transform = 'scale(1)';
  setTimeout(() => {
    envelope.classList.add('open'); // Aplica a animação de abertura do envelope
  }, 500); // Atraso para a animação do envelope abrir
  setTimeout(() => {
    botaoSim.style.display = 'none'; // Esconde o botão "Sim"
    botaoNao.style.display = 'none'; // Esconde o botão "Não"
  }, 1000); // Tempo suficiente para o envelope abrir
});

botaoNao.addEventListener('touchstart', moverBotao);
botaoNao.addEventListener('click', moverBotao);

function moverBotao(e) {
  e.preventDefault(); // Evita clique acidental
  const maxX = window.innerWidth - botaoNao.offsetWidth;
  const maxY = window.innerHeight - botaoNao.offsetHeight;

  const aleatorioX = Math.floor(Math.random() * maxX);
  const aleatorioY = Math.floor(Math.random() * maxY);

  botaoNao.style.position = 'absolute';
  botaoNao.style.left = `${aleatorioX}px`;
  botaoNao.style.top = `${aleatorioY}px`;
}

