let inputAdults = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular(){
let adultos = inputAdults.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;
    let qtdTotalCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao)/2);
    let qtdTotalCvj = adultos * cvjPP(duracao); 
    let qtdTotalBebida = adultos * bebidaPP(duracao) + (criancas * bebidaPP(duracao)/2);

resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`
resultado.innerHTML += `<p>${Math.ceil(qtdTotalCvj/350)} Latas de Cerveja</p>`
resultado.innerHTML += `<p>${qtdTotalBebida/1000}l de Bebida</p>`


}

function carnePP(duracao){
    if(duracao >= 6){return 650;}else{return 400;}
}

function bebidaPP(duracao){
    if(duracao >= 6){return 1500;}else{return 1000;}
}


function cvjPP(duracao){
    if(duracao >= 6){return 2000;}else{return 1200;}}
