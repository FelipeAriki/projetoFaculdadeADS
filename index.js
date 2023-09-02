import express from 'express';
import autenticar from './seguranca/Autenticacao.js';
import session from 'express-session';
import rotaLogin from './rotas/rotaLogin.js';

//o ip 0.0.0.0 significa todas as interfaces disponíveis
const host = 'localhost';
//Você precisará validar qual porta foi disponibilizada para o seu projeto no aprender
const porta = '3000';

const app = express();

//criação de sessão para memorizar a origem das requisições
app.use(session({
    secret: 'Minh4ChAveS3creEt4',
    resave: true, //a cada requisição recebida da internet salve a sessão
    saveUninitialized: false, //usuários não autenticados não possuem sessão válida
    cookie: {
        maxAge: 1000 * 60 * 30 //30 minutos
    }
}));

app.use(express.urlencoded({
    extended: true
}));

//configurar a aplicação para que ela publique tudo o que estiver na pasta público
//assegure que o conteúdo seja estático: páginas html, arquivos de script
app.use(express.static('./publico'));
app.use('/login', rotaLogin);
app.use(autenticar, express.static('./protegido'));


app.listen(porta, host, ()=>{
    console.log('Servidor ouvindo no endereço '+host+':'+porta);
});