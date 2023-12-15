function insert(number){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + number;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor.substring(0, valor.length -1);
}

function calcular(){
    var valor = document.getElementById('resultado').innerHTML;
    if(valor){
        document.getElementById('resultado').innerHTML = eval(valor);
    } 
}