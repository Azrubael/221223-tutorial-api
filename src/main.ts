// Основная точка входа в приложение
import { App } from "./app"

async function bootstrap() {
   const app = new App()
   await app.init()
}

bootstrap()