// сложная логика потребует ветвления switch/case
// поэтому в любом случае требуется дополнительная абстракция
// import http from 'http'
import express from 'express'

const port = 9001
const app = express()

// для этого middlware важен порядок вызова, т.к.
// обработка может произойти только в случае, когда он первый
app.all('/hello', (req, res, next) => {
  console.log('Вызван обработчик "all"')
  next()
})

// дополнительный коллбэк обработчик перед обработкой роутов
// порядок вызова - см. ниже
const cb = (req, res, next) => {
   console.log('Callback #1')
   next()
}

// коллбэки могут переаваться массивом
app.get('/hello', cb, (req, res) => {
   res.send('Запуск сервера завершен успешно')
})


app.listen(port, () => {
   console.log(`Сервер запущен на http://localhost:${port}`)
})
