import express from 'express'
import { userRouter } from './users/users.mjs'

const port = 9001
const app = express()

// middlware для предварительной обработки для всех запросов (не приложение)
app.use((req, res, next) => {
   console.log('Текущее время:  ', Date.now())
   next()
})

app.get('/hello', (req, res) => {
   res.set('Content-Type', 'text/plain') // Формат ответа
   res.send('Запуск сервера завершен успешно')
   res.end()        // Флаг отправки ответа, чтобы сервер не завис
})

// Экспериментальный роут специально для иллюстрации Error
app.get('/experiment', (req, res) => {
   throw new Error('Error!!!')
})

// вызов обработчика userRouter при обращении по адресу '/users'+...
app.use('/users', userRouter)

// этот обработчик обязательно должен идти последним, он нужен для фильтрации
// ненужной информации об ошибке
app.use((err, req, res, next) => {
   // это просто пример реализации, тут можно добавить свою логику:
   // определить тип ошибки, выбрать правильный код, модифицировать его из
   // текста в json и т.д.
   console.log(err.message)
   res.status(500).send(err.message)
})

app.listen(port, () => {
   console.log(`Сервер запущен на http://localhost:${port}`)
})
