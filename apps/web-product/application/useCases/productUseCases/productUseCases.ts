import { ProductProduto } from "../../../domain/product/entities/ProductProduto"
import { ProductProdutoRepository } from "../../../domain/product/abstractions/ProductProdutoRepository"

export const getAllProducts = async (
	productRepository: ProductProdutoRepository
): Promise<ProductProduto[]> => {
	return await productRepository.getAllProducts()
}

export const getProductById = async (
	productRepository: ProductProdutoRepository,
	id: number
): Promise<ProductProduto> => {
	return await productRepository.getProductById(id)
}
