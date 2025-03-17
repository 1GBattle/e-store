"use client";
import ProductCard from "@/app/components/ProductCard.Component";
import { Product } from "@/app/Models/Product.Model";
import { useGetProductsQuery } from "@/app/redux/product.api";

export default function ProductListComponent() {
  const { isLoading, data: products } = useGetProductsQuery();
  return isLoading ? (
    <h1>Loading....</h1>
  ) : (
    <div className="grid grid-cols-2 p-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products!.map((prod: Product) => (
        <ProductCard product={prod} key={prod.id} />
      ))}
    </div>
  );
}
