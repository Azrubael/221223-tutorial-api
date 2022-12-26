// Основная точка входа в приложение
import { Container, ContainerModule, interfaces } from 'inversify'
import { App } from './app'
import { ExceptionFilter } from './errors/exception-filter'
import { IExceptionFilter } from './errors/exeption-filter-interface'
import { ILogger } from './logger/logger-interface'
import { LoggerService } from './logger/logger-service'
import { TYPES } from './types'
import { UserController } from './users/users-controller'
import { IUserController } from './users/users-interface'
import { UserService } from './users/users-service'
import { IUserService } from './users/users-service-interface'

export interface IBootstrapRturn {
	appContainer: Container
	app: App
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService)
	bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter)
	bind<IUserController>(TYPES.UserController).to(UserController)
	bind<IUserService>(TYPES.UserService).to(UserService)
	bind<App>(TYPES.Application).to(App)
})

function bootstrap(): IBootstrapRturn {
	const appContainer = new Container()
	appContainer.load(appBindings) // загрузка биндингов
	const app = appContainer.get<App>(TYPES.Application)
	app.init()
	return { appContainer, app }
}

export const { app, appContainer } = bootstrap()
