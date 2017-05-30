var esmenues = function (){
  var $xy = document.querySelector('.menu_esquerdo'),
  t='<h1>Info Serviços</h1>',
  t=t+'<ul>',
  t=t+'<li onclick="infass()">Assador Profisa</li>',
  t=t+'<li onclick="infcxt()">Caixa Termica Profisa</li>',
  t=t+'<li onclick="infbarman()">Barman Profisa</li>',
  t=t+'<li onclick="infks()">KitChop Profisa</li>',
  t=t+'<li onclick="infdj()">Dj Profisa</li>',
  t=t+'<li onclick="infson()">SOM Profisa</li>',
  t=t+'</ul>';
  $xy.innerHTML=t;
}
