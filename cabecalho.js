
function esccabecalho() {
  var $xy = document.querySelector('.teste'),
  texto = '<img src="imagens/jake.gif" width="250px"  height="125px">',
  texto1= '<img src="imagens/hypegif.gif" width="75px" height="75px" /><div class="icones">'
  texto2= '<ul><li>Assadores</li><li>Barmans</li><li>Caixas Termicas</li><li>Kits Chop</li><li>Djs</li><li>Sons</li></ul>'
  texto3= '</div><div class="ger"><ul><li><a href="Cadastro.html">Login</a></li><li><a>Carrinho</a></li></ul></div>',
  textod=texto+texto1+texto2+texto3;
  $xy.innerHTML=textod;
};
