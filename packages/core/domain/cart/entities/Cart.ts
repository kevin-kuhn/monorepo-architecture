import { Entity } from "../../Entity"
import { ProductCart } from "./ProductCart";

export class Cart extends Entity {
  private cartId: number
  private userId: number
	private date: Date
	private products: ProductCart[]

  constructor(
    cartId: number,
    userId: number,
		date: Date,
		products: ProductCart[]
  ) {
    super();
    this.cartId = cartId;
    this.userId = userId;
		this.date = date;
    this.products = products;
  }

	getCartId(): number {
		return this.cartId
	}

	getUserId(): number {
		return this.userId
	}

	getProducts(): ProductCart[] {
		return this.products
	}

	getDate(): Date {
		return this.date
	}
}