export default interface Cart {
  cartId: string;
  cartItems: CartItem[];
}

export interface CartItem {
  productId: number;
  quantity: number;
  price: number;
  type: string;
  picUrl: string;
  name: string;
  brand: string;
}
