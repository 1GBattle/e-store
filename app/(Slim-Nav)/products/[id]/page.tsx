"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useGetProductDetailsQuery } from "@/app/redux/product.api";

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductDetailsQuery(
    parseInt(id as string),
  );

  return !isLoading && product ? (
    <div>
      <Image src={product.picUrl} alt={product.name} height={300} width={450} />
      <div className="p-2">
        <h1 className="text-center font-bold text-2xl">{product.name}</h1>
        <div className="m-6">
          <p className="leading-7">
            <span className="font-semibold">Description:</span>
            {product.description}
          </p>
        </div>
        <div className="flex justify-around gap-4 items-center mt-4 px-4">
          <div className="flex justify-around gap-4 items-center  px-2">
            <div className=" p-2 flex justify-center items-center flex-col">
              <p className="text-black font-semibold text-sm mb-2">Price:</p>
              <p className="font-semibold">{product.price / 100 + 100}</p>
            </div>
            <div className="border-l p-2 flex justify-center items-center flex-col">
              <p className="text-gray-500 text-sm mb-2">Brand:</p>
              <p className="font-semibold">{product.brand}</p>
            </div>
            <div className="border-l p-2 flex justify-center items-center flex-col">
              <p className="text-gray-500 text-center text-sm mb-2">Type:</p>
              <p className="font-semibold">{product.type}</p>
            </div>
            <div className="border-l p-2 flex justify-center items-center flex-col">
              <p className="text-gray-500 text-center text-sm mb-2">
                In Stock:
              </p>
              <p className="font-semibold">{product.quantityInStock} left</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
