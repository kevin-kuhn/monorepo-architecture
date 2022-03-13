import { Product } from "core/domain/product/entities/Product"
import { ProductRatingProduto } from "./ProductRatingProduto"

export class ProductProduto extends Product {
	constructor(
		productId: number,
		title: string,
		description: string,
		price: number,
		image: string,
		rating: any
	) {
		super(
			productId,
			title,
			description,
			price,
			image,
			new ProductRatingProduto(rating?.rate, rating?.count)
		)
	}
}
