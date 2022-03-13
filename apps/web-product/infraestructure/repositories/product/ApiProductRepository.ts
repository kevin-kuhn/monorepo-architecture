import { ProductRepository } from "core/domain/product/abstractions/ProductRepository"
import { Product } from "core/domain/product/entities/Product"
import { HttpClient } from "core/shared/api/abstractions/HttpClient"
import { AxiosHttpClient } from "core/shared/api/entities/AxiosHttpClient"
import { ProductProduto } from "../../../domain/product/entities/ProductProduto"

export class ApiProductRepository extends ProductRepository {
	private httpClient: HttpClient

	constructor() {
		super()
		this.httpClient = new AxiosHttpClient("https://fakestoreapi.com/products")
	}

	async getAllProducts(): Promise<ProductProduto[]> {
		return this.httpClient
			.get<any>("")
			.then(response => response.data.map(product => this.converter(product)))
			.catch(error => {
				console.error(error)
				return []
			})
	}

	async getProductById(id: number): Promise<ProductProduto> {
		return this.httpClient
			.get<any>(`/${id}`)
			.then(response => this.converter(response.data))
			.catch(error => {
				console.error(error)
				return null
			})
	}

	private converter(product: any): ProductProduto {
		return new ProductProduto(
			product.id,
			product.title,
			product.description,
			product.price,
			product.image,
			product.rating
		)
	}
}
