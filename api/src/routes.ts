import { Router } from './node_modules/express'
import UserController from './controllers/UsersController'
import UserRepo from './controllers/UserRepo'

const routes = Router()

routes.get('/users', UserRepo.getAllusers)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

export default routes
