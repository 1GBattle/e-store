"use client";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { LuCircleUserRound } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import Link from "next/link";

export default function SlimNav() {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
    console.log("back clicked");
  };

  return (
    <nav className="h-12 p-2  shadow-sm flex justify-between items-center">
      <IoArrowBackSharp
        className="w-8  h-8"
        onClick={() => handleBackClick()}
      />
      <div className="flex justify-center items-center gap-8">
        <Link href={"/cart"}>
          <IoBagHandleOutline className="w-8 h-8" />
        </Link>
        <Link href={"/profile"}>
          <LuCircleUserRound className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
}
