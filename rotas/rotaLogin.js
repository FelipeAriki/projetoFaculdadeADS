import { Router } from "express";

const rotaLogin = Router();

rotaLogin
.get('/', (req, res)=>{
    res.redirect('/login.html');
})
.post('/', (req, res)=>{
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if(usuario === 'Felipe' && senha === '123'){
        req.session.usuarioLogado = true;
        res.redirect('/cadastroCliente.html');
    }
    else{
        res.send(`
        <p>Falha no Login!</p>
        <button onclick='history.back'>
            Tentar novamente
        </button>
        `);
    }
});

export default rotaLogin;