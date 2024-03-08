import React from 'react'
import { allproducts } from '@/utils/mock'
import Image, { StaticImageData } from 'next/image'
import Productscard from '@/components/Productscard'

function Products() {
  return (
    <div>
        <div className='row'>
        <div className='grid grid-cols-3 flex justify-evenly mt-5 py-5'>
        {  allproducts.map((product) =>(

         <Productscard 
        
         key={product.id}
         title={product.name}
         price={product.price}
         category={product.category}
         id={product.id}
         img={product.image as StaticImageData}

          />

           ))}
           </div>
           </div>
    </div>
  )
}

export default Products