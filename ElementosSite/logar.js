function logar() {
  var cliente =new Cliente();
  if(localStorage.getItem(document.getElementsByName('emaillogin')[0].value)){
    cliente=JSON.parse(localStorage.getItem(document.getElementsByName('emaillogin')[0].value));
    if(cliente.senha==document.getElementsByName('senhalogin')[0].value){
      alert("Logado");
      localStorage.setItem("Logado",cliente.nome);
      escoElemento();
    }else {
      alert("Senha Errada");
      document.getElementsByName('senhalogin').style.Color = "red";
    }
  }else {
    alert("Usuario Não cadastrado");
  };

  return false;
}
