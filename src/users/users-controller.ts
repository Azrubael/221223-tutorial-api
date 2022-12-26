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
import { UserService } from './users-service'

@injectable()
export class UserController extends BaseController implements IUserController {
	// Упражнение
	// В этом конструкторе вызвать BindRouts() и в нем выполнить п ривязки
	// 'login' и 'register' из ... к соответствующим функциям констру ктора
	// также требуется вызвать метод 'super' и добавить его внутрь 'app.ts'
	constructor(
		@inject(TYPES.ILogger) private loggerServise: ILogger,
		@inject(TYPES.UserService) private userService: UserService
	) {
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

	// Собственно логика работы контроллера
	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const result = await this.userService.createUser(body)
		if (!result) {
			return next(new HTTPError(422, 'Такой пользователь уже существует'))
		}
		this.ok(res, { email: result.email })
	}
}
