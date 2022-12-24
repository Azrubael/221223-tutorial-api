// Файл с уникальными строковыми ключами для связывания их с типами объектов

import { ExceptionFilter } from "./errors/exception-filter"
import { ILogger } from "./logger/logger-interface"

export const TYPES = {
   Application: Symbol.for('Application'),
   ILogger: Symbol.for('ILogger'),
   UserController: Symbol.for('UserController'),
   ExceptionFilter: Symbol.for('ExceptionFilter')
}