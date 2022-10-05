// Elaborar um programa para uma loja que leia o valor de uma conta e o número
// de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê). Para
// facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou
// seja, centavos apenas na última parcela. Informe como resposta o valor de cada
// parcela, considerando essa situação.


function resposta(){
    let valor_conta = document.getElementById('valor_conta').value;
    let numero_de_parcelas = document.getElementById('numero_de_parcelas').value;

    if (valor_conta == 0) {
        document.getElementById('valor_conta').remove();
        document.getElementById('numero_de_parcelas').remove();
    }
    else{
        valor_conta = parseFloat(valor_conta);
        numero_de_parcelas = parseInt(numero_de_parcelas);
        let valor_da_parcela = valor_conta / numero_de_parcelas;
        valor_da_parcela = valor_da_parcela.toFixed(0);
        let verificar_diferenca = valor_da_parcela * numero_de_parcelas;
        let valor_da_ultima_parcela = parseFloat(valor_conta - verificar_diferenca) + parseFloat(valor_da_parcela);

        if (valor_da_ultima_parcela == 0) {
            document.getElementById('resposta').innerHTML += `<p> Valor da compra: ${valor_conta} </p>`;
            for (let index = 1; index < numero_de_parcelas; index++) {
                document.getElementById('resposta').innerHTML += `<p> Valor da parcela comum: ${valor_da_parcela} </p>`;
            }
            document.getElementById('resposta').innerHTML += `<p> Valor da última parcela nº=${numero_de_parcelas}: ${valor_da_parcela} </p>`;
            document.getElementById('resposta').innerHTML += `<p>  </p>`;
        }
        else {
            document.getElementById('resposta').innerHTML += `<p> Valor da compra: ${valor_conta} </p>`;
            for (let index = 1; index < numero_de_parcelas; index++) {
                document.getElementById('resposta').innerHTML += `<p> Valor da parcela ${index}: ${valor_da_parcela} </p>`;
            }
            document.getElementById('resposta').innerHTML += `<p> Valor da última parcela nº=${numero_de_parcelas}: ${valor_da_ultima_parcela} </p>`;
            document.getElementById('resposta').innerHTML += `<p>  </p>`;
        }
    }
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', resposta)

