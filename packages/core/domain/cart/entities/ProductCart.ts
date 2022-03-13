import { Entity } from "../../Entity"

export class ProductCart extends Entity {
  private productId: number
  private quantity: number

  constructor(
    productId: number,
    quantity: number,
  ) {
    super();
    this.productId = productId;
    this.quantity = quantity;
  }

	getProductId(): number {
		return this.productId
	}

	getQuantity(): number {	
		return this.quantity
	}
}