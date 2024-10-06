"use client";
import bestSeller from "@/app/jsFiles/BestSeller";
import { useParams } from "next/navigation";
import React from "react";

const ProductView = () => {
  const { name } = useParams(); 
    console.log(name,'name')
  const product = bestSeller.find((product) => product.name === name);

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <div className="flex  justify-center items-center h-96">
      <div className="w-4/6 flex items-center ">
      <div className="p-4  border-2">
      <img src={product.imageUrl} alt={product.name} className="w-64 h-64"/></div>
      <h1 className="text-2xl font-bold ml-4"> {product.name}</h1>
      </div>
    </div>
  );
};

export default ProductView;
