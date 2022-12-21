import express, { Request, Response, NextFunction } from 'express'
import { userRouter } from './users/users'

const port = 9001
const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
   console.log('Текущее время  ', Date.now())
   next()
})

app.get('/hello', (req: Request, res: Response) => {
   res.set('Content-Type', 'text/plain') // Формат ответа
   res.send('Запуск сервера завершен успешно')
   res.end()        // Флаг отправки ответа, чтобы сервер не завис
})

// вызов обработчика userRouter при обращении по адресу '/users'+...
app.use('/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
   console.log(err.message)
   res.status(401).send(err.message)
})

app.listen(port, () => {
   console.log(`Сервер запущен на http://localhost:${port}`)
})
