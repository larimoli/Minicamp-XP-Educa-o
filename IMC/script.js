function start() {
    var botao = document.querySelector ('#botao');
    botao.addEventListener('click', botaoCalcular);
}

function calcular(peso, altura) {
    var resultado = document.querySelector('#imc');
    var IMC = peso / (altura * altura);
    var floatRedondo = IMC.toFixed(2);
    calcularFaixa(floatRedondo);
    return resultado.innerHTML = floatRedondo;
}

function botaoCalcular() {
    var inputPeso = document.querySelector('#peso');
    var inputAltura = document.querySelector('#altura');

    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);

    return calcular(peso, altura)
}

function calcularFaixa(IMC) {
    var resulfaixa = document.querySelector('#faixa-nivel');
    if (IMC < 16 ){
        return resulfaixa.innerHTML = 'Inválido'
    }
    if (IMC <= 16.9 ){
        return resulfaixa.innerHTML = 'Muito abaixo do peso'
    }
    if (IMC <= 18.4 ){
        return resulfaixa.innerHTML = 'Abaixo do peso'
    }
    if (IMC <= 24.9 ){
        return resulfaixa.innerHTML = 'Peso normal'
    }
    if (IMC <= 29.9 ){
        return resulfaixa.innerHTML = 'Acima do peso'
    }
    if (IMC <= 34.9 ){
        return resulfaixa.innerHTML = 'Obesidade grau I'
    }
    if (IMC <= 40 ){
        return resulfaixa.innerHTML = 'Obesidade grau II'
    }
    if (IMC > 40 ){
        return resulfaixa.innerHTML = 'Obesidade grau III'
    }
}

start()