function Cliente (nomep, sobrenomep,emailp,telefonep,cepp,senhap) {
  this.nome=nomep;
  this.sobrenome=sobrenomep;
  this.email=emailp;
  this.cep=cepp;
  this.telefone=telefonep;
  this.senha=senhap;
    this.getNome=function() {
      return this.nome;
    };
    this.getSobrenome=function () {
      return this.sobrenome;
    };
    this.getEmail=function () {
      return this.email;
    };
    this.getcep=function () {
      return this.cep;
    };
    this.gettelefone=function () {
      return this.telefone;
    };
    this.getsenha=function () {
      return this.senha;
    };
    this.setNome=function(valor) {
      this.nome=valor;
    };
    this.setsobrenome=function (valor) {
      this.sobrenome=valor;
    };
    this.setemail=function (valor) {
      this.email=valor;
    };
    this.setcep=function (valor) {
      this.cep=valor;
    };
    this.settelefone=function (valor) {
      this.telefone=valor;
    };
    this.setsenha=function (valor) {
      this.senha=valor;
    };
};
