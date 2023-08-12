const button = document.getElementById('start');

let fotos {
    1: document.getElementById('ft1'),
    2: document.getElementById('ft2'),
    3: document.getElementById('ft3'),
    4: document.getElementById('ft4'),
    5: document.getElementById('ft5'),
    6: document.getElementById('ft6')
} 
function handleClick(){
    


}
// =============== função para sortear o numero dos dados =================
function rodarDados(){
    return Math.floor(Math.random()) * (6-1)+1
}

// =================== função para retornar uma lista com os numeros sorteados da maquina ========================
function playMachine(){
    let infoDados = [];
    for(let i =0;i < 3;i++){
        
        infoDados.push(rodarDados());
    } 
    return infoDados;

}
// =================== função para retornar uma lista com os numeros sorteados da pessoa ========================
function playPessoa(){
    let infoDados = [];
    for(let i =0;i < 3;i++){
        infoDadosP.push(rodarDados());
    } 
    return infoDados;
}

// ==================== função para somar =============================
function somaD(infoDados){
    let soma=0;
    for(let i =0;i < 3;i++){
        soma = soma+infoDados[i]
    }
    return soma;
}
// ======================= função para ver o ganhador ===================
function vencedor(soma,soma2){
    if(somaD(somaD(playPessoa())) > somaD(somaD(playMachine()))){
        alert("Você Perdeu !!!")
    }
   else if ( somaD(somaD(playPessoa())) < somaD(somaD(playMachine()))){
        alert("Você GANHO !!")
    }
    else{
        alert('EMPATE!!!')
    }

}

button.onclick = () => handleClick();