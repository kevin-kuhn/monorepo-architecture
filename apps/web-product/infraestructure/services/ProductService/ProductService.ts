import { ProductProduto } from "../../../domain/product/entities/ProductProduto"
import { ApiProductRepository } from "../../repositories/product/ApiProductRepository"
import { ProductProdutoRepository } from "../../../domain/product/abstractions/ProductProdutoRepository"


export class ProductService {
	private repository: ProductProdutoRepository

	constructor(repository: ProductProdutoRepository = new ApiProductRepository()) {
		this.repository = repository
	}

	async getAllProducts(): Promise<ProductProduto[]> {
		return await this.repository.getAllProducts()
	}

	async getProductById(id: number): Promise<ProductProduto> {
		return await this.repository.getProductById(id)
	}
}
