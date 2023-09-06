function calcular() {
    var txtv = window.document.querySelector(`input#txtvel`)
    var res = window.document.querySelector(`div#res`)
    var vel = Number(txtv.value)
    res.innerHTML = `<p>A velocidade do seu carro é ${vel}Km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você ultrapassou a velocidade permitida. MULTADO! </p>`
    }
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança! </p>`
}
