// Importando o CSS do próprio componente, no caso 'Botao'
import './style.css';


// Criando uma classe que molda o componente
class Botao {

    constructor() {
        this.title = '';

    }

    setTitle(t) {
        this.title = t;
    }

    setClick(f) {
        this.callback = f;
    }

    render() {
        let b = document.createElement('button');
        b.classList.add('botao');
        b.innerHTML = this.title;
        b.addEventListener('click', this.callback);

        return b;
    }

}

// Exportando a Classe criada
export default Botao;