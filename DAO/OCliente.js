function cliente(nome,sobrenome,email,cep,telefone,senha) {
  this.nome:nome;
  this.sobrenome:sobrenome;
  this.email:email;
  this.cep:cep;
  this.telefone:telefone;
  this.senha:senha;

  this.getNome=function() {
    return nome;
  }
  this.getsobrenome=function () {
    return sobrenome;
  }
  this.getemail=function () {
    return email;
  }
  this.getcep=function () {
    return cep;
  }
  this.gettelefone=function () {
    return telefone;
  }
  this.getsenha=function () {
    return senha;
  }
  this.setNome=function(valor) {
    nome=valor;
  }
  this.setsobrenome=function (valor) {
    sobrenome=valor;
  }
  this.setemail=function (valor) {
    email=valor;
  }
  this.setcep=function (valor) {
    cep=valor;
  }
  this.settelefone=function (valor) {
    telefone=valor;
  }
  this.setsenha=function (valor) {
    senha=valor;
  }
}
