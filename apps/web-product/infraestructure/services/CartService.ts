import { CartCheckout } from "../../domain/cart/entities/CartCheckout"
import { ApiCartRepository } from "../repositories/cart/ApiCartRepository"

import { getUserCart } from "../../application/useCases/cartUseCases/cartUseCases"

const api = new ApiCartRepository()

export class CartService {
	static async getUserCart(): Promise<CartCheckout> {
		return await getUserCart(api)
	}
}