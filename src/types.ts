// Файл с уникальными строковыми ключами для связывания их с типами объектов
export const TYPES = {
	Application: Symbol.for('Application'),
	ILogger: Symbol.for('ILogger'),
	UserController: Symbol.for('UserController'),
	ExceptionFilter: Symbol.for('ExceptionFilter'),
	UserService: Symbol.for('UserService'),
}
