import http from 'http'

const host = 'localhost'
const port = 9001

const server = http.createServer((req, res) => {
   // сложная логика потребует ветвления switch/case
   // поэтому в любом случае требуется дополнительная абстракция
   switch (req.method) {
      case 'GET':
         switch (req.url) {
            case '/hello':
               res.statusCode = 200
               res.setHeader('Content-Type', 'text/plain')
               res.end('Запуск сервера завершен успешно')
               break               
         }
         break
   }
})

server.listen(port, host, () => {
   console.log(`Сервер запущен на ${host}:${port}`)
})