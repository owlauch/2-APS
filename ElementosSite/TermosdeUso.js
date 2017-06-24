var estermo= function() {
  var $xy=document.querySelector('.conteudo_central'),
  t='<div class="conteudocentro">',
  t=t+'<h1>Termos de Uso</h1>',
  t=t+'<p>Ao contratar os nossos serviços, você estará aceitando os seguintes termos de uso:',
  t=t+'Primeiro: Depois da confirmação do pagamento, o contratante tem o',
  t=t+'período de três dias úteis para solicitar o cancelamento do mesmo',
  t=t+'e receber o total reembolso, após este tempo, será cobrado 50% do',
  t=t+'valor do contrato como multa pelo cancelamento.',
  t=t+'Segundo: Em caso de danos aos equipamentos após o empréstimo, será',
  t=t+'cobrado o valor do concerto do mesmo.',
  t=t+'</p>',
  t=t+'</div>'
  $xy.innerHTML=t;
};
