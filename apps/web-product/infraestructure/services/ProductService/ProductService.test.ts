import { MockProductRepository } from "../../repositories/product/MockProductRepository"
import { ProductService } from "./ProductService"

const service = new ProductService(new MockProductRepository())

describe("Product Service", () => {
	it("should be defined", () => {
		expect(service.getAllProducts).toBeDefined()
		expect(service.getProductById).toBeDefined()
	})

	it("should return all products", async () => {
		const products = await service.getAllProducts()
		expect(products).toHaveLength(3)
	})

	it("should return product by id", async () => {
		const product = await service.getProductById(3)
		expect(product.getProductId()).toBe(3)
	})
})
