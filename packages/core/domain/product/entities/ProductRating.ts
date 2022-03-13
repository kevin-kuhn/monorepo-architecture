import { Entity } from "../../Entity"

export class ProductRating extends Entity {
  private rate: number
  private count: number

  constructor(
    rate: number,
    count: number,
  ) {
    super();
    this.rate = rate;
    this.count = count;
  }

	getRate(): number {
		return this.rate
	}

	getCount(): number {
		return this.count
	}
}