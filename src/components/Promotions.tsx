import Image from 'next/image'
import React from 'react'

function Promotions() {
  return (
    <div>
        <div className='promo-subtitle mt-8'>
            <div className='text-center'>
            <span>PROMOTIONS</span>
            </div>
            <h2>Our Promotions Events</h2>

        </div>
        <div className='promotion grid grid-cols-2 gap-10 mt-8'>
            <div className='col1 flex flex-col gap-6'>
                <div className='card1' style={{background:"#d6d6d8",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                    <div >
                        <h3 style={{fontWeight:"700",fontSize:"1.75rem",lineHeight:"35px"}}>GET UP TO 60%</h3 >
                        <p style={{fontWeight:"400",fontSize:"1.125rem",lineHeight:"23px"}}>For the summer Season</p>
                    </div>
                    <Image
                    alt=''
                    src={"/images/event1.png"}
                    width={260}
                    height={200}
                    />

                </div>
                <div className='card2 flex flex-col items-center justify-center  text-white ' style={{padding:"3rem 2rem 2rem",background:"#212121"}}>
                    <h3 className='font-extrabold text-3xl leading-10 mb-1'>GET 30% Off</h3>
                    <p className='font-normal	text-sm leading-5'>USE PROMO CODE</p>
                    <button >DINEWEEKENDSALE</button>
                </div>
            </div>
            <div className='col2 flex justify-spacebetween gap-5 '>
                <div className='c2card1 flex flex-col items-baseline pt-1.5' style={{background:"#efe1c7"}}>
                    <div className='pl-5'>
                    <p>Flex Sweatshirt</p>
                    <span>
                       <del> $100.00</del>
                    </span>
                    <span className='font-semibold	text-lg	 leading-6	pl-1'>$75.00</span>
                    </div>
                    <Image alt='' src={"/images/event2.png"} width={280} height={340}/>

                </div>
                <div className='c2card2 flex flex-col items-baseline pt-1.5' style={{background:"#d7d7d9"}}>
                    <div className='pl-5 '>
                    <p>Flex Sweatshirt</p>
                    <span>
                       <del> $225.00</del>
                    </span>
                    <span className='font-semibold	text-lg	 leading-6 pl-1	'>$190.00</span>
                    </div>
                    <Image alt='' src={"/images/event3.png"} width={280} height={340}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Promotions