import type { NextPage } from "next"
import { useEffect } from "react"

import { ProductService } from "../infraestructure/services/ProductService/ProductService"
import { CartService } from "../infraestructure/services/CartService/CartService"

const Home: NextPage = () => {
	const cartService = new CartService()
	const productService = new ProductService()

	useEffect(() => {
		const getAllProducts = async () => {
			const products = await productService.getAllProducts()
			const cart = await cartService.getUserCart()

			console.log(products)
			console.log(cart)
		}
		getAllProducts()
	}, [])

	return <div>WEB-PRODUCT</div>
}

export default Home
