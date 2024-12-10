let cartas = [];

fetch('http://127.0.0.1:5500/cartas.json')
  .then(resposta => resposta.json()) // Converte a resposta para JSON
  .then(objetoJSON => { // Usando o nome correto da variável
    cartas = objetoJSON; // Armazena o JSON na variável cartas
    montaDeck(); // Chama a função para processar os dados
  })

function montaDeck() {

  cartas.forEach(function(umaCarta) {
  const carta = document.createElement('article')
  carta.className = 'carta';

  carta.innerHTML = `
  <header>
    <div class="titulo-carta">
      <h3>${umaCarta.nomeMonstro}</h3>
      <img src="${umaCarta.imgAtributo}" alt="Atributo Luz" />
    </div>
    <div class="level-carta">
      ${umaCarta.imgLevel.map(function (urlImagem){
        return `<img src='${urlImagem}' alt="Nível" />`
      })}
      
    </div>
  </header>
  <img
    class="img-monstro"
    src="${umaCarta.imgMonstro}"
    alt="Imagem da Elfa Mística - Yu-Gi-Oh"
    width="200"
    height="300"
  />
  <div class="paragrafo-inf">
    <h4>[${umaCarta.tipoMonstro}]</h4>
    <p>${umaCarta.caracteristica}</p>
    <div class="habilidades">
      <p>${umaCarta.atkMonstro}</p>
      <p>${umaCarta.defMonstro}</p>
    </div>
  </div>
  <footer class="footer-carta">
    <p>${umaCarta.edicMonstro}</p>
    <p>${umaCarta.fabMonstro}</p>
  </footer>
  `;

  const deck = document.querySelector('.deck');
  deck.appendChild(carta)
})
}