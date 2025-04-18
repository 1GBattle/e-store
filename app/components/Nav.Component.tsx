"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { FcFilledFilter } from "react-icons/fc";
import { FcEmptyFilter } from "react-icons/fc";
import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from "next/link";

export default function Nav() {
  const [isFiltering, setIsFiltering] = React.useState(false);
  return (
    <nav className="p-3">
      <div className="flex items-between justify-between px-4">
        <button>
          <RxHamburgerMenu className="w-7 h-7" />
        </button>

        <Link href={"/cart"}>
          <IoBagHandleOutline className="w-8 h-8" />
        </Link>
      </div>
      <div className="w-20 ml-4">
        <h1 className="text-3xl font-bold">
          Our <span className="font-extrabold ml-3">Products</span>
        </h1>
      </div>

      <div className="flex justify-center items-center mt-4 gap-4">
        <input
          className="rounded-full w-[85%] h-12 bg-gray-100 py-2 px-4 text-lg"
          type="text"
          placeholder="Search Products"
        />

        <button>
          {isFiltering ? (
            <FcFilledFilter className="w-8 h-8" />
          ) : (
            <FcEmptyFilter className="w-8 h-8" />
          )}
        </button>
      </div>
    </nav>
  );
}
