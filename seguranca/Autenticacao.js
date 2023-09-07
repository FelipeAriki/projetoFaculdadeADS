export default function autenticar(req, res, next){
    if(req.session.usuarioLogado === true)
        next();//prossegue o processamento
    else{
        res.redirect('/aluno25-ppiadsead/login.html');
    }
}