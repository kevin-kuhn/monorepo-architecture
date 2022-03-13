import { CartCheckoutRepository } from "../../../domain/cart/abstractions/CartCheckoutRepository"
import { CartCheckout } from "../../../domain/cart/entities/CartCheckout"

export const getUserCart = async (
	cartRepository: CartCheckoutRepository,
): Promise<CartCheckout> => {
	return await cartRepository.getUserCart()
}


