// сложная логика потребует ветвления switch/case
// поэтому в любом случае требуется дополнительная абстракция
// import http from 'http'
import express from 'express'

const port = 9001
const app = express()

app.get('/hello', (req, res) => {
   res.send('Запуск сервера завершен успешно')
})

app.listen(port, () => {
   console.log(`Сервер запущен на http://localhost:${port}`)
})
