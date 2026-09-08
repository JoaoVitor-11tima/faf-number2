function calcularValor() {  
    const inputCodigo = document.getElementById("codigo");
    const inputQuantidade = document.getElementById("quantidade");
    const paragrafoResultado = document.getElementById("resultado");

    let codigo = Number(inputCodigo.value);
    let quantidade = Number(inputQuantidade.value);

    let preco;

    if (codigo == 1) {
        preco = 5.00;
    } else if (codigo == 2) {
        preco = 3.50;
    } else if (codigo == 3) {
        preco = 4.80;
    } else if (codigo == 4) {
        preco = 8.90;
    } else if (codigo == 5) {
        preco = 7.32;
    }

    let total = preco * quantidade;

    paragrafoResultado.textContent = "VALOR A PAGAR: R$ " + total.toFixed(2);
}