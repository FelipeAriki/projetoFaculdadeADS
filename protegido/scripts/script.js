const form = document.getElementById('formCliente');
window.onload = ()=>{
    obterClientes();
}
//Evento nos botões
document.querySelector("#btnCadastrar").addEventListener("click", ()=>{    
    if(form.checkValidity()){
        const cliente = obterClienteFormulario();
        cadastrarCliente(cliente);
        limparFormulario();
    }
    else
        form.classList.add('was-validated');
});

document.querySelector("#btnVoltar").addEventListener("click", ()=>{
    history.back();
});

document.querySelector("#btnEditar").addEventListener("click", ()=>{
    alert("Editando o cliente...")
});
document.querySelector("#btnExcluir").addEventListener("click", ()=>{
    alert("Excluindo o cliente...")
});
//Funções
function limparFormulario(){
    document.querySelector("#cpf").value = '';
    document.querySelector("#nome").value = '';
    document.querySelector("#sobrenome").value = '';
    document.querySelector("#endereco").value = '';
    document.querySelector("#bairro").value = '';
    document.querySelector("#cidade").value = '';
    document.querySelector("#uf").value = '';
    document.querySelector("#telefone").value = '';
    document.querySelector("#email").value = '';
    form.classList.remove('was-validated');
}
function obterClienteFormulario(){
    let cpf = document.querySelector("#cpf").value;
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;
    let endereco = document.querySelector("#endereco").value;
    let bairro = document.querySelector("#bairro").value;
    let cidade = document.querySelector("#cidade").value;
    let uf = document.querySelector("#uf").value;
    let telefone = document.querySelector("#telefone").value;
    let email = document.querySelector("#email").value;

    if(cpf && nome && sobrenome && endereco && bairro && cidade && uf && telefone && email)
    {
        return{
            cpf: cpf,
            nome: nome,
            sobrenome: sobrenome,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            telefone: telefone,
            email: email
        }
    }
    else
        return undefined;
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
    .catch((error)=>{
        mostrarMensagem('Não foi possível obter os clientes. Erro: ' + error.message, 'danger');
    });
}
function cadastrarCliente(cliente){
    fetch('https://129.146.68.51/aluno25-ppiadsead/clientes',
    {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then((res)=>{
        if(res.status === 200)
            return res.json();
        else{
            return{
                status:false,
                mensagem:"Oops, Não foi possível realizar o cadastro do cliente!"
            }
        }
    })
    .then((respostaBackend)=>{
        let flag = '';
        if(respostaBackend.status){
            flag = 'success';
            obterClientes();
        }            
        else
            flag = 'danger';

        mostrarMensagem(respostaBackend.mensagem, flag);
    })
    .catch((error)=>{
        mostrarMensagem('Não foi possível realizar o cadastro do cliente. Erro: ' + error.message, 'danger');
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
                                        <th>Ações</th>
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
                                    <td>${cliente.email}</td>
                                    <td><button type="button" id="btnEditar">Editar</button></td>
                                    <td><button type="button" id="btnExcluir">Excluir</button></td>`;
            corpoTabela.appendChild(linhaTabela);
        }
        tabela.appendChild(corpoTabela);
        elementoDivTabela.appendChild(tabela);
    }
    else{
        elementoDivTabela.innerHTML = `<div class="alert alert-warning" role="alert">Nenhum Cliente Cadastrado!</div>`;
    }
}

function mostrarMensagem(mensagem, tipo){
    let divMensagem = document.querySelector("#mensagem");
    divMensagem.innerHTML = `<div class="alert alert-${tipo}" role="alert">${mensagem}</div>`;
    setTimeout(() => {
        divMensagem.innerHTML = '';
    }, 5000);
}