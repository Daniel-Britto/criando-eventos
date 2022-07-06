const interruptor = document.querySelector('.interruptor');
let lampada = document.querySelector('.lampada');
let estado = false;


interruptor.addEventListener('click', () => {

    if(!estado) {
        acendeLampada();
    } else if (estado) {
        apagaLampada();
    }
});

function acendeLampada() {
    lampada.src = "assets/img/luz-Acesa.jpg"
    interruptor.src = "assets/img/interruptor-aceso.jpg"
    estado = true
}

function apagaLampada() {
    lampada.src = "assets/img/luz-apagada.jpg"
    interruptor.src = "assets/img/interruptor-apagado.jpg"
    estado = false;
}

