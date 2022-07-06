class ControlaBola {
    constructor() {
        this.ligar = document.querySelector('.ligar');
        this.circulo = document.querySelector('.circulo');
        this.desligar = document.querySelector('.desligar');
        this.i = null;

    }

    evento() {
        this.ligar.addEventListener('click', () => {
            this.movaBola();
        })
        this.desligar.addEventListener('click', () => {
            clearInterval(this.i)
        })
    }


    movaBola() {
        const circulo = this.circulo;
        let estado = 'descendo';
        let posicao = 0;
        this.i = setInterval(emMovimento, 10)
        function emMovimento() {
            if(estado == 'descendo') {
                posicao++;
                circulo.style.marginTop = `${posicao}px`;
                if(posicao == 250) estado = 'subindo';

            } else if (estado == 'subindo') {
                posicao--;
                circulo.style.marginTop = `${posicao}px`;
                if(posicao == 0) estado = 'descendo';
            }   
        }
    }
}

const controla = new ControlaBola();
controla.evento();