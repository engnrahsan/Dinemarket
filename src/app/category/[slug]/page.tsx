import { allproducts } from "@/utils/mock";
import Productscard from "@/components/Productscard";
import { StaticImageData } from "next/image";


const getproductbycategory=(category:string)=>{
    return allproducts.filter((product)=>product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {

    const result =getproductbycategory(params.slug)
    return <div>
        <div className='row'>
        <div className='grid grid-cols-3 flex justify-evenly mt-5 py-5'>
        {  result.map((product) =>(

         <Productscard 
        
         key={product.id}
         title={product.name}
         price={product.price}
         category={product.category}
         id={product.id}
         img={product.image as StaticImageData }

          />

           ))}
           </div>
           </div>
        </div>
  }