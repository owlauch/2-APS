var esmenues = function (){
  var $xy = document.querySelector('.menu_esquerdo'),
  t='<h1>Info Serviços</h1>',
  t=t+'<ul>',
  t=t+'<li onclick="anima(infass)">Assador Profisa</li>',
  t=t+'<li onclick="anima(infcxt)">Caixa Termica Profisa</li>',
  t=t+'<li onclick="anima(infbarman)">Barman Profisa</li>',
  t=t+'<li onclick="anima(infks)">KitChop Profisa</li>',
  t=t+'<li onclick="anima(infdj)">Dj Profisa</li>',
  t=t+'<li onclick="anima(infson)">SOM Profisa</li>',
  t=t+'</ul>';
  $xy.innerHTML=t;
}
