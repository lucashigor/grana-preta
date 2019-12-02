import { Request, Response } from './node_modules/express'

import UserRepository from '../data/repositories/cqrs-no-sql/UserRepository'

class UserController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const { page = 1 } = req.query

    var ret = await UserRepository.retrieve(page, 10)

    return res.json(ret)
  }

  public async show (req: Request, res: Response): Promise<Response> {
    var user = await UserRepository.findById(req.params.id)

    return res.json(user)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const user = await UserRepository.create(req.body)

    return res.json(user)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const user = await UserRepository.update(req.params.id, req.body)

    return res.json(user)
  }

  public async destroy (req: Request, res: Response): Promise<Response> {
    await UserRepository.delete(req.params.id)

    return res.json(true)
  }
}

export default new UserController()
