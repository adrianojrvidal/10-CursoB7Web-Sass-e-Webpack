// Importando o Jquery
import $ from 'jquery';

// Importando o SASS
import './css/teste.scss';

// importando a Classe Botao
import Botao from './components/botao/index';



$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert('Clicou!');
    });

    //Adicionando no HTML
    $('.area').html(botao.render());

})