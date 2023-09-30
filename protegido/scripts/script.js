document.querySelector("#btnVoltar").addEventListener("click", ()=>{
    history.back();
});
window.onload = ()=>{
    mostrarClientes([]);
}
function mostrarClientes(listaClientes){
    let elementoDivTabela = document.querySelector("#espacoTabela");
    if(listaClientes.length > 0){
        //Limpar o elemento divTabela
        elementoDivTabela.innerHTML = '';
        let tabela          = document.createElement('table');
        let cabecalhoTabela = document.createElement('thead');
        let corpoTabela     = document.createElement('tbody')

        cabecalhoTabela.innerHTML = `<tr>
                                        <th>CPF</th>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Endereco</th>
                                        <th>Bairro</th>
                                        <th>Estado</th>
                                        <th>Telefone</th>
                                        <th>CEP</th>
                                    </tr>`;
        tabela.appendChild(cabecalhoTabela);

        for(const cliente of listaClientes){
            let linhaTabela = document.createElement('tr');
            linhaTabela.innerHTML = `<td>${cliente.cpf}</td>
                                    <td>${cliente.nome}</td>
                                    <td>${cliente.sobrenome}</td>
                                    <td>${cliente.endereco}</td>
                                    <td>${cliente.bairro}</td>
                                    <td>${cliente.estado}</td>
                                    <td>${cliente.telefone}</td>
                                    <td>${cliente.cep}</td>`;
            corpoTabela.appendChild(linhaTabela);
        }
        tabela.appendChild(corpoTabela);
        elementoDivTabela.appendChild(tabela);
    }
    else{
        elementoDivTabela.innerHTML = `<div class="alert alert-warning" role="alert">Nenhum Cliente Cadastrado!</div>`;
    }
}