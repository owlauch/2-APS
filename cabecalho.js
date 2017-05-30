function esccabecalho() {
  var $xy = document.querySelector('.teste'),
  texto = '<img src="imagens/jake.gif" width="250px"  height="125px">',
  t= texto+ '<img src="imagens/hypegif.gif" width="75px" height="75px" />',
  t = t+ '<div class="icones">',
  t = t+'<ul><li onclick="escassadores()">Assadores</li>',
  t = t+'<li onclick="esbarmans()">Barmans</li>',
  t = t+'<li onclick="escxt()">Caixas Termicas</li>',
  t = t+'<li onclick="esks()">Kits Chop</li>',
  t = t+'<li onclick="esdjs()">Djs</li>',
  t = t+'<li onclick="essons()">Sons</li></ul>',
  t = t+'</div><div class="ger"><ul><li><a href="Cadastro.html">Login</a></li><li><a>Carrinho</a></li></ul></div>'
  $xy.innerHTML=t;
};
