function cadastrar() {
  if (localStorage.clientes) {
    var cliente = new Cliente();
    cliente.setNome(document.getElementsByName('primeironomecad')[0].value);
    cliente.setSobrenome(document.getElementsByName('sobrenomecad')[0].value);
    cliente.setEmail(document.getElementsByName('emailcad')[0].value);
    cliente.setCep(document.getElementsByName('cepcad')[0].value);
    cliente.setTelefone(document.getElementsByName('telcad')[0].value);
    cliente.setSenha(document.getElementsByName('senhacad')[0].value);
    cliente.setCsenha(document.getElementsByName('confirmasenhacad')[0].value);
    var Objetostring=JSON.stringify(cliente);
    var x = localStorage.getItem("clientes");
    var x = JSON.parse(x);
    x.push(cliente);
    localStorage.setItem("clientes",JSON.stringify(x));
    alert("Registrado com Sucesso");
    var xy=localStorage.getItem("clientes");
    var xy= JSON.parse(xy);
    for (var i = 0; i < xy.length; i++) {
      console.log(xy[i]);
    }
    eslogin();
    return false;
  }else {
    var x=[];
    var cliente = new Cliente();
    cliente.setNome(document.getElementsByName('primeironomecad')[0].value);
    cliente.setSobrenome(document.getElementsByName('sobrenomecad')[0].value);
    cliente.setEmail(document.getElementsByName('emailcad')[0].value);
    cliente.setCep(document.getElementsByName('cepcad')[0].value);
    cliente.setTelefone(document.getElementsByName('telcad')[0].value);
    cliente.setSenha(document.getElementsByName('senhacad')[0].value);
    cliente.setCsenha(document.getElementsByName('confirmasenhacad')[0].value);
    x.push(cliente);
    localStorage.setItem("clientes",JSON.stringify(x));
    x = localStorage.getItem("clientes");
    var x = JSON.parse(x);
    alert("Registrado com Sucesso");
    var xy=localStorage.getItem("clientes");
    var xy= JSON.parse(xy);
    for (var i = 0; i < xy.length; i++) {
      console.log(xy[i]);
    }
    eslogin();
    return false;
  }

}
