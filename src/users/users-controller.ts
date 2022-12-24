import { BaseController } from "../common/base-controller"
import { Request, Response, NextFunction } from 'express'
import { HTTPError } from "../errors/http-error-class"
import { inject, injectable } from "inversify"
import { ILogger } from "../logger/logger-interface"
import { TYPES } from "../types"
import 'reflect-metadata'
import { IUserController } from "./users-interface"

@injectable()
export class UserController extends BaseController implements IUserController {
   // Упражнение
   // В этом конструкторе вызвать BindRouts() и в нем выполнить п ривязки
   // 'login' и 'register' из ... к соответствующим функциям констру ктора
   // также требуется вызвать метод 'super' и добавить его внутрь 'app.ts'
   constructor( @inject(TYPES.ILogger) private loggerServise: ILogger ) {
      super(loggerServise)
      this.bindRoutes([
         { path: '/register', method: 'post', func: this.register },
         { path: '/login', method: 'post', func: this.login }
      ])
   }

   login(req: Request, res: Response, next: NextFunction) {
     next(new HTTPError(401, 'Ошибка авторизации при выполнении UserController.login()', 'login error'))
   }

   register (req: Request, res: Response, next: NextFunction) {
      this.ok(res, 'Сработала функция \"register\"')
   }
}