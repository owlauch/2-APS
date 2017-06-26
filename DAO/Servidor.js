function cadastrarS() {
  if(localStorage.servidores){
  var servidor = new Servidor();
  servidor.setNome(document.getElementsByName('sprimeironomecad')[0].value);
  servidor.setSobrenome(document.getElementsByName('ssobrenomecad')[0].value);
  servidor.setEmail(document.getElementsByName('semailcad')[0].value);
  servidor.setCep(document.getElementsByName('scepcad')[0].value);
  servidor.setTelefone(document.getElementsByName('stelcad')[0].value);
  servidor.setSenha(document.getElementsByName('ssenhacad')[0].value);
  servidor.setCsenha(document.getElementsByName('sconfirmasenhacad')[0].value);
  servidor.setTipocad(document.getElementsByName('tipocad')[0].value);
  var Objetostring=JSON.stringify(servidor);
  var x = localStorage.getItem("servidores");
  var x = JSON.parse(x);
  x.push(servidor);
  localStorage.setItem("servidores",JSON.stringify(x));
  alert("Registrado com Sucesso");
  var xy=localStorage.getItem("servidores");
  var xy= JSON.parse(xy);
  for (var i = 0; i < xy.length; i++) {
    console.log(xy[i]);
  }
  eslogin();
  return false;
}else {
  var x=[];
  var servidor = new Servidor();
  servidor.setNome(document.getElementsByName('sprimeironomecad')[0].value);
  servidor.setSobrenome(document.getElementsByName('ssobrenomecad')[0].value);
  servidor.setEmail(document.getElementsByName('semailcad')[0].value);
  servidor.setCep(document.getElementsByName('scepcad')[0].value);
  servidor.setTelefone(document.getElementsByName('stelcad')[0].value);
  servidor.setSenha(document.getElementsByName('ssenhacad')[0].value);
  servidor.setCsenha(document.getElementsByName('sconfirmasenhacad')[0].value);
  servidor.setTipocad(document.getElementsByName('tipocad')[0].value);
  x.push(servidor);
  localStorage.setItem("servidores",JSON.stringify(x));
  x = localStorage.getItem("servidores");
  var x = JSON.parse(x);
  alert("Registrado com Sucesso");
  var xy=localStorage.getItem("servidores");
  var xy= JSON.parse(xy);
  for (var i = 0; i < xy.length; i++) {
    console.log(xy[i]);
  }
  eslogin();
  return false;
}
}
