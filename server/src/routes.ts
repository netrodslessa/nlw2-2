import express from 'express';
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connerctionsController = new ConnectionsController();

// GET => Buscar ou listar uma informação
// POST => Criar alguma nova informação 
// PUT => Atualizar uma informação existente
// DELETE => Deletar uma informação existente


// Parâmetros
    // Corpo (Request Body)=> Dados para criação ou atualização de um registro
    // Routes Params => Identificar qual recurso eu quero atualizar ou deletar
        // usa-se junto a rota da seguinte forma => app.post('/users/:id' onde 
        // o ':' é usado para dizer que é um parâmetro, 
    // Query Params => Usados geralmente para listagens, também usados nas todas
        // req.query

        // // corpo da requisição:
        // console.log(req.body);
        
// criando aulas
routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connerctionsController.index)
routes.post('/connections', connerctionsController.create)

export default routes;