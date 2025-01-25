const form = document.getElementById('form-agenda');
const pessoas = [];
const numeros = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    adicionaLinha();
    atualizarLinha()
    
})

function adicionaLinha (){
    const inputNomePessoa = document.getElementById('nome');
    const inputTelefonePessoa = document.getElementById('contato');

    if(pessoas.includes(inputNomePessoa.value)){
        alert(`Nome: ${inputNomePessoa.value} já foi inserido`);
    } else if(numeros.includes(Number(inputTelefonePessoa.value))){
        alert(`Telefone: ${inputTelefonePessoa.value} já foi inserido`);
    } else {
        pessoas.push(inputNomePessoa.value);
        numeros.push(Number(inputTelefonePessoa.value));

        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputTelefonePessoa.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNomePessoa.value ='';
    inputTelefonePessoa.value='';
}

function atualizarLinha(){
    corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}