import { allproducts } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";


const getproductDetail=(id:number)=>{
    return allproducts.filter((product)=>product.id == id)
}

export default function Page({ params }: { params: { id: number } }) {

    const result =getproductDetail(params.id) 
    return <div>
        <div className='row'>
        <div className='  mt-5 py-5'>
        {  result.map((product) =>(

        <div key={product.id} className="flex justify-center gap-5"> 
            <Image width={583} height={626} src={product.image } alt="" />
            <div>
            <h1 className="text-5xl">{product.name}</h1>
            <div className="mt-10" >
            <h3 className="text-2xl">Select Size</h3>
            <div className="flex justify-evenly gap-15 mt-5 mysizes">
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            </div>
           </div>
           <div className="flex justify-spacebetween items-center gap-5">
            <h3 className="text-bold">
                Quantity:
            </h3>
            <button style={{borderRadius:"50%",border:"1px solid gray",padding:"10px",background:"gray"}}>-</button>
            <h5>1</h5>
            <button style={{borderRadius:"50%",border:"1px solid gray",padding:"10px",background:"gray"}}>+</button>
           </div>
           <div className="mycartbtn mt-10 flex gap-5 items-center">
            <button>Add tO cart</button>
            <h4 className="text-bold ">{product.price}</h4>
           </div>

           </div>
          
        </div>
        

           ))}
           
           </div>
           </div>
        </div>
  }