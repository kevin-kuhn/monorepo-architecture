import { ProductProduto } from "../../domain/product/entities/ProductProduto"
import { ApiProductRepository } from "../repositories/product/ApiProductRepository"

import {
	getAllProducts,
	getProductById,
} from "../../application/useCases/productUseCases/productUseCases"

const api = new ApiProductRepository()

export class ProductService {
	static async getAllProducts(): Promise<ProductProduto[]> {
		return await getAllProducts(api)
	}

	static async getProductById(id: number): Promise<ProductProduto> {
		return await getProductById(api, id)
	}
}
