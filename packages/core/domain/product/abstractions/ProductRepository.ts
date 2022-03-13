import { Product } from "../entities/Product"

export abstract class ProductRepository {
	abstract getAllProducts(): Promise<Product[]>
	abstract getProductById(id: number): Promise<Product>
}