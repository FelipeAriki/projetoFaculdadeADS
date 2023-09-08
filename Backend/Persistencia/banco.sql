CREATE TABLE cliente(
    cpf varchar(14) not null primary key,
    nome varchar(50) not null;
    sobrenome varchar(50) not null;
    endereco varchar(50) not null;
    bairro varchar(50) not null;
    cidade varchar(50) not null;
    uf varchar(2) not null;
    telefone varchar(50) not null;
    email varchar(50) not null;
);