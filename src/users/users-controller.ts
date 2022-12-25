import { BaseController } from '../common/base-controller'
import { Request, Response, NextFunction } from 'express'
import { HTTPError } from '../errors/http-error-class'
import { inject, injectable } from 'inversify'
import { ILogger } from '../logger/logger-interface'
import { TYPES } from '../types'
import 'reflect-metadata'
import { IUserController } from './users-interface'
import { UserRegisterDto } from './dto/user-register-dto'
import { UserLoginDto } from './dto/user-login-dto'
import { User } from './user-entity'

@injectable()
export class UserController extends BaseController implements IUserController {
	// Упражнение
	// В этом конструкторе вызвать BindRouts() и в нем выполнить п ривязки
	// 'login' и 'register' из ... к соответствующим функциям констру ктора
	// также требуется вызвать метод 'super' и добавить его внутрь 'app.ts'
	constructor(@inject(TYPES.ILogger) private loggerServise: ILogger) {
		super(loggerServise)
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		])
	}

	login(
		req: Request<{}, {}, UserLoginDto>,
		res: Response,
		next: NextFunction
	): void {
		console.log(req.body)
		next(
			new HTTPError(
				401,
				'Ошибка авторизации при выполнении UserController.login()',
				'login error'
			)
		)
	}

	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const newUser = new User(body.email, body.name)
		await newUser.setPassword(body.password, 10)
		this.ok(res, newUser)
	}
}
