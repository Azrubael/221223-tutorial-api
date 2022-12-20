import http from 'http'

const host = 'localhost'
const port = 9001

const server = http.createServer((req, res) => {
   res.statusCode = 200
   res.setHeader('Content-Type', 'text/plain')
   res.end('Запуск сервера завершен успешно')
})

server.listen(port, host, () => {
   console.log(`Сервер запущен на ${host}:${port}`)
})