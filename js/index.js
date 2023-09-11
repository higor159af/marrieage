import { EffectMove } from "./EffectMove.js";
import { sair } from "./buttonLightNone.js";
import { aceitar } from "./buttonLigthGreen.js";

const vermelho = document.getElementById("nao")

vermelho.addEventListener('mouseenter', EffectMove)
console.log(innerHeight)

/* cursor entrar e sair do elemento */
  let green = document.getElementById("sim");
  green.addEventListener('mouseenter', aceitar)
  green.addEventListener('mouseout', sair)


// texto animado
const el = document.querySelector("#Text");
const text = "Cindy, você quer casar Comigo..? ❤";
const interval = 250;

function showText(el, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer)
        }

        const next = char.pop()

        el.innerHTML += next

    }, interval)
}

showText(el, text, interval);

