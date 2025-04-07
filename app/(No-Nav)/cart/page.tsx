"use client";

import { useGetCartQuery } from "@/app/redux/cart.api";

export default function Cart() {
  const { data: cart, isLoading, isSuccess } = useGetCartQuery();

  if (!cart || cart.cartItems.length == 0)
    return <p>There are no items in your cart</p>;

  return cart.cartItems.map((item) => (
    <div key={item.productId}>
      <p>This is a cart item</p>
    </div>
  ));
}
