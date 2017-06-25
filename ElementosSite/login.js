function eslogin() {
  var $xy = document.querySelector('.conteudo_central'),
  t='<div class="tabelalogin">',
  t=t+'<h1>Faça seu Login</h1>',
  t=t+'<form onsubmit="return logar();">',
  t=t+'Seu e-mail: <br>',
  t=t+'<input type="text" name="emaillogin" required> <br>',
  t=t+'Sua senha: <br>',
  t=t+'<input type="password" name="senhalogin" required> <br><br>',
  t=t+'<input type="submit" value="Entrar">',
  t=t+'</form>',
  t=t+'<br><form class="" action="index.html" method="post">',
  t=t+'<button type="button" onclick="escadastro()" name="button">Não possui Conta?</button>',
  t=t+'</form>',
  t=t+'</div >'
  $xy.innerHTML=t;
};
