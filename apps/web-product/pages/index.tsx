import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect } from "react"

import { ProductService } from "../infraestructure/services/ProductService"

const Home: NextPage = () => {

	useEffect(() => {
		const getALlProducts = async () => {
			const products = await ProductService.getAllProducts()
			console.log(products)
		}
		getALlProducts()
	}, [])

	return <div>Hello</div>
}

export default Home
