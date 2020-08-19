var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");



$(function(){
     
   /* var itemDaLista = $("<li>");
    var span =  $("<span id='timao'>").text("CORINTHIANS PORRA");
    // adicionar tag pelo jquery e pendurar em um elemento pai 
    var icone = $("<i>").addClass("small").addClass("material-icons").addClass("icones").text("description");
    itemDaLista.append(icone);
    itemDaLista.append(span);
    // addClass adiciona uma class seja no seu estilos.css ou class de alguma biblioteca (bootstrap,materialize)
    $("ul").addClass("informacoes").addClass("center").prepend(itemDaLista); 
    return itemDaLista;*/
    
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();  
    $("#start").click(reiniciaJogo);
    
});

function atualizaTamanhoFrase(){
    var frase = $(".frase").text();
    var numPalavras  = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campo.on("input",function() {
        var conteudo = campo.val();

        var qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}


function inicializaMarcadores(){
    var frase = $(".frase").text();
    campo.on("input",function(){
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length);
        //console.log("digitado : " + digitado);
        //console.log("comparavel c : " + comparavel);
    
        if(digitado == comparavel){
    
          
            campo.addClass("campo-correto");
            campo.removeClass("campo-errado");
    
        }else{
    
            campo.addClass("campo-errado");
            campo.removeClass("campo-correto");
    
        }
        
        
    
    });

}



function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var cronometroID = setInterval(function() {
            $(".material-icons").attr("disabled",true); 
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
               
                clearInterval(cronometroID);
                finalizaJogo();
                
            }
        }, 1000);
    });
}   


function finalizaJogo(){
    campo.attr("disabled", true);
    $("#start").attr("disabled",false);
    campo.toggleClass("campo-desativado"); 
    inserePlacar();
}





function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
    campo.toggleClass("campo-desativado"); 
    campo.attr("placeholder","COMECE  O JOGO AGORA");
    campo.removeClass("campo-correto");
    campo.removeClass("campo-errado");
    
    
}



 




