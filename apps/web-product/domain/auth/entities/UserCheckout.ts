import { User } from "core/domain/auth/entities/User"

export class UserCheckout extends User {
	constructor(userId: number, name: string, email: string) {
		super(userId, name, email)
	}
}
