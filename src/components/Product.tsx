import Image from 'next/image'
import React from 'react'

function Product() {
  return (
    <div>
        <div className='promo-subtitle mt-8'>
            <div className='text-center'>
            <span>PRODUCTS</span>
            </div>
            <h2>Check What We Have</h2>

        </div>

        <div className='grid grid-cols-3 mt-8'>
            <div className='pro-card1' style={{zIndex:"1"}}>
                <Image alt="" src={"/images/event5.png" } width={400} height={400}/>
                <p className="product-name">Brushed Raglan Sweatshirt</p>
                <p className="product-price">$195</p>

            </div>
            <div className='pro-card1' style={{zIndex:"2"}}>
                <Image alt="" src={"/images/event4.png" } width={400} height={400}/>
                <p className="product-name">Brushed Raglan Sweatshirt</p>
                <p className="product-price">$195</p>

            </div>
            <div className='pro-card1' style={{zIndex:"3"}}>
                <Image alt="" src={"/images/event6.png" } width={400} height={400}/>
                <p className="product-name">Brushed Raglan Sweatshirt</p>
                <p className="product-price">$195</p>

            </div>
            
        </div>
    </div>
  )
}

export default Product