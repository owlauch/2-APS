function logar() {
  var cliente = new Cliente();
  var x=JSON.parse(localStorage.getItem("clientes"));
  for (var i = 0; i < x.length; i++) {
    if(x[i].email==document.getElementsByName('emaillogin')[0].value){
      cliente=x[i];
    };
  }
if(cliente){
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
