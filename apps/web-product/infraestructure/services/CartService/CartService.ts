import { CartCheckout } from "../../../domain/cart/entities/CartCheckout"
import { ApiCartRepository } from "../../repositories/cart/ApiCartRepository"
import { CartCheckoutRepository } from "../../../domain/cart/abstractions/CartCheckoutRepository"

export class CartService {
	private repository: CartCheckoutRepository

	constructor(repository: CartCheckoutRepository = new ApiCartRepository()) {
		this.repository = repository
	}

	async getUserCart(): Promise<CartCheckout> {
		return await this.repository.getUserCart()
	}
}