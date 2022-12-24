import { Logger } from 'tslog'

// интерфейс для имплементации в рамках 'logger-service.js'
export interface ILogger {
	logger: Logger
	log: (...args: unknown[]) => void
	error: (...args: unknown[]) => void
	warn: (...args: unknown[]) => void
}
