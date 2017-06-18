
var menuhide=false;

function retiramenuesquerdo() {
  if (menuhide) {
    $("#menuesquerdo").animate({'left':0},1000,function () {});
    menuhide=false;
  }
  else {
    $("#menuesquerdo").animate({'left':'-100%'},1000,function () {});
    menuhide=true;
  }
}
// anima(escentroid);

function anima(func) {
  $(".conteudocentro").css('position','relative');
  $(".conteudocentro").animate({'right':'-100%'},1000,function () {
    func.call();
    $(".conteudocentro").css('position','relative');
    $(".conteudocentro").css('right','-110%');
  $(".conteudocentro").animate({'right':0},1000,function () {
  });
  });
}
