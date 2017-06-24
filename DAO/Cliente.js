function cadastrar() {
  var cliente = new Cliente();
  console.log(cliente);
  cliente.setNome(document.getElementsByName('primeironomecad')[0].value);
  cliente.setsobrenome(document.getElementsByName('sobrenomecad')[0].value);
  cliente.setemail(document.getElementsByName('emailcad')[0].value);
  cliente.setcepcad(document.getElementsByName('cepcad')[0].value);
  cliente.settelcad(document.getElementsByName('telcad')[0].value);
  cliente.setsenhacad(document.getElementsByName('senhacad')[0].value);
  cliente.setconfirmasenhacad(document.getElementsByName('confirmasenhacad')[0].value);
  alert(cliente.getNome());
  alert(cliente.getsobrenome());
  alert(cliente.getEmail());
  alert(cliente.get)
  console.dir(cliente);
  var Objetostring=JSON.Stringify();
  localStorage.set(cliente.getEmail(),Objetostring);
  
  return false;
}
