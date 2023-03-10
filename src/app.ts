import express, { Express } from 'express'
import { Server } from 'http'
import { inject, injectable } from 'inversify'
import { ExceptionFilter } from './errors/exception-filter'
import { ILogger } from './logger/logger-interface'
import { TYPES } from './types'
import { UserController } from './users/users-controller'
import { json } from 'body-parser'
import 'reflect-metadata'

@injectable()
export class App {
	app: Express
	server: Server
	port: number

	constructor(
		@inject(TYPES.ILogger) private logger: ILogger,
		@inject(TYPES.UserController) private userController: UserController,
		@inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter // @inject(TYPES.UserService) private userService: UserService
	) {
		this.app = express()
		this.port = 9001
	}

	// Тут мы глобально для всего приложения добавили парсер для
	// всех входящих запросов в формате 'json'
	useMiddleware(): void {
		this.app.use(json())
	}

	useRoutes(): void {
		this.app.use('/users', this.userController.router)
	}

	// создаем обработчик ошибок
	useExceptionFilters(): void {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
	}

	public async init(): Promise<void> {
		this.useMiddleware()
		this.useRoutes()
		this.useExceptionFilters()
		this.server = this.app.listen(this.port)
		console.log(`Сервер запущен на http://localhost:${this.port}`)
	}
}
