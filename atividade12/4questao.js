// A Copa do Mundo ocorre de 4 em 4 anos, desde 1930, exceto nos anos de 1942
// e 1946 (Segunda Guerra Mundial). Construir um programa que repita a leitura de
// números (anos) até ser digitado 0. Informe para cada ano se ele é ou não ano
// de Copa do Mundo.

let anos_da_copa = []
for (let index = 1930; index <= 2022; index = index+4) {
    console.log(index)
    if (index !== 1942 || index !== 1946) {
        anos_da_copa.push(index);
    }        
}
console.log(anos_da_copa)

function verificar_ano_da_copa(){
    let ano_da_copa = document.getElementById('ano_copa').value
    if (ano_da_copa == 0) {
        document.getElementById('ano_copa').remove()
    }
    else{
        let ano_valido = "inválido";
        anos_da_copa.forEach(element => {
            if (element == ano_da_copa) {
                ano_valido = "válido"
            }
        });
        document.getElementById('resposta').innerHTML += `<p> ${ano_da_copa} é um ano ${ano_valido}! </p>`

    }
}

var mostrar = document.getElementById('mostrar')
mostrar.addEventListener('click', verificar_ano_da_copa)

