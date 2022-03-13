import Uid from "./uid"

export class Entity implements Uid {
  private entityId: number

  constructor() {
    this.entityId = this.generateId()
  }

  private generateId(): number {
    return Math.floor(Math.random() * 1000000)
  }

	getId(): number {
		return this.entityId
	}
}