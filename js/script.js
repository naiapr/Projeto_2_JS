//função para adicionar 2 casas decimais ao numero
function add_left_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

window.setInterval(function(){

    //pegou a data de hj em epoch
    var dataHoje = new Date().getTime();
    //data do cronometro
    var dataProxima = new Date("01/14/2023").getTime();
    //subtraindo as datas
    var contador = dataProxima - dataHoje;
    //convertendo os valores
    var dias = Math.floor(contador/(1000*60*60*24));
    var horas = Math.floor(contador % (1000*60*60*24))/(1000*60*60);
    var minutos = Math.floor(contador % (1000*60*60))/(1000*60);
    var segundos=  Math.floor(contador % (1000*60))/(1000);
    
    //jogando no html
    document.getElementById("days").innerHTML = add_left_zero(Math.floor(dias));
    document.getElementById("hours").innerHTML = add_left_zero(Math.floor(horas));
    document.getElementById("minutes").innerHTML = add_left_zero(Math.floor(minutos));
    document.getElementById("seconds").innerHTML = add_left_zero(Math.floor(segundos));

},1000);
