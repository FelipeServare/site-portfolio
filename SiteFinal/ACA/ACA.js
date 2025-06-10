function calcularIdade() {



    var entrada_dia = parseInt(document.getElementById('entrada_dia').value);
    var entrada_mes = parseInt(document.getElementById('entrada_mes').value);
    var entrada_ano = parseInt(document.getElementById('entrada_ano').value);
    
    
    
    if (isNaN(entrada_dia) || entrada_dia <= 0) {
    document.getElementById('span_alert_dia').innerHTML = "Esse campo é necessário";
    return;
    } else {
    document.getElementById('span_alert_dia').innerHTML = "";
    }
    
    if (isNaN(entrada_mes) || entrada_mes <= 0) {
    document.getElementById('span_alert_mes').innerHTML = "Esse campo é necessário";
    return;
    } else {
    document.getElementById('span_alert_mes').innerHTML = "";
    }
    
    if (isNaN(entrada_ano) || entrada_ano <= 0) {
    document.getElementById('span_alert_ano').innerHTML = "Esse campo é necessário";
    return;
    } else {
    document.getElementById('span_alert_ano').innerHTML = "";
    }
    
    
    
    
    
    var hoje = new Date();
    var nascimento = new Date(entrada_ano, entrada_mes - 1, entrada_dia); // Month is 0-indexed
    
    var diferenca = hoje - nascimento;
    
    var anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    var meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    var dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
    
    
    
    
    document.getElementById('calculo_anos').innerHTML = anos;
    document.getElementById('calculo_meses').innerHTML = meses;
    document.getElementById('calculo_dias').innerHTML = dias;
    }