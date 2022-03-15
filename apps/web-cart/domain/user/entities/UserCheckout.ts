import { User } from "core/domain/user/entities/User"

export class UserCheckout extends User {
	constructor(userId: number, name: string, email: string) {
		super(userId, name, email)
	}
}
 