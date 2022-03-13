import { CartRepository } from "core/domain/cart/abstractions/CartRepository"
import { HttpClient } from "core/shared/api/abstractions/HttpClient"
import { AxiosHttpClient } from "core/shared/api/entities/AxiosHttpClient"
import { CartCheckout } from "../../../domain/cart/entities/CartCheckout"

export class ApiCartRepository extends CartRepository {
	private httpClient: HttpClient

	constructor() {
		super()
		this.httpClient = new AxiosHttpClient("https://fakestoreapi.com/carts")
	}

	async getUserCart(): Promise<CartCheckout> {
		return this.httpClient
			.get<any>("/5")
			.then(response => this.converter(response.data))
			.catch(error => {
				console.error(error)
				return null
			})
	}

	private converter(cart: any): CartCheckout {
		return new CartCheckout(
			cart.id,
			cart.userId,
			new Date(cart.date),
			cart.products.map(product => this.converterProduct(product))
		)
	}

	private converterProduct(product: any): any {
		return {
			productId: product.productId,
			quantity: product.quantity,
		}
	}
}
