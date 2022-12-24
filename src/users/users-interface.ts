// Упражнение:
// 1) Сделать интерфейс для юзерконтроллера
// 2) Сделать биндинг не на юзерконтроллер, а на его интерфейс

import { Request, Response, NextFunction } from 'express'

export interface IUserController {
   login: (req: Request, res: Response, next: NextFunction) => void
   register:  (req: Request, res: Response, next: NextFunction) => void
}