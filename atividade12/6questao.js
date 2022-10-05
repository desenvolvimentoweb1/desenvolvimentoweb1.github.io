// Elaborar um programa  que leia um número e verifique se ele é ou não perfeito. 
// Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros 
// (exceto  o  próprio  número).  O  programa  deve  exibir  os  divisores  do  número  e  a 
// soma deles.


function resposta(){
    let numero = document.getElementById('numero').value;
    if (numero == 0) {
        document.getElementById('numero').remove();
    }
    else{
        numero = parseFloat(numero);
        document.getElementById('resposta').innerHTML += `<p> Avaliando número: ${numero} </p>`;
        let soma = 0;
        for (let index = numero-1; index > 0; index--) {
            if (numero % index == 0) {
                soma += index;
                document.getElementById('resposta').innerHTML += `<p> Divisores: ${index} </p>`;
            }
            
        }
        document.getElementById('resposta').innerHTML += `<p> Soma dos divisores: ${soma} </p>`;
        if (soma == numero) {
            document.getElementById('resposta').innerHTML += `<p> O número é perfeito </p>`;
        }
        else {
            document.getElementById('resposta').innerHTML += `<p> O número não é perfeito </p>`;
        }
    }
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', resposta)

