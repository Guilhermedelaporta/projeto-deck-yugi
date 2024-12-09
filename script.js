
const carta = document.createElement('article')

const innerHTMLCarta = `<article class="carta" id="carta">
<header>
    <div class="titulo-carta">
  <h3>Elfa Mística</h3>
  <img src="img/atb-luz.webp" alt="" />
</div>

  <div class="level-carta">
    <img src="img/Level.webp" alt="" />
    <img src="img/Level.webp" alt="" />
    <img src="img/Level.webp" alt="" />
    <img src="img/Level.webp" alt="" />
  </div>


</header>
<img class="img-monstro"
  src="img/elfa-mistica.jpg"
  alt="img-elfa-mitica-yugi-oh"
  width="200"
  height="300"
/>
<p></p>
<article class="paragrafo-inf">
  <h4>[Mago]</h4>
  <p>
    Uma elfa delicada com pouco poder de ataque, mas com uma incrível
    defesa proveniente de poderes místicos.
  </p>
  <div class="habilidades">
    <p>ATK/800 </p>
    <p>  DEF/2000</p>
  </div>
</article>
<p>15025844 1ª Edição</p>
<p>&copy 1996 KAZUKI TAKAHASHI</p>
</article>`

carta.className = 'card'

