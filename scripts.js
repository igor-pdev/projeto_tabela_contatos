document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('form-contato');
    const tabelaContatos = document.getElementById('tabela-contatos').getElementsByTagName('tbody')[0];

    formContato.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;

        // Criar uma nova linha na tabela
        const novaLinha = tabelaContatos.insertRow();
        const colunaNome = novaLinha.insertCell(0);
        const colunaTelefone = novaLinha.insertCell(1);

        // Inserir os valores nas células da nova linha
        colunaNome.textContent = nome;
        colunaTelefone.textContent = telefone;

        // Limpar os campos do formulário após adicionar o contato
        formContato.reset();
    });
});
