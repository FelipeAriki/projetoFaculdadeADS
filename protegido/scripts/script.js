document.querySelector("#btnVoltar").addEventListener("click", ()=>{
    history.back();
});

window.onload = ()=>{
    obterClientes();
}
function obterClientes(){
    fetch('https://129.146.68.51/aluno25-ppiadsead/clientes', {method: 'GET'})
    .then((res)=>{
        if(res.status === 200){
            return res.json();
        }
        else{
            return [];
        }
    })
    .then((listaClientes)=>{
        mostrarClientes(listaClientes);
    })
    .catch((err)=>{
        console.log(err);
    });
}
function mostrarClientes(listaClientes){
    let elementoDivTabela = document.querySelector("#espacoTabela");
    if(listaClientes.length > 0){
        //Limpar o elemento divTabela
        elementoDivTabela.innerHTML = '';
        let tabela          = document.createElement('table');
        tabela.className = 'table table-striped table-hover';
        let cabecalhoTabela = document.createElement('thead');
        let corpoTabela     = document.createElement('tbody')

        cabecalhoTabela.innerHTML = `<tr>
                                        <th>CPF</th>
                                        <th>Nome</th>
                                        <th>Sobrenome</th>
                                        <th>Endereco</th>
                                        <th>Bairro</th>
                                        <th>Cidade</th>
                                        <th>Estado</th>
                                        <th>Telefone</th>
                                        <th>E-mail</th>
                                    </tr>`;
        tabela.appendChild(cabecalhoTabela);

        for(const cliente of listaClientes){
            let linhaTabela = document.createElement('tr');
            linhaTabela.innerHTML = `<td>${cliente.cpf}</td>
                                    <td>${cliente.nome}</td>
                                    <td>${cliente.sobrenome}</td>
                                    <td>${cliente.endereco}</td>
                                    <td>${cliente.bairro}</td>
                                    <td>${cliente.cidade}</td>
                                    <td>${cliente.uf}</td>
                                    <td>${cliente.telefone}</td>
                                    <td>${cliente.email}</td>`;
            corpoTabela.appendChild(linhaTabela);
        }
        tabela.appendChild(corpoTabela);
        elementoDivTabela.appendChild(tabela);
    }
    else{
        elementoDivTabela.innerHTML = `<div class="alert alert-warning" role="alert">Nenhum Cliente Cadastrado!</div>`;
    }
}