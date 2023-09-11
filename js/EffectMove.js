const vermelho = document.getElementById("nao")
let EffectMove= () =>{
    vermelho.style.top = Math.floor(Math.random() *  350) - 90 + 'px'
    vermelho.style.left = Math.floor(Math.random() * 700) - 200 +'px'   
}

export {EffectMove}
