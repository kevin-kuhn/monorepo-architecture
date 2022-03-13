import { CartRepository } from "core/domain/cart/abstractions/CartRepository"
import { CartCheckout } from "../../../domain/cart/entities/CartCheckout"

export class MockCartRepository extends CartRepository {
	getUserCart(): Promise<CartCheckout> {
		return new Promise(resolve =>
			resolve(
				new CartCheckout(5, 5, new Date("2020-03-01T00:00:02.000Z"), [
					{
						productId: 7,
						quantity: 1,
					},
					{
						productId: 8,
						quantity: 1,
					},
				])
			)
		)
	}
}
