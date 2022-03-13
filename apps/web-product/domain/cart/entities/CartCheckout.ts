import { Cart } from "core/domain/cart/entities/Cart"
import { ProductCartCheckout } from "./ProductCartCheckout"

export class CartCheckout extends Cart {
	constructor(cartId: number, userId: number, date: Date, products: any[]) {
		super(
			cartId,
			userId,
			date,
			products.map(
				product => new ProductCartCheckout(product.productId, product.quantiry)
			)
		)
	}
}
