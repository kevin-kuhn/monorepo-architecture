import type { NextPage } from "next"
import { useEffect } from "react"

import { ProductService } from "../infraestructure/services/ProductService"
import { CartService } from "../infraestructure/services/CartService"

const Home: NextPage = () => {
	useEffect(() => {
		const getAllProducts = async () => {
			const products = await ProductService.getAllProducts()
			const cart = await CartService.getUserCart()
			
			console.log(products)
			console.log(cart)
		}
		getAllProducts()
	}, [])

	return <div>Hello</div>
}

export default Home
