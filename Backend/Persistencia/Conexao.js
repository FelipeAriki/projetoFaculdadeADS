import mysql from 'mysql2/promise';

export default async function conectar(){

    if(global.poolConexoes)
        return await global.poolConexoes.getConnection();
    else{
        global.poolConexoes = mysql.createPool({
            host: 'localhost',
            port: 3306,
            database: 'backendaluno25-ppiadsead',
            user: 'aluno25-ppiadsead',
            password: '8Du9j15ZXRkz4veCxrFT',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            idleTimeout: 60000,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0
        });
        return await global.poolConexoes.getConnection();
    }
}