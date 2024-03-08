import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Section3() {
  return (
    <div>
        <div className='sec3row1 mt-20'>
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
       
        </div>
        <div className='row sec3row2'>
        <div className='grid grid-cols-4 sec3cols4'>
            <div className='sec3col1 flex flex-col justify-center gap-10 w-3/5	'>
            <div>
            <h3>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            </div>

            <div className='sec3col1 flex flex-col justify-center gap-10 w-3/5	'>
            <div>
            <h3>Using Good Quality Materials</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            <div>
            <h3>Modern Fashion Design</h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            </div>

            <div>
                <Image alt="" src={"/images/event7.png"} width={300} height={350}/>
            </div>
            <div className='sec3col4 flex flex-col gap-6 ml-6 w-4/6	'>
            <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={"/products"} >
            <button className="btn" type="button">See All Product</button>
            </Link>
            </div>
            

        </div>
       

        </div> 
    </div>
  )
}

export default Section3