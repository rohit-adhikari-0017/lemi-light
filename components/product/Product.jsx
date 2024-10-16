"use client";
import React from "react";
import Image from "next/image";
import { ProductData } from "@/data/productData/ProductData";
import Link from "next/link";

const Product = () => {
  // console.log(ProductData);
  return (
    <>
      {/* Product Container */}
      <div className={`mainContainer py-14`}>
        {/* Product Item Wrapper */}
        <div className="flex flex-wrap justify-between items-center gap-5 bg-gray-100 md:justify-around sm:justify-center">
          {/* Product Items */}
          {ProductData.map((data, i) => {
            return (
              <>
                <div className="w-80 h-80 border border-gray-500">
                  <div>
                    <Link href="./icon1">
                      <Image
                        src={data.image}
                        width="100%"
                        height="300px"
                      ></Image>
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-center mt-2">
                      {data.title}
                    </h1>
                    <p className="text-center">{data.para}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
