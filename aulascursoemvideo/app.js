// Definindo a classe Despacho
class Despacho {
    constructor(id, data, destinatario, status, conteudo, assunto) {
        this.id = id;
        this.data = data;
        this.destinatario = destinatario;
        this.status = status;
        this.conteudo = conteudo;
        this.assunto = assunto;
    }

    atualizarStatus(novoStatus) {
        this.status = novoStatus;
        console.log(`Status do despacho ${this.id} atualizado para: ${this.status}`);
    }

    obterDetalhes() {
        return `ID: ${this.id}, Data: ${this.data}, Destinatário: ${this.destinatario}, Status: ${this.status}, Assunto: ${this.assunto}, Conteúdo: ${this.conteudo}`;
    }
}

// Coleção de despachos
let despachos = [];

// Manipulação do DOM
document.getElementById('despachoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os valores dos inputs
    const id = document.getElementById('id').value;
    const data = document.getElementById('data').value;
    const destinatario = document.getElementById('destinatario').value;
    const status = document.getElementById('status').value;
    const assunto = document.getElementById('assunto').value;
    const conteudo = document.getElementById('conteudo').value;

    // Criando um novo objeto Despacho
    const novoDespacho = new Despacho(id, data, destinatario, status, conteudo, assunto);

    // Adicionando o despacho à coleção
    despachos.push(novoDespacho);

    // Atualizando a lista de despachos na interface
    atualizarListaDespachos();

    // Limpando o formulário
    document.getElementById('despachoForm').reset();
});

// Função para atualizar a lista de despachos exibida
function atualizarListaDespachos() {
    const listaDespachos = document.getElementById('listaDespachos');
    listaDespachos.innerHTML = '';

    despachos.forEach(despacho => {
        const li = document.createElement('li');
        li.textContent = despacho.obterDetalhes();
        listaDespachos.appendChild(li);
    });
}
