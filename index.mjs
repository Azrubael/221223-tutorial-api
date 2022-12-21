import express from 'express'
import { userRouter } from './users/users.mjs'

const port = 9001
const app = express()

app.get('/hello', (req, res) => {
   res.set('Content-Type', 'text/plain') // Формат ответа
   res.send('Запуск сервера завершен успешно')
   res.end()        // Флаг отправки ответа, чтобы сервер не завис
})

// вызов обработчика userRouter при обращении по адресу '/users'+...
app.use('/users', userRouter)

app.listen(port, () => {
   console.log(`Сервер запущен на http://localhost:${port}`)
})
