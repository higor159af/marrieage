
const vermelho = document.getElementById("nao")

  vermelho.addEventListener('mouseenter', () =>{
      vermelho.style.top = Math.floor(Math.random() *  350) - 90 + 'px'
      vermelho.style.left = Math.floor(Math.random() * 700) - 200 +'px'
})


/* cursor entrar no elemento */
function aceitar() {
  let verde = document.getElementById("corpo");

  verde.style.boxShadow = "0px 0px 10px 3px #00fa36";
  verde.style.transition = "1s";
}

/* cursor sair do elemento */
function sair() {
  let verde = document.getElementById("corpo");

  verde.style.boxShadow = "none";
  verde.style.transition = "1s";
}



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

