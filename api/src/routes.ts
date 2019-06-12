import { Router } from 'express'
import { checkJwt } from './middlewares/checkJwt'
import { checkRole } from './middlewares/checkRole'
import UserController from './controllers/UsersController'

const routes = Router()

routes.get('/users', [checkJwt, checkRole(['ADMIN'])], UserController.index)
routes.get('/users/:id', [checkJwt, checkRole(['ADMIN'])], UserController.show)
routes.post('/users', [checkJwt, checkRole(['ADMIN'])], UserController.store)
routes.put('/users/:id', [checkJwt, checkRole(['ADMIN'])], UserController.update)
routes.delete('/users/:id', [checkJwt, checkRole(['ADMIN'])], UserController.destroy)
routes.get('/', (req, res) => {
    res.send('Hello World')
})

export default routes
