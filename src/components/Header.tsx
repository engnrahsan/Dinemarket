import React from 'react'
import { APP_LINKS } from "@/utils/constant";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

function Header() {
  return (
    <div className="p-5 flex justify-between items-center">
    <div>
      <Link href="/">
      <Image
        src={"/images/Logo.png"}
        alt="logo-image"
        width={100}
        height={53}
      />
      </Link>
    </div>
    <div className="flex gap-10 items-center ">
    
        <Link href="/category/female">
          <p className="font-semibold">Female</p>
        </Link>
        <Link href="/category/male">
          <p className="font-semibold">Male</p>
        </Link>
        <Link href="/category/kids">
          <p className="font-semibold">Kids</p>
        </Link>
        <Link href="/products">
          <p className="font-semibold">All Products</p>
        </Link>
     
    </div>
    <div>
      <Input placeholder="Search Products" className="h-8" />
    </div>
    <div className="w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative">
      <div className="w-4 h-4 rounded-full flex justify-center items-center bg-red-500 absolute right-1 top-0">
        <p className="text-white text-xs">0</p>
      </div>
      <ShoppingCart />
    </div>
  </div>
  )
}

export default Header