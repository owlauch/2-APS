function esccabecalho(n) {
  if(n==1){
    var $xy = document.querySelector('.teste'),
    t = '<a href="index.html">',
    t = t+ '<img class="hype" src="imagens/hypegif.gif">',
    t = t+ '</a>',
    t = t+ '<a href="javascript:retiramenuesquerdo()">',
    t = t+ '<img class="jake"src="imagens/jake.gif" >',
    t = t+ '</a>',
    t = t+ '<div class="icones">',
    t = t+'<ul><li onclick="anima(escassadores)">Assadores</li>',
    t = t+'<li onclick="anima(esbarmans)">Barmans</li>',
    t = t+'<li onclick="anima(escxt)">Caixas Termicas</li>',
    t = t+'<li onclick="anima(esks)">Kits Chop</li>',
    t = t+'<li onclick="anima(esdjs)">Djs</li>',
    t = t+'<li onclick="anima(essons)">Sons</li></ul>',
    t = t+'</div><div class="ger"><ul><li><a href="ElementosSite/Cadastro.html">Login</a></li></ul></div>'
    $xy.innerHTML=t;
  };
  if(n==2){
    var $xy = document.querySelector('.teste'),
    t = '<a href="index.html">',
    t = t+'<img src="../imagens/hypegif.gif" width="75px" height="75px"/>',
    t = t+ '</a>',
    t = t+ '<a href="index.html">',
    t = t+'<img src="../imagens/finn.gif" width="225px" height="125px">',
    t = t+ '</a>',
    t = t+'<div class="icones">',
    t = t+'<ul> <li onclick="escoElemento()"> Assadores</li>',
    t = t+'<li onclick="escoElemento(esbarmans)"> Barmans</li>',
    t = t+'<li onclick="escoElemento()"> Caixas Termicas</li>',
    t = t+'<li onclick="escoElemento()"> Kits Chop</li>',
    t = t+'<li onclick="escoElemento()"> Djs</li>',
    t = t+'<li onclick="escoElemento()"> Sons</li></ul>',
    t = t+'</div><div class="ger"><ul><li><a href="../ElementosSite/Cadastro.html">Login</a></li></ul></div>'
    $xy.innerHTML=t;
  };
};
