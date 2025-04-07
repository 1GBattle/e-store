import { Product } from "@/app/Models/Product.Model";
import Image from "next/image";
import Link from "next/link";
import { useAddToCartMutation } from "@/app/redux/cart.api";
import React from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [addToCart] = useAddToCartMutation();

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    await addToCart({ productId: product.id, quantity: 1 });
    console.log("added to cart");
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="h-64 w-48 outline outline-gray-100 rounded-2xl overflow-hidden shadow-md"
    >
      <Image
        className="w-full h-3/5 rounded"
        src={product.picUrl}
        alt={product.name}
        width={100}
        height={100}
        priority
      />

      <div className="p-1">
        <h3 className="font-semibold w-[95%] truncate">{product.name}</h3>

        <p className="text-lg font-semibold text-center">
          ${product.price / 100 + 100}
        </p>

        <div className="flex items-center justify-between p-1 mt-2">
          <button
            onClick={(e) => e.preventDefault()}
            className="flex flex-row justify-center items-center bg-sky-50 px-2 rounded-full"
          >
            Details
          </button>

          <button
            onClick={(e) => handleAddToCart(e)}
            className="flex flex-row justify-center items-center bg-green-100 px-2 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
