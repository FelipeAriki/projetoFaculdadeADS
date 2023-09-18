import { Router } from 'express';
import ClienteCtrl from '../Controle/ClienteCtrl.js';

const rotaCliente = new Router();
const clienteCtrl = new ClienteCtrl();

rotaCliente
.get('/:termo', clienteCtrl.consultar)
.post('/', clienteCtrl.gravar)
.delete('/', clienteCtrl.remover)
.put('/', clienteCtrl.atualizar)
.post('/consultarCPF', clienteCtrl.consultarPeloCPF);

export default rotaCliente;