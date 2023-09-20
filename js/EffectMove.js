const vermelho = document.getElementById("nao");
let EffectMove = () => {
  // vermelho.style.top = Math.floor(Math.random() *  350) - 90 + 'px'
  // vermelho.style.left = Math.floor(Math.random() * 700) - 200 +'px'

  let positionTop = Math.floor(Math.random() * innerHeight) - 100;
  let positionLeft = Math.floor(Math.random() * innerWidth) - 100;

  positionTop = positionTop < 0 ? 0 : positionTop;
  positionLeft = positionLeft < 0 ? 0 : positionLeft;
  vermelho.style.position = 'absolute'
  vermelho.style.top = positionTop + "px";
  vermelho.style.left = positionLeft + "px";
};

export { EffectMove };
