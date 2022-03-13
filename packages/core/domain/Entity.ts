import Uid from "./uid"

export class Entity implements Uid {
  private id: number

  constructor() {
    this.id = this.generateId()
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }

	getId(): number {
		return this.id
	}
}