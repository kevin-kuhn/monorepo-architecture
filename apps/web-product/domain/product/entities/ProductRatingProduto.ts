import { ProductRating } from "core/domain/product/entities/ProductRating";

export class ProductRatingProduto extends ProductRating {
	constructor(productId: number, rating: number) {
		super(productId, rating);
	}
}