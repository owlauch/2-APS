function esbarmans() {
  var servidor = new Servidor();
  var x = JSON.parse(localStorage.getItem("servidores"));
  var assadores=[];
  for (var i = 0; i < x.length; i++) {
    if(x[i].tipocad=="Barman"){
      assadores.push(x[i]);
    };
  }
  var $xy = document.querySelector('.conteudo_central'),
  t='<div class="conteudocentro">';
  t=t+'<ul>';
  for (var i = 0; i < assadores.length; i++) {
    t=t+'<li><img src="imagens/barman.jpg" width="150px" height="150px" />';
    t=t+'<div id="poder_ass">';
    t=t+'<p>'+assadores[i].nome+'</p>';
    t=t+'<img src="imagens/scouter.png" width="30px" height="30px"/>';
    t=t+'<img src="imagens/scouter.png" width="30px" height="30px"/>';
    t=t+'<img src="imagens/scouterblack.png" width="30px" height="30px"/>';
    t=t+'<img src="imagens/scouterblack.png" width="30px" height="30px"/>';
    t=t+'<img src="imagens/scouterblack.png" width="30px" height="30px"/>';
    t=t+'</div>';
    t=t+'</li>';
  }
  t=t+'</ul>';
  t=t+'</div>';
  $xy.innerHTML=t;
}
