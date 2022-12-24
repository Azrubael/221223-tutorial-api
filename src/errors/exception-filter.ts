import { Request, Response, NextFunction } from "express";
import { LoggerService } from "../logger/logger-service";
import { IExceptionFilter } from "./exeption-filter-interface";
import { HTTPError } from "./http-error-class";

export class ExceptionFilter implements IExceptionFilter {
   logger: LoggerService
   constructor(logger: LoggerService) {
      this.logger = logger
   }
   
   catch( err: Error | HTTPError, req: Request,
      res: Response, next: NextFunction ) {
      if (err instanceof HTTPError) {
         this.logger.error(`[${err.context}] \nОшибка ${err.statusCode} : ${err.message}`)
      res.status(err.statusCode).send({ err: err.message })
      } else {
         this.logger.error(`Ошибка: \n${err.message}`)
      res.status(500).send({ err: err.message })
 
      }
   }
}