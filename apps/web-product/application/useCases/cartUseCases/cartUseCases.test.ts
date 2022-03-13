import { getUserCart } from "./cartUseCases"
import { MockCartRepository } from "../../../infraestructure/repositories/cart/MockCartRepository"

const api = new MockCartRepository()

describe("CartUseCases", () => {
	it("should be defined", () => {
		expect(getUserCart).toBeDefined()
	})

	it("should return user cart", async () => {
		const cart = await getUserCart(api)
		
		expect(cart.getUserId()).toBe(5)
		expect(cart.getDate()).toBe(new Date("2020-03-01T00:00:02.000Z"))
		expect(cart.getProducts()).toHaveLength(2)
		expect(cart.getProducts()[0].getProductId()).toBe(7)
		expect(cart.getProducts()[1].getProductId()).toBe(8)
	})
})
