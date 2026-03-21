// Busca os conteúdos da API e monta na tela
async function carregarConteudos(categoria) {
  const resposta = await fetch(`http://localhost:3000/api/conteudos/${categoria}`);
  const dados = await resposta.json();
  montarLinks(dados);
}
// Monta os link-items no HTML com os dados do banco
function montarLinks(dados) {
  const container = document.getElementById('links-programacao');
  container.innerHTML = '';

  dados.forEach(item => {
    const div = document.createElement('div');
    div.className = 'link-item';
    div.innerHTML = `
      <div class="link-info">
        <strong>${item.titulo}</strong>
        <span>${new URL(item.url).hostname}</span>
      </div>
      <span class="link-tag">${item.tag}</span>
    `;
    div.onclick = () => openModal(item.titulo, item.tag, new URL(item.url).hostname, item.descricao, item.url);
    container.appendChild(div);
  });
}
// Carrega programação ao abrir a página
carregarConteudos('programacao');