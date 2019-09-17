function operacoes(){
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;

    document.getElementById('soma').innerText=(Number(x) + Number(y));
    document.getElementById('sub').innerText=(x - y);
    document.getElementById('mult').innerText=(x * y);
    document.getElementById('div').innerText=(x / y);

}