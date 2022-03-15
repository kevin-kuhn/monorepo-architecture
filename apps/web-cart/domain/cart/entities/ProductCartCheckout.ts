import { ProductCart } from "core/domain/cart/entities/ProductCart";

export class ProductCartCheckout extends ProductCart {
	constructor(productId: number, quantity: number) {
		super(productId, quantity);
	}
}