import { Cart } from "../entities/Cart";

export abstract class CartRepository {
	abstract getUserCart(): Promise<Cart>
}