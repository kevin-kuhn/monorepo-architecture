import { Entity } from "../../Entity"
import { ProductRating } from "./ProductRating"

export class Product extends Entity {
	private productId: number
	private title: string
	private description: string
	private price: number
	private image: string
	private rating: ProductRating

	constructor(
		productId: number,
		title: string,
		description: string,
		price: number,
		image: string,
		rating: ProductRating,
	) {
		super()
		this.productId = productId
		this.title = title
		this.description = description
		this.price = price
		this.image = image
		this.rating = rating
	}

	getProductId(): number {
		return this.productId
	}

	getTitle(): string {
		return this.title
	}

	getDescription(): string {
		return this.description
	}

	getPrice(): number {
		return this.price
	}

	getImage(): string {
		return this.image
	}

	getRating(): ProductRating {
		return this.rating
	}
}