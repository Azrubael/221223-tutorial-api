import { BaseController } from "../common/base-controller"
import { LoggerService } from "../logger/logger-service"
import { Request, Response, NextFunction } from 'express'
import { HTTPError } from "../errors/http-error-class"

export class UserController extends BaseController {
   // Упражнение
   // В этом конструкторе вызвать BindRouts() и в нем выполнить привязки
   // 'login' и 'register' из ... к соответствующим функциям конструктора
   // также требуется вызвать метод 'super' и добавить его внутрь 'app.ts'
   constructor( logger: LoggerService ) {
      super(logger)
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