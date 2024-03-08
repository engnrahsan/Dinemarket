import React from 'react'
import pic from "/public/images/event5.png"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
function Productscard(props: { title: string, price: number, img: StaticImageData,category:string,id:number }) {
    return (
        <Link href={`/products/${props.id}`}>
        <div>
              
            <div className='mt-5' >
                <Image style={{width:"380px",height:"400px"}}  alt="" src={props.img} />

                <div className='font-bold text-lg'>{props.title}</div>
                <div className='font-bold text-lg'>{props.price}</div>
                <div className='font-bold text-lg'>{props.category}</div>
            </div>
          


        </div>
        </Link>
    )
}

export default Productscard