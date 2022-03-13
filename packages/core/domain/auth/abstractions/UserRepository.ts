import { User } from "../entities/User"

export abstract class UserRepository {
	abstract getUser(): Promise<User>
}