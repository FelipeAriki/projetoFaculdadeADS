import Cliente from '../Modelo/Cliente.js';
import conectar from './Conexao.js';

export default class ClienteDAO{
    async incluir(cliente){
        if(cliente instanceof Cliente){
            const conexao = await conectar();
            const sql = "INSERT INTO cliente(nome, sobrenome, cpf, endereco, bairro, cidade, uf, telefone, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const valores = [cliente.nome, cliente.sobrenome, cliente.cpf, cliente.endereco, cliente.bairro, cliente.cidade, cliente.uf, cliente.telefone, cliente.email];

            await conexao.query(sql, valores);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async alterar(cliente){
            if(cliente instanceof Cliente){
                let clienteAux = this.consultarCPF(cliente.cpf);
                if(clienteAux !== null){
                    const conexao = await conectar();
                    const sql = "UPDATE cliente set nome = ?, sobrenome = ?, endereco = ?, bairro = ?, cidade = ?, uf= ?, telefone = ?, email = ? WHERE cpf = ?";
                    const valores = [cliente.nome, cliente.sobrenome, cliente.cpf, cliente.endereco, cliente.bairro, cliente.cidade, cliente.uf, cliente.telefone, cliente.email];
        
                    await conexao.query(sql, valores);
                    global.poolConexoes.releaseConnection(conexao);
                }                
            }
    }

    async excluir(cliente){
        if(cliente instanceof Cliente){
            let clienteAux = this.consultarCPF(cliente.cpf);
            if(clienteAux !== null){
                const conexao = await conectar();
                const sql = "DELETE FROM cliente WHERE cpf = ?";
                const valores = [cliente.cpf];
    
                await conexao.query(sql, valores);

            }                
        }
    }

    async consultar(filtro){
        const conexao = await conectar();
        if(!filtro) filtro = "";

        const sql = "SELECT * FROM cliente WHERE nome like ?";
        const valores = ['%'+ filtro +'%'];
        const [rows] = await conexao.query(sql, valores);
        const listaClientes = [];

        for(const row of rows){
            const cliente = new Cliente(row['nome'], row['sobrenome'], row['cpf'], row['endereco'],
            row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
            listaClientes.push(cliente);
        }
        
        return listaClientes;
    }

    async consultarCPF(cpf){
        const conexao = await conectar();
        const sql = "SELECT * FROM cliente WHERE cpf = ?";
        const valores = [cpf];
        const [rows] = await conexao.query(sql, valores);
        const listaClientes = [];

        for(const row of rows){
            const cliente = new Cliente(row['nome'], row['sobrenome'], row['cpf'], row['endereco'],
            row['bairro'], row['cidade'], row['uf'], row['telefone'], row['email']);
            listaClientes.push(cliente);
        }
        global.poolConexoes.releaseConnection(conexao);
        return listaClientes;
    }
}