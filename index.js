function set_nome_operacao() {
    //pega a operação
    const operacao = document.getElementById('operador').value;
    // // // //muda o titulo// // // //
    //se     for igual à ''
    if (operacao === 'soma') {
        document.getElementById('nome-operacao').innerHTML = "SOMA"
    }
    if (operacao === 'subt') {
        document.getElementById('nome-operacao').innerHTML = "SUBTRAÇÃO"
    }
    if (operacao === 'multi') {
        document.getElementById('nome-operacao').innerHTML = "MULTIPLICAÇAO"
    }
    if (operacao === 'divi') {
        document.getElementById('nome-operacao').innerHTML = "DIVISÃO"
    }
    if (operacao === 'expo') {
        document.getElementById('nome-operacao').innerHTML = "POTENCIAÇÂO"
    }
    if (operacao === 'fato') {
        document.getElementById('nome-operacao').innerHTML = "FATORAÇÂO"
    }
    if (operacao === 'raiz') {
        document.getElementById('nome-operacao').innerHTML = "RAIZ QUADRADA"
    }
    
} 

function calcula() {
    //pega numero x
    const numero_x = Number (document.getElementById('numero-x').value);
     //pega numero y
    const numero_y= Number (document.getElementById('numero-y').value);
     //pega a operação
    const operacao = document.getElementById('operador').value;

    let resultado= 0;
    if (operacao === 'soma') resultado = numero_x + numero_y;
    if (operacao === 'subt') resultado = numero_x - numero_y;
    if (operacao === 'multi') resultado = numero_x * numero_y;
    if (operacao === 'divi') resultado = numero_x / numero_y;
    if (operacao === 'expo') resultado = Math.pow(numero_x, numero_y);
    if (operacao === 'fato') resultado = fatorial(numero_x);
    if (operacao === 'raiz') resultado = Math.sqrt(numero_x);

    document.getElementById('resultado').innerHTML = resultado;
}

function fatorial(numero) {
    let multiplicador = numero - 1;
    while(multiplicador >=2){
        numero = numero * multiplicador;
        multiplicador = multiplicador - 1;
    }
    return numero;
}