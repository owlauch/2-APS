var esmenues = function (){
  var $xy = document.querySelector('.menu_esquerdo'),
  t='<h1>Info Serviços</h1>',
  t=t+'<ul>',
  t=t+'<li onclick="anima(infass)">Assador</li>',
  t=t+'<li onclick="anima(infcxt)">Caixa Termica</li>',
  t=t+'<li onclick="anima(infbarman)">Barman</li>',
  t=t+'<li onclick="anima(infks)">KitChop</li>',
  t=t+'<li onclick="anima(infdj)">Dj</li>',
  t=t+'<li onclick="anima(infson)">SOM</li>',
  t=t+'</ul>';
  $xy.innerHTML=t;
}
