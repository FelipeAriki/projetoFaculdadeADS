import ClienteDAO from "../Persistencia/ClienteDAO.js";

export default class Cliente{
    #nome;
    #sobrenome;
    #cpf;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #telefone;
    #email;

    constructor(nome, sobrenome, cpf, endereco, bairro, cidade, uf, telefone, email){
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#cpf = cpf;
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#telefone = telefone;
        this.#email = email;
    }

    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        if(novoNome !== "")
            this.#nome = novoNome;
    }

    get sobrenome(){
        return this.#sobrenome;
    }
    set sobrenome(novoSobrenome){
        if(novoSobrenome !== "")
            this.#sobrenome = novoSobrenome;
    }

    get cpf(){
        return this.#cpf;
    }
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get endereco(){
        return this.#endereco;
    }
    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }
    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }


    get cidade(){
        return this.#cidade;
    }
    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get uf(){
        return this.#uf;
    }
    set uf(novoUf){
        this.#uf = novoUf;
    }

    get telefone(){
        return this.#telefone;
    }
    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = novoEmail;
    }

    //override ou sobrescrita do objeto JSON
    toJson(){
        return {
            "nome": this.#nome,
            "sobrenome": this.#sobrenome,
            "cpf": this.#cpf,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "cidade": this.#cidade,
            "uf": this.#uf,
            "telefone": this.#telefone,
            "email": this.#email
        }
    }

    async gravar(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.incluir(this);
    }
    async alterar(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.alterar(this);
    }
    async remover(){
        const clienteDAO = new ClienteDAO();
        await clienteDAO.excluir(this);
    }
    async consultar(filtro){
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultar(filtro);
    }
    async consultarClientePorCpf(cpf){
        const clienteDAO = new ClienteDAO();
        return await clienteDAO.consultarCPF(cpf);
    }
}