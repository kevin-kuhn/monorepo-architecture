import { getAllProducts, getProductById } from "./productUseCases"
import { MockProductRepository } from "../../../infraestructure/repositories/product/MockProductRepository"

const api = new MockProductRepository()

describe("ProductUseCases", () => {
	it("should be defined", () => {
		expect(getAllProducts).toBeDefined()
		expect(getProductById).toBeDefined()
	})

	it("should return all products", async () => {
		const products = await getAllProducts(api)
		expect(products).toHaveLength(3)
	})

	it("should return product by id", async () => {
		const product = await getProductById(api, 3)
		expect(product.getProductId()).toBe(3)
	})
})
