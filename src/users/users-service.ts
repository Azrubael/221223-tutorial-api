import { injectable } from 'inversify'
import { UserLoginDto } from './dto/user-login-dto'
import { UserRegisterDto } from './dto/user-register-dto'
import { User } from './user-entity'
import { IUserService } from './users-service-interface'

// Бизнес-логика создаваемого приложения
@injectable()
export class UserService implements IUserService {
	async createUser({
		email,
		name,
		password,
	}: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name)
		await newUser.setPassword(password, 10)
		// Проверка: есть ли этот пользователь?
		// Если пользователь есть - возвращаем null,
		// Иначе - создаем User
		return null
	}

	async validateUser(dto: UserLoginDto): Promise<boolean> {
		return true
	}
}
