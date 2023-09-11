let num = document.querySelector(`input#fnum`)
let lista = document.querySelector(`input#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n) {
    >= 1 && Number(n) <= 100
    } 

function adicionar() {
    if(isNumero(num.value) &&!inLista(num.value)) {

    } else {
        window.alert(`Valor inválido ou já encontrado na lista!`)
    }
}