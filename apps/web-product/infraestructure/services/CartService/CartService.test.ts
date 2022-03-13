import { MockCartRepository } from "../../repositories/cart/MockCartRepository"
import { CartService } from "./CartService"

const service = new CartService(new MockCartRepository()
)
describe("Cart Service", () => {
	it("should be defined", () => {
		expect(service.getUserCart).toBeDefined()
	})

	it("should return user cart", async () => {
		const cart = await service.getUserCart()

		expect(cart.getUserId()).toBe(5)
		expect(cart.getProducts()).toHaveLength(2)
		expect(cart.getProducts()[0].getProductId()).toBe(7)
		expect(cart.getProducts()[1].getProductId()).toBe(8)
	})
})
