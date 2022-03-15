import { Entity } from "../../Entity";

export class User extends Entity {
	private userId: number
	private name: string
	private email: string

	constructor(
		userId: number,
		name: string,
		email: string
	) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
	}

	getUserId(): number {
		return this.userId
	}

	getName(): string {
		return this.name
	}

	getEmail(): string {
		return this.email
	}
}