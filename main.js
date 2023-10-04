const inputNumero = document.getElementById('numero-contato');
const inputContato = document.getElementById('nome-contato');
const form = document.getElementById('form-tabela');
const contato = [];
const numero = [];
let nomeValido = false;
let numeroValido = false;

let linhas = '';

function validaNome(nomeCompleto) {                //adicionei isso para que tenha o nome completo
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    validaInput()
});

function validaInput(){
    if(nomeValido){
        adicionaLinha();
        atualizaContato();

    }
    else{
        inputContato.style.border = '1px solid red';
        document.querySelector('.mensagem-nome').style.display = 'block';
    }

}
function adicionaLinha(){
    const numeroValue = inputNumero.value.replace(/\D/g, ''); // adicionei isso para que o número seja limitado a 11 digitos (xx) xxxxx-xxxx

    if (numeroValue.length !== 11) {
        numeroValido = false
        document.querySelector('.mensagem-numero').style.display = 'block';
        return;
    }
    if (numero.includes(numeroValue)) {
        alert(`O número de telefone ${numeroValue} já existe`);

    }

    else{
        numeroValido = true;
        document.querySelector('.mensagem-numero').style.display = 'none';

        contato.push(inputContato.value);
        numero.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputContato.value}</td>`;
        linha += `<td>${inputNumero.value }</td>`;
        linha += '</tr>';

        linhas += linha;
        
    }
    inputContato.value = '';
    inputNumero.value = '';
}

function atualizaContato(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validaNumero(input) { 
    input.value = input.value.replace(/\D/g, '');

}
inputContato.addEventListener('keyup', function(e){
    console.log(e.target.value);
    nomeValido = validaNome(e.target.value);

    if(!nomeValido){
        inputContato.style.border = '1px solid red';
        document.querySelector('.mensagem-nome').style.display = 'block';
    }
    else{
        inputContato.style = '';
        document.querySelector('.mensagem-nome').style.display = 'none';
    }
})
inputNumero.addEventListener('keyup', function(e){
    console.log(e.target.value);
    const numeroValue = e.target.value.replace(/\D/g, '');
    
    if (numeroValue.length !== 11) {
        numeroValido = false;
        document.querySelector('.mensagem-numero').style.display = 'block';
    }
    else {
        numeroValido = true;
        document.querySelector('.mensagem-numero').style.display = 'none';
    }
});