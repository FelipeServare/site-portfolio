var jogadas = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;

$(document).ready( function(){

    $('#btn_iniciar_jogo').click( function(){

        //valida a digitação dos apelidos dos jogadores
        if($('#entrada_apelido_jogador_1').val() == ''){
            alert('Apelido do jogador 1 não foi preenchido');
            return false;
        }

        if($('#entrada_apelido_jogador_2').val() == ''){
            alert('Apelido do jogador 2 não foi preenchido');
            return false;
        }

        //exibir os apelidos
        $('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());
        $('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());

        //controla a visualização das divs
        $('#pagina_inicial').hide();
        $('#tabuleiro').show();

    });

    $('.jogada').click( function(){

        var id_campo_clicado = this.id;
        $('#'+id_campo_clicado).off();
        clique(id_campo_clicado);
    });

    function clique(id){
        var icone = '';
        var ponto = 0;
        var tamanho_imagem = '100px 100px'

        if((jogadas % 2) == 1){
            icone = 'url("imagens/imagemX.png")';
            ponto = -1;
        } else {
            icone = 'url("imagens/imagemO.png")';
            ponto = 1;
        }
        
        jogadas++;

        $('#'+id).css('background-image', icone);
        $('#'+id).css('background-size', tama);

        var linha_coluna = id.split('-');

        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
    
        verifica_combinacao();

    }
    
    var naoTemVencedor = true;
    
    function verifica_combinacao(){
        //verifica na horizontal
        var pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);
        //verifica na vertical
        for(var l = 1; l <= 3; l++){
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];
            ganhador(pontos);
        }
        //verificar na diagonal
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);
        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);
        
        if(jogadas==10 && naoTemGanhador){
            alert('Empate!');
            $('.jogada').off();
        }

    }


    function ganhador(pontos){
        if(pontos == -3){
            var jogada_1 = $('#entrada_apelido_jogador_1').val();
            alert(jogada_1 + ' é o vencedor');
            naoTemGanhador = false;
            $('.jogada').off();
        
        } else if(pontos == 3){
            var jogada_2 = $('#entrada_apelido_jogador_2').val();
            alert(jogada_2 + ' é o vencedor');
            naoTemGanhador = false;
            $('.jogada').off();
        }
    }



    

});

function start() {
        window.location.reload();
    }