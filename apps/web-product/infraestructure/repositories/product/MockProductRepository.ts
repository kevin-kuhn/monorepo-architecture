import { ProductRepository } from "core/domain/product/abstractions/ProductRepository"
import { ProductProduto } from "../../../../web-product/domain/product/entities/ProductProduto"
import { ProductRatingProduto } from "../../../../web-product/domain/product/entities/ProductRatingProduto"

export class MockProductRepository extends ProductRepository {
	async getAllProducts(): Promise<ProductProduto[]> {
		const list: ProductProduto[] = []

		list.push(
			new ProductProduto(
				1,
				"Product 1",
				"Description 1",
				100,
				"image1.jpg",
				new ProductRatingProduto(1, 1)
			)
		)
		list.push(
			new ProductProduto(
				2,
				"Product 2",
				"Description 2",
				200,
				"image2.jpg",
				new ProductRatingProduto(2, 2)
			)
		)
		list.push(
			new ProductProduto(
				3,
				"Product 3",
				"Description 3",
				300,
				"image3.jpg",
				new ProductRatingProduto(3, 3)
			)
		)

		return new Promise(resolve => resolve(list))
	}

	async getProductById(id: number): Promise<ProductProduto> {
		return new Promise(resolve =>
			resolve(
				new ProductProduto(3, "Product 3", "Description 3", 300, "image3.jpg", {
					rating: 3,
					total: 3,
				})
			)
		)
	}
}
