'use client';
import { ProductType } from '@/interfaces'
import React, { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CustomImage from '../image/customImage';

const Product: FC< {product:ProductType}> = ({product}) => {
    console.log(product);
    
  return (
        <Link href={`products/${product.id}`} className="h-[395px] flex flex-col bg-gray-100 p-6 rounded-lg group hover:scale-105 transition-transform  
          ease-out  duration-200 bprder">
         <div className=' relative max-h-80 flex-1'>
          <CustomImage product={product} fill/>
          {/* <img src={product.image} width={150} alt="" /> */}
         </div>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {product.category}
          </h3>
       <div className=' font-semibold flex items-center justify-between mt-4 mb-1'>
           <p className='w-44 truncate'>{product.title}</p>
           <p className=''>${product.price}</p>
       </div>
          <p className="leading-relaxed text-base line-clamp-3">
            {product.description}
          </p>
        </Link>
  )
}

export default Product