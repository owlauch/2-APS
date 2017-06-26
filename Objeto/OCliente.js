function Cliente (nomep, sobrenomep,emailp,telefonep,cepp,senhap,csenhap) {
  this.nome=nomep;
  this.sobrenome=sobrenomep;
  this.email=emailp;
  this.cep=cepp;
  this.telefone=telefonep;
  this.senha=senhap;
  this.csenha=csenhap;

  this.getNome=function() {
    return this.nome;
  };
  this.getSobrenome=function () {
    return this.sobrenome;
  };
  this.getEmail=function () {
    return this.email;
  };
  this.getCep=function () {
    return this.cep;
  };
  this.getTelefone=function () {
    return this.telefone;
  };
  this.getSenha=function () {
    return this.senha;
  };
  this.getCsenha=function () {
    return this.csenha;
  };
  this.setNome=function(valor) {
    this.nome=valor;
  };
  this.setSobrenome=function (valor) {
    this.sobrenome=valor;
  };
  this.setEmail=function (valor) {
    this.email=valor;
  };
  this.setCep=function (valor) {
    this.cep=valor;
  };
  this.setTelefone=function (valor) {
    this.telefone=valor;
  };
  this.setSenha=function (valor) {
    this.senha=valor;
  };
  this.setCsenha=function (valor) {
    this.csenha=valor;
  };
};
