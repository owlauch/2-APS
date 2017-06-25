function cadastrar() {
  var cliente = new Cliente();
  cliente.setNome(document.getElementsByName('primeironomecad')[0].value);
  cliente.setSobrenome(document.getElementsByName('sobrenomecad')[0].value);
  cliente.setEmail(document.getElementsByName('emailcad')[0].value);
  cliente.setCep(document.getElementsByName('cepcad')[0].value);
  cliente.setTelefone(document.getElementsByName('telcad')[0].value);
  cliente.setSenha(document.getElementsByName('senhacad')[0].value);
  cliente.setCsenha(document.getElementsByName('confirmasenhacad')[0].value);
  var Objetostring=JSON.stringify(cliente);
  localStorage.setItem(cliente.getEmail(),Objetostring);
  alert("Registardo com Sucesso");
  eslogin();
  return false;
}
