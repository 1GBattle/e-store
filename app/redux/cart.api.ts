import { api } from "@/app/redux/api";
import Cart from "@/app/Models/Cart.Model";

export const cartApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCart: builder.query<Cart, void>({
      query: () => ({
        url: "cart",
        method: "GET",
      }),
    }),
    addToCart: builder.mutation<void, { productId: number; quantity: number }>({
      query: (arg) => ({
        url: `cart?productId=${arg.productId}&quantity=${arg.quantity}`,
        method: "POST",
      }),
    }),
    removeFromCart: builder.mutation<
      void,
      { productId: number; quantity: number }
    >({
      query: (arg) => ({
        url: `cart?productId=${arg.productId}&quantity=${arg.quantity}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = cartApi;
