import { CartItem } from "@/app/Models/Cart.Model";

interface Props {
  cartItem: CartItem;
}

export default function CartItemComponent({ cartItem }: Props) {
  return (
    <div>
      <p>{cartItem.name}</p>
    </div>
  );
}
