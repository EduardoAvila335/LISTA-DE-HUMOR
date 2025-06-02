let humor = document.getElementById('humor');
let textarea = document.getElementById('textarea');
let enviar = document.getElementById('enviar');
let ul = document.getElementById('ul');
let hoje = new Date();

let historico = JSON.parse(localStorage.getItem('historico')) || [];






enviar.addEventListener('click', () => {
    let textareavalor = textarea.value.trim();
    let humorvalor = humor.value;
    let li = document.createElement('li');

    if(textareavalor === ''){
    alert('⚠️Digite por favor alguma coisa!!');
    return;
}

    let itens = {
    humor: humorvalor,
    texto: textareavalor,
    data: new Date().toLocaleDateString()    
    };

    historico.push(itens);

    localStorage.setItem('historico', JSON.stringify(historico));

    ul.appendChild(li)
    li.textContent = itens.data + itens.humor + ':'
     + itens.texto;

     document.getElementById('textarea').value = '';
})


textarea.addEventListener('keydown', function(evento){
    if(evento.key === 'Enter'){
        enviar.click();
    }
})


function recarregar(){
    historico.forEach(function(valor){
    let li = document.createElement('li');
    ul.appendChild(li)
    li.textContent = valor.data + valor.humor + ':'
     + valor.texto;
     document.getElementById('textarea').value = '';
    });
};

window.onload = recarregar;



