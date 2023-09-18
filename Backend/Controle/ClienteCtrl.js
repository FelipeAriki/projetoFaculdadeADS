import Cliente from '../Modelo/Cliente.js';

export default class ClienteCtrl{
    gravar(req, res){
        res.type("application/json");
        if(req.method === "POST" && req.is("application/json")){
            let dados = req.body;
            let cpf = dados.cpf;
            let nome = dados.nome;
            let sobrenome = dados.sobrenome;
            let endereco = dados.endereco;
            let bairro = dados.bairro;
            let cidade = dados.cidade;
            let uf = dados.uf;
            let telefone = dados.telefone;
            let email = dados.email;

            if(nome){
                if(sobrenome){
                    if(cpf){
                        if(endereco){
                            if(bairro){
                                if(cidade){
                                    if(uf){
                                        if(telefone){
                                            if(email){
                                                let cliente = new Cliente(nome, sobrenome, cpf, endereco, bairro, cidade, uf, telefone, email);

                                                cliente.gravar()
                                                .then(()=>{
                                                    res.status(200).json({
                                                        status: true,
                                                        mensagem: "Cliente gravado com Sucesso!"
                                                    });
                                                })
                                                .catch((error)=>{
                                                    res.status(500).json({
                                                        status: false,
                                                        mensagem: error.message
                                                    });
                                                });
                                            }
                                            else{
                                                res.status(400).json({
                                                    status: false,
                                                    mensagem: "Informe adequadamente o email do cliente conforme a documentação da API!"
                                                });
                                            }
                                        }
                                        else{
                                            res.status(400).json({
                                                status: false,
                                                mensagem: "Informe adequadamente o telefone do cliente conforme a documentação da API!"
                                            });
                                        }
                                    }
                                    else{
                                        res.status(400).json({
                                            status: false,
                                            mensagem: "Informe adequadamente o uf do cliente conforme a documentação da API!"
                                        });
                                    }
                                }
                                else{
                                    res.status(400).json({
                                        status: false,
                                        mensagem: "Informe adequadamente o cidade do cliente conforme a documentação da API!"
                                    });
                                }
                            }
                            else{
                                res.status(400).json({
                                    status: false,
                                    mensagem: "Informe adequadamente o bairro do cliente conforme a documentação da API!"
                                });
                            }
                        }
                        else{
                            res.status(400).json({
                                status: false,
                                mensagem: "Informe adequadamente o endereco do cliente conforme a documentação da API!"
                            });
                        }
                    }
                    else{
                        res.status(400).json({
                            status: false,
                            mensagem: "Informe adequadamente o CPF do cliente conforme a documentação da API!"
                        });
                    }
                }
                else{
                    res.status(400).json({
                        status: false,
                        mensagem: "Informe adequadamente o sobrenome do cliente conforme a documentação da API!"
                    });
                }
            }
            else{
                res.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente o nome do cliente conforme a documentação da API!"
                });
            }
        }
        else{
            res.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
    }

    atualizar(req, res){
        res.type("application/json");
        if(req.method === "PUT" && req.is("application/json")){
            let dados = req.body;
            const cpf = dados.cpf;
            let nome = dados.nome;
            let sobrenome = dados.sobrenome;
            let endereco = dados.endereco;
            let bairro = dados.bairro;
            let cidade = dados.cidade;
            let uf = dados.uf;
            let telefone = dados.telefone;
            let email = dados.email;

            if(nome){
                if(sobrenome){
                    if(cpf){
                        if(endereco){
                            if(bairro){
                                if(cidade){
                                    if(uf){
                                        if(telefone){
                                            if(email){
                                                let cliente = new Cliente(nome, sobrenome, cpf, endereco, bairro, cidade, uf, telefone, email);
                                                
                                                cliente.alterar()
                                                .then(()=>{
                                                    res.status(200).json({
                                                        status: true,
                                                        mensagem: "Cliente atualizado com Sucesso!"
                                                    });
                                                })
                                                .catch((error)=>{
                                                    res.status(500).json({
                                                        status: false,
                                                        mensagem: error.message
                                                    });
                                                });
                                            }
                                            else{
                                                res.status(400).json({
                                                    status: false,
                                                    mensagem: "Informe adequadamente o email do cliente conforme a documentação da API!"
                                                });
                                            }
                                        }
                                        else{
                                            res.status(400).json({
                                                status: false,
                                                mensagem: "Informe adequadamente o telefone do cliente conforme a documentação da API!"
                                            });
                                        }
                                    }
                                    else{
                                        res.status(400).json({
                                            status: false,
                                            mensagem: "Informe adequadamente o uf do cliente conforme a documentação da API!"
                                        });
                                    }
                                }
                                else{
                                    res.status(400).json({
                                        status: false,
                                        mensagem: "Informe adequadamente o cidade do cliente conforme a documentação da API!"
                                    });
                                }
                            }
                            else{
                                res.status(400).json({
                                    status: false,
                                    mensagem: "Informe adequadamente o bairro do cliente conforme a documentação da API!"
                                });
                            }
                        }
                        else{
                            res.status(400).json({
                                status: false,
                                mensagem: "Informe adequadamente o endereco do cliente conforme a documentação da API!"
                            });
                        }
                    }
                    else{
                        res.status(400).json({
                            status: false,
                            mensagem: "Informe adequadamente o CPF do cliente conforme a documentação da API!"
                        });
                    }
                }
                else{
                    res.status(400).json({
                        status: false,
                        mensagem: "Informe adequadamente o sobrenome do cliente conforme a documentação da API!"
                    });
                }
            }
            else{
                res.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente o nome do cliente conforme a documentação da API!"
                });
            }
        }
        else{
            res.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
    }

    remover(req, res){
        res.type("application/json");

        if(req.method === "DELETE" && req.is("application/json")){
            let dados = req.body;
            let cpf = dados.cpf;        

            if(cpf){
                let cliente = new Cliente("", "", cpf);
                cliente.remover()
                .then(()=>{
                    res.status(200).json({
                        status: true,
                        mensagem: "Cliente removido com Sucesso!"
                    });
                })
                .catch((error)=>{
                    res.status(500).json({
                        status: false,
                        mensagem: error.message
                    });
                });
            }
            else{
                res.status(400).json({
                    status: false,
                    mensagem: "Informe adequadamente o CPF do cliente conforme a documentação da API!"
                });
            }
        }
        else{
            res.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
        
    }

    consultar(req, res){
        res.type("application/json");

        if(req.method === "GET"){
            let termo = req.params.termo;
            if(!termo) termo = "";
            const cliente = new Cliente();

            cliente.consultar(termo)
            .then((clientes)=>{
                let listaClientes = []
                for(let i = 0; i<clientes.length; i++)
                    listaClientes.push(clientes[i].toJson());
                
                res.status(200).json(listaClientes);
            })
            .catch((error)=>{
                res.status(500).json({
                    status: false,
                    mensagem: error.message
                });
            });
        }
        else{
            res.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
    }

    consultarPeloCPF(req, res){
        res.type("application/json");
        let cpf = req.body.cpf;
        //let cpf = req.params['cpf']; PARA O MÉTODO GET

        if(req.method === "POST" && req.is('application/json')){
            const cliente = new Cliente();
            cliente.consultarClientePorCpf(cpf)
            .then((cliente)=>{
                let listaCliente = []
                for(let i = 0; i<cliente.length; i++)
                listaCliente.push(cliente[i].toJson());
                
                res.status(200).json(listaCliente);
            })
            .catch((error)=>{
                res.status(500).json({
                    status: false,
                    mensagem: error.message
                });
            });
        }
        else{
            res.status(400).json({
                status: false,
                mensagem: "Método não permitido ou cliente no formato JSON não fornecido! Consulte a documentação da API."
            });
        }
    }
}